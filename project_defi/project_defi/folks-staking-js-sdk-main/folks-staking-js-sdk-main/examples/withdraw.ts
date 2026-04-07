import { getAddress } from "viem";

import { FolksCore, FolksStaking } from "../src/index.js";

import { getEVMSigner } from "./utils.js";

async function main() {
  FolksCore.init();
  const signer = getEVMSigner();
  FolksCore.setSigner(signer);

  const userAddress = getAddress(signer.account.address);
  const userStakes = await FolksStaking.read.getUserStakes(userAddress);

  console.log("User stakes:");
  console.log(userStakes);

  // Choose stake to withdraw
  const stakeIndex = 1;

  const stake = userStakes[stakeIndex];
  if (!stake) throw new Error("Stake not found");

  const claimable = await FolksStaking.read.getClaimable(userAddress, stakeIndex);
  if (claimable > 0n) {
    const txHash = await FolksStaking.write.withdraw(stakeIndex);
    console.log(`Tx hash: ${txHash}`);
  } else {
    console.log(`Nothing to claim`);
  }
}

main().catch(console.error);
