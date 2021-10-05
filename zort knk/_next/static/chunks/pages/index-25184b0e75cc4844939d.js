
_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [8],
  {
    "/0+H": function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.isInAmpMode = i),
        (e.useAmp = function () {
          return i(r.default.useContext(a.AmpStateContext));
        });
      var o,
        r = (o = n("q1tI")) && o.__esModule ? o : { default: o },
        a = n("lwAK");
      function i() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.ampFirst,
          n = void 0 !== e && e,
          o = t.hybrid,
          r = void 0 !== o && o,
          a = t.hasQuery,
          i = void 0 !== a && a;
        return n || (r && i);
      }
    },
    "7W2i": function (t, e, n) {
      var o = n("SksO");
      t.exports = function (t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && o(t, e);
      };
    },
    "8Kt/": function (t, e, n) {
      "use strict";
      n("lSNA");
      (e.__esModule = !0), (e.defaultHead = f), (e.default = void 0);
      var o,
        r = (function (t) {
          if (t && t.__esModule) return t;
          if (null === t || ("object" !== typeof t && "function" !== typeof t))
            return { default: t };
          var e = c();
          if (e && e.has(t)) return e.get(t);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) {
              var a = o ? Object.getOwnPropertyDescriptor(t, r) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, r, a)
                : (n[r] = t[r]);
            }
          (n.default = t), e && e.set(t, n);
          return n;
        })(n("q1tI")),
        a = (o = n("Xuae")) && o.__esModule ? o : { default: o },
        i = n("lwAK"),
        u = n("FYa8"),
        s = n("/0+H");
      function c() {
        if ("function" !== typeof WeakMap) return null;
        var t = new WeakMap();
        return (
          (c = function () {
            return t;
          }),
          t
        );
      }
      function f() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = [r.default.createElement("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              r.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function l(t, e) {
        return "string" === typeof e || "number" === typeof e
          ? t
          : e.type === r.default.Fragment
          ? t.concat(
              r.default.Children.toArray(e.props.children).reduce(function (
                t,
                e
              ) {
                return "string" === typeof e || "number" === typeof e
                  ? t
                  : t.concat(e);
              },
              [])
            )
          : t.concat(e);
      }
      var p = ["name", "httpEquiv", "charSet", "itemProp"];
      function d(t, e) {
        return t
          .reduce(function (t, e) {
            var n = r.default.Children.toArray(e.props.children);
            return t.concat(n);
          }, [])
          .reduce(l, [])
          .reverse()
          .concat(f(e.inAmpMode))
          .filter(
            (function () {
              var t = new Set(),
                e = new Set(),
                n = new Set(),
                o = {};
              return function (r) {
                var a = !0,
                  i = !1;
                if (
                  r.key &&
                  "number" !== typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  i = !0;
                  var u = r.key.slice(r.key.indexOf("$") + 1);
                  t.has(u) ? (a = !1) : t.add(u);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    e.has(r.type) ? (a = !1) : e.add(r.type);
                    break;
                  case "meta":
                    for (var s = 0, c = p.length; s < c; s++) {
                      var f = p[s];
                      if (r.props.hasOwnProperty(f))
                        if ("charSet" === f) n.has(f) ? (a = !1) : n.add(f);
                        else {
                          var l = r.props[f],
                            d = o[f] || new Set();
                          ("name" === f && i) || !d.has(l)
                            ? (d.add(l), (o[f] = d))
                            : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (t, e) {
            var n = t.key || e;
            return r.default.cloneElement(t, { key: n });
          });
      }
      function h(t) {
        var e = t.children,
          n = (0, r.useContext)(i.AmpStateContext),
          o = (0, r.useContext)(u.HeadManagerContext);
        return r.default.createElement(
          a.default,
          {
            reduceComponentsToState: d,
            headManager: o,
            inAmpMode: (0, s.isInAmpMode)(n),
          },
          e
        );
      }
      h.rewind = function () {};
      var y = h;
      e.default = y;
    },
    Bnag: function (t, e) {
      t.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    EbDI: function (t, e) {
      t.exports = function (t) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      };
    },
    FYa8: function (t, e, n) {
      "use strict";
      var o;
      (e.__esModule = !0), (e.HeadManagerContext = void 0);
      var r = (
        (o = n("q1tI")) && o.__esModule ? o : { default: o }
      ).default.createContext({});
      e.HeadManagerContext = r;
    },
    Ijbi: function (t, e, n) {
      var o = n("WkPL");
      t.exports = function (t) {
        if (Array.isArray(t)) return o(t);
      };
    },
    Nsbk: function (t, e) {
      function n(e) {
        return (
          (t.exports = n =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
          n(e)
        );
      }
      t.exports = n;
    },
    PJYZ: function (t, e) {
      t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      };
    },
    Qetd: function (t, e, n) {
      "use strict";
      var o = Object.assign.bind(Object);
      (t.exports = o), (t.exports.default = t.exports);
    },
    RIqP: function (t, e, n) {
      var o = n("Ijbi"),
        r = n("EbDI"),
        a = n("ZhPi"),
        i = n("Bnag");
      t.exports = function (t) {
        return o(t) || r(t) || a(t) || i();
      };
    },
    RNiq: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function () {
          return a;
        });
      var o = n("nKUr"),
        r = (n("g4pe"), n("tkmV"));
      function a() {
        return Object(o.jsx)(r.default, {});
      }
    },
    SksO: function (t, e) {
      function n(e, o) {
        return (
          (t.exports = n =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          n(e, o)
        );
      }
      t.exports = n;
    },
    W8MJ: function (t, e) {
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      t.exports = function (t, e, o) {
        return e && n(t.prototype, e), o && n(t, o), t;
      };
    },
    WkPL: function (t, e) {
      t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      };
    },
    Xuae: function (t, e, n) {
      "use strict";
      var o = n("RIqP"),
        r = n("lwsE"),
        a = n("W8MJ"),
        i = (n("PJYZ"), n("7W2i")),
        u = n("a1gu"),
        s = n("Nsbk");
      function c(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = s(t);
          if (e) {
            var r = s(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return u(this, n);
        };
      }
      (e.__esModule = !0), (e.default = void 0);
      var f = n("q1tI"),
        l = (function (t) {
          i(n, t);
          var e = c(n);
          function n(t) {
            var a;
            return (
              r(this, n),
              ((a = e.call(this, t))._hasHeadManager = void 0),
              (a.emitChange = function () {
                a._hasHeadManager &&
                  a.props.headManager.updateHead(
                    a.props.reduceComponentsToState(
                      o(a.props.headManager.mountedInstances),
                      a.props
                    )
                  );
              }),
              (a._hasHeadManager =
                a.props.headManager && a.props.headManager.mountedInstances),
              a
            );
          }
          return (
            a(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(f.Component);
      e.default = l;
    },
    ZhPi: function (t, e, n) {
      var o = n("WkPL");
      t.exports = function (t, e) {
        if (t) {
          if ("string" === typeof t) return o(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(t, e)
              : void 0
          );
        }
      };
    },
    a1gu: function (t, e, n) {
      var o = n("cDf5"),
        r = n("PJYZ");
      t.exports = function (t, e) {
        return !e || ("object" !== o(e) && "function" !== typeof e) ? r(t) : e;
      };
    },
    cDf5: function (t, e) {
      function n(e) {
        return (
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? (t.exports = n =
                function (t) {
                  return typeof t;
                })
            : (t.exports = n =
                function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          n(e)
        );
      }
      t.exports = n;
    },
    g4pe: function (t, e, n) {
      t.exports = n("8Kt/");
    },
    lSNA: function (t, e) {
      t.exports = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      };
    },
    lwAK: function (t, e, n) {
      "use strict";
      var o;
      (e.__esModule = !0), (e.AmpStateContext = void 0);
      var r = (
        (o = n("q1tI")) && o.__esModule ? o : { default: o }
      ).default.createContext({});
      e.AmpStateContext = r;
    },
    lwsE: function (t, e) {
      t.exports = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    tkmV: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function () {
          return y;
        });
      var o = n("nKUr");
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function a(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function i(t, e) {
        return (i =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function u(t) {
        return (u =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function s(t, e) {
        return !e || ("object" !== u(e) && "function" !== typeof e) ? a(t) : e;
      }
      function c(t) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var f = n("q1tI"),
        l = n.n(f),
        p = n("EVdn"),
        d = n.n(p);
      function h(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = c(t);
          if (e) {
            var r = c(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return s(this, n);
        };
      }
      var y = (function (t) {
        !(function (t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && i(t, e);
        })(c, t);
        var e,
          n,
          u,
          s = h(c);
        function c() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, c),
            ((t = s.call(this)).initTyper = t.initTyper.bind(a(t))),
            (t.content = t.content.bind(a(t))),
            (t.write = t.write.bind(a(t))),
            (t.addText = t.addText.bind(a(t))),
            (t.updLstChr = t.updLstChr.bind(a(t))),
            (t.t = t.t.bind(a(t))),
            (t.state = {
              text: "",
              accessCountimer: null,
              index: 0,
              speed: 2,
              file: "",
              accessCount: 0,
              deniedCount: 0,
              timer: null,
            }),
            t
          );
        }
        return (
          (e = c),
          (n = [
            {
              key: "initTyper",
              value: function () {
                setInterval(this.updLstChr, 500);
              },
            },
            {
              key: "content",
              value: function () {
                return d()("#console").html();
              },
            },
            {
              key: "write",
              value: function (t) {
                return d()("#console").append(t), !1;
              },
            },
            {
              key: "addText",
              value: function (t) {
                if (18 === t.keyCode)
                  this.setState({ accessCount: this.state.accessCount + 1 }),
                    this.state.accessCount;
                else if (20 === t.keyCode)
                  this.setState({ deniedCount: this.state.deniedCount + 1 }),
                    this.state.deniedCount;
                else if (27 === t.keyCode);
                else if (this.state.text) {
                  var e = this.content();
                  "|" === e.substring(e.length - 1, e.length) &&
                    d()("#console").html(
                      d()("#console")
                        .html()
                        .substring(0, e.length - 1)
                    ),
                    8 !== t.keyCode
                      ? (this.state.index += this.state.speed)
                      : this.state.index > 0 &&
                        (this.state.index -= this.state.speed);
                  var n = this.state.text.substring(0, this.state.index),
                    o = new RegExp("\n", "g");
                  d()("#console").html(n.replace(o, "<br/>")),
                    window.scrollBy(0, 50);
                }
                t.preventDefault && 122 !== t.keyCode && t.preventDefault(),
                  122 !== t.keyCode && (t.returnValue = !1);
              },
            },
            {
              key: "updLstChr",
              value: function () {
                var t = this.content();
                "|" === t.substring(t.length - 1, t.length)
                  ? d()("#console").html(
                      d()("#console")
                        .html()
                        .substring(0, t.length - 1)
                    )
                  : this.write("|");
              },
            },
            {
              key: "t",
              value: function () {
                this.addText({ keyCode: 123748 }),
                  this.state.index > this.state.text.length &&
                    clearInterval(this.state.timer);
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this.setState({
                  speed: 4,
                  text: `\n<span id="a">root@letha-local</span>:<span id="b">~</span><span id="c">$</span> cd /home/letha.run\n<span id="a">root@letha-local</span>:<span id="b">~</span><span id="c">$</span> print \x3c!-- spanner --\x3ehome<br/><br/>\n\n<a href="https://letha.xyz">[ Home ]</a> | <a href="https://open.spotify.com/user/bp6zo6xhz79p0w0qm7rhe0mqg">[ Spotify ]</a> | <a href="https://www.instagram.com/zeki.dll/">[ Instagram ]</a> | <a href="https://github.com/shenarain">[ Github ]</a> | <a href="https://www.youtube.com/channel/UCe97Ql0hufEOhKsSMbkjqPg">[ Youtube ]</a> | <a href="https://discord.gg/winter">[ Discord ]</a> | <a href="https://steamcommunity.com/id/shenarain1/">[ Steam ]</a> | <a href="mailto: zeki@letha.xyz">[ Mail Me ]</a>\n<p>\n 
                
                  __                                                         __           
                  /  |                                                       /  |          
          _______ $$ |____    ______   _______    ______    ______   ______  $$/  _______  
         /       |$$      \  /      \ /       \  /      \  /      \ /      \ /  |/       \ 
        /$$$$$$$/ $$$$$$$  |/$$$$$$  |$$$$$$$  | $$$$$$  |/$$$$$$  |$$$$$$  |$$ |$$$$$$$  |
        $$      \ $$ |  $$ |$$    $$ |$$ |  $$ | /    $$ |$$ |  $$/ /    $$ |$$ |$$ |  $$ |
         $$$$$$  |$$ |  $$ |$$$$$$$$/ $$ |  $$ |/$$$$$$$ |$$ |     /$$$$$$$ |$$ |$$ |  $$ |
        /     $$/ $$ |  $$ |$$       |$$ |  $$ |$$    $$ |$$ |     $$    $$ |$$ |$$ |  $$ |
        $$$$$$$/  $$/   $$/  $$$$$$$/ $$/   $$/  $$$$$$$/ $$/       $$$$$$$/ $$/ $$/   $$/ 
                                                                                           

        <p/>\n<span id="k">    dev. / researcher\n"cu"</span>\n\  for contact, discord: <a id="a" href="https://discord.com/users/781800203664883714">zeki#1000</a> mail: <a id="a" href="mailto: zeki@letha.xyz">zeki@letha.xyz</a>-<a id="a" href="mailto: info@letha.xyz">info@letha.xyz</a> \n\n\n`,
                }),
                  this.initTyper(),
                  this.setState({ timer: setInterval(this.t, 25) });
              },
            },
            {
              key: "render",
              value: function () {
                return Object(o.jsx)("div", { id: "console" });
              },
            },
          ]) && r(e.prototype, n),
          u && r(e, u),
          c
        );
      })(l.a.Component);
    },
    vlRD: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n("RNiq");
        },
      ]);
    },
  },
  [["vlRD", 0, 1, 2]],
]);
