import { getAddress } from "viem";

import { FolksCore, FolksStaking } from "../src/index.js";

async function main() {
  FolksCore.init();

  const userAddress = getAddress("0x0000000000000000000000000000000000000000");

  const userStakes = await FolksStaking.read.getUserStakes(userAddress);
  console.log(`User stakes amount: ${userStakes.length}`);
  console.log(userStakes);

  for (const [index, stake] of userStakes.entries()) {
    const claimable = await FolksStaking.read.getClaimable(userAddress, index);
    console.log(`Stake #${index}: amount=${stake.amount}, claimable=${claimable}`);
  }
}

main().catch(console.error);
