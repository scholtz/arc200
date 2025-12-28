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
  APP_SPEC: () => APP_SPEC2,
  ApprovalStructFromTuple: () => ApprovalStructFromTuple2,
  Arc200AsaClient: () => Arc200AsaClient,
  Arc200AsaFactory: () => Arc200AsaFactory,
  Arc200AsaParamsFactory: () => Arc200AsaParamsFactory,
  Arc200Client: () => Arc200Client,
  Arc200ExchangeInfoFromTuple: () => Arc200ExchangeInfoFromTuple,
  Arc200Factory: () => Arc200Factory,
  AsaPropsFromTuple: () => AsaPropsFromTuple,
  arc200: () => Arc200Client_exports,
  getArc200ASAClient: () => getArc200ASAClient,
  getArc200Client: () => getArc200Client
});
module.exports = __toCommonJS(index_exports);

// contracts/artifacts/Arc200Client.ts
var Arc200Client_exports = {};
__export(Arc200Client_exports, {
  APP_SPEC: () => APP_SPEC,
  ApprovalStructFromTuple: () => ApprovalStructFromTuple,
  Arc200Client: () => Arc200Client,
  Arc200Factory: () => Arc200Factory,
  Arc200ParamsFactory: () => Arc200ParamsFactory
});
var import_app_arc56 = require("@algorandfoundation/algokit-utils/types/app-arc56");
var import_app_client = require("@algorandfoundation/algokit-utils/types/app-client");
var import_app_factory = require("@algorandfoundation/algokit-utils/types/app-factory");
var APP_SPEC = { "name": "Arc200", "structs": { "ApprovalStruct": [{ "name": "approvalAmount", "type": "uint256" }, { "name": "owner", "type": "address" }, { "name": "spender", "type": "address" }] }, "methods": [{ "name": "bootstrap", "args": [{ "type": "byte[]", "name": "name" }, { "type": "byte[]", "name": "symbol" }, { "type": "uint8", "name": "decimals" }, { "type": "uint256", "name": "totalSupply" }], "returns": { "type": "bool" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "events": [{ "name": "arc200_Transfer", "args": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "value" }] }], "recommendations": {} }, { "name": "arc200_name", "args": [], "returns": { "type": "byte[32]", "desc": "The name of the token" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "Returns the name of the token", "events": [], "recommendations": {} }, { "name": "arc200_symbol", "args": [], "returns": { "type": "byte[8]", "desc": "The symbol of the token" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "Returns the symbol of the token", "events": [], "recommendations": {} }, { "name": "arc200_decimals", "args": [], "returns": { "type": "uint8", "desc": "The decimals of the token" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "Returns the decimals of the token", "events": [], "recommendations": {} }, { "name": "arc200_totalSupply", "args": [], "returns": { "type": "uint256", "desc": "The total supply of the token" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "Returns the total supply of the token", "events": [], "recommendations": {} }, { "name": "arc200_balanceOf", "args": [{ "type": "address", "name": "owner", "desc": "The address of the owner of the token" }], "returns": { "type": "uint256", "desc": "The current balance of the holder of the token" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "Returns the current balance of the owner of the token", "events": [], "recommendations": {} }, { "name": "arc200_transfer", "args": [{ "type": "address", "name": "to", "desc": "The destination of the transfer" }, { "type": "uint256", "name": "value", "desc": "Amount of tokens to transfer" }], "returns": { "type": "bool", "desc": "Success" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "Transfers tokens", "events": [{ "name": "arc200_Transfer", "args": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "value" }] }], "recommendations": {} }, { "name": "arc200_transferFrom", "args": [{ "type": "address", "name": "from", "desc": "The source of the transfer" }, { "type": "address", "name": "to", "desc": "The destination of the transfer" }, { "type": "uint256", "name": "value", "desc": "Amount of tokens to transfer" }], "returns": { "type": "bool", "desc": "Success" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "Transfers tokens from source to destination as approved spender", "events": [{ "name": "arc200_Approval", "args": [{ "type": "address", "name": "owner" }, { "type": "address", "name": "spender" }, { "type": "uint256", "name": "value" }] }, { "name": "arc200_Transfer", "args": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "value" }] }], "recommendations": {} }, { "name": "arc200_approve", "args": [{ "type": "address", "name": "spender", "desc": "Who is allowed to take tokens on owner's behalf" }, { "type": "uint256", "name": "value", "desc": "Amount of tokens to be taken by spender" }], "returns": { "type": "bool", "desc": "Success" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "Approve spender for a token", "events": [{ "name": "arc200_Approval", "args": [{ "type": "address", "name": "owner" }, { "type": "address", "name": "spender" }, { "type": "uint256", "name": "value" }] }], "recommendations": {} }, { "name": "arc200_allowance", "args": [{ "type": "address", "name": "owner", "desc": "Owner's account" }, { "type": "address", "name": "spender", "desc": "Who is allowed to take tokens on owner's behalf" }], "returns": { "type": "uint256", "desc": "The remaining allowance" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "Returns the current allowance of the spender of the tokens of the owner", "events": [], "recommendations": {} }], "arcs": [22, 28], "desc": "Smart Contract Token Base Interface", "networks": {}, "state": { "schema": { "global": { "ints": 0, "bytes": 4 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": { "name": { "keyType": "AVMString", "valueType": "byte[]", "key": "bg==", "desc": "Name of the asset. Max 32 bytes" }, "symbol": { "keyType": "AVMString", "valueType": "byte[]", "key": "cw==", "desc": "Symbol of the asset. Max 8 bytes" }, "decimals": { "keyType": "AVMString", "valueType": "uint8", "key": "ZA==", "desc": "Decimals of the asset. Recommended is 6 decimal places." }, "totalSupply": { "keyType": "AVMString", "valueType": "uint256", "key": "dA==", "desc": "Minted supply" } }, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": { "balances": { "keyType": "address", "valueType": "uint256", "prefix": "Yg==" }, "approvals": { "keyType": "byte[32]", "valueType": "ApprovalStruct", "prefix": "YQ==" } } } }, "bareActions": { "create": ["NoOp"], "call": [] }, "sourceInfo": { "approval": { "sourceInfo": [{ "pc": [534, 650], "errorMessage": "Box must have value" }, { "pc": [555], "errorMessage": "Insufficient balance at the sender account" }, { "pc": [213], "errorMessage": "Name of the asset must be longer or equal to 1 character" }, { "pc": [216], "errorMessage": "Name of the asset must be shorter or equal to 32 characters" }, { "pc": [66], "errorMessage": "OnCompletion must be NoOp" }, { "pc": [155], "errorMessage": "OnCompletion must be NoOp && can only call when creating" }, { "pc": [205], "errorMessage": "Only deployer of this smart contract can call bootstrap method" }, { "pc": [224], "errorMessage": "Symbol of the asset must be longer or equal to 1 character" }, { "pc": [228], "errorMessage": "Symbol of the asset must be shorter or equal to 8 characters" }, { "pc": [235], "errorMessage": "This method can be called only once" }, { "pc": [289, 309, 330, 340], "errorMessage": "check GlobalState exists" }, { "pc": [430], "errorMessage": "insufficient approval" }, { "pc": [163, 176], "errorMessage": "invalid array length header" }, { "pc": [170, 183], "errorMessage": "invalid number of bytes for arc4.dynamic_array<arc4.uint8>" }, { "pc": [354, 371, 400, 408, 466, 495, 503], "errorMessage": "invalid number of bytes for arc4.static_array<arc4.uint8, 32>" }, { "pc": [199, 379, 416, 474], "errorMessage": "invalid number of bytes for arc4.uint256" }, { "pc": [191], "errorMessage": "invalid number of bytes for arc4.uint8" }, { "pc": [297, 318], "errorMessage": "invalid size" }, { "pc": [438, 573, 595], "errorMessage": "overflow" }], "pcOffsetMethod": "none" }, "clear": { "sourceInfo": [], "pcOffsetMethod": "none" } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYXJjNC9pbmRleC5kLnRzOjpDb250cmFjdC5hcHByb3ZhbFByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBpbnRjYmxvY2sgMzIgMSAwIDIKICAgIGJ5dGVjYmxvY2sgMHgxNTFmN2M3NSAiYiIgInQiICJuIiAweDc5ODNjMzVjIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjM4CiAgICAvLyBleHBvcnQgY2xhc3MgQXJjMjAwIGV4dGVuZHMgQ29udHJhY3QgewogICAgdHhuIE51bUFwcEFyZ3MKICAgIGJ6IG1haW5fX19hbGdvdHNfXy5kZWZhdWx0Q3JlYXRlQDE3CiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIG11c3QgYmUgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydAogICAgcHVzaGJ5dGVzcyAweDk3NTM4MmUyIDB4NjU3ZDEzZWMgMHhiNmFlMWEyNSAweDg0ZWMxM2Q1IDB4ZWM5OTYwNDEgMHg4MmU1NzNjNCAweGRhNzAyNWI5IDB4NGE5NjhmOGYgMHhiNTQyMjEyNSAweGJiYjMxOWYzIC8vIG1ldGhvZCAiYm9vdHN0cmFwKGJ5dGVbXSxieXRlW10sdWludDgsdWludDI1Nilib29sIiwgbWV0aG9kICJhcmMyMDBfbmFtZSgpYnl0ZVszMl0iLCBtZXRob2QgImFyYzIwMF9zeW1ib2woKWJ5dGVbOF0iLCBtZXRob2QgImFyYzIwMF9kZWNpbWFscygpdWludDgiLCBtZXRob2QgImFyYzIwMF90b3RhbFN1cHBseSgpdWludDI1NiIsIG1ldGhvZCAiYXJjMjAwX2JhbGFuY2VPZihhZGRyZXNzKXVpbnQyNTYiLCBtZXRob2QgImFyYzIwMF90cmFuc2ZlcihhZGRyZXNzLHVpbnQyNTYpYm9vbCIsIG1ldGhvZCAiYXJjMjAwX3RyYW5zZmVyRnJvbShhZGRyZXNzLGFkZHJlc3MsdWludDI1Nilib29sIiwgbWV0aG9kICJhcmMyMDBfYXBwcm92ZShhZGRyZXNzLHVpbnQyNTYpYm9vbCIsIG1ldGhvZCAiYXJjMjAwX2FsbG93YW5jZShhZGRyZXNzLGFkZHJlc3MpdWludDI1NiIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDAKICAgIG1hdGNoIGJvb3RzdHJhcCBhcmMyMDBfbmFtZSBhcmMyMDBfc3ltYm9sIGFyYzIwMF9kZWNpbWFscyBhcmMyMDBfdG90YWxTdXBwbHkgYXJjMjAwX2JhbGFuY2VPZiBhcmMyMDBfdHJhbnNmZXIgYXJjMjAwX3RyYW5zZmVyRnJvbSBhcmMyMDBfYXBwcm92ZSBhcmMyMDBfYWxsb3dhbmNlCiAgICBlcnIKCm1haW5fX19hbGdvdHNfXy5kZWZhdWx0Q3JlYXRlQDE3OgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjM4CiAgICAvLyBleHBvcnQgY2xhc3MgQXJjMjAwIGV4dGVuZHMgQ29udHJhY3QgewogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgICEKICAgICYmCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIG11c3QgYmUgTm9PcCAmJiBjYW4gb25seSBjYWxsIHdoZW4gY3JlYXRpbmcKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OkFyYzIwMC5ib290c3RyYXBbcm91dGluZ10oKSAtPiB2b2lkOgpib290c3RyYXA6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NjMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGludGNfMiAvLyAwCiAgICBleHRyYWN0X3VpbnQxNiAvLyBvbiBlcnJvcjogaW52YWxpZCBhcnJheSBsZW5ndGggaGVhZGVyCiAgICBpbnRjXzMgLy8gMgogICAgKwogICAgZGlnIDEKICAgIGxlbgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5keW5hbWljX2FycmF5PGFyYzQudWludDg+CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBkdXAKICAgIGludGNfMiAvLyAwCiAgICBleHRyYWN0X3VpbnQxNiAvLyBvbiBlcnJvcjogaW52YWxpZCBhcnJheSBsZW5ndGggaGVhZGVyCiAgICBpbnRjXzMgLy8gMgogICAgKwogICAgZGlnIDEKICAgIGxlbgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5keW5hbWljX2FycmF5PGFyYzQudWludDg+CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18xIC8vIDEKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDgKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDQKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDI1NgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjY1CiAgICAvLyBhc3NlcnQoVHhuLnNlbmRlciA9PT0gR2xvYmFsLmNyZWF0b3JBZGRyZXNzLCAnT25seSBkZXBsb3llciBvZiB0aGlzIHNtYXJ0IGNvbnRyYWN0IGNhbiBjYWxsIGJvb3RzdHJhcCBtZXRob2QnKQogICAgdHhuIFNlbmRlcgogICAgZ2xvYmFsIENyZWF0b3JBZGRyZXNzCiAgICA9PQogICAgYXNzZXJ0IC8vIE9ubHkgZGVwbG95ZXIgb2YgdGhpcyBzbWFydCBjb250cmFjdCBjYW4gY2FsbCBib290c3RyYXAgbWV0aG9kCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NjYKICAgIC8vIGFzc2VydChuYW1lLm5hdGl2ZS5sZW5ndGggPiAwLCAnTmFtZSBvZiB0aGUgYXNzZXQgbXVzdCBiZSBsb25nZXIgb3IgZXF1YWwgdG8gMSBjaGFyYWN0ZXInKQogICAgZGlnIDMKICAgIGV4dHJhY3QgMiAwCiAgICBsZW4KICAgIGR1cAogICAgYXNzZXJ0IC8vIE5hbWUgb2YgdGhlIGFzc2V0IG11c3QgYmUgbG9uZ2VyIG9yIGVxdWFsIHRvIDEgY2hhcmFjdGVyCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NjcKICAgIC8vIGFzc2VydChuYW1lLm5hdGl2ZS5sZW5ndGggPD0gMzIsICdOYW1lIG9mIHRoZSBhc3NldCBtdXN0IGJlIHNob3J0ZXIgb3IgZXF1YWwgdG8gMzIgY2hhcmFjdGVycycpCiAgICBpbnRjXzAgLy8gMzIKICAgIDw9CiAgICBhc3NlcnQgLy8gTmFtZSBvZiB0aGUgYXNzZXQgbXVzdCBiZSBzaG9ydGVyIG9yIGVxdWFsIHRvIDMyIGNoYXJhY3RlcnMKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo2OAogICAgLy8gYXNzZXJ0KHN5bWJvbC5uYXRpdmUubGVuZ3RoID4gMCwgJ1N5bWJvbCBvZiB0aGUgYXNzZXQgbXVzdCBiZSBsb25nZXIgb3IgZXF1YWwgdG8gMSBjaGFyYWN0ZXInKQogICAgZGlnIDIKICAgIGV4dHJhY3QgMiAwCiAgICBsZW4KICAgIGR1cAogICAgYXNzZXJ0IC8vIFN5bWJvbCBvZiB0aGUgYXNzZXQgbXVzdCBiZSBsb25nZXIgb3IgZXF1YWwgdG8gMSBjaGFyYWN0ZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo2OQogICAgLy8gYXNzZXJ0KHN5bWJvbC5uYXRpdmUubGVuZ3RoIDw9IDgsICdTeW1ib2wgb2YgdGhlIGFzc2V0IG11c3QgYmUgc2hvcnRlciBvciBlcXVhbCB0byA4IGNoYXJhY3RlcnMnKQogICAgcHVzaGludCA4IC8vIDgKICAgIDw9CiAgICBhc3NlcnQgLy8gU3ltYm9sIG9mIHRoZSBhc3NldCBtdXN0IGJlIHNob3J0ZXIgb3IgZXF1YWwgdG8gOCBjaGFyYWN0ZXJzCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NzAKICAgIC8vIGFzc2VydCghdGhpcy50b3RhbFN1cHBseS5oYXNWYWx1ZSwgJ1RoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgb25seSBvbmNlJykKICAgIGludGNfMiAvLyAwCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NTcKICAgIC8vIHB1YmxpYyB0b3RhbFN1cHBseSA9IEdsb2JhbFN0YXRlPFVpbnQyNTY+KHsga2V5OiAndCcgfSkKICAgIGJ5dGVjXzIgLy8gInQiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NzAKICAgIC8vIGFzc2VydCghdGhpcy50b3RhbFN1cHBseS5oYXNWYWx1ZSwgJ1RoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgb25seSBvbmNlJykKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBidXJ5IDEKICAgICEKICAgIGFzc2VydCAvLyBUaGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIG9ubHkgb25jZQogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjQyCiAgICAvLyBwdWJsaWMgbmFtZSA9IEdsb2JhbFN0YXRlPER5bmFtaWNCeXRlcz4oeyBrZXk6ICduJyB9KQogICAgYnl0ZWNfMyAvLyAibiIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo3MgogICAgLy8gdGhpcy5uYW1lLnZhbHVlID0gbmFtZQogICAgdW5jb3ZlciA0CiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjQ3CiAgICAvLyBwdWJsaWMgc3ltYm9sID0gR2xvYmFsU3RhdGU8RHluYW1pY0J5dGVzPih7IGtleTogJ3MnIH0pCiAgICBwdXNoYnl0ZXMgInMiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NzMKICAgIC8vIHRoaXMuc3ltYm9sLnZhbHVlID0gc3ltYm9sCiAgICB1bmNvdmVyIDMKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NTcKICAgIC8vIHB1YmxpYyB0b3RhbFN1cHBseSA9IEdsb2JhbFN0YXRlPFVpbnQyNTY+KHsga2V5OiAndCcgfSkKICAgIGJ5dGVjXzIgLy8gInQiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NzQKICAgIC8vIHRoaXMudG90YWxTdXBwbHkudmFsdWUgPSB0b3RhbFN1cHBseQogICAgZGlnIDEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NTIKICAgIC8vIHB1YmxpYyBkZWNpbWFscyA9IEdsb2JhbFN0YXRlPFVpbnQ4Pih7IGtleTogJ2QnIH0pCiAgICBwdXNoYnl0ZXMgImQiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NzUKICAgIC8vIHRoaXMuZGVjaW1hbHMudmFsdWUgPSBkZWNpbWFscwogICAgdW5jb3ZlciAyCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjc2CiAgICAvLyBjb25zdCBzZW5kZXIgPSBuZXcgQWRkcmVzcyhUeG4uc2VuZGVyKQogICAgdHhuIFNlbmRlcgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjU5CiAgICAvLyBwdWJsaWMgYmFsYW5jZXMgPSBCb3hNYXA8QWRkcmVzcywgVWludDI1Nj4oeyBrZXlQcmVmaXg6ICdiJyB9KQogICAgYnl0ZWNfMSAvLyAiYiIKICAgIGRpZyAxCiAgICBjb25jYXQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo3OAogICAgLy8gdGhpcy5iYWxhbmNlcyhzZW5kZXIpLnZhbHVlID0gdG90YWxTdXBwbHkKICAgIGRpZyAyCiAgICBib3hfcHV0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6ODAKICAgIC8vIGVtaXQobmV3IGFyYzIwMF9UcmFuc2Zlcih7IGZyb206IG5ldyBBZGRyZXNzKEdsb2JhbC56ZXJvQWRkcmVzcyksIHRvOiBzZW5kZXIsIHZhbHVlOiB0b3RhbFN1cHBseSB9KSkKICAgIGdsb2JhbCBaZXJvQWRkcmVzcwogICAgc3dhcAogICAgY29uY2F0CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGJ5dGVjIDQgLy8gbWV0aG9kICJhcmMyMDBfVHJhbnNmZXIoYWRkcmVzcyxhZGRyZXNzLHVpbnQyNTYpIgogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo2MwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHB1c2hieXRlcyAweDE1MWY3Yzc1ODAKICAgIGxvZwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo6QXJjMjAwLmFyYzIwMF9uYW1lW3JvdXRpbmddKCkgLT4gdm9pZDoKYXJjMjAwX25hbWU6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OTEKICAgIC8vIHJldHVybiBuZXcgU3RhdGljQnl0ZXM8MzI+KHRoaXMubmFtZS52YWx1ZS5uYXRpdmUpCiAgICBpbnRjXzIgLy8gMAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjQyCiAgICAvLyBwdWJsaWMgbmFtZSA9IEdsb2JhbFN0YXRlPER5bmFtaWNCeXRlcz4oeyBrZXk6ICduJyB9KQogICAgYnl0ZWNfMyAvLyAibiIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo5MQogICAgLy8gcmV0dXJuIG5ldyBTdGF0aWNCeXRlczwzMj4odGhpcy5uYW1lLnZhbHVlLm5hdGl2ZSkKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICBleHRyYWN0IDIgMAogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIHNpemUKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo4OQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OkFyYzIwMC5hcmMyMDBfc3ltYm9sW3JvdXRpbmddKCkgLT4gdm9pZDoKYXJjMjAwX3N5bWJvbDoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxMDEKICAgIC8vIHJldHVybiBuZXcgU3RhdGljQnl0ZXM8OD4odGhpcy5zeW1ib2wudmFsdWUubmF0aXZlKQogICAgaW50Y18yIC8vIDAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo0NwogICAgLy8gcHVibGljIHN5bWJvbCA9IEdsb2JhbFN0YXRlPER5bmFtaWNCeXRlcz4oeyBrZXk6ICdzJyB9KQogICAgcHVzaGJ5dGVzICJzIgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjEwMQogICAgLy8gcmV0dXJuIG5ldyBTdGF0aWNCeXRlczw4Pih0aGlzLnN5bWJvbC52YWx1ZS5uYXRpdmUpCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIEdsb2JhbFN0YXRlIGV4aXN0cwogICAgZXh0cmFjdCAyIDAKICAgIGR1cAogICAgbGVuCiAgICBwdXNoaW50IDggLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIHNpemUKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo5OQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OkFyYzIwMC5hcmMyMDBfZGVjaW1hbHNbcm91dGluZ10oKSAtPiB2b2lkOgphcmMyMDBfZGVjaW1hbHM6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTExCiAgICAvLyByZXR1cm4gdGhpcy5kZWNpbWFscy52YWx1ZQogICAgaW50Y18yIC8vIDAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo1MgogICAgLy8gcHVibGljIGRlY2ltYWxzID0gR2xvYmFsU3RhdGU8VWludDg+KHsga2V5OiAnZCcgfSkKICAgIHB1c2hieXRlcyAiZCIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxMTEKICAgIC8vIHJldHVybiB0aGlzLmRlY2ltYWxzLnZhbHVlCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIEdsb2JhbFN0YXRlIGV4aXN0cwogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjEwOQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OkFyYzIwMC5hcmMyMDBfdG90YWxTdXBwbHlbcm91dGluZ10oKSAtPiB2b2lkOgphcmMyMDBfdG90YWxTdXBwbHk6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTIxCiAgICAvLyByZXR1cm4gdGhpcy50b3RhbFN1cHBseS52YWx1ZQogICAgaW50Y18yIC8vIDAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo1NwogICAgLy8gcHVibGljIHRvdGFsU3VwcGx5ID0gR2xvYmFsU3RhdGU8VWludDI1Nj4oeyBrZXk6ICd0JyB9KQogICAgYnl0ZWNfMiAvLyAidCIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxMjEKICAgIC8vIHJldHVybiB0aGlzLnRvdGFsU3VwcGx5LnZhbHVlCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIEdsb2JhbFN0YXRlIGV4aXN0cwogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjExOQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OkFyYzIwMC5hcmMyMDBfYmFsYW5jZU9mW3JvdXRpbmddKCkgLT4gdm9pZDoKYXJjMjAwX2JhbGFuY2VPZjoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxMzAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxMzIKICAgIC8vIHJldHVybiB0aGlzLl9iYWxhbmNlT2Yob3duZXIpCiAgICBjYWxsc3ViIF9iYWxhbmNlT2YKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxMzAKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgoKLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjpBcmMyMDAuYXJjMjAwX3RyYW5zZmVyW3JvdXRpbmddKCkgLT4gdm9pZDoKYXJjMjAwX3RyYW5zZmVyOgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE0MgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuc3RhdGljX2FycmF5PGFyYzQudWludDgsIDMyPgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50MjU2CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTQ0CiAgICAvLyByZXR1cm4gdGhpcy5fdHJhbnNmZXIobmV3IEFkZHJlc3MoVHhuLnNlbmRlciksIHRvLCB2YWx1ZSkKICAgIHR4biBTZW5kZXIKICAgIGNvdmVyIDIKICAgIGNhbGxzdWIgX3RyYW5zZmVyCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTQyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo6QXJjMjAwLmFyYzIwMF90cmFuc2ZlckZyb21bcm91dGluZ10oKSAtPiB2b2lkOgphcmMyMDBfdHJhbnNmZXJGcm9tOgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE1NQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuc3RhdGljX2FycmF5PGFyYzQudWludDgsIDMyPgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5zdGF0aWNfYXJyYXk8YXJjNC51aW50OCwgMzI+CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQyNTYKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxNTcKICAgIC8vIGNvbnN0IHNwZW5kZXIgPSBuZXcgQWRkcmVzcyhUeG4uc2VuZGVyKQogICAgdHhuIFNlbmRlcgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE1OAogICAgLy8gY29uc3Qgc3BlbmRlcl9hbGxvd2FuY2UgPSB0aGlzLl9hbGxvd2FuY2UoZnJvbSwgc3BlbmRlcikKICAgIGRpZyAzCiAgICBkaWcgMQogICAgY2FsbHN1YiBfYWxsb3dhbmNlCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTU5CiAgICAvLyBhc3NlcnQoc3BlbmRlcl9hbGxvd2FuY2UuYXNCaWdVaW50KCkgPj0gdmFsdWUuYXNCaWdVaW50KCksICdpbnN1ZmZpY2llbnQgYXBwcm92YWwnKQogICAgZHVwCiAgICBkaWcgMwogICAgYj49CiAgICBhc3NlcnQgLy8gaW5zdWZmaWNpZW50IGFwcHJvdmFsCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTYwCiAgICAvLyBjb25zdCBuZXdfc3BlbmRlcl9hbGxvd2FuY2UgPSBuZXcgVWludDI1NihzcGVuZGVyX2FsbG93YW5jZS5hc0JpZ1VpbnQoKSAtIHZhbHVlLmFzQmlnVWludCgpKQogICAgZGlnIDIKICAgIGItCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDMyCiAgICA8PQogICAgYXNzZXJ0IC8vIG92ZXJmbG93CiAgICBpbnRjXzAgLy8gMzIKICAgIGJ6ZXJvCiAgICBifAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE2MQogICAgLy8gdGhpcy5fYXBwcm92ZShmcm9tLCBzcGVuZGVyLCBuZXdfc3BlbmRlcl9hbGxvd2FuY2UpCiAgICBkaWcgNAogICAgY292ZXIgMgogICAgY2FsbHN1YiBfYXBwcm92ZQogICAgcG9wCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTYyCiAgICAvLyByZXR1cm4gdGhpcy5fdHJhbnNmZXIoZnJvbSwgdG8sIHZhbHVlKQogICAgY2FsbHN1YiBfdHJhbnNmZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxNTUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgoKLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjpBcmMyMDAuYXJjMjAwX2FwcHJvdmVbcm91dGluZ10oKSAtPiB2b2lkOgphcmMyMDBfYXBwcm92ZToKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxNzIKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDI1NgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE3NAogICAgLy8gY29uc3Qgb3duZXIgPSBuZXcgQWRkcmVzcyhUeG4uc2VuZGVyKQogICAgdHhuIFNlbmRlcgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE3NQogICAgLy8gcmV0dXJuIHRoaXMuX2FwcHJvdmUob3duZXIsIHNwZW5kZXIsIHZhbHVlKQogICAgY292ZXIgMgogICAgY2FsbHN1YiBfYXBwcm92ZQogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE3MgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OkFyYzIwMC5hcmMyMDBfYWxsb3dhbmNlW3JvdXRpbmddKCkgLT4gdm9pZDoKYXJjMjAwX2FsbG93YW5jZToKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxODUKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuc3RhdGljX2FycmF5PGFyYzQudWludDgsIDMyPgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE4NwogICAgLy8gcmV0dXJuIHRoaXMuX2FsbG93YW5jZShvd25lciwgc3BlbmRlcikKICAgIGNhbGxzdWIgX2FsbG93YW5jZQogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE4NQogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OkFyYzIwMC5fYmFsYW5jZU9mKG93bmVyOiBieXRlcykgLT4gYnl0ZXM6Cl9iYWxhbmNlT2Y6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MTkwCiAgICAvLyBwcml2YXRlIF9iYWxhbmNlT2Yob3duZXI6IEFkZHJlc3MpOiBVaW50MjU2IHsKICAgIHByb3RvIDEgMQogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjU5CiAgICAvLyBwdWJsaWMgYmFsYW5jZXMgPSBCb3hNYXA8QWRkcmVzcywgVWludDI1Nj4oeyBrZXlQcmVmaXg6ICdiJyB9KQogICAgYnl0ZWNfMSAvLyAiYiIKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBkdXAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxOTEKICAgIC8vIGlmICghdGhpcy5iYWxhbmNlcyhvd25lcikuZXhpc3RzKSByZXR1cm4gbmV3IFVpbnQyNTYoMCkKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYm56IF9iYWxhbmNlT2ZfYWZ0ZXJfaWZfZWxzZUAyCiAgICBieXRlYyA1IC8vIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgc3dhcAogICAgcmV0c3ViCgpfYmFsYW5jZU9mX2FmdGVyX2lmX2Vsc2VAMjoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxOTIKICAgIC8vIHJldHVybiB0aGlzLmJhbGFuY2VzKG93bmVyKS52YWx1ZQogICAgZnJhbWVfZGlnIDAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBCb3ggbXVzdCBoYXZlIHZhbHVlCiAgICBzd2FwCiAgICByZXRzdWIKCgovLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OkFyYzIwMC5fdHJhbnNmZXIoc2VuZGVyOiBieXRlcywgcmVjaXBpZW50OiBieXRlcywgYW1vdW50OiBieXRlcykgLT4gYnl0ZXM6Cl90cmFuc2ZlcjoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxOTUKICAgIC8vIHByaXZhdGUgX3RyYW5zZmVyKHNlbmRlcjogQWRkcmVzcywgcmVjaXBpZW50OiBBZGRyZXNzLCBhbW91bnQ6IFVpbnQyNTYpOiBCb29sIHsKICAgIHByb3RvIDMgMQogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE5NgogICAgLy8gY29uc3Qgc2VuZGVyX2JhbGFuY2UgPSB0aGlzLl9iYWxhbmNlT2Yoc2VuZGVyKQogICAgZnJhbWVfZGlnIC0zCiAgICBjYWxsc3ViIF9iYWxhbmNlT2YKICAgIGR1cAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjE5NwogICAgLy8gY29uc3QgcmVjaXBpZW50X2JhbGFuY2UgPSB0aGlzLl9iYWxhbmNlT2YocmVjaXBpZW50KQogICAgZnJhbWVfZGlnIC0yCiAgICBjYWxsc3ViIF9iYWxhbmNlT2YKICAgIHN3YXAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoxOTgKICAgIC8vIGFzc2VydChzZW5kZXJfYmFsYW5jZS5hc0JpZ1VpbnQoKSA+PSBhbW91bnQuYXNCaWdVaW50KCksICdJbnN1ZmZpY2llbnQgYmFsYW5jZSBhdCB0aGUgc2VuZGVyIGFjY291bnQnKQogICAgZnJhbWVfZGlnIC0xCiAgICBiPj0KICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgYmFsYW5jZSBhdCB0aGUgc2VuZGVyIGFjY291bnQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMDAKICAgIC8vIGlmIChzZW5kZXIgIT09IHJlY2lwaWVudCkgewogICAgZnJhbWVfZGlnIC0zCiAgICBmcmFtZV9kaWcgLTIKICAgICE9CiAgICBieiBfdHJhbnNmZXJfYWZ0ZXJfaWZfZWxzZUAyCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MjAyCiAgICAvLyB0aGlzLmJhbGFuY2VzKHNlbmRlcikudmFsdWUgPSBuZXcgVWludDI1NihzZW5kZXJfYmFsYW5jZS5hc0JpZ1VpbnQoKSAtIGFtb3VudC5hc0JpZ1VpbnQoKSkKICAgIGZyYW1lX2RpZyAwCiAgICBmcmFtZV9kaWcgLTEKICAgIGItCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDMyCiAgICA8PQogICAgYXNzZXJ0IC8vIG92ZXJmbG93CiAgICBpbnRjXzAgLy8gMzIKICAgIGJ6ZXJvCiAgICBzd2FwCiAgICBkaWcgMQogICAgYnwKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czo1OQogICAgLy8gcHVibGljIGJhbGFuY2VzID0gQm94TWFwPEFkZHJlc3MsIFVpbnQyNTY+KHsga2V5UHJlZml4OiAnYicgfSkKICAgIGJ5dGVjXzEgLy8gImIiCiAgICBmcmFtZV9kaWcgLTMKICAgIGNvbmNhdAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjIwMgogICAgLy8gdGhpcy5iYWxhbmNlcyhzZW5kZXIpLnZhbHVlID0gbmV3IFVpbnQyNTYoc2VuZGVyX2JhbGFuY2UuYXNCaWdVaW50KCkgLSBhbW91bnQuYXNCaWdVaW50KCkpCiAgICBzd2FwCiAgICBib3hfcHV0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MjAzCiAgICAvLyB0aGlzLmJhbGFuY2VzKHJlY2lwaWVudCkudmFsdWUgPSBuZXcgVWludDI1NihyZWNpcGllbnRfYmFsYW5jZS5hc0JpZ1VpbnQoKSArIGFtb3VudC5hc0JpZ1VpbnQoKSkKICAgIGZyYW1lX2RpZyAxCiAgICBmcmFtZV9kaWcgLTEKICAgIGIrCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDMyCiAgICA8PQogICAgYXNzZXJ0IC8vIG92ZXJmbG93CiAgICBifAogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjU5CiAgICAvLyBwdWJsaWMgYmFsYW5jZXMgPSBCb3hNYXA8QWRkcmVzcywgVWludDI1Nj4oeyBrZXlQcmVmaXg6ICdiJyB9KQogICAgYnl0ZWNfMSAvLyAiYiIKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MjAzCiAgICAvLyB0aGlzLmJhbGFuY2VzKHJlY2lwaWVudCkudmFsdWUgPSBuZXcgVWludDI1NihyZWNpcGllbnRfYmFsYW5jZS5hc0JpZ1VpbnQoKSArIGFtb3VudC5hc0JpZ1VpbnQoKSkKICAgIHN3YXAKICAgIGJveF9wdXQKCl90cmFuc2Zlcl9hZnRlcl9pZl9lbHNlQDI6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MjA1CiAgICAvLyBlbWl0KG5ldyBhcmMyMDBfVHJhbnNmZXIoeyBmcm9tOiBzZW5kZXIsIHRvOiByZWNpcGllbnQsIHZhbHVlOiBhbW91bnQgfSkpCiAgICBmcmFtZV9kaWcgLTMKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgYnl0ZWMgNCAvLyBtZXRob2QgImFyYzIwMF9UcmFuc2ZlcihhZGRyZXNzLGFkZHJlc3MsdWludDI1NikiCiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjIwNgogICAgLy8gcmV0dXJuIG5ldyBCb29sKHRydWUpCiAgICBwdXNoYnl0ZXMgMHg4MAogICAgZnJhbWVfYnVyeSAwCiAgICByZXRzdWIKCgovLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6OkFyYzIwMC5fYWxsb3dhbmNlKG93bmVyOiBieXRlcywgc3BlbmRlcjogYnl0ZXMpIC0+IGJ5dGVzOgpfYWxsb3dhbmNlOgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjIxMwogICAgLy8gcHJpdmF0ZSBfYWxsb3dhbmNlKG93bmVyOiBBZGRyZXNzLCBzcGVuZGVyOiBBZGRyZXNzKTogVWludDI1NiB7CiAgICBwcm90byAyIDEKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMTAKICAgIC8vIHJldHVybiBuZXcgU3RhdGljQnl0ZXM8MzI+KG9wLnNoYTI1NihvcC5jb25jYXQob3duZXIuYnl0ZXMsIHNwZW5kZXIuYnl0ZXMpKSkKICAgIGZyYW1lX2RpZyAtMgogICAgZnJhbWVfZGlnIC0xCiAgICBjb25jYXQKICAgIHNoYTI1NgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjYxCiAgICAvLyBwdWJsaWMgYXBwcm92YWxzID0gQm94TWFwPFN0YXRpY0J5dGVzPDMyPiwgQXBwcm92YWxTdHJ1Y3Q+KHsga2V5UHJlZml4OiAnYScgfSkKICAgIHB1c2hieXRlcyAiYSIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZHVwCiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MjE1CiAgICAvLyBpZiAoIXRoaXMuYXBwcm92YWxzKGtleSkuZXhpc3RzKSByZXR1cm4gbmV3IFVpbnQyNTYoMCkKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYm56IF9hbGxvd2FuY2VfYWZ0ZXJfaWZfZWxzZUAyCiAgICBieXRlYyA1IC8vIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgc3dhcAogICAgcmV0c3ViCgpfYWxsb3dhbmNlX2FmdGVyX2lmX2Vsc2VAMjoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMTYKICAgIC8vIHJldHVybiB0aGlzLmFwcHJvdmFscyhrZXkpLnZhbHVlLmFwcHJvdmFsQW1vdW50CiAgICBmcmFtZV9kaWcgMAogICAgYm94X2dldAogICAgYXNzZXJ0IC8vIEJveCBtdXN0IGhhdmUgdmFsdWUKICAgIGV4dHJhY3QgMCAzMgogICAgc3dhcAogICAgcmV0c3ViCgoKLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjpBcmMyMDAuX2FwcHJvdmUob3duZXI6IGJ5dGVzLCBzcGVuZGVyOiBieXRlcywgYW1vdW50OiBieXRlcykgLT4gYnl0ZXM6Cl9hcHByb3ZlOgogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjIxOQogICAgLy8gcHJpdmF0ZSBfYXBwcm92ZShvd25lcjogQWRkcmVzcywgc3BlbmRlcjogQWRkcmVzcywgYW1vdW50OiBVaW50MjU2KTogQm9vbCB7CiAgICBwcm90byAzIDEKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMTAKICAgIC8vIHJldHVybiBuZXcgU3RhdGljQnl0ZXM8MzI+KG9wLnNoYTI1NihvcC5jb25jYXQob3duZXIuYnl0ZXMsIHNwZW5kZXIuYnl0ZXMpKSkKICAgIGZyYW1lX2RpZyAtMwogICAgZnJhbWVfZGlnIC0yCiAgICBjb25jYXQKICAgIGR1cAogICAgc2hhMjU2CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6MjIxLTIyNQogICAgLy8gY29uc3QgYXBwcm92YWxCb3g6IEFwcHJvdmFsU3RydWN0ID0gbmV3IEFwcHJvdmFsU3RydWN0KHsKICAgIC8vICAgYXBwcm92YWxBbW91bnQ6IGFtb3VudCwKICAgIC8vICAgb3duZXI6IG93bmVyLAogICAgLy8gICBzcGVuZGVyOiBzcGVuZGVyLAogICAgLy8gfSkKICAgIGZyYW1lX2RpZyAtMQogICAgZnJhbWVfZGlnIC0zCiAgICBjb25jYXQKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwLmFsZ28udHM6NjEKICAgIC8vIHB1YmxpYyBhcHByb3ZhbHMgPSBCb3hNYXA8U3RhdGljQnl0ZXM8MzI+LCBBcHByb3ZhbFN0cnVjdD4oeyBrZXlQcmVmaXg6ICdhJyB9KQogICAgcHVzaGJ5dGVzICJhIgogICAgdW5jb3ZlciAyCiAgICBjb25jYXQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMjYKICAgIC8vIHRoaXMuYXBwcm92YWxzKGtleSkudmFsdWUgPSBjbG9uZShhcHByb3ZhbEJveCkKICAgIHN3YXAKICAgIGJveF9wdXQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDAuYWxnby50czoyMjcKICAgIC8vIGVtaXQobmV3IGFyYzIwMF9BcHByb3ZhbCh7IG93bmVyOiBvd25lciwgc3BlbmRlcjogc3BlbmRlciwgdmFsdWU6IGFtb3VudCB9KSkKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBwdXNoYnl0ZXMgMHgxOTY5Zjg2NSAvLyBtZXRob2QgImFyYzIwMF9BcHByb3ZhbChhZGRyZXNzLGFkZHJlc3MsdWludDI1NikiCiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgLy8gY29udHJhY3RzL2FyYzIwMC5hbGdvLnRzOjIyOAogICAgLy8gcmV0dXJuIG5ldyBCb29sKHRydWUpCiAgICBwdXNoYnl0ZXMgMHg4MAogICAgcmV0c3ViCg==", "clear": "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYmFzZS1jb250cmFjdC5kLnRzOjpCYXNlQ29udHJhY3QuY2xlYXJTdGF0ZVByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCg==" }, "byteCode": { "approval": "CyAEIAEAAiYGBBUffHUBYgF0AW4EeYPDXCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEbQQBVMRkURDEYRIIKBJdTguIEZX0T7AS2rholBITsE9UE7JlgQQSC5XPEBNpwJbkESpaPjwS1QiElBLuzGfM2GgCOCgALAIsAnQCyAL4AyADZAPYBOAFVADEZFDEYFBBEI0M2GgFJJFklCEsBFRJENhoCSSRZJQhLARUSRDYaA0kVIxJENhoESRUiEkQxADIJEkRLA1cCABVJRCIOREsCVwIAFUlEgQgORCQqZUUBFEQrTwRngAFzTwNnKksBZ4ABZE8CZzEAKUsBUEsCvzIDTFBMUCcETFCwgAUVH3x1gLAjQyQrZURXAgBJFSISRChMULAjQySAAXNlRFcCAEkVgQgSRChMULAjQySAAWRlRChMULAjQyQqZUQoTFCwI0M2GgFJFSISRIgAmyhMULAjQzYaAUkVIhJENhoCSRUiEkQxAE4CiACWKExQsCNDNhoBSRUiEkQ2GgJJFSISRDYaA0kVIhJEMQBLA0sBiADESUsDp0RLAqFJFSIORCKvq0sETgKIAM9IiABUKExQsCNDNhoBSRUiEkQ2GgJJFSISRDEATgKIAK4oTFCwI0M2GgFJFSISRDYaAkkVIhJEiABzKExQsCNDigEBKYv/UEm9RQFAAAQnBUyJiwC+REyJigMBi/2I/+BJi/6I/9pMi/+nRIv9i/4TQQAniwCL/6FJFSIORCKvTEsBqymL/VBMv4sBi/+gSRUiDkSrKYv+UEy/i/2L/lCL/1AnBExQsIABgIwAiYoCAYv+i/9QAYABYUxQSb1FAUAABCcFTImLAL5EVwAgTImKAwGL/Yv+UEkBi/+L/VCL/lCAAWFPAlBMv4v/UIAEGWn4ZUxQsIABgIk=", "clear": "C4EBQw==" }, "events": [{ "name": "arc200_Transfer", "args": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "value" }] }, { "name": "arc200_Approval", "args": [{ "type": "address", "name": "owner" }, { "type": "address", "name": "spender" }, { "type": "uint256", "name": "value" }] }], "templateVariables": {} };
function ApprovalStructFromTuple(abiTuple) {
  return (0, import_app_arc56.getABIStructFromABITuple)(abiTuple, APP_SPEC.structs.ApprovalStruct, APP_SPEC.structs);
}
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
        return { ...result, return: result.return };
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
        return { ...result, return: result.return };
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
        return { ...result, return: result.return };
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
        return { ...result, return: result.return };
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
        return { ...result, return: result.return };
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
        return { ...result, return: result.return };
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
        return { ...result, return: result.return };
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
    return returnValue !== void 0 ? (0, import_app_arc56.getArc56ReturnValue)(returnValue, this.appClient.getABIMethod(method), APP_SPEC.structs) : void 0;
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
  async arc200Name(params = { args: [] }) {
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
  async arc200Symbol(params = { args: [] }) {
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
  async arc200Decimals(params = { args: [] }) {
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
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.bootstrap(params)));
        resultMappers.push((v) => client.decodeReturnValue("bootstrap(byte[],byte[],uint8,uint256)bool", v));
        return this;
      },
      /**
       * Add a arc200_name()byte[32] method call against the Arc200 contract
       */
      arc200Name(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Name(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_name()byte[32]", v));
        return this;
      },
      /**
       * Add a arc200_symbol()byte[8] method call against the Arc200 contract
       */
      arc200Symbol(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Symbol(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_symbol()byte[8]", v));
        return this;
      },
      /**
       * Add a arc200_decimals()uint8 method call against the Arc200 contract
       */
      arc200Decimals(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Decimals(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_decimals()uint8", v));
        return this;
      },
      /**
       * Add a arc200_totalSupply()uint256 method call against the Arc200 contract
       */
      arc200TotalSupply(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200TotalSupply(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_totalSupply()uint256", v));
        return this;
      },
      /**
       * Add a arc200_balanceOf(address)uint256 method call against the Arc200 contract
       */
      arc200BalanceOf(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200BalanceOf(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_balanceOf(address)uint256", v));
        return this;
      },
      /**
       * Add a arc200_transfer(address,uint256)bool method call against the Arc200 contract
       */
      arc200Transfer(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Transfer(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_transfer(address,uint256)bool", v));
        return this;
      },
      /**
       * Add a arc200_transferFrom(address,address,uint256)bool method call against the Arc200 contract
       */
      arc200TransferFrom(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200TransferFrom(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_transferFrom(address,address,uint256)bool", v));
        return this;
      },
      /**
       * Add a arc200_approve(address,uint256)bool method call against the Arc200 contract
       */
      arc200Approve(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Approve(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_approve(address,uint256)bool", v));
        return this;
      },
      /**
       * Add a arc200_allowance(address,address)uint256 method call against the Arc200 contract
       */
      arc200Allowance(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Allowance(params)));
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
          returns: result.returns?.map((val, i) => resultMappers[i] !== void 0 ? resultMappers[i](val) : val.returnValue)
        };
      },
      async send(params) {
        await promiseChain;
        const result = await composer.send(params);
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== void 0 ? resultMappers[i](val) : val.returnValue)
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

// contracts/artifacts/Arc200_ASAClient.ts
var import_app_arc562 = require("@algorandfoundation/algokit-utils/types/app-arc56");
var import_app_client2 = require("@algorandfoundation/algokit-utils/types/app-client");
var import_app_factory2 = require("@algorandfoundation/algokit-utils/types/app-factory");
var APP_SPEC2 = { "name": "Arc200_ASA", "structs": { "ApprovalStruct": [{ "name": "approvalAmount", "type": "uint256" }, { "name": "owner", "type": "address" }, { "name": "spender", "type": "address" }], "arc200_exchangeInfo": [{ "name": "exchangeAsset", "type": "uint64" }, { "name": "sink", "type": "address" }], "asaProps": [{ "name": "metadataHash", "type": "byte[32]" }, { "name": "url", "type": "byte[]" }] }, "methods": [{ "name": "bootstrap", "args": [{ "type": "byte[]", "name": "name" }, { "type": "byte[]", "name": "symbol" }, { "type": "uint8", "name": "decimals" }, { "type": "uint256", "name": "totalSupply" }, { "type": "(byte[32],byte[])", "struct": "asaProps", "name": "asset" }], "returns": { "type": "bool" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "events": [{ "name": "arc200_Transfer", "args": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "value" }] }], "recommendations": {} }, { "name": "arc200_name", "args": [], "returns": { "type": "byte[32]", "desc": "The name of the token" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "Returns the name of the token", "events": [], "recommendations": {} }, { "name": "arc200_symbol", "args": [], "returns": { "type": "byte[8]", "desc": "The symbol of the token" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "Returns the symbol of the token", "events": [], "recommendations": {} }, { "name": "arc200_decimals", "args": [], "returns": { "type": "uint8", "desc": "The decimals of the token" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "Returns the decimals of the token", "events": [], "recommendations": {} }, { "name": "arc200_totalSupply", "args": [], "returns": { "type": "uint256", "desc": "The total supply of the token" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "Returns the total supply of the token", "events": [], "recommendations": {} }, { "name": "arc200_balanceOf", "args": [{ "type": "address", "name": "owner", "desc": "The address of the owner of the token" }], "returns": { "type": "uint256", "desc": "The current balance of the holder of the token" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "Returns the current balance of the owner of the token", "events": [], "recommendations": {} }, { "name": "arc200_transfer", "args": [{ "type": "address", "name": "to", "desc": "The destination of the transfer" }, { "type": "uint256", "name": "value", "desc": "Amount of tokens to transfer" }], "returns": { "type": "bool", "desc": "Success" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "Transfers tokens", "events": [{ "name": "arc200_Transfer", "args": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "value" }] }], "recommendations": {} }, { "name": "arc200_transferFrom", "args": [{ "type": "address", "name": "from", "desc": "The source of the transfer" }, { "type": "address", "name": "to", "desc": "The destination of the transfer" }, { "type": "uint256", "name": "value", "desc": "Amount of tokens to transfer" }], "returns": { "type": "bool", "desc": "Success" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "Transfers tokens from source to destination as approved spender", "events": [{ "name": "arc200_Approval", "args": [{ "type": "address", "name": "owner" }, { "type": "address", "name": "spender" }, { "type": "uint256", "name": "value" }] }, { "name": "arc200_Transfer", "args": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "value" }] }], "recommendations": {} }, { "name": "arc200_approve", "args": [{ "type": "address", "name": "spender", "desc": "Who is allowed to take tokens on owner's behalf" }, { "type": "uint256", "name": "value", "desc": "Amount of tokens to be taken by spender" }], "returns": { "type": "bool", "desc": "Success" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "Approve spender for a token", "events": [{ "name": "arc200_Approval", "args": [{ "type": "address", "name": "owner" }, { "type": "address", "name": "spender" }, { "type": "uint256", "name": "value" }] }], "recommendations": {} }, { "name": "arc200_exchange", "args": [], "returns": { "type": "(uint64,address)", "struct": "arc200_exchangeInfo" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "arc200_exchange() \u2192 (uint64 exchange_asset, address sink)\nReturns configuration parameters used by the exchange mechanism:\nexchange_asset: The ASA ID that the ARC200 token can be exchanged with.\n\nsink: The address that holds ARC200 tokens for redemption operations.\n\nThis method MUST NOT mutate state.\n\nhttps://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0", "events": [], "recommendations": {} }, { "name": "arc200_redeem", "args": [{ "type": "uint64", "name": "amount" }], "returns": { "type": "void" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "Exchanges ASA tokens for ARC200 tokens.\nRequirements:\nThe user MUST include a valid ASA transfer to the contract in the same transaction group.\n\nThe ASA ID MUST match the configured exchange_asset.\n\nThe amount transferred MUST be equal to or greater than the amount requested.\n\nThe contract MUST transfer ARC200 tokens to the user from the sink address.\n\nNo ARC200 tokens may be minted or burned during the exchange.\n\nhttps://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0", "events": [{ "name": "arc200_Transfer", "args": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "value" }] }], "recommendations": {} }, { "name": "deposit", "args": [{ "type": "uint64", "name": "amount", "desc": "" }], "returns": { "type": "uint256" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "wnnt200 for arc200_redeem", "events": [{ "name": "arc200_Transfer", "args": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "value" }] }], "recommendations": {} }, { "name": "arc200_swapBack", "args": [{ "type": "uint64", "name": "amount", "desc": "" }], "returns": { "type": "void" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "arc200_swapBack(uint64 amount) \u2192 void\n\nExchanges ARC200 tokens back into ASA tokens.\nRequirements:\nThe user MUST transfer ARC200 tokens to the configured sink address.\n\nUpon receiving the ARC200 tokens, the contract MUST transfer the equivalent amount of ASA tokens to the user.\n\nThe ASA MUST be transferred from the application's own account.\n\nNo ARC200 tokens may be minted or burned during the exchange.\n\nhttps://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0", "events": [{ "name": "arc200_Transfer", "args": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "value" }] }], "recommendations": {} }, { "name": "withdraw", "args": [{ "type": "uint64", "name": "amount", "desc": "" }], "returns": { "type": "uint256" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": false, "desc": "wnnt200 for arc200_swapBack", "events": [{ "name": "arc200_Transfer", "args": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "value" }] }], "recommendations": {} }, { "name": "arc200_allowance", "args": [{ "type": "address", "name": "owner", "desc": "Owner's account" }, { "type": "address", "name": "spender", "desc": "Who is allowed to take tokens on owner's behalf" }], "returns": { "type": "uint256", "desc": "The remaining allowance" }, "actions": { "create": [], "call": ["NoOp"] }, "readonly": true, "desc": "Returns the current allowance of the spender of the tokens of the owner", "events": [], "recommendations": {} }], "arcs": [22, 28], "desc": "Smart Contract Token Base Interface", "networks": {}, "state": { "schema": { "global": { "ints": 0, "bytes": 5 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": { "name": { "keyType": "AVMString", "valueType": "byte[]", "key": "bg==", "desc": "Name of the asset. Max 32 bytes" }, "symbol": { "keyType": "AVMString", "valueType": "byte[]", "key": "cw==", "desc": "Symbol of the asset. Max 8 bytes" }, "decimals": { "keyType": "AVMString", "valueType": "uint8", "key": "ZA==", "desc": "Decimals of the asset. Recommended is 6 decimal places." }, "totalSupply": { "keyType": "AVMString", "valueType": "uint256", "key": "dA==", "desc": "Minted supply" }, "assetId": { "keyType": "AVMString", "valueType": "uint64", "key": "YXNh", "desc": "Asa exchangable with the ARC200 token" } }, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": { "balances": { "keyType": "address", "valueType": "uint256", "prefix": "Yg==" }, "approvals": { "keyType": "byte[32]", "valueType": "ApprovalStruct", "prefix": "YQ==" } } } }, "bareActions": { "create": ["NoOp"], "call": [] }, "sourceInfo": { "approval": { "sourceInfo": [{ "pc": [698, 779], "errorMessage": "ASA ID must match configured exchange_asset" }, { "pc": [706, 787], "errorMessage": "ASA must be sent to the sink address" }, { "pc": [713, 794], "errorMessage": "ASA sender must match ARC200 redeemer" }, { "pc": [972, 1088], "errorMessage": "Box must have value" }, { "pc": [993], "errorMessage": "Insufficient balance at the sender account" }, { "pc": [366], "errorMessage": "Length must be 32" }, { "pc": [284], "errorMessage": "Name of the asset must be longer or equal to 1 character" }, { "pc": [287], "errorMessage": "Name of the asset must be shorter or equal to 32 characters" }, { "pc": [68], "errorMessage": "OnCompletion must be NoOp" }, { "pc": [192], "errorMessage": "OnCompletion must be NoOp && can only call when creating" }, { "pc": [275], "errorMessage": "Only deployer of this smart contract can call bootstrap method" }, { "pc": [666, 747], "errorMessage": "Previous txn must be ASA transfer" }, { "pc": [296], "errorMessage": "Symbol of the asset must be longer or equal to 1 character" }, { "pc": [299], "errorMessage": "Symbol of the asset must be shorter or equal to 8 characters" }, { "pc": [687, 768], "errorMessage": "The amount transferred MUST be equal to or greater than the amount requested" }, { "pc": [306], "errorMessage": "This method can be called only once" }, { "pc": [438, 458, 478, 488, 639, 695, 776, 850, 904], "errorMessage": "check GlobalState exists" }, { "pc": [578], "errorMessage": "insufficient approval" }, { "pc": [200, 214, 262], "errorMessage": "invalid array length header" }, { "pc": [208, 222], "errorMessage": "invalid number of bytes for arc4.dynamic_array<arc4.uint8>" }, { "pc": [502, 519, 548, 556, 614, 933, 941], "errorMessage": "invalid number of bytes for arc4.static_array<arc4.uint8, 32>" }, { "pc": [239, 527, 564, 622], "errorMessage": "invalid number of bytes for arc4.uint256" }, { "pc": [656, 737, 823, 876], "errorMessage": "invalid number of bytes for arc4.uint64" }, { "pc": [230], "errorMessage": "invalid number of bytes for arc4.uint8" }, { "pc": [269], "errorMessage": "invalid number of bytes for asaProps" }, { "pc": [446, 466], "errorMessage": "invalid size" }, { "pc": [253], "errorMessage": "invalid tail pointer at index 1 of (uint8[32],(len+uint8[]))" }, { "pc": [248], "errorMessage": "invalid tuple encoding" }, { "pc": [345, 586, 832, 879, 1011, 1033], "errorMessage": "overflow" }, { "pc": [677, 758], "errorMessage": "transaction type is axfer" }], "pcOffsetMethod": "none" }, "clear": { "sourceInfo": [], "pcOffsetMethod": "none" } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYXJjNC9pbmRleC5kLnRzOjpDb250cmFjdC5hcHByb3ZhbFByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBpbnRjYmxvY2sgMzIgMSAwIDgKICAgIGJ5dGVjYmxvY2sgMHgxNTFmN2M3NSAiYXNhIiAiYiIgInQiIDB4Nzk4M2MzNWMgMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjYxCiAgICAvLyBleHBvcnQgY2xhc3MgQXJjMjAwX0FTQSBleHRlbmRzIENvbnRyYWN0IHsKICAgIHR4biBOdW1BcHBBcmdzCiAgICBieiBtYWluX19fYWxnb3RzX18uZGVmYXVsdENyZWF0ZUAyMgogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBtdXN0IGJlIE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQKICAgIHB1c2hieXRlc3MgMHg4OWQ5NzUxZiAweDY1N2QxM2VjIDB4YjZhZTFhMjUgMHg4NGVjMTNkNSAweGVjOTk2MDQxIDB4ODJlNTczYzQgMHhkYTcwMjViOSAweDRhOTY4ZjhmIDB4YjU0MjIxMjUgMHg0MDliNTQ5NyAweDYyZDQxY2RmIDB4MDIyMzI2N2MgMHg3YzAyZGFhZiAweDY4Y2Y5OGNlIDB4YmJiMzE5ZjMgLy8gbWV0aG9kICJib290c3RyYXAoYnl0ZVtdLGJ5dGVbXSx1aW50OCx1aW50MjU2LChieXRlWzMyXSxieXRlW10pKWJvb2wiLCBtZXRob2QgImFyYzIwMF9uYW1lKClieXRlWzMyXSIsIG1ldGhvZCAiYXJjMjAwX3N5bWJvbCgpYnl0ZVs4XSIsIG1ldGhvZCAiYXJjMjAwX2RlY2ltYWxzKCl1aW50OCIsIG1ldGhvZCAiYXJjMjAwX3RvdGFsU3VwcGx5KCl1aW50MjU2IiwgbWV0aG9kICJhcmMyMDBfYmFsYW5jZU9mKGFkZHJlc3MpdWludDI1NiIsIG1ldGhvZCAiYXJjMjAwX3RyYW5zZmVyKGFkZHJlc3MsdWludDI1Nilib29sIiwgbWV0aG9kICJhcmMyMDBfdHJhbnNmZXJGcm9tKGFkZHJlc3MsYWRkcmVzcyx1aW50MjU2KWJvb2wiLCBtZXRob2QgImFyYzIwMF9hcHByb3ZlKGFkZHJlc3MsdWludDI1Nilib29sIiwgbWV0aG9kICJhcmMyMDBfZXhjaGFuZ2UoKSh1aW50NjQsYWRkcmVzcykiLCBtZXRob2QgImFyYzIwMF9yZWRlZW0odWludDY0KXZvaWQiLCBtZXRob2QgImRlcG9zaXQodWludDY0KXVpbnQyNTYiLCBtZXRob2QgImFyYzIwMF9zd2FwQmFjayh1aW50NjQpdm9pZCIsIG1ldGhvZCAid2l0aGRyYXcodWludDY0KXVpbnQyNTYiLCBtZXRob2QgImFyYzIwMF9hbGxvd2FuY2UoYWRkcmVzcyxhZGRyZXNzKXVpbnQyNTYiCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAwCiAgICBtYXRjaCBib290c3RyYXAgYXJjMjAwX25hbWUgYXJjMjAwX3N5bWJvbCBhcmMyMDBfZGVjaW1hbHMgYXJjMjAwX3RvdGFsU3VwcGx5IGFyYzIwMF9iYWxhbmNlT2YgYXJjMjAwX3RyYW5zZmVyIGFyYzIwMF90cmFuc2ZlckZyb20gYXJjMjAwX2FwcHJvdmUgYXJjMjAwX2V4Y2hhbmdlIGFyYzIwMF9yZWRlZW0gZGVwb3NpdCBhcmMyMDBfc3dhcEJhY2sgd2l0aGRyYXcgYXJjMjAwX2FsbG93YW5jZQogICAgZXJyCgptYWluX19fYWxnb3RzX18uZGVmYXVsdENyZWF0ZUAyMjoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6NjEKICAgIC8vIGV4cG9ydCBjbGFzcyBBcmMyMDBfQVNBIGV4dGVuZHMgQ29udHJhY3QgewogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgICEKICAgICYmCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIG11c3QgYmUgTm9PcCAmJiBjYW4gb25seSBjYWxsIHdoZW4gY3JlYXRpbmcKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjpBcmMyMDBfQVNBLmJvb3RzdHJhcFtyb3V0aW5nXSgpIC0+IHZvaWQ6CmJvb3RzdHJhcDoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6OTEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGludGNfMiAvLyAwCiAgICBleHRyYWN0X3VpbnQxNiAvLyBvbiBlcnJvcjogaW52YWxpZCBhcnJheSBsZW5ndGggaGVhZGVyCiAgICBwdXNoaW50IDIgLy8gMgogICAgKwogICAgZGlnIDEKICAgIGxlbgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5keW5hbWljX2FycmF5PGFyYzQudWludDg+CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBkdXAKICAgIGludGNfMiAvLyAwCiAgICBleHRyYWN0X3VpbnQxNiAvLyBvbiBlcnJvcjogaW52YWxpZCBhcnJheSBsZW5ndGggaGVhZGVyCiAgICBwdXNoaW50IDIgLy8gMgogICAgKwogICAgZGlnIDEKICAgIGxlbgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5keW5hbWljX2FycmF5PGFyYzQudWludDg+CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18xIC8vIDEKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDgKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDQKICAgIGR1cAogICAgbGVuCiAgICBkdXAKICAgIGludGNfMCAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50MjU2CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyA1CiAgICBkdXAKICAgIGxlbgogICAgZGlnIDEKICAgIGludGNfMCAvLyAzMgogICAgZXh0cmFjdF91aW50MTYgLy8gb24gZXJyb3I6IGludmFsaWQgdHVwbGUgZW5jb2RpbmcKICAgIGR1cAogICAgcHVzaGludCAzNCAvLyAzNAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIHRhaWwgcG9pbnRlciBhdCBpbmRleCAxIG9mICh1aW50OFszMl0sKGxlbit1aW50OFtdKSkKICAgIGRpZyAyCiAgICBzd2FwCiAgICBkaWcgMgogICAgc3Vic3RyaW5nMwogICAgZHVwCiAgICBpbnRjXzIgLy8gMAogICAgZXh0cmFjdF91aW50MTYgLy8gb24gZXJyb3I6IGludmFsaWQgYXJyYXkgbGVuZ3RoIGhlYWRlcgogICAgcHVzaGludCAzNiAvLyAzNgogICAgKwogICAgdW5jb3ZlciAyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhc2FQcm9wcwogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo5OQogICAgLy8gYXNzZXJ0KFR4bi5zZW5kZXIgPT09IEdsb2JhbC5jcmVhdG9yQWRkcmVzcywgJ09ubHkgZGVwbG95ZXIgb2YgdGhpcyBzbWFydCBjb250cmFjdCBjYW4gY2FsbCBib290c3RyYXAgbWV0aG9kJykKICAgIHR4biBTZW5kZXIKICAgIGdsb2JhbCBDcmVhdG9yQWRkcmVzcwogICAgPT0KICAgIGFzc2VydCAvLyBPbmx5IGRlcGxveWVyIG9mIHRoaXMgc21hcnQgY29udHJhY3QgY2FuIGNhbGwgYm9vdHN0cmFwIG1ldGhvZAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxMDAKICAgIC8vIGFzc2VydChuYW1lLm5hdGl2ZS5sZW5ndGggPiAwLCAnTmFtZSBvZiB0aGUgYXNzZXQgbXVzdCBiZSBsb25nZXIgb3IgZXF1YWwgdG8gMSBjaGFyYWN0ZXInKQogICAgZGlnIDYKICAgIGV4dHJhY3QgMiAwCiAgICBkdXAKICAgIGxlbgogICAgZHVwCiAgICBhc3NlcnQgLy8gTmFtZSBvZiB0aGUgYXNzZXQgbXVzdCBiZSBsb25nZXIgb3IgZXF1YWwgdG8gMSBjaGFyYWN0ZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTAxCiAgICAvLyBhc3NlcnQobmFtZS5uYXRpdmUubGVuZ3RoIDw9IDMyLCAnTmFtZSBvZiB0aGUgYXNzZXQgbXVzdCBiZSBzaG9ydGVyIG9yIGVxdWFsIHRvIDMyIGNoYXJhY3RlcnMnKQogICAgaW50Y18wIC8vIDMyCiAgICA8PQogICAgYXNzZXJ0IC8vIE5hbWUgb2YgdGhlIGFzc2V0IG11c3QgYmUgc2hvcnRlciBvciBlcXVhbCB0byAzMiBjaGFyYWN0ZXJzCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjEwMgogICAgLy8gYXNzZXJ0KHN5bWJvbC5uYXRpdmUubGVuZ3RoID4gMCwgJ1N5bWJvbCBvZiB0aGUgYXNzZXQgbXVzdCBiZSBsb25nZXIgb3IgZXF1YWwgdG8gMSBjaGFyYWN0ZXInKQogICAgZGlnIDYKICAgIGV4dHJhY3QgMiAwCiAgICBkdXAKICAgIGxlbgogICAgZHVwCiAgICBhc3NlcnQgLy8gU3ltYm9sIG9mIHRoZSBhc3NldCBtdXN0IGJlIGxvbmdlciBvciBlcXVhbCB0byAxIGNoYXJhY3RlcgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxMDMKICAgIC8vIGFzc2VydChzeW1ib2wubmF0aXZlLmxlbmd0aCA8PSA4LCAnU3ltYm9sIG9mIHRoZSBhc3NldCBtdXN0IGJlIHNob3J0ZXIgb3IgZXF1YWwgdG8gOCBjaGFyYWN0ZXJzJykKICAgIGludGNfMyAvLyA4CiAgICA8PQogICAgYXNzZXJ0IC8vIFN5bWJvbCBvZiB0aGUgYXNzZXQgbXVzdCBiZSBzaG9ydGVyIG9yIGVxdWFsIHRvIDggY2hhcmFjdGVycwogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxMDQKICAgIC8vIGFzc2VydCghdGhpcy50b3RhbFN1cHBseS5oYXNWYWx1ZSwgJ1RoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgb25seSBvbmNlJykKICAgIGludGNfMiAvLyAwCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjgwCiAgICAvLyBwdWJsaWMgdG90YWxTdXBwbHkgPSBHbG9iYWxTdGF0ZTxVaW50MjU2Pih7IGtleTogJ3QnIH0pCiAgICBieXRlY18zIC8vICJ0IgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxMDQKICAgIC8vIGFzc2VydCghdGhpcy50b3RhbFN1cHBseS5oYXNWYWx1ZSwgJ1RoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgb25seSBvbmNlJykKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBidXJ5IDEKICAgICEKICAgIGFzc2VydCAvLyBUaGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIG9ubHkgb25jZQogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo2NQogICAgLy8gcHVibGljIG5hbWUgPSBHbG9iYWxTdGF0ZTxEeW5hbWljQnl0ZXM+KHsga2V5OiAnbicgfSkKICAgIHB1c2hieXRlcyAibiIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTA2CiAgICAvLyB0aGlzLm5hbWUudmFsdWUgPSBuYW1lCiAgICB1bmNvdmVyIDkKICAgIGFwcF9nbG9iYWxfcHV0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjcwCiAgICAvLyBwdWJsaWMgc3ltYm9sID0gR2xvYmFsU3RhdGU8RHluYW1pY0J5dGVzPih7IGtleTogJ3MnIH0pCiAgICBwdXNoYnl0ZXMgInMiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjEwNwogICAgLy8gdGhpcy5zeW1ib2wudmFsdWUgPSBzeW1ib2wKICAgIHVuY292ZXIgOAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6ODAKICAgIC8vIHB1YmxpYyB0b3RhbFN1cHBseSA9IEdsb2JhbFN0YXRlPFVpbnQyNTY+KHsga2V5OiAndCcgfSkKICAgIGJ5dGVjXzMgLy8gInQiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjEwOAogICAgLy8gdGhpcy50b3RhbFN1cHBseS52YWx1ZSA9IHRvdGFsU3VwcGx5CiAgICBkaWcgNgogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6NzUKICAgIC8vIHB1YmxpYyBkZWNpbWFscyA9IEdsb2JhbFN0YXRlPFVpbnQ4Pih7IGtleTogJ2QnIH0pCiAgICBwdXNoYnl0ZXMgImQiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjEwOQogICAgLy8gdGhpcy5kZWNpbWFscy52YWx1ZSA9IGRlY2ltYWxzCiAgICBkaWcgNwogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTExCiAgICAvLyBjb25zdCBzZW5kZXIgPSBuZXcgQWRkcmVzcyhUeG4uc2VuZGVyKQogICAgdHhuIFNlbmRlcgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo4MgogICAgLy8gcHVibGljIGJhbGFuY2VzID0gQm94TWFwPEFkZHJlc3MsIFVpbnQyNTY+KHsga2V5UHJlZml4OiAnYicgfSkKICAgIGJ5dGVjXzIgLy8gImIiCiAgICBkaWcgMQogICAgY29uY2F0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjExMwogICAgLy8gdGhpcy5iYWxhbmNlcyhzZW5kZXIpLnZhbHVlID0gdG90YWxTdXBwbHkKICAgIGRpZyA3CiAgICBib3hfcHV0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjExNS0xMjgKICAgIC8vIGNvbnN0IGNyZWF0ZWRBc3NldCA9IGl0eG4KICAgIC8vICAgLmFzc2V0Q29uZmlnKHsKICAgIC8vICAgICB0b3RhbDogdG90YWxTdXBwbHkuYXNVaW50NjQoKSwKICAgIC8vICAgICBkZWZhdWx0RnJvemVuOiBmYWxzZSwKICAgIC8vICAgICB1bml0TmFtZTogc3ltYm9sLm5hdGl2ZSwKICAgIC8vICAgICBhc3NldE5hbWU6IG5hbWUubmF0aXZlLAogICAgLy8gICAgIG1hbmFnZXI6IEdsb2JhbC5jdXJyZW50QXBwbGljYXRpb25BZGRyZXNzLAogICAgLy8gICAgIHJlc2VydmU6IEdsb2JhbC5jdXJyZW50QXBwbGljYXRpb25BZGRyZXNzLAogICAgLy8gICAgIGZlZTogMCwKICAgIC8vICAgICBtZXRhZGF0YUhhc2g6IGFzc2V0Lm1ldGFkYXRhSGFzaC5uYXRpdmUudG9GaXhlZCh7IGxlbmd0aDogMzIgfSksCiAgICAvLyAgICAgdXJsOiBhc3NldC51cmwubmF0aXZlLAogICAgLy8gICAgIGRlY2ltYWxzOiBkZWNpbWFscy5hc1VpbnQ2NCgpLAogICAgLy8gICB9KQogICAgLy8gICAuc3VibWl0KCkuY3JlYXRlZEFzc2V0CiAgICBpdHhuX2JlZ2luCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjExNwogICAgLy8gdG90YWw6IHRvdGFsU3VwcGx5LmFzVWludDY0KCksCiAgICBkaWcgNgogICAgYml0bGVuCiAgICBwdXNoaW50IDY0IC8vIDY0CiAgICA8PQogICAgYXNzZXJ0IC8vIG92ZXJmbG93CiAgICB1bmNvdmVyIDUKICAgIGludGNfMyAvLyA4CiAgICAtCiAgICBkaWcgNgogICAgc3dhcAogICAgZXh0cmFjdF91aW50NjQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTIxCiAgICAvLyBtYW5hZ2VyOiBHbG9iYWwuY3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcywKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjEyMgogICAgLy8gcmVzZXJ2ZTogR2xvYmFsLmN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MsCiAgICBkdXAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTI0CiAgICAvLyBtZXRhZGF0YUhhc2g6IGFzc2V0Lm1ldGFkYXRhSGFzaC5uYXRpdmUudG9GaXhlZCh7IGxlbmd0aDogMzIgfSksCiAgICB1bmNvdmVyIDcKICAgIGV4dHJhY3QgMCAzMgogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBMZW5ndGggbXVzdCBiZSAzMgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxMjUKICAgIC8vIHVybDogYXNzZXQudXJsLm5hdGl2ZSwKICAgIHVuY292ZXIgNwogICAgZXh0cmFjdCAyIDAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTI2CiAgICAvLyBkZWNpbWFsczogZGVjaW1hbHMuYXNVaW50NjQoKSwKICAgIHVuY292ZXIgOQogICAgYnRvaQogICAgaXR4bl9maWVsZCBDb25maWdBc3NldERlY2ltYWxzCiAgICBpdHhuX2ZpZWxkIENvbmZpZ0Fzc2V0VVJMCiAgICBpdHhuX2ZpZWxkIENvbmZpZ0Fzc2V0TWV0YWRhdGFIYXNoCiAgICBpdHhuX2ZpZWxkIENvbmZpZ0Fzc2V0UmVzZXJ2ZQogICAgaXR4bl9maWVsZCBDb25maWdBc3NldE1hbmFnZXIKICAgIHVuY292ZXIgMwogICAgaXR4bl9maWVsZCBDb25maWdBc3NldE5hbWUKICAgIHVuY292ZXIgMgogICAgaXR4bl9maWVsZCBDb25maWdBc3NldFVuaXROYW1lCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjExOAogICAgLy8gZGVmYXVsdEZyb3plbjogZmFsc2UsCiAgICBpbnRjXzIgLy8gMAogICAgaXR4bl9maWVsZCBDb25maWdBc3NldERlZmF1bHRGcm96ZW4KICAgIGl0eG5fZmllbGQgQ29uZmlnQXNzZXRUb3RhbAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxMTUtMTI3CiAgICAvLyBjb25zdCBjcmVhdGVkQXNzZXQgPSBpdHhuCiAgICAvLyAgIC5hc3NldENvbmZpZyh7CiAgICAvLyAgICAgdG90YWw6IHRvdGFsU3VwcGx5LmFzVWludDY0KCksCiAgICAvLyAgICAgZGVmYXVsdEZyb3plbjogZmFsc2UsCiAgICAvLyAgICAgdW5pdE5hbWU6IHN5bWJvbC5uYXRpdmUsCiAgICAvLyAgICAgYXNzZXROYW1lOiBuYW1lLm5hdGl2ZSwKICAgIC8vICAgICBtYW5hZ2VyOiBHbG9iYWwuY3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcywKICAgIC8vICAgICByZXNlcnZlOiBHbG9iYWwuY3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcywKICAgIC8vICAgICBmZWU6IDAsCiAgICAvLyAgICAgbWV0YWRhdGFIYXNoOiBhc3NldC5tZXRhZGF0YUhhc2gubmF0aXZlLnRvRml4ZWQoeyBsZW5ndGg6IDMyIH0pLAogICAgLy8gICAgIHVybDogYXNzZXQudXJsLm5hdGl2ZSwKICAgIC8vICAgICBkZWNpbWFsczogZGVjaW1hbHMuYXNVaW50NjQoKSwKICAgIC8vICAgfSkKICAgIHB1c2hpbnQgMyAvLyAzCiAgICBpdHhuX2ZpZWxkIFR5cGVFbnVtCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjEyMwogICAgLy8gZmVlOiAwLAogICAgaW50Y18yIC8vIDAKICAgIGl0eG5fZmllbGQgRmVlCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjExNS0xMjgKICAgIC8vIGNvbnN0IGNyZWF0ZWRBc3NldCA9IGl0eG4KICAgIC8vICAgLmFzc2V0Q29uZmlnKHsKICAgIC8vICAgICB0b3RhbDogdG90YWxTdXBwbHkuYXNVaW50NjQoKSwKICAgIC8vICAgICBkZWZhdWx0RnJvemVuOiBmYWxzZSwKICAgIC8vICAgICB1bml0TmFtZTogc3ltYm9sLm5hdGl2ZSwKICAgIC8vICAgICBhc3NldE5hbWU6IG5hbWUubmF0aXZlLAogICAgLy8gICAgIG1hbmFnZXI6IEdsb2JhbC5jdXJyZW50QXBwbGljYXRpb25BZGRyZXNzLAogICAgLy8gICAgIHJlc2VydmU6IEdsb2JhbC5jdXJyZW50QXBwbGljYXRpb25BZGRyZXNzLAogICAgLy8gICAgIGZlZTogMCwKICAgIC8vICAgICBtZXRhZGF0YUhhc2g6IGFzc2V0Lm1ldGFkYXRhSGFzaC5uYXRpdmUudG9GaXhlZCh7IGxlbmd0aDogMzIgfSksCiAgICAvLyAgICAgdXJsOiBhc3NldC51cmwubmF0aXZlLAogICAgLy8gICAgIGRlY2ltYWxzOiBkZWNpbWFscy5hc1VpbnQ2NCgpLAogICAgLy8gICB9KQogICAgLy8gICAuc3VibWl0KCkuY3JlYXRlZEFzc2V0CiAgICBpdHhuX3N1Ym1pdAogICAgaXR4biBDcmVhdGVkQXNzZXRJRAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxMzAKICAgIC8vIHRoaXMuYXNzZXRJZC52YWx1ZSA9IG5ldyBVaW50NjQoY3JlYXRlZEFzc2V0LmlkKQogICAgaXRvYgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo4OQogICAgLy8gcHVibGljIGFzc2V0SWQgPSBHbG9iYWxTdGF0ZTxVaW50NjQ+KHsga2V5OiAnYXNhJyB9KQogICAgYnl0ZWNfMSAvLyAiYXNhIgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxMzAKICAgIC8vIHRoaXMuYXNzZXRJZC52YWx1ZSA9IG5ldyBVaW50NjQoY3JlYXRlZEFzc2V0LmlkKQogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTMyCiAgICAvLyBlbWl0KG5ldyBhcmMyMDBfVHJhbnNmZXIoeyBmcm9tOiBuZXcgQWRkcmVzcyhHbG9iYWwuemVyb0FkZHJlc3MpLCB0bzogc2VuZGVyLCB2YWx1ZTogdG90YWxTdXBwbHkgfSkpCiAgICBnbG9iYWwgWmVyb0FkZHJlc3MKICAgIHN3YXAKICAgIGNvbmNhdAogICAgc3dhcAogICAgY29uY2F0CiAgICBieXRlYyA0IC8vIG1ldGhvZCAiYXJjMjAwX1RyYW5zZmVyKGFkZHJlc3MsYWRkcmVzcyx1aW50MjU2KSIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjkxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgcHVzaGJ5dGVzIDB4MTUxZjdjNzU4MAogICAgbG9nCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgoKLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo6QXJjMjAwX0FTQS5hcmMyMDBfbmFtZVtyb3V0aW5nXSgpIC0+IHZvaWQ6CmFyYzIwMF9uYW1lOgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxNDMKICAgIC8vIHJldHVybiBuZXcgU3RhdGljQnl0ZXM8MzI+KHRoaXMubmFtZS52YWx1ZS5uYXRpdmUpCiAgICBpbnRjXzIgLy8gMAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo2NQogICAgLy8gcHVibGljIG5hbWUgPSBHbG9iYWxTdGF0ZTxEeW5hbWljQnl0ZXM+KHsga2V5OiAnbicgfSkKICAgIHB1c2hieXRlcyAibiIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTQzCiAgICAvLyByZXR1cm4gbmV3IFN0YXRpY0J5dGVzPDMyPih0aGlzLm5hbWUudmFsdWUubmF0aXZlKQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBHbG9iYWxTdGF0ZSBleGlzdHMKICAgIGV4dHJhY3QgMiAwCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgc2l6ZQogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxNDEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgoKLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo6QXJjMjAwX0FTQS5hcmMyMDBfc3ltYm9sW3JvdXRpbmddKCkgLT4gdm9pZDoKYXJjMjAwX3N5bWJvbDoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTUzCiAgICAvLyByZXR1cm4gbmV3IFN0YXRpY0J5dGVzPDg+KHRoaXMuc3ltYm9sLnZhbHVlLm5hdGl2ZSkKICAgIGludGNfMiAvLyAwCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjcwCiAgICAvLyBwdWJsaWMgc3ltYm9sID0gR2xvYmFsU3RhdGU8RHluYW1pY0J5dGVzPih7IGtleTogJ3MnIH0pCiAgICBwdXNoYnl0ZXMgInMiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjE1MwogICAgLy8gcmV0dXJuIG5ldyBTdGF0aWNCeXRlczw4Pih0aGlzLnN5bWJvbC52YWx1ZS5uYXRpdmUpCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIEdsb2JhbFN0YXRlIGV4aXN0cwogICAgZXh0cmFjdCAyIDAKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzMgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIHNpemUKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTUxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6OkFyYzIwMF9BU0EuYXJjMjAwX2RlY2ltYWxzW3JvdXRpbmddKCkgLT4gdm9pZDoKYXJjMjAwX2RlY2ltYWxzOgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxNjMKICAgIC8vIHJldHVybiB0aGlzLmRlY2ltYWxzLnZhbHVlCiAgICBpbnRjXzIgLy8gMAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo3NQogICAgLy8gcHVibGljIGRlY2ltYWxzID0gR2xvYmFsU3RhdGU8VWludDg+KHsga2V5OiAnZCcgfSkKICAgIHB1c2hieXRlcyAiZCIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTYzCiAgICAvLyByZXR1cm4gdGhpcy5kZWNpbWFscy52YWx1ZQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBHbG9iYWxTdGF0ZSBleGlzdHMKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTYxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6OkFyYzIwMF9BU0EuYXJjMjAwX3RvdGFsU3VwcGx5W3JvdXRpbmddKCkgLT4gdm9pZDoKYXJjMjAwX3RvdGFsU3VwcGx5OgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxNzMKICAgIC8vIHJldHVybiB0aGlzLnRvdGFsU3VwcGx5LnZhbHVlCiAgICBpbnRjXzIgLy8gMAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo4MAogICAgLy8gcHVibGljIHRvdGFsU3VwcGx5ID0gR2xvYmFsU3RhdGU8VWludDI1Nj4oeyBrZXk6ICd0JyB9KQogICAgYnl0ZWNfMyAvLyAidCIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTczCiAgICAvLyByZXR1cm4gdGhpcy50b3RhbFN1cHBseS52YWx1ZQogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBHbG9iYWxTdGF0ZSBleGlzdHMKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTcxCiAgICAvLyBAYXJjNC5hYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6OkFyYzIwMF9BU0EuYXJjMjAwX2JhbGFuY2VPZltyb3V0aW5nXSgpIC0+IHZvaWQ6CmFyYzIwMF9iYWxhbmNlT2Y6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjE4MgogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuc3RhdGljX2FycmF5PGFyYzQudWludDgsIDMyPgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxODQKICAgIC8vIHJldHVybiB0aGlzLl9iYWxhbmNlT2Yob3duZXIpCiAgICBjYWxsc3ViIF9iYWxhbmNlT2YKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTgyCiAgICAvLyBAYXJjNC5hYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6OkFyYzIwMF9BU0EuYXJjMjAwX3RyYW5zZmVyW3JvdXRpbmddKCkgLT4gdm9pZDoKYXJjMjAwX3RyYW5zZmVyOgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxOTQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDI1NgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoxOTYKICAgIC8vIHJldHVybiB0aGlzLl90cmFuc2ZlcihuZXcgQWRkcmVzcyhUeG4uc2VuZGVyKSwgdG8sIHZhbHVlKQogICAgdHhuIFNlbmRlcgogICAgY292ZXIgMgogICAgY2FsbHN1YiBfdHJhbnNmZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MTk0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6OkFyYzIwMF9BU0EuYXJjMjAwX3RyYW5zZmVyRnJvbVtyb3V0aW5nXSgpIC0+IHZvaWQ6CmFyYzIwMF90cmFuc2ZlckZyb206CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjIwNwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMzIKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuc3RhdGljX2FycmF5PGFyYzQudWludDgsIDMyPgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5zdGF0aWNfYXJyYXk8YXJjNC51aW50OCwgMzI+CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAzCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQyNTYKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MjA5CiAgICAvLyBjb25zdCBzcGVuZGVyID0gbmV3IEFkZHJlc3MoVHhuLnNlbmRlcikKICAgIHR4biBTZW5kZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MjEwCiAgICAvLyBjb25zdCBzcGVuZGVyX2FsbG93YW5jZSA9IHRoaXMuX2FsbG93YW5jZShmcm9tLCBzcGVuZGVyKQogICAgZGlnIDMKICAgIGRpZyAxCiAgICBjYWxsc3ViIF9hbGxvd2FuY2UKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MjExCiAgICAvLyBhc3NlcnQoc3BlbmRlcl9hbGxvd2FuY2UuYXNCaWdVaW50KCkgPj0gdmFsdWUuYXNCaWdVaW50KCksICdpbnN1ZmZpY2llbnQgYXBwcm92YWwnKQogICAgZHVwCiAgICBkaWcgMwogICAgYj49CiAgICBhc3NlcnQgLy8gaW5zdWZmaWNpZW50IGFwcHJvdmFsCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjIxMgogICAgLy8gY29uc3QgbmV3X3NwZW5kZXJfYWxsb3dhbmNlID0gbmV3IFVpbnQyNTYoc3BlbmRlcl9hbGxvd2FuY2UuYXNCaWdVaW50KCkgLSB2YWx1ZS5hc0JpZ1VpbnQoKSkKICAgIGRpZyAyCiAgICBiLQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAzMgogICAgPD0KICAgIGFzc2VydCAvLyBvdmVyZmxvdwogICAgaW50Y18wIC8vIDMyCiAgICBiemVybwogICAgYnwKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MjEzCiAgICAvLyB0aGlzLl9hcHByb3ZlKGZyb20sIHNwZW5kZXIsIG5ld19zcGVuZGVyX2FsbG93YW5jZSkKICAgIGRpZyA0CiAgICBjb3ZlciAyCiAgICBjYWxsc3ViIF9hcHByb3ZlCiAgICBwb3AKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MjE0CiAgICAvLyByZXR1cm4gdGhpcy5fdHJhbnNmZXIoZnJvbSwgdG8sIHZhbHVlKQogICAgY2FsbHN1YiBfdHJhbnNmZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MjA3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18xIC8vIDEKICAgIHJldHVybgoKCi8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6OkFyYzIwMF9BU0EuYXJjMjAwX2FwcHJvdmVbcm91dGluZ10oKSAtPiB2b2lkOgphcmMyMDBfYXBwcm92ZToKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MjI0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5zdGF0aWNfYXJyYXk8YXJjNC51aW50OCwgMzI+CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQyNTYKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MjI2CiAgICAvLyBjb25zdCBvd25lciA9IG5ldyBBZGRyZXNzKFR4bi5zZW5kZXIpCiAgICB0eG4gU2VuZGVyCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjIyNwogICAgLy8gcmV0dXJuIHRoaXMuX2FwcHJvdmUob3duZXIsIHNwZW5kZXIsIHZhbHVlKQogICAgY292ZXIgMgogICAgY2FsbHN1YiBfYXBwcm92ZQogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoyMjQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgoKLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo6QXJjMjAwX0FTQS5hcmMyMDBfZXhjaGFuZ2Vbcm91dGluZ10oKSAtPiB2b2lkOgphcmMyMDBfZXhjaGFuZ2U6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI0MwogICAgLy8gZXhjaGFuZ2VfYXNzZXQ6IHRoaXMuYXNzZXRJZC52YWx1ZSwgLy9UaGUgQVNBIElEIHRoYXQgdGhlIEFSQzIwMCB0b2tlbiBjYW4gYmUgZXhjaGFuZ2VkIHdpdGguCiAgICBpbnRjXzIgLy8gMAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo4OQogICAgLy8gcHVibGljIGFzc2V0SWQgPSBHbG9iYWxTdGF0ZTxVaW50NjQ+KHsga2V5OiAnYXNhJyB9KQogICAgYnl0ZWNfMSAvLyAiYXNhIgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoyNDMKICAgIC8vIGV4Y2hhbmdlX2Fzc2V0OiB0aGlzLmFzc2V0SWQudmFsdWUsIC8vVGhlIEFTQSBJRCB0aGF0IHRoZSBBUkMyMDAgdG9rZW4gY2FuIGJlIGV4Y2hhbmdlZCB3aXRoLgogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBHbG9iYWxTdGF0ZSBleGlzdHMKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MjQ0CiAgICAvLyBzaW5rOiBuZXcgQWRkcmVzcyhHbG9iYWwuY3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcyksIC8vIFRoZSBhZGRyZXNzIHRoYXQgaG9sZHMgQVJDMjAwIHRva2VucyBmb3IgcmVkZW1wdGlvbiBvcGVyYXRpb25zLgogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MjQyLTI0NQogICAgLy8gcmV0dXJuIG5ldyBhcmMyMDBfZXhjaGFuZ2VJbmZvKHsKICAgIC8vICAgZXhjaGFuZ2VfYXNzZXQ6IHRoaXMuYXNzZXRJZC52YWx1ZSwgLy9UaGUgQVNBIElEIHRoYXQgdGhlIEFSQzIwMCB0b2tlbiBjYW4gYmUgZXhjaGFuZ2VkIHdpdGguCiAgICAvLyAgIHNpbms6IG5ldyBBZGRyZXNzKEdsb2JhbC5jdXJyZW50QXBwbGljYXRpb25BZGRyZXNzKSwgLy8gVGhlIGFkZHJlc3MgdGhhdCBob2xkcyBBUkMyMDAgdG9rZW5zIGZvciByZWRlbXB0aW9uIG9wZXJhdGlvbnMuCiAgICAvLyB9KQogICAgY29uY2F0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI0MAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjpBcmMyMDBfQVNBLmFyYzIwMF9yZWRlZW1bcm91dGluZ10oKSAtPiB2b2lkOgphcmMyMDBfcmVkZWVtOgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoyNjMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18zIC8vIDgKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDY0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI2NQogICAgLy8gY29uc3QgcHJldiA9IGd0eG4uVHJhbnNhY3Rpb24oVHhuLmdyb3VwSW5kZXggLSAxKQogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI2NgogICAgLy8gYXNzZXJ0KHByZXYudHlwZSA9PT0gVHJhbnNhY3Rpb25UeXBlLkFzc2V0VHJhbnNmZXIsICdQcmV2aW91cyB0eG4gbXVzdCBiZSBBU0EgdHJhbnNmZXInKQogICAgZ3R4bnMgVHlwZUVudW0KICAgIHB1c2hpbnQgNCAvLyA0CiAgICA9PQogICAgYXNzZXJ0IC8vIFByZXZpb3VzIHR4biBtdXN0IGJlIEFTQSB0cmFuc2ZlcgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoyNjcKICAgIC8vIGNvbnN0IGF4ZmVyID0gZ3R4bi5Bc3NldFRyYW5zZmVyVHhuKFR4bi5ncm91cEluZGV4IC0gMSkKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgcHVzaGludCA0IC8vIGF4ZmVyCiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgYXhmZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MjY5CiAgICAvLyBheGZlci5hc3NldEFtb3VudCA+PSBhbW91bnQuYXNVaW50NjQoKSwKICAgIGR1cAogICAgZ3R4bnMgQXNzZXRBbW91bnQKICAgIHVuY292ZXIgMgogICAgYnRvaQogICAgZGlnIDEKICAgIDw9CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI2OC0yNzEKICAgIC8vIGFzc2VydCgKICAgIC8vICAgYXhmZXIuYXNzZXRBbW91bnQgPj0gYW1vdW50LmFzVWludDY0KCksCiAgICAvLyAgICdUaGUgYW1vdW50IHRyYW5zZmVycmVkIE1VU1QgYmUgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoZSBhbW91bnQgcmVxdWVzdGVkJywKICAgIC8vICkKICAgIGFzc2VydCAvLyBUaGUgYW1vdW50IHRyYW5zZmVycmVkIE1VU1QgYmUgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoZSBhbW91bnQgcmVxdWVzdGVkCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI3MgogICAgLy8gYXNzZXJ0KGF4ZmVyLnhmZXJBc3NldC5pZCA9PT0gdGhpcy5hc3NldElkLnZhbHVlLmFzVWludDY0KCksICdBU0EgSUQgbXVzdCBtYXRjaCBjb25maWd1cmVkIGV4Y2hhbmdlX2Fzc2V0JykKICAgIGRpZyAxCiAgICBndHhucyBYZmVyQXNzZXQKICAgIGludGNfMiAvLyAwCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjg5CiAgICAvLyBwdWJsaWMgYXNzZXRJZCA9IEdsb2JhbFN0YXRlPFVpbnQ2ND4oeyBrZXk6ICdhc2EnIH0pCiAgICBieXRlY18xIC8vICJhc2EiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI3MgogICAgLy8gYXNzZXJ0KGF4ZmVyLnhmZXJBc3NldC5pZCA9PT0gdGhpcy5hc3NldElkLnZhbHVlLmFzVWludDY0KCksICdBU0EgSUQgbXVzdCBtYXRjaCBjb25maWd1cmVkIGV4Y2hhbmdlX2Fzc2V0JykKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICBidG9pCiAgICA9PQogICAgYXNzZXJ0IC8vIEFTQSBJRCBtdXN0IG1hdGNoIGNvbmZpZ3VyZWQgZXhjaGFuZ2VfYXNzZXQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MjczCiAgICAvLyBhc3NlcnQoYXhmZXIuYXNzZXRSZWNlaXZlciA9PT0gR2xvYmFsLmN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MsICdBU0EgbXVzdCBiZSBzZW50IHRvIHRoZSBzaW5rIGFkZHJlc3MnKQogICAgZGlnIDEKICAgIGd0eG5zIEFzc2V0UmVjZWl2ZXIKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICA9PQogICAgYXNzZXJ0IC8vIEFTQSBtdXN0IGJlIHNlbnQgdG8gdGhlIHNpbmsgYWRkcmVzcwogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoyNzQKICAgIC8vIGFzc2VydChheGZlci5zZW5kZXIgPT09IFR4bi5zZW5kZXIsICdBU0Egc2VuZGVyIG11c3QgbWF0Y2ggQVJDMjAwIHJlZGVlbWVyJykKICAgIHN3YXAKICAgIGd0eG5zIFNlbmRlcgogICAgdHhuIFNlbmRlcgogICAgPT0KICAgIGFzc2VydCAvLyBBU0Egc2VuZGVyIG11c3QgbWF0Y2ggQVJDMjAwIHJlZGVlbWVyCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI3NwogICAgLy8gbmV3IEFkZHJlc3MoR2xvYmFsLmN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MpLAogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6Mjc4CiAgICAvLyBuZXcgQWRkcmVzcyhUeG4uc2VuZGVyKSwKICAgIHR4biBTZW5kZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6Mjc5CiAgICAvLyBuZXcgVWludDI1NihheGZlci5hc3NldEFtb3VudCksIC8vIHNlbmQgdGhlIHJlYWwgYW1vdW50IHdoaWNoIG11c3QgYmUgZ3JlYXRlciBvciBlcXVhbCB0byByZXF1ZXN0ZWQgYW1vdW50CiAgICB1bmNvdmVyIDIKICAgIGl0b2IKICAgIGludGNfMCAvLyAzMgogICAgYnplcm8KICAgIGJ8CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI3Ni0yODAKICAgIC8vIHRoaXMuX3RyYW5zZmVyKAogICAgLy8gICBuZXcgQWRkcmVzcyhHbG9iYWwuY3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcyksCiAgICAvLyAgIG5ldyBBZGRyZXNzKFR4bi5zZW5kZXIpLAogICAgLy8gICBuZXcgVWludDI1NihheGZlci5hc3NldEFtb3VudCksIC8vIHNlbmQgdGhlIHJlYWwgYW1vdW50IHdoaWNoIG11c3QgYmUgZ3JlYXRlciBvciBlcXVhbCB0byByZXF1ZXN0ZWQgYW1vdW50CiAgICAvLyApCiAgICBjYWxsc3ViIF90cmFuc2ZlcgogICAgcG9wCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI2MwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjpBcmMyMDBfQVNBLmRlcG9zaXRbcm91dGluZ10oKSAtPiB2b2lkOgpkZXBvc2l0OgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoyODgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18zIC8vIDgKICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQudWludDY0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI5MAogICAgLy8gY29uc3QgcHJldiA9IGd0eG4uVHJhbnNhY3Rpb24oVHhuLmdyb3VwSW5kZXggLSAxKQogICAgdHhuIEdyb3VwSW5kZXgKICAgIGludGNfMSAvLyAxCiAgICAtCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI5MQogICAgLy8gYXNzZXJ0KHByZXYudHlwZSA9PT0gVHJhbnNhY3Rpb25UeXBlLkFzc2V0VHJhbnNmZXIsICdQcmV2aW91cyB0eG4gbXVzdCBiZSBBU0EgdHJhbnNmZXInKQogICAgZ3R4bnMgVHlwZUVudW0KICAgIHB1c2hpbnQgNCAvLyA0CiAgICA9PQogICAgYXNzZXJ0IC8vIFByZXZpb3VzIHR4biBtdXN0IGJlIEFTQSB0cmFuc2ZlcgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoyOTIKICAgIC8vIGNvbnN0IGF4ZmVyID0gZ3R4bi5Bc3NldFRyYW5zZmVyVHhuKFR4bi5ncm91cEluZGV4IC0gMSkKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzEgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgcHVzaGludCA0IC8vIGF4ZmVyCiAgICA9PQogICAgYXNzZXJ0IC8vIHRyYW5zYWN0aW9uIHR5cGUgaXMgYXhmZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6Mjk0CiAgICAvLyBheGZlci5hc3NldEFtb3VudCA+PSBhbW91bnQuYXNVaW50NjQoKSwKICAgIGR1cAogICAgZ3R4bnMgQXNzZXRBbW91bnQKICAgIHVuY292ZXIgMgogICAgYnRvaQogICAgZGlnIDEKICAgIDw9CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI5My0yOTYKICAgIC8vIGFzc2VydCgKICAgIC8vICAgYXhmZXIuYXNzZXRBbW91bnQgPj0gYW1vdW50LmFzVWludDY0KCksCiAgICAvLyAgICdUaGUgYW1vdW50IHRyYW5zZmVycmVkIE1VU1QgYmUgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoZSBhbW91bnQgcmVxdWVzdGVkJywKICAgIC8vICkKICAgIGFzc2VydCAvLyBUaGUgYW1vdW50IHRyYW5zZmVycmVkIE1VU1QgYmUgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoZSBhbW91bnQgcmVxdWVzdGVkCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI5NwogICAgLy8gYXNzZXJ0KGF4ZmVyLnhmZXJBc3NldC5pZCA9PT0gdGhpcy5hc3NldElkLnZhbHVlLmFzVWludDY0KCksICdBU0EgSUQgbXVzdCBtYXRjaCBjb25maWd1cmVkIGV4Y2hhbmdlX2Fzc2V0JykKICAgIGRpZyAxCiAgICBndHhucyBYZmVyQXNzZXQKICAgIGludGNfMiAvLyAwCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjg5CiAgICAvLyBwdWJsaWMgYXNzZXRJZCA9IEdsb2JhbFN0YXRlPFVpbnQ2ND4oeyBrZXk6ICdhc2EnIH0pCiAgICBieXRlY18xIC8vICJhc2EiCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjI5NwogICAgLy8gYXNzZXJ0KGF4ZmVyLnhmZXJBc3NldC5pZCA9PT0gdGhpcy5hc3NldElkLnZhbHVlLmFzVWludDY0KCksICdBU0EgSUQgbXVzdCBtYXRjaCBjb25maWd1cmVkIGV4Y2hhbmdlX2Fzc2V0JykKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICBidG9pCiAgICA9PQogICAgYXNzZXJ0IC8vIEFTQSBJRCBtdXN0IG1hdGNoIGNvbmZpZ3VyZWQgZXhjaGFuZ2VfYXNzZXQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6Mjk4CiAgICAvLyBhc3NlcnQoYXhmZXIuYXNzZXRSZWNlaXZlciA9PT0gR2xvYmFsLmN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MsICdBU0EgbXVzdCBiZSBzZW50IHRvIHRoZSBzaW5rIGFkZHJlc3MnKQogICAgZGlnIDEKICAgIGd0eG5zIEFzc2V0UmVjZWl2ZXIKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICA9PQogICAgYXNzZXJ0IC8vIEFTQSBtdXN0IGJlIHNlbnQgdG8gdGhlIHNpbmsgYWRkcmVzcwogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoyOTkKICAgIC8vIGFzc2VydChheGZlci5zZW5kZXIgPT09IFR4bi5zZW5kZXIsICdBU0Egc2VuZGVyIG11c3QgbWF0Y2ggQVJDMjAwIHJlZGVlbWVyJykKICAgIHN3YXAKICAgIGd0eG5zIFNlbmRlcgogICAgdHhuIFNlbmRlcgogICAgPT0KICAgIGFzc2VydCAvLyBBU0Egc2VuZGVyIG11c3QgbWF0Y2ggQVJDMjAwIHJlZGVlbWVyCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjMwMAogICAgLy8gY29uc3QgcmV0ID0gbmV3IFVpbnQyNTYoYXhmZXIuYXNzZXRBbW91bnQpCiAgICBpdG9iCiAgICBpbnRjXzAgLy8gMzIKICAgIGJ6ZXJvCiAgICBifAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozMDIKICAgIC8vIG5ldyBBZGRyZXNzKEdsb2JhbC5jdXJyZW50QXBwbGljYXRpb25BZGRyZXNzKSwKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjMwMwogICAgLy8gbmV3IEFkZHJlc3MoVHhuLnNlbmRlciksCiAgICB0eG4gU2VuZGVyCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjMwMS0zMDUKICAgIC8vIHRoaXMuX3RyYW5zZmVyKAogICAgLy8gICBuZXcgQWRkcmVzcyhHbG9iYWwuY3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcyksCiAgICAvLyAgIG5ldyBBZGRyZXNzKFR4bi5zZW5kZXIpLAogICAgLy8gICByZXQsIC8vIHNlbmQgdGhlIHJlYWwgYW1vdW50IHdoaWNoIG11c3QgYmUgZ3JlYXRlciBvciBlcXVhbCB0byByZXF1ZXN0ZWQgYW1vdW50CiAgICAvLyApCiAgICBkaWcgMgogICAgY2FsbHN1YiBfdHJhbnNmZXIKICAgIHBvcAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czoyODgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgoKLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo6QXJjMjAwX0FTQS5hcmMyMDBfc3dhcEJhY2tbcm91dGluZ10oKSAtPiB2b2lkOgphcmMyMDBfc3dhcEJhY2s6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjMyNAogICAgLy8gQGFyYzQuYWJpbWV0aG9kKCkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBkdXAKICAgIGludGNfMyAvLyA4CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnVpbnQ2NAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozMjcKICAgIC8vIG5ldyBBZGRyZXNzKFR4bi5zZW5kZXIpLAogICAgdHhuIFNlbmRlcgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozMjgKICAgIC8vIG5ldyBBZGRyZXNzKEdsb2JhbC5jdXJyZW50QXBwbGljYXRpb25BZGRyZXNzKSwKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjMyOQogICAgLy8gbmV3IFVpbnQyNTYoYW1vdW50LmFzQmlnVWludCgpKSwKICAgIHVuY292ZXIgMgogICAgaW50Y18wIC8vIDMyCiAgICA8PQogICAgYXNzZXJ0IC8vIG92ZXJmbG93CiAgICBpbnRjXzAgLy8gMzIKICAgIGJ6ZXJvCiAgICBkaWcgMwogICAgYnwKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzI2LTMzMAogICAgLy8gdGhpcy5fdHJhbnNmZXIoCiAgICAvLyAgIG5ldyBBZGRyZXNzKFR4bi5zZW5kZXIpLAogICAgLy8gICBuZXcgQWRkcmVzcyhHbG9iYWwuY3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcyksCiAgICAvLyAgIG5ldyBVaW50MjU2KGFtb3VudC5hc0JpZ1VpbnQoKSksCiAgICAvLyApCiAgICBjYWxsc3ViIF90cmFuc2ZlcgogICAgcG9wCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjMzMS0zMzgKICAgIC8vIGl0eG4KICAgIC8vICAgLmFzc2V0VHJhbnNmZXIoewogICAgLy8gICAgIGFzc2V0UmVjZWl2ZXI6IFR4bi5zZW5kZXIsCiAgICAvLyAgICAgYXNzZXRBbW91bnQ6IGFtb3VudC5hc1VpbnQ2NCgpLAogICAgLy8gICAgIHhmZXJBc3NldDogdGhpcy5hc3NldElkLnZhbHVlLmFzVWludDY0KCksCiAgICAvLyAgICAgZmVlOiAwLAogICAgLy8gICB9KQogICAgLy8gICAuc3VibWl0KCkKICAgIGl0eG5fYmVnaW4KICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzMzCiAgICAvLyBhc3NldFJlY2VpdmVyOiBUeG4uc2VuZGVyLAogICAgdHhuIFNlbmRlcgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozMzQKICAgIC8vIGFzc2V0QW1vdW50OiBhbW91bnQuYXNVaW50NjQoKSwKICAgIHN3YXAKICAgIGJ0b2kKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzM1CiAgICAvLyB4ZmVyQXNzZXQ6IHRoaXMuYXNzZXRJZC52YWx1ZS5hc1VpbnQ2NCgpLAogICAgaW50Y18yIC8vIDAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6ODkKICAgIC8vIHB1YmxpYyBhc3NldElkID0gR2xvYmFsU3RhdGU8VWludDY0Pih7IGtleTogJ2FzYScgfSkKICAgIGJ5dGVjXzEgLy8gImFzYSIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzM1CiAgICAvLyB4ZmVyQXNzZXQ6IHRoaXMuYXNzZXRJZC52YWx1ZS5hc1VpbnQ2NCgpLAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBHbG9iYWxTdGF0ZSBleGlzdHMKICAgIGJ0b2kKICAgIGl0eG5fZmllbGQgWGZlckFzc2V0CiAgICBpdHhuX2ZpZWxkIEFzc2V0QW1vdW50CiAgICBpdHhuX2ZpZWxkIEFzc2V0UmVjZWl2ZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzMxLTMzNwogICAgLy8gaXR4bgogICAgLy8gICAuYXNzZXRUcmFuc2Zlcih7CiAgICAvLyAgICAgYXNzZXRSZWNlaXZlcjogVHhuLnNlbmRlciwKICAgIC8vICAgICBhc3NldEFtb3VudDogYW1vdW50LmFzVWludDY0KCksCiAgICAvLyAgICAgeGZlckFzc2V0OiB0aGlzLmFzc2V0SWQudmFsdWUuYXNVaW50NjQoKSwKICAgIC8vICAgICBmZWU6IDAsCiAgICAvLyAgIH0pCiAgICBwdXNoaW50IDQgLy8gNAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozMzYKICAgIC8vIGZlZTogMCwKICAgIGludGNfMiAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozMzEtMzM4CiAgICAvLyBpdHhuCiAgICAvLyAgIC5hc3NldFRyYW5zZmVyKHsKICAgIC8vICAgICBhc3NldFJlY2VpdmVyOiBUeG4uc2VuZGVyLAogICAgLy8gICAgIGFzc2V0QW1vdW50OiBhbW91bnQuYXNVaW50NjQoKSwKICAgIC8vICAgICB4ZmVyQXNzZXQ6IHRoaXMuYXNzZXRJZC52YWx1ZS5hc1VpbnQ2NCgpLAogICAgLy8gICAgIGZlZTogMCwKICAgIC8vICAgfSkKICAgIC8vICAgLnN1Ym1pdCgpCiAgICBpdHhuX3N1Ym1pdAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozMjQKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgoKLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo6QXJjMjAwX0FTQS53aXRoZHJhd1tyb3V0aW5nXSgpIC0+IHZvaWQ6CndpdGhkcmF3OgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozNDYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBkdXAKICAgIGxlbgogICAgZHVwCiAgICBpbnRjXzMgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50NjQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzQ4CiAgICAvLyBjb25zdCByZXQgPSBuZXcgVWludDI1NihhbW91bnQuYXNCaWdVaW50KCkpCiAgICBpbnRjXzAgLy8gMzIKICAgIDw9CiAgICBhc3NlcnQgLy8gb3ZlcmZsb3cKICAgIGludGNfMCAvLyAzMgogICAgYnplcm8KICAgIGRpZyAxCiAgICBifAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozNDkKICAgIC8vIHRoaXMuX3RyYW5zZmVyKG5ldyBBZGRyZXNzKFR4bi5zZW5kZXIpLCBuZXcgQWRkcmVzcyhHbG9iYWwuY3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcyksIHJldCkKICAgIHR4biBTZW5kZXIKICAgIGdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCiAgICBkaWcgMgogICAgY2FsbHN1YiBfdHJhbnNmZXIKICAgIHBvcAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozNTAtMzU3CiAgICAvLyBpdHhuCiAgICAvLyAgIC5hc3NldFRyYW5zZmVyKHsKICAgIC8vICAgICBhc3NldFJlY2VpdmVyOiBUeG4uc2VuZGVyLAogICAgLy8gICAgIGFzc2V0QW1vdW50OiBhbW91bnQuYXNVaW50NjQoKSwKICAgIC8vICAgICB4ZmVyQXNzZXQ6IHRoaXMuYXNzZXRJZC52YWx1ZS5hc1VpbnQ2NCgpLAogICAgLy8gICAgIGZlZTogMCwKICAgIC8vICAgfSkKICAgIC8vICAgLnN1Ym1pdCgpCiAgICBpdHhuX2JlZ2luCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjM1MgogICAgLy8gYXNzZXRSZWNlaXZlcjogVHhuLnNlbmRlciwKICAgIHR4biBTZW5kZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzUzCiAgICAvLyBhc3NldEFtb3VudDogYW1vdW50LmFzVWludDY0KCksCiAgICB1bmNvdmVyIDIKICAgIGJ0b2kKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzU0CiAgICAvLyB4ZmVyQXNzZXQ6IHRoaXMuYXNzZXRJZC52YWx1ZS5hc1VpbnQ2NCgpLAogICAgaW50Y18yIC8vIDAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6ODkKICAgIC8vIHB1YmxpYyBhc3NldElkID0gR2xvYmFsU3RhdGU8VWludDY0Pih7IGtleTogJ2FzYScgfSkKICAgIGJ5dGVjXzEgLy8gImFzYSIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzU0CiAgICAvLyB4ZmVyQXNzZXQ6IHRoaXMuYXNzZXRJZC52YWx1ZS5hc1VpbnQ2NCgpLAogICAgYXBwX2dsb2JhbF9nZXRfZXgKICAgIGFzc2VydCAvLyBjaGVjayBHbG9iYWxTdGF0ZSBleGlzdHMKICAgIGJ0b2kKICAgIGl0eG5fZmllbGQgWGZlckFzc2V0CiAgICBpdHhuX2ZpZWxkIEFzc2V0QW1vdW50CiAgICBpdHhuX2ZpZWxkIEFzc2V0UmVjZWl2ZXIKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzUwLTM1NgogICAgLy8gaXR4bgogICAgLy8gICAuYXNzZXRUcmFuc2Zlcih7CiAgICAvLyAgICAgYXNzZXRSZWNlaXZlcjogVHhuLnNlbmRlciwKICAgIC8vICAgICBhc3NldEFtb3VudDogYW1vdW50LmFzVWludDY0KCksCiAgICAvLyAgICAgeGZlckFzc2V0OiB0aGlzLmFzc2V0SWQudmFsdWUuYXNVaW50NjQoKSwKICAgIC8vICAgICBmZWU6IDAsCiAgICAvLyAgIH0pCiAgICBwdXNoaW50IDQgLy8gNAogICAgaXR4bl9maWVsZCBUeXBlRW51bQogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozNTUKICAgIC8vIGZlZTogMCwKICAgIGludGNfMiAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozNTAtMzU3CiAgICAvLyBpdHhuCiAgICAvLyAgIC5hc3NldFRyYW5zZmVyKHsKICAgIC8vICAgICBhc3NldFJlY2VpdmVyOiBUeG4uc2VuZGVyLAogICAgLy8gICAgIGFzc2V0QW1vdW50OiBhbW91bnQuYXNVaW50NjQoKSwKICAgIC8vICAgICB4ZmVyQXNzZXQ6IHRoaXMuYXNzZXRJZC52YWx1ZS5hc1VpbnQ2NCgpLAogICAgLy8gICAgIGZlZTogMCwKICAgIC8vICAgfSkKICAgIC8vICAgLnN1Ym1pdCgpCiAgICBpdHhuX3N1Ym1pdAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozNDYKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzEgLy8gMQogICAgcmV0dXJuCgoKLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo6QXJjMjAwX0FTQS5hcmMyMDBfYWxsb3dhbmNlW3JvdXRpbmddKCkgLT4gdm9pZDoKYXJjMjAwX2FsbG93YW5jZToKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzY3CiAgICAvLyBAYXJjNC5hYmltZXRob2QoeyByZWFkb25seTogdHJ1ZSB9KQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgZHVwCiAgICBsZW4KICAgIGludGNfMCAvLyAzMgogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC5zdGF0aWNfYXJyYXk8YXJjNC51aW50OCwgMzI+CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBkdXAKICAgIGxlbgogICAgaW50Y18wIC8vIDMyCiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBhcmM0LnN0YXRpY19hcnJheTxhcmM0LnVpbnQ4LCAzMj4KICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzY5CiAgICAvLyByZXR1cm4gdGhpcy5fYWxsb3dhbmNlKG93bmVyLCBzcGVuZGVyKQogICAgY2FsbHN1YiBfYWxsb3dhbmNlCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjM2NwogICAgLy8gQGFyYzQuYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUgfSkKICAgIGJ5dGVjXzAgLy8gMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludGNfMSAvLyAxCiAgICByZXR1cm4KCgovLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjpBcmMyMDBfQVNBLl9iYWxhbmNlT2Yob3duZXI6IGJ5dGVzKSAtPiBieXRlczoKX2JhbGFuY2VPZjoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzcyCiAgICAvLyBwcml2YXRlIF9iYWxhbmNlT2Yob3duZXI6IEFkZHJlc3MpOiBVaW50MjU2IHsKICAgIHByb3RvIDEgMQogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo4MgogICAgLy8gcHVibGljIGJhbGFuY2VzID0gQm94TWFwPEFkZHJlc3MsIFVpbnQyNTY+KHsga2V5UHJlZml4OiAnYicgfSkKICAgIGJ5dGVjXzIgLy8gImIiCiAgICBmcmFtZV9kaWcgLTEKICAgIGNvbmNhdAogICAgZHVwCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjM3MwogICAgLy8gaWYgKCF0aGlzLmJhbGFuY2VzKG93bmVyKS5leGlzdHMpIHJldHVybiBuZXcgVWludDI1NigwKQogICAgYm94X2xlbgogICAgYnVyeSAxCiAgICBibnogX2JhbGFuY2VPZl9hZnRlcl9pZl9lbHNlQDIKICAgIGJ5dGVjIDUgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICBzd2FwCiAgICByZXRzdWIKCl9iYWxhbmNlT2ZfYWZ0ZXJfaWZfZWxzZUAyOgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozNzQKICAgIC8vIHJldHVybiB0aGlzLmJhbGFuY2VzKG93bmVyKS52YWx1ZQogICAgZnJhbWVfZGlnIDAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBCb3ggbXVzdCBoYXZlIHZhbHVlCiAgICBzd2FwCiAgICByZXRzdWIKCgovLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjpBcmMyMDBfQVNBLl90cmFuc2ZlcihzZW5kZXI6IGJ5dGVzLCByZWNpcGllbnQ6IGJ5dGVzLCBhbW91bnQ6IGJ5dGVzKSAtPiBieXRlczoKX3RyYW5zZmVyOgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozNzcKICAgIC8vIHByaXZhdGUgX3RyYW5zZmVyKHNlbmRlcjogQWRkcmVzcywgcmVjaXBpZW50OiBBZGRyZXNzLCBhbW91bnQ6IFVpbnQyNTYpOiBCb29sIHsKICAgIHByb3RvIDMgMQogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozNzgKICAgIC8vIGNvbnN0IHNlbmRlcl9iYWxhbmNlID0gdGhpcy5fYmFsYW5jZU9mKHNlbmRlcikKICAgIGZyYW1lX2RpZyAtMwogICAgY2FsbHN1YiBfYmFsYW5jZU9mCiAgICBkdXAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6Mzc5CiAgICAvLyBjb25zdCByZWNpcGllbnRfYmFsYW5jZSA9IHRoaXMuX2JhbGFuY2VPZihyZWNpcGllbnQpCiAgICBmcmFtZV9kaWcgLTIKICAgIGNhbGxzdWIgX2JhbGFuY2VPZgogICAgc3dhcAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozODAKICAgIC8vIGFzc2VydChzZW5kZXJfYmFsYW5jZS5hc0JpZ1VpbnQoKSA+PSBhbW91bnQuYXNCaWdVaW50KCksICdJbnN1ZmZpY2llbnQgYmFsYW5jZSBhdCB0aGUgc2VuZGVyIGFjY291bnQnKQogICAgZnJhbWVfZGlnIC0xCiAgICBiPj0KICAgIGFzc2VydCAvLyBJbnN1ZmZpY2llbnQgYmFsYW5jZSBhdCB0aGUgc2VuZGVyIGFjY291bnQKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzgyCiAgICAvLyBpZiAoc2VuZGVyICE9PSByZWNpcGllbnQpIHsKICAgIGZyYW1lX2RpZyAtMwogICAgZnJhbWVfZGlnIC0yCiAgICAhPQogICAgYnogX3RyYW5zZmVyX2FmdGVyX2lmX2Vsc2VAMgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozODQKICAgIC8vIHRoaXMuYmFsYW5jZXMoc2VuZGVyKS52YWx1ZSA9IG5ldyBVaW50MjU2KHNlbmRlcl9iYWxhbmNlLmFzQmlnVWludCgpIC0gYW1vdW50LmFzQmlnVWludCgpKQogICAgZnJhbWVfZGlnIDAKICAgIGZyYW1lX2RpZyAtMQogICAgYi0KICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMzIKICAgIDw9CiAgICBhc3NlcnQgLy8gb3ZlcmZsb3cKICAgIGludGNfMCAvLyAzMgogICAgYnplcm8KICAgIHN3YXAKICAgIGRpZyAxCiAgICBifAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo4MgogICAgLy8gcHVibGljIGJhbGFuY2VzID0gQm94TWFwPEFkZHJlc3MsIFVpbnQyNTY+KHsga2V5UHJlZml4OiAnYicgfSkKICAgIGJ5dGVjXzIgLy8gImIiCiAgICBmcmFtZV9kaWcgLTMKICAgIGNvbmNhdAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozODQKICAgIC8vIHRoaXMuYmFsYW5jZXMoc2VuZGVyKS52YWx1ZSA9IG5ldyBVaW50MjU2KHNlbmRlcl9iYWxhbmNlLmFzQmlnVWludCgpIC0gYW1vdW50LmFzQmlnVWludCgpKQogICAgc3dhcAogICAgYm94X3B1dAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozODUKICAgIC8vIHRoaXMuYmFsYW5jZXMocmVjaXBpZW50KS52YWx1ZSA9IG5ldyBVaW50MjU2KHJlY2lwaWVudF9iYWxhbmNlLmFzQmlnVWludCgpICsgYW1vdW50LmFzQmlnVWludCgpKQogICAgZnJhbWVfZGlnIDEKICAgIGZyYW1lX2RpZyAtMQogICAgYisKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gMzIKICAgIDw9CiAgICBhc3NlcnQgLy8gb3ZlcmZsb3cKICAgIGJ8CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjgyCiAgICAvLyBwdWJsaWMgYmFsYW5jZXMgPSBCb3hNYXA8QWRkcmVzcywgVWludDI1Nj4oeyBrZXlQcmVmaXg6ICdiJyB9KQogICAgYnl0ZWNfMiAvLyAiYiIKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjM4NQogICAgLy8gdGhpcy5iYWxhbmNlcyhyZWNpcGllbnQpLnZhbHVlID0gbmV3IFVpbnQyNTYocmVjaXBpZW50X2JhbGFuY2UuYXNCaWdVaW50KCkgKyBhbW91bnQuYXNCaWdVaW50KCkpCiAgICBzd2FwCiAgICBib3hfcHV0CgpfdHJhbnNmZXJfYWZ0ZXJfaWZfZWxzZUAyOgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czozODcKICAgIC8vIGVtaXQobmV3IGFyYzIwMF9UcmFuc2Zlcih7IGZyb206IHNlbmRlciwgdG86IHJlY2lwaWVudCwgdmFsdWU6IGFtb3VudCB9KSkKICAgIGZyYW1lX2RpZyAtMwogICAgZnJhbWVfZGlnIC0yCiAgICBjb25jYXQKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBieXRlYyA0IC8vIG1ldGhvZCAiYXJjMjAwX1RyYW5zZmVyKGFkZHJlc3MsYWRkcmVzcyx1aW50MjU2KSIKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjM4OAogICAgLy8gcmV0dXJuIG5ldyBCb29sKHRydWUpCiAgICBwdXNoYnl0ZXMgMHg4MAogICAgZnJhbWVfYnVyeSAwCiAgICByZXRzdWIKCgovLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjpBcmMyMDBfQVNBLl9hbGxvd2FuY2Uob3duZXI6IGJ5dGVzLCBzcGVuZGVyOiBieXRlcykgLT4gYnl0ZXM6Cl9hbGxvd2FuY2U6CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjM5NQogICAgLy8gcHJpdmF0ZSBfYWxsb3dhbmNlKG93bmVyOiBBZGRyZXNzLCBzcGVuZGVyOiBBZGRyZXNzKTogVWludDI1NiB7CiAgICBwcm90byAyIDEKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6MzkyCiAgICAvLyByZXR1cm4gbmV3IFN0YXRpY0J5dGVzPDMyPihvcC5zaGEyNTYob3AuY29uY2F0KG93bmVyLmJ5dGVzLCBzcGVuZGVyLmJ5dGVzKSkpCiAgICBmcmFtZV9kaWcgLTIKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBzaGEyNTYKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6ODQKICAgIC8vIHB1YmxpYyBhcHByb3ZhbHMgPSBCb3hNYXA8U3RhdGljQnl0ZXM8MzI+LCBBcHByb3ZhbFN0cnVjdD4oeyBrZXlQcmVmaXg6ICdhJyB9KQogICAgcHVzaGJ5dGVzICJhIgogICAgc3dhcAogICAgY29uY2F0CiAgICBkdXAKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6Mzk3CiAgICAvLyBpZiAoIXRoaXMuYXBwcm92YWxzKGtleSkuZXhpc3RzKSByZXR1cm4gbmV3IFVpbnQyNTYoMCkKICAgIGJveF9sZW4KICAgIGJ1cnkgMQogICAgYm56IF9hbGxvd2FuY2VfYWZ0ZXJfaWZfZWxzZUAyCiAgICBieXRlYyA1IC8vIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgc3dhcAogICAgcmV0c3ViCgpfYWxsb3dhbmNlX2FmdGVyX2lmX2Vsc2VAMjoKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6Mzk4CiAgICAvLyByZXR1cm4gdGhpcy5hcHByb3ZhbHMoa2V5KS52YWx1ZS5hcHByb3ZhbEFtb3VudAogICAgZnJhbWVfZGlnIDAKICAgIGJveF9nZXQKICAgIGFzc2VydCAvLyBCb3ggbXVzdCBoYXZlIHZhbHVlCiAgICBleHRyYWN0IDAgMzIKICAgIHN3YXAKICAgIHJldHN1YgoKCi8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6OkFyYzIwMF9BU0EuX2FwcHJvdmUob3duZXI6IGJ5dGVzLCBzcGVuZGVyOiBieXRlcywgYW1vdW50OiBieXRlcykgLT4gYnl0ZXM6Cl9hcHByb3ZlOgogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo0MDEKICAgIC8vIHByaXZhdGUgX2FwcHJvdmUob3duZXI6IEFkZHJlc3MsIHNwZW5kZXI6IEFkZHJlc3MsIGFtb3VudDogVWludDI1Nik6IEJvb2wgewogICAgcHJvdG8gMyAxCiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjM5MgogICAgLy8gcmV0dXJuIG5ldyBTdGF0aWNCeXRlczwzMj4ob3Auc2hhMjU2KG9wLmNvbmNhdChvd25lci5ieXRlcywgc3BlbmRlci5ieXRlcykpKQogICAgZnJhbWVfZGlnIC0zCiAgICBmcmFtZV9kaWcgLTIKICAgIGNvbmNhdAogICAgZHVwCiAgICBzaGEyNTYKICAgIC8vIGNvbnRyYWN0cy9hcmMyMDBfYXNhLmFsZ28udHM6NDAzLTQwNwogICAgLy8gY29uc3QgYXBwcm92YWxCb3g6IEFwcHJvdmFsU3RydWN0ID0gbmV3IEFwcHJvdmFsU3RydWN0KHsKICAgIC8vICAgYXBwcm92YWxBbW91bnQ6IGFtb3VudCwKICAgIC8vICAgb3duZXI6IG93bmVyLAogICAgLy8gICBzcGVuZGVyOiBzcGVuZGVyLAogICAgLy8gfSkKICAgIGZyYW1lX2RpZyAtMQogICAgZnJhbWVfZGlnIC0zCiAgICBjb25jYXQKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjg0CiAgICAvLyBwdWJsaWMgYXBwcm92YWxzID0gQm94TWFwPFN0YXRpY0J5dGVzPDMyPiwgQXBwcm92YWxTdHJ1Y3Q+KHsga2V5UHJlZml4OiAnYScgfSkKICAgIHB1c2hieXRlcyAiYSIKICAgIHVuY292ZXIgMgogICAgY29uY2F0CiAgICAvLyBjb250cmFjdHMvYXJjMjAwX2FzYS5hbGdvLnRzOjQwOAogICAgLy8gdGhpcy5hcHByb3ZhbHMoa2V5KS52YWx1ZSA9IGNsb25lKGFwcHJvdmFsQm94KQogICAgc3dhcAogICAgYm94X3B1dAogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo0MDkKICAgIC8vIGVtaXQobmV3IGFyYzIwMF9BcHByb3ZhbCh7IG93bmVyOiBvd25lciwgc3BlbmRlcjogc3BlbmRlciwgdmFsdWU6IGFtb3VudCB9KSkKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICBwdXNoYnl0ZXMgMHgxOTY5Zjg2NSAvLyBtZXRob2QgImFyYzIwMF9BcHByb3ZhbChhZGRyZXNzLGFkZHJlc3MsdWludDI1NikiCiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgLy8gY29udHJhY3RzL2FyYzIwMF9hc2EuYWxnby50czo0MTAKICAgIC8vIHJldHVybiBuZXcgQm9vbCh0cnVlKQogICAgcHVzaGJ5dGVzIDB4ODAKICAgIHJldHN1Ygo=", "clear": "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYmFzZS1jb250cmFjdC5kLnRzOjpCYXNlQ29udHJhY3QuY2xlYXJTdGF0ZVByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCg==" }, "byteCode": { "approval": "CyAEIAEACCYGBBUffHUDYXNhAWIBdAR5g8NcIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMRtBAHgxGRREMRhEgg8Eidl1HwRlfRPsBLauGiUEhOwT1QTsmWBBBILlc8QE2nAluQRKlo+PBLVCISUEQJtUlwRi1BzfBAIjJnwEfALarwRoz5jOBLuzGfM2GgCODwALAPkBDQEhAS0BNwFIAWUBpwHEAdECIgJ3AqwC5gAxGRQxGBQQRCNDNhoBSSRZgQIISwEVEkQ2GgJJJFmBAghLARUSRDYaA0kVIxJENhoESRVJIhJENhoFSRVLASJZSYEiEkRLAkxLAlJJJFmBJAhPAhJEMQAyCRJESwZXAgBJFUlEIg5ESwZXAgBJFUlEJQ5EJCtlRQEURIABbk8JZ4ABc08IZytLBmeAAWRLB2cxACpLAVBLB7+xSwaTgUAORE8FJQlLBkxbMgpJTwdXACBJFSISRE8HVwIATwkXsiOyJ7IosiqyKU8DsiZPArIlJLIksiKBA7IQJLIBs7Q8FilMZzIDTFBMUCcETFCwgAUVH3x1gLAjQySAAW5lRFcCAEkVIhJEKExQsCNDJIABc2VEVwIASRUlEkQoTFCwI0MkgAFkZUQoTFCwI0MkK2VEKExQsCNDNhoBSRUiEkSIAb0oTFCwI0M2GgFJFSISRDYaAkkVIhJEMQBOAogBuChMULAjQzYaAUkVIhJENhoCSRUiEkQ2GgNJFSISRDEASwNLAYgB5klLA6dESwKhSRUiDkQir6tLBE4CiAHxSIgBdihMULAjQzYaAUkVIhJENhoCSRUiEkQxAE4CiAHQKExQsCNDJCllRDIKUChMULAjQzYaAUkVJRJEMRYjCTgQgQQSRDEWIwlJOBCBBBJESTgSTwIXSwEOREsBOBEkKWVEFxJESwE4FDIKEkRMOAAxABJEMgoxAE8CFiKvq4gA+EgjQzYaAUkVJRJEMRYjCTgQgQQSRDEWIwlJOBCBBBJESTgSTwIXSwEOREsBOBEkKWVEFxJESwE4FDIKEkRMOAAxABJEFiKvqzIKMQBLAogAp0goTFCwI0M2GgFJFUklEkQxADIKTwIiDkQir0sDq4gAhkixMQBMFyQpZUQXshGyErIUgQSyECSyAbMjQzYaAUkVSSUSRCIORCKvSwGrMQAyCksCiABRSLExAE8CFyQpZUQXshGyErIUgQSyECSyAbMoTFCwI0M2GgFJFSISRDYaAkkVIhJEiABzKExQsCNDigEBKov/UEm9RQFAAAQnBUyJiwC+REyJigMBi/2I/+BJi/6I/9pMi/+nRIv9i/4TQQAniwCL/6FJFSIORCKvTEsBqyqL/VBMv4sBi/+gSRUiDkSrKov+UEy/i/2L/lCL/1AnBExQsIABgIwAiYoCAYv+i/9QAYABYUxQSb1FAUAABCcFTImLAL5EVwAgTImKAwGL/Yv+UEkBi/+L/VCL/lCAAWFPAlBMv4v/UIAEGWn4ZUxQsIABgIk=", "clear": "C4EBQw==" }, "events": [{ "name": "arc200_Transfer", "args": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "value" }] }, { "name": "arc200_Approval", "args": [{ "type": "address", "name": "owner" }, { "type": "address", "name": "spender" }, { "type": "uint256", "name": "value" }] }], "templateVariables": {} };
function ApprovalStructFromTuple2(abiTuple) {
  return (0, import_app_arc562.getABIStructFromABITuple)(abiTuple, APP_SPEC2.structs.ApprovalStruct, APP_SPEC2.structs);
}
function Arc200ExchangeInfoFromTuple(abiTuple) {
  return (0, import_app_arc562.getABIStructFromABITuple)(abiTuple, APP_SPEC2.structs.arc200_exchangeInfo, APP_SPEC2.structs);
}
function AsaPropsFromTuple(abiTuple) {
  return (0, import_app_arc562.getABIStructFromABITuple)(abiTuple, APP_SPEC2.structs.asaProps, APP_SPEC2.structs);
}
var Arc200AsaParamsFactory = class {
  /**
   * Constructs a no op call for the bootstrap(byte[],byte[],uint8,uint256,(byte[32],byte[]))bool ABI method
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static bootstrap(params) {
    return {
      ...params,
      method: "bootstrap(byte[],byte[],uint8,uint256,(byte[32],byte[]))bool",
      args: Array.isArray(params.args) ? params.args : [params.args.name, params.args.symbol, params.args.decimals, params.args.totalSupply, params.args.asset]
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
     * Constructs a no op call for the arc200_exchange()(uint64,address) ABI method
     *
    * arc200_exchange() → (uint64 exchange_asset, address sink)
    Returns configuration parameters used by the exchange mechanism:
    exchange_asset: The ASA ID that the ARC200 token can be exchanged with.
    
    sink: The address that holds ARC200 tokens for redemption operations.
    
    This method MUST NOT mutate state.
    
    https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
  
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
  static arc200Exchange(params) {
    return {
      ...params,
      method: "arc200_exchange()(uint64,address)",
      args: Array.isArray(params.args) ? params.args : []
    };
  }
  /**
     * Constructs a no op call for the arc200_redeem(uint64)void ABI method
     *
    * Exchanges ASA tokens for ARC200 tokens.
    Requirements:
    The user MUST include a valid ASA transfer to the contract in the same transaction group.
    
    The ASA ID MUST match the configured exchange_asset.
    
    The amount transferred MUST be equal to or greater than the amount requested.
    
    The contract MUST transfer ARC200 tokens to the user from the sink address.
    
    No ARC200 tokens may be minted or burned during the exchange.
    
    https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
  
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
  static arc200Redeem(params) {
    return {
      ...params,
      method: "arc200_redeem(uint64)void",
      args: Array.isArray(params.args) ? params.args : [params.args.amount]
    };
  }
  /**
   * Constructs a no op call for the deposit(uint64)uint256 ABI method
   *
   * wnnt200 for arc200_redeem
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static deposit(params) {
    return {
      ...params,
      method: "deposit(uint64)uint256",
      args: Array.isArray(params.args) ? params.args : [params.args.amount]
    };
  }
  /**
     * Constructs a no op call for the arc200_swapBack(uint64)void ABI method
     *
    * arc200_swapBack(uint64 amount) → void
    
    Exchanges ARC200 tokens back into ASA tokens.
    Requirements:
    The user MUST transfer ARC200 tokens to the configured sink address.
    
    Upon receiving the ARC200 tokens, the contract MUST transfer the equivalent amount of ASA tokens to the user.
    
    The ASA MUST be transferred from the application's own account.
    
    No ARC200 tokens may be minted or burned during the exchange.
    
    https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
  
     *
     * @param params Parameters for the call
     * @returns An `AppClientMethodCallParams` object for the call
     */
  static arc200SwapBack(params) {
    return {
      ...params,
      method: "arc200_swapBack(uint64)void",
      args: Array.isArray(params.args) ? params.args : [params.args.amount]
    };
  }
  /**
   * Constructs a no op call for the withdraw(uint64)uint256 ABI method
   *
   * wnnt200 for arc200_swapBack
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static withdraw(params) {
    return {
      ...params,
      method: "withdraw(uint64)uint256",
      args: Array.isArray(params.args) ? params.args : [params.args.amount]
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
var Arc200AsaFactory = class {
  /**
   * Creates a new instance of `Arc200AsaFactory`
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
         * Creates a new instance of the Arc200_ASA smart contract using a bare call.
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
         * Creates a new instance of the Arc200_ASA smart contract using a bare call.
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
         * Creates a new instance of the Arc200_ASA smart contract using a bare call.
         *
         * @param params The params for the bare (raw) call
         * @returns The create result
         */
        bare: async (params) => {
          const result = await this.appFactory.send.bare.create(params);
          return { result: result.result, appClient: new Arc200AsaClient(result.appClient) };
        }
      }
    };
    this.appFactory = new import_app_factory2.AppFactory({
      ...params,
      appSpec: APP_SPEC2
    });
  }
  /** The name of the app (from the ARC-32 / ARC-56 app spec or override). */
  get appName() {
    return this.appFactory.appName;
  }
  /** The ARC-56 app spec being used */
  get appSpec() {
    return APP_SPEC2;
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
    return new Arc200AsaClient(this.appFactory.getAppClientById(params));
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
    return new Arc200AsaClient(await this.appFactory.getAppClientByCreatorAndName(params));
  }
  /**
   * Idempotently deploys the Arc200_ASA smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  async deploy(params = {}) {
    const result = await this.appFactory.deploy({
      ...params
    });
    return { result: result.result, appClient: new Arc200AsaClient(result.appClient) };
  }
};
var Arc200AsaClient = class _Arc200AsaClient {
  constructor(appClientOrParams) {
    /**
     * Get parameters to create transactions for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
     */
    this.params = {
      /**
       * Makes a clear_state call to an existing instance of the Arc200_ASA smart contract.
       *
       * @param params The params for the bare (raw) call
       * @returns The clearState result
       */
      clearState: (params) => {
        return this.appClient.params.bare.clearState(params);
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `bootstrap(byte[],byte[],uint8,uint256,(byte[32],byte[]))bool` ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call params
       */
      bootstrap: (params) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.bootstrap(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_name()byte[32]` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the name of the token
       *
       * @param params The params for the smart contract call
       * @returns The call params: The name of the token
       */
      arc200Name: (params = { args: [] }) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.arc200Name(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_symbol()byte[8]` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the symbol of the token
       *
       * @param params The params for the smart contract call
       * @returns The call params: The symbol of the token
       */
      arc200Symbol: (params = { args: [] }) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.arc200Symbol(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_decimals()uint8` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the decimals of the token
       *
       * @param params The params for the smart contract call
       * @returns The call params: The decimals of the token
       */
      arc200Decimals: (params = { args: [] }) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.arc200Decimals(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_totalSupply()uint256` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the total supply of the token
       *
       * @param params The params for the smart contract call
       * @returns The call params: The total supply of the token
       */
      arc200TotalSupply: (params = { args: [] }) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.arc200TotalSupply(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_balanceOf(address)uint256` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the current balance of the owner of the token
       *
       * @param params The params for the smart contract call
       * @returns The call params: The current balance of the holder of the token
       */
      arc200BalanceOf: (params) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.arc200BalanceOf(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_transfer(address,uint256)bool` ABI method.
       *
       * Transfers tokens
       *
       * @param params The params for the smart contract call
       * @returns The call params: Success
       */
      arc200Transfer: (params) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.arc200Transfer(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_transferFrom(address,address,uint256)bool` ABI method.
       *
       * Transfers tokens from source to destination as approved spender
       *
       * @param params The params for the smart contract call
       * @returns The call params: Success
       */
      arc200TransferFrom: (params) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.arc200TransferFrom(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_approve(address,uint256)bool` ABI method.
       *
       * Approve spender for a token
       *
       * @param params The params for the smart contract call
       * @returns The call params: Success
       */
      arc200Approve: (params) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.arc200Approve(params));
      },
      /**
           * Makes a call to the Arc200_ASA smart contract using the `arc200_exchange()(uint64,address)` ABI method.
           * 
           * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
           *
          * arc200_exchange() → (uint64 exchange_asset, address sink)
          Returns configuration parameters used by the exchange mechanism:
          exchange_asset: The ASA ID that the ARC200 token can be exchanged with.
          
          sink: The address that holds ARC200 tokens for redemption operations.
          
          This method MUST NOT mutate state.
          
          https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
      
           *
           * @param params The params for the smart contract call
           * @returns The call params
           */
      arc200Exchange: (params = { args: [] }) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.arc200Exchange(params));
      },
      /**
           * Makes a call to the Arc200_ASA smart contract using the `arc200_redeem(uint64)void` ABI method.
           *
          * Exchanges ASA tokens for ARC200 tokens.
          Requirements:
          The user MUST include a valid ASA transfer to the contract in the same transaction group.
          
          The ASA ID MUST match the configured exchange_asset.
          
          The amount transferred MUST be equal to or greater than the amount requested.
          
          The contract MUST transfer ARC200 tokens to the user from the sink address.
          
          No ARC200 tokens may be minted or burned during the exchange.
          
          https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
      
           *
           * @param params The params for the smart contract call
           * @returns The call params
           */
      arc200Redeem: (params) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.arc200Redeem(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `deposit(uint64)uint256` ABI method.
       *
       * wnnt200 for arc200_redeem
       *
       * @param params The params for the smart contract call
       * @returns The call params
       */
      deposit: (params) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.deposit(params));
      },
      /**
           * Makes a call to the Arc200_ASA smart contract using the `arc200_swapBack(uint64)void` ABI method.
           *
          * arc200_swapBack(uint64 amount) → void
          
          Exchanges ARC200 tokens back into ASA tokens.
          Requirements:
          The user MUST transfer ARC200 tokens to the configured sink address.
          
          Upon receiving the ARC200 tokens, the contract MUST transfer the equivalent amount of ASA tokens to the user.
          
          The ASA MUST be transferred from the application's own account.
          
          No ARC200 tokens may be minted or burned during the exchange.
          
          https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
      
           *
           * @param params The params for the smart contract call
           * @returns The call params
           */
      arc200SwapBack: (params) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.arc200SwapBack(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `withdraw(uint64)uint256` ABI method.
       *
       * wnnt200 for arc200_swapBack
       *
       * @param params The params for the smart contract call
       * @returns The call params
       */
      withdraw: (params) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.withdraw(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_allowance(address,address)uint256` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the current allowance of the spender of the tokens of the owner
       *
       * @param params The params for the smart contract call
       * @returns The call params: The remaining allowance
       */
      arc200Allowance: (params) => {
        return this.appClient.params.call(Arc200AsaParamsFactory.arc200Allowance(params));
      }
    };
    /**
     * Create transactions for the current app
     */
    this.createTransaction = {
      /**
       * Makes a clear_state call to an existing instance of the Arc200_ASA smart contract.
       *
       * @param params The params for the bare (raw) call
       * @returns The clearState result
       */
      clearState: (params) => {
        return this.appClient.createTransaction.bare.clearState(params);
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `bootstrap(byte[],byte[],uint8,uint256,(byte[32],byte[]))bool` ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call transaction
       */
      bootstrap: (params) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.bootstrap(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_name()byte[32]` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the name of the token
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: The name of the token
       */
      arc200Name: (params = { args: [] }) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.arc200Name(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_symbol()byte[8]` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the symbol of the token
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: The symbol of the token
       */
      arc200Symbol: (params = { args: [] }) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.arc200Symbol(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_decimals()uint8` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the decimals of the token
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: The decimals of the token
       */
      arc200Decimals: (params = { args: [] }) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.arc200Decimals(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_totalSupply()uint256` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the total supply of the token
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: The total supply of the token
       */
      arc200TotalSupply: (params = { args: [] }) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.arc200TotalSupply(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_balanceOf(address)uint256` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the current balance of the owner of the token
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: The current balance of the holder of the token
       */
      arc200BalanceOf: (params) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.arc200BalanceOf(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_transfer(address,uint256)bool` ABI method.
       *
       * Transfers tokens
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: Success
       */
      arc200Transfer: (params) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.arc200Transfer(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_transferFrom(address,address,uint256)bool` ABI method.
       *
       * Transfers tokens from source to destination as approved spender
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: Success
       */
      arc200TransferFrom: (params) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.arc200TransferFrom(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_approve(address,uint256)bool` ABI method.
       *
       * Approve spender for a token
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: Success
       */
      arc200Approve: (params) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.arc200Approve(params));
      },
      /**
           * Makes a call to the Arc200_ASA smart contract using the `arc200_exchange()(uint64,address)` ABI method.
           * 
           * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
           *
          * arc200_exchange() → (uint64 exchange_asset, address sink)
          Returns configuration parameters used by the exchange mechanism:
          exchange_asset: The ASA ID that the ARC200 token can be exchanged with.
          
          sink: The address that holds ARC200 tokens for redemption operations.
          
          This method MUST NOT mutate state.
          
          https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
      
           *
           * @param params The params for the smart contract call
           * @returns The call transaction
           */
      arc200Exchange: (params = { args: [] }) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.arc200Exchange(params));
      },
      /**
           * Makes a call to the Arc200_ASA smart contract using the `arc200_redeem(uint64)void` ABI method.
           *
          * Exchanges ASA tokens for ARC200 tokens.
          Requirements:
          The user MUST include a valid ASA transfer to the contract in the same transaction group.
          
          The ASA ID MUST match the configured exchange_asset.
          
          The amount transferred MUST be equal to or greater than the amount requested.
          
          The contract MUST transfer ARC200 tokens to the user from the sink address.
          
          No ARC200 tokens may be minted or burned during the exchange.
          
          https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
      
           *
           * @param params The params for the smart contract call
           * @returns The call transaction
           */
      arc200Redeem: (params) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.arc200Redeem(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `deposit(uint64)uint256` ABI method.
       *
       * wnnt200 for arc200_redeem
       *
       * @param params The params for the smart contract call
       * @returns The call transaction
       */
      deposit: (params) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.deposit(params));
      },
      /**
           * Makes a call to the Arc200_ASA smart contract using the `arc200_swapBack(uint64)void` ABI method.
           *
          * arc200_swapBack(uint64 amount) → void
          
          Exchanges ARC200 tokens back into ASA tokens.
          Requirements:
          The user MUST transfer ARC200 tokens to the configured sink address.
          
          Upon receiving the ARC200 tokens, the contract MUST transfer the equivalent amount of ASA tokens to the user.
          
          The ASA MUST be transferred from the application's own account.
          
          No ARC200 tokens may be minted or burned during the exchange.
          
          https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
      
           *
           * @param params The params for the smart contract call
           * @returns The call transaction
           */
      arc200SwapBack: (params) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.arc200SwapBack(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `withdraw(uint64)uint256` ABI method.
       *
       * wnnt200 for arc200_swapBack
       *
       * @param params The params for the smart contract call
       * @returns The call transaction
       */
      withdraw: (params) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.withdraw(params));
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_allowance(address,address)uint256` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the current allowance of the spender of the tokens of the owner
       *
       * @param params The params for the smart contract call
       * @returns The call transaction: The remaining allowance
       */
      arc200Allowance: (params) => {
        return this.appClient.createTransaction.call(Arc200AsaParamsFactory.arc200Allowance(params));
      }
    };
    /**
     * Send calls to the current app
     */
    this.send = {
      /**
       * Makes a clear_state call to an existing instance of the Arc200_ASA smart contract.
       *
       * @param params The params for the bare (raw) call
       * @returns The clearState result
       */
      clearState: (params) => {
        return this.appClient.send.bare.clearState(params);
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `bootstrap(byte[],byte[],uint8,uint256,(byte[32],byte[]))bool` ABI method.
       *
       * @param params The params for the smart contract call
       * @returns The call result
       */
      bootstrap: async (params) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.bootstrap(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_name()byte[32]` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the name of the token
       *
       * @param params The params for the smart contract call
       * @returns The call result: The name of the token
       */
      arc200Name: async (params = { args: [] }) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Name(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_symbol()byte[8]` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the symbol of the token
       *
       * @param params The params for the smart contract call
       * @returns The call result: The symbol of the token
       */
      arc200Symbol: async (params = { args: [] }) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Symbol(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_decimals()uint8` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the decimals of the token
       *
       * @param params The params for the smart contract call
       * @returns The call result: The decimals of the token
       */
      arc200Decimals: async (params = { args: [] }) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Decimals(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_totalSupply()uint256` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the total supply of the token
       *
       * @param params The params for the smart contract call
       * @returns The call result: The total supply of the token
       */
      arc200TotalSupply: async (params = { args: [] }) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200TotalSupply(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_balanceOf(address)uint256` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the current balance of the owner of the token
       *
       * @param params The params for the smart contract call
       * @returns The call result: The current balance of the holder of the token
       */
      arc200BalanceOf: async (params) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200BalanceOf(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_transfer(address,uint256)bool` ABI method.
       *
       * Transfers tokens
       *
       * @param params The params for the smart contract call
       * @returns The call result: Success
       */
      arc200Transfer: async (params) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Transfer(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_transferFrom(address,address,uint256)bool` ABI method.
       *
       * Transfers tokens from source to destination as approved spender
       *
       * @param params The params for the smart contract call
       * @returns The call result: Success
       */
      arc200TransferFrom: async (params) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200TransferFrom(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_approve(address,uint256)bool` ABI method.
       *
       * Approve spender for a token
       *
       * @param params The params for the smart contract call
       * @returns The call result: Success
       */
      arc200Approve: async (params) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Approve(params));
        return { ...result, return: result.return };
      },
      /**
           * Makes a call to the Arc200_ASA smart contract using the `arc200_exchange()(uint64,address)` ABI method.
           * 
           * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
           *
          * arc200_exchange() → (uint64 exchange_asset, address sink)
          Returns configuration parameters used by the exchange mechanism:
          exchange_asset: The ASA ID that the ARC200 token can be exchanged with.
          
          sink: The address that holds ARC200 tokens for redemption operations.
          
          This method MUST NOT mutate state.
          
          https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
      
           *
           * @param params The params for the smart contract call
           * @returns The call result
           */
      arc200Exchange: async (params = { args: [] }) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Exchange(params));
        return { ...result, return: result.return };
      },
      /**
           * Makes a call to the Arc200_ASA smart contract using the `arc200_redeem(uint64)void` ABI method.
           *
          * Exchanges ASA tokens for ARC200 tokens.
          Requirements:
          The user MUST include a valid ASA transfer to the contract in the same transaction group.
          
          The ASA ID MUST match the configured exchange_asset.
          
          The amount transferred MUST be equal to or greater than the amount requested.
          
          The contract MUST transfer ARC200 tokens to the user from the sink address.
          
          No ARC200 tokens may be minted or burned during the exchange.
          
          https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
      
           *
           * @param params The params for the smart contract call
           * @returns The call result
           */
      arc200Redeem: async (params) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Redeem(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `deposit(uint64)uint256` ABI method.
       *
       * wnnt200 for arc200_redeem
       *
       * @param params The params for the smart contract call
       * @returns The call result
       */
      deposit: async (params) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.deposit(params));
        return { ...result, return: result.return };
      },
      /**
           * Makes a call to the Arc200_ASA smart contract using the `arc200_swapBack(uint64)void` ABI method.
           *
          * arc200_swapBack(uint64 amount) → void
          
          Exchanges ARC200 tokens back into ASA tokens.
          Requirements:
          The user MUST transfer ARC200 tokens to the configured sink address.
          
          Upon receiving the ARC200 tokens, the contract MUST transfer the equivalent amount of ASA tokens to the user.
          
          The ASA MUST be transferred from the application's own account.
          
          No ARC200 tokens may be minted or burned during the exchange.
          
          https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
      
           *
           * @param params The params for the smart contract call
           * @returns The call result
           */
      arc200SwapBack: async (params) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200SwapBack(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `withdraw(uint64)uint256` ABI method.
       *
       * wnnt200 for arc200_swapBack
       *
       * @param params The params for the smart contract call
       * @returns The call result
       */
      withdraw: async (params) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.withdraw(params));
        return { ...result, return: result.return };
      },
      /**
       * Makes a call to the Arc200_ASA smart contract using the `arc200_allowance(address,address)uint256` ABI method.
       * 
       * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
       *
       * Returns the current allowance of the spender of the tokens of the owner
       *
       * @param params The params for the smart contract call
       * @returns The call result: The remaining allowance
       */
      arc200Allowance: async (params) => {
        const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Allowance(params));
        return { ...result, return: result.return };
      }
    };
    /**
     * Methods to access state for the current Arc200_ASA app
     */
    this.state = {
      /**
       * Methods to access global state for the current Arc200_ASA app
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
            totalSupply: result.totalSupply,
            assetId: result.assetId
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
        },
        /**
         * Get the current value of the assetId key in global state
         */
        assetId: async () => {
          return await this.appClient.state.global.getValue("assetId");
        }
      },
      /**
       * Methods to access box state for the current Arc200_ASA app
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
    this.appClient = appClientOrParams instanceof import_app_client2.AppClient ? appClientOrParams : new import_app_client2.AppClient({
      ...appClientOrParams,
      appSpec: APP_SPEC2
    });
  }
  /**
   * Checks for decode errors on the given return value and maps the return value to the return type for the given method
   * @returns The typed return value or undefined if there was no value
   */
  decodeReturnValue(method, returnValue) {
    return returnValue !== void 0 ? (0, import_app_arc562.getArc56ReturnValue)(returnValue, this.appClient.getABIMethod(method), APP_SPEC2.structs) : void 0;
  }
  /**
   * Returns a new `Arc200AsaClient` client, resolving the app by creator address and name
   * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
   * @param params The parameters to create the app client
   */
  static async fromCreatorAndName(params) {
    return new _Arc200AsaClient(await import_app_client2.AppClient.fromCreatorAndName({ ...params, appSpec: APP_SPEC2 }));
  }
  /**
   * Returns an `Arc200AsaClient` instance for the current network based on
   * pre-determined network-specific app IDs specified in the ARC-56 app spec.
   *
   * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
   * @param params The parameters to create the app client
   */
  static async fromNetwork(params) {
    return new _Arc200AsaClient(await import_app_client2.AppClient.fromNetwork({ ...params, appSpec: APP_SPEC2 }));
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
    return new _Arc200AsaClient(this.appClient.clone(params));
  }
  /**
   * Makes a readonly (simulated) call to the Arc200_ASA smart contract using the `arc200_name()byte[32]` ABI method.
   * 
   * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
   *
   * Returns the name of the token
   *
   * @param params The params for the smart contract call
   * @returns The call result: The name of the token
   */
  async arc200Name(params = { args: [] }) {
    const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Name(params));
    return result.return;
  }
  /**
   * Makes a readonly (simulated) call to the Arc200_ASA smart contract using the `arc200_symbol()byte[8]` ABI method.
   * 
   * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
   *
   * Returns the symbol of the token
   *
   * @param params The params for the smart contract call
   * @returns The call result: The symbol of the token
   */
  async arc200Symbol(params = { args: [] }) {
    const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Symbol(params));
    return result.return;
  }
  /**
   * Makes a readonly (simulated) call to the Arc200_ASA smart contract using the `arc200_decimals()uint8` ABI method.
   * 
   * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
   *
   * Returns the decimals of the token
   *
   * @param params The params for the smart contract call
   * @returns The call result: The decimals of the token
   */
  async arc200Decimals(params = { args: [] }) {
    const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Decimals(params));
    return result.return;
  }
  /**
   * Makes a readonly (simulated) call to the Arc200_ASA smart contract using the `arc200_totalSupply()uint256` ABI method.
   * 
   * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
   *
   * Returns the total supply of the token
   *
   * @param params The params for the smart contract call
   * @returns The call result: The total supply of the token
   */
  async arc200TotalSupply(params = { args: [] }) {
    const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200TotalSupply(params));
    return result.return;
  }
  /**
   * Makes a readonly (simulated) call to the Arc200_ASA smart contract using the `arc200_balanceOf(address)uint256` ABI method.
   * 
   * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
   *
   * Returns the current balance of the owner of the token
   *
   * @param params The params for the smart contract call
   * @returns The call result: The current balance of the holder of the token
   */
  async arc200BalanceOf(params) {
    const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200BalanceOf(params));
    return result.return;
  }
  /**
     * Makes a readonly (simulated) call to the Arc200_ASA smart contract using the `arc200_exchange()(uint64,address)` ABI method.
     * 
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
    * arc200_exchange() → (uint64 exchange_asset, address sink)
    Returns configuration parameters used by the exchange mechanism:
    exchange_asset: The ASA ID that the ARC200 token can be exchanged with.
    
    sink: The address that holds ARC200 tokens for redemption operations.
    
    This method MUST NOT mutate state.
    
    https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
  
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
  async arc200Exchange(params = { args: [] }) {
    const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Exchange(params));
    return result.return;
  }
  /**
   * Makes a readonly (simulated) call to the Arc200_ASA smart contract using the `arc200_allowance(address,address)uint256` ABI method.
   * 
   * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
   *
   * Returns the current allowance of the spender of the tokens of the owner
   *
   * @param params The params for the smart contract call
   * @returns The call result: The remaining allowance
   */
  async arc200Allowance(params) {
    const result = await this.appClient.send.call(Arc200AsaParamsFactory.arc200Allowance(params));
    return result.return;
  }
  newGroup() {
    const client = this;
    const composer = this.algorand.newGroup();
    let promiseChain = Promise.resolve();
    const resultMappers = [];
    return {
      /**
       * Add a bootstrap(byte[],byte[],uint8,uint256,(byte[32],byte[]))bool method call against the Arc200_ASA contract
       */
      bootstrap(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.bootstrap(params)));
        resultMappers.push((v) => client.decodeReturnValue("bootstrap(byte[],byte[],uint8,uint256,(byte[32],byte[]))bool", v));
        return this;
      },
      /**
       * Add a arc200_name()byte[32] method call against the Arc200_ASA contract
       */
      arc200Name(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Name(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_name()byte[32]", v));
        return this;
      },
      /**
       * Add a arc200_symbol()byte[8] method call against the Arc200_ASA contract
       */
      arc200Symbol(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Symbol(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_symbol()byte[8]", v));
        return this;
      },
      /**
       * Add a arc200_decimals()uint8 method call against the Arc200_ASA contract
       */
      arc200Decimals(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Decimals(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_decimals()uint8", v));
        return this;
      },
      /**
       * Add a arc200_totalSupply()uint256 method call against the Arc200_ASA contract
       */
      arc200TotalSupply(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200TotalSupply(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_totalSupply()uint256", v));
        return this;
      },
      /**
       * Add a arc200_balanceOf(address)uint256 method call against the Arc200_ASA contract
       */
      arc200BalanceOf(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200BalanceOf(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_balanceOf(address)uint256", v));
        return this;
      },
      /**
       * Add a arc200_transfer(address,uint256)bool method call against the Arc200_ASA contract
       */
      arc200Transfer(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Transfer(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_transfer(address,uint256)bool", v));
        return this;
      },
      /**
       * Add a arc200_transferFrom(address,address,uint256)bool method call against the Arc200_ASA contract
       */
      arc200TransferFrom(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200TransferFrom(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_transferFrom(address,address,uint256)bool", v));
        return this;
      },
      /**
       * Add a arc200_approve(address,uint256)bool method call against the Arc200_ASA contract
       */
      arc200Approve(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Approve(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_approve(address,uint256)bool", v));
        return this;
      },
      /**
       * Add a arc200_exchange()(uint64,address) method call against the Arc200_ASA contract
       */
      arc200Exchange(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Exchange(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_exchange()(uint64,address)", v));
        return this;
      },
      /**
       * Add a arc200_redeem(uint64)void method call against the Arc200_ASA contract
       */
      arc200Redeem(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Redeem(params)));
        resultMappers.push(void 0);
        return this;
      },
      /**
       * Add a deposit(uint64)uint256 method call against the Arc200_ASA contract
       */
      deposit(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.deposit(params)));
        resultMappers.push((v) => client.decodeReturnValue("deposit(uint64)uint256", v));
        return this;
      },
      /**
       * Add a arc200_swapBack(uint64)void method call against the Arc200_ASA contract
       */
      arc200SwapBack(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200SwapBack(params)));
        resultMappers.push(void 0);
        return this;
      },
      /**
       * Add a withdraw(uint64)uint256 method call against the Arc200_ASA contract
       */
      withdraw(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.withdraw(params)));
        resultMappers.push((v) => client.decodeReturnValue("withdraw(uint64)uint256", v));
        return this;
      },
      /**
       * Add a arc200_allowance(address,address)uint256 method call against the Arc200_ASA contract
       */
      arc200Allowance(params) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.arc200Allowance(params)));
        resultMappers.push((v) => client.decodeReturnValue("arc200_allowance(address,address)uint256", v));
        return this;
      },
      /**
       * Add a clear state call to the Arc200_ASA contract
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
          returns: result.returns?.map((val, i) => resultMappers[i] !== void 0 ? resultMappers[i](val) : val.returnValue)
        };
      },
      async send(params) {
        await promiseChain;
        const result = await composer.send(params);
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== void 0 ? resultMappers[i](val) : val.returnValue)
        };
      }
    };
  }
};

// src/getArc200ASAClient.ts
var getArc200ASAClient = (input) => {
  return new Arc200AsaClient({
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
  APP_SPEC,
  ApprovalStructFromTuple,
  Arc200AsaClient,
  Arc200AsaFactory,
  Arc200AsaParamsFactory,
  Arc200Client,
  Arc200ExchangeInfoFromTuple,
  Arc200Factory,
  AsaPropsFromTuple,
  arc200,
  getArc200ASAClient,
  getArc200Client
});
//# sourceMappingURL=index.js.map