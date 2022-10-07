(() => {
    var t = {
            9385: (t, e, i) => {
                'use strict';
                var l = i(1957),
                    n = i(7198),
                    o = i(499),
                    s = i(9835);

                function r(t, e, i, l, n, o) {
                    const r = (0, s.up)('router-view');
                    return (0, s.wg)(),
                        (0, s.j4)(r)
                }
                const a = (0, s.aZ)({
                    name: 'App'
                });
                var c = i(1639);
                const d = (0, c.Z)(a, [
                        ['render',
                            r
                        ]
                    ]),
                    u = d;
                var v = i(3340),
                    h = i(8339),
                    m = i(6225),
                    p = i.n(m);
                const g = (0, s._)('img', {
                    src: p(),
                    style: {
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        top: '0',
                        left: '0'
                    }
                }, null, -1);

                function w(t, e, i, l, n, o) {
                    const r = (0, s.up)('router-view'),
                        a = (0, s.up)('q-page-container'),
                        c = (0, s.up)('q-layout');
                    return (0, s.wg)(),
                        (0, s.j4)(c, {
                            view: 'lHh Lpr lFf'
                        }, {
                            default:
                                (0, s.w5)((() => [(0, s.Wm)(a, null, {
                                    default:
                                        (0, s.w5)((() => [g,
                                            (0, s.Wm)(r)
                                        ])),
                                    _: 1
                                })])),
                            _: 1
                        })
                }
                const y = (0, s.aZ)({
                    name: 'MainLayout',
                    setup() {
                        return {}
                    }
                });
                var b = i(1967),
                    f = i(2133),
                    k = i(9984),
                    x = i.n(k);
                const _ = (0, c.Z)(y, [
                        ['render',
                            w
                        ]
                    ]),
                    D = _;
                x()(y, 'components', {
                    QLayout: b.Z,
                    QPageContainer: f.Z
                });
                var R = i(6970),
                    C = i(2338),
                    I = i.n(C);
                const j = t => ((0, s.dD)('data-v-47be9041'), t = t(), (0, s.Cn)(), t),
                    U = {
                        class: 'row col-12'
                    },
                    L = {
                        key: 1,
                        class: 'col-12'
                    },
                    Z = {
                        class: 'row col-12 justify-between q-px-lg'
                    },
                    G = {
                        class: 'col-4'
                    },
                    N = {
                        class: 'col-4'
                    },
                    A = {
                        class: 'row col-3'
                    },
                    E = {
                        class: 'row col-12 justify-center items-center q-my-xs'
                    },
                    O = {
                        key: 0,
                        class: 'row col-12 justify-center items-center step-tips'
                    },
                    P = {
                        key: 1,
                        class: 'row col-12 justify-center items-center step-tips'
                    },
                    M = {
                        key: 2,
                        class: 'row col-12 justify-center items-center step-tips'
                    },
                    W = {
                        class: 'row col-12 justify-center items-center q-my-xs'
                    },
                    q = {
                        class: 'col-12 row justify-center q-my-md'
                    },
                    V = {
                        key: 0,
                        class: 'row justify-center items-center victory'
                    },
                    z = j((() => (0, s._)('img', {
                        src: I(),
                        style: {
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            height: '100%',
                            width: '100%'
                        }
                    }, null, -1))),
                    Y = {
                        class: 'col-5 text-center'
                    },
                    T = {
                        class: 'row col-2 text-center',
                        style: {
                            position: 'relative',
                            top: '150px'
                        }
                    },
                    S = {
                        class: 'row col-12 justify-center'
                    },
                    Q = {
                        class: 'col-5 text-center'
                    },
                    H = {
                        class: 'text-h6'
                    },
                    F = {
                        class: 'q-gutter-sm row justify-center'
                    };

                function B(t, e, i, l, n, o) {
                    const r = (0, s.up)('menu-component'),
                        a = (0, s.up)('player-component'),
                        c = (0, s.up)('q-btn'),
                        d = (0, s.up)('dice-component'),
                        u = (0, s.up)('q-radio'),
                        v = (0, s.up)('q-card-section'),
                        h = (0, s.up)('q-card-actions'),
                        m = (0, s.up)('q-card'),
                        p = (0, s.up)('q-dialog'),
                        g = (0, s.up)('q-page');
                    return (0, s.wg)(),
                        (0, s.j4)(g, {
                            class: 'row items-center justify-evenly'
                        }, {
                            default:
                                (0, s.w5)((() => {
                                    var i,
                                        l,
                                        n,
                                        o,
                                        g,
                                        w,
                                        y;
                                    return [(0, s._)('div', U, [
                                            t.gaming || t.isOver ? (0, s.kq)('', !0) : ((0, s.wg)(), (0, s.j4)(r, {
                                                key: 0,
                                                onStartGame: t.startGame
                                            }, null, 8, [
                                                'onStartGame'
                                            ])),
                                            t.gaming && !t.isOver ? ((0, s.wg)(), (0, s.iD)('div', L, [
                                                (0, s._)('div', Z, [
                                                    (0, s._)('div', G, [
                                                        (0, s.Wm)(a, {
                                                            player: t.black,
                                                            class: 'row col-12',
                                                            onPlace: t.onPlace
                                                        }, null, 8, [
                                                            'player',
                                                            'onPlace'
                                                        ])
                                                    ]),
                                                    (0, s._)('div', N, [
                                                        (0, s.Wm)(a, {
                                                            player: t.white,
                                                            class: 'row col-12',
                                                            onPlace: t.onPlace
                                                        }, null, 8, [
                                                            'player',
                                                            'onPlace'
                                                        ])
                                                    ]),
                                                    (0, s._)('div', A, [
                                                        (0, s._)('div', E, [
                                                            (0, s.Wm)(c, {
                                                                color: 'primary',
                                                                onClick: t.controlDice,
                                                                disable: !t.rollable
                                                            }, {
                                                                default:
                                                                    (0, s.w5)((() => [(0, s.Uk)((0, R.zw)(t.rolling ? '停止' : '开始'), 1)])),
                                                                _: 1
                                                            }, 8, [
                                                                'onClick',
                                                                'disable'
                                                            ])
                                                        ]),
                                                        'CHANLLENG' == (null === (i = t.current) || void 0 === i ? void 0 : i.action) ? ((0, s.wg)(), (0, s.iD)('div', O, [
                                                            (0, s._)('strong', null, '竞逐先手权，请' + (0, R.zw)(t.current.name) + '投掷骰子', 1)
                                                        ])) : (0, s.kq)('', !0),
                                                        'ROLL' == (null === (l = t.current) || void 0 === l ? void 0 : l.action) ? ((0, s.wg)(), (0, s.iD)('div', P, [
                                                            (0, s._)('strong', null, '请' + (0, R.zw)(t.current.name) + '投掷骰子', 1)
                                                        ])) : (0, s.kq)('', !0),
                                                        'PLACE' == (null === (n = t.current) || void 0 === n ? void 0 : n.action) ? ((0, s.wg)(), (0, s.iD)('div', M, [
                                                            (0, s._)('strong', null, '请' + (0, R.zw)(t.current.name) + '选择骰子放置的位置', 1)
                                                        ])) : (0, s.kq)('', !0),
                                                        (0, s._)('div', W, [
                                                            (0, s.Wm)(d, {
                                                                rolling: t.rolling,
                                                                style: {
                                                                    width: '100px',
                                                                    height: '100px'
                                                                },
                                                                onRolled: t.rolled
                                                            }, null, 8, [
                                                                'rolling',
                                                                'onRolled'
                                                            ])
                                                        ])
                                                    ])
                                                ]),
                                                (0, s._)('div', q, [
                                                    (0, s.Wm)(c, {
                                                        color: 'primary',
                                                        onClick: t.toMainPage,
                                                        class: 'q-ma-md'
                                                    }, {
                                                        default:
                                                            (0, s.w5)((() => [(0, s.Uk)('返回主菜单')])),
                                                        _: 1
                                                    }, 8, [
                                                        'onClick'
                                                    ])
                                                ])
                                            ])) : (0, s.kq)('', !0)
                                        ]),
                                        t.isOver ? ((0, s.wg)(), (0, s.iD)('div', V, [
                                            z,
                                            (0, s._)('div', Y, (0, R.zw)(null === (o = t.black) || void 0 === o ? void 0 : o.name) + ': ' + (0, R.zw)(null === (g = t.black) || void 0 === g ? void 0 : g.score) + '分 ', 1),
                                            (0, s._)('div', T, [
                                                (0, s._)('div', S, [
                                                    (0, s.Wm)(c, {
                                                        color: 'primary',
                                                        onClick: t.startAgain,
                                                        class: 'q-ma-md'
                                                    }, {
                                                        default:
                                                            (0, s.w5)((() => [(0, s.Uk)('再来一局')])),
                                                        _: 1
                                                    }, 8, [
                                                        'onClick'
                                                    ]),
                                                    (0, s.Wm)(c, {
                                                        color: 'primary',
                                                        onClick: t.toMainPage,
                                                        class: 'q-ma-md'
                                                    }, {
                                                        default:
                                                            (0, s.w5)((() => [(0, s.Uk)('返回主菜单')])),
                                                        _: 1
                                                    }, 8, [
                                                        'onClick'
                                                    ])
                                                ])
                                            ]),
                                            (0, s._)('div', Q, (0, R.zw)(null === (w = t.white) || void 0 === w ? void 0 : w.name) + ': ' + (0, R.zw)(null === (y = t.white) || void 0 === y ? void 0 : y.score) + '分 ', 1)
                                        ])) : (0, s.kq)('', !0),
                                        (0, s.Wm)(p, {
                                            modelValue: t.chosingChanlleng,
                                            'onUpdate:modelValue': e[2] || (e[2] = e => t.chosingChanlleng = e),
                                            persistent: ''
                                        }, {
                                            default:
                                                (0, s.w5)((() => [(0, s.Wm)(m, {
                                                    class: 'q-pa-lg'
                                                }, {
                                                    default:
                                                        (0, s.w5)((() => [(0, s.Wm)(v, {
                                                                class: 'q-pa-xs'
                                                            }, {
                                                                default:
                                                                    (0, s.w5)((() => {
                                                                        var i,
                                                                            l,
                                                                            n,
                                                                            o,
                                                                            r;
                                                                        return [(0, s._)('div', H, [
                                                                                (0, s._)('strong', null, '请 ' + (0, R.zw)(null === (i = t.decideUser) || void 0 === i ? void 0 : i.name) + ' 选择先投掷骰子的玩家', 1)
                                                                            ]),
                                                                            (0, s._)('div', F, [
                                                                                (0, s.Wm)(u, {
                                                                                    class: 'q-mx-md',
                                                                                    modelValue: t.firstUserName,
                                                                                    'onUpdate:modelValue': e[0] || (e[0] = e => t.firstUserName = e),
                                                                                    val: null === (l = t.black) || void 0 === l ? void 0 : l.name,
                                                                                    label: null === (n = t.black) || void 0 === n ? void 0 : n.name
                                                                                }, null, 8, [
                                                                                    'modelValue',
                                                                                    'val',
                                                                                    'label'
                                                                                ]),
                                                                                (0, s.Wm)(u, {
                                                                                    class: 'q-mx-md',
                                                                                    modelValue: t.firstUserName,
                                                                                    'onUpdate:modelValue': e[1] || (e[1] = e => t.firstUserName = e),
                                                                                    val: null === (o = t.white) || void 0 === o ? void 0 : o.name,
                                                                                    label: null === (r = t.white) || void 0 === r ? void 0 : r.name
                                                                                }, null, 8, [
                                                                                    'modelValue',
                                                                                    'val',
                                                                                    'label'
                                                                                ])
                                                                            ])
                                                                        ]
                                                                    })),
                                                                _: 1
                                                            }),
                                                            (0, s.Wm)(h, {
                                                                class: 'row justify-center'
                                                            }, {
                                                                default:
                                                                    (0, s.w5)((() => {
                                                                        var e;
                                                                        return [(0, s.Wm)(c, {
                                                                            label: '确定',
                                                                            onClick: t.startPlay,
                                                                            color: 'primary',
                                                                            disable: null === (e = t.decideUser) || void 0 === e ? void 0 : e.isBot
                                                                        }, null, 8, [
                                                                            'onClick',
                                                                            'disable'
                                                                        ])]
                                                                    })),
                                                                _: 1
                                                            })
                                                        ])),
                                                    _: 1
                                                })])),
                                            _: 1
                                        }, 8, [
                                            'modelValue'
                                        ])
                                    ]
                                })),
                            _: 1
                        })
                }
                var J = i(346),
                    X = i.n(J),
                    K = i(4661),
                    $ = i.n(K),
                    tt = i(618),
                    et = i.n(tt);
                const it = t => ((0, s.dD)('data-v-62c7cd3e'), t = t(), (0, s.Cn)(), t),
                    lt = {
                        class: 'row justify-center'
                    },
                    nt = {
                        class: 'row col-12 justify-center q-my-lg player'
                    },
                    ot = {
                        class: 'row items-end',
                        style: {
                            height: '50px'
                        }
                    },
                    st = {
                        key: 0,
                        style: {
                            width: '40px'
                        }
                    },
                    rt = {
                        style: {
                            position: 'relative'
                        }
                    },
                    at = {
                        key: 0,
                        src: X(),
                        alt: 'bot',
                        height: '64',
                        style: {
                            position: 'absolute',
                            top: '-40px'
                        }
                    },
                    ct = {
                        class: 'container row col-12'
                    },
                    dt = it((() => (0, s._)('img', {
                        src: $(),
                        style: {
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            height: '100%'
                        }
                    }, null, -1))),
                    ut = {
                        key: 0,
                        style: {
                            width: '60%',
                            height: '60%'
                        }
                    },
                    vt = [
                        'onClick'
                    ];

                function ht(t, e, i, l, n, o) {
                    var r,
                        a;
                    const c = (0, s.up)('dice-component');
                    return (0, s.wg)(),
                        (0, s.iD)('div', lt, [
                            (0, s._)('div', nt, [
                                (0, s._)('div', ot, [
                                    (0, s._)('table', null, [
                                        (0, s._)('tr', null, [
                                            (0, s._)('td', null, [
                                                (null === (r = t.player) || void 0 === r ? void 0 : r.challengeDot) ? ((0, s.wg)(), (0, s.iD)('div', st, [
                                                    (0, s.Wm)(c, {
                                                        dot: null === (a = t.player) || void 0 === a ? void 0 : a.challengeDot
                                                    }, null, 8, [
                                                        'dot'
                                                    ])
                                                ])) : (0, s.kq)('', !0)
                                            ]),
                                            (0, s._)('td', null, [
                                                (0, s._)('strong', null, (0, R.zw)(t.player.name), 1)
                                            ]),
                                            (0, s._)('td', null, [
                                                (0, s._)('div', rt, [
                                                    t.player.isBot ? ((0, s.wg)(), (0, s.iD)('img', at)) : (0, s.kq)('', !0)
                                                ])
                                            ])
                                        ])
                                    ])
                                ])
                            ]),
                            (0, s._)('div', ct, [
                                dt,
                                ((0, s.wg)(!0), (0, s.iD)(s.HY, null, (0, s.Ko)(t.cells, ((e, i) => ((0, s.wg)(), (0, s.iD)(s.HY, null, [
                                    ((0, s.wg)(!0), (0, s.iD)(s.HY, null, (0, s.Ko)(e, ((e, l) => ((0, s.wg)(), (0, s.iD)('div', {
                                        key: `${ i },${ l }`
                                    }, [
                                        0 != e ? ((0, s.wg)(), (0, s.iD)('div', ut, [
                                            (0, s.Wm)(c, {
                                                dot: e
                                            }, null, 8, [
                                                'dot'
                                            ])
                                        ])) : t.isPlace ? ((0, s.wg)(), (0, s.iD)('img', {
                                            key: 1,
                                            onClick: () => t.emitPlace(i, l),
                                            src: et(),
                                            style: {
                                                'z-index': '1'
                                            },
                                            alt: 'Click Here'
                                        }, null, 8, vt)) : (0, s.kq)('', !0)
                                    ])))), 128))
                                ], 64)))), 256))
                            ])
                        ])
                }
                var mt,
                    pt;

                function gt(t, e, i, l, n, o) {
                    const r = (0, s.up)('one-component'),
                        a = (0, s.up)('two-component'),
                        c = (0, s.up)('three-component'),
                        d = (0, s.up)('four-component'),
                        u = (0, s.up)('five-component'),
                        v = (0, s.up)('six-component');
                    return 1 == t.innerValue ? ((0, s.wg)(), (0, s.j4)(r, {
                        key: 0
                    })) : 2 == t.innerValue ? ((0, s.wg)(), (0, s.j4)(a, {
                        key: 1
                    })) : 3 == t.innerValue ? ((0, s.wg)(), (0, s.j4)(c, {
                        key: 2
                    })) : 4 == t.innerValue ? ((0, s.wg)(), (0, s.j4)(d, {
                        key: 3
                    })) : 5 == t.innerValue ? ((0, s.wg)(), (0, s.j4)(u, {
                        key: 4
                    })) : 6 == t.innerValue ? ((0, s.wg)(), (0, s.j4)(v, {
                        key: 5
                    })) : (0, s.kq)('', !0)
                }(function(t) {
                    t['PVP'] = 'PVP',
                        t['PVC'] = 'PVC'
                })(mt || (mt = {})),
                function(t) {
                    t['IDLE'] = 'IDEL',
                        t['CHANLLENG'] = 'CHANLLENG',
                        t['ROLL'] = 'ROLL',
                        t['PLACE'] = 'PLACE',
                        t['OVER'] = 'OVER'
                }(pt || (pt = {}));
                const wt = t => ((0, s.dD)('data-v-0c933aea'), t = t(), (0, s.Cn)(), t),
                    yt = {
                        class: 'dice'
                    },
                    bt = wt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    ft = wt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    kt = wt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    xt = wt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    _t = wt((() => (0, s._)('div', null, [
                        (0, s._)('div', {
                            class: 'dot'
                        })
                    ], -1))),
                    Dt = wt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    Rt = wt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    Ct = wt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    It = wt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    jt = [
                        bt,
                        ft,
                        kt,
                        xt,
                        _t,
                        Dt,
                        Rt,
                        Ct,
                        It
                    ];

                function Ut(t, e, i, l, n, o) {
                    return (0, s.wg)(),
                        (0, s.iD)('div', yt, jt)
                }
                const Lt = (0, s.aZ)({
                        name: 'OneComponent',
                        components: {},
                        setup() {
                            return {}
                        }
                    }),
                    Zt = (0, c.Z)(Lt, [
                        ['render',
                            Ut
                        ],
                        [
                            '__scopeId',
                            'data-v-0c933aea'
                        ]
                    ]),
                    Gt = Zt,
                    Nt = t => ((0, s.dD)('data-v-625b2d86'), t = t(), (0, s.Cn)(), t),
                    At = {
                        class: 'dice'
                    },
                    Et = Nt((() => (0, s._)('div', null, [
                        (0, s._)('div', {
                            class: 'dot two-top'
                        })
                    ], -1))),
                    Ot = Nt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    Pt = Nt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    Mt = Nt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    Wt = Nt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    qt = Nt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    Vt = Nt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    zt = Nt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    Yt = Nt((() => (0, s._)('div', null, [
                        (0, s._)('div', {
                            class: 'dot two-bottom'
                        })
                    ], -1))),
                    Tt = [
                        Et,
                        Ot,
                        Pt,
                        Mt,
                        Wt,
                        qt,
                        Vt,
                        zt,
                        Yt
                    ];

                function St(t, e, i, l, n, o) {
                    return (0, s.wg)(),
                        (0, s.iD)('div', At, Tt)
                }
                const Qt = (0, s.aZ)({
                        name: 'TwoComponent',
                        components: {},
                        setup() {
                            return {}
                        }
                    }),
                    Ht = (0, c.Z)(Qt, [
                        ['render',
                            St
                        ],
                        [
                            '__scopeId',
                            'data-v-625b2d86'
                        ]
                    ]),
                    Ft = Ht,
                    Bt = t => ((0, s.dD)('data-v-d8c4aed4'), t = t(), (0, s.Cn)(), t),
                    Jt = {
                        class: 'dice'
                    },
                    Xt = Bt((() => (0, s._)('div', null, [
                        (0, s._)('div', {
                            class: 'dot'
                        })
                    ], -1))),
                    Kt = Bt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    $t = Bt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    te = Bt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    ee = Bt((() => (0, s._)('div', null, [
                        (0, s._)('div', {
                            class: 'dot'
                        })
                    ], -1))),
                    ie = Bt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    le = Bt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    ne = Bt((() => (0, s._)('div', null, [
                        (0, s._)('div')
                    ], -1))),
                    oe = Bt((() => (0, s._)('div', null, [
                        (0, s._)('div', {
                            class: 'dot'
                        })
                    ], -1))),
                    se = [
                        Xt,
                        Kt,
                        $t,
                        te,
                        ee,
                        ie,
                        le,
                        ne,
                        oe
                    ];

                function re(t, e, i, l, n, o) {
                    return (0, s.wg)(),
                        (0, s.iD)('div', Jt, se)
                }
                const ae = (0, s.aZ)({
                        name: 'ThreeComponent',
                        components: {},
                        setup() {
                            return {}
                        }
                    }),
                    ce = (0, c.Z)(ae, [
                        ['render',
                            re
                        ],
                        [
                            '__scopeId',
                            'data-v-d8c4aed4'
                        ]
                    ]),
                    de = ce,
                    ue = t => ((0, s.dD)('data-v-a51c9012'), t = t(), (0, s.Cn)(), t),
                    ve = {
                        class: 'dice'
                    },
                    he = ue((() => (0, s._)('div', null, [
                        (0, s._)('div', {
                            class: 'dot'
                        })
                    ], -1))),
                    me = ue((() => (0, s._)('div', null, [
                        (0, s._)('div', {
                            class: 'dot'
                        })
                    ], -1))),
                    pe = ue((() => (0, s._)('div', null, [
                        (0, s._)('div', {
                            class: 'dot'
                        })
                    ], -1))),
                    ge = ue((() => (0, s._)('div', null, [
                        (0, s._)('div', {
                            class: 'dot'
                        })
                    ], -1))),
                    we = [
                        he,
                        me,
                        pe,
                        ge
                    ];

                function ye(t, e, i, l, n, o) {
                    return (0, s.wg)(),
                        (0, s.iD)('div', ve, we)
                }
                const be = (0, s.aZ)({
                        name: 'FourComponent',
                        components: {},
                        setup() {
                            return {}
                        }
                    }),
                    fe = (0, c.Z)(be, [
                        ['render',
                            ye
                        ],
                        [
                            '__scopeId',
                            'data-v-a51c9012'
                        ]
                    ]),
                    ke = fe,
                    xe = {
                        class: 'dice'
                    },
                    _e = (0, s.uE)('<div data-v-2da2908e><div class="dot" data-v-2da2908e></div></div><div data-v-2da2908e><div data-v-2da2908e></div></div><div data-v-2da2908e><div class="dot" data-v-2da2908e></div></div><div data-v-2da2908e><div data-v-2da2908e></div></div><div data-v-2da2908e><div class="dot" data-v-2da2908e></div></div><div data-v-2da2908e><div data-v-2da2908e></div></div><div data-v-2da2908e><div class="dot" data-v-2da2908e></div></div><div data-v-2da2908e><div data-v-2da2908e></div></div><div data-v-2da2908e><div class="dot" data-v-2da2908e></div></div>', 9),
                    De = [
                        _e
                    ];

                function Re(t, e, i, l, n, o) {
                    return (0, s.wg)(),
                        (0, s.iD)('div', xe, De)
                }
                const Ce = (0, s.aZ)({
                        name: 'FiveComponent',
                        components: {},
                        setup() {
                            return {}
                        }
                    }),
                    Ie = (0, c.Z)(Ce, [
                        ['render',
                            Re
                        ],
                        [
                            '__scopeId',
                            'data-v-2da2908e'
                        ]
                    ]),
                    je = Ie,
                    Ue = {
                        class: 'dice'
                    },
                    Le = (0, s.uE)('<div data-v-691ee1be><div class="dot six-left" data-v-691ee1be></div></div><div data-v-691ee1be><div data-v-691ee1be></div></div><div data-v-691ee1be><div class="dot six-right" data-v-691ee1be></div></div><div data-v-691ee1be><div class="dot six-left" data-v-691ee1be></div></div><div data-v-691ee1be><div data-v-691ee1be></div></div><div data-v-691ee1be><div class="dot six-right" data-v-691ee1be></div></div><div data-v-691ee1be><div class="dot six-left" data-v-691ee1be></div></div><div data-v-691ee1be><div data-v-691ee1be></div></div><div data-v-691ee1be><div class="dot six-right" data-v-691ee1be></div></div>', 9),
                    Ze = [
                        Le
                    ];

                function Ge(t, e, i, l, n, o) {
                    return (0, s.wg)(),
                        (0, s.iD)('div', Ue, Ze)
                }
                const Ne = (0, s.aZ)({
                        name: 'SixComponent',
                        components: {},
                        setup() {
                            return {}
                        }
                    }),
                    Ae = (0, c.Z)(Ne, [
                        ['render',
                            Ge
                        ],
                        [
                            '__scopeId',
                            'data-v-691ee1be'
                        ]
                    ]),
                    Ee = Ae,
                    Oe = (0, s.aZ)({
                        name: 'DiceComponent',
                        props: {
                            dot: {
                                type: Number
                            },
                            rolling: {
                                type: Boolean
                            }
                        },
                        components: {
                            OneComponent: Gt,
                            TwoComponent: Ft,
                            ThreeComponent: de,
                            FourComponent: ke,
                            FiveComponent: je,
                            SixComponent: Ee
                        },
                        setup() {
                            const t = (0, o.iH)(1),
                                e = (0, o.iH)(!1);
                            return {
                                innerValue: t,
                                innerRolling: e
                            }
                        },
                        created() {
                            this.dot ? this.innerValue = this.dot : this.innerValue = this.random(),
                                this.innerRolling = this.rolling,
                                this.innerRolling && this.roll()
                        },
                        watch: {
                            rolling() {
                                this.innerRolling = this.rolling,
                                    this.innerRolling ? this.roll() : this.innerRolling = !1
                            }
                        },
                        methods: {
                            random() {
                                let t = 1,
                                    e = 6;
                                return t = Math.ceil(t),
                                    e = Math.floor(e),
                                    Math.floor(Math.random() * (e - t + 1)) + t
                            },
                            roll() {
                                setTimeout((() => {
                                    this.innerValue = this.random(),
                                        this.innerRolling ? this.roll() : this.$emit('rolled', this.innerValue)
                                }), 100)
                            }
                        }
                    }),
                    Pe = (0, c.Z)(Oe, [
                        ['render',
                            gt
                        ]
                    ]),
                    Me = Pe,
                    We = (0, s.aZ)({
                        name: 'PlayerComponent',
                        components: {
                            DiceComponent: Me
                        },
                        props: {
                            player: {
                                type: Object,
                                required: !0
                            }
                        },
                        setup: () => ({}),
                        methods: {
                            emitPlace(t, e) {
                                this.player.isBot || this.$emit('place', t, e)
                            }
                        },
                        computed: {
                            isIdle() {
                                return this.player.action == pt.IDLE
                            },
                            isRoll() {
                                return this.player.action == pt.ROLL
                            },
                            isPlace() {
                                return this.player.action == pt.PLACE
                            },
                            cells() {
                                const t = [
                                    [],
                                    [],
                                    []
                                ];
                                let e = 0,
                                    i = 0;
                                for (const l of this.player.grid.rows()) {
                                    i = 0;
                                    for (const n of l) t[e][i] = n,
                                        i++;
                                    e++
                                }
                                return t
                            }
                        }
                    }),
                    qe = (0, c.Z)(We, [
                        ['render',
                            ht
                        ],
                        [
                            '__scopeId',
                            'data-v-62c7cd3e'
                        ]
                    ]),
                    Ve = qe,
                    ze = {
                        class: 'row col-12 justify-center items-center q-mt-lg'
                    },
                    Ye = {
                        class: 'row col-12 justify-center q-my-lg'
                    },
                    Te = {
                        class: 'row col-12 justify-center q-my-lg'
                    },
                    Se = {
                        class: 'row col-12 justify-center q-my-lg'
                    },
                    Qe = {
                        class: 'row col-12 justify-center q-my-lg'
                    };

                function He(t, e, i, l, n, o) {
                    const r = (0, s.up)('q-btn'),
                        a = (0, s.up)('q-input'),
                        c = (0, s.up)('q-card-section'),
                        d = (0, s.up)('q-card-actions'),
                        u = (0, s.up)('q-card'),
                        v = (0, s.up)('q-dialog'),
                        h = (0, s.Q2)('close-popup');
                    return (0, s.wg)(),
                        (0, s.iD)('div', ze, [
                            (0, s._)('div', Ye, [
                                (0, s.Wm)(r, {
                                    class: 'menu-btn',
                                    color: 'primary',
                                    size: '1.3em',
                                    onClick: e[0] || (e[0] = e => t.showSetting('PVP'))
                                }, {
                                    default:
                                        (0, s.w5)((() => [(0, s.Uk)(' 本地对战 ')])),
                                    _: 1
                                })
                            ]),
                            (0, s._)('div', Te, [
                                (0, s.Wm)(r, {
                                    class: 'menu-btn',
                                    color: 'primary',
                                    size: '1.3em',
                                    onClick: e[1] || (e[1] = e => t.showSetting('PVC'))
                                }, {
                                    default:
                                        (0, s.w5)((() => [(0, s.Uk)(' 人机游戏 ')])),
                                    _: 1
                                })
                            ]),
                            (0, s._)('div', Se, [
                                (0, s.Wm)(r, {
                                    class: 'menu-btn',
                                    color: 'primary',
                                    size: '1.3em',
                                    onClick: e[2] || (e[2] = e => t.$router.push('/standing'))
                                }, {
                                    default:
                                        (0, s.w5)((() => [(0, s.Uk)(' 积分榜 ')])),
                                    _: 1
                                })
                            ]),
                            (0, s._)('div', Qe, [
                                (0, s.Wm)(r, {
                                    class: 'menu-btn',
                                    color: 'primary',
                                    size: '1.3em',
                                    onClick: e[3] || (e[3] = e => t.$router.push('/instruction'))
                                }, {
                                    default:
                                        (0, s.w5)((() => [(0, s.Uk)(' 游戏说明 ')])),
                                    _: 1
                                })
                            ]),
                            (0, s.Wm)(v, {
                                persistent: '',
                                modelValue: t.setting,
                                'onUpdate:modelValue': e[6] || (e[6] = e => t.setting = e)
                            }, {
                                default:
                                    (0, s.w5)((() => [(0, s.Wm)(u, {
                                        style: {
                                            'min-width': '400px'
                                        }
                                    }, {
                                        default:
                                            (0, s.w5)((() => [(0, s.Wm)(c, null, {
                                                    default:
                                                        (0, s.w5)((() => [(0, s.Wm)(a, {
                                                                modelValue: t.blackName,
                                                                'onUpdate:modelValue': e[4] || (e[4] = e => t.blackName = e),
                                                                outlined: '',
                                                                label: 'PVP' == t.mode ? '请输入玩家A昵称' : '请输入玩家昵称',
                                                                class: 'q-my-xs'
                                                            }, null, 8, [
                                                                'modelValue',
                                                                'label'
                                                            ]),
                                                            'PVP' == t.mode ? ((0, s.wg)(), (0, s.j4)(a, {
                                                                key: 0,
                                                                modelValue: t.whiteName,
                                                                'onUpdate:modelValue': e[5] || (e[5] = e => t.whiteName = e),
                                                                outlined: '',
                                                                label: '请输入玩家B昵称',
                                                                class: 'q-my-xs'
                                                            }, null, 8, [
                                                                'modelValue'
                                                            ])) : (0, s.kq)('', !0)
                                                        ])),
                                                    _: 1
                                                }),
                                                (0, s.Wm)(d, {
                                                    class: 'text-primary'
                                                }, {
                                                    default:
                                                        (0, s.w5)((() => [(0, s.wy)((0, s.Wm)(r, {
                                                                flat: '',
                                                                label: '确认',
                                                                onClick: t.confirmSetting
                                                            }, null, 8, [
                                                                'onClick'
                                                            ]), [
                                                                [h]
                                                            ]),
                                                            (0, s.wy)((0, s.Wm)(r, {
                                                                flat: '',
                                                                label: '取消',
                                                                onClick: t.cancelSetting
                                                            }, null, 8, [
                                                                'onClick'
                                                            ]), [
                                                                [h]
                                                            ])
                                                        ])),
                                                    _: 1
                                                })
                                            ])),
                                        _: 1
                                    })])),
                                _: 1
                            }, 8, [
                                'modelValue'
                            ])
                        ])
                }
                const Fe = (t, e, i, l) => {
                        l = t.checkGridValue(l);
                        for (const [n,
                                o
                            ] of t.row(e, !0)) n === l && t._unset(e, o)
                    },
                    Be = Fe;

                function Je(t, e = 9) {
                    return t.toString(2).padStart(e, '0')
                }

                function Xe(t, e) {
                    return Math.floor(Math.random() * (e - t + 1) + t)
                }
                let Ke = 0;
                class $e {
                    constructor(t) {
                        var e;
                        this.id = ++Ke,
                            t instanceof $e ? (this.name = `Gird(${ this.id })`, this.values = [
                                ...t.values
                            ], this.opt = t.opt) : (this.name = `Gird(${ null !== (e = null === t || void 0 === t ? void 0 : t.alias) && void 0 !== e ? e : this.id })`, this.opt = this.parseGridParams(t), this.values = new Array(this.opt.rowsPerGrid).fill(0))
                    }
                    parseGridParams(t) {
                        const {
                            cellValueRange: e,
                            size: i,
                            rule: l = Be
                        } = null !== t && void 0 !== t ? t : {};
                        let n = 3,
                            o = 3;
                        Array.isArray(i) ? (i.length && (n = o = i[0]), i.length > 1 && (o = i[1])) : 'number' === typeof i && (n = o = i);
                        const [s = 1,
                            r = 6
                        ] = null !== e && void 0 !== e ? e : [];
                        if (s < 0 || r < 0) throw new Error(`[${ this.name }] Unsuportted negative cell value: cellValueRange=(${ s },${ r })`);
                        if (s > r) throw new Error(`[${ this.name }] Invalid cell value range: (${ s },${ r })`);
                        const a = r.toString(2).length,
                            c = a * o;
                        if (c > 32) throw new Error(`[${ this.name }] Unsuportted size for grid:
          size=(${ n },${ o }),
          cellValueRange=(${ s },${ r }),
          numOfCellValBit=(${ a })`);
                        return Object.freeze({
                            rule: l,
                            minCellVal: s,
                            maxCellVal: r,
                            rowsPerGrid: n,
                            cellsPreRow: o,
                            maxBitIndex: (c - 1) * a,
                            bitPreRow: c,
                            numOfCellValBit: a,
                            mask: (1 << a) - 1
                        })
                    }
                    checkGridIndex(t, e) {
                        let i = !0;
                        if ((t < 0 || t > this.opt.rowsPerGrid - 1) && (i = !1), 'undefined' !== typeof e && (e < 0 || e > this.opt.cellsPreRow - 1) && (i = !1), !i) throw new Error(`[${ this.name }] Invalid grid index: (${ t },${ e })`)
                    }
                    checkGridValue(t) {
                            const {
                                minCellVal: e,
                                maxCellVal: i
                            } = this.opt;
                            if (t < e || t > i) throw new Error(`[${ this.name }] Invalid grid value: ${ t }`);
                            return ~~t
                        } *
                        _row(t, e = !1) {
                            const {
                                mask: i,
                                bitPreRow: l,
                                numOfCellValBit: n
                            } = this.opt;
                            for (let o = 0; o < l; o += n) {
                                const l = t >> o & i;
                                e ? yield [l,
                                    o
                                ] : yield l
                            }
                        }
                    _colToBitIdx(t) {
                        return t * this.opt.numOfCellValBit
                    }
                    _get(t, e) {
                        return this.values[t] >> e & this.opt.mask
                    }
                    _set(t, e, i) {
                        return this.values[t] |= i << e,
                            this
                    }
                    _unset(t, e) {
                        return this.values[t] &= ~(this.opt.mask << e),
                            this
                    }
                    _empty(t, e) {
                        return 0 === this._get(t, e)
                    }
                    _isRowFull(t) {
                        for (const e of this._row(t))
                            if (0 === e) return !1;
                        return !0
                    }
                    _settleRowScore(t) {
                        var e;
                        const i = new Map;
                        for (const n of this._row(t)) i.set(n, (null !== (e = i.get(n)) && void 0 !== e ? e : 0) + 1);
                        let l = 0;
                        for (const [n,
                                o
                            ] of i) l += n * Math.pow(o, 2);
                        return l
                    }
                    get(t, e) {
                        return this.checkGridIndex(t, e),
                            this._get(t, this._colToBitIdx(e))
                    }
                    isEmpty(t, e) {
                        return this.checkGridIndex(t, e),
                            this._empty(t, this._colToBitIdx(e))
                    }
                    set(t, e, i, l = !1) {
                        this.checkGridIndex(t, e),
                            i = this.checkGridValue(i);
                        const n = this._colToBitIdx(e);
                        if (!l && !this._empty(t, n)) throw Error(`Grid index (${ t },${ e }) already been set(${ Je(this.values[t], this.opt.bitPreRow) })
  ${ this.toString() }
          `);
                        return this._set(t, n, i)
                    }
                    unset(t, e) {
                        return this.checkGridIndex(t, e),
                            this._unset(t, this._colToBitIdx(e))
                    }
                    check(t, e) {
                        return this.opt.rule(this, t, 0, e),
                            this
                    }
                    isRowFull(t) {
                        return this.checkGridIndex(t),
                            this._isRowFull(this.values[t])
                    }
                    isFull() {
                        return this.values.every((t => this._isRowFull(t)))
                    }
                    settleRowScore(t) {
                        return this.checkGridIndex(t),
                            this._settleRowScore(this.values[t])
                    }
                    settleScore() {
                            let t = 0;
                            for (const e of this.values) t += this._settleRowScore(e);
                            return t
                        } *
                        rowEmptyCells(t) {
                            this.checkGridIndex(t);
                            let e = 0;
                            for (const i of this._row(this.values[t])) 0 === i && (yield [t,
                                    e
                                ]),
                                e++
                        } *
                        emptyCells() {
                            const {
                                rowsPerGrid: t
                            } = this.opt;
                            for (let e = 0; e < t; e++) {
                                const t = this.values[e];
                                this._isRowFull(t) || (yield [e, [
                                    ...this.rowEmptyCells(e)
                                ]])
                            }
                        }
                    getPlaceableRowIndexes() {
                        const t = [];
                        let e = 0;
                        for (const i of this.values) this._isRowFull(i) || t.push(e),
                            e++;
                        return t
                    }
                    static autoStep(t, e, i) {
                        var l;
                        let n = Number.MIN_SAFE_INTEGER;
                        const o = new Map;
                        for (const [r,
                                a
                            ] of e.emptyCells()) {
                            const l = a.length,
                                s = a[0],
                                c = s[1],
                                d = e.copy().set(r, c, t).settleScore(),
                                u = i.copy().check(r, t).settleScore(),
                                v = d + l - u;
                            let h = o.get(v);
                            h || (h = [], o.set(v, h)),
                                h.push(s),
                                v > n && (n = v)
                        }
                        if (!o.size) throw new Error(`Protagonist ${ e.name } is not placeable`);
                        const s = null !== (l = o.get(n)) && void 0 !== l ? l : [];
                        if (!s.length) throw new Error(`Protagonist ${ e.name } find villain grid min score faild`);
                        return s[Xe(0, s.length - 1)]
                    }
                    copy() {
                        return new $e(this)
                    }
                    reset() {
                        return this.values.fill(0),
                            this
                    }
                    update(t) {
                        const {
                            rowsPerGrid: e,
                            cellsPreRow: i
                        } = this.opt;
                        for (let l = 0; l < e; l++)
                            for (let e = 0; e < i; e++) this._set(l, this._colToBitIdx(e), t[l][e]);
                        return this
                    }
                    row(t, e = !1) {
                            return this.checkGridIndex(t),
                                this._row(this.values[t], e)
                        } *
                        rows() {
                            for (const t of this.values) yield [...this._row(t)]
                        } *
                        cells() {
                            for (const t of this.values) yield* this._row(t)
                        }
                        [
                            Symbol.iterator
                        ]() {
                            return this.cells()
                        }
                    toString() {
                        return `${ this.name }:
  [${ [...this.rows()].join(']\n[') }]
      `
                    }
                }
                const ti = $e,
                    ei = (0, s.aZ)({
                        name: 'MenuComponent',
                        components: {},
                        setup() {
                            const t = (0, o.iH)('玩家A'),
                                e = (0, o.iH)('玩家B'),
                                i = (0, o.iH)(!1),
                                l = (0, o.iH)();
                            return {
                                blackName: t,
                                whiteName: e,
                                setting: i,
                                mode: l
                            }
                        },
                        methods: {
                            showSetting(t) {
                                this.mode = t,
                                    this.setting = !0
                            },
                            cancelSetting() {
                                this.setting = !1,
                                    this.mode = void 0,
                                    this.blackName = '玩家A',
                                    this.whiteName = '玩家B'
                            },
                            confirmSetting() {
                                const t = {
                                        name: this.blackName,
                                        action: pt.IDLE,
                                        isBot: !1,
                                        challengeDot: 0,
                                        grid: new ti,
                                        score: 0
                                    },
                                    e = {
                                        name: this.mode == mt.PVC ? '电脑' : this.whiteName,
                                        action: pt.IDLE,
                                        isBot: this.mode == mt.PVC,
                                        challengeDot: 0,
                                        grid: new ti,
                                        score: 0
                                    };
                                this.$emit('startGame', t, e)
                            }
                        }
                    });
                var ii = i(5157),
                    li = i(7650),
                    ni = i(4458),
                    oi = i(3190),
                    si = i(1169),
                    ri = i(1821),
                    ai = i(2146);
                const ci = (0, c.Z)(ei, [
                        ['render',
                            He
                        ]
                    ]),
                    di = ci;

                function ui() {
                    const t = localStorage.getItem('standings');
                    if (!t) return [];
                    let e = [];
                    try {
                        e = JSON.parse(t)
                    } catch (i) {
                        return []
                    }
                    return e
                }

                function vi(t) {
                    const e = ui();
                    let i = !1;
                    for (const l of e)
                        if (l.name == t.name) {
                            l.score = t.score,
                                i = !0;
                            break
                        }
                    i || e.push(t),
                        e.sort(((t, e) => e.score - t.score)),
                        localStorage.setItem('standings', JSON.stringify(e))
                }
                x()(ei, 'components', {
                        QBtn: ii.Z,
                        QDialog: li.Z,
                        QCard: ni.Z,
                        QCardSection: oi.Z,
                        QInput: si.Z,
                        QCardActions: ri.Z
                    }),
                    x()(ei, 'directives', {
                        ClosePopup: ai.Z
                    });
                const hi = (0, s.aZ)({
                    name: 'IndexPage',
                    components: {
                        DiceComponent: Me,
                        PlayerComponent: Ve,
                        MenuComponent: di
                    },
                    setup() {
                        const t = (0, o.iH)(null),
                            e = (0, o.iH)(null),
                            i = (0, o.iH)(null),
                            l = (0, o.iH)(!1),
                            n = (0, o.iH)(!1),
                            r = (0, o.iH)(!1),
                            a = (0, o.iH)(null),
                            c = (0, o.iH)(),
                            d = (0, o.iH)(!1),
                            u = (0, o.iH)(null),
                            v = (0, o.iH)(null),
                            h = (0, s.Fl)((() => null != t.value && null != e.value)),
                            m = (0, s.Fl)((() => {
                                var l,
                                    n,
                                    o,
                                    s,
                                    r;
                                return ((null === (l = t.value) || void 0 === l ? void 0 : l.action) == pt.ROLL || (null === (n = e.value) || void 0 === n ? void 0 : n.action) == pt.ROLL || (null === (o = t.value) || void 0 === o ? void 0 : o.action) == pt.CHANLLENG || (null === (s = e.value) || void 0 === s ? void 0 : s.action) == pt.CHANLLENG) && !(null === (r = i.value) || void 0 === r ? void 0 : r.isBot)
                            }));
                        return {
                            black: t,
                            white: e,
                            current: i,
                            gaming: l,
                            rolling: n,
                            rolledDot: c,
                            isOver: r,
                            winner: a,
                            isGaming: h,
                            rollable: m,
                            chosingChanlleng: d,
                            firstUserName: u,
                            decideUser: v
                        }
                    },
                    methods: {
                        startGame(t, e) {
                            var i;
                            this.black = t,
                                this.white = e,
                                this.gaming = !0,
                                this.black.action = pt.CHANLLENG,
                                this.current = this.black,
                                this.firstUserName = null === (i = this.black) || void 0 === i ? void 0 : i.name
                        },
                        controlDice() {
                            this.rolling ? this.stopRollDice() : this.startRollDice()
                        },
                        startRollDice() {
                            this.rolling = !0
                        },
                        stopRollDice() {
                            this.rolling = !1
                        },
                        rolled(t) {
                            var e,
                                i,
                                l,
                                n,
                                o,
                                s,
                                r;
                            switch (this.rolling = !1, this.rolledDot = t, null === (e = this.current) || void 0 === e ? void 0 : e.action) {
                                case pt.CHANLLENG:
                                    this.current.challengeDot = t;
                                    const e = this.nextPlayer();
                                    e.action = pt.CHANLLENG,
                                        this.current = e,
                                        (null === (i = this.black) || void 0 === i ? void 0 : i.challengeDot) == (null === (l = this.white) || void 0 === l ? void 0 : l.challengeDot) && 0 != (null === (n = this.black) || void 0 === n ? void 0 : n.challengeDot) && 0 != (null === (o = this.white) || void 0 === o ? void 0 : o.challengeDot) && (this.black.challengeDot = 0, this.white.challengeDot = 0),
                                        this.isChallengeEnd() ? (this.decideUser = this.getDecideUser(), this.chosingChanlleng = !0, this.decideUser.isBot && (this.firstUserName = null === (s = this.black) || void 0 === s ? void 0 : s.name, setTimeout((() => {
                                            this.startPlay()
                                        }), 1500))) : this.current.isBot && setTimeout((() => {
                                            this.controlDice(),
                                                setTimeout((() => {
                                                    this.controlDice()
                                                }), 1800)
                                        }), 800);
                                    break;
                                case pt.ROLL:
                                    if (this.current.action = pt.PLACE, this.current.isBot) {
                                        const [t,
                                            e
                                        ] = $e.autoStep(this.rolledDot, null === (r = this.current) || void 0 === r ? void 0 : r.grid, this.nextPlayer().grid);
                                        setTimeout((() => {
                                            this.onPlace(t, e)
                                        }), 800)
                                    }
                                    break
                            }
                        },
                        onPlace(t, e) {
                            var i,
                                l,
                                n,
                                o;
                            const s = this.current,
                                r = this.nextPlayer(),
                                a = this.rolledDot;
                            if (s.grid.set(t, e, a), r.grid.check(t, a), s.grid.isFull()) return this.isOver = !0,
                                s.action = pt.OVER,
                                r.action = pt.OVER,
                                s.score = s.grid.settleScore(),
                                r.score = r.grid.settleScore(),
                                s.score > r.score ? this.winner = s : s.score < r.score && (this.winner = r),
                                vi({
                                    name: null === (i = this.black) || void 0 === i ? void 0 : i.name,
                                    score: null === (l = this.black) || void 0 === l ? void 0 : l.score
                                }),
                                void vi({
                                    name: null === (n = this.white) || void 0 === n ? void 0 : n.name,
                                    score: null === (o = this.white) || void 0 === o ? void 0 : o.score
                                });
                            s.action = pt.IDLE,
                                this.current = r,
                                this.current.action = pt.ROLL,
                                this.current.isBot && setTimeout((() => {
                                    this.controlDice(),
                                        setTimeout((() => {
                                            this.controlDice()
                                        }), 1800)
                                }), 800)
                        },
                        nextPlayer() {
                            return this.current == this.black ? this.white : this.current == this.white ? this.black : this.current
                        },
                        isChallengeEnd() {
                            var t,
                                e,
                                i,
                                l;
                            return (null === (t = this.black) || void 0 === t ? void 0 : t.challengeDot) != (null === (e = this.white) || void 0 === e ? void 0 : e.challengeDot) && 0 != (null === (i = this.black) || void 0 === i ? void 0 : i.challengeDot) && 0 != (null === (l = this.white) || void 0 === l ? void 0 : l.challengeDot)
                        },
                        getDecideUser() {
                            var t,
                                e,
                                i,
                                l,
                                n,
                                o,
                                s,
                                r;
                            return (null !== (e = null === (t = this.black) || void 0 === t ? void 0 : t.challengeDot) && void 0 !== e ? e : 0) > (null !== (l = null === (i = this.white) || void 0 === i ? void 0 : i.challengeDot) && void 0 !== l ? l : 0) ? this.black : (null !== (o = null === (n = this.black) || void 0 === n ? void 0 : n.challengeDot) && void 0 !== o ? o : 0) < (null !== (r = null === (s = this.white) || void 0 === s ? void 0 : s.challengeDot) && void 0 !== r ? r : 0) ? this.white : this.black
                        },
                        startPlay() {
                            var t;
                            this.current = this.getFirstUser(),
                                this.current.action = pt.ROLL,
                                this.nextPlayer().action = pt.IDLE,
                                this.chosingChanlleng = !1,
                                this.black.challengeDot = 0,
                                this.white.challengeDot = 0,
                                (null === (t = this.current) || void 0 === t ? void 0 : t.isBot) && setTimeout((() => {
                                    this.controlDice(),
                                        setTimeout((() => {
                                            this.controlDice()
                                        }), 2000)
                                }), 800)
                        },
                        getFirstUser() {
                            var t,
                                e;
                            return (null === (t = this.black) || void 0 === t ? void 0 : t.name) == this.firstUserName ? this.black : (null === (e = this.white) || void 0 === e || e.name, this.firstUserName, this.white)
                        },
                        toMainPage() {
                            window.location.href = ''
                        },
                        startAgain() {
                            var t,
                                e,
                                i,
                                l;
                            this.chosingChanlleng = !0,
                                this.black.action = pt.CHANLLENG,
                                this.white.action = pt.CHANLLENG,
                                this.decideUser = this.winner,
                                null === (t = this.black) || void 0 === t || t.grid.reset(),
                                null === (e = this.white) || void 0 === e || e.grid.reset(),
                                this.isOver = !1,
                                (null === (i = this.decideUser) || void 0 === i ? void 0 : i.isBot) && (this.firstUserName = null === (l = this.black) || void 0 === l ? void 0 : l.name, setTimeout((() => {
                                    this.startPlay()
                                }), 1500))
                        }
                    }
                });
                var mi = i(9885),
                    pi = i(926);
                const gi = (0, c.Z)(hi, [
                        ['render',
                            B
                        ],
                        [
                            '__scopeId',
                            'data-v-47be9041'
                        ]
                    ]),
                    wi = gi;
                x()(hi, 'components', {
                    QPage: mi.Z,
                    QBtn: ii.Z,
                    QDialog: li.Z,
                    QCard: ni.Z,
                    QCardSection: oi.Z,
                    QRadio: pi.Z,
                    QCardActions: ri.Z
                });
                var yi = i(919),
                    bi = i.n(yi),
                    fi = i(4626),
                    ki = i.n(fi),
                    xi = i(2981),
                    _i = i.n(xi);
                const Di = t => ((0, s.dD)('data-v-6c75565b'), t = t(), (0, s.Cn)(), t),
                    Ri = {
                        class: 'row col-11 items-start main'
                    },
                    Ci = Di((() => (0, s._)('div', {
                        class: 'col-12 text-center'
                    }, [
                        (0, s._)('strong', {
                            class: 'text-h3'
                        }, '玩法介绍')
                    ], -1))),
                    Ii = Di((() => (0, s._)('div', {
                        class: 'col-12 text-h5'
                    }, [
                        (0, s._)('strong', null, '1.游戏介绍')
                    ], -1))),
                    ji = Di((() => (0, s._)('div', {
                        class: 'text-body1 q-ml-md'
                    }, ' 两人用投掷骰子的方式尽量将自己区域内的九宫格填满，也可以用战术妨碍 对面填满格子，最后在比较两方的区域内的总数大小。 ', -1))),
                    Ui = Di((() => (0, s._)('div', {
                        class: 'col-12'
                    }, [
                        (0, s._)('strong', {
                            class: 'text-h5'
                        }, [
                            (0, s._)('strong', null, '2.游戏规则')
                        ]),
                        (0, s._)('div', {
                            class: 'q-ml-md'
                        }, [
                            (0, s._)('div', {
                                class: 'text-body1'
                            }, '本游戏分为三个阶段。'),
                            (0, s._)('div', {
                                class: 'text-h6'
                            }, [
                                (0, s._)('strong', null, '第一阶段：')
                            ]),
                            (0, s._)('div', {
                                class: 'text-body1 q-ml-md'
                            }, ' 游玩者总共有两个人，两人各投掷一次骰子，点数大的决定先后顺序，如果 相同就重新投掷一次直到出现不同点数为止。 '),
                            (0, s._)('div', {
                                class: 'text-h6'
                            }, [
                                (0, s._)('strong', null, '第二阶段：')
                            ]),
                            (0, s._)('div', {
                                class: 'text-body1 q-ml-md'
                            }, ' 1、 由先攻一方投掷骰子，双方轮流投掷骰子，将投掷所得的点数先后置入自 己九宫格未填写的格子处，如图 '),
                            (0, s._)('div', {
                                class: 'col-12 text-center'
                            }, [
                                (0, s._)('img', {
                                    src: bi(),
                                    height: '240'
                                })
                            ]),
                            (0, s._)('div', {
                                class: 'text-body1 q-ml-md'
                            }, ' 先攻投掷5置入①，后手2投掷4置入②以此类推。 '),
                            (0, s._)('div', {
                                class: 'text-body1 q-ml-md'
                            }, ' 2、 投掷过程中后投掷的点数放置在场上，若对方场上同一排有相同点数，则对 方场上相同点数的格子全部消除。如图 '),
                            (0, s._)('div', {
                                class: 'col-12 text-center'
                            }, [
                                (0, s._)('img', {
                                    src: ki(),
                                    height: '240'
                                })
                            ]),
                            (0, s._)('div', {
                                class: 'text-body1 q-ml-md'
                            }, ' 在①处放置6则对面6消除，在②放置则对手同一行的两个3消除。 '),
                            (0, s._)('div', {
                                class: 'text-body1 q-ml-md'
                            }, ' 3、 重复以上步奏直至有一方格子全部填满则进入游戏结算阶段。 '),
                            (0, s._)('div', {
                                class: 'text-h6'
                            }, [
                                (0, s._)('strong', null, '第三阶段：统计各方点数，点数大的获胜。')
                            ]),
                            (0, s._)('div', {
                                class: 'text-body1 q-ml-md'
                            }, '点数的计算方法为：'),
                            (0, s._)('div', {
                                class: 'text-body1 q-ml-md'
                            }, ' 每行分数=Σ（自己区域每行格子点数*此点在此行出现次数²） '),
                            (0, s._)('div', {
                                class: 'text-body1 q-ml-md'
                            }, '总分数=Σ（每行分数）'),
                            (0, s._)('div', {
                                class: 'col-12 text-center'
                            }, [
                                (0, s._)('img', {
                                    src: _i(),
                                    height: '240'
                                })
                            ]),
                            (0, s._)('div', {
                                class: 'text-body1 q-ml-md'
                            }, ' 以图为例，左侧计算分数为 (6*2²+5) + (4+5) + (3+5) =46 '),
                            (0, s._)('div', {
                                class: 'text-body1 q-ml-md'
                            }, ' 右侧分数计算为 (3*2²+4) + (2+3+6) + (1*3²) = 36 '),
                            (0, s._)('div', {
                                class: 'text-body1 q-ml-md'
                            }, '因此左侧获胜。')
                        ])
                    ], -1))),
                    Li = {
                        class: 'col-12 text-center'
                    };

                function Zi(t, e, i, l, n, o) {
                    const r = (0, s.up)('q-btn'),
                        a = (0, s.up)('q-page');
                    return (0, s.wg)(),
                        (0, s.j4)(a, {
                            class: 'row col-12 items-start justify-center'
                        }, {
                            default:
                                (0, s.w5)((() => [(0, s._)('div', Ri, [
                                    Ci,
                                    Ii,
                                    ji,
                                    Ui,
                                    (0, s._)('div', Li, [
                                        (0, s.Wm)(r, {
                                            color: 'primary',
                                            onClick: e[0] || (e[0] = e => t.$router.push('/'))
                                        }, {
                                            default:
                                                (0, s.w5)((() => [(0, s.Uk)('返回主菜单')])),
                                            _: 1
                                        })
                                    ])
                                ])])),
                            _: 1
                        })
                }
                const Gi = (0, s.aZ)({
                        name: 'InstructionPage',
                        components: {}
                    }),
                    Ni = (0, c.Z)(Gi, [
                        ['render',
                            Zi
                        ],
                        [
                            '__scopeId',
                            'data-v-6c75565b'
                        ]
                    ]),
                    Ai = Ni;
                x()(Gi, 'components', {
                    QPage: mi.Z,
                    QBtn: ii.Z
                });
                var Ei = i(8568),
                    Oi = i.n(Ei);
                const Pi = t => ((0, s.dD)('data-v-e2ec6fbc'), t = t(), (0, s.Cn)(), t),
                    Mi = {
                        class: 'col-12 row justify-center standings'
                    },
                    Wi = Pi((() => (0, s._)('img', {
                        src: Oi(),
                        class: 'bg'
                    }, null, -1))),
                    qi = {
                        class: 'row col-md-4 col-xs-5 justify-center',
                        style: {
                            'z-index': '2'
                        }
                    },
                    Vi = Pi((() => (0, s._)('div', {
                        class: 'col-md-4 col-xs-5 text-center text-h6'
                    }, [
                        (0, s._)('strong', null, '积分榜')
                    ], -1))),
                    zi = {
                        class: 'row col-12',
                        style: {
                            'max-height': '600px',
                            overflow: 'auto'
                        }
                    },
                    Yi = {
                        class: 'col-6 text-left text-body1'
                    },
                    Ti = {
                        class: 'col-6 text-right text-body1'
                    },
                    Si = {
                        class: 'q-my-md'
                    };

                function Qi(t, e, i, l, n, o) {
                    const r = (0, s.up)('q-btn'),
                        a = (0, s.up)('q-page');
                    return (0, s.wg)(),
                        (0, s.j4)(a, {
                            class: 'row col-12 items-start justify-center'
                        }, {
                            default:
                                (0, s.w5)((() => [(0, s._)('div', Mi, [
                                    Wi,
                                    (0, s._)('div', qi, [
                                        Vi,
                                        (0, s._)('div', zi, [
                                            ((0, s.wg)(!0), (0, s.iD)(s.HY, null, (0, s.Ko)(t.records, ((t, e) => ((0, s.wg)(), (0, s.iD)('div', {
                                                key: e,
                                                class: 'row col-12 justify-center'
                                            }, [
                                                (0, s._)('div', Yi, (0, R.zw)(e + 1) + ' . ' + (0, R.zw)(t.name), 1),
                                                (0, s._)('div', Ti, (0, R.zw)(t.score), 1)
                                            ])))), 128))
                                        ]),
                                        (0, s._)('div', Si, [
                                            (0, s.Wm)(r, {
                                                color: 'primary',
                                                onClick: e[0] || (e[0] = e => t.$router.push('/'))
                                            }, {
                                                default:
                                                    (0, s.w5)((() => [(0, s.Uk)('返回主菜单')])),
                                                _: 1
                                            })
                                        ])
                                    ])
                                ])])),
                            _: 1
                        })
                }
                const Hi = (0, s.aZ)({
                        name: 'StandingPage',
                        components: {},
                        setup() {
                            const t = (0, o.iH)([]);
                            return {
                                records: t
                            }
                        },
                        mounted() {
                            this.records = ui()
                        }
                    }),
                    Fi = (0, c.Z)(Hi, [
                        ['render',
                            Qi
                        ],
                        [
                            '__scopeId',
                            'data-v-e2ec6fbc'
                        ]
                    ]),
                    Bi = Fi;
                x()(Hi, 'components', {
                    QPage: mi.Z,
                    QBtn: ii.Z
                });
                const Ji = [{
                        path: '/',
                        component: D,
                        children: [{
                                path: '',
                                component: wi
                            },
                            {
                                path: '/instruction',
                                component: Ai
                            },
                            {
                                path: '/standing',
                                component: Bi
                            }
                        ]
                    }],
                    Xi = Ji,
                    Ki = (0, v.BC)((function() {
                        const t = h.r5,
                            e = (0, h.p7)({
                                scrollBehavior: () => ({
                                    left: 0,
                                    top: 0
                                }),
                                routes: Xi,
                                history: t('')
                            });
                        return e
                    }));
                async function $i(t, e) {
                    const i = t(u);
                    i.use(n.Z, e);
                    const l = (0, o.Xl)('function' === typeof Ki ? await Ki({}) : Ki);
                    return {
                        app: i,
                        router: l
                    }
                }
                const tl = {
                    config: {}
                };
                async function el({
                    app: t,
                    router: e
                }) {
                    t.use(e),
                        t.mount('#q-app')
                }
                $i(l.ri, tl).then(el)
            },
            6225: (t, e, i) => {
                t.exports = i.p + 'img/bg.34a23be9.jpg'
            },
            346: (t, e, i) => {
                t.exports = i.p + 'img/bot.648a8592.gif'
            },
            618: t => {
                t.exports = 'data:image/gif;base64,R0lGODlh4AFrAfABAEbAyv///yH/C05FVFNDQVBFMi4wAwEAAAAh/wt4bXAgZGF0YXhtcP8/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG10YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53Lm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZjphYm91dD0iIiD/eG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG46eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0/2U9IjIwMTktMDEtMjJUMTc6MzY6MTUtMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTIyVDE3OjA6NTEtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMjJUMTc6NDA6NTEtMDMwMCIgZGM6Zm9ybWF0PSJpbWFnZS9naWYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDFBRkFEMjFFODYxMUU5OUE1Q0Y1RkFFRjlEQ0VEMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDAxQUZBRDQzMUU4NjExRTk5QTVDRjVGQUVGOURDRUQzIv8+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlOmluc3RhbmNlSUQ9InhtcC5paWQ6MDFBRkFENDAxRTg2MTFFOTlBNUNGNUZBRUY5RENFRDMi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'
            },
            4661: (t, e, i) => {
                t.exports = i.p + 'img/grid.c737f9d5.png'
            },
            919: (t, e, i) => {
                t.exports = i.p + 'img/ins1.9fa1839d.png'
            },
            4626: (t, e, i) => {
                t.exports = i.p + 'img/ins2.72a3e098.png'
            },
            2981: (t, e, i) => {
                t.exports = i.p + 'img/ins3.64b456ed.png'
            },
            8568: (t, e, i) => {
                t.exports = i.p + 'img/score-bg.84a46fcf.jpg'
            },
            2338: (t, e, i) => {
                t.exports = i.p + 'img/victory.74ae932b.jpg'
            }
        },
        e = {};

    function i(l) {
        var n = e[l];
        if (void 0 !== n) return n.exports;
        var o = e[l] = {
            exports: {}
        };
        return t[l](o, o.exports, i),
            o.exports
    }
    i.m = t,
        (() => {
            var t = [];
            i.O = (e, l, n, o) => {
                if (!l) {
                    var s = 1 / 0;
                    for (d = 0; d < t.length; d++) {
                        for (var [l,
                                n,
                                o
                            ] = t[d], r = !0, a = 0; a < l.length; a++)(!1 & o || s >= o) && Object.keys(i.O).every((t => i.O[t](l[a]))) ? l.splice(a--, 1) : (r = !1, o < s && (s = o));
                        if (r) {
                            t.splice(d--, 1);
                            var c = n();
                            void 0 !== c && (e = c)
                        }
                    }
                    return e
                }
                o = o || 0;
                for (var d = t.length; d > 0 && t[d - 1][2] > o; d--) t[d] = t[d - 1];
                t[d] = [
                    l,
                    n,
                    o
                ]
            }
        })(),
        (() => {
            i.n = t => {
                var e = t && t.__esModule ? () => t['default'] : () => t;
                return i.d(e, {
                        a: e
                    }),
                    e
            }
        })(),
        (() => {
            i.d = (t, e) => {
                for (var l in e) i.o(e, l) && !i.o(t, l) && Object.defineProperty(t, l, {
                    enumerable: !0,
                    get: e[l]
                })
            }
        })(),
        (() => {
            i.g = function() {
                if ('object' === typeof globalThis) return globalThis;
                try {
                    return this || new Function('return this')()
                } catch (t) {
                    if ('object' === typeof window) return window
                }
            }()
        })(),
        (() => {
            i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)
        })(),
        (() => {
            i.p = ''
        })(),
        (() => {
            var t = {
                143: 0
            };
            i.O.j = e => 0 === t[e];
            var e = (e, l) => {
                    var n,
                        o, [
                            s,
                            r,
                            a
                        ] = l,
                        c = 0;
                    if (s.some((e => 0 !== t[e]))) {
                        for (n in r) i.o(r, n) && (i.m[n] = r[n]);
                        if (a) var d = a(i)
                    }
                    for (e && e(l); c < s.length; c++) o = s[c],
                        i.o(t, o) && t[o] && t[o][0](),
                        t[o] = 0;
                    return i.O(d)
                },
                l = globalThis['webpackChunkdice'] = globalThis['webpackChunkdice'] || [];
            l.forEach(e.bind(null, 0)),
                l.push = e.bind(null, l.push.bind(l))
        })();
    var l = i.O(void 0, [
        736
    ], (() => i(9385)));
    l = i.O(l)
})();