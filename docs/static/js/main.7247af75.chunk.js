(this["webpackJsonpgif-expert-app"] = this["webpackJsonpgif-expert-app"] || []).push([[0], {
    15: function (e, t, a) {
    }, 16: function (e, t, a) {
    }, 19: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a(1), c = a(7), s = a.n(c), i = (a(15), a(16), a(2)), r = a(9),
            l = a.p + "./static/media/search.f12cd87a.svg", u = a(0), o = function (e) {
                var t = e.setCategories, a = Object(n.useState)(""), c = Object(i.a)(a, 2), s = c[0], o = c[1];
                return Object(u.jsx)("form", {
                    className: " mt-4 mb-4",
                    onSubmit: function (e) {
                        if (e.preventDefault(), !(s.trim().length < 3)) {
                            console.log("submit hecho");
                            var a = document.getElementById("inputCategory").value;
                            t((function (e) {
                                return [a].concat(Object(r.a)(e))
                            })), o("")
                        }
                    },
                    children: Object(u.jsxs)("div", {
                        className: "flex w-full h-12 max-w-sm text-sm p-2 rounded-xl border-2 border-black",
                        children: [Object(u.jsx)("input", {
                            className: "w-11/12 focus-within:outline-none",
                            type: "text",
                            value: s,
                            onChange: function (e) {
                                return function (e) {
                                    return o(e.target.value)
                                }(e)
                            },
                            placeholder: "Search GIPHY",
                            id: "inputCategory"
                        }), Object(u.jsx)("img", {className: "w-1/12 h-full", src: l, alt: ""})]
                    })
                })
            }, d = a(10), m = a(6), j = a.n(m), f = a(8), h = function () {
                var e = Object(f.a)(j.a.mark((function e(t) {
                    var a, n, c, s, i;
                    return j.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return a = "https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t), "&limit=10&lang=en&api_key=ZH6dBvuqCM62yZJYh0CJS2km3YWTrgNL"), e.next = 3, fetch(a);
                            case 3:
                                return n = e.sent, e.next = 6, n.json();
                            case 6:
                                return c = e.sent, s = c.data, i = s.map((function (e) {
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
            }(), p = function (e) {
                var t = e.id, a = e.title, n = e.url;
                return Object(u.jsxs)("div", {
                    className: "animate__animated animate__fadeIn flex flex-col p-0 m-0 h-auto  rounded-lg shadow-2xl m-5 lg:w-1/5 md:w-2/5 sm:w-full ",
                    children: [Object(u.jsx)("figure", {
                        className: "w-full h-3/4 rounded-t-lg overflow-hidden text-center",
                        children: Object(u.jsx)("img", {
                            className: "w-full h-auto object-fill",
                            src: n,
                            alt: "",
                            loading: "lazy"
                        })
                    }), Object(u.jsx)("div", {
                        className: "h-auto w-full text-center p-4",
                        children: Object(u.jsx)("p", {className: "text-base", children: a})
                    })]
                }, t)
            }, x = function (e) {
                var t = e.category, a = function (e) {
                    var t = Object(n.useState)({data: [], loading: !0}), a = Object(i.a)(t, 2), c = a[0], s = a[1];
                    return Object(n.useEffect)((function () {
                        h(e).then((function (e) {
                            setTimeout((function () {
                                s({data: e, loading: !1})
                            }), 3e3)
                        }))
                    }), []), c
                }(t), c = a.data, s = a.loading;
                return Object(u.jsxs)(u.Fragment, {
                    children: [Object(u.jsx)("hr", {}), Object(u.jsx)("h1", {
                        className: "text-blue-900 font-bold animate__animated animate__fadeIn",
                        children: t
                    }, t), s && Object(u.jsx)("p", {
                        className: "animate__animated animate__flash",
                        children: "Loading"
                    }), Object(u.jsx)("section", {
                        className: "flex flex-wrap w-full h-auto", children: c.map((function (e) {
                            return Object(u.jsx)(p, Object(d.a)({}, e), e.id)
                        }))
                    })]
                })
            }, b = a.p + "./static/media/logo.ba793bcc.png", g = function (e) {
                var t = Object(n.useState)(["Friends"]), a = Object(i.a)(t, 2), c = a[0], s = a[1];
                return Object(u.jsxs)(u.Fragment, {
                    children: [Object(u.jsxs)("header", {
                        className: "w-full flex items-center",
                        style: {height: "50px", padding: "5px 20px"},
                        children: [Object(u.jsx)("div", {
                            className: "w-1/5 h-full",
                            children: Object(u.jsx)("img", {className: "w-auto h-full ", src: b, alt: "Gif app"})
                        }), Object(u.jsxs)("a", {
                            className: "flex w-4/5 h-full text-center items-center justify-end",
                            href: "https://www.giphy.com",
                            children: [Object(u.jsx)("h3", {children: "Gifs by"}), Object(u.jsx)("img", {
                                className: "h-4/5",
                                src: "https://media.giphy.com/media/igz3CtPVyFj975etI5/giphy.gif",
                                alt: ""
                            })]
                        })]
                    }), Object(u.jsxs)("div", {
                        style: {padding: "30px 60px"},
                        children: [Object(u.jsx)("h1", {
                            className: "text-4xl font-bold",
                            children: "This app use the Giphy API for search gifs."
                        }), Object(u.jsx)(o, {setCategories: s}), c.map((function (e) {
                            return Object(u.jsx)(x, {category: e}, e)
                        }))]
                    })]
                })
            };
        s.a.render(Object(u.jsx)(g, {}), document.getElementById("root"))
    }
}, [[19, 1, 2]]]);
//# sourceMappingURL=main.7247af75.chunk.js.map