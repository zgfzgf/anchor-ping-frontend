/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/luckypaw.json`.
 */
export type Luckypaw = {
  "address": "W2wDsRgooFikCVetWg55Be3ty1NzSzvfsJ8wH1dsK3Q",
  "metadata": {
    "name": "luckypaw",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "claim",
      "discriminator": [
        62,
        198,
        214,
        193,
        213,
        159,
        108,
        210
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "poolState",
          "writable": true
        },
        {
          "name": "lucky"
        },
        {
          "name": "depositState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "shareMint"
        },
        {
          "name": "shareVault",
          "writable": true
        },
        {
          "name": "shareUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "shareMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        }
      ]
    },
    {
      "name": "close",
      "discriminator": [
        98,
        165,
        201,
        177,
        108,
        65,
        206,
        96
      ],
      "accounts": [
        {
          "name": "payer",
          "signer": true
        },
        {
          "name": "poolState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        }
      ]
    },
    {
      "name": "createConfig",
      "discriminator": [
        201,
        207,
        243,
        114,
        75,
        111,
        47,
        189
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        }
      ]
    },
    {
      "name": "createLucky",
      "discriminator": [
        196,
        101,
        62,
        138,
        160,
        144,
        92,
        197
      ],
      "accounts": [
        {
          "name": "funder",
          "writable": true,
          "signer": true
        },
        {
          "name": "lucky",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  117,
                  99,
                  107,
                  121,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        },
        {
          "name": "grades",
          "type": {
            "array": [
              "u8",
              20
            ]
          }
        },
        {
          "name": "rewards",
          "type": {
            "array": [
              "u64",
              5
            ]
          }
        }
      ]
    },
    {
      "name": "createPool",
      "discriminator": [
        233,
        146,
        209,
        142,
        207,
        104,
        64,
        188
      ],
      "accounts": [
        {
          "name": "funder",
          "writable": true,
          "signer": true
        },
        {
          "name": "creator"
        },
        {
          "name": "poolState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              }
            ]
          }
        },
        {
          "name": "lucky"
        },
        {
          "name": "assetMint"
        },
        {
          "name": "shareMint"
        },
        {
          "name": "assetVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "poolState"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "assetMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "shareVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "poolState"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "shareMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "shareUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "shareMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        },
        {
          "name": "total",
          "type": "u64"
        },
        {
          "name": "maxTickets",
          "type": "u32"
        },
        {
          "name": "minTickets",
          "type": "u32"
        },
        {
          "name": "reservedRatio",
          "type": "u16"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "openTime",
          "type": "u64"
        },
        {
          "name": "period",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createToken",
      "discriminator": [
        84,
        52,
        204,
        228,
        24,
        140,
        234,
        75
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "shareMint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              }
            ]
          }
        },
        {
          "name": "metadataAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "tokenMetadataProgram"
              },
              {
                "kind": "account",
                "path": "shareMint"
              }
            ],
            "program": {
              "kind": "account",
              "path": "tokenMetadataProgram"
            }
          }
        },
        {
          "name": "shareUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "shareMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        },
        {
          "name": "tokenDecimals",
          "type": "u8"
        },
        {
          "name": "tokenTotal",
          "type": "u64"
        },
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "name": "tokenUri",
          "type": "string"
        }
      ]
    },
    {
      "name": "decrement",
      "discriminator": [
        106,
        227,
        168,
        59,
        248,
        27,
        150,
        101
      ],
      "accounts": [
        {
          "name": "counter",
          "writable": true
        },
        {
          "name": "user",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "deposit",
      "discriminator": [
        242,
        35,
        198,
        137,
        82,
        225,
        242,
        182
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "depositState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "poolState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              }
            ]
          }
        },
        {
          "name": "assetMint"
        },
        {
          "name": "assetUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "assetMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "assetVault",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "draw",
      "discriminator": [
        61,
        40,
        62,
        184,
        31,
        176,
        24,
        130
      ],
      "accounts": [
        {
          "name": "funder",
          "writable": true,
          "signer": true
        },
        {
          "name": "creator",
          "relations": [
            "poolState"
          ]
        },
        {
          "name": "poolState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              }
            ]
          }
        },
        {
          "name": "shareMint"
        },
        {
          "name": "shareVault",
          "writable": true
        },
        {
          "name": "shareUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "shareMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        }
      ]
    },
    {
      "name": "fallback",
      "discriminator": [
        74,
        173,
        1,
        49,
        102,
        162,
        137,
        53
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "poolState",
          "writable": true
        },
        {
          "name": "depositState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "assetMint"
        },
        {
          "name": "assetVault",
          "writable": true
        },
        {
          "name": "assetUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "assetMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        }
      ]
    },
    {
      "name": "increment",
      "discriminator": [
        11,
        18,
        104,
        9,
        104,
        174,
        59,
        33
      ],
      "accounts": [
        {
          "name": "counter",
          "writable": true
        },
        {
          "name": "user",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "counter",
          "writable": true,
          "signer": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "pause",
      "discriminator": [
        211,
        22,
        221,
        251,
        74,
        121,
        193,
        47
      ],
      "accounts": [
        {
          "name": "creator",
          "signer": true,
          "relations": [
            "poolState"
          ]
        },
        {
          "name": "poolState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        }
      ]
    },
    {
      "name": "winner",
      "discriminator": [
        155,
        50,
        104,
        234,
        132,
        2,
        152,
        49
      ],
      "accounts": [
        {
          "name": "payer",
          "signer": true
        },
        {
          "name": "poolState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              }
            ]
          }
        },
        {
          "name": "lucky"
        },
        {
          "name": "slotHash"
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        }
      ]
    },
    {
      "name": "withdraw",
      "discriminator": [
        183,
        18,
        70,
        156,
        148,
        109,
        161,
        34
      ],
      "accounts": [
        {
          "name": "funder",
          "writable": true,
          "signer": true
        },
        {
          "name": "creator",
          "relations": [
            "poolState"
          ]
        },
        {
          "name": "poolState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "index"
              }
            ]
          }
        },
        {
          "name": "assetMint"
        },
        {
          "name": "assetVault",
          "writable": true
        },
        {
          "name": "assetUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "assetMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "shareMint"
        },
        {
          "name": "shareVault",
          "writable": true
        },
        {
          "name": "shareUser",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "shareMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u16"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "config",
      "discriminator": [
        155,
        12,
        170,
        224,
        30,
        250,
        204,
        130
      ]
    },
    {
      "name": "counter",
      "discriminator": [
        255,
        176,
        4,
        245,
        188,
        253,
        124,
        25
      ]
    },
    {
      "name": "depositState",
      "discriminator": [
        203,
        5,
        16,
        65,
        63,
        206,
        55,
        194
      ]
    },
    {
      "name": "lucky",
      "discriminator": [
        87,
        59,
        220,
        142,
        18,
        5,
        15,
        33
      ]
    },
    {
      "name": "poolState",
      "discriminator": [
        247,
        237,
        227,
        245,
        215,
        195,
        222,
        70
      ]
    }
  ],
  "events": [
    {
      "name": "backEvent",
      "discriminator": [
        166,
        50,
        216,
        215,
        223,
        101,
        220,
        65
      ]
    },
    {
      "name": "claimEvent",
      "discriminator": [
        93,
        15,
        70,
        170,
        48,
        140,
        212,
        219
      ]
    },
    {
      "name": "closeEvent",
      "discriminator": [
        71,
        164,
        179,
        117,
        143,
        207,
        62,
        216
      ]
    },
    {
      "name": "depositEvent",
      "discriminator": [
        120,
        248,
        61,
        83,
        31,
        142,
        107,
        144
      ]
    },
    {
      "name": "fallbackEvent",
      "discriminator": [
        110,
        133,
        165,
        125,
        138,
        4,
        115,
        179
      ]
    },
    {
      "name": "luckyEvent",
      "discriminator": [
        205,
        219,
        217,
        77,
        8,
        160,
        187,
        4
      ]
    },
    {
      "name": "pauseEvent",
      "discriminator": [
        32,
        51,
        61,
        169,
        156,
        104,
        130,
        43
      ]
    },
    {
      "name": "poolEvent",
      "discriminator": [
        76,
        227,
        205,
        183,
        1,
        218,
        164,
        244
      ]
    },
    {
      "name": "winnerEvent",
      "discriminator": [
        80,
        230,
        123,
        48,
        43,
        207,
        255,
        183
      ]
    },
    {
      "name": "withdrawEvent",
      "discriminator": [
        22,
        9,
        133,
        26,
        160,
        44,
        71,
        192
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidGradeNumber",
      "msg": "Invalid Grade Number"
    },
    {
      "code": 6001,
      "name": "invalidIndex",
      "msg": "Invalid Index"
    },
    {
      "code": 6002,
      "name": "invalidAmount",
      "msg": "Invalid Amount"
    },
    {
      "code": 6003,
      "name": "invalidOpenTime",
      "msg": "Invalid Open Time"
    },
    {
      "code": 6004,
      "name": "invalidCloseTime",
      "msg": "Invalid Close Time"
    },
    {
      "code": 6005,
      "name": "exceedTicket",
      "msg": "Exceed Ticket"
    },
    {
      "code": 6006,
      "name": "invalidTotal",
      "msg": "Invalid Total"
    },
    {
      "code": 6007,
      "name": "invalidTicker",
      "msg": "Invalid Ticker"
    },
    {
      "code": 6008,
      "name": "invalidSlotHashes",
      "msg": "Invalid Slot Hashes"
    },
    {
      "code": 6009,
      "name": "invalidPoolInit",
      "msg": "Invalid Pool Init"
    },
    {
      "code": 6010,
      "name": "invalidPoolClose",
      "msg": "Invalid Pool Close"
    },
    {
      "code": 6011,
      "name": "invalidPoolWinner",
      "msg": "Invalid Pool Winner"
    },
    {
      "code": 6012,
      "name": "invalidPoolFallback",
      "msg": "Invalid Pool Fallback"
    },
    {
      "code": 6013,
      "name": "invalidDepositInit",
      "msg": "Invalid Deposit Init"
    },
    {
      "code": 6014,
      "name": "invalidFundInit",
      "msg": "Invalid Fund Init"
    },
    {
      "code": 6015,
      "name": "invalidReservedRatio",
      "msg": "Invalid Reserved Ratio"
    }
  ],
  "types": [
    {
      "name": "backEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "claimEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "shares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "closeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "owner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "counter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "depositEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "assets",
            "type": "u64"
          },
          {
            "name": "blockTime",
            "type": "u64"
          },
          {
            "name": "begin",
            "type": "u32"
          },
          {
            "name": "end",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "depositOrder",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "init"
          },
          {
            "name": "claim"
          },
          {
            "name": "fallback"
          }
        ]
      }
    },
    {
      "name": "depositState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "poolState",
            "type": "pubkey"
          },
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "number",
            "type": "u32"
          },
          {
            "name": "deposit",
            "type": {
              "array": [
                "u32",
                20
              ]
            }
          },
          {
            "name": "assets",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "order",
            "type": {
              "defined": {
                "name": "depositOrder"
              }
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "fallbackEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "assets",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "lucky",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "grades",
            "type": {
              "array": [
                "u8",
                20
              ]
            }
          },
          {
            "name": "rewards",
            "type": {
              "array": [
                "u64",
                20
              ]
            }
          },
          {
            "name": "circleRewards",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "luckyEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "pauseEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "order",
            "type": {
              "defined": {
                "name": "poolOrder"
              }
            }
          }
        ]
      }
    },
    {
      "name": "poolEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "poolFund",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "init"
          },
          {
            "name": "winner"
          },
          {
            "name": "fallback"
          }
        ]
      }
    },
    {
      "name": "poolOrder",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "init"
          },
          {
            "name": "close"
          },
          {
            "name": "winner"
          },
          {
            "name": "fallback"
          },
          {
            "name": "pause"
          }
        ]
      }
    },
    {
      "name": "poolState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "lucky",
            "type": "pubkey"
          },
          {
            "name": "assetMint",
            "type": "pubkey"
          },
          {
            "name": "assetVault",
            "type": "pubkey"
          },
          {
            "name": "shareMint",
            "type": "pubkey"
          },
          {
            "name": "shareVault",
            "type": "pubkey"
          },
          {
            "name": "openTime",
            "type": "u64"
          },
          {
            "name": "closeTime",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "assets",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "ammAssets",
            "type": "u64"
          },
          {
            "name": "ammShares",
            "type": "u64"
          },
          {
            "name": "total",
            "type": "u64"
          },
          {
            "name": "shareDecimals",
            "type": "u8"
          },
          {
            "name": "maxTickets",
            "type": "u32"
          },
          {
            "name": "minTickets",
            "type": "u32"
          },
          {
            "name": "reservedRatio",
            "type": "u16"
          },
          {
            "name": "number",
            "type": "u32"
          },
          {
            "name": "random",
            "type": "u64"
          },
          {
            "name": "winner",
            "type": "u8"
          },
          {
            "name": "order",
            "type": {
              "defined": {
                "name": "poolOrder"
              }
            }
          },
          {
            "name": "fund",
            "type": {
              "defined": {
                "name": "poolFund"
              }
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "winnerEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "random",
            "type": "u64"
          },
          {
            "name": "winner",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "withdrawEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "assets",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
