import { getAddress } from "viem";

import type { Account, Address, WalletClient } from "viem";

export function getEVMSignerAddress(signer: WalletClient): Address {
  if (signer.account?.address) {
    return getAddress(signer.account.address);
  }

  throw new Error("EVM Signer address is not set");
}

export function getEVMSignerAccount(signer: WalletClient): Account {
  if (signer.account) {
    return signer.account;
  }

  throw new Error("EVM Signer account is not set");
}
