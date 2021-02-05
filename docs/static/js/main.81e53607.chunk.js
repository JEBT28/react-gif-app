(this["webpackJsonpgif-expert-app"] = this["webpackJsonpgif-expert-app"] || []).push([[0], {
    15: function (e, t, n) {
    }, 16: function (e, t, n) {
    }, 19: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(1), r = n(7), c = n.n(r), i = (n(15), n(16), n(2)), l = n(9);

        function s() {
            return (s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function o(e, t) {
            if (null == e) return {};
            var n, a, r = function (e, t) {
                if (null == e) return {};
                var n, a, r = {}, c = Object.keys(e);
                for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
            }
            return r
        }

        var u = a.createElement("path", {d: "m202.667969 405.339844c-111.746094 0-202.667969-90.921875-202.667969-202.664063 0-111.746093 90.921875-202.6679685 202.667969-202.6679685 111.742187 0 202.664062 90.9218755 202.664062 202.6679685 0 111.742188-90.921875 202.664063-202.664062 202.664063zm0-373.332032c-94.101563 0-170.667969 76.566407-170.667969 170.667969 0 94.101563 76.566406 170.664063 170.667969 170.664063 94.101562 0 170.664062-76.5625 170.664062-170.664063 0-94.101562-76.5625-170.667969-170.664062-170.667969zm0 0"}),
            d = a.createElement("path", {d: "m496 512.007812c-4.097656 0-8.191406-1.558593-11.308594-4.691406l-161.277344-161.28125c-6.25-6.25-6.25-16.382812 0-22.636718 6.25-6.25 16.382813-6.25 22.632813 0l161.28125 161.28125c6.25 6.25 6.25 16.382812 0 22.636718-3.136719 3.132813-7.230469 4.691406-11.328125 4.691406zm0 0"});

        function f(e, t) {
            var n = e.title, r = e.titleId, c = o(e, ["title", "titleId"]);
            return a.createElement("svg", s({
                height: "512pt",
                viewBox: "0 0 512.016 512",
                fill: "black",
                width: "512pt",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r
            }, c), n ? a.createElement("title", {id: r}, n) : null, u, d)
        }

        var m = a.forwardRef(f), h = (n.p, n(0)), j = function (e) {
            var t = e.setCategories, n = Object(a.useState)(""), r = Object(i.a)(n, 2), c = r[0], s = r[1];
            return Object(h.jsx)("form", {
                className: " mt-4 mb-4",
                onSubmit: function (e) {
                    if (e.preventDefault(), !(c.trim().length < 3)) {
                        console.log("submit hecho");
                        var n = document.getElementById("inputCategory").value;
                        t((function (e) {
                            return [n].concat(Object(l.a)(e))
                        })), s("")
                    }
                },
                children: Object(h.jsxs)("div", {
                    className: "flex w-full h-12 max-w-sm text-sm p-2 rounded-xl border-2 border-black",
                    children: [Object(h.jsx)("input", {
                        className: "w-11/12 focus-within:outline-none",
                        type: "text",
                        value: c,
                        onChange: function (e) {
                            return function (e) {
                                return s(e.target.value)
                            }(e)
                        },
                        placeholder: "Search GIPHY",
                        id: "inputCategory"
                    }), Object(h.jsx)(m, {className: "w-1/12 h-full"})]
                })
            })
        }, p = n(10), b = n(6), x = n.n(b), g = n(8), O = function () {
            var e = Object(g.a)(x.a.mark((function e(t) {
                var n, a, r, c, i;
                return x.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = "https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t), "&limit=10&lang=en&api_key=ZH6dBvuqCM62yZJYh0CJS2km3YWTrgNL"), e.next = 3, fetch(n);
                        case 3:
                            return a = e.sent, e.next = 6, a.json();
                        case 6:
                            return r = e.sent, c = r.data, i = c.map((function (e) {
                                var t;
                                return {
                                    id: e.id,
                                    title: e.title,
                                    url: null === (t = e.images) || void 0 === t ? void 0 : t.downsized_medium.url
                                }
                            })), e.abrupt("return", i);
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), v = function (e) {
            var t = e.id, n = e.title, a = e.url;
            return Object(h.jsxs)("div", {
                className: "animate__animated animate__fadeIn flex flex-col p-0 m-0 h-auto  rounded-lg shadow-2xl m-5 lg:w-1/5 md:w-2/5 sm:w-full ",
                children: [Object(h.jsx)("figure", {
                    className: "w-full h-3/4 rounded-t-lg overflow-hidden text-center",
                    children: Object(h.jsx)("img", {
                        className: "w-full h-auto object-fill",
                        src: a,
                        alt: "",
                        loading: "lazy"
                    })
                }), Object(h.jsx)("div", {
                    className: "h-auto w-full text-center p-4",
                    children: Object(h.jsx)("p", {className: "text-base", children: n})
                })]
            }, t)
        }, w = function (e) {
            var t = e.category, n = function (e) {
                var t = Object(a.useState)({data: [], loading: !0}), n = Object(i.a)(t, 2), r = n[0], c = n[1];
                return Object(a.useEffect)((function () {
                    O(e).then((function (e) {
                        setTimeout((function () {
                            c({data: e, loading: !1})
                        }), 3e3)
                    }))
                }), []), r
            }(t), r = n.data, c = n.loading;
            return Object(h.jsxs)(h.Fragment, {
                children: [Object(h.jsx)("hr", {}), Object(h.jsx)("h1", {
                    className: "text-blue-900 font-bold animate__animated animate__fadeIn",
                    children: t
                }, t), c && Object(h.jsx)("p", {
                    className: "animate__animated animate__flash",
                    children: "Loading"
                }), Object(h.jsx)("section", {
                    className: "flex flex-wrap w-full h-auto", children: r.map((function (e) {
                        return Object(h.jsx)(v, Object(p.a)({}, e), e.id)
                    }))
                })]
            })
        }, y = n.p + "../../static/media/logo.ba793bcc.png", N = function (e) {
            var t = Object(a.useState)(["Friends"]), n = Object(i.a)(t, 2), r = n[0], c = n[1];
            return Object(h.jsxs)(h.Fragment, {
                children: [Object(h.jsxs)("header", {
                    className: "w-full flex items-center",
                    style: {height: "50px", padding: "5px 20px"},
                    children: [Object(h.jsx)("div", {
                        className: "w-1/5 h-full",
                        children: Object(h.jsx)("img", {className: "w-auto h-full", src: y, alt: "Gif app"})
                    }), Object(h.jsxs)("a", {
                        className: "flex w-4/5 h-full text-center items-center justify-end",
                        href: "https://www.giphy.com",
                        children: [Object(h.jsx)("h3", {children: "Gifs by"}), Object(h.jsx)("img", {
                            className: "h-4/5",
                            src: "https://media.giphy.com/media/igz3CtPVyFj975etI5/giphy.gif",
                            alt: ""
                        })]
                    })]
                }), Object(h.jsxs)("div", {
                    style: {padding: "30px 60px"},
                    children: [Object(h.jsx)("h1", {
                        className: "text-4xl font-bold",
                        children: "This app use the Giphy API for search gifs."
                    }), Object(h.jsx)(j, {setCategories: c}), r.map((function (e) {
                        return Object(h.jsx)(w, {category: e}, e)
                    }))]
                })]
            })
        };
        c.a.render(Object(h.jsx)(N, {}), document.getElementById("root"))
    }
}, [[19, 1, 2]]]);
//# sourceMappingURL=main.81e53607.chunk.js.map