import { getAddress, zeroAddress } from "viem";

import { getEVMSignerAccount } from "../utils/chain.js";
import {
  getFolksStakingContract,
  getFolksStakingContractReadonly,
  sendERC20Approve,
  signERC20Permit,
} from "../utils/contract.js";

import { FolksCore } from "./folks-core.js";

import type { StakingPeriod, UserStake } from "../types/staking.js";
import type { Hex, Address } from "viem";

export const read = {
  async getStakingPeriods(): Promise<ReadonlyArray<StakingPeriod>> {
    const staking = getFolksStakingContractReadonly();
    return await staking.read.getStakingPeriods();
  },

  async getUserStakes(address: Address): Promise<ReadonlyArray<UserStake>> {
    const staking = getFolksStakingContractReadonly();
    return await staking.read.getUserStakes([address]);
  },

  async getClaimable(address: Address, stakeIndex: number): Promise<bigint> {
    const staking = getFolksStakingContractReadonly();
    return await staking.read.getClaimable([address, stakeIndex]);
  },

  async activeTotalStaked(): Promise<bigint> {
    const staking = getFolksStakingContractReadonly();
    return await staking.read.activeTotalStaked();
  },

  async activeTotalRewards(): Promise<bigint> {
    const staking = getFolksStakingContractReadonly();
    return await staking.read.activeTotalRewards();
  },

  async isPaused(): Promise<boolean> {
    const staking = getFolksStakingContractReadonly();
    return await staking.read.paused();
  },
};

export const write = {
  async stake(
    periodIndex: number,
    amount: bigint,
    maxStakingDurationSeconds: bigint,
    maxUnlockDurationSeconds: bigint,
    minAprBps: number,
    referrer?: Address,
  ): Promise<Hex> {
    referrer ??= getAddress(zeroAddress);

    const signer = FolksCore.getSigner();
    const staking = getFolksStakingContract();
    await sendERC20Approve(getAddress(staking.address), amount);

    const params = [
      periodIndex,
      amount,
      {
        maxStakingDurationSeconds,
        maxUnlockDurationSeconds,
        minAprBps,
        referrer,
      },
    ] as const;

    await staking.simulate.stake(params, {
      account: getEVMSignerAccount(signer).address,
      chain: signer.chain,
    });

    return await staking.write.stake(params, {
      account: getEVMSignerAccount(signer),
      chain: signer.chain,
    });
  },

  async stakeWithPermit(
    periodIndex: number,
    amount: bigint,
    maxStakingDurationSeconds: bigint,
    maxUnlockDurationSeconds: bigint,
    minAprBps: number,
    referrer?: Address,
    permitDeadline?: bigint,
  ): Promise<Hex> {
    referrer ??= getAddress(zeroAddress);

    const signer = FolksCore.getSigner();
    const staking = getFolksStakingContract();
    const { r, s, v, deadline } = await signERC20Permit(getAddress(staking.address), amount, permitDeadline);

    const params = [
      periodIndex,
      amount,
      {
        maxStakingDurationSeconds,
        maxUnlockDurationSeconds,
        minAprBps,
        referrer,
      },
      deadline,
      v,
      r,
      s,
    ] as const;

    await staking.simulate.stakeWithPermit(params, {
      account: getEVMSignerAccount(signer).address,
      chain: signer.chain,
    });

    return await staking.write.stakeWithPermit(params, {
      account: getEVMSignerAccount(signer),
      chain: signer.chain,
    });
  },

  async withdraw(stakeIndex: number): Promise<Hex> {
    const signer = FolksCore.getSigner();
    const staking = getFolksStakingContract();

    const params = [stakeIndex] as const;

    await staking.simulate.withdraw(params, {
      account: getEVMSignerAccount(signer).address,
      chain: signer.chain,
    });

    return await staking.write.withdraw(params, {
      account: getEVMSignerAccount(signer),
      chain: signer.chain,
    });
  },
};
