import { getContract, parseSignature } from "viem";
import { waitForTransactionReceipt } from "viem/actions";

import { FolksStakingAbi } from "../constants/abi/folks-staking-abi.js";
import { FolksTokenAbi } from "../constants/abi/folks-token-abi.js";
import { DEFAULT_PERMIT_VALIDITY_SECONDS, PERMIT_TYPES } from "../constants/permit.js";
import { FolksCore } from "../modules/folks-core.js";

import { getEVMSignerAccount, getEVMSignerAddress } from "./chain.js";

import type { GetReadContractReturnType } from "../types/contract.js";
import type { Client, GetContractReturnType, Hex, Address } from "viem";

export function getFolksTokenContractReadonly(): GetReadContractReturnType<typeof FolksTokenAbi> {
  const address = FolksCore.getConfig().folksTokenAddress;
  return getContract({
    abi: FolksTokenAbi,
    address,
    client: { public: FolksCore.getProvider() },
  });
}

export function getFolksTokenContract(): GetContractReturnType<typeof FolksTokenAbi, Client> {
  const address = FolksCore.getConfig().folksTokenAddress;
  return getContract({
    abi: FolksTokenAbi,
    address,
    client: { wallet: FolksCore.getSigner(), public: FolksCore.getProvider() },
  });
}

export function getFolksStakingContractReadonly(): GetReadContractReturnType<typeof FolksStakingAbi> {
  const address = FolksCore.getConfig().stakingContractAddress;
  return getContract({
    abi: FolksStakingAbi,
    address,
    client: { public: FolksCore.getProvider() },
  });
}

export function getFolksStakingContract(): GetContractReturnType<typeof FolksStakingAbi, Client> {
  const address = FolksCore.getConfig().stakingContractAddress;
  return getContract({
    abi: FolksStakingAbi,
    address,
    client: { wallet: FolksCore.getSigner(), public: FolksCore.getProvider() },
  });
}

export async function sendERC20Approve(spender: Address, amount: bigint): Promise<Hex | null> {
  const signer = FolksCore.getSigner();
  const token = getFolksTokenContract();
  const allowance = await token.read.allowance([getEVMSignerAddress(signer), spender]);

  // approve if not enough
  if (allowance < amount) {
    await token.simulate.approve([spender, amount], {
      account: getEVMSignerAccount(signer).address,
      chain: signer.chain,
    });
    const hash = await token.write.approve([spender, amount], {
      account: getEVMSignerAccount(signer),
      chain: signer.chain,
    });
    const { transactionHash } = await waitForTransactionReceipt(FolksCore.getProvider(), {
      hash,
    });
    return transactionHash;
  }
  return null;
}

export async function signERC20Permit(
  spender: Address,
  amount: bigint,
  deadline?: bigint,
): Promise<{
  r: Hex;
  s: Hex;
  v: number;
  deadline: bigint;
  owner: Address;
}> {
  const signer = FolksCore.getSigner();
  const token = getFolksTokenContractReadonly();
  const owner = getEVMSignerAddress(signer);
  const permitDeadline = deadline ?? BigInt(Math.floor(Date.now() / 1000) + DEFAULT_PERMIT_VALIDITY_SECONDS);

  const nonce = await token.read.nonces([owner]);
  const [, name, version, chainId, verifyingContract] = await token.read.eip712Domain();

  const message = {
    owner,
    spender,
    value: amount,
    nonce,
    deadline: permitDeadline,
  } as const;

  const signature = await signer.signTypedData({
    account: getEVMSignerAccount(signer),
    domain: { name, version, chainId, verifyingContract },
    types: PERMIT_TYPES,
    primaryType: "Permit",
    message,
  });

  const { r, s, v } = parseSignature(signature);

  if (!v) throw new Error("Invalid signature");

  return { r, s, v: Number(v), deadline: permitDeadline, owner };
}
