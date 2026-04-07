export type StakingPeriod = Readonly<{
  cap: bigint;
  capUsed: bigint;
  stakingDurationSeconds: bigint;
  unlockDurationSeconds: bigint;
  aprBps: number;
  isActive: boolean;
}>;

export type UserStake = Readonly<{
  amount: bigint;
  reward: bigint;
  claimedAmount: bigint;
  claimedReward: bigint;
  aprBps: number;
  stakeTime: bigint;
  unlockTime: bigint;
  unlockDuration: bigint;
}>;
