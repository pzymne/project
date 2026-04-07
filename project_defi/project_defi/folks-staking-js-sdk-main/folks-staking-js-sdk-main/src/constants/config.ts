import { getAddress } from "viem";
import { bscTestnet } from "viem/chains";

import type { Config } from "../types/config.js";

export const CONFIG: { TESTNET: Config } = {
  TESTNET: {
    stakingContractAddress: getAddress("0x9eEF21ae54da5d1Ab87cebAa5A4045e55C41803e"),
    folksTokenAddress: getAddress("0x090972399c8DFfFa24690b7a21B6C48630d8703d"),
    chain: bscTestnet,
  },
} as const;
