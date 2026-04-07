import { FolksCore, FolksStaking } from "../src/index.js";

import { getEVMSigner } from "./utils.js";

async function main() {
  FolksCore.init();
  const signer = getEVMSigner();
  FolksCore.setSigner(signer);

  const isPaused = await FolksStaking.read.isPaused();
  if (isPaused) throw new Error("Paused");

  const stakingPeriods = await FolksStaking.read.getStakingPeriods();

  console.log("Staking periods:");
  console.log(stakingPeriods);

  // Choose period to stake
  const periodIndex = 0;
  // Set amount
  const amount = 1_000_000n; // 1 FOLKS (6 decimals)

  const period = stakingPeriods[periodIndex];
  if (!period) throw new Error("Staking period not found");

  const txHash = await FolksStaking.write.stakeWithPermit(
    periodIndex,
    amount,
    period.stakingDurationSeconds,
    period.unlockDurationSeconds,
    period.aprBps,
  );

  console.log(`Tx hash: ${txHash}`);
}

main().catch(console.error);
