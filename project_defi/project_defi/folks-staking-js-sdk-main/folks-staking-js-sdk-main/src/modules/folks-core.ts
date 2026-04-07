import { createPublicClient, http } from "viem";

import { CONFIG } from "../constants/config.js";

import type { Config } from "../types/config.js";
import type { PublicClient, WalletClient } from "viem";

export class FolksCore {
  private static instance: FolksCore | undefined;

  private config: Config;
  private provider: PublicClient;
  private signer: WalletClient | undefined;

  private constructor(config: Config, provider?: PublicClient) {
    this.config = config;
    this.provider = provider ?? createPublicClient({ chain: config.chain, transport: http() });
  }

  static init(config: Config = CONFIG.TESTNET, provider?: PublicClient): FolksCore {
    if (FolksCore.instance) {
      throw new Error("FolksCore is already initialized");
    }
    FolksCore.instance = new FolksCore(config, provider);
    return FolksCore.instance;
  }

  static isInitialized(): boolean {
    return !!FolksCore.instance;
  }

  static getInstance(): FolksCore {
    if (FolksCore.instance) {
      return FolksCore.instance;
    }

    throw new Error("FolksCore is not initialized");
  }

  static setProvider(provider: PublicClient) {
    const instance = FolksCore.getInstance();
    instance.provider = provider;
  }

  static setSigner(signer: WalletClient) {
    const instance = FolksCore.getInstance();
    instance.signer = signer;
  }

  static setConfig(config: Config) {
    const instance = FolksCore.getInstance();
    instance.config = config;
  }

  static getProvider(): PublicClient {
    const instance = FolksCore.getInstance();
    return instance.provider;
  }

  static getSigner(): WalletClient {
    const instance = FolksCore.getInstance();
    if (!instance.signer) {
      throw new Error("Signer is not initialized");
    }
    return instance.signer;
  }

  static getConfig() {
    const instance = FolksCore.getInstance();
    return instance.config;
  }
}
