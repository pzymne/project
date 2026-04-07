import { FolksStaking, FolksCore } from "../src/index.js";

async function main() {
  FolksCore.init();

  const activeTotalStaked = await FolksStaking.read.activeTotalStaked();
  console.log(`Active total staked: ${activeTotalStaked}`);

  const activeTotalRewards = await FolksStaking.read.activeTotalRewards();
  console.log(`Active total rewards: ${activeTotalRewards}`);

  const stakingPeriods = await FolksStaking.read.getStakingPeriods();
  console.log(`Staking periods amount: ${stakingPeriods.length}`);
}

main().catch(console.error);
