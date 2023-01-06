const SAMPLE = {
  "annotations": [],
  "chains": {
    "Cancellation": {
      "type": "chain",
      "children": [
        {
          "type": "operation",
          "operator": "and",
          "children": [
            {
              "type": "logic_block",
              "children": [
                {
                  "type": "operation",
                  "operator": "causal",
                  "children": [
                    {
                      "type": "operation",
                      "operator": "or",
                      "children": [
                        {
                          "type": "logic_block",
                          "name": "CancellationDueToVenue",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "causal",
                              "children": [
                                {
                                  "type": "operation",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 4,
                                          "children": [
                                            {
                                              "type": "enumValue",
                                              "value": "FinancialFailure",
                                              "enumName": "Event",
                                              "metadata": {}
                                            },
                                            {
                                              "type": "enumValue",
                                              "value": "Bankruptcy",
                                              "enumName": "Event",
                                              "metadata": {}
                                            },
                                            {
                                              "type": "enumValue",
                                              "value": "Liquidation",
                                              "enumName": "Event",
                                              "metadata": {}
                                            },
                                            {
                                              "type": "enumValue",
                                              "value": "Administration",
                                              "enumName": "Event",
                                              "metadata": {}
                                            }
                                          ]
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "enumValue",
                                              "value": "HappenTo",
                                              "enumName": "Relation",
                                              "metadata": {}
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "BookedVenue",
                                              "class": "scopeVariable"
                                            }
                                          }
                                        }
                                      },
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "a) ceasing to trade due to financial failure, bankruptcy, liquidation or administration"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 3,
                                                  "children": [
                                                    {
                                                      "type": "enumValue",
                                                      "value": "Fire",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "NaturalCatastrophe",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "AdverseWeather",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    }
                                                  ]
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "Damage",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "HappenTo",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "variable",
                                                      "value": "BookedVenue",
                                                      "class": "scopeVariable"
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "b) damage to the venue caused by fire, natural catastrophe or adverse weather"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 3,
                                          "children": [
                                            {
                                              "type": "enumValue",
                                              "value": "Murder",
                                              "enumName": "Event",
                                              "metadata": {}
                                            },
                                            {
                                              "type": "enumValue",
                                              "value": "Death",
                                              "enumName": "Event",
                                              "metadata": {}
                                            },
                                            {
                                              "type": "enumValue",
                                              "value": "Suicide",
                                              "enumName": "Event",
                                              "metadata": {}
                                            }
                                          ]
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "enumValue",
                                              "value": "HappenAt",
                                              "enumName": "Relation",
                                              "metadata": {}
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "BookedVenue",
                                              "class": "scopeVariable"
                                            }
                                          }
                                        }
                                      },
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "c) murder, death or suicide at the venue"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "enumValue",
                                          "value": "ActOfTerrorism",
                                          "enumName": "Event",
                                          "metadata": {}
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "enumValue",
                                              "value": "HappenAt",
                                              "enumName": "Relation",
                                              "metadata": {}
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "BookedVenue",
                                              "class": "scopeVariable"
                                            }
                                          }
                                        }
                                      },
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "d) an act of terrorism at the venue"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "enumValue",
                                          "value": "Closure",
                                          "enumName": "Event",
                                          "metadata": {}
                                        },
                                        "relation": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "enumValue",
                                                "value": "HappenTo",
                                                "enumName": "Relation",
                                                "metadata": {}
                                              },
                                              "target": {
                                                "type": "variable",
                                                "value": "BookedVenue",
                                                "class": "scopeVariable"
                                              }
                                            }
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "enumValue",
                                                "value": "CausedBy",
                                                "enumName": "Relation",
                                                "metadata": {}
                                              },
                                              "target": {
                                                "type": "string",
                                                "value": "relevant authority"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "  e) closure by a relevant authority;"
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "UnableToHoldGathering",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": [
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "By",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "variable",
                                            "value": "BookedVenue",
                                            "class": "scopeVariable"
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "HappenTo",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "operation",
                                            "operator": "or",
                                            "arity": 2,
                                            "children": [
                                              {
                                                "type": "variable",
                                                "value": "Wedding",
                                                "class": "namedVariable",
                                                "info": {}
                                              },
                                              {
                                                "type": "variable",
                                                "value": "WeddingReception",
                                                "class": "namedVariable",
                                                "info": {}
                                              }
                                            ]
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": " 1. the booked venue for the wedding or wedding reception being unable to hold your wedding and/or wedding reception due to:"
                                }
                              }
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "name": "CancellationDueToDeathOrInjury",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "causal",
                              "children": [
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "operation",
                                      "operator": "or",
                                      "arity": 3,
                                      "children": [
                                        {
                                          "type": "enumValue",
                                          "value": "Death",
                                          "enumName": "Event",
                                          "metadata": {}
                                        },
                                        {
                                          "type": "enumValue",
                                          "value": "Injury",
                                          "enumName": "Event",
                                          "metadata": {}
                                        },
                                        {
                                          "type": "enumValue",
                                          "value": "Sickness",
                                          "enumName": "Event",
                                          "metadata": {}
                                        }
                                      ]
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "enumValue",
                                          "value": "HappenTo",
                                          "enumName": "Relation",
                                          "metadata": {}
                                        },
                                        "target": {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Spouse1",
                                              "class": "namedVariable",
                                              "info": {}
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Spouse2",
                                              "class": "namedVariable",
                                              "info": {}
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "InappropriateCircumstance",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "enumValue",
                                          "value": "HappenTo",
                                          "enumName": "Relation",
                                          "metadata": {}
                                        },
                                        "target": {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Wedding",
                                              "class": "namedVariable",
                                              "info": {}
                                            },
                                            {
                                              "type": "variable",
                                              "value": "WeddingReception",
                                              "class": "namedVariable",
                                              "info": {}
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "  2. the death, injury or sickness of one or both of the couple or their close relative which would make having or continuing with the wedding and/or wedding reception inappropriate;"
                                }
                              }
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "name": "CancellationDueToSupplier",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "causal",
                              "children": [
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "NoShow",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "enumValue",
                                          "value": "CausedBy",
                                          "enumName": "Relation",
                                          "metadata": {}
                                        },
                                        "target": {
                                          "type": "string",
                                          "value": "booked and paid for professional Wedding Services Supplier"
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "operation",
                                      "operator": "or",
                                      "arity": 2,
                                      "children": [
                                        {
                                          "type": "enumValue",
                                          "value": "ImpossibleContinuationOfEvent",
                                          "enumName": "Event",
                                          "metadata": {}
                                        },
                                        {
                                          "type": "enumValue",
                                          "value": "ImpossibleHappeningOfEvent",
                                          "enumName": "Event",
                                          "metadata": {}
                                        }
                                      ]
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "enumValue",
                                          "value": "HappenTo",
                                          "enumName": "Relation",
                                          "metadata": {}
                                        },
                                        "target": {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Wedding",
                                              "class": "namedVariable",
                                              "info": {}
                                            },
                                            {
                                              "type": "variable",
                                              "value": "WeddingReception",
                                              "class": "namedVariable",
                                              "info": {}
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "3. the total non-appearance of any booked and paid for professional Wedding Services Supplier which would make having or continuing with the wedding or wedding reception impossible;"
                                }
                              }
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "name": "CancellationDueToRedundancy",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "causal",
                              "children": [
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "PolicyPurchase",
                                      "enumName": "Event",
                                      "metadata": {}
                                    }
                                  }
                                },
                                {
                                  "type": "block",
                                  "name": "Time",
                                  "properties": {
                                    "value": {
                                      "type": "number",
                                      "value": "16"
                                    },
                                    "unit": {
                                      "type": "string",
                                      "value": "Week"
                                    }
                                  }
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "NotificationOfLossOfJob",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "enumValue",
                                          "value": "HappenTo",
                                          "enumName": "Relation",
                                          "metadata": {}
                                        },
                                        "target": {
                                          "type": "variable",
                                          "value": "PolicyHolder",
                                          "class": "scopeVariable"
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "4. your redundancy or that of any of your close relatives who have or would have made proven, significant, financial contributions on which the wedding arrangements depend, where notice is received at least 16 weeks after date of purchase of this insurance and which qualifies for payment under redundancy legislation and where there is a clear intention to rearrange the wedding; "
                                }
                              }
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "name": "CancellationDueToOverseaPublicService",
                          "children": [
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "string",
                                  "value": "mobilized"
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "enumValue",
                                      "value": "HappenTo",
                                      "enumName": "Relation",
                                      "metadata": {}
                                    },
                                    "target": {
                                      "type": "operation",
                                      "operator": "or",
                                      "arity": 2,
                                      "children": [
                                        {
                                          "type": "variable",
                                          "value": "Spouse1",
                                          "class": "namedVariable",
                                          "info": {}
                                        },
                                        {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Spouse2",
                                              "class": "namedVariable",
                                              "info": {}
                                            },
                                            {
                                              "type": "string",
                                              "value": "couple close relative"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                }
                              }
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "5. one of the couple or a close relative being unforeseeably posted overseas or being called on unavoidable and necessary duty where that person is a serving member of the UK armed forces, ambulance or health service, coastguard, fire brigade or police force; "
                                }
                              }
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "name": "CancellationDueToNonApparenceOfMinister",
                          "children": [
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "enumValue",
                                  "value": "NoShow",
                                  "enumName": "Event",
                                  "metadata": {}
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "enumValue",
                                      "value": "CausedBy",
                                      "enumName": "Relation",
                                      "metadata": {}
                                    },
                                    "target": {
                                      "type": "string",
                                      "value": "intended officiating minister or registrar"
                                    }
                                  }
                                }
                              }
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "6. the non-appearance of the intended officiating minister or registrar and no substitute can be obtained;"
                                }
                              }
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "name": "CancellationDueToCatNat",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "causal",
                              "children": [
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "operation",
                                      "operator": "or",
                                      "arity": 2,
                                      "children": [
                                        {
                                          "type": "enumValue",
                                          "value": "AdverseWeather",
                                          "enumName": "Event",
                                          "metadata": {}
                                        },
                                        {
                                          "type": "enumValue",
                                          "value": "NaturalCatastrophe",
                                          "enumName": "Event",
                                          "metadata": {}
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "InabilityToReachPlace",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": [
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "HappenTo",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "operation",
                                            "operator": "or",
                                            "arity": 2,
                                            "children": [
                                              {
                                                "type": "variable",
                                                "value": "PolicyHolder",
                                                "class": "scopeVariable"
                                              },
                                              {
                                                "type": "string",
                                                "value": "more than 50% of Wedding.guests.count"
                                              }
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "HappenAt",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "variable",
                                            "value": "BookedVenue",
                                            "class": "scopeVariable"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "7. your inability or that of at least 50% of the guests to reach the wedding or wedding reception venue due to adverse weather conditions or natural  catastrophe;"
                                }
                              }
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "name": "CancellationDueToMarquee",
                          "children": [
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "operation",
                                  "operator": "or",
                                  "arity": 2,
                                  "children": [
                                    {
                                      "type": "enumValue",
                                      "value": "Loss",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    {
                                      "type": "enumValue",
                                      "value": "Theft",
                                      "enumName": "Event",
                                      "metadata": {}
                                    }
                                  ]
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "enumValue",
                                      "value": "HappenTo",
                                      "enumName": "Relation",
                                      "metadata": {}
                                    },
                                    "target": {
                                      "type": "variable",
                                      "value": "InsuredMarquee",
                                      "class": "namedVariable",
                                      "info": {}
                                    }
                                  }
                                },
                                "endorsement": {
                                  "type": "string",
                                  "value": "MarqueeCover"
                                }
                              }
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "8. loss or theft of or severe damage to the marquee (only applies if you have purchased the optional marquee cover)."
                                }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "block",
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "enumValue",
                          "value": "UnavoidableCancellation",
                          "enumName": "Event",
                          "metadata": {}
                        },
                        "relation": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "enumValue",
                                "value": "HappenTo",
                                "enumName": "Relation",
                                "metadata": {}
                              },
                              "target": {
                                "type": "operation",
                                "operator": "or",
                                "arity": 2,
                                "children": [
                                  {
                                    "type": "variable",
                                    "value": "Wedding",
                                    "class": "namedVariable",
                                    "info": {}
                                  },
                                  {
                                    "type": "variable",
                                    "value": "WeddingReception",
                                    "class": "namedVariable",
                                    "info": {}
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "enumValue",
                                "value": "CausedBy",
                                "enumName": "Relation",
                                "metadata": {}
                              },
                              "target": {
                                "type": "variable",
                                "value": "PolicyHolder",
                                "class": "scopeVariable"
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "logic_block",
              "children": [
                {
                  "type": "operation",
                  "operator": "or",
                  "children": [
                    {
                      "type": "block",
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "enumValue",
                          "value": "IntentionToReplan",
                          "enumName": "Event",
                          "metadata": {}
                        },
                        "relation": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "enumValue",
                                "value": "HappenTo",
                                "enumName": "Relation",
                                "metadata": {}
                              },
                              "target": {
                                "type": "operation",
                                "operator": "or",
                                "arity": 2,
                                "children": [
                                  {
                                    "type": "variable",
                                    "value": "Wedding",
                                    "class": "namedVariable",
                                    "info": {}
                                  },
                                  {
                                    "type": "variable",
                                    "value": "WeddingReception",
                                    "class": "namedVariable",
                                    "info": {}
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "enumValue",
                                "value": "By",
                                "enumName": "Relation",
                                "metadata": {}
                              },
                              "target": {
                                "type": "variable",
                                "value": "PolicyHolder",
                                "class": "scopeVariable"
                              }
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "block",
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "enumValue",
                          "value": "Death",
                          "enumName": "Event",
                          "metadata": {}
                        },
                        "relation": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "enumValue",
                              "value": "HappenTo",
                              "enumName": "Relation",
                              "metadata": {}
                            },
                            "target": {
                              "type": "variable",
                              "value": "PolicyHolder",
                              "class": "scopeVariable"
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "annotations": [
                {
                  "type": "annotation",
                  "name": "Text",
                  "properties": {
                    "value": {
                      "type": "string",
                      "value": "Special claims conditions relating to Section 1, Part I – In the event of a valid claim for cancellation there must be a clear intention to rearrange the wedding at a later date except where the cancellation is caused by your death."
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "annotations": [
        {
          "type": "annotation",
          "name": "Text",
          "properties": {
            "value": {
              "type": "string",
              "value": "We will pay up to the amount shown in the schedule in total for any irrecoverable expenses you have paid for or which you have to pay for, under contract or subsequent agreement for the services of any wedding services supplier not used as a direct result of the unavoidable cancellation by you of the wedding or wedding reception caused by any of the following reasons:"
            }
          }
        },
        {
          "type": "annotation",
          "name": "Payout",
          "properties": {
            "type": {
              "type": "string",
              "value": "Limit"
            },
            "amount": {
              "type": "variable",
              "value": "InsuredSum",
              "class": "namedVariable",
              "info": {}
            },
            "unit": {
              "type": "string",
              "value": "USD"
            },
            "for": {
              "type": "object",
              "properties": {
                "cost": {
                  "type": "string",
                  "value": "irrecoverable expenses"
                },
                "relation": [
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "enumValue",
                        "value": "IncurredBy",
                        "enumName": "Relation",
                        "metadata": {}
                      },
                      "target": {
                        "type": "variable",
                        "value": "PolicyHolder",
                        "class": "scopeVariable"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "enumValue",
                        "value": "IncurredTo",
                        "enumName": "Relation",
                        "metadata": {}
                      },
                      "target": {
                        "type": "variable",
                        "value": "WeddingSupplier",
                        "class": "namedVariable",
                        "info": {}
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "enumValue",
                        "value": "PrescribedBy",
                        "enumName": "Relation",
                        "metadata": {}
                      },
                      "target": {
                        "type": "operation",
                        "operator": "or",
                        "arity": 2,
                        "children": [
                          {
                            "type": "string",
                            "value": "contract"
                          },
                          {
                            "type": "string",
                            "value": "agreement"
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    },
    "Section1_Part2_Curtailment": {
      "type": "chain",
      "children": [
        {
          "type": "operation",
          "operator": "and",
          "children": [
            {
              "type": "logic_block",
              "children": [
                {
                  "type": "operation",
                  "operator": "causal",
                  "children": [
                    {
                      "type": "operation",
                      "operator": "or",
                      "children": [
                        {
                          "type": "logic_block",
                          "name": "CurtailmentSuddenDeath",
                          "children": [
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "operation",
                                  "operator": "or",
                                  "arity": 3,
                                  "children": [
                                    {
                                      "type": "enumValue",
                                      "value": "Death",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    {
                                      "type": "enumValue",
                                      "value": "Injury",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    {
                                      "type": "enumValue",
                                      "value": "SeriousSickness",
                                      "enumName": "Event",
                                      "metadata": {}
                                    }
                                  ]
                                },
                                "relation": [
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "enumValue",
                                        "value": "HappenTo",
                                        "enumName": "Relation",
                                        "metadata": {}
                                      },
                                      "target": {
                                        "type": "operation",
                                        "operator": "or",
                                        "arity": 2,
                                        "children": [
                                          {
                                            "type": "variable",
                                            "value": "PolicyHolder",
                                            "class": "scopeVariable"
                                          },
                                          {
                                            "type": "string",
                                            "value": "couple close relative"
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "enumValue",
                                        "value": "HappenAt",
                                        "enumName": "Relation",
                                        "metadata": {}
                                      },
                                      "target": {
                                        "type": "operation",
                                        "operator": "or",
                                        "arity": 2,
                                        "children": [
                                          {
                                            "type": "variable",
                                            "value": "Wedding",
                                            "class": "namedVariable",
                                            "info": {}
                                          },
                                          {
                                            "type": "variable",
                                            "value": "WeddingReception",
                                            "class": "namedVariable",
                                            "info": {}
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "1. the sudden death, injury or serious sickness of you or a close relative at the wedding or wedding reception;"
                                }
                              }
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "name": "CurtailmentVenueUnableContinueToHold",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "causal",
                              "children": [
                                {
                                  "type": "operation",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "logic_block",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 2,
                                                  "children": [
                                                    {
                                                      "type": "enumValue",
                                                      "value": "NaturalCatastrophe",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "AdverseWeather",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    }
                                                  ]
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "Damage",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "HappenTo",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "variable",
                                                      "value": "Venue",
                                                      "class": "namedVariable",
                                                      "info": {}
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 4,
                                                  "children": [
                                                    {
                                                      "type": "enumValue",
                                                      "value": "Fire",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "Death",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "Suicide",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "Fire",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    }
                                                  ]
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "HappenAt",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "variable",
                                                      "value": "Venue",
                                                      "class": "namedVariable",
                                                      "info": {}
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "Evacuation",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "enumValue",
                                          "value": "ActOfTerrorism",
                                          "enumName": "Event",
                                          "metadata": {}
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "enumValue",
                                              "value": "HappenAt",
                                              "enumName": "Relation",
                                              "metadata": {}
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "Venue",
                                              "class": "namedVariable",
                                              "info": {}
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "enumValue",
                                          "value": "Closure",
                                          "enumName": "Event",
                                          "metadata": {}
                                        },
                                        "relation": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "enumValue",
                                                "value": "HappenTo",
                                                "enumName": "Relation",
                                                "metadata": {}
                                              },
                                              "target": {
                                                "type": "variable",
                                                "value": "Venue",
                                                "class": "namedVariable",
                                                "info": {}
                                              }
                                            }
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "enumValue",
                                                "value": "CausedBy",
                                                "enumName": "Relation",
                                                "metadata": {}
                                              },
                                              "target": {
                                                "type": "string",
                                                "value": "Relevant authority"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "UnableToHoldGathering",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": [
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "HappenTo",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "operation",
                                            "operator": "or",
                                            "arity": 2,
                                            "children": [
                                              {
                                                "type": "variable",
                                                "value": "Wedding",
                                                "class": "namedVariable",
                                                "info": {}
                                              },
                                              {
                                                "type": "variable",
                                                "value": "WeddingReception",
                                                "class": "namedVariable",
                                                "info": {}
                                              }
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "HappenAt",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "variable",
                                            "value": "Venue",
                                            "class": "namedVariable",
                                            "info": {}
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "2. the venue for the wedding being unable to continue to hold your wedding due to damage to the venue caused by natural catastrophe or adverse weather, evacuation due to fire, death, murder or suicide at the venue, an act of terrorism at the venue or its closure by a relevant authority;"
                                }
                              }
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "name": "CurtailmentDueToMarquee",
                          "children": [
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "operation",
                                  "operator": "or",
                                  "arity": 3,
                                  "children": [
                                    {
                                      "type": "enumValue",
                                      "value": "Loss",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    {
                                      "type": "enumValue",
                                      "value": "Theft",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    {
                                      "type": "enumValue",
                                      "value": "SevereDamage",
                                      "enumName": "Event",
                                      "metadata": {}
                                    }
                                  ]
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "enumValue",
                                      "value": "HappenTo",
                                      "enumName": "Relation",
                                      "metadata": {}
                                    },
                                    "target": {
                                      "type": "variable",
                                      "value": "InsuredMarquee",
                                      "class": "namedVariable",
                                      "info": {}
                                    }
                                  }
                                },
                                "endorsement": {
                                  "type": "string",
                                  "value": "MarqueeCover"
                                }
                              }
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "3. loss or theft of or severe damage to the marquee (if you have purchased optional marquee cover),"
                                }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "block",
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "enumValue",
                          "value": "Curtailment",
                          "enumName": "Event",
                          "metadata": {}
                        },
                        "relation": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "enumValue",
                              "value": "HappenTo",
                              "enumName": "Relation",
                              "metadata": {}
                            },
                            "target": {
                              "type": "operation",
                              "operator": "or",
                              "arity": 2,
                              "children": [
                                {
                                  "type": "variable",
                                  "value": "Wedding",
                                  "class": "namedVariable",
                                  "info": {}
                                },
                                {
                                  "type": "variable",
                                  "value": "WeddingReception",
                                  "class": "namedVariable",
                                  "info": {}
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      "type": "block",
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "enumValue",
                          "value": "IrrecoverableCosts",
                          "enumName": "Event",
                          "metadata": {}
                        },
                        "relation": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "enumValue",
                              "value": "IncurredBy",
                              "enumName": "Relation",
                              "metadata": {}
                            },
                            "target": {
                              "type": "variable",
                              "value": "PolicyHolder",
                              "class": "scopeVariable"
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "logic_block",
              "children": [
                {
                  "type": "operation",
                  "operator": "or",
                  "children": [
                    {
                      "type": "logic_block",
                      "children": [
                        {
                          "type": "block",
                          "name": "Situation",
                          "properties": {
                            "event": {
                              "type": "enumValue",
                              "value": "IntentionToReplan",
                              "enumName": "Event",
                              "metadata": {}
                            },
                            "relation": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "enumValue",
                                    "value": "HappenTo",
                                    "enumName": "Relation",
                                    "metadata": {}
                                  },
                                  "target": {
                                    "type": "operation",
                                    "operator": "or",
                                    "arity": 2,
                                    "children": [
                                      {
                                        "type": "variable",
                                        "value": "Wedding",
                                        "class": "namedVariable",
                                        "info": {}
                                      },
                                      {
                                        "type": "variable",
                                        "value": "WeddingReception",
                                        "class": "namedVariable",
                                        "info": {}
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "enumValue",
                                    "value": "By",
                                    "enumName": "Relation",
                                    "metadata": {}
                                  },
                                  "target": {
                                    "type": "variable",
                                    "value": "PolicyHolder",
                                    "class": "scopeVariable"
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type": "logic_block",
                      "children": [
                        {
                          "type": "block",
                          "name": "Situation",
                          "properties": {
                            "event": {
                              "type": "enumValue",
                              "value": "Death",
                              "enumName": "Event",
                              "metadata": {}
                            },
                            "relation": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "enumValue",
                                  "value": "HappenTo",
                                  "enumName": "Relation",
                                  "metadata": {}
                                },
                                "target": {
                                  "type": "variable",
                                  "value": "PolicyHolder",
                                  "class": "scopeVariable"
                                }
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "annotations": [
                {
                  "type": "annotation",
                  "name": "Text",
                  "properties": {
                    "value": {
                      "type": "string",
                      "value": "Special claims conditions relating to Section 1, Part II– In the event of a valid claim for curtailment there must be a clear intention to rearrange the wedding at a later date except where the curtailment is caused by your death."
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "annotations": [
        {
          "type": "annotation",
          "name": "Text",
          "properties": {
            "value": {
              "type": "string",
              "value": "We will pay up to the amount shown in the schedule in total for any irrecoverable costs you unavoidably incur in the event of curtailment of the wedding or wedding reception for the following reasons."
            }
          }
        },
        {
          "type": "annotation",
          "name": "Payout",
          "properties": {
            "type": {
              "type": "string",
              "value": "Limit"
            },
            "amount": {
              "type": "variable",
              "value": "InsuredSum",
              "class": "namedVariable",
              "info": {}
            },
            "unit": {
              "type": "string",
              "value": "USD"
            },
            "for": {
              "type": "object",
              "properties": {
                "cost": {
                  "type": "string",
                  "value": "irrecoverable cost"
                },
                "relation": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "enumValue",
                      "value": "UnavoidablyIncurredBy",
                      "enumName": "Relation",
                      "metadata": {}
                    },
                    "target": {
                      "type": "variable",
                      "value": "PolicyHolder",
                      "class": "scopeVariable"
                    }
                  }
                }
              }
            }
          }
        }
      ]
    },
    "Section1_Part3_Rearrangement": {
      "type": "chain",
      "children": [
        {
          "type": "operation",
          "operator": "or",
          "children": [
            {
              "type": "operation",
              "operator": "or",
              "isSectionCall": true,
              "sectionName": "Section1.PartI",
              "children": [
                {
                  "type": "logic_block",
                  "children": [
                    {
                      "type": "operation",
                      "operator": "and",
                      "children": [
                        {
                          "type": "logic_block",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "causal",
                              "children": [
                                {
                                  "type": "operation",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToVenue",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "operation",
                                              "operator": "or",
                                              "children": [
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 4,
                                                      "children": [
                                                        {
                                                          "type": "enumValue",
                                                          "value": "FinancialFailure",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        },
                                                        {
                                                          "type": "enumValue",
                                                          "value": "Bankruptcy",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        },
                                                        {
                                                          "type": "enumValue",
                                                          "value": "Liquidation",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        },
                                                        {
                                                          "type": "enumValue",
                                                          "value": "Administration",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        }
                                                      ]
                                                    },
                                                    "relation": {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "enumValue",
                                                          "value": "HappenTo",
                                                          "enumName": "Relation",
                                                          "metadata": {}
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "value": "BookedVenue",
                                                          "class": "scopeVariable"
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "annotations": [
                                                    {
                                                      "type": "annotation",
                                                      "name": "Text",
                                                      "properties": {
                                                        "value": {
                                                          "type": "string",
                                                          "value": "a) ceasing to trade due to financial failure, bankruptcy, liquidation or administration"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "logic_block",
                                                  "children": [
                                                    {
                                                      "type": "operation",
                                                      "operator": "causal",
                                                      "children": [
                                                        {
                                                          "type": "block",
                                                          "name": "Situation",
                                                          "properties": {
                                                            "event": {
                                                              "type": "operation",
                                                              "operator": "or",
                                                              "arity": 3,
                                                              "children": [
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "Fire",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                },
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "NaturalCatastrophe",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                },
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "AdverseWeather",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        },
                                                        {
                                                          "type": "block",
                                                          "name": "Situation",
                                                          "properties": {
                                                            "event": {
                                                              "type": "enumValue",
                                                              "value": "Damage",
                                                              "enumName": "Event",
                                                              "metadata": {}
                                                            },
                                                            "relation": {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "enumValue",
                                                                  "value": "HappenTo",
                                                                  "enumName": "Relation",
                                                                  "metadata": {}
                                                                },
                                                                "target": {
                                                                  "type": "variable",
                                                                  "value": "BookedVenue",
                                                                  "class": "scopeVariable"
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  ],
                                                  "annotations": [
                                                    {
                                                      "type": "annotation",
                                                      "name": "Text",
                                                      "properties": {
                                                        "value": {
                                                          "type": "string",
                                                          "value": "b) damage to the venue caused by fire, natural catastrophe or adverse weather"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 3,
                                                      "children": [
                                                        {
                                                          "type": "enumValue",
                                                          "value": "Murder",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        },
                                                        {
                                                          "type": "enumValue",
                                                          "value": "Death",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        },
                                                        {
                                                          "type": "enumValue",
                                                          "value": "Suicide",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        }
                                                      ]
                                                    },
                                                    "relation": {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "enumValue",
                                                          "value": "HappenAt",
                                                          "enumName": "Relation",
                                                          "metadata": {}
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "value": "BookedVenue",
                                                          "class": "scopeVariable"
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "annotations": [
                                                    {
                                                      "type": "annotation",
                                                      "name": "Text",
                                                      "properties": {
                                                        "value": {
                                                          "type": "string",
                                                          "value": "c) murder, death or suicide at the venue"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "enumValue",
                                                      "value": "ActOfTerrorism",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    "relation": {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "enumValue",
                                                          "value": "HappenAt",
                                                          "enumName": "Relation",
                                                          "metadata": {}
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "value": "BookedVenue",
                                                          "class": "scopeVariable"
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "annotations": [
                                                    {
                                                      "type": "annotation",
                                                      "name": "Text",
                                                      "properties": {
                                                        "value": {
                                                          "type": "string",
                                                          "value": "d) an act of terrorism at the venue"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "enumValue",
                                                      "value": "Closure",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    "relation": [
                                                      {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "enumValue",
                                                            "value": "HappenTo",
                                                            "enumName": "Relation",
                                                            "metadata": {}
                                                          },
                                                          "target": {
                                                            "type": "variable",
                                                            "value": "BookedVenue",
                                                            "class": "scopeVariable"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "enumValue",
                                                            "value": "CausedBy",
                                                            "enumName": "Relation",
                                                            "metadata": {}
                                                          },
                                                          "target": {
                                                            "type": "string",
                                                            "value": "relevant authority"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  "annotations": [
                                                    {
                                                      "type": "annotation",
                                                      "name": "Text",
                                                      "properties": {
                                                        "value": {
                                                          "type": "string",
                                                          "value": "  e) closure by a relevant authority;"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "UnableToHoldGathering",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": [
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "enumValue",
                                                        "value": "By",
                                                        "enumName": "Relation",
                                                        "metadata": {}
                                                      },
                                                      "target": {
                                                        "type": "variable",
                                                        "value": "BookedVenue",
                                                        "class": "scopeVariable"
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "enumValue",
                                                        "value": "HappenTo",
                                                        "enumName": "Relation",
                                                        "metadata": {}
                                                      },
                                                      "target": {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "value": "Wedding",
                                                            "class": "namedVariable",
                                                            "info": {}
                                                          },
                                                          {
                                                            "type": "variable",
                                                            "value": "WeddingReception",
                                                            "class": "namedVariable",
                                                            "info": {}
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": " 1. the booked venue for the wedding or wedding reception being unable to hold your wedding and/or wedding reception due to:"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToDeathOrInjury",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 3,
                                                  "children": [
                                                    {
                                                      "type": "enumValue",
                                                      "value": "Death",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "Injury",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "Sickness",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    }
                                                  ]
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "HappenTo",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "value": "Spouse1",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        },
                                                        {
                                                          "type": "variable",
                                                          "value": "Spouse2",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        }
                                                      ]
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "InappropriateCircumstance",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "HappenTo",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "value": "Wedding",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        },
                                                        {
                                                          "type": "variable",
                                                          "value": "WeddingReception",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        }
                                                      ]
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "  2. the death, injury or sickness of one or both of the couple or their close relative which would make having or continuing with the wedding and/or wedding reception inappropriate;"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToSupplier",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "NoShow",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "CausedBy",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "string",
                                                      "value": "booked and paid for professional Wedding Services Supplier"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 2,
                                                  "children": [
                                                    {
                                                      "type": "enumValue",
                                                      "value": "ImpossibleContinuationOfEvent",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "ImpossibleHappeningOfEvent",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    }
                                                  ]
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "HappenTo",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "value": "Wedding",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        },
                                                        {
                                                          "type": "variable",
                                                          "value": "WeddingReception",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        }
                                                      ]
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "3. the total non-appearance of any booked and paid for professional Wedding Services Supplier which would make having or continuing with the wedding or wedding reception impossible;"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToRedundancy",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "PolicyPurchase",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Time",
                                              "properties": {
                                                "value": {
                                                  "type": "number",
                                                  "value": "16"
                                                },
                                                "unit": {
                                                  "type": "string",
                                                  "value": "Week"
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "NotificationOfLossOfJob",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "HappenTo",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "variable",
                                                      "value": "PolicyHolder",
                                                      "class": "scopeVariable"
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "4. your redundancy or that of any of your close relatives who have or would have made proven, significant, financial contributions on which the wedding arrangements depend, where notice is received at least 16 weeks after date of purchase of this insurance and which qualifies for payment under redundancy legislation and where there is a clear intention to rearrange the wedding; "
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToOverseaPublicService",
                                      "children": [
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "string",
                                              "value": "mobilized"
                                            },
                                            "relation": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "enumValue",
                                                  "value": "HappenTo",
                                                  "enumName": "Relation",
                                                  "metadata": {}
                                                },
                                                "target": {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 2,
                                                  "children": [
                                                    {
                                                      "type": "variable",
                                                      "value": "Spouse1",
                                                      "class": "namedVariable",
                                                      "info": {}
                                                    },
                                                    {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "value": "Spouse2",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        },
                                                        {
                                                          "type": "string",
                                                          "value": "couple close relative"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              }
                                            }
                                          }
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "5. one of the couple or a close relative being unforeseeably posted overseas or being called on unavoidable and necessary duty where that person is a serving member of the UK armed forces, ambulance or health service, coastguard, fire brigade or police force; "
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToNonApparenceOfMinister",
                                      "children": [
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "enumValue",
                                              "value": "NoShow",
                                              "enumName": "Event",
                                              "metadata": {}
                                            },
                                            "relation": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "enumValue",
                                                  "value": "CausedBy",
                                                  "enumName": "Relation",
                                                  "metadata": {}
                                                },
                                                "target": {
                                                  "type": "string",
                                                  "value": "intended officiating minister or registrar"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "6. the non-appearance of the intended officiating minister or registrar and no substitute can be obtained;"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToCatNat",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 2,
                                                  "children": [
                                                    {
                                                      "type": "enumValue",
                                                      "value": "AdverseWeather",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "NaturalCatastrophe",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    }
                                                  ]
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "InabilityToReachPlace",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": [
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "enumValue",
                                                        "value": "HappenTo",
                                                        "enumName": "Relation",
                                                        "metadata": {}
                                                      },
                                                      "target": {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "value": "PolicyHolder",
                                                            "class": "scopeVariable"
                                                          },
                                                          {
                                                            "type": "string",
                                                            "value": "more than 50% of Wedding.guests.count"
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "enumValue",
                                                        "value": "HappenAt",
                                                        "enumName": "Relation",
                                                        "metadata": {}
                                                      },
                                                      "target": {
                                                        "type": "variable",
                                                        "value": "BookedVenue",
                                                        "class": "scopeVariable"
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "7. your inability or that of at least 50% of the guests to reach the wedding or wedding reception venue due to adverse weather conditions or natural  catastrophe;"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToMarquee",
                                      "children": [
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 2,
                                              "children": [
                                                {
                                                  "type": "enumValue",
                                                  "value": "Loss",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                {
                                                  "type": "enumValue",
                                                  "value": "Theft",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                }
                                              ]
                                            },
                                            "relation": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "enumValue",
                                                  "value": "HappenTo",
                                                  "enumName": "Relation",
                                                  "metadata": {}
                                                },
                                                "target": {
                                                  "type": "variable",
                                                  "value": "InsuredMarquee",
                                                  "class": "namedVariable",
                                                  "info": {}
                                                }
                                              }
                                            },
                                            "endorsement": {
                                              "type": "string",
                                              "value": "MarqueeCover"
                                            }
                                          }
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "8. loss or theft of or severe damage to the marquee (only applies if you have purchased the optional marquee cover)."
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "UnavoidableCancellation",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": [
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "HappenTo",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "operation",
                                            "operator": "or",
                                            "arity": 2,
                                            "children": [
                                              {
                                                "type": "variable",
                                                "value": "Wedding",
                                                "class": "namedVariable",
                                                "info": {}
                                              },
                                              {
                                                "type": "variable",
                                                "value": "WeddingReception",
                                                "class": "namedVariable",
                                                "info": {}
                                              }
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "CausedBy",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "variable",
                                            "value": "PolicyHolder",
                                            "class": "scopeVariable"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "or",
                              "children": [
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "IntentionToReplan",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": [
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "HappenTo",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "operation",
                                            "operator": "or",
                                            "arity": 2,
                                            "children": [
                                              {
                                                "type": "variable",
                                                "value": "Wedding",
                                                "class": "namedVariable",
                                                "info": {}
                                              },
                                              {
                                                "type": "variable",
                                                "value": "WeddingReception",
                                                "class": "namedVariable",
                                                "info": {}
                                              }
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "By",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "variable",
                                            "value": "PolicyHolder",
                                            "class": "scopeVariable"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "Death",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "enumValue",
                                          "value": "HappenTo",
                                          "enumName": "Relation",
                                          "metadata": {}
                                        },
                                        "target": {
                                          "type": "variable",
                                          "value": "PolicyHolder",
                                          "class": "scopeVariable"
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "Special claims conditions relating to Section 1, Part I – In the event of a valid claim for cancellation there must be a clear intention to rearrange the wedding at a later date except where the cancellation is caused by your death."
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
                      "name": "Text",
                      "properties": {
                        "value": {
                          "type": "string",
                          "value": "We will pay up to the amount shown in the schedule in total for any irrecoverable expenses you have paid for or which you have to pay for, under contract or subsequent agreement for the services of any wedding services supplier not used as a direct result of the unavoidable cancellation by you of the wedding or wedding reception caused by any of the following reasons:"
                        }
                      }
                    },
                    {
                      "type": "annotation",
                      "name": "Payout",
                      "properties": {
                        "type": {
                          "type": "string",
                          "value": "Limit"
                        },
                        "amount": {
                          "type": "variable",
                          "value": "InsuredSum",
                          "class": "namedVariable",
                          "info": {}
                        },
                        "unit": {
                          "type": "string",
                          "value": "USD"
                        },
                        "for": {
                          "type": "object",
                          "properties": {
                            "cost": {
                              "type": "string",
                              "value": "irrecoverable expenses"
                            },
                            "relation": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "enumValue",
                                    "value": "IncurredBy",
                                    "enumName": "Relation",
                                    "metadata": {}
                                  },
                                  "target": {
                                    "type": "variable",
                                    "value": "PolicyHolder",
                                    "class": "scopeVariable"
                                  }
                                }
                              },
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "enumValue",
                                    "value": "IncurredTo",
                                    "enumName": "Relation",
                                    "metadata": {}
                                  },
                                  "target": {
                                    "type": "variable",
                                    "value": "WeddingSupplier",
                                    "class": "namedVariable",
                                    "info": {}
                                  }
                                }
                              },
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "enumValue",
                                    "value": "PrescribedBy",
                                    "enumName": "Relation",
                                    "metadata": {}
                                  },
                                  "target": {
                                    "type": "operation",
                                    "operator": "or",
                                    "arity": 2,
                                    "children": [
                                      {
                                        "type": "string",
                                        "value": "contract"
                                      },
                                      {
                                        "type": "string",
                                        "value": "agreement"
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "operation",
              "operator": "or",
              "isSectionCall": true,
              "sectionName": "Section1.PartII",
              "children": [
                {
                  "type": "logic_block",
                  "children": [
                    {
                      "type": "operation",
                      "operator": "and",
                      "children": [
                        {
                          "type": "logic_block",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "causal",
                              "children": [
                                {
                                  "type": "operation",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "logic_block",
                                      "name": "CurtailmentSuddenDeath",
                                      "children": [
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 3,
                                              "children": [
                                                {
                                                  "type": "enumValue",
                                                  "value": "Death",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                {
                                                  "type": "enumValue",
                                                  "value": "Injury",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                {
                                                  "type": "enumValue",
                                                  "value": "SeriousSickness",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                }
                                              ]
                                            },
                                            "relation": [
                                              {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "enumValue",
                                                    "value": "HappenTo",
                                                    "enumName": "Relation",
                                                    "metadata": {}
                                                  },
                                                  "target": {
                                                    "type": "operation",
                                                    "operator": "or",
                                                    "arity": 2,
                                                    "children": [
                                                      {
                                                        "type": "variable",
                                                        "value": "PolicyHolder",
                                                        "class": "scopeVariable"
                                                      },
                                                      {
                                                        "type": "string",
                                                        "value": "couple close relative"
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "enumValue",
                                                    "value": "HappenAt",
                                                    "enumName": "Relation",
                                                    "metadata": {}
                                                  },
                                                  "target": {
                                                    "type": "operation",
                                                    "operator": "or",
                                                    "arity": 2,
                                                    "children": [
                                                      {
                                                        "type": "variable",
                                                        "value": "Wedding",
                                                        "class": "namedVariable",
                                                        "info": {}
                                                      },
                                                      {
                                                        "type": "variable",
                                                        "value": "WeddingReception",
                                                        "class": "namedVariable",
                                                        "info": {}
                                                      }
                                                    ]
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "1. the sudden death, injury or serious sickness of you or a close relative at the wedding or wedding reception;"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CurtailmentVenueUnableContinueToHold",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "operation",
                                              "operator": "or",
                                              "children": [
                                                {
                                                  "type": "logic_block",
                                                  "children": [
                                                    {
                                                      "type": "operation",
                                                      "operator": "causal",
                                                      "children": [
                                                        {
                                                          "type": "block",
                                                          "name": "Situation",
                                                          "properties": {
                                                            "event": {
                                                              "type": "operation",
                                                              "operator": "or",
                                                              "arity": 2,
                                                              "children": [
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "NaturalCatastrophe",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                },
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "AdverseWeather",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        },
                                                        {
                                                          "type": "block",
                                                          "name": "Situation",
                                                          "properties": {
                                                            "event": {
                                                              "type": "enumValue",
                                                              "value": "Damage",
                                                              "enumName": "Event",
                                                              "metadata": {}
                                                            },
                                                            "relation": {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "enumValue",
                                                                  "value": "HappenTo",
                                                                  "enumName": "Relation",
                                                                  "metadata": {}
                                                                },
                                                                "target": {
                                                                  "type": "variable",
                                                                  "value": "Venue",
                                                                  "class": "namedVariable",
                                                                  "info": {}
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "logic_block",
                                                  "children": [
                                                    {
                                                      "type": "operation",
                                                      "operator": "causal",
                                                      "children": [
                                                        {
                                                          "type": "block",
                                                          "name": "Situation",
                                                          "properties": {
                                                            "event": {
                                                              "type": "operation",
                                                              "operator": "or",
                                                              "arity": 4,
                                                              "children": [
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "Fire",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                },
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "Death",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                },
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "Suicide",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                },
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "Fire",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                }
                                                              ]
                                                            },
                                                            "relation": {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "enumValue",
                                                                  "value": "HappenAt",
                                                                  "enumName": "Relation",
                                                                  "metadata": {}
                                                                },
                                                                "target": {
                                                                  "type": "variable",
                                                                  "value": "Venue",
                                                                  "class": "namedVariable",
                                                                  "info": {}
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        {
                                                          "type": "block",
                                                          "name": "Situation",
                                                          "properties": {
                                                            "event": {
                                                              "type": "enumValue",
                                                              "value": "Evacuation",
                                                              "enumName": "Event",
                                                              "metadata": {}
                                                            }
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "enumValue",
                                                      "value": "ActOfTerrorism",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    "relation": {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "enumValue",
                                                          "value": "HappenAt",
                                                          "enumName": "Relation",
                                                          "metadata": {}
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "value": "Venue",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "enumValue",
                                                      "value": "Closure",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    "relation": [
                                                      {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "enumValue",
                                                            "value": "HappenTo",
                                                            "enumName": "Relation",
                                                            "metadata": {}
                                                          },
                                                          "target": {
                                                            "type": "variable",
                                                            "value": "Venue",
                                                            "class": "namedVariable",
                                                            "info": {}
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "enumValue",
                                                            "value": "CausedBy",
                                                            "enumName": "Relation",
                                                            "metadata": {}
                                                          },
                                                          "target": {
                                                            "type": "string",
                                                            "value": "Relevant authority"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "UnableToHoldGathering",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": [
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "enumValue",
                                                        "value": "HappenTo",
                                                        "enumName": "Relation",
                                                        "metadata": {}
                                                      },
                                                      "target": {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "value": "Wedding",
                                                            "class": "namedVariable",
                                                            "info": {}
                                                          },
                                                          {
                                                            "type": "variable",
                                                            "value": "WeddingReception",
                                                            "class": "namedVariable",
                                                            "info": {}
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "enumValue",
                                                        "value": "HappenAt",
                                                        "enumName": "Relation",
                                                        "metadata": {}
                                                      },
                                                      "target": {
                                                        "type": "variable",
                                                        "value": "Venue",
                                                        "class": "namedVariable",
                                                        "info": {}
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "2. the venue for the wedding being unable to continue to hold your wedding due to damage to the venue caused by natural catastrophe or adverse weather, evacuation due to fire, death, murder or suicide at the venue, an act of terrorism at the venue or its closure by a relevant authority;"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CurtailmentDueToMarquee",
                                      "children": [
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 3,
                                              "children": [
                                                {
                                                  "type": "enumValue",
                                                  "value": "Loss",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                {
                                                  "type": "enumValue",
                                                  "value": "Theft",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                {
                                                  "type": "enumValue",
                                                  "value": "SevereDamage",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                }
                                              ]
                                            },
                                            "relation": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "enumValue",
                                                  "value": "HappenTo",
                                                  "enumName": "Relation",
                                                  "metadata": {}
                                                },
                                                "target": {
                                                  "type": "variable",
                                                  "value": "InsuredMarquee",
                                                  "class": "namedVariable",
                                                  "info": {}
                                                }
                                              }
                                            },
                                            "endorsement": {
                                              "type": "string",
                                              "value": "MarqueeCover"
                                            }
                                          }
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "3. loss or theft of or severe damage to the marquee (if you have purchased optional marquee cover),"
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "Curtailment",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "enumValue",
                                          "value": "HappenTo",
                                          "enumName": "Relation",
                                          "metadata": {}
                                        },
                                        "target": {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Wedding",
                                              "class": "namedVariable",
                                              "info": {}
                                            },
                                            {
                                              "type": "variable",
                                              "value": "WeddingReception",
                                              "class": "namedVariable",
                                              "info": {}
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "IrrecoverableCosts",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "enumValue",
                                          "value": "IncurredBy",
                                          "enumName": "Relation",
                                          "metadata": {}
                                        },
                                        "target": {
                                          "type": "variable",
                                          "value": "PolicyHolder",
                                          "class": "scopeVariable"
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "or",
                              "children": [
                                {
                                  "type": "logic_block",
                                  "children": [
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "enumValue",
                                          "value": "IntentionToReplan",
                                          "enumName": "Event",
                                          "metadata": {}
                                        },
                                        "relation": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "enumValue",
                                                "value": "HappenTo",
                                                "enumName": "Relation",
                                                "metadata": {}
                                              },
                                              "target": {
                                                "type": "operation",
                                                "operator": "or",
                                                "arity": 2,
                                                "children": [
                                                  {
                                                    "type": "variable",
                                                    "value": "Wedding",
                                                    "class": "namedVariable",
                                                    "info": {}
                                                  },
                                                  {
                                                    "type": "variable",
                                                    "value": "WeddingReception",
                                                    "class": "namedVariable",
                                                    "info": {}
                                                  }
                                                ]
                                              }
                                            }
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "enumValue",
                                                "value": "By",
                                                "enumName": "Relation",
                                                "metadata": {}
                                              },
                                              "target": {
                                                "type": "variable",
                                                "value": "PolicyHolder",
                                                "class": "scopeVariable"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "type": "logic_block",
                                  "children": [
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "enumValue",
                                          "value": "Death",
                                          "enumName": "Event",
                                          "metadata": {}
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "enumValue",
                                              "value": "HappenTo",
                                              "enumName": "Relation",
                                              "metadata": {}
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "PolicyHolder",
                                              "class": "scopeVariable"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "Special claims conditions relating to Section 1, Part II– In the event of a valid claim for curtailment there must be a clear intention to rearrange the wedding at a later date except where the curtailment is caused by your death."
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
                      "name": "Text",
                      "properties": {
                        "value": {
                          "type": "string",
                          "value": "We will pay up to the amount shown in the schedule in total for any irrecoverable costs you unavoidably incur in the event of curtailment of the wedding or wedding reception for the following reasons."
                        }
                      }
                    },
                    {
                      "type": "annotation",
                      "name": "Payout",
                      "properties": {
                        "type": {
                          "type": "string",
                          "value": "Limit"
                        },
                        "amount": {
                          "type": "variable",
                          "value": "InsuredSum",
                          "class": "namedVariable",
                          "info": {}
                        },
                        "unit": {
                          "type": "string",
                          "value": "USD"
                        },
                        "for": {
                          "type": "object",
                          "properties": {
                            "cost": {
                              "type": "string",
                              "value": "irrecoverable cost"
                            },
                            "relation": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "enumValue",
                                  "value": "UnavoidablyIncurredBy",
                                  "enumName": "Relation",
                                  "metadata": {}
                                },
                                "target": {
                                  "type": "variable",
                                  "value": "PolicyHolder",
                                  "class": "scopeVariable"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "annotations": [
        {
          "type": "annotation",
          "name": "Text",
          "properties": {
            "value": {
              "type": "string",
              "value": "In the event of a covered event in Part I or II above, we will reimburse you for reasonable and necessary additional  costs incurred in rearranging the wedding and/or wedding  reception to the same standard as originally booked and budgeted to up to a maximum of 10% of the sum insured."
            }
          }
        },
        {
          "type": "annotation",
          "name": "Payout",
          "properties": {
            "type": {
              "type": "string",
              "value": "Limit"
            },
            "amount": {
              "type": "operation",
              "operator": "percentOf",
              "arity": 2,
              "children": [
                {
                  "type": "number",
                  "value": "10"
                },
                {
                  "type": "variable",
                  "value": "InsuredSum",
                  "class": "namedVariable",
                  "info": {}
                }
              ]
            },
            "unit": {
              "type": "string",
              "value": "USD"
            },
            "for": {
              "type": "object",
              "properties": {
                "cost": {
                  "type": "string",
                  "value": "reasonable and necessary additional costs"
                },
                "relation": [
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "enumValue",
                        "value": "IncurredBy",
                        "enumName": "Relation",
                        "metadata": {}
                      },
                      "target": {
                        "type": "variable",
                        "value": "PolicyHolder",
                        "class": "scopeVariable"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "enumValue",
                        "value": "IncurredFor",
                        "enumName": "Relation",
                        "metadata": {}
                      },
                      "target": {
                        "type": "enumValue",
                        "value": "Rearrangement",
                        "enumName": "Event",
                        "metadata": {}
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "enumValue",
                        "value": "HappenTo",
                        "enumName": "Relation",
                        "metadata": {}
                      },
                      "target": {
                        "type": "operation",
                        "operator": "or",
                        "arity": 2,
                        "children": [
                          {
                            "type": "variable",
                            "value": "Wedding",
                            "class": "namedVariable",
                            "info": {}
                          },
                          {
                            "type": "variable",
                            "value": "WeddingReception",
                            "class": "namedVariable",
                            "info": {}
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    },
    "Section1_notCover": {
      "type": "chain",
      "children": [
        {
          "type": "operation",
          "operator": "and",
          "children": [
            {
              "type": "operation",
              "operator": "or",
              "isSectionCall": true,
              "sectionName": "Section1",
              "children": [
                {
                  "type": "logic_block",
                  "children": [
                    {
                      "type": "operation",
                      "operator": "and",
                      "children": [
                        {
                          "type": "logic_block",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "causal",
                              "children": [
                                {
                                  "type": "operation",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToVenue",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "operation",
                                              "operator": "or",
                                              "children": [
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 4,
                                                      "children": [
                                                        {
                                                          "type": "enumValue",
                                                          "value": "FinancialFailure",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        },
                                                        {
                                                          "type": "enumValue",
                                                          "value": "Bankruptcy",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        },
                                                        {
                                                          "type": "enumValue",
                                                          "value": "Liquidation",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        },
                                                        {
                                                          "type": "enumValue",
                                                          "value": "Administration",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        }
                                                      ]
                                                    },
                                                    "relation": {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "enumValue",
                                                          "value": "HappenTo",
                                                          "enumName": "Relation",
                                                          "metadata": {}
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "value": "BookedVenue",
                                                          "class": "scopeVariable"
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "annotations": [
                                                    {
                                                      "type": "annotation",
                                                      "name": "Text",
                                                      "properties": {
                                                        "value": {
                                                          "type": "string",
                                                          "value": "a) ceasing to trade due to financial failure, bankruptcy, liquidation or administration"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "logic_block",
                                                  "children": [
                                                    {
                                                      "type": "operation",
                                                      "operator": "causal",
                                                      "children": [
                                                        {
                                                          "type": "block",
                                                          "name": "Situation",
                                                          "properties": {
                                                            "event": {
                                                              "type": "operation",
                                                              "operator": "or",
                                                              "arity": 3,
                                                              "children": [
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "Fire",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                },
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "NaturalCatastrophe",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                },
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "AdverseWeather",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        },
                                                        {
                                                          "type": "block",
                                                          "name": "Situation",
                                                          "properties": {
                                                            "event": {
                                                              "type": "enumValue",
                                                              "value": "Damage",
                                                              "enumName": "Event",
                                                              "metadata": {}
                                                            },
                                                            "relation": {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "enumValue",
                                                                  "value": "HappenTo",
                                                                  "enumName": "Relation",
                                                                  "metadata": {}
                                                                },
                                                                "target": {
                                                                  "type": "variable",
                                                                  "value": "BookedVenue",
                                                                  "class": "scopeVariable"
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  ],
                                                  "annotations": [
                                                    {
                                                      "type": "annotation",
                                                      "name": "Text",
                                                      "properties": {
                                                        "value": {
                                                          "type": "string",
                                                          "value": "b) damage to the venue caused by fire, natural catastrophe or adverse weather"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 3,
                                                      "children": [
                                                        {
                                                          "type": "enumValue",
                                                          "value": "Murder",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        },
                                                        {
                                                          "type": "enumValue",
                                                          "value": "Death",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        },
                                                        {
                                                          "type": "enumValue",
                                                          "value": "Suicide",
                                                          "enumName": "Event",
                                                          "metadata": {}
                                                        }
                                                      ]
                                                    },
                                                    "relation": {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "enumValue",
                                                          "value": "HappenAt",
                                                          "enumName": "Relation",
                                                          "metadata": {}
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "value": "BookedVenue",
                                                          "class": "scopeVariable"
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "annotations": [
                                                    {
                                                      "type": "annotation",
                                                      "name": "Text",
                                                      "properties": {
                                                        "value": {
                                                          "type": "string",
                                                          "value": "c) murder, death or suicide at the venue"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "enumValue",
                                                      "value": "ActOfTerrorism",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    "relation": {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "enumValue",
                                                          "value": "HappenAt",
                                                          "enumName": "Relation",
                                                          "metadata": {}
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "value": "BookedVenue",
                                                          "class": "scopeVariable"
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "annotations": [
                                                    {
                                                      "type": "annotation",
                                                      "name": "Text",
                                                      "properties": {
                                                        "value": {
                                                          "type": "string",
                                                          "value": "d) an act of terrorism at the venue"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "enumValue",
                                                      "value": "Closure",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    "relation": [
                                                      {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "enumValue",
                                                            "value": "HappenTo",
                                                            "enumName": "Relation",
                                                            "metadata": {}
                                                          },
                                                          "target": {
                                                            "type": "variable",
                                                            "value": "BookedVenue",
                                                            "class": "scopeVariable"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "enumValue",
                                                            "value": "CausedBy",
                                                            "enumName": "Relation",
                                                            "metadata": {}
                                                          },
                                                          "target": {
                                                            "type": "string",
                                                            "value": "relevant authority"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  "annotations": [
                                                    {
                                                      "type": "annotation",
                                                      "name": "Text",
                                                      "properties": {
                                                        "value": {
                                                          "type": "string",
                                                          "value": "  e) closure by a relevant authority;"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "UnableToHoldGathering",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": [
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "enumValue",
                                                        "value": "By",
                                                        "enumName": "Relation",
                                                        "metadata": {}
                                                      },
                                                      "target": {
                                                        "type": "variable",
                                                        "value": "BookedVenue",
                                                        "class": "scopeVariable"
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "enumValue",
                                                        "value": "HappenTo",
                                                        "enumName": "Relation",
                                                        "metadata": {}
                                                      },
                                                      "target": {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "value": "Wedding",
                                                            "class": "namedVariable",
                                                            "info": {}
                                                          },
                                                          {
                                                            "type": "variable",
                                                            "value": "WeddingReception",
                                                            "class": "namedVariable",
                                                            "info": {}
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": " 1. the booked venue for the wedding or wedding reception being unable to hold your wedding and/or wedding reception due to:"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToDeathOrInjury",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 3,
                                                  "children": [
                                                    {
                                                      "type": "enumValue",
                                                      "value": "Death",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "Injury",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "Sickness",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    }
                                                  ]
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "HappenTo",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "value": "Spouse1",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        },
                                                        {
                                                          "type": "variable",
                                                          "value": "Spouse2",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        }
                                                      ]
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "InappropriateCircumstance",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "HappenTo",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "value": "Wedding",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        },
                                                        {
                                                          "type": "variable",
                                                          "value": "WeddingReception",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        }
                                                      ]
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "  2. the death, injury or sickness of one or both of the couple or their close relative which would make having or continuing with the wedding and/or wedding reception inappropriate;"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToSupplier",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "NoShow",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "CausedBy",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "string",
                                                      "value": "booked and paid for professional Wedding Services Supplier"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 2,
                                                  "children": [
                                                    {
                                                      "type": "enumValue",
                                                      "value": "ImpossibleContinuationOfEvent",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "ImpossibleHappeningOfEvent",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    }
                                                  ]
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "HappenTo",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "value": "Wedding",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        },
                                                        {
                                                          "type": "variable",
                                                          "value": "WeddingReception",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        }
                                                      ]
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "3. the total non-appearance of any booked and paid for professional Wedding Services Supplier which would make having or continuing with the wedding or wedding reception impossible;"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToRedundancy",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "PolicyPurchase",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Time",
                                              "properties": {
                                                "value": {
                                                  "type": "number",
                                                  "value": "16"
                                                },
                                                "unit": {
                                                  "type": "string",
                                                  "value": "Week"
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "NotificationOfLossOfJob",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "enumValue",
                                                      "value": "HappenTo",
                                                      "enumName": "Relation",
                                                      "metadata": {}
                                                    },
                                                    "target": {
                                                      "type": "variable",
                                                      "value": "PolicyHolder",
                                                      "class": "scopeVariable"
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "4. your redundancy or that of any of your close relatives who have or would have made proven, significant, financial contributions on which the wedding arrangements depend, where notice is received at least 16 weeks after date of purchase of this insurance and which qualifies for payment under redundancy legislation and where there is a clear intention to rearrange the wedding; "
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToOverseaPublicService",
                                      "children": [
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "string",
                                              "value": "mobilized"
                                            },
                                            "relation": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "enumValue",
                                                  "value": "HappenTo",
                                                  "enumName": "Relation",
                                                  "metadata": {}
                                                },
                                                "target": {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 2,
                                                  "children": [
                                                    {
                                                      "type": "variable",
                                                      "value": "Spouse1",
                                                      "class": "namedVariable",
                                                      "info": {}
                                                    },
                                                    {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "value": "Spouse2",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        },
                                                        {
                                                          "type": "string",
                                                          "value": "couple close relative"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              }
                                            }
                                          }
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "5. one of the couple or a close relative being unforeseeably posted overseas or being called on unavoidable and necessary duty where that person is a serving member of the UK armed forces, ambulance or health service, coastguard, fire brigade or police force; "
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToNonApparenceOfMinister",
                                      "children": [
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "enumValue",
                                              "value": "NoShow",
                                              "enumName": "Event",
                                              "metadata": {}
                                            },
                                            "relation": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "enumValue",
                                                  "value": "CausedBy",
                                                  "enumName": "Relation",
                                                  "metadata": {}
                                                },
                                                "target": {
                                                  "type": "string",
                                                  "value": "intended officiating minister or registrar"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "6. the non-appearance of the intended officiating minister or registrar and no substitute can be obtained;"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToCatNat",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 2,
                                                  "children": [
                                                    {
                                                      "type": "enumValue",
                                                      "value": "AdverseWeather",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    {
                                                      "type": "enumValue",
                                                      "value": "NaturalCatastrophe",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    }
                                                  ]
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "InabilityToReachPlace",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": [
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "enumValue",
                                                        "value": "HappenTo",
                                                        "enumName": "Relation",
                                                        "metadata": {}
                                                      },
                                                      "target": {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "value": "PolicyHolder",
                                                            "class": "scopeVariable"
                                                          },
                                                          {
                                                            "type": "string",
                                                            "value": "more than 50% of Wedding.guests.count"
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "enumValue",
                                                        "value": "HappenAt",
                                                        "enumName": "Relation",
                                                        "metadata": {}
                                                      },
                                                      "target": {
                                                        "type": "variable",
                                                        "value": "BookedVenue",
                                                        "class": "scopeVariable"
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "7. your inability or that of at least 50% of the guests to reach the wedding or wedding reception venue due to adverse weather conditions or natural  catastrophe;"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CancellationDueToMarquee",
                                      "children": [
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 2,
                                              "children": [
                                                {
                                                  "type": "enumValue",
                                                  "value": "Loss",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                {
                                                  "type": "enumValue",
                                                  "value": "Theft",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                }
                                              ]
                                            },
                                            "relation": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "enumValue",
                                                  "value": "HappenTo",
                                                  "enumName": "Relation",
                                                  "metadata": {}
                                                },
                                                "target": {
                                                  "type": "variable",
                                                  "value": "InsuredMarquee",
                                                  "class": "namedVariable",
                                                  "info": {}
                                                }
                                              }
                                            },
                                            "endorsement": {
                                              "type": "string",
                                              "value": "MarqueeCover"
                                            }
                                          }
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "8. loss or theft of or severe damage to the marquee (only applies if you have purchased the optional marquee cover)."
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "UnavoidableCancellation",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": [
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "HappenTo",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "operation",
                                            "operator": "or",
                                            "arity": 2,
                                            "children": [
                                              {
                                                "type": "variable",
                                                "value": "Wedding",
                                                "class": "namedVariable",
                                                "info": {}
                                              },
                                              {
                                                "type": "variable",
                                                "value": "WeddingReception",
                                                "class": "namedVariable",
                                                "info": {}
                                              }
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "CausedBy",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "variable",
                                            "value": "PolicyHolder",
                                            "class": "scopeVariable"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "or",
                              "children": [
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "IntentionToReplan",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": [
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "HappenTo",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "operation",
                                            "operator": "or",
                                            "arity": 2,
                                            "children": [
                                              {
                                                "type": "variable",
                                                "value": "Wedding",
                                                "class": "namedVariable",
                                                "info": {}
                                              },
                                              {
                                                "type": "variable",
                                                "value": "WeddingReception",
                                                "class": "namedVariable",
                                                "info": {}
                                              }
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "enumValue",
                                            "value": "By",
                                            "enumName": "Relation",
                                            "metadata": {}
                                          },
                                          "target": {
                                            "type": "variable",
                                            "value": "PolicyHolder",
                                            "class": "scopeVariable"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "Death",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "enumValue",
                                          "value": "HappenTo",
                                          "enumName": "Relation",
                                          "metadata": {}
                                        },
                                        "target": {
                                          "type": "variable",
                                          "value": "PolicyHolder",
                                          "class": "scopeVariable"
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "Special claims conditions relating to Section 1, Part I – In the event of a valid claim for cancellation there must be a clear intention to rearrange the wedding at a later date except where the cancellation is caused by your death."
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
                      "name": "Text",
                      "properties": {
                        "value": {
                          "type": "string",
                          "value": "We will pay up to the amount shown in the schedule in total for any irrecoverable expenses you have paid for or which you have to pay for, under contract or subsequent agreement for the services of any wedding services supplier not used as a direct result of the unavoidable cancellation by you of the wedding or wedding reception caused by any of the following reasons:"
                        }
                      }
                    },
                    {
                      "type": "annotation",
                      "name": "Payout",
                      "properties": {
                        "type": {
                          "type": "string",
                          "value": "Limit"
                        },
                        "amount": {
                          "type": "variable",
                          "value": "InsuredSum",
                          "class": "namedVariable",
                          "info": {}
                        },
                        "unit": {
                          "type": "string",
                          "value": "USD"
                        },
                        "for": {
                          "type": "object",
                          "properties": {
                            "cost": {
                              "type": "string",
                              "value": "irrecoverable expenses"
                            },
                            "relation": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "enumValue",
                                    "value": "IncurredBy",
                                    "enumName": "Relation",
                                    "metadata": {}
                                  },
                                  "target": {
                                    "type": "variable",
                                    "value": "PolicyHolder",
                                    "class": "scopeVariable"
                                  }
                                }
                              },
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "enumValue",
                                    "value": "IncurredTo",
                                    "enumName": "Relation",
                                    "metadata": {}
                                  },
                                  "target": {
                                    "type": "variable",
                                    "value": "WeddingSupplier",
                                    "class": "namedVariable",
                                    "info": {}
                                  }
                                }
                              },
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "enumValue",
                                    "value": "PrescribedBy",
                                    "enumName": "Relation",
                                    "metadata": {}
                                  },
                                  "target": {
                                    "type": "operation",
                                    "operator": "or",
                                    "arity": 2,
                                    "children": [
                                      {
                                        "type": "string",
                                        "value": "contract"
                                      },
                                      {
                                        "type": "string",
                                        "value": "agreement"
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "logic_block",
                  "children": [
                    {
                      "type": "operation",
                      "operator": "and",
                      "children": [
                        {
                          "type": "logic_block",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "causal",
                              "children": [
                                {
                                  "type": "operation",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "logic_block",
                                      "name": "CurtailmentSuddenDeath",
                                      "children": [
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 3,
                                              "children": [
                                                {
                                                  "type": "enumValue",
                                                  "value": "Death",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                {
                                                  "type": "enumValue",
                                                  "value": "Injury",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                {
                                                  "type": "enumValue",
                                                  "value": "SeriousSickness",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                }
                                              ]
                                            },
                                            "relation": [
                                              {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "enumValue",
                                                    "value": "HappenTo",
                                                    "enumName": "Relation",
                                                    "metadata": {}
                                                  },
                                                  "target": {
                                                    "type": "operation",
                                                    "operator": "or",
                                                    "arity": 2,
                                                    "children": [
                                                      {
                                                        "type": "variable",
                                                        "value": "PolicyHolder",
                                                        "class": "scopeVariable"
                                                      },
                                                      {
                                                        "type": "string",
                                                        "value": "couple close relative"
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "enumValue",
                                                    "value": "HappenAt",
                                                    "enumName": "Relation",
                                                    "metadata": {}
                                                  },
                                                  "target": {
                                                    "type": "operation",
                                                    "operator": "or",
                                                    "arity": 2,
                                                    "children": [
                                                      {
                                                        "type": "variable",
                                                        "value": "Wedding",
                                                        "class": "namedVariable",
                                                        "info": {}
                                                      },
                                                      {
                                                        "type": "variable",
                                                        "value": "WeddingReception",
                                                        "class": "namedVariable",
                                                        "info": {}
                                                      }
                                                    ]
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "1. the sudden death, injury or serious sickness of you or a close relative at the wedding or wedding reception;"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CurtailmentVenueUnableContinueToHold",
                                      "children": [
                                        {
                                          "type": "operation",
                                          "operator": "causal",
                                          "children": [
                                            {
                                              "type": "operation",
                                              "operator": "or",
                                              "children": [
                                                {
                                                  "type": "logic_block",
                                                  "children": [
                                                    {
                                                      "type": "operation",
                                                      "operator": "causal",
                                                      "children": [
                                                        {
                                                          "type": "block",
                                                          "name": "Situation",
                                                          "properties": {
                                                            "event": {
                                                              "type": "operation",
                                                              "operator": "or",
                                                              "arity": 2,
                                                              "children": [
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "NaturalCatastrophe",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                },
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "AdverseWeather",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        },
                                                        {
                                                          "type": "block",
                                                          "name": "Situation",
                                                          "properties": {
                                                            "event": {
                                                              "type": "enumValue",
                                                              "value": "Damage",
                                                              "enumName": "Event",
                                                              "metadata": {}
                                                            },
                                                            "relation": {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "enumValue",
                                                                  "value": "HappenTo",
                                                                  "enumName": "Relation",
                                                                  "metadata": {}
                                                                },
                                                                "target": {
                                                                  "type": "variable",
                                                                  "value": "Venue",
                                                                  "class": "namedVariable",
                                                                  "info": {}
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "logic_block",
                                                  "children": [
                                                    {
                                                      "type": "operation",
                                                      "operator": "causal",
                                                      "children": [
                                                        {
                                                          "type": "block",
                                                          "name": "Situation",
                                                          "properties": {
                                                            "event": {
                                                              "type": "operation",
                                                              "operator": "or",
                                                              "arity": 4,
                                                              "children": [
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "Fire",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                },
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "Death",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                },
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "Suicide",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                },
                                                                {
                                                                  "type": "enumValue",
                                                                  "value": "Fire",
                                                                  "enumName": "Event",
                                                                  "metadata": {}
                                                                }
                                                              ]
                                                            },
                                                            "relation": {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "enumValue",
                                                                  "value": "HappenAt",
                                                                  "enumName": "Relation",
                                                                  "metadata": {}
                                                                },
                                                                "target": {
                                                                  "type": "variable",
                                                                  "value": "Venue",
                                                                  "class": "namedVariable",
                                                                  "info": {}
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        {
                                                          "type": "block",
                                                          "name": "Situation",
                                                          "properties": {
                                                            "event": {
                                                              "type": "enumValue",
                                                              "value": "Evacuation",
                                                              "enumName": "Event",
                                                              "metadata": {}
                                                            }
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "enumValue",
                                                      "value": "ActOfTerrorism",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    "relation": {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "enumValue",
                                                          "value": "HappenAt",
                                                          "enumName": "Relation",
                                                          "metadata": {}
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "value": "Venue",
                                                          "class": "namedVariable",
                                                          "info": {}
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "enumValue",
                                                      "value": "Closure",
                                                      "enumName": "Event",
                                                      "metadata": {}
                                                    },
                                                    "relation": [
                                                      {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "enumValue",
                                                            "value": "HappenTo",
                                                            "enumName": "Relation",
                                                            "metadata": {}
                                                          },
                                                          "target": {
                                                            "type": "variable",
                                                            "value": "Venue",
                                                            "class": "namedVariable",
                                                            "info": {}
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "enumValue",
                                                            "value": "CausedBy",
                                                            "enumName": "Relation",
                                                            "metadata": {}
                                                          },
                                                          "target": {
                                                            "type": "string",
                                                            "value": "Relevant authority"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "enumValue",
                                                  "value": "UnableToHoldGathering",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                "relation": [
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "enumValue",
                                                        "value": "HappenTo",
                                                        "enumName": "Relation",
                                                        "metadata": {}
                                                      },
                                                      "target": {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "value": "Wedding",
                                                            "class": "namedVariable",
                                                            "info": {}
                                                          },
                                                          {
                                                            "type": "variable",
                                                            "value": "WeddingReception",
                                                            "class": "namedVariable",
                                                            "info": {}
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "enumValue",
                                                        "value": "HappenAt",
                                                        "enumName": "Relation",
                                                        "metadata": {}
                                                      },
                                                      "target": {
                                                        "type": "variable",
                                                        "value": "Venue",
                                                        "class": "namedVariable",
                                                        "info": {}
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "2. the venue for the wedding being unable to continue to hold your wedding due to damage to the venue caused by natural catastrophe or adverse weather, evacuation due to fire, death, murder or suicide at the venue, an act of terrorism at the venue or its closure by a relevant authority;"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "logic_block",
                                      "name": "CurtailmentDueToMarquee",
                                      "children": [
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 3,
                                              "children": [
                                                {
                                                  "type": "enumValue",
                                                  "value": "Loss",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                {
                                                  "type": "enumValue",
                                                  "value": "Theft",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                },
                                                {
                                                  "type": "enumValue",
                                                  "value": "SevereDamage",
                                                  "enumName": "Event",
                                                  "metadata": {}
                                                }
                                              ]
                                            },
                                            "relation": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "enumValue",
                                                  "value": "HappenTo",
                                                  "enumName": "Relation",
                                                  "metadata": {}
                                                },
                                                "target": {
                                                  "type": "variable",
                                                  "value": "InsuredMarquee",
                                                  "class": "namedVariable",
                                                  "info": {}
                                                }
                                              }
                                            },
                                            "endorsement": {
                                              "type": "string",
                                              "value": "MarqueeCover"
                                            }
                                          }
                                        }
                                      ],
                                      "annotations": [
                                        {
                                          "type": "annotation",
                                          "name": "Text",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "value": "3. loss or theft of or severe damage to the marquee (if you have purchased optional marquee cover),"
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "Curtailment",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "enumValue",
                                          "value": "HappenTo",
                                          "enumName": "Relation",
                                          "metadata": {}
                                        },
                                        "target": {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Wedding",
                                              "class": "namedVariable",
                                              "info": {}
                                            },
                                            {
                                              "type": "variable",
                                              "value": "WeddingReception",
                                              "class": "namedVariable",
                                              "info": {}
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "enumValue",
                                      "value": "IrrecoverableCosts",
                                      "enumName": "Event",
                                      "metadata": {}
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "enumValue",
                                          "value": "IncurredBy",
                                          "enumName": "Relation",
                                          "metadata": {}
                                        },
                                        "target": {
                                          "type": "variable",
                                          "value": "PolicyHolder",
                                          "class": "scopeVariable"
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "or",
                              "children": [
                                {
                                  "type": "logic_block",
                                  "children": [
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "enumValue",
                                          "value": "IntentionToReplan",
                                          "enumName": "Event",
                                          "metadata": {}
                                        },
                                        "relation": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "enumValue",
                                                "value": "HappenTo",
                                                "enumName": "Relation",
                                                "metadata": {}
                                              },
                                              "target": {
                                                "type": "operation",
                                                "operator": "or",
                                                "arity": 2,
                                                "children": [
                                                  {
                                                    "type": "variable",
                                                    "value": "Wedding",
                                                    "class": "namedVariable",
                                                    "info": {}
                                                  },
                                                  {
                                                    "type": "variable",
                                                    "value": "WeddingReception",
                                                    "class": "namedVariable",
                                                    "info": {}
                                                  }
                                                ]
                                              }
                                            }
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "enumValue",
                                                "value": "By",
                                                "enumName": "Relation",
                                                "metadata": {}
                                              },
                                              "target": {
                                                "type": "variable",
                                                "value": "PolicyHolder",
                                                "class": "scopeVariable"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "type": "logic_block",
                                  "children": [
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "enumValue",
                                          "value": "Death",
                                          "enumName": "Event",
                                          "metadata": {}
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "enumValue",
                                              "value": "HappenTo",
                                              "enumName": "Relation",
                                              "metadata": {}
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "PolicyHolder",
                                              "class": "scopeVariable"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
                              "name": "Text",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "value": "Special claims conditions relating to Section 1, Part II– In the event of a valid claim for curtailment there must be a clear intention to rearrange the wedding at a later date except where the curtailment is caused by your death."
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
                      "name": "Text",
                      "properties": {
                        "value": {
                          "type": "string",
                          "value": "We will pay up to the amount shown in the schedule in total for any irrecoverable costs you unavoidably incur in the event of curtailment of the wedding or wedding reception for the following reasons."
                        }
                      }
                    },
                    {
                      "type": "annotation",
                      "name": "Payout",
                      "properties": {
                        "type": {
                          "type": "string",
                          "value": "Limit"
                        },
                        "amount": {
                          "type": "variable",
                          "value": "InsuredSum",
                          "class": "namedVariable",
                          "info": {}
                        },
                        "unit": {
                          "type": "string",
                          "value": "USD"
                        },
                        "for": {
                          "type": "object",
                          "properties": {
                            "cost": {
                              "type": "string",
                              "value": "irrecoverable cost"
                            },
                            "relation": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "enumValue",
                                  "value": "UnavoidablyIncurredBy",
                                  "enumName": "Relation",
                                  "metadata": {}
                                },
                                "target": {
                                  "type": "variable",
                                  "value": "PolicyHolder",
                                  "class": "scopeVariable"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "logic_block",
                  "children": [
                    {
                      "type": "operation",
                      "operator": "or",
                      "children": [
                        {
                          "type": "rule_call",
                          "name": "Section1.PartI"
                        },
                        {
                          "type": "rule_call",
                          "name": "Section1.PartII"
                        }
                      ]
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
                      "name": "Text",
                      "properties": {
                        "value": {
                          "type": "string",
                          "value": "In the event of a covered event in Part I or II above, we will reimburse you for reasonable and necessary additional  costs incurred in rearranging the wedding and/or wedding  reception to the same standard as originally booked and budgeted to up to a maximum of 10% of the sum insured."
                        }
                      }
                    },
                    {
                      "type": "annotation",
                      "name": "Payout",
                      "properties": {
                        "type": {
                          "type": "string",
                          "value": "Limit"
                        },
                        "amount": {
                          "type": "operation",
                          "operator": "percentOf",
                          "arity": 2,
                          "children": [
                            {
                              "type": "number",
                              "value": "10"
                            },
                            {
                              "type": "variable",
                              "value": "InsuredSum",
                              "class": "namedVariable",
                              "info": {}
                            }
                          ]
                        },
                        "unit": {
                          "type": "string",
                          "value": "USD"
                        },
                        "for": {
                          "type": "object",
                          "properties": {
                            "cost": {
                              "type": "string",
                              "value": "reasonable and necessary additional costs"
                            },
                            "relation": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "enumValue",
                                    "value": "IncurredBy",
                                    "enumName": "Relation",
                                    "metadata": {}
                                  },
                                  "target": {
                                    "type": "variable",
                                    "value": "PolicyHolder",
                                    "class": "scopeVariable"
                                  }
                                }
                              },
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "enumValue",
                                    "value": "IncurredFor",
                                    "enumName": "Relation",
                                    "metadata": {}
                                  },
                                  "target": {
                                    "type": "enumValue",
                                    "value": "Rearrangement",
                                    "enumName": "Event",
                                    "metadata": {}
                                  }
                                }
                              },
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "enumValue",
                                    "value": "HappenTo",
                                    "enumName": "Relation",
                                    "metadata": {}
                                  },
                                  "target": {
                                    "type": "operation",
                                    "operator": "or",
                                    "arity": 2,
                                    "children": [
                                      {
                                        "type": "variable",
                                        "value": "Wedding",
                                        "class": "namedVariable",
                                        "info": {}
                                      },
                                      {
                                        "type": "variable",
                                        "value": "WeddingReception",
                                        "class": "namedVariable",
                                        "info": {}
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "logic_block",
                  "children": [
                    {
                      "type": "operation",
                      "operator": "and",
                      "children": [
                        {
                          "type": "rule_call",
                          "name": "Section1"
                        },
                        {
                          "type": "logic_block",
                          "children": [
                            {
                              "type": "operation",
                              "operator": "or",
                              "children": [
                                {
                                  "type": "logic_block",
                                  "name": "LossRecoverableFromOtherSource",
                                  "children": [
                                    {
                                      "type": "operation",
                                      "operator": "causal",
                                      "children": [
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "enumValue",
                                              "value": "Loss",
                                              "enumName": "Event",
                                              "metadata": {}
                                            }
                                          }
                                        },
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "enumValue",
                                              "value": "LossRecoverableFromOtherSource",
                                              "enumName": "Event",
                                              "metadata": {}
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  ],
                                  "annotations": [
                                    {
                                      "type": "annotation",
                                      "name": "Text",
                                      "properties": {
                                        "value": {
                                          "type": "string",
                                          "value": "1. losses recoverable from any other sources;"
                                        }
                                      }
                                    }
                                  ]
                                },
                                {
                                  "type": "logic_block",
                                  "name": "lossExcludedInTheGeneralExclusion",
                                  "children": [],
                                  "annotations": [
                                    {
                                      "type": "annotation",
                                      "name": "Text",
                                      "properties": {
                                        "value": {
                                          "type": "string",
                                          "value": "2. losses excluded in the General Exclusions;"
                                        }
                                      }
                                    }
                                  ]
                                },
                                {
                                  "type": "logic_block",
                                  "name": "lossExcludedFromDivers",
                                  "children": [
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "enumValue",
                                              "value": "CausedBy",
                                              "enumName": "Relation",
                                              "metadata": {}
                                            },
                                            "target": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 2,
                                              "children": [
                                                {
                                                  "type": "string",
                                                  "value": "government regulation"
                                                },
                                                {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 2,
                                                  "children": [
                                                    {
                                                      "type": "string",
                                                      "value": "government act"
                                                    },
                                                    {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "string",
                                                          "value": "change of law"
                                                        },
                                                        {
                                                          "type": "string",
                                                          "value": "general government guidance and advice"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "annotations": [
                                    {
                                      "type": "annotation",
                                      "name": "Text",
                                      "properties": {
                                        "value": {
                                          "type": "string",
                                          "value": "3. any claim arising directly or indirectly from:"
                                        }
                                      }
                                    },
                                    {
                                      "type": "annotation",
                                      "name": "Text",
                                      "properties": {
                                        "value": {
                                          "type": "string",
                                          "value": "a) government regulation, government act, change of law or general government guidance and advice;"
                                        }
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
                      "name": "Payout",
                      "properties": {
                        "type": {
                          "type": "string",
                          "value": "Exclusion"
                        }
                      }
                    },
                    {
                      "type": "annotation",
                      "name": "Text",
                      "properties": {
                        "value": {
                          "type": "string",
                          "value": "This section does not cover:"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "logic_block",
              "children": [
                {
                  "type": "operation",
                  "operator": "or",
                  "children": [
                    {
                      "type": "logic_block",
                      "name": "LossRecoverableFromOtherSource",
                      "children": [
                        {
                          "type": "operation",
                          "operator": "causal",
                          "children": [
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "enumValue",
                                  "value": "Loss",
                                  "enumName": "Event",
                                  "metadata": {}
                                }
                              }
                            },
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "enumValue",
                                  "value": "LossRecoverableFromOtherSource",
                                  "enumName": "Event",
                                  "metadata": {}
                                }
                              }
                            }
                          ]
                        }
                      ],
                      "annotations": [
                        {
                          "type": "annotation",
                          "name": "Text",
                          "properties": {
                            "value": {
                              "type": "string",
                              "value": "1. losses recoverable from any other sources;"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "type": "logic_block",
                      "name": "lossExcludedInTheGeneralExclusion",
                      "children": [],
                      "annotations": [
                        {
                          "type": "annotation",
                          "name": "Text",
                          "properties": {
                            "value": {
                              "type": "string",
                              "value": "2. losses excluded in the General Exclusions;"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "type": "logic_block",
                      "name": "lossExcludedFromDivers",
                      "children": [
                        {
                          "type": "block",
                          "name": "Situation",
                          "properties": {
                            "relation": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "enumValue",
                                  "value": "CausedBy",
                                  "enumName": "Relation",
                                  "metadata": {}
                                },
                                "target": {
                                  "type": "operation",
                                  "operator": "or",
                                  "arity": 2,
                                  "children": [
                                    {
                                      "type": "string",
                                      "value": "government regulation"
                                    },
                                    {
                                      "type": "operation",
                                      "operator": "or",
                                      "arity": 2,
                                      "children": [
                                        {
                                          "type": "string",
                                          "value": "government act"
                                        },
                                        {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "string",
                                              "value": "change of law"
                                            },
                                            {
                                              "type": "string",
                                              "value": "general government guidance and advice"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      ],
                      "annotations": [
                        {
                          "type": "annotation",
                          "name": "Text",
                          "properties": {
                            "value": {
                              "type": "string",
                              "value": "3. any claim arising directly or indirectly from:"
                            }
                          }
                        },
                        {
                          "type": "annotation",
                          "name": "Text",
                          "properties": {
                            "value": {
                              "type": "string",
                              "value": "a) government regulation, government act, change of law or general government guidance and advice;"
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "annotations": [
        {
          "type": "annotation",
          "name": "Payout",
          "properties": {
            "type": {
              "type": "string",
              "value": "Exclusion"
            }
          }
        },
        {
          "type": "annotation",
          "name": "Text",
          "properties": {
            "value": {
              "type": "string",
              "value": "This section does not cover:"
            }
          }
        }
      ]
    }
  },
  "rules": {},
  "declarations": {
    "Event": {
      "type": "enum",
      "properties": {
        "UnavoidableCancellation": {
          "displayName": {
            "type": "string",
            "value": "Unavoidable cancellation"
          }
        },
        "IntentionToReplan": {
          "displayName": {
            "type": "string",
            "value": "Clear intention to replan"
          }
        },
        "Closure": {
          "displayName": {
            "type": "string",
            "value": "Closure"
          }
        },
        "ActOfTerrorism": {
          "displayName": {
            "type": "string",
            "value": "Act of terrorism"
          }
        },
        "Murder": {
          "displayName": {
            "type": "string",
            "value": "Murder"
          }
        },
        "Death": {
          "displayName": {
            "type": "string",
            "value": "Death"
          }
        },
        "Injury": {
          "displayName": {
            "type": "string",
            "value": "Injury"
          }
        },
        "Sickness": {
          "displayName": {
            "type": "string",
            "value": "Sickness"
          }
        },
        "SeriousSickness": {
          "displayName": {
            "type": "string",
            "value": "Serious Sickness"
          }
        },
        "Suicide": {
          "displayName": {
            "type": "string",
            "value": "Suicide"
          }
        },
        "Fire": {
          "displayName": {
            "type": "string",
            "value": "Fire"
          }
        },
        "NaturalCatastrophe": {
          "displayName": {
            "type": "string",
            "value": "natural catastrophe"
          }
        },
        "AdverseWeather": {
          "displayName": {
            "type": "string",
            "value": "adverse weather"
          }
        },
        "SevereDamage": {
          "displayName": {
            "type": "string",
            "value": "Sever Damage"
          }
        },
        "Damage": {
          "displayName": {
            "type": "string",
            "value": "Damage"
          }
        },
        "FinancialFailure": {
          "displayName": {
            "type": "string",
            "value": "financial failure"
          }
        },
        "Bankruptcy": {
          "displayName": {
            "type": "string",
            "value": "bankruptcy"
          }
        },
        "Liquidation": {
          "displayName": {
            "type": "string",
            "value": "liquidation"
          }
        },
        "Administration": {
          "displayName": {
            "type": "string",
            "value": "administration"
          }
        },
        "UnableToHoldGathering": {
          "displayName": {
            "type": "string",
            "value": "unable to hold gathering"
          }
        },
        "InappropriateCircumstance": {
          "displayName": {
            "type": "string",
            "value": "Inappropriate Circumstance"
          }
        },
        "NoShow": {
          "displayName": {
            "type": "string",
            "value": "No show"
          }
        },
        "ImpossibleContinuationOfEvent": {
          "displayName": {
            "type": "string",
            "value": "Impossible Continuation of Event"
          }
        },
        "ImpossibleHappeningOfEvent": {
          "displayName": {
            "type": "string",
            "value": "Impossible Happening of Event"
          }
        },
        "PolicyPurchase": {
          "displayName": {
            "type": "string",
            "value": "Policy Purchase"
          }
        },
        "NotificationOfLossOfJob": {
          "displayName": {
            "type": "string",
            "value": "Notification of loss of job"
          }
        },
        "Loss": {
          "displayName": {
            "type": "string",
            "value": "Loss"
          }
        },
        "Theft": {
          "displayName": {
            "type": "string",
            "value": "Theft"
          }
        },
        "InabilityToReachPlace": {
          "displayName": {
            "type": "string",
            "value": "Inability to reach a place"
          }
        },
        "Curtailment": {
          "displayName": {
            "type": "string",
            "value": "Curtailment"
          }
        },
        "Evacuation": {
          "displayName": {
            "type": "string",
            "value": "Evacuation"
          }
        },
        "IrrecoverableCosts": {
          "displayName": {
            "type": "string",
            "value": "IrrecoverableCosts"
          }
        },
        "Rearrangement": {
          "displayName": {
            "type": "string",
            "value": "Rearrangement"
          }
        },
        "LossRecoverableFromOtherSource": {
          "displayName": {
            "type": "string",
            "value": "Loss Recoverable From Other Source"
          }
        }
      }
    },
    "Relation": {
      "type": "enum",
      "properties": {
        "HappenTo": {
          "displayName": {
            "type": "string",
            "value": "Happened to"
          }
        },
        "HappenAt": {
          "displayName": {
            "type": "string",
            "value": "Happened At"
          }
        },
        "CausedBy": {
          "displayName": {
            "type": "string",
            "value": "Caused by"
          }
        },
        "By": {
          "displayName": {
            "type": "string",
            "value": "By"
          }
        },
        "IncurredBy": {
          "displayName": {
            "type": "string",
            "value": "Incurred By"
          }
        },
        "IncurredTo": {
          "displayName": {
            "type": "string",
            "value": "Incurred To"
          }
        },
        "IncurredFor": {
          "displayName": {
            "type": "string",
            "value": "Incurred For"
          }
        },
        "UnavoidablyIncurredBy": {
          "displayName": {
            "type": "string",
            "value": "Unavoidably Incurred By"
          }
        },
        "PrescribedBy": {
          "displayName": {
            "type": "string",
            "value": "Prescribed By"
          }
        }
      }
    },
    "Situation": {
      "type": "object",
      "properties": {
        "event": {
          "type": "variable",
          "value": "Event"
        },
        "location": {
          "type": "variable",
          "value": "string"
        }
      }
    },
    "Person": {
      "type": "object",
      "properties": {}
    },
    "Venue": {
      "type": "object",
      "properties": {}
    },
    "Gathering": {
      "type": "object",
      "properties": {
        "venue": {
          "type": "variable",
          "value": "Venue"
        }
      }
    },
    "PhysicalObject": {
      "type": "object",
      "properties": {}
    },
    "Amount": {
      "type": "object",
      "properties": {}
    },
    "Spouse1": {
      "type": "variable",
      "value": "Person"
    },
    "Spouse2": {
      "type": "variable",
      "value": "Person"
    },
    "Wedding": {
      "type": "variable",
      "value": "Gathering"
    },
    "WeddingReception": {
      "type": "variable",
      "value": "Gathering"
    },
    "InsuredMarquee": {
      "type": "variable",
      "value": "PhysicalObject"
    },
    "InsuredSum": {
      "type": "variable",
      "value": "Amount"
    },
    "WeddingSupplier": {
      "type": "variable",
      "value": "Company"
    }
  }
}
