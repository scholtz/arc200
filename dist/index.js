"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  getArc200Client: () => getArc200Client_default
});
module.exports = __toCommonJS(src_exports);

// contracts/clients/Arc200Client.ts
var algokit = __toESM(require("@algorandfoundation/algokit-utils"));
var import_algosdk = require("algosdk");
var APP_SPEC = {
  "hints": {
    "arc200_name()string": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "arc200_symbol()string": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "arc200_decimals()uint8": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "arc200_totalSupply()uint256": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "arc200_balanceOf(address)uint256": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "arc200_transfer(address,uint256)bool": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "arc200_transferFrom(address,address,uint256)bool": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "arc200_approve(address,uint256)bool": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "arc200_allowance(address,address)uint256": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {},
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCgovLyBUaGlzIFRFQUwgd2FzIGdlbmVyYXRlZCBieSBURUFMU2NyaXB0IHYwLjg0LjAKLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsZ29yYW5kZm91bmRhdGlvbi9URUFMU2NyaXB0CgovLyBUaGlzIGNvbnRyYWN0IGlzIGNvbXBsaWFudCB3aXRoIGFuZC9vciBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgQVJDczogWyBBUkM0IF0KCi8vIFRoZSBmb2xsb3dpbmcgdGVuIGxpbmVzIG9mIFRFQUwgaGFuZGxlIGluaXRpYWwgcHJvZ3JhbSBmbG93Ci8vIFRoaXMgcGF0dGVybiBpcyB1c2VkIHRvIG1ha2UgaXQgZWFzeSBmb3IgYW55b25lIHRvIHBhcnNlIHRoZSBzdGFydCBvZiB0aGUgcHJvZ3JhbSBhbmQgZGV0ZXJtaW5lIGlmIGEgc3BlY2lmaWMgYWN0aW9uIGlzIGFsbG93ZWQKLy8gSGVyZSwgYWN0aW9uIHJlZmVycyB0byB0aGUgT25Db21wbGV0ZSBpbiBjb21iaW5hdGlvbiB3aXRoIHdoZXRoZXIgdGhlIGFwcCBpcyBiZWluZyBjcmVhdGVkIG9yIGNhbGxlZAovLyBFdmVyeSBwb3NzaWJsZSBhY3Rpb24gZm9yIHRoaXMgY29udHJhY3QgaXMgcmVwcmVzZW50ZWQgaW4gdGhlIHN3aXRjaCBzdGF0ZW1lbnQKLy8gSWYgdGhlIGFjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhlIGNvbnRyYWN0LCBpdHMgcmVzcGVjdGl2ZSBicmFuY2ggd2lsbCBiZSAiKk5PVF9JTVBMRU1FTlRFRCIgd2hpY2gganVzdCBjb250YWlucyAiZXJyIgp0eG4gQXBwbGljYXRpb25JRAohCmludCA2CioKdHhuIE9uQ29tcGxldGlvbgorCnN3aXRjaCAqY2FsbF9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqY3JlYXRlX05vT3AgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVECgoqTk9UX0lNUExFTUVOVEVEOgoJZXJyCgovLyBhcmMyMDBfbmFtZSgpc3RyaW5nCiphYmlfcm91dGVfYXJjMjAwX25hbWU6CgkvLyBUaGUgQUJJIHJldHVybiBwcmVmaXgKCWJ5dGUgMHgxNTFmN2M3NQoKCS8vIGV4ZWN1dGUgYXJjMjAwX25hbWUoKXN0cmluZwoJY2FsbHN1YiBhcmMyMDBfbmFtZQoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWNvbmNhdAoJbG9nCglpbnQgMQoJcmV0dXJuCgovLyBhcmMyMDBfbmFtZSgpOiBzdHJpbmdbMzJdCi8vCi8vIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHRva2VuCi8vCi8vIEByZXR1cm5zIFRoZSBuYW1lIG9mIHRoZSB0b2tlbgphcmMyMDBfbmFtZToKCXByb3RvIDAgMQoKCS8vIGNvbnRyYWN0c1xhcmMyMDAuYWxnby50czoxNQoJLy8gcmV0dXJuICdBcmMyMDAnOwoJYnl0ZSAweDQxNzI2MzMyMzAzMCAvLyAiQXJjMjAwIgoJcmV0c3ViCgovLyBhcmMyMDBfc3ltYm9sKClzdHJpbmcKKmFiaV9yb3V0ZV9hcmMyMDBfc3ltYm9sOgoJLy8gVGhlIEFCSSByZXR1cm4gcHJlZml4CglieXRlIDB4MTUxZjdjNzUKCgkvLyBleGVjdXRlIGFyYzIwMF9zeW1ib2woKXN0cmluZwoJY2FsbHN1YiBhcmMyMDBfc3ltYm9sCglkdXAKCWxlbgoJaXRvYgoJZXh0cmFjdCA2IDIKCXN3YXAKCWNvbmNhdAoJY29uY2F0Cglsb2cKCWludCAxCglyZXR1cm4KCi8vIGFyYzIwMF9zeW1ib2woKTogc3RyaW5nWzhdCi8vCi8vIFJldHVybnMgdGhlIHN5bWJvbCBvZiB0aGUgdG9rZW4KLy8KLy8gQHJldHVybnMgVGhlIHN5bWJvbCBvZiB0aGUgdG9rZW4KYXJjMjAwX3N5bWJvbDoKCXByb3RvIDAgMQoKCS8vIGNvbnRyYWN0c1xhcmMyMDAuYWxnby50czoyNQoJLy8gcmV0dXJuICdBcmMyMDAnOwoJYnl0ZSAweDQxNzI2MzMyMzAzMCAvLyAiQXJjMjAwIgoJcmV0c3ViCgovLyBhcmMyMDBfZGVjaW1hbHMoKXVpbnQ4CiphYmlfcm91dGVfYXJjMjAwX2RlY2ltYWxzOgoJLy8gVGhlIEFCSSByZXR1cm4gcHJlZml4CglieXRlIDB4MTUxZjdjNzUKCgkvLyBleGVjdXRlIGFyYzIwMF9kZWNpbWFscygpdWludDgKCWNhbGxzdWIgYXJjMjAwX2RlY2ltYWxzCglpdG9iCglkdXAKCWJpdGxlbgoJaW50IDgKCTw9Cglhc3NlcnQKCWV4dHJhY3QgNyAxCgljb25jYXQKCWxvZwoJaW50IDEKCXJldHVybgoKLy8gYXJjMjAwX2RlY2ltYWxzKCk6IHVpbnQ4Ci8vCi8vIFJldHVybnMgdGhlIGRlY2ltYWxzIG9mIHRoZSB0b2tlbgovLwovLyBAcmV0dXJucyBUaGUgZGVjaW1hbHMgb2YgdGhlIHRva2VuCmFyYzIwMF9kZWNpbWFsczoKCXByb3RvIDAgMQoKCS8vIGNvbnRyYWN0c1xhcmMyMDAuYWxnby50czozNQoJLy8gcmV0dXJuIDYgYXMgdWludDg7CglpbnQgNgoJcmV0c3ViCgovLyBhcmMyMDBfdG90YWxTdXBwbHkoKXVpbnQyNTYKKmFiaV9yb3V0ZV9hcmMyMDBfdG90YWxTdXBwbHk6CgkvLyBUaGUgQUJJIHJldHVybiBwcmVmaXgKCWJ5dGUgMHgxNTFmN2M3NQoKCS8vIGV4ZWN1dGUgYXJjMjAwX3RvdGFsU3VwcGx5KCl1aW50MjU2CgljYWxsc3ViIGFyYzIwMF90b3RhbFN1cHBseQoJZHVwCgliaXRsZW4KCWludCAyNTYKCTw9Cglhc3NlcnQKCWJ5dGUgMHhGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGCgliJgoJZHVwCglsZW4KCWR1cAoJaW50IDMyCgktCglzd2FwCglzdWJzdHJpbmczCgljb25jYXQKCWxvZwoJaW50IDEKCXJldHVybgoKLy8gYXJjMjAwX3RvdGFsU3VwcGx5KCk6IHVpbnQyNTYKLy8KLy8gUmV0dXJucyB0aGUgdG90YWwgc3VwcGx5IG9mIHRoZSB0b2tlbgovLwovLyBAcmV0dXJucyBUaGUgdG90YWwgc3VwcGx5IG9mIHRoZSB0b2tlbgphcmMyMDBfdG90YWxTdXBwbHk6Cglwcm90byAwIDEKCgkvLyBjb250cmFjdHNcYXJjMjAwLmFsZ28udHM6NDUKCS8vIHJldHVybiAxXzAwMF8wMDBfMDAwXzAwMF8wMDAgYXMgdWludDI1NjsKCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzOGQ3ZWE0YzY4MDAwCglyZXRzdWIKCi8vIGFyYzIwMF9iYWxhbmNlT2YoYWRkcmVzcyl1aW50MjU2CiphYmlfcm91dGVfYXJjMjAwX2JhbGFuY2VPZjoKCS8vIFRoZSBBQkkgcmV0dXJuIHByZWZpeAoJYnl0ZSAweDE1MWY3Yzc1CgoJLy8gb3duZXI6IGFkZHJlc3MKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWR1cAoJbGVuCglpbnQgMzIKCT09Cglhc3NlcnQKCgkvLyBleGVjdXRlIGFyYzIwMF9iYWxhbmNlT2YoYWRkcmVzcyl1aW50MjU2CgljYWxsc3ViIGFyYzIwMF9iYWxhbmNlT2YKCWR1cAoJYml0bGVuCglpbnQgMjU2Cgk8PQoJYXNzZXJ0CglieXRlIDB4RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRgoJYiYKCWR1cAoJbGVuCglkdXAKCWludCAzMgoJLQoJc3dhcAoJc3Vic3RyaW5nMwoJY29uY2F0Cglsb2cKCWludCAxCglyZXR1cm4KCi8vIGFyYzIwMF9iYWxhbmNlT2Yob3duZXI6IEFkZHJlc3MpOiB1aW50MjU2Ci8vCi8vIFJldHVybnMgdGhlIGN1cnJlbnQgYmFsYW5jZSBvZiB0aGUgb3duZXIgb2YgdGhlIHRva2VuCi8vCi8vIEBwYXJhbSBvd25lciBUaGUgYWRkcmVzcyBvZiB0aGUgb3duZXIgb2YgdGhlIHRva2VuCi8vIEByZXR1cm5zIFRoZSBjdXJyZW50IGJhbGFuY2Ugb2YgdGhlIGhvbGRlciBvZiB0aGUgdG9rZW4KYXJjMjAwX2JhbGFuY2VPZjoKCXByb3RvIDEgMQoKCS8vIGNvbnRyYWN0c1xhcmMyMDAuYWxnby50czo1NgoJLy8gcmV0dXJuIDAgYXMgdWludDI1NjsKCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCglyZXRzdWIKCi8vIGFyYzIwMF90cmFuc2ZlcihhZGRyZXNzLHVpbnQyNTYpYm9vbAoqYWJpX3JvdXRlX2FyYzIwMF90cmFuc2ZlcjoKCS8vIFRoZSBBQkkgcmV0dXJuIHByZWZpeAoJYnl0ZSAweDE1MWY3Yzc1CgoJLy8gdmFsdWU6IHVpbnQyNTYKCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCWR1cAoJbGVuCglpbnQgMzIKCT09Cglhc3NlcnQKCgkvLyB0bzogYWRkcmVzcwoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJZHVwCglsZW4KCWludCAzMgoJPT0KCWFzc2VydAoKCS8vIGV4ZWN1dGUgYXJjMjAwX3RyYW5zZmVyKGFkZHJlc3MsdWludDI1Nilib29sCgljYWxsc3ViIGFyYzIwMF90cmFuc2ZlcgoJYnl0ZSAweDAwCglpbnQgMAoJdW5jb3ZlciAyCglzZXRiaXQKCWNvbmNhdAoJbG9nCglpbnQgMQoJcmV0dXJuCgovLyBhcmMyMDBfdHJhbnNmZXIodG86IEFkZHJlc3MsIHZhbHVlOiB1aW50MjU2KTogYm9vbGVhbgovLwovLyBUcmFuc2ZlcnMgdG9rZW5zCi8vCi8vIEBwYXJhbSB0byBUaGUgZGVzdGluYXRpb24gb2YgdGhlIHRyYW5zZmVyCi8vIEBwYXJhbSB2YWx1ZSBBbW91bnQgb2YgdG9rZW5zIHRvIHRyYW5zZmVyCi8vIEByZXR1cm5zIFN1Y2Nlc3MKYXJjMjAwX3RyYW5zZmVyOgoJcHJvdG8gMiAxCgoJLy8gY29udHJhY3RzXGFyYzIwMC5hbGdvLnRzOjY3CgkvLyByZXR1cm4gZmFsc2U7CglpbnQgMAoJcmV0c3ViCgovLyBhcmMyMDBfdHJhbnNmZXJGcm9tKGFkZHJlc3MsYWRkcmVzcyx1aW50MjU2KWJvb2wKKmFiaV9yb3V0ZV9hcmMyMDBfdHJhbnNmZXJGcm9tOgoJLy8gVGhlIEFCSSByZXR1cm4gcHJlZml4CglieXRlIDB4MTUxZjdjNzUKCgkvLyB2YWx1ZTogdWludDI1NgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwoJZHVwCglsZW4KCWludCAzMgoJPT0KCWFzc2VydAoKCS8vIHRvOiBhZGRyZXNzCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglkdXAKCWxlbgoJaW50IDMyCgk9PQoJYXNzZXJ0CgoJLy8gZnJvbTogYWRkcmVzcwoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJZHVwCglsZW4KCWludCAzMgoJPT0KCWFzc2VydAoKCS8vIGV4ZWN1dGUgYXJjMjAwX3RyYW5zZmVyRnJvbShhZGRyZXNzLGFkZHJlc3MsdWludDI1Nilib29sCgljYWxsc3ViIGFyYzIwMF90cmFuc2ZlckZyb20KCWJ5dGUgMHgwMAoJaW50IDAKCXVuY292ZXIgMgoJc2V0Yml0Cgljb25jYXQKCWxvZwoJaW50IDEKCXJldHVybgoKLy8gYXJjMjAwX3RyYW5zZmVyRnJvbShmcm9tOiBBZGRyZXNzLCB0bzogQWRkcmVzcywgdmFsdWU6IHVpbnQyNTYpOiBib29sZWFuCi8vCi8vIFRyYW5zZmVycyB0b2tlbnMgZnJvbSBzb3VyY2UgdG8gZGVzdGluYXRpb24gYXMgYXBwcm92ZWQgc3BlbmRlcgovLwovLyBAcGFyYW0gZnJvbSBUaGUgc291cmNlIG9mIHRoZSB0cmFuc2ZlcgovLyBAcGFyYW0gdG8gVGhlIGRlc3RpbmF0aW9uIG9mIHRoZSB0cmFuc2ZlcgovLyBAcGFyYW0gdmFsdWUgQW1vdW50IG9mIHRva2VucyB0byB0cmFuc2ZlcgovLyBAcmV0dXJucyBTdWNjZXNzCmFyYzIwMF90cmFuc2ZlckZyb206Cglwcm90byAzIDEKCgkvLyBjb250cmFjdHNcYXJjMjAwLmFsZ28udHM6NzkKCS8vIHJldHVybiBmYWxzZTsKCWludCAwCglyZXRzdWIKCi8vIGFyYzIwMF9hcHByb3ZlKGFkZHJlc3MsdWludDI1Nilib29sCiphYmlfcm91dGVfYXJjMjAwX2FwcHJvdmU6CgkvLyBUaGUgQUJJIHJldHVybiBwcmVmaXgKCWJ5dGUgMHgxNTFmN2M3NQoKCS8vIHZhbHVlOiB1aW50MjU2Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglkdXAKCWxlbgoJaW50IDMyCgk9PQoJYXNzZXJ0CgoJLy8gc3BlbmRlcjogYWRkcmVzcwoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJZHVwCglsZW4KCWludCAzMgoJPT0KCWFzc2VydAoKCS8vIGV4ZWN1dGUgYXJjMjAwX2FwcHJvdmUoYWRkcmVzcyx1aW50MjU2KWJvb2wKCWNhbGxzdWIgYXJjMjAwX2FwcHJvdmUKCWJ5dGUgMHgwMAoJaW50IDAKCXVuY292ZXIgMgoJc2V0Yml0Cgljb25jYXQKCWxvZwoJaW50IDEKCXJldHVybgoKLy8gYXJjMjAwX2FwcHJvdmUoc3BlbmRlcjogQWRkcmVzcywgdmFsdWU6IHVpbnQyNTYpOiBib29sZWFuCi8vCi8vIEFwcHJvdmUgc3BlbmRlciBmb3IgYSB0b2tlbgovLwovLyBAcGFyYW0gc3BlbmRlciBXaG8gaXMgYWxsb3dlZCB0byB0YWtlIHRva2VucyBvbiBvd25lcidzIGJlaGFsZgovLyBAcGFyYW0gdmFsdWUgQW1vdW50IG9mIHRva2VucyB0byBiZSB0YWtlbiBieSBzcGVuZGVyCi8vIEByZXR1cm5zIFN1Y2Nlc3MKYXJjMjAwX2FwcHJvdmU6Cglwcm90byAyIDEKCgkvLyBjb250cmFjdHNcYXJjMjAwLmFsZ28udHM6OTAKCS8vIHJldHVybiBmYWxzZTsKCWludCAwCglyZXRzdWIKCi8vIGFyYzIwMF9hbGxvd2FuY2UoYWRkcmVzcyxhZGRyZXNzKXVpbnQyNTYKKmFiaV9yb3V0ZV9hcmMyMDBfYWxsb3dhbmNlOgoJLy8gVGhlIEFCSSByZXR1cm4gcHJlZml4CglieXRlIDB4MTUxZjdjNzUKCgkvLyBzcGVuZGVyOiBhZGRyZXNzCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglkdXAKCWxlbgoJaW50IDMyCgk9PQoJYXNzZXJ0CgoJLy8gb3duZXI6IGFkZHJlc3MKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWR1cAoJbGVuCglpbnQgMzIKCT09Cglhc3NlcnQKCgkvLyBleGVjdXRlIGFyYzIwMF9hbGxvd2FuY2UoYWRkcmVzcyxhZGRyZXNzKXVpbnQyNTYKCWNhbGxzdWIgYXJjMjAwX2FsbG93YW5jZQoJZHVwCgliaXRsZW4KCWludCAyNTYKCTw9Cglhc3NlcnQKCWJ5dGUgMHhGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGCgliJgoJZHVwCglsZW4KCWR1cAoJaW50IDMyCgktCglzd2FwCglzdWJzdHJpbmczCgljb25jYXQKCWxvZwoJaW50IDEKCXJldHVybgoKLy8gYXJjMjAwX2FsbG93YW5jZShvd25lcjogQWRkcmVzcywgc3BlbmRlcjogQWRkcmVzcyk6IHVpbnQyNTYKLy8KLy8gUmV0dXJucyB0aGUgY3VycmVudCBhbGxvd2FuY2Ugb2YgdGhlIHNwZW5kZXIgb2YgdGhlIHRva2VucyBvZiB0aGUgb3duZXIKLy8KLy8gQHBhcmFtIG93bmVyIE93bmVyJ3MgYWNjb3VudAovLyBAcGFyYW0gc3BlbmRlciBXaG8gaXMgYWxsb3dlZCB0byB0YWtlIHRva2VucyBvbiBvd25lcidzIGJlaGFsZgovLyBAcmV0dXJucyBUaGUgcmVtYWluaW5nIGFsbG93YW5jZQphcmMyMDBfYWxsb3dhbmNlOgoJcHJvdG8gMiAxCgoJLy8gY29udHJhY3RzXGFyYzIwMC5hbGdvLnRzOjEwMgoJLy8gcmV0dXJuIDAgYXMgdWludDI1NjsKCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCglyZXRzdWIKCiphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb246CglpbnQgMQoJcmV0dXJuCgoqY3JlYXRlX05vT3A6CgltZXRob2QgImNyZWF0ZUFwcGxpY2F0aW9uKCl2b2lkIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggKmFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbgoJZXJyCgoqY2FsbF9Ob09wOgoJbWV0aG9kICJhcmMyMDBfbmFtZSgpc3RyaW5nIgoJbWV0aG9kICJhcmMyMDBfc3ltYm9sKClzdHJpbmciCgltZXRob2QgImFyYzIwMF9kZWNpbWFscygpdWludDgiCgltZXRob2QgImFyYzIwMF90b3RhbFN1cHBseSgpdWludDI1NiIKCW1ldGhvZCAiYXJjMjAwX2JhbGFuY2VPZihhZGRyZXNzKXVpbnQyNTYiCgltZXRob2QgImFyYzIwMF90cmFuc2ZlcihhZGRyZXNzLHVpbnQyNTYpYm9vbCIKCW1ldGhvZCAiYXJjMjAwX3RyYW5zZmVyRnJvbShhZGRyZXNzLGFkZHJlc3MsdWludDI1Nilib29sIgoJbWV0aG9kICJhcmMyMDBfYXBwcm92ZShhZGRyZXNzLHVpbnQyNTYpYm9vbCIKCW1ldGhvZCAiYXJjMjAwX2FsbG93YW5jZShhZGRyZXNzLGFkZHJlc3MpdWludDI1NiIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoICphYmlfcm91dGVfYXJjMjAwX25hbWUgKmFiaV9yb3V0ZV9hcmMyMDBfc3ltYm9sICphYmlfcm91dGVfYXJjMjAwX2RlY2ltYWxzICphYmlfcm91dGVfYXJjMjAwX3RvdGFsU3VwcGx5ICphYmlfcm91dGVfYXJjMjAwX2JhbGFuY2VPZiAqYWJpX3JvdXRlX2FyYzIwMF90cmFuc2ZlciAqYWJpX3JvdXRlX2FyYzIwMF90cmFuc2ZlckZyb20gKmFiaV9yb3V0ZV9hcmMyMDBfYXBwcm92ZSAqYWJpX3JvdXRlX2FyYzIwMF9hbGxvd2FuY2UKCWVycg==",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDEw"
  },
  "contract": {
    "name": "Arc200",
    "desc": "",
    "methods": [
      {
        "name": "arc200_name",
        "desc": "Returns the name of the token",
        "readonly": true,
        "args": [],
        "returns": {
          "type": "string",
          "desc": "The name of the token"
        }
      },
      {
        "name": "arc200_symbol",
        "desc": "Returns the symbol of the token",
        "readonly": true,
        "args": [],
        "returns": {
          "type": "string",
          "desc": "The symbol of the token"
        }
      },
      {
        "name": "arc200_decimals",
        "desc": "Returns the decimals of the token",
        "readonly": true,
        "args": [],
        "returns": {
          "type": "uint8",
          "desc": "The decimals of the token"
        }
      },
      {
        "name": "arc200_totalSupply",
        "desc": "Returns the total supply of the token",
        "readonly": true,
        "args": [],
        "returns": {
          "type": "uint256",
          "desc": "The total supply of the token"
        }
      },
      {
        "name": "arc200_balanceOf",
        "desc": "Returns the current balance of the owner of the token",
        "readonly": true,
        "args": [
          {
            "name": "owner",
            "type": "address",
            "desc": "The address of the owner of the token"
          }
        ],
        "returns": {
          "type": "uint256",
          "desc": "The current balance of the holder of the token"
        }
      },
      {
        "name": "arc200_transfer",
        "desc": "Transfers tokens",
        "args": [
          {
            "name": "to",
            "type": "address",
            "desc": "The destination of the transfer"
          },
          {
            "name": "value",
            "type": "uint256",
            "desc": "Amount of tokens to transfer"
          }
        ],
        "returns": {
          "type": "bool",
          "desc": "Success"
        }
      },
      {
        "name": "arc200_transferFrom",
        "desc": "Transfers tokens from source to destination as approved spender",
        "args": [
          {
            "name": "from",
            "type": "address",
            "desc": "The source of the transfer"
          },
          {
            "name": "to",
            "type": "address",
            "desc": "The destination of the transfer"
          },
          {
            "name": "value",
            "type": "uint256",
            "desc": "Amount of tokens to transfer"
          }
        ],
        "returns": {
          "type": "bool",
          "desc": "Success"
        }
      },
      {
        "name": "arc200_approve",
        "desc": "Approve spender for a token",
        "args": [
          {
            "name": "spender",
            "type": "address",
            "desc": "Who is allowed to take tokens on owner's behalf"
          },
          {
            "name": "value",
            "type": "uint256",
            "desc": "Amount of tokens to be taken by spender"
          }
        ],
        "returns": {
          "type": "bool",
          "desc": "Success"
        }
      },
      {
        "name": "arc200_allowance",
        "desc": "Returns the current allowance of the spender of the tokens of the owner",
        "readonly": true,
        "args": [
          {
            "name": "owner",
            "type": "address",
            "desc": "Owner's account"
          },
          {
            "name": "spender",
            "type": "address",
            "desc": "Who is allowed to take tokens on owner's behalf"
          }
        ],
        "returns": {
          "type": "uint256",
          "desc": "The remaining allowance"
        }
      },
      {
        "name": "createApplication",
        "args": [],
        "returns": {
          "type": "void"
        }
      }
    ]
  }
};
var Arc200CallFactory = class {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the Arc200 smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args, params = {}) {
        return {
          method: "createApplication()void",
          methodArgs: Array.isArray(args) ? args : [],
          ...params
        };
      }
    };
  }
  /**
   * Constructs a no op call for the arc200_name()string ABI method
   *
   * Returns the name of the token
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static arc200Name(args, params) {
    return {
      method: "arc200_name()string",
      methodArgs: Array.isArray(args) ? args : [],
      ...params
    };
  }
  /**
   * Constructs a no op call for the arc200_symbol()string ABI method
   *
   * Returns the symbol of the token
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static arc200Symbol(args, params) {
    return {
      method: "arc200_symbol()string",
      methodArgs: Array.isArray(args) ? args : [],
      ...params
    };
  }
  /**
   * Constructs a no op call for the arc200_decimals()uint8 ABI method
   *
   * Returns the decimals of the token
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static arc200Decimals(args, params) {
    return {
      method: "arc200_decimals()uint8",
      methodArgs: Array.isArray(args) ? args : [],
      ...params
    };
  }
  /**
   * Constructs a no op call for the arc200_totalSupply()uint256 ABI method
   *
   * Returns the total supply of the token
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static arc200TotalSupply(args, params) {
    return {
      method: "arc200_totalSupply()uint256",
      methodArgs: Array.isArray(args) ? args : [],
      ...params
    };
  }
  /**
   * Constructs a no op call for the arc200_balanceOf(address)uint256 ABI method
   *
   * Returns the current balance of the owner of the token
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static arc200BalanceOf(args, params) {
    return {
      method: "arc200_balanceOf(address)uint256",
      methodArgs: Array.isArray(args) ? args : [args.owner],
      ...params
    };
  }
  /**
   * Constructs a no op call for the arc200_transfer(address,uint256)bool ABI method
   *
   * Transfers tokens
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static arc200Transfer(args, params) {
    return {
      method: "arc200_transfer(address,uint256)bool",
      methodArgs: Array.isArray(args) ? args : [args.to, args.value],
      ...params
    };
  }
  /**
   * Constructs a no op call for the arc200_transferFrom(address,address,uint256)bool ABI method
   *
   * Transfers tokens from source to destination as approved spender
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static arc200TransferFrom(args, params) {
    return {
      method: "arc200_transferFrom(address,address,uint256)bool",
      methodArgs: Array.isArray(args) ? args : [args.from, args.to, args.value],
      ...params
    };
  }
  /**
   * Constructs a no op call for the arc200_approve(address,uint256)bool ABI method
   *
   * Approve spender for a token
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static arc200Approve(args, params) {
    return {
      method: "arc200_approve(address,uint256)bool",
      methodArgs: Array.isArray(args) ? args : [args.spender, args.value],
      ...params
    };
  }
  /**
   * Constructs a no op call for the arc200_allowance(address,address)uint256 ABI method
   *
   * Returns the current allowance of the spender of the tokens of the owner
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static arc200Allowance(args, params) {
    return {
      method: "arc200_allowance(address,address)uint256",
      methodArgs: Array.isArray(args) ? args : [args.owner, args.spender],
      ...params
    };
  }
};
var Arc200Client = class {
  /**
   * Creates a new instance of `Arc200Client`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails, algod) {
    this.algod = algod;
    this.sender = appDetails.sender;
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod);
  }
  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  mapReturnValue(result, returnValueFormatter) {
    if (result.return?.decodeError) {
      throw result.return.decodeError;
    }
    const returnValue = result.return?.returnValue !== void 0 && returnValueFormatter !== void 0 ? returnValueFormatter(result.return.returnValue) : result.return?.returnValue;
    return { ...result, return: returnValue };
  }
  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  async call(typedCallParams, returnValueFormatter) {
    return this.mapReturnValue(await this.appClient.call(typedCallParams), returnValueFormatter);
  }
  /**
   * Idempotently deploys the Arc200 smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  deploy(params = {}) {
    const createArgs = params.createCall?.(Arc200CallFactory.create);
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction
    });
  }
  /**
   * Gets available create methods
   */
  get create() {
    const $this = this;
    return {
      /**
       * Creates a new instance of the Arc200 smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args, params = {}) {
        return $this.mapReturnValue(await $this.appClient.create(Arc200CallFactory.create.createApplication(args, params)));
      }
    };
  }
  /**
   * Makes a clear_state call to an existing instance of the Arc200 smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  clearState(args = {}) {
    return this.appClient.clearState(args);
  }
  /**
   * Calls the arc200_name()string ABI method.
   *
   * Returns the name of the token
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: The name of the token
   */
  arc200Name(args, params = {}) {
    return this.call(Arc200CallFactory.arc200Name(args, params));
  }
  /**
   * Calls the arc200_symbol()string ABI method.
   *
   * Returns the symbol of the token
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: The symbol of the token
   */
  arc200Symbol(args, params = {}) {
    return this.call(Arc200CallFactory.arc200Symbol(args, params));
  }
  /**
   * Calls the arc200_decimals()uint8 ABI method.
   *
   * Returns the decimals of the token
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: The decimals of the token
   */
  arc200Decimals(args, params = {}) {
    return this.call(Arc200CallFactory.arc200Decimals(args, params));
  }
  /**
   * Calls the arc200_totalSupply()uint256 ABI method.
   *
   * Returns the total supply of the token
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: The total supply of the token
   */
  arc200TotalSupply(args, params = {}) {
    return this.call(Arc200CallFactory.arc200TotalSupply(args, params));
  }
  /**
   * Calls the arc200_balanceOf(address)uint256 ABI method.
   *
   * Returns the current balance of the owner of the token
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: The current balance of the holder of the token
   */
  arc200BalanceOf(args, params = {}) {
    return this.call(Arc200CallFactory.arc200BalanceOf(args, params));
  }
  /**
   * Calls the arc200_transfer(address,uint256)bool ABI method.
   *
   * Transfers tokens
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: Success
   */
  arc200Transfer(args, params = {}) {
    return this.call(Arc200CallFactory.arc200Transfer(args, params));
  }
  /**
   * Calls the arc200_transferFrom(address,address,uint256)bool ABI method.
   *
   * Transfers tokens from source to destination as approved spender
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: Success
   */
  arc200TransferFrom(args, params = {}) {
    return this.call(Arc200CallFactory.arc200TransferFrom(args, params));
  }
  /**
   * Calls the arc200_approve(address,uint256)bool ABI method.
   *
   * Approve spender for a token
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: Success
   */
  arc200Approve(args, params = {}) {
    return this.call(Arc200CallFactory.arc200Approve(args, params));
  }
  /**
   * Calls the arc200_allowance(address,address)uint256 ABI method.
   *
   * Returns the current allowance of the spender of the tokens of the owner
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: The remaining allowance
   */
  arc200Allowance(args, params = {}) {
    return this.call(Arc200CallFactory.arc200Allowance(args, params));
  }
  compose() {
    const client = this;
    const atc = new import_algosdk.AtomicTransactionComposer();
    let promiseChain = Promise.resolve();
    const resultMappers = [];
    return {
      arc200Name(args, params) {
        promiseChain = promiseChain.then(() => client.arc200Name(args, { ...params, sendParams: { ...params?.sendParams, skipSending: true, atc } }));
        resultMappers.push(void 0);
        return this;
      },
      arc200Symbol(args, params) {
        promiseChain = promiseChain.then(() => client.arc200Symbol(args, { ...params, sendParams: { ...params?.sendParams, skipSending: true, atc } }));
        resultMappers.push(void 0);
        return this;
      },
      arc200Decimals(args, params) {
        promiseChain = promiseChain.then(() => client.arc200Decimals(args, { ...params, sendParams: { ...params?.sendParams, skipSending: true, atc } }));
        resultMappers.push(void 0);
        return this;
      },
      arc200TotalSupply(args, params) {
        promiseChain = promiseChain.then(() => client.arc200TotalSupply(args, { ...params, sendParams: { ...params?.sendParams, skipSending: true, atc } }));
        resultMappers.push(void 0);
        return this;
      },
      arc200BalanceOf(args, params) {
        promiseChain = promiseChain.then(() => client.arc200BalanceOf(args, { ...params, sendParams: { ...params?.sendParams, skipSending: true, atc } }));
        resultMappers.push(void 0);
        return this;
      },
      arc200Transfer(args, params) {
        promiseChain = promiseChain.then(() => client.arc200Transfer(args, { ...params, sendParams: { ...params?.sendParams, skipSending: true, atc } }));
        resultMappers.push(void 0);
        return this;
      },
      arc200TransferFrom(args, params) {
        promiseChain = promiseChain.then(() => client.arc200TransferFrom(args, { ...params, sendParams: { ...params?.sendParams, skipSending: true, atc } }));
        resultMappers.push(void 0);
        return this;
      },
      arc200Approve(args, params) {
        promiseChain = promiseChain.then(() => client.arc200Approve(args, { ...params, sendParams: { ...params?.sendParams, skipSending: true, atc } }));
        resultMappers.push(void 0);
        return this;
      },
      arc200Allowance(args, params) {
        promiseChain = promiseChain.then(() => client.arc200Allowance(args, { ...params, sendParams: { ...params?.sendParams, skipSending: true, atc } }));
        resultMappers.push(void 0);
        return this;
      },
      clearState(args) {
        promiseChain = promiseChain.then(() => client.clearState({ ...args, sendParams: { ...args?.sendParams, skipSending: true, atc } }));
        resultMappers.push(void 0);
        return this;
      },
      addTransaction(txn, defaultSender) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)));
        return this;
      },
      async atc() {
        await promiseChain;
        return atc;
      },
      async simulate(options) {
        await promiseChain;
        const result = await atc.simulate(client.algod, new import_algosdk.modelsv2.SimulateRequest({ txnGroups: [], ...options }));
        return {
          ...result,
          returns: result.methodResults?.map((val, i) => resultMappers[i] !== void 0 ? resultMappers[i](val.returnValue) : val.returnValue)
        };
      },
      async execute() {
        await promiseChain;
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod);
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== void 0 ? resultMappers[i](val.returnValue) : val.returnValue)
        };
      }
    };
  }
};

// src/getArc200Client.ts
var getArc200Client = (input) => {
  return new Arc200Client(
    {
      sender: input.sender,
      resolveBy: "id",
      id: input.appId
    },
    input.algod
  );
};
var getArc200Client_default = getArc200Client;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getArc200Client
});
//# sourceMappingURL=index.js.map