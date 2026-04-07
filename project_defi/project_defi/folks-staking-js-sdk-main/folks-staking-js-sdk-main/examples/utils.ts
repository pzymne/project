import { createWalletClient, custom } from "viem";
import { privateKeyToAccount } from "viem/accounts";

import { FolksCore } from "../src/index.js";

import type { Hex } from "viem";

export function getEVMSigner() {
  const PRIVATE_KEY = process.env.PRIVATE_KEY;
  if (!PRIVATE_KEY) throw new Error("Failed to get private key from .env");

  const account = privateKeyToAccount(PRIVATE_KEY as Hex);
  const provider = FolksCore.getProvider();
  return createWalletClient({
    account,
    transport: custom(provider.transport),
    chain: provider.chain,
  });
}
