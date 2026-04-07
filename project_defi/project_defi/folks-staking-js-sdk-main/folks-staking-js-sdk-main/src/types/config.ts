import type { Address, Chain } from "viem";

export type Config = {
  stakingContractAddress: Address;
  folksTokenAddress: Address;
  chain: Chain;
};
