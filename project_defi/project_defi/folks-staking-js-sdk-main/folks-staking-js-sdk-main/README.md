# @folks-finance/folks-staking-sdk

[![License: MIT][license-image]][license-url]
[![CI][ci-image]][ci-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

JavaScript SDK for Folks staking.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
    - [Package manager](#package-manager)
  - [SDK Structure and Usage](#sdk-structure-and-usage)
  - [Usage](#usage)

## Getting Started

### Installation

#### Package manager

Using npm:

```bash
npm install @folks-finance/folks-staking-sdk
```

Using yarn:

```bash
yarn add @folks-finance/folks-staking-sdk
```

Using pnpm:

```bash
pnpm add @folks-finance/folks-staking-sdk
```

Using bun:

```bash
bun add @folks-finance/folks-staking-sdk
```

### SDK Structure and Usage

Initialize `FolksCore` before calling any other method. It accepts an optional `Config` object — if omitted, it defaults to the testnet configuration.

```ts
import { FolksCore, FolksStaking, CONFIG } from "@folks-finance/folks-staking-sdk";

// Use default testnet config
FolksCore.init();

// Or pass a custom config (e.g. mainnet once deployed)
FolksCore.init(CONFIG.TESTNET);
```

For write operations, also set a signer:

```ts
import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { bscTestnet } from "viem/chains";

const signer = createWalletClient({
  account: privateKeyToAccount("0x..."),
  chain: bscTestnet,
  transport: http(),
});

FolksCore.setSigner(signer);
```

SDK main component `FolksStaking` contains such methods:

1. Read state (`read`):
   - `getStakingPeriods()`
   - `getUserStakes(address)`
   - `getClaimable(address, stakeIndex)`
   - `activeTotalStaked()`
   - `activeTotalRewards()`
   - `isPaused()`
2. Submit transactions (`write`):
   - `stake(periodIndex, amount, maxStakingDurationSeconds, maxUnlockDurationSeconds, minAprBps, referrer?)`
   - `stakeWithPermit(periodIndex, amount, maxStakingDurationSeconds, maxUnlockDurationSeconds, minAprBps, referrer?, permitDeadline?)`
   - `withdraw(stakeIndex)`

`stakeWithPermit` is implemented according to [ERC-2612](https://eips.ethereum.org/EIPS/eip-2612), which allows users to submit only one transaction on chain. `stake` uses an approval transaction.

`referrer` is an optional field.

`permitDeadline` is an optional field (by default, the permit expires in 20 minutes).

### Usage

Examples provided in [`./examples`](./examples) folder.

[license-image]: https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[ci-image]: https://img.shields.io/github/actions/workflow/status/Folks-Finance/folks-staking-sdk/lint-and-typecheck.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/Folks-Finance/folks-staking-js-sdk/actions/workflows/lint-and-typecheck.yml
[npm-image]: https://img.shields.io/npm/v/@folks-finance/folks-staking-sdk.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@folks-finance/folks-staking-sdk
[downloads-image]: https://img.shields.io/npm/dm/@folks-finance/folks-staking-sdk.svg?style=flat-square
