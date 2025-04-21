"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Arc200Client: () => Arc200Client,
  Arc200Factory: () => Arc200Factory,
  getArc200Client: () => getArc200Client
});
module.exports = __toCommonJS(index_exports);

// contracts/artifacts/Arc200Client.ts
var import_app_arc56 = require("@algorandfoundation/algokit-utils/types/app-arc56");
var import_app_client = require("@algorandfoundation/algokit-utils/types/app-client");
var import_app_factory = require("@algorandfoundation/algokit-utils/types/app-factory");
var APP_SPEC = {
  name: "Arc200",
  structs: {
    ApprovalStruct: [
      { name: "approvalAmount", type: "uint256" },
      { name: "owner", type: "address" },
      { name: "spender", type: "address" }
    ]
  },
  methods: [
    {
      name: "bootstrap",
      args: [
        { type: "byte[]", name: "name" },
        { type: "byte[]", name: "symbol" },
        { type: "uint8", name: "decimals" },
        { type: "uint256", name: "totalSupply" }
      ],
      returns: { type: "bool" },
      actions: { create: [], call: ["NoOp"] },
      readonly: false,
      events: [
        {
          name: "arc200_Transfer",
          args: [
            { type: "address", name: "from" },
            { type: "address", name: "to" },
            { type: "uint256", name: "value" }
          ]
        }
      ],
      recommendations: {}
    },
    {
      name: "arc200_name",
      args: [],
      returns: { type: "byte[32]", desc: "The name of the token" },
      actions: { create: [], call: ["NoOp"] },
      readonly: true,
      desc: "Returns the name of the token",
      events: [],
      recommendations: {}
    },
    {
      name: "arc200_symbol",
      args: [],
      returns: { type: "byte[8]", desc: "The symbol of the token" },
      actions: { create: [], call: ["NoOp"] },
      readonly: true,
      desc: "Returns the symbol of the token",
      events: [],
      recommendations: {}
    },
    {
      name: "arc200_decimals",
      args: [],
      returns: { type: "uint8", desc: "The decimals of the token" },
      actions: { create: [], call: ["NoOp"] },
      readonly: true,
      desc: "Returns the decimals of the token",
      events: [],
      recommendations: {}
    },
    {
      name: "arc200_totalSupply",
      args: [],
      returns: { type: "uint256", desc: "The total supply of the token" },
      actions: { create: [], call: ["NoOp"] },
      readonly: true,
      desc: "Returns the total supply of the token",
      events: [],
      recommendations: {}
    },
    {
      name: "arc200_balanceOf",
      args: [{ type: "address", name: "owner", desc: "The address of the owner of the token" }],
      returns: { type: "uint256", desc: "The current balance of the holder of the token" },
      actions: { create: [], call: ["NoOp"] },
      readonly: true,
      desc: "Returns the current balance of the owner of the token",
      events: [],
      recommendations: {}
    },
    {
      name: "arc200_transfer",
      args: [
        { type: "address", name: "to", desc: "The destination of the transfer" },
        { type: "uint256", name: "value", desc: "Amount of tokens to transfer" }
      ],
      returns: { type: "bool", desc: "Success" },
      actions: { create: [], call: ["NoOp"] },
      readonly: false,
      desc: "Transfers tokens",
      events: [
        {
          name: "arc200_Transfer",
          args: [
            { type: "address", name: "from" },
            { type: "address", name: "to" },
            { type: "uint256", name: "value" }
          ]
        }
      ],
      recommendations: {}
    },
    {
      name: "arc200_transferFrom",
      args: [
        { type: "address", name: "from", desc: "The source of the transfer" },
        { type: "address", name: "to", desc: "The destination of the transfer" },
        { type: "uint256", name: "value", desc: "Amount of tokens to transfer" }
      ],
      returns: { type: "bool", desc: "Success" },
      actions: { create: [], call: ["NoOp"] },
      readonly: false,
      desc: "Transfers tokens from source to destination as approved spender",
      events: [
        {
          name: "arc200_Approval",
          args: [
            { type: "address", name: "owner" },
            { type: "address", name: "spender" },
            { type: "uint256", name: "value" }
          ]
        },
        {
          name: "arc200_Transfer",
          args: [
            { type: "address", name: "from" },
            { type: "address", name: "to" },
            { type: "uint256", name: "value" }
          ]
        }
      ],
      recommendations: {}
    },
    {
      name: "arc200_approve",
      args: [
        { type: "address", name: "spender", desc: "Who is allowed to take tokens on owner's behalf" },
        { type: "uint256", name: "value", desc: "Amount of tokens to be taken by spender" }
      ],
      returns: { type: "bool", desc: "Success" },
      actions: { create: [], call: ["NoOp"] },
      readonly: false,
      desc: "Approve spender for a token",
      events: [
        {
          name: "arc200_Approval",
          args: [
            { type: "address", name: "owner" },
            { type: "address", name: "spender" },
            { type: "uint256", name: "value" }
          ]
        }
      ],
      recommendations: {}
    },
    {
      name: "arc200_allowance",
      args: [
        { type: "address", name: "owner", desc: "Owner's account" },
        { type: "address", name: "spender", desc: "Who is allowed to take tokens on owner's behalf" }
      ],
      returns: { type: "uint256", desc: "The remaining allowance" },
      actions: { create: [], call: ["NoOp"] },
      readonly: true,
      desc: "Returns the current allowance of the spender of the tokens of the owner",
      events: [],
      recommendations: {}
    }
  ],
  arcs: [22, 28],
  desc: "Smart Contract Token Base Interface",
  networks: {},
  state: {
    schema: { global: { ints: 0, bytes: 4 }, local: { ints: 0, bytes: 0 } },
    keys: {
      global: {
        name: { keyType: "AVMString", valueType: "byte[]", key: "bg==", desc: "Name of the asset. Max 32 bytes" },
        symbol: { keyType: "AVMString", valueType: "byte[]", key: "cw==", desc: "Symbol of the asset. Max 8 bytes" },
        decimals: {
          keyType: "AVMString",
          valueType: "uint8",
          key: "ZA==",
          desc: "Decimals of the asset. Recommended is 6 decimal places."
        },
        totalSupply: { keyType: "AVMString", valueType: "uint256", key: "dA==", desc: "Minted supply" }
      },
      local: {},
      box: {}
    },
    maps: {
      global: {},
      local: {},
      box: {
        balances: { keyType: "address", valueType: "uint256", prefix: "Yg==" },
        approvals: { keyType: "byte[32]", valueType: "ApprovalStruct", prefix: "YQ==" }
      }
    }
  },
  bareActions: { create: ["NoOp"], call: [] },
  sourceInfo: {
    approval: {
      sourceInfo: [
        { pc: [589, 706], errorMessage: "Box must have value" },
        { pc: [707], errorMessage: "Index access is out of bounds" },
        { pc: [610], errorMessage: "Insufficient balance at the sender account" },
        { pc: [369], errorMessage: "Name of the asset must be longer or equal to 1 character" },
        { pc: [372], errorMessage: "Name of the asset must be shorter or equal to 32 characters" },
        { pc: [145, 167, 189, 214, 236, 255, 271, 287, 303, 319], errorMessage: "OnCompletion is not NoOp" },
        { pc: [363], errorMessage: "Only deployer of this smart contract can call bootstrap method" },
        { pc: [378], errorMessage: "Symbol of the asset must be longer or equal to 1 character" },
        { pc: [381], errorMessage: "Symbol of the asset must be shorter or equal to 8 characters" },
        { pc: [388], errorMessage: "This method can be called only once" },
        { pc: [352], errorMessage: "can only call when creating" },
        { pc: [148, 170, 192, 217, 239, 258, 274, 290, 306, 322], errorMessage: "can only call when not creating" },
        { pc: [439, 454, 469, 474], errorMessage: "check GlobalState exists" },
        { pc: [514], errorMessage: "insufficient approval" },
        { pc: [447, 462, 675], errorMessage: "invalid size" },
        { pc: [522, 628], errorMessage: "overflow" }
      ],
      pcOffsetMethod: "none"
    },
    clear: { sourceInfo: [], pcOffsetMethod: "none" }
  },
  source: {
    approval: "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYXJjNC9pbmRleC5kLnRzOjpDb250cmFjdC5hcHByb3ZhbFByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBpbnRjYmxvY2sgMSAwIDMyIDgKICAgIGJ5dGVjYmxvY2sgMHgxNTFmN2M3NSAiYiIgInQiIDB4ODAgMHg3OTgzYzM1YyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo1MgogICAgLy8gZXhwb3J0IGNsYXNzIEFyYzIwMCBleHRlbmRzIENvbnRyYWN0IHsKICAgIHR4biBOdW1BcHBBcmdzCiAgICBieiBtYWluX2JhcmVfcm91dGluZ0AxNQogICAgcHVzaGJ5dGVzcyAweDk3NTM4MmUyIDB4NjU3ZDEzZWMgMHhiNmFlMWEyNSAweDg0ZWMxM2Q1IDB4ZWM5OTYwNDEgMHg4MmU1NzNjNCAweGRhNzAyNWI5IDB4NGE5NjhmOGYgMHhiNTQyMjEyNSAweGJiYjMxOWYzIC8vIG1ldGhvZCAiYm9vdHN0cmFwKGJ5dGVbXSxieXRlW10sdWludDgsdWludDI1Nilib29sIiwgbWV0aG9kICJhcmMyMDBfbmFtZSgpYnl0ZVszMl0iLCBtZXRob2QgImFyYzIwMF9zeW1ib2woKWJ5dGVbOF0iLCBtZXRob2QgImFyYzIwMF9kZWNpbWFscygpdWludDgiLCBtZXRob2QgImFyYzIwMF90b3RhbFN1cHBseSgpdWludDI1NiIsIG1ldGhvZCAiYXJjMjAwX2JhbGFuY2VPZihhZGRyZXNzKXVpbnQyNTYiLCBtZXRob2QgImFyYzIwMF90cmFuc2ZlcihhZGRyZXNzLHVpbnQyNTYpYm9vbCIsIG1ldGhvZCAiYXJjMjAwX3RyYW5zZmVyRnJvbShhZGRyZXNzLGFkZHJlc3MsdWludDI1Nilib29sIiwgbWV0aG9kICJhcmMyMDBfYXBwcm92ZShhZGRyZXNzLHVpbnQyNTYpYm9vbCIsIG1ldGhvZCAiYXJjMjAwX2FsbG93YW5jZShhZGRyZXNzLGFkZHJlc3MpdWludDI1NiIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDAKICAgIG1hdGNoIG1haW5fYm9vdHN0cmFwX3JvdXRlQDMgbWFpbl9hcmMyMDBfbmFtZV9yb3V0ZUA0IG1haW5fYXJjMjAwX3N5bWJvbF9yb3V0ZUA1IG1haW5fYXJjMjAwX2RlY2ltYWxzX3JvdXRlQDYgbWFpbl9hcmMyMDBfdG90YWxTdXBwbHlfcm91dGVANyBtYWluX2FyYzIwMF9iYWxhbmNlT2Zfcm91dGVAOCBtYWluX2FyYzIwMF90cmFuc2Zlcl9yb3V0ZUA5IG1haW5fYXJjMjAwX3RyYW5zZmVyRnJvbV9yb3V0ZUAxMCBtYWluX2FyYzIwMF9hcHByb3ZlX3JvdXRlQDExIG1haW5fYXJjMjAwX2FsbG93YW5jZV9yb3V0ZUAxMgoKbWFpbl9hZnRlcl9pZl9lbHNlQDE5OgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjUyCiAgICAvLyBleHBvcnQgY2xhc3MgQXJjMjAwIGV4dGVuZHMgQ29udHJhY3QgewogICAgaW50Y18xIC8vIDAKICAgIHJldHVybgoKbWFpbl9hcmMyMDBfYWxsb3dhbmNlX3JvdXRlQDEyOgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE5NAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjUyCiAgICAvLyBleHBvcnQgY2xhc3MgQXJjMjAwIGV4dGVuZHMgQ29udHJhY3QgewogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE5NAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIGNhbGxzdWIgYXJjMjAwX2FsbG93YW5jZQogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKbWFpbl9hcmMyMDBfYXBwcm92ZV9yb3V0ZUAxMToKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxODIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo1MgogICAgLy8gZXhwb3J0IGNsYXNzIEFyYzIwMCBleHRlbmRzIENvbnRyYWN0IHsKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxODIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIGFyYzIwMF9hcHByb3ZlCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgptYWluX2FyYzIwMF90cmFuc2ZlckZyb21fcm91dGVAMTA6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTY1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NTIKICAgIC8vIGV4cG9ydCBjbGFzcyBBcmMyMDAgZXh0ZW5kcyBDb250cmFjdCB7CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTY1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBhcmMyMDBfdHJhbnNmZXJGcm9tCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgptYWluX2FyYzIwMF90cmFuc2Zlcl9yb3V0ZUA5OgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE1MgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjUyCiAgICAvLyBleHBvcnQgY2xhc3MgQXJjMjAwIGV4dGVuZHMgQ29udHJhY3QgewogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE1MgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgYXJjMjAwX3RyYW5zZmVyCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgptYWluX2FyYzIwMF9iYWxhbmNlT2Zfcm91dGVAODoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxNDAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo1MgogICAgLy8gZXhwb3J0IGNsYXNzIEFyYzIwMCBleHRlbmRzIENvbnRyYWN0IHsKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxNDAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICBjYWxsc3ViIGFyYzIwMF9iYWxhbmNlT2YKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMCAvLyAxCiAgICByZXR1cm4KCm1haW5fYXJjMjAwX3RvdGFsU3VwcGx5X3JvdXRlQDc6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTI5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIGFyYzIwMF90b3RhbFN1cHBseQogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKbWFpbl9hcmMyMDBfZGVjaW1hbHNfcm91dGVANjoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxMTkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgYXJjMjAwX2RlY2ltYWxzCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgptYWluX2FyYzIwMF9zeW1ib2xfcm91dGVANToKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxMDkKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgYXJjMjAwX3N5bWJvbAogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKbWFpbl9hcmMyMDBfbmFtZV9yb3V0ZUA0OgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjk5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIGFyYzIwMF9uYW1lCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgptYWluX2Jvb3RzdHJhcF9yb3V0ZUAzOgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjczCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NTIKICAgIC8vIGV4cG9ydCBjbGFzcyBBcmMyMDAgZXh0ZW5kcyBDb250cmFjdCB7CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyA0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NzMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIGJvb3RzdHJhcAogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKbWFpbl9iYXJlX3JvdXRpbmdAMTU6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NTIKICAgIC8vIGV4cG9ydCBjbGFzcyBBcmMyMDAgZXh0ZW5kcyBDb250cmFjdCB7CiAgICB0eG4gT25Db21wbGV0aW9uCiAgICBibnogbWFpbl9hZnRlcl9pZl9lbHNlQDE5CiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgIQogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBjcmVhdGluZwogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKCi8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo6QXJjMjAwLmJvb3RzdHJhcChuYW1lOiBieXRlcywgc3ltYm9sOiBieXRlcywgZGVjaW1hbHM6IGJ5dGVzLCB0b3RhbFN1cHBseTogYnl0ZXMpIC0+IGJ5dGVzOgpib290c3RyYXA6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NzMtNzQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBwdWJsaWMgYm9vdHN0cmFwKG5hbWU6IER5bmFtaWNCeXRlcywgc3ltYm9sOiBEeW5hbWljQnl0ZXMsIGRlY2ltYWxzOiBVaW50TjgsIHRvdGFsU3VwcGx5OiBVaW50TjI1Nik6IEJvb2wgewogICAgcHJvdG8gNCAxCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NzUKICAgIC8vIGFzc2VydChUeG4uc2VuZGVyID09PSBHbG9iYWwuY3JlYXRvckFkZHJlc3MsICdPbmx5IGRlcGxveWVyIG9mIHRoaXMgc21hcnQgY29udHJhY3QgY2FuIGNhbGwgYm9vdHN0cmFwIG1ldGhvZCcpOwogICAgdHhuIFNlbmRlcgogICAgZ2xvYmFsIENyZWF0b3JBZGRyZXNzCiAgICA9PQogICAgYXNzZXJ0IC8vIE9ubHkgZGVwbG95ZXIgb2YgdGhpcyBzbWFydCBjb250cmFjdCBjYW4gY2FsbCBib290c3RyYXAgbWV0aG9kCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NzYKICAgIC8vIGFzc2VydChuYW1lLmxlbmd0aCA+IDAsICdOYW1lIG9mIHRoZSBhc3NldCBtdXN0IGJlIGxvbmdlciBvciBlcXVhbCB0byAxIGNoYXJhY3RlcicpOwogICAgZnJhbWVfZGlnIC00CiAgICBpbnRjXzEgLy8gMAogICAgZXh0cmFjdF91aW50MTYKICAgIGR1cAogICAgYXNzZXJ0IC8vIE5hbWUgb2YgdGhlIGFzc2V0IG11c3QgYmUgbG9uZ2VyIG9yIGVxdWFsIHRvIDEgY2hhcmFjdGVyCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NzcKICAgIC8vIGFzc2VydChuYW1lLmxlbmd0aCA8PSAzMiwgJ05hbWUgb2YgdGhlIGFzc2V0IG11c3QgYmUgc2hvcnRlciBvciBlcXVhbCB0byAzMiBjaGFyYWN0ZXJzJyk7CiAgICBpbnRjXzIgLy8gMzIKICAgIDw9CiAgICBhc3NlcnQgLy8gTmFtZSBvZiB0aGUgYXNzZXQgbXVzdCBiZSBzaG9ydGVyIG9yIGVxdWFsIHRvIDMyIGNoYXJhY3RlcnMKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo3OAogICAgLy8gYXNzZXJ0KHN5bWJvbC5sZW5ndGggPiAwLCAnU3ltYm9sIG9mIHRoZSBhc3NldCBtdXN0IGJlIGxvbmdlciBvciBlcXVhbCB0byAxIGNoYXJhY3RlcicpOwogICAgZnJhbWVfZGlnIC0zCiAgICBpbnRjXzEgLy8gMAogICAgZXh0cmFjdF91aW50MTYKICAgIGR1cAogICAgYXNzZXJ0IC8vIFN5bWJvbCBvZiB0aGUgYXNzZXQgbXVzdCBiZSBsb25nZXIgb3IgZXF1YWwgdG8gMSBjaGFyYWN0ZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo3OQogICAgLy8gYXNzZXJ0KHN5bWJvbC5sZW5ndGggPD0gOCwgJ1N5bWJvbCBvZiB0aGUgYXNzZXQgbXVzdCBiZSBzaG9ydGVyIG9yIGVxdWFsIHRvIDggY2hhcmFjdGVycycpOwogICAgaW50Y18zIC8vIDgKICAgIDw9CiAgICBhc3NlcnQgLy8gU3ltYm9sIG9mIHRoZSBhc3NldCBtdXN0IGJlIHNob3J0ZXIgb3IgZXF1YWwgdG8gOCBjaGFyYWN0ZXJzCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NjgKICAgIC8vIHB1YmxpYyB0b3RhbFN1cHBseSA9IEdsb2JhbFN0YXRlPFVpbnROMjU2Pih7IGtleTogJ3QnIH0pOwogICAgaW50Y18xIC8vIDAKICAgIGJ5dGVjXzIgLy8gInQiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6ODAKICAgIC8vIGFzc2VydCghdGhpcy50b3RhbFN1cHBseS5oYXNWYWx1ZSwgJ1RoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgb25seSBvbmNlJyk7CiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYnVyeSAxCiAgICAhCiAgICBhc3NlcnQgLy8gVGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBvbmx5IG9uY2UKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo1NgogICAgLy8gcHVibGljIG5hbWUgPSBHbG9iYWxTdGF0ZTxEeW5hbWljQnl0ZXM+KHsga2V5OiAnbicgfSk7CiAgICBwdXNoYnl0ZXMgIm4iCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6ODIKICAgIC8vIHRoaXMubmFtZS52YWx1ZSA9IG5hbWU7CiAgICBmcmFtZV9kaWcgLTQKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NjAKICAgIC8vIHB1YmxpYyBzeW1ib2wgPSBHbG9iYWxTdGF0ZTxEeW5hbWljQnl0ZXM+KHsga2V5OiAncycgfSk7CiAgICBwdXNoYnl0ZXMgInMiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6ODMKICAgIC8vIHRoaXMuc3ltYm9sLnZhbHVlID0gc3ltYm9sOwogICAgZnJhbWVfZGlnIC0zCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjY4CiAgICAvLyBwdWJsaWMgdG90YWxTdXBwbHkgPSBHbG9iYWxTdGF0ZTxVaW50TjI1Nj4oeyBrZXk6ICd0JyB9KTsKICAgIGJ5dGVjXzIgLy8gInQiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6ODQKICAgIC8vIHRoaXMudG90YWxTdXBwbHkudmFsdWUgPSB0b3RhbFN1cHBseTsKICAgIGZyYW1lX2RpZyAtMQogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo2NAogICAgLy8gcHVibGljIGRlY2ltYWxzID0gR2xvYmFsU3RhdGU8VWludE44Pih7IGtleTogJ2QnIH0pOwogICAgcHVzaGJ5dGVzICJkIgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjg1CiAgICAvLyB0aGlzLmRlY2ltYWxzLnZhbHVlID0gZGVjaW1hbHM7CiAgICBmcmFtZV9kaWcgLTIKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6ODYKICAgIC8vIGNvbnN0IHNlbmRlciA9IG5ldyBBZGRyZXNzKFR4bi5zZW5kZXIpOwogICAgdHhuIFNlbmRlcgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjcwCiAgICAvLyBwdWJsaWMgYmFsYW5jZXMgPSBCb3hNYXA8QWRkcmVzcywgVWludE4yNTY+KHsga2V5UHJlZml4OiAnYicgfSk7CiAgICBieXRlY18xIC8vICJiIgogICAgZGlnIDEKICAgIGNvbmNhdAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjg4CiAgICAvLyB0aGlzLmJhbGFuY2VzKHNlbmRlcikudmFsdWUgPSB0b3RhbFN1cHBseTsKICAgIGZyYW1lX2RpZyAtMQogICAgYm94X3B1dAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjkwCiAgICAvLyBlbWl0KG5ldyBhcmMyMDBfVHJhbnNmZXIoeyBmcm9tOiBuZXcgQWRkcmVzcyhHbG9iYWwuemVyb0FkZHJlc3MpLCB0bzogc2VuZGVyLCB2YWx1ZTogdG90YWxTdXBwbHkgfSkpOwogICAgZ2xvYmFsIFplcm9BZGRyZXNzCiAgICBzd2FwCiAgICBjb25jYXQKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBieXRlYyA0IC8vIG1ldGhvZCAiYXJjMjAwX1RyYW5zZmVyKGFkZHJlc3MsYWRkcmVzcyx1aW50MjU2KSIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OTEKICAgIC8vIHJldHVybiBuZXcgQm9vbCh0cnVlKTsKICAgIGJ5dGVjXzMgLy8gMHg4MAogICAgcmV0c3ViCgoKLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjpBcmMyMDAuYXJjMjAwX25hbWUoKSAtPiBieXRlczoKYXJjMjAwX25hbWU6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NTYKICAgIC8vIHB1YmxpYyBuYW1lID0gR2xvYmFsU3RhdGU8RHluYW1pY0J5dGVzPih7IGtleTogJ24nIH0pOwogICAgaW50Y18xIC8vIDAKICAgIHB1c2hieXRlcyAibiIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTAxCiAgICAvLyByZXR1cm4gbmV3IFN0YXRpY0J5dGVzPDMyPih0aGlzLm5hbWUudmFsdWUubmF0aXZlKTsKICAgIGV4dHJhY3QgMiAwCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18yIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgc2l6ZQogICAgcmV0c3ViCgoKLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjpBcmMyMDAuYXJjMjAwX3N5bWJvbCgpIC0+IGJ5dGVzOgphcmMyMDBfc3ltYm9sOgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjYwCiAgICAvLyBwdWJsaWMgc3ltYm9sID0gR2xvYmFsU3RhdGU8RHluYW1pY0J5dGVzPih7IGtleTogJ3MnIH0pOwogICAgaW50Y18xIC8vIDAKICAgIHB1c2hieXRlcyAicyIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTExCiAgICAvLyByZXR1cm4gbmV3IFN0YXRpY0J5dGVzPDg+KHRoaXMuc3ltYm9sLnZhbHVlLm5hdGl2ZSk7CiAgICBleHRyYWN0IDIgMAogICAgZHVwCiAgICBsZW4KICAgIGludGNfMyAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgc2l6ZQogICAgcmV0c3ViCgoKLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjpBcmMyMDAuYXJjMjAwX2RlY2ltYWxzKCkgLT4gYnl0ZXM6CmFyYzIwMF9kZWNpbWFsczoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo2NAogICAgLy8gcHVibGljIGRlY2ltYWxzID0gR2xvYmFsU3RhdGU8VWludE44Pih7IGtleTogJ2QnIH0pOwogICAgaW50Y18xIC8vIDAKICAgIHB1c2hieXRlcyAiZCIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTIxCiAgICAvLyByZXR1cm4gdGhpcy5kZWNpbWFscy52YWx1ZTsKICAgIHJldHN1YgoKCi8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo6QXJjMjAwLmFyYzIwMF90b3RhbFN1cHBseSgpIC0+IGJ5dGVzOgphcmMyMDBfdG90YWxTdXBwbHk6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NjgKICAgIC8vIHB1YmxpYyB0b3RhbFN1cHBseSA9IEdsb2JhbFN0YXRlPFVpbnROMjU2Pih7IGtleTogJ3QnIH0pOwogICAgaW50Y18xIC8vIDAKICAgIGJ5dGVjXzIgLy8gInQiCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIEdsb2JhbFN0YXRlIGV4aXN0cwogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjEzMQogICAgLy8gcmV0dXJuIHRoaXMudG90YWxTdXBwbHkudmFsdWU7CiAgICByZXRzdWIKCgovLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OkFyYzIwMC5hcmMyMDBfYmFsYW5jZU9mKG93bmVyOiBieXRlcykgLT4gYnl0ZXM6CmFyYzIwMF9iYWxhbmNlT2Y6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTQwLTE0MQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIC8vIHB1YmxpYyBhcmMyMDBfYmFsYW5jZU9mKG93bmVyOiBBZGRyZXNzKTogYXJjNC5VaW50TjI1NiB7CiAgICBwcm90byAxIDEKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxNDIKICAgIC8vIHJldHVybiB0aGlzLl9iYWxhbmNlT2Yob3duZXIpOwogICAgZnJhbWVfZGlnIC0xCiAgICBjYWxsc3ViIF9iYWxhbmNlT2YKICAgIHJldHN1YgoKCi8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo6QXJjMjAwLmFyYzIwMF90cmFuc2Zlcih0bzogYnl0ZXMsIHZhbHVlOiBieXRlcykgLT4gYnl0ZXM6CmFyYzIwMF90cmFuc2ZlcjoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxNTItMTUzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gcHVibGljIGFyYzIwMF90cmFuc2Zlcih0bzogQWRkcmVzcywgdmFsdWU6IGFyYzQuVWludE4yNTYpOiBhcmM0LkJvb2wgewogICAgcHJvdG8gMiAxCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTU0CiAgICAvLyByZXR1cm4gdGhpcy5fdHJhbnNmZXIobmV3IEFkZHJlc3MoVHhuLnNlbmRlciksIHRvLCB2YWx1ZSk7CiAgICB0eG4gU2VuZGVyCiAgICBmcmFtZV9kaWcgLTIKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiBfdHJhbnNmZXIKICAgIHJldHN1YgoKCi8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo6QXJjMjAwLmFyYzIwMF90cmFuc2ZlckZyb20oZnJvbTogYnl0ZXMsIHRvOiBieXRlcywgdmFsdWU6IGJ5dGVzKSAtPiBieXRlczoKYXJjMjAwX3RyYW5zZmVyRnJvbToKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxNjUtMTY2CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gcHVibGljIGFyYzIwMF90cmFuc2ZlckZyb20oZnJvbTogQWRkcmVzcywgdG86IEFkZHJlc3MsIHZhbHVlOiBhcmM0LlVpbnROMjU2KTogYXJjNC5Cb29sIHsKICAgIHByb3RvIDMgMQogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE2NwogICAgLy8gY29uc3Qgc3BlbmRlciA9IG5ldyBBZGRyZXNzKFR4bi5zZW5kZXIpOwogICAgdHhuIFNlbmRlcgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE2OAogICAgLy8gY29uc3Qgc3BlbmRlcl9hbGxvd2FuY2UgPSB0aGlzLl9hbGxvd2FuY2UoZnJvbSwgc3BlbmRlcik7CiAgICBmcmFtZV9kaWcgLTMKICAgIGRpZyAxCiAgICBjYWxsc3ViIF9hbGxvd2FuY2UKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxNjkKICAgIC8vIGFzc2VydChzcGVuZGVyX2FsbG93YW5jZS5uYXRpdmUgPj0gdmFsdWUubmF0aXZlLCAnaW5zdWZmaWNpZW50IGFwcHJvdmFsJyk7CiAgICBkdXAKICAgIGZyYW1lX2RpZyAtMQogICAgYj49CiAgICBhc3NlcnQgLy8gaW5zdWZmaWNpZW50IGFwcHJvdmFsCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTcwCiAgICAvLyBjb25zdCBuZXdfc3BlbmRlcl9hbGxvd2FuY2UgPSBuZXcgVWludE4yNTYoc3BlbmRlcl9hbGxvd2FuY2UubmF0aXZlIC0gdmFsdWUubmF0aXZlKTsKICAgIGZyYW1lX2RpZyAtMQogICAgYi0KICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzIgLy8gMzIKICAgIDw9CiAgICBhc3NlcnQgLy8gb3ZlcmZsb3cKICAgIGludGNfMiAvLyAzMgogICAgYnplcm8KICAgIGJ8CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTcxCiAgICAvLyB0aGlzLl9hcHByb3ZlKGZyb20sIHNwZW5kZXIsIG5ld19zcGVuZGVyX2FsbG93YW5jZSk7CiAgICBmcmFtZV9kaWcgLTMKICAgIGNvdmVyIDIKICAgIGNhbGxzdWIgX2FwcHJvdmUKICAgIHBvcAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE3MgogICAgLy8gcmV0dXJuIHRoaXMuX3RyYW5zZmVyKGZyb20sIHRvLCB2YWx1ZSk7CiAgICBmcmFtZV9kaWcgLTMKICAgIGZyYW1lX2RpZyAtMgogICAgZnJhbWVfZGlnIC0xCiAgICBjYWxsc3ViIF90cmFuc2ZlcgogICAgcmV0c3ViCgoKLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjpBcmMyMDAuYXJjMjAwX2FwcHJvdmUoc3BlbmRlcjogYnl0ZXMsIHZhbHVlOiBieXRlcykgLT4gYnl0ZXM6CmFyYzIwMF9hcHByb3ZlOgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE4Mi0xODMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICAvLyBwdWJsaWMgYXJjMjAwX2FwcHJvdmUoc3BlbmRlcjogQWRkcmVzcywgdmFsdWU6IGFyYzQuVWludE4yNTYpOiBCb29sIHsKICAgIHByb3RvIDIgMQogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE4NAogICAgLy8gY29uc3Qgb3duZXIgPSBuZXcgQWRkcmVzcyhUeG4uc2VuZGVyKTsKICAgIHR4biBTZW5kZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxODUKICAgIC8vIHJldHVybiB0aGlzLl9hcHByb3ZlKG93bmVyLCBzcGVuZGVyLCB2YWx1ZSk7CiAgICBmcmFtZV9kaWcgLTIKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiBfYXBwcm92ZQogICAgcmV0c3ViCgoKLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjpBcmMyMDAuYXJjMjAwX2FsbG93YW5jZShvd25lcjogYnl0ZXMsIHNwZW5kZXI6IGJ5dGVzKSAtPiBieXRlczoKYXJjMjAwX2FsbG93YW5jZToKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxOTQtMTk1CiAgICAvLyBAYXJjNC5hYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgLy8gcHVibGljIGFyYzIwMF9hbGxvd2FuY2Uob3duZXI6IEFkZHJlc3MsIHNwZW5kZXI6IEFkZHJlc3MpOiBhcmM0LlVpbnROMjU2IHsKICAgIHByb3RvIDIgMQogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE5NgogICAgLy8gcmV0dXJuIHRoaXMuX2FsbG93YW5jZShvd25lciwgc3BlbmRlcik7CiAgICBmcmFtZV9kaWcgLTIKICAgIGZyYW1lX2RpZyAtMQogICAgY2FsbHN1YiBfYWxsb3dhbmNlCiAgICByZXRzdWIKCgovLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OkFyYzIwMC5fYmFsYW5jZU9mKG93bmVyOiBieXRlcykgLT4gYnl0ZXM6Cl9iYWxhbmNlT2Y6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTk5CiAgICAvLyBwcml2YXRlIF9iYWxhbmNlT2Yob3duZXI6IEFkZHJlc3MpOiBVaW50TjI1NiB7CiAgICBwcm90byAxIDEKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo3MAogICAgLy8gcHVibGljIGJhbGFuY2VzID0gQm94TWFwPEFkZHJlc3MsIFVpbnROMjU2Pih7IGtleVByZWZpeDogJ2InIH0pOwogICAgYnl0ZWNfMSAvLyAiYiIKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBkdXAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMDAKICAgIC8vIGlmICghdGhpcy5iYWxhbmNlcyhvd25lcikuZXhpc3RzKSByZXR1cm4gbmV3IFVpbnROMjU2KDApOwogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICBibnogX2JhbGFuY2VPZl9hZnRlcl9pZl9lbHNlQDIKICAgIGJ5dGVjIDUgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICBzd2FwCiAgICByZXRzdWIKCl9iYWxhbmNlT2ZfYWZ0ZXJfaWZfZWxzZUAyOgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjIwMQogICAgLy8gcmV0dXJuIHRoaXMuYmFsYW5jZXMob3duZXIpLnZhbHVlOwogICAgZnJhbWVfZGlnIDAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBCb3ggbXVzdCBoYXZlIHZhbHVlCiAgICBzd2FwCiAgICByZXRzdWIKCgovLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OkFyYzIwMC5fdHJhbnNmZXIoc2VuZGVyOiBieXRlcywgcmVjaXBpZW50OiBieXRlcywgYW1vdW50OiBieXRlcykgLT4gYnl0ZXM6Cl90cmFuc2ZlcjoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMDQKICAgIC8vIHByaXZhdGUgX3RyYW5zZmVyKHNlbmRlcjogQWRkcmVzcywgcmVjaXBpZW50OiBBZGRyZXNzLCBhbW91bnQ6IFVpbnROMjU2KTogQm9vbCB7CiAgICBwcm90byAzIDEKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMDUKICAgIC8vIGNvbnN0IHNlbmRlcl9iYWxhbmNlID0gdGhpcy5fYmFsYW5jZU9mKHNlbmRlcik7CiAgICBmcmFtZV9kaWcgLTMKICAgIGNhbGxzdWIgX2JhbGFuY2VPZgogICAgZHVwCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MjA2CiAgICAvLyBjb25zdCByZWNpcGllbnRfYmFsYW5jZSA9IHRoaXMuX2JhbGFuY2VPZihyZWNpcGllbnQpOwogICAgZnJhbWVfZGlnIC0yCiAgICBjYWxsc3ViIF9iYWxhbmNlT2YKICAgIHN3YXAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMDcKICAgIC8vIGFzc2VydChzZW5kZXJfYmFsYW5jZS5uYXRpdmUgPj0gYW1vdW50Lm5hdGl2ZSwgJ0luc3VmZmljaWVudCBiYWxhbmNlIGF0IHRoZSBzZW5kZXIgYWNjb3VudCcpOwogICAgZnJhbWVfZGlnIC0xCiAgICBiPj0KICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgYmFsYW5jZSBhdCB0aGUgc2VuZGVyIGFjY291bnQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMDkKICAgIC8vIGlmIChzZW5kZXIgIT09IHJlY2lwaWVudCkgewogICAgZnJhbWVfZGlnIC0zCiAgICBmcmFtZV9kaWcgLTIKICAgICE9CiAgICBieiBfdHJhbnNmZXJfYWZ0ZXJfaWZfZWxzZUAyCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MjExCiAgICAvLyB0aGlzLmJhbGFuY2VzKHNlbmRlcikudmFsdWUgPSBuZXcgVWludE4yNTYoc2VuZGVyX2JhbGFuY2UubmF0aXZlIC0gYW1vdW50Lm5hdGl2ZSk7CiAgICBmcmFtZV9kaWcgMAogICAgZnJhbWVfZGlnIC0xCiAgICBiLQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMiAvLyAzMgogICAgPD0KICAgIGFzc2VydCAvLyBvdmVyZmxvdwogICAgaW50Y18yIC8vIDMyCiAgICBiemVybwogICAgYnwKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo3MAogICAgLy8gcHVibGljIGJhbGFuY2VzID0gQm94TWFwPEFkZHJlc3MsIFVpbnROMjU2Pih7IGtleVByZWZpeDogJ2InIH0pOwogICAgYnl0ZWNfMSAvLyAiYiIKICAgIGZyYW1lX2RpZyAtMwogICAgY29uY2F0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MjExCiAgICAvLyB0aGlzLmJhbGFuY2VzKHNlbmRlcikudmFsdWUgPSBuZXcgVWludE4yNTYoc2VuZGVyX2JhbGFuY2UubmF0aXZlIC0gYW1vdW50Lm5hdGl2ZSk7CiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NzAKICAgIC8vIHB1YmxpYyBiYWxhbmNlcyA9IEJveE1hcDxBZGRyZXNzLCBVaW50TjI1Nj4oeyBrZXlQcmVmaXg6ICdiJyB9KTsKICAgIGJ5dGVjXzEgLy8gImIiCiAgICBmcmFtZV9kaWcgLTIKICAgIGNvbmNhdAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjIxMgogICAgLy8gdGhpcy5iYWxhbmNlcyhyZWNpcGllbnQpLnZhbHVlID0gcmVjaXBpZW50X2JhbGFuY2U7CiAgICBmcmFtZV9kaWcgMQogICAgYm94X3B1dAoKX3RyYW5zZmVyX2FmdGVyX2lmX2Vsc2VAMjoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMjAKICAgIC8vIGVtaXQobmV3IGFyYzIwMF9UcmFuc2Zlcih7IGZyb206IHNlbmRlciwgdG86IHJlY2lwaWVudCwgdmFsdWU6IGFtb3VudCB9KSk7CiAgICBmcmFtZV9kaWcgLTMKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgYnl0ZWMgNCAvLyBtZXRob2QgImFyYzIwMF9UcmFuc2ZlcihhZGRyZXNzLGFkZHJlc3MsdWludDI1NikiCiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjIyMQogICAgLy8gcmV0dXJuIG5ldyBCb29sKHRydWUpOwogICAgYnl0ZWNfMyAvLyAweDgwCiAgICBmcmFtZV9idXJ5IDAKICAgIHJldHN1YgoKCi8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo6QXJjMjAwLl9hcHByb3ZhbEtleShvd25lcjogYnl0ZXMsIHNwZW5kZXI6IGJ5dGVzKSAtPiBieXRlczoKX2FwcHJvdmFsS2V5OgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjIyMwogICAgLy8gcHJpdmF0ZSBfYXBwcm92YWxLZXkob3duZXI6IEFkZHJlc3MsIHNwZW5kZXI6IEFkZHJlc3MpOiBTdGF0aWNCeXRlczwzMj4gewogICAgcHJvdG8gMiAxCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MjI0CiAgICAvLyByZXR1cm4gbmV3IFN0YXRpY0J5dGVzPDMyPihvcC5zaGEyNTYob3AuY29uY2F0KG93bmVyLmJ5dGVzLCBzcGVuZGVyLmJ5dGVzKSkpOwogICAgZnJhbWVfZGlnIC0yCiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgc2hhMjU2CiAgICBkdXAKICAgIGxlbgogICAgaW50Y18yIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgc2l6ZQogICAgcmV0c3ViCgoKLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjpBcmMyMDAuX2FsbG93YW5jZShvd25lcjogYnl0ZXMsIHNwZW5kZXI6IGJ5dGVzKSAtPiBieXRlczoKX2FsbG93YW5jZToKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMjcKICAgIC8vIHByaXZhdGUgX2FsbG93YW5jZShvd25lcjogQWRkcmVzcywgc3BlbmRlcjogQWRkcmVzcyk6IFVpbnROMjU2IHsKICAgIHByb3RvIDIgMQogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjIyOAogICAgLy8gY29uc3Qga2V5ID0gdGhpcy5fYXBwcm92YWxLZXkob3duZXIsIHNwZW5kZXIpOwogICAgZnJhbWVfZGlnIC0yCiAgICBmcmFtZV9kaWcgLTEKICAgIGNhbGxzdWIgX2FwcHJvdmFsS2V5CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NzIKICAgIC8vIHB1YmxpYyBhcHByb3ZhbHMgPSBCb3hNYXA8U3RhdGljQnl0ZXM8MzI+LCBBcHByb3ZhbFN0cnVjdD4oeyBrZXlQcmVmaXg6ICdhJyB9KTsKICAgIHB1c2hieXRlcyAiYSIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZHVwCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MjI5CiAgICAvLyBpZiAoIXRoaXMuYXBwcm92YWxzKGtleSkuZXhpc3RzKSByZXR1cm4gbmV3IFVpbnROMjU2KDApOwogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICBibnogX2FsbG93YW5jZV9hZnRlcl9pZl9lbHNlQDIKICAgIGJ5dGVjIDUgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICBzd2FwCiAgICByZXRzdWIKCl9hbGxvd2FuY2VfYWZ0ZXJfaWZfZWxzZUAyOgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjIzMAogICAgLy8gcmV0dXJuIHRoaXMuYXBwcm92YWxzKGtleSkudmFsdWUuYXBwcm92YWxBbW91bnQ7CiAgICBmcmFtZV9kaWcgMAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIEJveCBtdXN0IGhhdmUgdmFsdWUKICAgIGV4dHJhY3QgMCAzMiAvLyBvbiBlcnJvcjogSW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIHN3YXAKICAgIHJldHN1YgoKCi8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo6QXJjMjAwLl9hcHByb3ZlKG93bmVyOiBieXRlcywgc3BlbmRlcjogYnl0ZXMsIGFtb3VudDogYnl0ZXMpIC0+IGJ5dGVzOgpfYXBwcm92ZToKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMzMKICAgIC8vIHByaXZhdGUgX2FwcHJvdmUob3duZXI6IEFkZHJlc3MsIHNwZW5kZXI6IEFkZHJlc3MsIGFtb3VudDogVWludE4yNTYpOiBCb29sIHsKICAgIHByb3RvIDMgMQogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjIzNAogICAgLy8gY29uc3Qga2V5ID0gdGhpcy5fYXBwcm92YWxLZXkob3duZXIsIHNwZW5kZXIpOwogICAgZnJhbWVfZGlnIC0zCiAgICBmcmFtZV9kaWcgLTIKICAgIGNhbGxzdWIgX2FwcHJvdmFsS2V5CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MjM1LTIzOQogICAgLy8gY29uc3QgYXBwcm92YWxCb3g6IEFwcHJvdmFsU3RydWN0ID0gbmV3IEFwcHJvdmFsU3RydWN0KHsKICAgIC8vICAgYXBwcm92YWxBbW91bnQ6IGFtb3VudCwKICAgIC8vICAgb3duZXI6IG93bmVyLAogICAgLy8gICBzcGVuZGVyOiBzcGVuZGVyLAogICAgLy8gfSk7CiAgICBmcmFtZV9kaWcgLTEKICAgIGZyYW1lX2RpZyAtMwogICAgY29uY2F0CiAgICBmcmFtZV9kaWcgLTIKICAgIGNvbmNhdAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjcyCiAgICAvLyBwdWJsaWMgYXBwcm92YWxzID0gQm94TWFwPFN0YXRpY0J5dGVzPDMyPiwgQXBwcm92YWxTdHJ1Y3Q+KHsga2V5UHJlZml4OiAnYScgfSk7CiAgICBwdXNoYnl0ZXMgImEiCiAgICB1bmNvdmVyIDIKICAgIGNvbmNhdAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjI0MAogICAgLy8gdGhpcy5hcHByb3ZhbHMoa2V5KS52YWx1ZSA9IGFwcHJvdmFsQm94LmNvcHkoKTsKICAgIHN3YXAKICAgIGJveF9wdXQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyNDEKICAgIC8vIGVtaXQobmV3IGFyYzIwMF9BcHByb3ZhbCh7IG93bmVyOiBvd25lciwgc3BlbmRlcjogc3BlbmRlciwgdmFsdWU6IGFtb3VudCB9KSk7CiAgICBmcmFtZV9kaWcgLTMKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgcHVzaGJ5dGVzIDB4MTk2OWY4NjUgLy8gbWV0aG9kICJhcmMyMDBfQXBwcm92YWwoYWRkcmVzcyxhZGRyZXNzLHVpbnQyNTYpIgogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyNDIKICAgIC8vIHJldHVybiBuZXcgQm9vbCh0cnVlKTsKICAgIGJ5dGVjXzMgLy8gMHg4MAogICAgcmV0c3ViCg==",
    clear: "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYmFzZS1jb250cmFjdC5kLnRzOjpCYXNlQ29udHJhY3QuY2xlYXJTdGF0ZVByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCg=="
  },
  byteCode: {
    approval: "CiAEAQAgCCYGBBUffHUBYgF0AYAEeYPDXCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEbQQEZggoEl1OC4gRlfRPsBLauGiUEhOwT1QTsmWBBBILlc8QE2nAluQRKlo+PBLVCISUEu7MZ8zYaAI4KALAAoACQAIAAcABdAEcALgAYAAIjQzEZFEQxGEQ2GgE2GgKIAY8oTFCwIkMxGRREMRhENhoBNhoCiAFsKExQsCJDMRkURDEYRDYaATYaAjYaA4gBJShMULAiQzEZFEQxGEQ2GgE2GgKIAQIoTFCwIkMxGRREMRhENhoBiADmKExQsCJDMRkURDEYRIgA0ShMULAiQzEZFEQxGESIALooTFCwIkMxGRREMRhEiACbKExQsCJDMRkURDEYRIgAfChMULAiQzEZFEQxGEQ2GgE2GgI2GgM2GgSIABEoTFCwIkMxGUD/LzEYFEQiQ4oEATEAMgkSRIv8I1lJRCQORIv9I1lJRCUORCMqZUUBFESAAW6L/GeAAXOL/Wcqi/9ngAFki/5nMQApSwFQi/+/MgNMUIv/UCcETFCwK4kjgAFuZURXAgBJFSQSRIkjgAFzZURXAgBJFSUSRIkjgAFkZUSJIyplRImKAQGL/4gAVImKAgExAIv+i/+IAF+JigMBMQCL/UsBiACnSYv/p0SL/6FJFSQORCSvq4v9TgKIALNIi/2L/ov/iAAxiYoCATEAi/6L/4gAnImKAgGL/ov/iABuiYoBASmL/1BJvUUBQAAEJwVMiYsAvkRMiYoDAYv9iP/gSYv+iP/aTIv/p0SL/Yv+E0EAGosAi/+hSRUkDkQkr6spi/1QTL8pi/5QiwG/i/2L/lCL/1AnBExQsCuMAImKAgGL/ov/UAFJFSQSRImKAgGL/ov/iP/ngAFhTFBJvUUBQAAEJwVMiYsAvkRXACBMiYoDAYv9i/6I/8SL/4v9UIv+UIABYU8CUEy/i/2L/lCL/1CABBlp+GVMULAriQ==",
    clear: "CoEBQw=="
  },
  compilerInfo: { compiler: "puya", compilerVersion: { major: 4, minor: 7, patch: 0 } },
  events: [
    {
      name: "arc200_Transfer",
      args: [
        { type: "address", name: "from" },
        { type: "address", name: "to" },
        { type: "uint256", name: "value" }
      ]
    },
    {
      name: "arc200_Approval",
      args: [
        { type: "address", name: "owner" },
        { type: "address", name: "spender" },
        { type: "uint256", name: "value" }
      ]
    }
  ],
  templateVariables: {}
};
var Arc200ParamsFactory = class {
  /**
   * Constructs a no op call for the bootstrap(byte[],byte[],uint8,uint256)bool ABI method
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static bootstrap(params) {
    return {
      ...params,
      method: "bootstrap(byte[],byte[],uint8,uint256)bool",
      args: Array.isArray(params.args) ? params.args : [params.args.name, params.args.symbol, params.args.decimals, params.args.totalSupply]
    };
  }
  /**
   * Constructs a no op call for the arc200_name()byte[32] ABI method
   *
   * Returns the name of the token
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static arc200Name(params) {
    return {
      ...params,
      method: "arc200_name()byte[32]",
      args: Array.isArray(params.args) ? params.args : []
    };
  }
  /**
   * Constructs a no op call for the arc200_symbol()byte[8] ABI method
   *
   * Returns the symbol of the token
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static arc200Symbol(params) {
    return {
      ...params,
      method: "arc200_symbol()byte[8]",
      args: Array.isArray(params.args) ? params.args : []
    };
  }
  /**
   * Constructs a no op call for the arc200_decimals()uint8 ABI method
   *
   * Returns the decimals of the token
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static arc200Decimals(params) {
    return {
      ...params,
      method: "arc200_decimals()uint8",
      args: Array.isArray(params.args) ? params.args : []
    };
  }
  /**
   * Constructs a no op call for the arc200_totalSupply()uint256 ABI method
   *
   * Returns the total supply of the token
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static arc200TotalSupply(params) {
    return {
      ...params,
      method: "arc200_totalSupply()uint256",
      args: Array.isArray(params.args) ? params.args : []
    };
  }
  /**
   * Constructs a no op call for the arc200_balanceOf(address)uint256 ABI method
   *
   * Returns the current balance of the owner of the token
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static arc200BalanceOf(params) {
    return {
      ...params,
      method: "arc200_balanceOf(address)uint256",
      args: Array.isArray(params.args) ? params.args : [params.args.owner]
    };
  }
  /**
   * Constructs a no op call for the arc200_transfer(address,uint256)bool ABI method
   *
   * Transfers tokens
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static arc200Transfer(params) {
    return {
      ...params,
      method: "arc200_transfer(address,uint256)bool",
      args: Array.isArray(params.args) ? params.args : [params.args.to, params.args.value]
    };
  }
  /**
   * Constructs a no op call for the arc200_transferFrom(address,address,uint256)bool ABI method
   *
   * Transfers tokens from source to destination as approved spender
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static arc200TransferFrom(params) {
    return {
      ...params,
      method: "arc200_transferFrom(address,address,uint256)bool",
      args: Array.isArray(params.args) ? params.args : [params.args.from, params.args.to, params.args.value]
    };
  }
  /**
   * Constructs a no op call for the arc200_approve(address,uint256)bool ABI method
   *
   * Approve spender for a token
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static arc200Approve(params) {
    return {
      ...params,
      method: "arc200_approve(address,uint256)bool",
      args: Array.isArray(params.args) ? params.args : [params.args.spender, params.args.value]
    };
  }
  /**
   * Constructs a no op call for the arc200_allowance(address,address)uint256 ABI method
   *
   * Returns the current allowance of the spender of the tokens of the owner
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static arc200Allowance(params) {
    return {
      ...params,
      method: "arc200_allowance(address,address)uint256",
      args: Array.isArray(params.args) ? params.args : [params.args.owner, params.args.spender]
    };
  }
};
var Arc200Factory = class {
  /**
   * Creates a new instance of `Arc200Factory`
   *
   * @param params The parameters to initialise the app factory with
   */
  constructor(params) {
    /**
     * Get parameters to create transactions (create and deploy related calls) for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
     */
    this.params = {
      /**
       * Gets available create methods
       */
      create: {
        /**
         * Creates a new instance of the Arc200 smart contract using a bare call.
         *
         * @param params The params for the bare (raw) call
         * @returns The params for a create call
         */
        bare: (params) => {
          return this.appFactory.params.bare.create(params);
        }
      }
    };
    /**
     * Create transactions for the current app
     */
    this.createTransaction = {
      /**
       * Gets available create methods
       */
      create: {
        /**
         * Creates a new instance of the Arc200 smart contract using a bare call.
         *
         * @param params The params for the bare (raw) call
         * @returns The transaction for a create call
         */
        bare: (params) => {
          return this.appFactory.createTransaction.bare.create(params);
        }
      }
    };
    /**
     * Send calls to the current app
     */
    this.send = {
      /**
       * Gets available create methods
       */
      create: {
        /**
         * Creates a new instance of the Arc200 smart contract using a bare call.
         *
         * @param params The params for the bare (raw) call
         * @returns The create result
         */
        bare: async (params) => {
          const result = await this.appFactory.send.bare.create(params);
          return { result: result.result, appClient: new Arc200Client(result.appClient) };
        }
      }
    };
    this.appFactory = new import_app_factory.AppFactory({
      ...params,
      appSpec: APP_SPEC
    });
  }
  /** The name of the app (from the ARC-32 / ARC-56 app spec or override). */
  get appName() {
    return this.appFactory.appName;
  }
  /** The ARC-56 app spec being used */
  get appSpec() {
    return APP_SPEC;
  }
  /** A reference to the underlying `AlgorandClient` this app factory is using. */
  get algorand() {
    return this.appFactory.algorand;
  }
  /**
   * Returns a new `AppClient` client for an app instance of the given ID.
   *
   * Automatically populates appName, defaultSender and source maps from the factory
   * if not specified in the params.
   * @param params The parameters to create the app client
   * @returns The `AppClient`
   */
  getAppClientById(params) {
    return new Arc200Client(this.appFactory.getAppClientById(params));
  }
  /**
   * Returns a new `AppClient` client, resolving the app by creator address and name
   * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
   *
   * Automatically populates appName, defaultSender and source maps from the factory
   * if not specified in the params.
   * @param params The parameters to create the app client
   * @returns The `AppClient`
   */
  async getAppClientByCreatorAndName(params) {
    return new Arc200Client(await this.appFactory.getAppClientByCreatorAndName(params));
  }
  /**
   * Idempotently deploys the Arc200 smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  async deploy(params = {}) {
    const result = await this.appFactory.deploy({
      ...params
    });
    return { result: result.result, appClient: new Arc200Client(result.appClient) };
  }
};
var Arc200Client = class _Arc200Client {
  constructor(appClientOrParams) {
    /**
     * Get parameters to create transactions for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
     */
    this.params = {
      /**
       * Makes a clear_state call to an existing instance of the Arc200 smart contract.
       *
       * @param params The params for the bare (raw) call
       * @returns The clearState result
       */
      clearState: (params) => {
        return this.appClient.params.bare.clearState(params);
      },
      /**
       * Makes a call to the Arc200 smart contract using the `bootstrap(byte[],byte[],uint8,uint256)bool` ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call params
       */
      bootstrap: (params) => {
        return this.appClient.params.call(Arc200ParamsFactory.bootstrap(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_name()byte[32]` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the name of the token
       *
       * @param params The params for the smart contract call
       * @returns The call params: The name of the token
       */
      arc200Name: (params = { args: [] }) => {
        return this.appClient.params.call(Arc200ParamsFactory.arc200Name(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_symbol()byte[8]` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the symbol of the token
       *
       * @param params The params for the smart contract call
       * @returns The call params: The symbol of the token
       */
      arc200Symbol: (params = { args: [] }) => {
        return this.appClient.params.call(Arc200ParamsFactory.arc200Symbol(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_decimals()uint8` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the decimals of the token
       *
       * @param params The params for the smart contract call
       * @returns The call params: The decimals of the token
       */
      arc200Decimals: (params = { args: [] }) => {
        return this.appClient.params.call(Arc200ParamsFactory.arc200Decimals(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_totalSupply()uint256` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the total supply of the token
       *
       * @param params The params for the smart contract call
       * @returns The call params: The total supply of the token
       */
      arc200TotalSupply: (params = { args: [] }) => {
        return this.appClient.params.call(Arc200ParamsFactory.arc200TotalSupply(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_balanceOf(address)uint256` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the current balance of the owner of the token
       *
       * @param params The params for the smart contract call
       * @returns The call params: The current balance of the holder of the token
       */
      arc200BalanceOf: (params) => {
        return this.appClient.params.call(Arc200ParamsFactory.arc200BalanceOf(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_transfer(address,uint256)bool` ABI method.
       *
       * Transfers tokens
       *
       * @param params The params for the smart contract call
       * @returns The call params: Success
       */
      arc200Transfer: (params) => {
        return this.appClient.params.call(Arc200ParamsFactory.arc200Transfer(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_transferFrom(address,address,uint256)bool` ABI method.
       *
       * Transfers tokens from source to destination as approved spender
       *
       * @param params The params for the smart contract call
       * @returns The call params: Success
       */
      arc200TransferFrom: (params) => {
        return this.appClient.params.call(Arc200ParamsFactory.arc200TransferFrom(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_approve(address,uint256)bool` ABI method.
       *
       * Approve spender for a token
       *
       * @param params The params for the smart contract call
       * @returns The call params: Success
       */
      arc200Approve: (params) => {
        return this.appClient.params.call(Arc200ParamsFactory.arc200Approve(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_allowance(address,address)uint256` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the current allowance of the spender of the tokens of the owner
       *
       * @param params The params for the smart contract call
       * @returns The call params: The remaining allowance
       */
      arc200Allowance: (params) => {
        return this.appClient.params.call(Arc200ParamsFactory.arc200Allowance(params));
      }
    };
    /**
     * Create transactions for the current app
     */
    this.createTransaction = {
      /**
       * Makes a clear_state call to an existing instance of the Arc200 smart contract.
       *
       * @param params The params for the bare (raw) call
       * @returns The clearState result
       */
      clearState: (params) => {
        return this.appClient.createTransaction.bare.clearState(params);
      },
      /**
       * Makes a call to the Arc200 smart contract using the `bootstrap(byte[],byte[],uint8,uint256)bool` ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call transaction
       */
      bootstrap: (params) => {
        return this.appClient.createTransaction.call(Arc200ParamsFactory.bootstrap(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_name()byte[32]` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the name of the token
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: The name of the token
       */
      arc200Name: (params = { args: [] }) => {
        return this.appClient.createTransaction.call(Arc200ParamsFactory.arc200Name(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_symbol()byte[8]` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the symbol of the token
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: The symbol of the token
       */
      arc200Symbol: (params = { args: [] }) => {
        return this.appClient.createTransaction.call(Arc200ParamsFactory.arc200Symbol(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_decimals()uint8` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the decimals of the token
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: The decimals of the token
       */
      arc200Decimals: (params = { args: [] }) => {
        return this.appClient.createTransaction.call(Arc200ParamsFactory.arc200Decimals(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_totalSupply()uint256` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the total supply of the token
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: The total supply of the token
       */
      arc200TotalSupply: (params = { args: [] }) => {
        return this.appClient.createTransaction.call(Arc200ParamsFactory.arc200TotalSupply(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_balanceOf(address)uint256` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the current balance of the owner of the token
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: The current balance of the holder of the token
       */
      arc200BalanceOf: (params) => {
        return this.appClient.createTransaction.call(Arc200ParamsFactory.arc200BalanceOf(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_transfer(address,uint256)bool` ABI method.
       *
       * Transfers tokens
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: Success
       */
      arc200Transfer: (params) => {
        return this.appClient.createTransaction.call(Arc200ParamsFactory.arc200Transfer(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_transferFrom(address,address,uint256)bool` ABI method.
       *
       * Transfers tokens from source to destination as approved spender
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: Success
       */
      arc200TransferFrom: (params) => {
        return this.appClient.createTransaction.call(Arc200ParamsFactory.arc200TransferFrom(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_approve(address,uint256)bool` ABI method.
       *
       * Approve spender for a token
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: Success
       */
      arc200Approve: (params) => {
        return this.appClient.createTransaction.call(Arc200ParamsFactory.arc200Approve(params));
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_allowance(address,address)uint256` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the current allowance of the spender of the tokens of the owner
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: The remaining allowance
       */
      arc200Allowance: (params) => {
        return this.appClient.createTransaction.call(Arc200ParamsFactory.arc200Allowance(params));
      }
    };
    /**
     * Send calls to the current app
     */
    this.send = {
      /**
       * Makes a clear_state call to an existing instance of the Arc200 smart contract.
       *
       * @param params The params for the bare (raw) call
       * @returns The clearState result
       */
      clearState: (params) => {
        return this.appClient.send.bare.clearState(params);
      },
      /**
       * Makes a call to the Arc200 smart contract using the `bootstrap(byte[],byte[],uint8,uint256)bool` ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call result
       */
      bootstrap: async (params) => {
        const result = await this.appClient.send.call(Arc200ParamsFactory.bootstrap(params));
        return {
          ...result,
          return: result.return
        };
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_name()byte[32]` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the name of the token
       *
       * @param params The params for the smart contract call
       * @returns The call result: The name of the token
       */
      arc200Name: async (params = { args: [] }) => {
        const result = await this.appClient.send.call(Arc200ParamsFactory.arc200Name(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_symbol()byte[8]` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the symbol of the token
       *
       * @param params The params for the smart contract call
       * @returns The call result: The symbol of the token
       */
      arc200Symbol: async (params = { args: [] }) => {
        const result = await this.appClient.send.call(Arc200ParamsFactory.arc200Symbol(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_decimals()uint8` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the decimals of the token
       *
       * @param params The params for the smart contract call
       * @returns The call result: The decimals of the token
       */
      arc200Decimals: async (params = { args: [] }) => {
        const result = await this.appClient.send.call(Arc200ParamsFactory.arc200Decimals(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_totalSupply()uint256` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the total supply of the token
       *
       * @param params The params for the smart contract call
       * @returns The call result: The total supply of the token
       */
      arc200TotalSupply: async (params = { args: [] }) => {
        const result = await this.appClient.send.call(Arc200ParamsFactory.arc200TotalSupply(params));
        return {
          ...result,
          return: result.return
        };
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_balanceOf(address)uint256` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the current balance of the owner of the token
       *
       * @param params The params for the smart contract call
       * @returns The call result: The current balance of the holder of the token
       */
      arc200BalanceOf: async (params) => {
        const result = await this.appClient.send.call(Arc200ParamsFactory.arc200BalanceOf(params));
        return {
          ...result,
          return: result.return
        };
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_transfer(address,uint256)bool` ABI method.
       *
       * Transfers tokens
       *
       * @param params The params for the smart contract call
       * @returns The call result: Success
       */
      arc200Transfer: async (params) => {
        const result = await this.appClient.send.call(Arc200ParamsFactory.arc200Transfer(params));
        return {
          ...result,
          return: result.return
        };
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_transferFrom(address,address,uint256)bool` ABI method.
       *
       * Transfers tokens from source to destination as approved spender
       *
       * @param params The params for the smart contract call
       * @returns The call result: Success
       */
      arc200TransferFrom: async (params) => {
        const result = await this.appClient.send.call(Arc200ParamsFactory.arc200TransferFrom(params));
        return {
          ...result,
          return: result.return
        };
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_approve(address,uint256)bool` ABI method.
       *
       * Approve spender for a token
       *
       * @param params The params for the smart contract call
       * @returns The call result: Success
       */
      arc200Approve: async (params) => {
        const result = await this.appClient.send.call(Arc200ParamsFactory.arc200Approve(params));
        return {
          ...result,
          return: result.return
        };
      },
      /**
       * Makes a call to the Arc200 smart contract using the `arc200_allowance(address,address)uint256` ABI method.
       *
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the current allowance of the spender of the tokens of the owner
       *
       * @param params The params for the smart contract call
       * @returns The call result: The remaining allowance
       */
      arc200Allowance: async (params) => {
        const result = await this.appClient.send.call(Arc200ParamsFactory.arc200Allowance(params));
        return {
          ...result,
          return: result.return
        };
      }
    };
    /**
     * Methods to access state for the current Arc200 app
     */
    this.state = {
      /**
       * Methods to access global state for the current Arc200 app
       */
      global: {
        /**
         * Get all current keyed values from global state
         */
        getAll: async () => {
          const result = await this.appClient.state.global.getAll();
          return {
            name: result.name,
            symbol: result.symbol,
            decimals: result.decimals,
            totalSupply: result.totalSupply
          };
        },
        /**
         * Get the current value of the name key in global state
         */
        name: async () => {
          return await this.appClient.state.global.getValue("name");
        },
        /**
         * Get the current value of the symbol key in global state
         */
        symbol: async () => {
          return await this.appClient.state.global.getValue("symbol");
        },
        /**
         * Get the current value of the decimals key in global state
         */
        decimals: async () => {
          return await this.appClient.state.global.getValue("decimals");
        },
        /**
         * Get the current value of the totalSupply key in global state
         */
        totalSupply: async () => {
          return await this.appClient.state.global.getValue("totalSupply");
        }
      },
      /**
       * Methods to access box state for the current Arc200 app
       */
      box: {
        /**
         * Get all current keyed values from box state
         */
        getAll: async () => {
          const result = await this.appClient.state.box.getAll();
          return {};
        },
        /**
         * Get values from the balances map in box state
         */
        balances: {
          /**
           * Get all current values of the balances map in box state
           */
          getMap: async () => {
            return await this.appClient.state.box.getMap("balances");
          },
          /**
           * Get a current value of the balances map by key from box state
           */
          value: async (key) => {
            return await this.appClient.state.box.getMapValue("balances", key);
          }
        },
        /**
         * Get values from the approvals map in box state
         */
        approvals: {
          /**
           * Get all current values of the approvals map in box state
           */
          getMap: async () => {
            return await this.appClient.state.box.getMap("approvals");
          },
          /**
           * Get a current value of the approvals map by key from box state
           */
          value: async (key) => {
            return await this.appClient.state.box.getMapValue("approvals", key);
          }
        }
      }
    };
    this.appClient = appClientOrParams instanceof import_app_client.AppClient ? appClientOrParams : new import_app_client.AppClient({
      ...appClientOrParams,
      appSpec: APP_SPEC
    });
  }
  /**
   * Checks for decode errors on the given return value and maps the return value to the return type for the given method
   * @returns The typed return value or undefined if there was no value
   */
  decodeReturnValue(method, returnValue) {
    return returnValue !== void 0 ? (0, import_app_arc56.getArc56ReturnValue)(
      returnValue,
      this.appClient.getABIMethod(method),
      APP_SPEC.structs
    ) : void 0;
  }
  /**
   * Returns a new `Arc200Client` client, resolving the app by creator address and name
   * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
   * @param params The parameters to create the app client
   */
  static async fromCreatorAndName(params) {
    return new _Arc200Client(await import_app_client.AppClient.fromCreatorAndName({ ...params, appSpec: APP_SPEC }));
  }
  /**
   * Returns an `Arc200Client` instance for the current network based on
   * pre-determined network-specific app IDs specified in the ARC-56 app spec.
   *
   * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
   * @param params The parameters to create the app client
   */
  static async fromNetwork(params) {
    return new _Arc200Client(await import_app_client.AppClient.fromNetwork({ ...params, appSpec: APP_SPEC }));
  }
  /** The ID of the app instance this client is linked to. */
  get appId() {
    return this.appClient.appId;
  }
  /** The app address of the app instance this client is linked to. */
  get appAddress() {
    return this.appClient.appAddress;
  }
  /** The name of the app. */
  get appName() {
    return this.appClient.appName;
  }
  /** The ARC-56 app spec being used */
  get appSpec() {
    return this.appClient.appSpec;
  }
  /** A reference to the underlying `AlgorandClient` this app client is using. */
  get algorand() {
    return this.appClient.algorand;
  }
  /**
   * Clone this app client with different params
   *
   * @param params The params to use for the the cloned app client. Omit a param to keep the original value. Set a param to override the original value. Setting to undefined will clear the original value.
   * @returns A new app client with the altered params
   */
  clone(params) {
    return new _Arc200Client(this.appClient.clone(params));
  }
  /**
   * Makes a readonly (simulated) call to the Arc200 smart contract using the `arc200_name()byte[32]` ABI method.
   *
   * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
   *
   * Returns the name of the token
   *
   * @param params The params for the smart contract call
   * @returns The call result: The name of the token
   */
  async arc200Name(params = {
    args: []
  }) {
    const result = await this.appClient.send.call(Arc200ParamsFactory.arc200Name(params));
    return result.return;
  }
  /**
   * Makes a readonly (simulated) call to the Arc200 smart contract using the `arc200_symbol()byte[8]` ABI method.
   *
   * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
   *
   * Returns the symbol of the token
   *
   * @param params The params for the smart contract call
   * @returns The call result: The symbol of the token
   */
  async arc200Symbol(params = {
    args: []
  }) {
    const result = await this.appClient.send.call(Arc200ParamsFactory.arc200Symbol(params));
    return result.return;
  }
  /**
   * Makes a readonly (simulated) call to the Arc200 smart contract using the `arc200_decimals()uint8` ABI method.
   *
   * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
   *
   * Returns the decimals of the token
   *
   * @param params The params for the smart contract call
   * @returns The call result: The decimals of the token
   */
  async arc200Decimals(params = {
    args: []
  }) {
    const result = await this.appClient.send.call(Arc200ParamsFactory.arc200Decimals(params));
    return result.return;
  }
  /**
   * Makes a readonly (simulated) call to the Arc200 smart contract using the `arc200_totalSupply()uint256` ABI method.
   *
   * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
   *
   * Returns the total supply of the token
   *
   * @param params The params for the smart contract call
   * @returns The call result: The total supply of the token
   */
  async arc200TotalSupply(params = { args: [] }) {
    const result = await this.appClient.send.call(Arc200ParamsFactory.arc200TotalSupply(params));
    return result.return;
  }
  /**
   * Makes a readonly (simulated) call to the Arc200 smart contract using the `arc200_balanceOf(address)uint256` ABI method.
   *
   * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
   *
   * Returns the current balance of the owner of the token
   *
   * @param params The params for the smart contract call
   * @returns The call result: The current balance of the holder of the token
   */
  async arc200BalanceOf(params) {
    const result = await this.appClient.send.call(Arc200ParamsFactory.arc200BalanceOf(params));
    return result.return;
  }
  /**
   * Makes a readonly (simulated) call to the Arc200 smart contract using the `arc200_allowance(address,address)uint256` ABI method.
   *
   * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
   *
   * Returns the current allowance of the spender of the tokens of the owner
   *
   * @param params The params for the smart contract call
   * @returns The call result: The remaining allowance
   */
  async arc200Allowance(params) {
    const result = await this.appClient.send.call(Arc200ParamsFactory.arc200Allowance(params));
    return result.return;
  }
  newGroup() {
    const client = this;
    const composer = this.algorand.newGroup();
    let promiseChain = Promise.resolve();
    const resultMappers = [];
    return {
      /**
       * Add a bootstrap(byte[],byte[],uint8,uint256)bool method call against the Arc200 contract
       */
      bootstrap(params) {
        promiseChain = promiseChain.then(
          async () => composer.addAppCallMethodCall(await client.params.bootstrap(params))
        );
        resultMappers.push((v) => client.decodeReturnValue("bootstrap(byte[],byte[],uint8,uint256)bool", v));
        return this;
      },
      /**
       * Add a arc200_name()byte[32] method call against the Arc200 contract
       */
      arc200Name(params) {
        promiseChain = promiseChain.then(
          async () => composer.addAppCallMethodCall(await client.params.arc200Name(params))
        );
        resultMappers.push((v) => client.decodeReturnValue("arc200_name()byte[32]", v));
        return this;
      },
      /**
       * Add a arc200_symbol()byte[8] method call against the Arc200 contract
       */
      arc200Symbol(params) {
        promiseChain = promiseChain.then(
          async () => composer.addAppCallMethodCall(await client.params.arc200Symbol(params))
        );
        resultMappers.push((v) => client.decodeReturnValue("arc200_symbol()byte[8]", v));
        return this;
      },
      /**
       * Add a arc200_decimals()uint8 method call against the Arc200 contract
       */
      arc200Decimals(params) {
        promiseChain = promiseChain.then(
          async () => composer.addAppCallMethodCall(await client.params.arc200Decimals(params))
        );
        resultMappers.push((v) => client.decodeReturnValue("arc200_decimals()uint8", v));
        return this;
      },
      /**
       * Add a arc200_totalSupply()uint256 method call against the Arc200 contract
       */
      arc200TotalSupply(params) {
        promiseChain = promiseChain.then(
          async () => composer.addAppCallMethodCall(await client.params.arc200TotalSupply(params))
        );
        resultMappers.push((v) => client.decodeReturnValue("arc200_totalSupply()uint256", v));
        return this;
      },
      /**
       * Add a arc200_balanceOf(address)uint256 method call against the Arc200 contract
       */
      arc200BalanceOf(params) {
        promiseChain = promiseChain.then(
          async () => composer.addAppCallMethodCall(await client.params.arc200BalanceOf(params))
        );
        resultMappers.push((v) => client.decodeReturnValue("arc200_balanceOf(address)uint256", v));
        return this;
      },
      /**
       * Add a arc200_transfer(address,uint256)bool method call against the Arc200 contract
       */
      arc200Transfer(params) {
        promiseChain = promiseChain.then(
          async () => composer.addAppCallMethodCall(await client.params.arc200Transfer(params))
        );
        resultMappers.push((v) => client.decodeReturnValue("arc200_transfer(address,uint256)bool", v));
        return this;
      },
      /**
       * Add a arc200_transferFrom(address,address,uint256)bool method call against the Arc200 contract
       */
      arc200TransferFrom(params) {
        promiseChain = promiseChain.then(
          async () => composer.addAppCallMethodCall(await client.params.arc200TransferFrom(params))
        );
        resultMappers.push((v) => client.decodeReturnValue("arc200_transferFrom(address,address,uint256)bool", v));
        return this;
      },
      /**
       * Add a arc200_approve(address,uint256)bool method call against the Arc200 contract
       */
      arc200Approve(params) {
        promiseChain = promiseChain.then(
          async () => composer.addAppCallMethodCall(await client.params.arc200Approve(params))
        );
        resultMappers.push((v) => client.decodeReturnValue("arc200_approve(address,uint256)bool", v));
        return this;
      },
      /**
       * Add a arc200_allowance(address,address)uint256 method call against the Arc200 contract
       */
      arc200Allowance(params) {
        promiseChain = promiseChain.then(
          async () => composer.addAppCallMethodCall(await client.params.arc200Allowance(params))
        );
        resultMappers.push((v) => client.decodeReturnValue("arc200_allowance(address,address)uint256", v));
        return this;
      },
      /**
       * Add a clear state call to the Arc200 contract
       */
      clearState(params) {
        promiseChain = promiseChain.then(() => composer.addAppCall(client.params.clearState(params)));
        return this;
      },
      addTransaction(txn, signer) {
        promiseChain = promiseChain.then(() => composer.addTransaction(txn, signer));
        return this;
      },
      async composer() {
        await promiseChain;
        return composer;
      },
      async simulate(options) {
        await promiseChain;
        const result = await (!options ? composer.simulate() : composer.simulate(options));
        return {
          ...result,
          returns: result.returns?.map(
            (val, i) => resultMappers[i] !== void 0 ? resultMappers[i](val) : val.returnValue
          )
        };
      },
      async send(params) {
        await promiseChain;
        const result = await composer.send(params);
        return {
          ...result,
          returns: result.returns?.map(
            (val, i) => resultMappers[i] !== void 0 ? resultMappers[i](val) : val.returnValue
          )
        };
      }
    };
  }
};

// src/getArc200Client.ts
var getArc200Client = (input) => {
  return new Arc200Client({
    algorand: input.algorand,
    appId: input.appId,
    appName: input.appName,
    approvalSourceMap: input.approvalSourceMap,
    clearSourceMap: input.clearSourceMap,
    defaultSender: input.defaultSender,
    defaultSigner: input.defaultSigner
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Arc200Client,
  Arc200Factory,
  getArc200Client
});
//# sourceMappingURL=index.js.map