export const FolksStakingAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_admin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_pauser",
        type: "address",
        internalType: "address",
      },
      {
        name: "_token",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "DEFAULT_ADMIN_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MANAGER_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MAX_STAKES_PER_USER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MIGRATOR_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "PAUSER_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "TOKEN",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "acceptDefaultAdminTransfer",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "activeTotalRewards",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "activeTotalStaked",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addStakingPeriod",
    inputs: [
      {
        name: "_cap",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_stakingDurationSeconds",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_unlockDurationSeconds",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_aprBps",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "_isActive",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "beginDefaultAdminTransfer",
    inputs: [
      {
        name: "newAdmin",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cancelDefaultAdminTransfer",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "changeDefaultAdminDelay",
    inputs: [
      {
        name: "newDelay",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "defaultAdmin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "defaultAdminDelay",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "defaultAdminDelayIncreaseWait",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getClaimable",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
      {
        name: "stakeIndex",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleAdmin",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getStakingPeriod",
    inputs: [
      {
        name: "periodIndex",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IStakingV1.StakingPeriod",
        components: [
          {
            name: "cap",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "capUsed",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "stakingDurationSeconds",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "unlockDurationSeconds",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "aprBps",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "isActive",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getStakingPeriods",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IStakingV1.StakingPeriod[]",
        components: [
          {
            name: "cap",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "capUsed",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "stakingDurationSeconds",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "unlockDurationSeconds",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "aprBps",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "isActive",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getUserStake",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
      {
        name: "stakeIndex",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IStakingV1.UserStake",
        components: [
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "reward",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "claimedAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "claimedReward",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "aprBps",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "stakeTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "unlockTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "unlockDuration",
            type: "uint64",
            internalType: "uint64",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getUserStakes",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IStakingV1.UserStake[]",
        components: [
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "reward",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "claimedAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "claimedReward",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "aprBps",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "stakeTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "unlockTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "unlockDuration",
            type: "uint64",
            internalType: "uint64",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "grantRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "hasRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "migratePositionsFrom",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IStakingV1.UserStake[]",
        components: [
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "reward",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "claimedAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "claimedReward",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "aprBps",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "stakeTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "unlockTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "unlockDuration",
            type: "uint64",
            internalType: "uint64",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "migrationPermits",
    inputs: [
      {
        name: "migrator",
        type: "address",
        internalType: "address",
      },
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "isAuthorized",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingDefaultAdmin",
    inputs: [],
    outputs: [
      {
        name: "newAdmin",
        type: "address",
        internalType: "address",
      },
      {
        name: "schedule",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingDefaultAdminDelay",
    inputs: [],
    outputs: [
      {
        name: "newDelay",
        type: "uint48",
        internalType: "uint48",
      },
      {
        name: "schedule",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "recoverERC20",
    inputs: [
      {
        name: "tokenAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "rollbackDefaultAdminDelay",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMigrationPermit",
    inputs: [
      {
        name: "_migrator",
        type: "address",
        internalType: "address",
      },
      {
        name: "_isMigrationPermitted",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "stake",
    inputs: [
      {
        name: "periodIndex",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "params",
        type: "tuple",
        internalType: "struct IStakingV1.StakeParams",
        components: [
          {
            name: "maxStakingDurationSeconds",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "maxUnlockDurationSeconds",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "minAprBps",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "referrer",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "stakeWithPermit",
    inputs: [
      {
        name: "periodIndex",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "params",
        type: "tuple",
        internalType: "struct IStakingV1.StakeParams",
        components: [
          {
            name: "maxStakingDurationSeconds",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "maxUnlockDurationSeconds",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "minAprBps",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "referrer",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "stakingPeriods",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "cap",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "capUsed",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "stakingDurationSeconds",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "unlockDurationSeconds",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "aprBps",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "isActive",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "unpause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateStakingPeriod",
    inputs: [
      {
        name: "periodIndex",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "_cap",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_stakingDurationSeconds",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_unlockDurationSeconds",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_aprBps",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "_isActive",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "userStakes",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "reward",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "claimedAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "claimedReward",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "aprBps",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "stakeTime",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "unlockTime",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "unlockDuration",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [
      {
        name: "stakeIndex",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "DefaultAdminDelayChangeCanceled",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "DefaultAdminDelayChangeScheduled",
    inputs: [
      {
        name: "newDelay",
        type: "uint48",
        indexed: false,
        internalType: "uint48",
      },
      {
        name: "effectSchedule",
        type: "uint48",
        indexed: false,
        internalType: "uint48",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "DefaultAdminTransferCanceled",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "DefaultAdminTransferScheduled",
    inputs: [
      {
        name: "newAdmin",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "acceptSchedule",
        type: "uint48",
        indexed: false,
        internalType: "uint48",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MigratedFrom",
    inputs: [
      {
        name: "migrator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "migratedCount",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
      {
        name: "unclaimedUserAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "unclaimedUserRewards",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MigrationPermitUpdated",
    inputs: [
      {
        name: "migrator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "isMigrationPermitted",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Recovered",
    inputs: [
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "recipient",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleAdminChanged",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "previousAdminRole",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "newAdminRole",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleGranted",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleRevoked",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Staked",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "periodIndex",
        type: "uint8",
        indexed: true,
        internalType: "uint8",
      },
      {
        name: "referrer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "stakeIndex",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "reward",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StakingPeriodAdded",
    inputs: [
      {
        name: "periodIndex",
        type: "uint8",
        indexed: true,
        internalType: "uint8",
      },
      {
        name: "cap",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "stakingDurationSeconds",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
      {
        name: "unlockDurationSeconds",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
      {
        name: "aprBps",
        type: "uint32",
        indexed: false,
        internalType: "uint32",
      },
      {
        name: "isActive",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StakingPeriodUpdated",
    inputs: [
      {
        name: "periodIndex",
        type: "uint8",
        indexed: true,
        internalType: "uint8",
      },
      {
        name: "cap",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "stakingDurationSeconds",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
      {
        name: "unlockDurationSeconds",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
      {
        name: "aprBps",
        type: "uint32",
        indexed: false,
        internalType: "uint32",
      },
      {
        name: "isActive",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Withdrawn",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "stakeIndex",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "reward",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AccessControlBadConfirmation",
    inputs: [],
  },
  {
    type: "error",
    name: "AccessControlEnforcedDefaultAdminDelay",
    inputs: [
      {
        name: "schedule",
        type: "uint48",
        internalType: "uint48",
      },
    ],
  },
  {
    type: "error",
    name: "AccessControlEnforcedDefaultAdminRules",
    inputs: [],
  },
  {
    type: "error",
    name: "AccessControlInvalidDefaultAdmin",
    inputs: [
      {
        name: "defaultAdmin",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "AccessControlUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
      {
        name: "neededRole",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
  {
    type: "error",
    name: "AlreadyWithdrawn",
    inputs: [
      {
        name: "stakeIndex",
        type: "uint8",
        internalType: "uint8",
      },
    ],
  },
  {
    type: "error",
    name: "CannotStakeZero",
    inputs: [],
  },
  {
    type: "error",
    name: "EnforcedPause",
    inputs: [],
  },
  {
    type: "error",
    name: "ExpectedPause",
    inputs: [],
  },
  {
    type: "error",
    name: "MaxStakingPeriodsReached",
    inputs: [],
  },
  {
    type: "error",
    name: "MaxUserStakesReached",
    inputs: [
      {
        name: "maxStakes",
        type: "uint8",
        internalType: "uint8",
      },
    ],
  },
  {
    type: "error",
    name: "MigratorNotFound",
    inputs: [
      {
        name: "migrator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "MigratorNotPermitted",
    inputs: [
      {
        name: "migrator",
        type: "address",
        internalType: "address",
      },
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "NotEnoughBalanceToRecover",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "toRecover",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "maxToRecover",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "NotEnoughContractBalance",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "balance",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "requiredBalance",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "PeriodNotFound",
    inputs: [],
  },
  {
    type: "error",
    name: "ReentrancyGuardReentrantCall",
    inputs: [],
  },
  {
    type: "error",
    name: "RewardsNotAvailableYet",
    inputs: [
      {
        name: "currentTime",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "availableTime",
        type: "uint64",
        internalType: "uint64",
      },
    ],
  },
  {
    type: "error",
    name: "SafeCastOverflowedUintDowncast",
    inputs: [
      {
        name: "bits",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "StakeNotFound",
    inputs: [],
  },
  {
    type: "error",
    name: "StakingCapReached",
    inputs: [
      {
        name: "cap",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "StakingDurationCannotBeZero",
    inputs: [],
  },
  {
    type: "error",
    name: "StakingPeriodAprDiffer",
    inputs: [
      {
        name: "periodIndex",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "expectedMinApr",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "periodApr",
        type: "uint32",
        internalType: "uint32",
      },
    ],
  },
  {
    type: "error",
    name: "StakingPeriodInactive",
    inputs: [
      {
        name: "periodIndex",
        type: "uint8",
        internalType: "uint8",
      },
    ],
  },
  {
    type: "error",
    name: "StakingPeriodStakingDurationDiffer",
    inputs: [
      {
        name: "periodIndex",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "expectedMaxStakingDuration",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "periodStakingDuration",
        type: "uint64",
        internalType: "uint64",
      },
    ],
  },
  {
    type: "error",
    name: "StakingPeriodUnlockDurationDiffer",
    inputs: [
      {
        name: "periodIndex",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "expectedMaxUnlockDuration",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "periodUnlockDuration",
        type: "uint64",
        internalType: "uint64",
      },
    ],
  },
  {
    type: "error",
    name: "UnlockDurationCannotBeZero",
    inputs: [],
  },
] as const;
