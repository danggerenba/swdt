/*!
 * ====================================================
 * kityminder-editor - v1.0.55 - 2016-05-26
 * https://github.com/fex-team/kityminder-editor
 * GitHub: https://github.com/fex-team/kityminder-editor
 * Copyright (c) 2016 ; Licensed
 * ====================================================
 */

!
    function() {
        function a(a) {
            b.r([c[a]])
        }
        var b = {
            r: function(a) {
                if (b[a].inited) return b[a].value;
                if ("function" != typeof b[a].value) return b[a].inited = !0,
                    b[a].value;
                var c = {
                        exports: {}
                    },
                    d = b[a].value(null, c.exports, c);
                if (b[a].inited = !0, b[a].value = d, void 0 !== d) return d;
                for (var e in c.exports) if (c.exports.hasOwnProperty(e)) return b[a].inited = !0,
                    b[a].value = c.exports,
                    c.exports
            }
        };
        b[0] = {
            value: function(a, c, d) {
                function e(a) {
                    g.push(a)
                }
                function f(a) {
                    this.selector = a;
                    for (var b = 0; b < g.length; b++)"function" == typeof g[b] && g[b].call(this, this)
                }
                var g = [];
                return f.assemble = e,
                    e(b.r(7)),
                    e(b.r(9)),
                    e(b.r(14)),
                    e(b.r(18)),
                    e(b.r(11)),
                    e(b.r(12)),
                    e(b.r(5)),
                    e(b.r(6)),
                    e(b.r(8)),
                    e(b.r(15)),
                    e(b.r(10)),
                    e(b.r(13)),
                    e(b.r(16)),
                    e(b.r(17)),
                    d.exports = f
            }
        },
            b[1] = {
                value: function(a, c, d) {
                    return d.exports = kityminder.Editor = b.r(0)
                }
            },
            b[2] = {
                value: function(a, b, c) {
                    return c.exports = window.HotBox
                }
            },
            b[3] = {
                value: function(a, b, c) {}
            },
            b[4] = {
                value: function(a, b, c) {
                    return c.exports = window.kityminder.Minder
                }
            },
            b[5] = {
                value: function(a, b, c) {
                    function d() {
                        function a(a, c) {
                            if (!this.isPureText(c)) {
                                var d = this.whichMimeType(c);
                                if (!d) throw new Error("unknow mimetype!");
                                c = this.getPureText(c)
                            }
                            return a === !1 ? c: a + b + c
                        }
                        var b = "\ufeff",
                            c = {
                                "application/km": "???"
                            },
                            d = {
                                "\ufeff": "SPLITOR",
                                "???": "application/km"
                            };
                        this.registMimeTypeProtocol = function(a, b) {
                            if (b && d[b]) throw new Error("sing has registed!");
                            if (a && c[a]) throw new Error("mimetype has registed!");
                            d[b] = a,
                                c[a] = b
                        },
                            this.getMimeTypeProtocol = function(b, d) {
                                var e = c[b] || !1;
                                return void 0 === d ? a.bind(this, e) : a(e, d)
                            },
                            this.getSpitor = function() {
                                return b
                            },
                            this.getMimeType = function(a) {
                                return void 0 !== a ? d[a] || null: c
                            }
                    }
                    function e() {
                        this.minder.supportClipboardEvent && !kity.Browser.gecko && (this.MimeType = new d)
                    }
                    return d.prototype.isPureText = function(a) {
                        return ! ~a.indexOf(this.getSpitor())
                    },
                        d.prototype.getPureText = function(a) {
                            return this.isPureText(a) ? a: a.split(this.getSpitor())[1]
                        },
                        d.prototype.whichMimeType = function(a) {
                            return this.isPureText(a) ? null: this.getMimeType(a.split(this.getSpitor())[0])
                        },
                        c.exports = e
                }
            },
            b[6] = {
                value: function(a, b, c) {
                    function d() {
                        function a(a) {
                            for (var d = [], e = 0, f = a.length; f > e; e++) d.push(b.exportNode(a[e]));
                            return g(c.getRegisterProtocol("json").encode(d))
                        }
                        var b = this.minder,
                            c = window.kityminder.data;
                        if (b.supportClipboardEvent && !kity.Browser.gecko) {
                            var d = this.fsm,
                                e = this.receiver,
                                f = this.MimeType,
                                g = f.getMimeTypeProtocol("application/km"),
                                h = c.getRegisterProtocol("json").decode,
                                i = [],
                                j = function(c) {
                                    if (document.activeElement == e.element) {
                                        var f = c,
                                            g = d.state();
                                        switch (g) {
                                            case "input":
                                                break;
                                            case "normal":
                                                var h = [].concat(b.getSelectedNodes());
                                                if (h.length) {
                                                    if (h.length > 1) {
                                                        var i;
                                                        if (h.sort(function(a, b) {
                                                            return a.getLevel() - b.getLevel()
                                                        }), i = h[0].getLevel(), i !== h[h.length - 1].getLevel()) {
                                                            var j, k = 0,
                                                                l = h.length,
                                                                m = l - 1;
                                                            for (j = h[m]; j.getLevel() !== i;) {
                                                                for (k = 0; l > k && h[k].getLevel() === i;) {
                                                                    if (h[k].isAncestorOf(j)) {
                                                                        h.splice(m, 1);
                                                                        break
                                                                    }
                                                                    k++
                                                                }
                                                                m--,
                                                                    j = h[m]
                                                            }
                                                        }
                                                    }
                                                    var n = a(h);
                                                    f.clipboardData.setData("text/plain", n)
                                                }
                                                c.preventDefault()
                                        }
                                    }
                                },
                                k = function(c) {
                                    if (document.activeElement == e.element) {
                                        if ("normal" !== b.getStatus()) return void c.preventDefault();
                                        var f = c,
                                            g = d.state();
                                        switch (g) {
                                            case "input":
                                                break;
                                            case "normal":
                                                var h = b.getSelectedNodes();
                                                h.length && (f.clipboardData.setData("text/plain", a(h)), b.execCommand("removenode")),
                                                    c.preventDefault()
                                        }
                                    }
                                },
                                l = function(a) {
                                    if (document.activeElement == e.element) {
                                        if ("normal" !== b.getStatus()) return void a.preventDefault();
                                        var c = a,
                                            g = d.state(),
                                            j = c.clipboardData.getData("text/plain");
                                        switch (g) {
                                            case "input":
                                                if (!f.isPureText(j)) return void a.preventDefault();
                                                break;
                                            case "normal":
                                                var k = b.getSelectedNodes();
                                                if ("application/km" === f.whichMimeType(j)) {
                                                    var l, m = h(f.getPureText(j));
                                                    k.forEach(function(a) {
                                                        for (var c = m.length - 1; c >= 0; c--) l = b.createNode(null, a),
                                                            b.importNode(l, m[c]),
                                                            i.push(l),
                                                            a.appendChild(l)
                                                    }),
                                                        b.select(i, !0),
                                                        i = [],
                                                        b.refresh()
                                                } else k.forEach(function(a) {
                                                    b.Text2Children(a, j)
                                                });
                                                a.preventDefault()
                                        }
                                    }
                                };
                            // document.addEventListener("copy", j),
                            //     document.addEventListener("cut", k),
                            //     document.addEventListener("paste", l)
                        }
                    }
                    return c.exports = d
                }
            },
            b[7] = {
                value: function(a, b, c) {
                    function d() {
                        var a;
                        if (a = "string" == typeof this.selector ? document.querySelector(this.selector) : this.selector, !a) throw new Error("Invalid selector: " + this.selector);
                        a.classList.add("km-editor"),
                            this.container = a
                    }
                    return c.exports = d
                }
            },
            b[8] = {
                value: function(a, c, d) {
                    function e() {
                        function a() {
                            c.when("* -> drag",
                                function() {}),
                                c.when("drag -> *",
                                    function(a, b, c) {})
                        }
                        function b(a, b) {
                            return a ? void(o || (o = kity.requestFrame(function(a, b, c) {
                                return function(d) {
                                    switch (a) {
                                        case "left":
                                            c._viewDragger.move({
                                                    x:
                                                        -b,
                                                    y: 0
                                                },
                                                0);
                                            break;
                                        case "top":
                                            c._viewDragger.move({
                                                    x:
                                                        0,
                                                    y: -b
                                                },
                                                0);
                                            break;
                                        case "right":
                                            c._viewDragger.move({
                                                    x:
                                                    b,
                                                    y: 0
                                                },
                                                0);
                                            break;
                                        case "bottom":
                                            c._viewDragger.move({
                                                    x:
                                                        0,
                                                    y: b
                                                },
                                                0);
                                            break;
                                        default:
                                            return
                                    }
                                    d.next()
                                }
                            } (a, b, d)))) : (t = u = !1, o && kity.releaseFrame(o), void(o = null))
                        }
                        var c = this.fsm,
                            d = this.minder,
                            e = this.hotbox,
                            g = this.receiver;
                        g.element;
                        a();
                        var h, i, j, k, l, m, n, o, p = 0,
                            q = 1,
                            r = 20,
                            s = q,
                            t = !1,
                            u = !1;
                        d.on("mousedown",
                            function(a) {
                                s = p;
                                var b = d.getPaper().container.getBoundingClientRect();
                                h = a.originEvent.clientX,
                                    i = a.originEvent.clientY,
                                    n = b.top,
                                    j = b.width,
                                    k = b.height
                            }),
                            d.on("mousemove",
                                function(a) {
                                    return "drag" === c.state() && s == p && d.getSelectedNode() && (Math.abs(h - a.originEvent.clientX) > r || Math.abs(i - a.originEvent.clientY) > r) && (l = a.originEvent.clientX, m = a.originEvent.clientY - n, r > l ? b("right", r - l) : l > j - r ? b("left", r + l - j) : t = !0, r > m ? b("bottom", m) : m > k - r ? b("top", r + m - k) : u = !0, t && u && b(!1)),
                                        "drag" !== c.state() && s === p && d.getSelectedNode() && (Math.abs(h - a.originEvent.clientX) > r || Math.abs(i - a.originEvent.clientY) > r) ? ("hotbox" === c.state() && e.active(f.STATE_IDLE), c.jump("drag", "user-drag")) : void 0
                                }),
                            window.addEventListener("mouseup",
                                function() {
                                    return s = q,
                                        "drag" === c.state() ? (b(!1), c.jump("normal", "drag-finish")) : void 0
                                },
                                !1)
                    }
                    var f = b.r(2),
                        g = b.r(19);
                    new g("drag");
                    return d.exports = e
                }
            },
            b[9] = {
                value: function(a, c, d) {
                    function e(a, b, c, d) {
                        if (a.when != b) return ! 1;
                        if ("*" != a.enter && a.enter != d) return ! 1;
                        if ("*" == a.exit || a.exit == c) return ! 0
                    }
                    function f(a) {
                        var b = a,
                            c = " - ",
                            d = " -> ",
                            f = [];
                        this.jump = function(a, c) {
                            if (!c) throw new Error("Please tell fsm the reason to jump");
                            var d, g, h = b,
                                j = [h, a].concat([].slice.call(arguments, 1));
                            for (d = 0; d < f.length; d++) if (g = f[d], e(g.condition, "before", h, a) && g.apply(null, j)) return;
                            for (b = a, i.log("[{0}] {1} -> {2}", c, h, a), d = 0; d < f.length; d++) g = f[d],
                            e(g.condition, "after", h, a) && g.apply(null, j);
                            return b
                        },
                            this.state = function() {
                                return b
                            },
                            this.when = function(a, b) {
                                1 == arguments.length && (b = a, a = "* -> *");
                                var e, g, h, i;
                                if (g = a.split(c), 2 == g.length ? e = "before": (g = a.split(d), 2 == g.length && (e = "after")), !e) throw new Error("Illegal fsm condition: " + a);
                                h = g[0],
                                    i = g[1],
                                    b.condition = {
                                        when: e,
                                        exit: h,
                                        enter: i
                                    },
                                    f.push(b)
                            }
                    }
                    function g() {
                        this.fsm = new f("normal")
                    }
                    var h = b.r(19),
                        i = new h("fsm");
                    return d.exports = g
                }
            },
            b[10] = {
                value: function(a, c, d) {
                    function e() {
                        function a() {
                            m = [],
                                n = [],
                                k = o.exportJson()
                        }
                        function b() {
                            var a = o.exportJson(),
                                b = f(a, k);
                            if (b.length) {
                                for (m.push(b); m.length > q;) m.shift();
                                return k = a,
                                    !0
                            }
                        }
                        function c() {
                            var a = o.exportJson();
                            n.push(f(a, k)),
                                k = a
                        }
                        function d() {
                            l = !0;
                            var a = m.pop();
                            a && (o.applyPatches(a), c()),
                                l = !1
                        }
                        function e() {
                            l = !0;
                            var a = n.pop();
                            a && (o.applyPatches(a), b()),
                                l = !1
                        }
                        function g() {
                            l || b() && (n = [])
                        }
                        function h() {
                            return !! m.length
                        }
                        function i() {
                            return !! n.length
                        }
                        function j(a) {
                            if (l) {
                                var b = a.patch;
                                switch (b.express) {
                                    case "node.add":
                                        o.select(b.node.getChild(b.index), !0);
                                        break;
                                    case "node.remove":
                                    case "data.replace":
                                    case "data.remove":
                                    case "data.add":
                                        o.select(b.node, !0)
                                }
                            }
                        }
                        var k, l, m, n, o = this.minder,
                            p = this.hotbox,
                            q = 100;
                        this.history = {
                            reset: a,
                            undo: d,
                            redo: e,
                            hasUndo: h,
                            hasRedo: i
                        },
                            a(),
                            o.on("contentchange", g),
                            o.on("import", a),
                            o.on("patch", j);
                        var r = p.state("main");
                        r.button({
                            position: "top",
                            label: "??????",
                            key: "Ctrl + Z",
                            enable: h,
                            action: d,
                            next: "idle"
                        }),
                            r.button({
                                position: "top",
                                label: "??????",
                                key: "Ctrl + Y",
                                enable: i,
                                action: e,
                                next: "idle"
                            })
                    }
                    var f = b.r(22);
                    return window.diff = f,
                        d.exports = e
                }
            },
            b[11] = {
                value: function(a, c, d) {
                    function e() {
                        var a = this.fsm,
                            b = this.minder,
                            c = this.receiver,
                            d = this.container,
                            e = new f(d);
                        e.setParentFSM(a),
                            a.when("normal -> hotbox",
                                function(a, c, d) {
                                    var f, g = b.getSelectedNode();
                                    if (g) {
                                        var h = g.getRenderBox();
                                        f = {
                                            x: h.cx,
                                            y: h.cy
                                        }
                                    }
                                    e.active("main", f)
                                }),
                            a.when("normal -> normal",
                                function(a, c, d, f) {
                                    if ("shortcut-handle" == d) {
                                        var g = e.dispatch(f);
                                        g ? f.preventDefault() : b.dispatchKeyEvent(f)
                                    }
                                }),
                            a.when("modal -> normal",
                                function(a, b, d, e) {
                                    "import-text-finish" == d && c.element.focus()
                                }),
                            this.hotbox = e
                    }
                    var f = b.r(2);
                    return d.exports = e
                }
            },
            b[12] = {
                value: function(a, c, d) {
                    function e() {
                        function a() {
                            l.when("* -> input", e),
                                l.when("input -> *",
                                    function(a, b, c) {
                                        switch (c) {
                                            case "input-cancel":
                                                return j();
                                            case "input-commit":
                                            default:
                                                return i()
                                        }
                                    }),
                                o.onblur(function(a) {
                                    "input" == l.state() && l.jump("normal", "input-commit")
                                }),
                                m.on("beforemousedown",
                                    function() {
                                        "input" == l.state() && l.jump("normal", "input-commit")
                                    }),
                                m.on("dblclick",
                                    function() {
                                        m.getSelectedNode() && d()
                                    })
                        }
                        function b() {
                            g.flaged && p.classList.add("debug"),
                                p.onmousedown = function(a) {
                                    a.stopPropagation()
                                },
                                m.on("layoutallfinish viewchange viewchanged selectionchange",
                                    function(a) { ("viewchange" != a.type || "input" == l.state()) && k()
                                    }),
                                k()
                        }
                        function c() {
                            n.state("main").button({
                                position: "center",
                                label: "??????",
                                key: "F2",
                                enable: function() {
                                    return - 1 != m.queryCommandState("text")
                                },
                                action: d
                            })
                        }
                        function d() {
                            var a = m.getSelectedNode();
                            if (a) {
                                var b = p;
                                if (p.innerText = "", "bold" === a.getData("font-weight")) {
                                    var c = document.createElement("b");
                                    b.appendChild(c),
                                        b = c
                                }
                                if ("italic" === a.getData("font-style")) {
                                    var d = document.createElement("i");
                                    b.appendChild(d),
                                        b = d
                                }
                                b.innerText = m.queryCommandValue("text"),
                                q && o.fixFFCaretDisappeared(),
                                    l.jump("input", "input-request"),
                                    o.selectAll()
                            }
                        }
                        function e() {
                            var a = m.getSelectedNode();
                            if (a) {
                                var b = a.getData("font-size") || a.getStyle("font-size");
                                p.style.fontSize = b + "px",
                                    p.style.minWidth = 0,
                                    p.style.minWidth = p.clientWidth + "px",
                                    p.style.fontWeight = a.getData("font-weight") || "",
                                    p.style.fontStyle = a.getData("font-style") || "",
                                    p.classList.add("input"),
                                    p.focus()
                            }
                        }
                        function f(a) {
                            for (var b, c, d, e = "",
                                     f = "	",
                                     g = "\n",
                                     h = /\S/,
                                     i = " ",
                                     k = new RegExp("( |" + String.fromCharCode(160) + ")"), l = document.createElement("br"), n = !1, o = !1, p = 0, q = a.length; q > p; p++) switch (b = a[p], Object.prototype.toString.call(b)) {
                                case "[object HTMLBRElement]":
                                    e += g;
                                    break;
                                case "[object Text]":
                                    if (b = b.textContent.replace("&nbsp;", " "), h.test(b)) e += b;
                                    else for (d = b.length; d--;) k.test(b[d]) ? e += i: b[d] === f && (e += f);
                                    break;
                                case "[object HTMLElement]":
                                    switch (b.nodeName) {
                                        case "B":
                                            n = !0;
                                            break;
                                        case "I":
                                            o = !0
                                    } [].splice.apply(a, [p, 1].concat([].slice.call(b.childNodes))),
                                    q = a.length,
                                    p--;
                                    break;
                                case "[object HTMLSpanElement]":
                                    [].splice.apply(a, [p, 1].concat([].slice.call(b.childNodes))),
                                        q = a.length,
                                        p--;
                                    break;
                                case "[object HTMLImageElement]":
                                    b.src && /http(|s):\/\//.test(b.src) && m.execCommand("Image", b.src, b.alt);
                                    break;
                                case "[object HTMLDivElement]":
                                    c = [];
                                    for (var r = 0,
                                             q = b.childNodes.length; q > r; r++) c.push(b.childNodes[r]);
                                    c.push(l),
                                        [].splice.apply(a, [p, 1].concat(c)),
                                        q = a.length,
                                        p--;
                                    break;
                                default:
                                    if (b && b.childNodes.length) {
                                        c = [];
                                        for (var r = 0,
                                                 q = b.childNodes.length; q > r; r++) c.push(b.childNodes[r]);
                                        c.push(l),
                                            [].splice.apply(a, [p, 1].concat(c)),
                                            q = a.length,
                                            p--
                                    } else e += b && void 0 !== b.textContent ? b.textContent: ""
                            }
                            return e = e.replace(/^\n*|\n*$/g, ""),
                                e = e.replace(new RegExp("(\n|\r|\n\r)( |" + String.fromCharCode(160) + "){4}", "g"), "$1	"),
                                m.getSelectedNode().setText(e),
                                n ? m.queryCommandState("bold") || m.execCommand("bold") : m.queryCommandState("bold") && m.execCommand("bold"),
                                o ? m.queryCommandState("italic") || m.execCommand("italic") : m.queryCommandState("italic") && m.execCommand("italic"),
                                j(),
                                e
                        }
                        function h(a, b) {
                            try {
                                m.decodeData("text", b).then(function(b) {
                                    function c(a, b, d) {
                                        var e = b.data;
                                        a.setText(e.text || "");
                                        for (var f = b.children || [], g = 0; g < f.length; g++) {
                                            var h = d.createNode(null, a);
                                            c(h, f[g], d)
                                        }
                                        return a
                                    }
                                    c(a, b, m),
                                        m.fire("contentchange"),
                                        m.getRoot().renderTree(),
                                        m.layout(300)
                                })
                            } catch(c) {
                                if (m.fire("contentchange"), m.getRoot().renderTree(), "Error: Invalid local format" !== c.toString()) throw c
                            }
                        }
                        function i() {
                            var a = [].slice.call(p.childNodes);
                            setTimeout(function() {
                                    p.innerHTML = ""
                                },
                                0);
                            var b = m.getSelectedNode();
                            if (a = f(a), h(b, a), "root" == b.type) {
                                var c = m.getRoot().getText();
                                m.fire("initChangeRoot", {
                                    text: c
                                })
                            }
                        }
                        function j() {
                            p.classList.remove("input"),
                                o.selectAll()
                        }
                        function k() {
                            var a = k,
                                b = m.getSelectedNode();
                            b && (a.timer || (a.timer = setTimeout(function() {
                                var c = b.getRenderBox("TextRenderer");
                                p.style.left = Math.round(c.x) + "px",
                                    p.style.top = (g.flaged ? Math.round(c.bottom + 30) : Math.round(c.y)) + "px",
                                    a.timer = 0
                            })))
                        }
                        var l = this.fsm,
                            m = this.minder,
                            n = this.hotbox,
                            o = this.receiver,
                            p = o.element,
                            q = window.kity.Browser.gecko;
                        b(),
                            a(),
                            c(),
                            this.editText = d
                    }
                    b.r(21);
                    var f = b.r(19),
                        g = new f("input");
                    return d.exports = e
                }
            },
            b[13] = {
                value: function(a, c, d) {
                    function e(a) {
                        return a.ctrlKey || a.metaKey || a.altKey ? !1 : a.keyCode >= 65 && a.keyCode <= 90 ? !0 : a.keyCode >= 48 && a.keyCode <= 57 ? !0 : 108 != a.keyCode && a.keyCode >= 96 && a.keyCode <= 111 ? !0 : 108 != a.keyCode && a.keyCode >= 96 && a.keyCode <= 111 ? !0 : 229 == a.keyCode || 0 === a.keyCode ? !0 : !1
                    }
                    function f() {
                        var a = this.fsm,
                            b = this.minder,
                            c = this.receiver,
                            d = this.container,
                            f = c.element,
                            h = this.hotbox;
                        c.listen("normal",
                            function(d) {
                                if (c.enable(), d.is("Space")) return d.preventDefault(),
                                kity.Browser.safari && (f.innerHTML = ""),
                                    a.jump("hotbox", "space-trigger");
                                switch (d.type) {
                                    case "keydown":
                                        if (b.getSelectedNode()) {
                                            if (e(d)) return a.jump("input", "user-input")
                                        } else f.innerHTML = "";
                                        a.jump("normal", "shortcut-handle", d);
                                        break;
                                    case "keyup":
                                }
                            }),
                            c.listen("hotbox",
                                function(b) {
                                    c.disable(),
                                        b.preventDefault();
                                    h.dispatch(b);
                                    return h.state() == g.STATE_IDLE && "hotbox" == a.state() ? a.jump("normal", "hotbox-idle") : void 0
                                }),
                            c.listen("input",
                                function(b) {
                                    if (c.enable(), "keydown" == b.type) {
                                        if (b.is("Enter")) return b.preventDefault(),
                                            a.jump("normal", "input-commit");
                                        if (b.is("Esc")) return b.preventDefault(),
                                            a.jump("normal", "input-cancel"); (b.is("Tab") || b.is("Shift + Tab")) && b.preventDefault()
                                    } else if ("keyup" == b.type && b.is("Esc")) return b.preventDefault(),
                                        a.jump("normal", "input-cancel")
                                });
                        var i, j, k = 2;
                        d.addEventListener("mousedown",
                            function(b) {
                                b.button == k && b.preventDefault(),
                                    "hotbox" == a.state() ? (h.active(g.STATE_IDLE), a.jump("normal", "blur")) : "normal" == a.state() && b.button == k && (i = b.clientX, j = b.clientY)
                            },
                            !1),
                            d.addEventListener("mousewheel",
                                function(b) {
                                    "hotbox" == a.state() && (h.active(g.STATE_IDLE), a.jump("normal", "mousemove-blur"))
                                },
                                !1),
                            d.addEventListener("contextmenu",
                                function(a) {
                                    a.preventDefault()
                                }),
                            d.addEventListener("mouseup",
                                function(c) {
                                    "normal" == a.state() && c.button == k && c.clientX == i && c.clientY == j && b.getSelectedNode() && a.jump("hotbox", "content-menu")
                                },
                                !1),
                            h.$element.addEventListener("mousedown",
                                function(a) {
                                    a.stopPropagation()
                                })
                    }
                    var g = b.r(2);
                    return d.exports = f
                }
            },
            b[14] = {
                value: function(a, c, d) {
                    function e() {
                        var a = new f({
                            enableKeyReceiver: !1,
                            enableAnimation: !0
                        });
                        a.renderTo(this.selector),
                            a.setTheme(null),
                            a.select(a.getRoot(), !0),
                            // a.execCommand("text", "?????????????????????"),
                             kjdata='{"root":{"data":{"id":"cp94x17k4p40","created":1671792319809,"text":"?????????????????????????????????","expandState":"expand"},"children":[{"data":{"id":"cp94x2yt2b40","created":1671792323634,"text":"????????? ??????","expandState":"expand"},"children":[{"data":{"id":"cp94x2ytln40","created":1671792323634,"text":"????????? ???????????????","expandState":"expand"},"children":[{"data":{"id":"cp94x2ytft40","created":1671792323634,"text":"????????????","expandState":"collapse"},"children":[{"data":{"id":"cp94x2ytwd40","created":1671792323635,"text":"???-???????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2ytuig0","created":1671792323635,"text":"???-????????????????????????????????????"},"children":[{"data":{"id":"cp94x2yu1qw0","created":1671792323635,"text":"???????????????"},"children":[]},{"data":{"id":"cp94x2yu5zc0","created":1671792323635,"text":"???????????????"},"children":[]},{"data":{"id":"cp94x2ytn9k0","created":1671792323635,"text":"?????????"},"children":[]},{"data":{"id":"cp94x2ytors0","created":1671792323635,"text":"?????????????????????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2yubyo0","created":1671792323636,"text":"?????????????????????????????????","expandState":"collapse"},"children":[{"data":{"id":"cp94x2yufko0","created":1671792323636,"text":"???????????????"},"children":[{"data":{"id":"cp94x2yuhts0","created":1671792323636,"text":"??????????????????"},"children":[]},{"data":{"id":"cp94x2yukko0","created":1671792323636,"text":"??????????????????"},"children":[]},{"data":{"id":"cp94x2yudio0","created":1671792323636,"text":"??????????????????"},"children":[]}]},{"data":{"id":"cp94x2yuj740","created":1671792323636,"text":"?????????"},"children":[{"data":{"id":"cp94x2yupk00","created":1671792323636,"text":"??????"},"children":[{"data":{"id":"cp94x2yuy5c0","created":1671792323637,"text":"?????????????????????"},"children":[]},{"data":{"id":"cp94x2yuteo0","created":1671792323637,"text":"????????????????????????????????????"},"children":[{"data":{"id":"cp94x2yuuhs0","created":1671792323637,"text":"???????????????"},"children":[]},{"data":{"id":"cp94x2yuyao0","created":1671792323637,"text":"??????????????????"},"children":[]},{"data":{"id":"cp94x2yuvag0","created":1671792323637,"text":"????????????"},"children":[]},{"data":{"id":"cp94x2yvdeg0","created":1671792323637,"text":"???????????????"},"children":[]}]},{"data":{"id":"cp94x2yvigo0","created":1671792323638,"text":"??????"},"children":[]}]},{"data":{"id":"cp94x2yvqps0","created":1671792323638,"text":"??????"},"children":[{"data":{"id":"cp94x2yvw200","created":1671792323638,"text":"?????????????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2yvlqo0","created":1671792323638,"text":"??????"},"children":[{"data":{"id":"cp94x2yvv200","created":1671792323638,"text":"???????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2yvrs80","created":1671792323638,"text":"???"},"children":[]},{"data":{"id":"cp94x2yvym80","created":1671792323638,"text":"????????????"},"children":[]},{"data":{"id":"cp94x2yvw2w0","created":1671792323638,"text":"???????????????"},"children":[]},{"data":{"id":"cp94x2ywii00","created":1671792323639,"text":"????????????????????????"},"children":[]}]}]}]},{"data":{"id":"cp94x2yw8280","created":1671792323639,"text":"????????????","expandState":"collapse"},"children":[{"data":{"id":"cp94x2ywhgg0","created":1671792323639,"text":"????????????"},"children":[{"data":{"id":"cp94x2yw6hs0","created":1671792323639,"text":"???????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2ywkdc0","created":1671792323639,"text":"????????????"},"children":[{"data":{"id":"cp94x2yw2vc0","created":1671792323639,"text":"????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2yw26g0","created":1671792323639,"text":"???????????????????????????"},"children":[]},{"data":{"id":"cp94x2yw3jk0","created":1671792323639,"text":"??????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2ywpbs0","created":1671792323640,"text":"????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2ywr6g0","created":1671792323640,"text":"???????????????????????????"},"children":[]},{"data":{"id":"cp94x2ywm3k0","created":1671792323640,"text":"??????????????????????????????"},"children":[]},{"data":{"id":"cp94x2ywucg0","created":1671792323640,"text":"???????????????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2ywqog0","created":1671792323640,"text":"????????????????????????","expandState":"collapse"},"children":[{"data":{"id":"cp94x2ywy4w0","created":1671792323640,"text":"??????"},"children":[{"data":{"id":"cp94x2ywzwo0","created":1671792323640,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2yx7ao0","created":1671792323641,"text":"??????????????????(2022)"},"children":[{"data":{"id":"cp94x2yxag80","created":1671792323641,"text":"???????????????????????????????????????????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2yxnhc0","created":1671792323641,"text":"???????????????????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2yxlvk0","created":1671792323641,"text":"??????????????????????????????????????????????????????????????????????????????????????????"},"children":[{"data":{"id":"cp94x2yxqew0","created":1671792323641,"text":"???????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2yxo2w0","created":1671792323641,"text":"???????????????????????????????????????????????????????????????????????????"},"children":[{"data":{"id":"cp94x2yxrow0","created":1671792323641,"text":"??????????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2yxx2g0","created":1671792323642,"text":"???????????????????????????????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2yyb7c0","created":1671792323642,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2yy8rs0","created":1671792323642,"text":"???????????????????????????????????????????????????????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2yyd140","created":1671792323642,"text":"????????????????????????????????????(2022)"},"children":[{"data":{"id":"cp94x2yy0740","created":1671792323642,"text":"????????????????????????"},"children":[]},{"data":{"id":"cp94x2yy0ug0","created":1671792323642,"text":"????????????????????????"},"children":[]},{"data":{"id":"cp94x2yyr3k0","created":1671792323643,"text":"??????????????????"},"children":[]},{"data":{"id":"cp94x2yyfy00","created":1671792323643,"text":"????????????????????????"},"children":[]},{"data":{"id":"cp94x2yyixk0","created":1671792323643,"text":"???????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2yyleo0","created":1671792323643,"text":"?????????????????????????????????????????????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2yzirs0","created":1671792323644,"text":"??????"},"children":[{"data":{"id":"cp94x2yz8yg0","created":1671792323644,"text":"????????????????????????"},"children":[{"data":{"id":"cp94x2yz3yw0","created":1671792323644,"text":"?????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2yzexc0","created":1671792323644,"text":"?????????????????????"},"children":[{"data":{"id":"cp94x2yz0i00","created":1671792323644,"text":"????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2yze1s0","created":1671792323644,"text":"?????????????????????"},"children":[{"data":{"id":"cp94x2yzhco0","created":1671792323644,"text":"????????????"},"children":[]}]},{"data":{"id":"cp94x2yz6000","created":1671792323644,"text":"?????????????????????"},"children":[{"data":{"id":"cp94x2yzilc0","created":1671792323644,"text":"???????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2yzq480","created":1671792323645,"text":"?????????????????????"},"children":[{"data":{"id":"cp94x2yzug00","created":1671792323645,"text":"????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2yzxxs0","created":1671792323645,"text":"???????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z05l40","created":1671792323645,"text":"???????????????????????????","expandState":"collapse"},"children":[{"data":{"id":"cp94x2yzt3s0","created":1671792323645,"text":"1.???????????????????????????2.????????????3.????????????4.????????????"},"children":[]},{"data":{"id":"cp94x2yzpm80","created":1671792323645,"text":"5.????????????6.?????????7.???????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2yzrwg0","created":1671792323645,"text":"??????????????????(2022)","expandState":"collapse"},"children":[{"data":{"id":"cp94x2z02u80","created":1671792323645,"text":"????????????"},"children":[{"data":{"id":"cp94x2yzx2w0","created":1671792323645,"text":"??????"},"children":[{"data":{"id":"cp94x2yzx9c0","created":1671792323645,"text":"???????????????????????????????????? ???????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z0n5s0","created":1671792323646,"text":"??????"},"children":[{"data":{"id":"cp94x2z0olk0","created":1671792323646,"text":"?????????????????? ?????????????????????????????????????????? ?????????\\n???????????????????????????????????????????????????????????????????????????\\n??????????????????????????????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z08ls0","created":1671792323646,"text":"????????????"},"children":[{"data":{"id":"cp94x2z0gm80","created":1671792323646,"text":"????????????"},"children":[{"data":{"id":"cp94x2z0dd40","created":1671792323646,"text":"(??????????????????????????????????????????)+????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z06w80","created":1671792323646,"text":"????????????"},"children":[{"data":{"id":"cp94x2z0pkg0","created":1671792323646,"text":"????????????"},"children":[{"data":{"id":"cp94x2z0oz40","created":1671792323646,"text":"?????????????????????????????????????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z0ds80","created":1671792323646,"text":"????????????"},"children":[{"data":{"id":"cp94x2z0r0w0","created":1671792323646,"text":"???????????????????????????????????????????????????????????????????????????\\n?????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z1bm00","created":1671792323647,"text":"????????????"},"children":[{"data":{"id":"cp94x2z18m00","created":1671792323647,"text":"???????????????????????????????????????????????????????????????????????????\\n????????????????????????????????????????????????"},"children":[]}]}]}]}]},{"data":{"id":"cp94x2z14oo0","created":1671792323647,"text":"????????????????????? ???","expandState":"expand"},"children":[{"data":{"id":"cp94x2z0za80","created":1671792323647,"text":"???????????????????????????","expandState":"collapse"},"children":[{"data":{"id":"cp94x2z0xtk0","created":1671792323647,"text":"??????)?????????"},"children":[{"data":{"id":"cp94x2z15340","created":1671792323647,"text":"???????????????????????????????????????????????????????????????????????????\\n??????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z0zbs0","created":1671792323647,"text":"1 ?????????????????????????????????????????????????????????????????????\\n????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z14rk0","created":1671792323647,"text":"??????????????????????????????????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z1lsw0","created":1671792323648,"text":"???????????????????????????????????????????????????????????????????????????\\n?????????????????????:???????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z1rfc0","created":1671792323648,"text":"(???)??????"},"children":[{"data":{"id":"cp94x2z1lcw0","created":1671792323648,"text":"??????"},"children":[{"data":{"id":"cp94x2z1tso0","created":1671792323648,"text":"???????????????????????????????????????????????????????????????????????????\\n?????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z1nqg0","created":1671792323648,"text":"?????????????????????"},"children":[{"data":{"id":"cp94x2z1dxk0","created":1671792323648,"text":"?????????????????????????????????"},"children":[{"data":{"id":"cp94x2z1y140","created":1671792323648,"text":"??????????????????????????????????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z1zwg0","created":1671792323649,"text":"???????????????????????????????????????????????????????????????????????????\\n?????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z2i3k0","created":1671792323649,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n??????????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z2j3s0","created":1671792323649,"text":"????????????"},"children":[{"data":{"id":"cp94x2z21400","created":1671792323649,"text":"????????????????????????????????????????????????????????????(?????????????????????????????????)???"},"children":[]}]},{"data":{"id":"cp94x2z2iw80","created":1671792323649,"text":"?????????????????????"},"children":[{"data":{"id":"cp94x2z1zvc0","created":1671792323649,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n?????????????????????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z2ii80","created":1671792323649,"text":"????????????"},"children":[{"data":{"id":"cp94x2z28kg0","created":1671792323649,"text":"?????????????????????????????? ?????????????????????????????? ?????????"},"children":[{"data":{"id":"cp94x2z31mg0","created":1671792323650,"text":"?????????????????????"},"children":[{"data":{"id":"cp94x2z2qh40","created":1671792323650,"text":"????????????????????????????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z2zjc0","created":1671792323650,"text":"????????????????????????"},"children":[{"data":{"id":"cp94x2z2jzc0","created":1671792323650,"text":"???????????????????????????????????????????????????????????????????????????\\n?????????????????????????????????"},"children":[]}]}]}]},{"data":{"id":"cp94x2z2wls0","created":1671792323650,"text":"???????????????"},"children":[{"data":{"id":"cp94x2z332g0","created":1671792323650,"text":"?????????????????????????????? ?????????????????????????????? ?????????\\n????????????????????? ??????????????????????????????"},"children":[{"data":{"id":"cp94x2z2o1k0","created":1671792323650,"text":"????????????"},"children":[]},{"data":{"id":"cp94x2z2mdk0","created":1671792323650,"text":"????????????"},"children":[]},{"data":{"id":"cp94x2z316g0","created":1671792323650,"text":"?????????????????????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z2u0g0","created":1671792323650,"text":"????????????"},"children":[{"data":{"id":"cp94x2z3jrs0","created":1671792323651,"text":"?????????????????????????????? ??????????????????????????????"},"children":[{"data":{"id":"cp94x2z3pvs0","created":1671792323651,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????"},"children":[]}]}]}]},{"data":{"id":"cp94x2z3qi80","created":1671792323651,"text":"(???)???????????????"},"children":[{"data":{"id":"cp94x2z3bds0","created":1671792323651,"text":"???????????????????????????????????????????????????????????????????????????\\n????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z3kbs0","created":1671792323651,"text":"???????????????????????????????????????????????????????????????????????????\\n??????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z379s0","created":1671792323651,"text":"(???)??????"},"children":[{"data":{"id":"cp94x2z39yo0","created":1671792323651,"text":"???????????????????????????????????????????????????????????????????????????\\n??????????????????????????????????????????????????????????????????;??????\\n???????????????????????????????????????????????????????????????????????????\\n??????????????????????????????????????????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z3iug0","created":1671792323651,"text":"???????????????????????????","expandState":"collapse"},"children":[{"data":{"id":"cp94x2z3lpk0","created":1671792323651,"text":"??????)????????????"},"children":[{"data":{"id":"cp94x2z3zbc0","created":1671792323652,"text":"?????????????????????"},"children":[{"data":{"id":"cp94x2z3zxs0","created":1671792323652,"text":"???????????????????????????????????????????????????????????????????????????\\n??????????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z3v8g0","created":1671792323652,"text":"????????????????????????"},"children":[{"data":{"id":"cp94x2z3xa00","created":1671792323652,"text":"???????????????????????????????????????????????????????????????????????????\\n??? ?????????????????????????????????????????????????????????????????????\\n???????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z49ns0","created":1671792323652,"text":"??????)????????????"},"children":[{"data":{"id":"cp94x2z3uvs0","created":1671792323652,"text":"??????????????????????????????"},"children":[{"data":{"id":"cp94x2z3zfk0","created":1671792323652,"text":"1????????????????????????????????????"},"children":[{"data":{"id":"cp94x2z3vhc0","created":1671792323652,"text":"???1???18???????????? ???2???16?????????????????? 18 \\n????????????????????????????????????????????????????????? ???????????????\\n??????????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z4gk80","created":1671792323653,"text":"2????????????????????????????????????"},"children":[{"data":{"id":"cp94x2z4lrs0","created":1671792323653,"text":"???1???8 ??????????????????18????????? ???2?????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z4w680","created":1671792323653,"text":"????????????4?????????????????????"},"children":[{"data":{"id":"cp94x2z4k6w0","created":1671792323653,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n????????????????????????????????????15???????????????20????????????\\n??????????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z4ra00","created":1671792323653,"text":"????????????"},"children":[{"data":{"id":"cp94x2z4ceg0","created":1671792323653,"text":"???????????????????????????????????????????????????????????????????????????\\n A.???????????? (?????????)/"},"children":[]},{"data":{"id":"cp94x2z4dc00","created":1671792323653,"text":"??????????????????????????????????????????????????? A.8????????????\\n??????????????????????????? (?????????)/ B.??????????????????\\n??????????????????????????? ???(???>??<)?????????????????? C\\n.??????????????????????????????????????????????????????25??? ???(\\n???>??<)???????????????20?????? D.10??????????????????\\n??????????????????????????????6000???????????? ???(???>??<\\n)???10????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z54gw0","created":1671792323654,"text":"?????????????????????15?????????????????????2????????????????????????\\n???3?????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????? \\nA.??????"},"children":[{"data":{"id":"cp94x2z58d40","created":1671792323654,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z5gls0","created":1671792323654,"text":"??????16?????????????????????10????????????????????????????????????\\n????????????() C.??????????????????????????? (?????????)/"},"children":[{"data":{"id":"cp94x2z51280","created":1671792323654,"text":"??????????????????16???????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n??????"},"children":[]}]},{"data":{"id":"cp94x2z59iw0","created":1671792323654,"text":"?????????????????????????????????16????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n??????"},"children":[{"data":{"id":"cp94x2z55qw0","created":1671792323654,"text":"???????????????????????????????????????????????????????????????????????????\\n?????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z52140","created":1671792323654,"text":"??????????????????????????? ??????36????????????????????????????????????????????????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z5gn40","created":1671792323654,"text":"3?????????????????????????????????"},"children":[{"data":{"id":"cp94x2z4xo00","created":1671792323654,"text":"???1?????????8????????????????????? ???2?????????????????????????????????"},"children":[{"data":{"id":"cp94x2z5gzk0","created":1671792323654,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n??????"},"children":[]}]},{"data":{"id":"cp94x2z619s0","created":1671792323655,"text":"????????????"},"children":[{"data":{"id":"cp94x2z62ps0","created":1671792323655,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????"},"children":[{"data":{"id":"cp94x2z5v6w0","created":1671792323655,"text":"??????"},"children":[]}]},{"data":{"id":"cp94x2z5mls0","created":1671792323655,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n?????????"},"children":[]}]}]}]},{"data":{"id":"cp94x2z5jew0","created":1671792323655,"text":"??????????????????????????????"},"children":[{"data":{"id":"cp94x2z5ryw0","created":1671792323655,"text":"14??????<X<16??????"},"children":[{"data":{"id":"cp94x2z5xzs0","created":1671792323655,"text":"??????????????????????????????????????????????????????????????? ?????????\\n?????????????????????????????????????????????????????????"},"children":[{"data":{"id":"cp94x2z6ck00","created":1671792323656,"text":"???????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z6o0o0","created":1671792323656,"text":"14??????<X<18??????"},"children":[{"data":{"id":"cp94x2z6mw80","created":1671792323656,"text":"??????"},"children":[{"data":{"id":"cp94x2z6a7c0","created":1671792323656,"text":"?????????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z6goo0","created":1671792323656,"text":"X>18??????"},"children":[{"data":{"id":"cp94x2z69y00","created":1671792323656,"text":"??????"},"children":[{"data":{"id":"cp94x2z6glk0","created":1671792323656,"text":"???????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z6byg0","created":1671792323656,"text":"X>75??????"},"children":[{"data":{"id":"cp94x2z6fbk0","created":1671792323656,"text":"????????????"},"children":[{"data":{"id":"cp94x2z79140","created":1671792323657,"text":"????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z74jk0","created":1671792323657,"text":"????????????"},"children":[{"data":{"id":"cp94x2z73080","created":1671792323657,"text":"???????????????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z6ycg0","created":1671792323657,"text":"????????????"},"children":[{"data":{"id":"cp94x2z6z280","created":1671792323657,"text":"?????????????????????????????????????????????????????????"},"children":[{"data":{"id":"cp94x2z77pc0","created":1671792323657,"text":"??????????????????"},"children":[]}]},{"data":{"id":"cp94x2z6xr40","created":1671792323657,"text":"?????????????????????"},"children":[{"data":{"id":"cp94x2z6rx40","created":1671792323657,"text":"???????????????"},"children":[]}]},{"data":{"id":"cp94x2z79x40","created":1671792323657,"text":"?????????????????????????????????????????????"},"children":[{"data":{"id":"cp94x2z6u740","created":1671792323657,"text":"????????????????????????"},"children":[]}]}]}]}]}]}]},{"data":{"id":"cp94x2z7c0w0","created":1671792323658,"text":"????????? ?????????????????????","expandState":"expand"},"children":[{"data":{"id":"cp94x2z7bhc0","created":1671792323658,"text":"??????","expandState":"collapse"},"children":[{"data":{"id":"cp94x2z7mlk0","created":1671792323658,"text":"????????????"},"children":[{"data":{"id":"cp94x2z7lew0","created":1671792323658,"text":"1.???????????? 2.???????????? 3.???????????? 4.??????\\n?????? 5.???????????? 6.????????????????????????"},"children":[]},{"data":{"id":"cp94x2z8aug0","created":1671792323659,"text":"7.???????????? 8.???????????? 9.??????????????? 10.??????????????????????????? 11.????????????"},"children":[]}]},{"data":{"id":"cp94x2z8h140","created":1671792323659,"text":"????????????"},"children":[{"data":{"id":"cp94x2z88wg0","created":1671792323659,"text":"????????????"},"children":[{"data":{"id":"cp94x2z897k0","created":1671792323659,"text":"1.?????? ???????????? 2.?????? 3.????????????????????????\\n??????????????? 4.?????????????????? 5.????????????????????????\\n???/?????? 6.???????????? 7.?????????????????????????????????\\n????????? 8.???????????? 9.?????????????????? 10.??????\\n????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z7wm00","created":1671792323659,"text":"????????????"},"children":[{"data":{"id":"cp94x2z81jk0","created":1671792323659,"text":"??????????????????????????????????????????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z8bi00","created":1671792323659,"text":"????????????"},"children":[{"data":{"id":"cp94x2z92o80","created":1671792323660,"text":"??????"},"children":[{"data":{"id":"cp94x2z8vw00","created":1671792323660,"text":"1.????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z8x0g0","created":1671792323660,"text":"2.??????????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z8zgo0","created":1671792323660,"text":"3.???????????????6????????????15?????????"},"children":[]},{"data":{"id":"cp94x2z8zqw0","created":1671792323660,"text":"4.?????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z8q4g0","created":1671792323660,"text":"5.???????????????2?????????"},"children":[]}]},{"data":{"id":"cp94x2z8odc0","created":1671792323660,"text":"?????????"},"children":[{"data":{"id":"cp94x2z8ygo0","created":1671792323660,"text":"?????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z8o8g0","created":1671792323660,"text":"1.??????"},"children":[]},{"data":{"id":"cp94x2z8rc00","created":1671792323660,"text":"2.??????????????????"},"children":[]},{"data":{"id":"cp94x2z94y80","created":1671792323661,"text":"3.????????????"},"children":[]},{"data":{"id":"cp94x2z94680","created":1671792323661,"text":"4.????????????"},"children":[]}]}]}]},{"data":{"id":"cp94x2z9ftk0","created":1671792323661,"text":"???????????????????????????","expandState":"collapse"},"children":[{"data":{"id":"cp94x2z9nq80","created":1671792323661,"text":"??????"},"children":[{"data":{"id":"cp94x2z98io0","created":1671792323661,"text":"??????"},"children":[{"data":{"id":"cp94x2z95eg0","created":1671792323661,"text":"1.???????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z9bcw0","created":1671792323661,"text":"2.??????????????????????????????????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z9d8w0","created":1671792323661,"text":"3.????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2z98y80","created":1671792323661,"text":"????????????"},"children":[{"data":{"id":"cp94x2z9l6o0","created":1671792323661,"text":"????????????????????????????????????????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z9bx40","created":1671792323661,"text":"????????????????????????"},"children":[{"data":{"id":"cp94x2za6zc0","created":1671792323662,"text":"1.????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2z9tqw0","created":1671792323662,"text":"2.????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2za33s0","created":1671792323662,"text":"????????????????????????"},"children":[{"data":{"id":"cp94x2za7mo0","created":1671792323662,"text":"1.????????????"},"children":[]},{"data":{"id":"cp94x2za0dk0","created":1671792323662,"text":"2.?????????????????????????????????????????????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2z9rs80","created":1671792323662,"text":"????????????"},"children":[{"data":{"id":"cp94x2z9x2g0","created":1671792323662,"text":"1.?????????????????????"},"children":[]},{"data":{"id":"cp94x2z9zhs0","created":1671792323662,"text":"2.????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2za9800","created":1671792323662,"text":"3.??????????????????"},"children":[]},{"data":{"id":"cp94x2za9ts0","created":1671792323662,"text":"4.??????????????????"},"children":[]}]}]},{"data":{"id":"cp94x2zabvk0","created":1671792323663,"text":"????????????"},"children":[{"data":{"id":"cp94x2zae2w0","created":1671792323663,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2zasm80","created":1671792323663,"text":"????????????"},"children":[{"data":{"id":"cp94x2zaveo0","created":1671792323663,"text":"???????????????????????????????????????????????????????????????????????????\\n?????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2zaaog0","created":1671792323663,"text":"1.?????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n??????????????????"},"children":[]},{"data":{"id":"cp94x2zad4w0","created":1671792323663,"text":"2.??????????????????????????????????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2zaadk0","created":1671792323663,"text":"3.?????????????????????????????????????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2zakv40","created":1671792323663,"text":"4.???????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2zaip40","created":1671792323663,"text":"5.???????????????????????????????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2zasm80","created":1671792323663,"text":"????????????"},"children":[{"data":{"id":"cp94x2zb3u80","created":1671792323664,"text":"????????????"},"children":[]},{"data":{"id":"cp94x2zayvs0","created":1671792323664,"text":"????????????"},"children":[]},{"data":{"id":"cp94x2zb3hc0","created":1671792323664,"text":"??????????????????"},"children":[{"data":{"id":"cp94x2zb0lc0","created":1671792323664,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2zaw400","created":1671792323664,"text":"??????????????????"},"children":[]}]},{"data":{"id":"cp94x2zb8e00","created":1671792323664,"text":"????????????"},"children":[{"data":{"id":"cp94x2zb7qw0","created":1671792323664,"text":"????????????"},"children":[{"data":{"id":"cp94x2zbf540","created":1671792323664,"text":"???????????????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2zb8kg0","created":1671792323664,"text":"????????????"},"children":[{"data":{"id":"cp94x2zb1e00","created":1671792323664,"text":"?????????????????? ???????????????"},"children":[]},{"data":{"id":"cp94x2zbhqg0","created":1671792323665,"text":"??????????????????"},"children":[]},{"data":{"id":"cp94x2zbjds0","created":1671792323665,"text":"????????????"},"children":[]},{"data":{"id":"cp94x2zbrk00","created":1671792323665,"text":"????????????"},"children":[]}]}]},{"data":{"id":"cp94x2zbz2o0","created":1671792323665,"text":"????????????"},"children":[{"data":{"id":"cp94x2zbh9k0","created":1671792323665,"text":"??????"},"children":[{"data":{"id":"cp94x2zbyiw0","created":1671792323665,"text":"???????????????????????????3???"},"children":[]},{"data":{"id":"cp94x2zbl9k0","created":1671792323665,"text":"???????????????????????????????????????????????????????????????20??????\\n???????????????????????????????????????????????????????????????????????????\\n???????????????"},"children":[]}]},{"data":{"id":"cp94x2zbx6g0","created":1671792323665,"text":"??????"},"children":[{"data":{"id":"cp94x2zbxe00","created":1671792323665,"text":"??????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2zbud40","created":1671792323665,"text":"??????"},"children":[]}]},{"data":{"id":"cp94x2zcj740","created":1671792323666,"text":"???????????????"},"children":[{"data":{"id":"cp94x2zc7c80","created":1671792323666,"text":"??????"},"children":[]},{"data":{"id":"cp94x2zcd0g0","created":1671792323666,"text":"??????"},"children":[{"data":{"id":"cp94x2zchdk0","created":1671792323666,"text":"???????????????????????????????????????????????????????????????????????????\\n????????????15???????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2zcl000","created":1671792323666,"text":"??????"},"children":[]}]}]},{"data":{"id":"cp94x2zckwo0","created":1671792323666,"text":"????????????"},"children":[{"data":{"id":"cp94x2zcbds0","created":1671792323666,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n???"},"children":[]},{"data":{"id":"cp94x2zcabk0","created":1671792323666,"text":"???????????????"},"children":[{"data":{"id":"cp94x2zciog0","created":1671792323666,"text":"???????????????????????????????????????????????????????????????????????????????????????"},"children":[]},{"data":{"id":"cp94x2zctx40","created":1671792323667,"text":"???????????????????????????????????????????????????????????????????????????\\n??????????????????????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2zd42o0","created":1671792323667,"text":"??????????????????????????????"},"children":[{"data":{"id":"cp94x2zcw5k0","created":1671792323667,"text":"???????????????????????????????????????60??????????????????????????????\\n????????????????????????????????????60???????????????"},"children":[]},{"data":{"id":"cp94x2zd0qg0","created":1671792323667,"text":"???????????????????????????"},"children":[]}]},{"data":{"id":"cp94x2zctr40","created":1671792323667,"text":"?????????????????????????????????"},"children":[{"data":{"id":"cp94x2zd4a80","created":1671792323667,"text":"???????????????"},"children":[{"data":{"id":"cp94x2zcto80","created":1671792323667,"text":"????????? ?????????????????? ???????????? ?????????????????????(2021)"},"children":[]}]}]}]},{"data":{"id":"cp94x2zcypc0","created":1671792323667,"text":"????????????"},"children":[{"data":{"id":"cp94x2zcwnc0","created":1671792323667,"text":"???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n???????????????????????????????????????????????????????????????????????????\\n??????????????????????????? ??????????????????????????? ?????????:c\\narrot8375"},"children":[]}]},{"data":{"id":"cp94x2zdi2g0","created":1671792323668,"text":"????????????"},"children":[]}]}]}]}]},"template":"default","theme":"fresh-blue","version":"1.4.33"}'
                        a.importData('json',  kjdata);

                            this.minder = a
                    }
                    var f = b.r(4);
                    return d.exports = e
                }
            },
            b[15] = {
                value: function(a, b, c) {
                    function d() {
                        function a() {
                            d.fire("importNodeData")
                        }
                        function b() {
                            d.fire("exportNodeData")
                        }
                        var c = this,
                            d = this.minder,
                            e = this.hotbox,
                            f = this.fsm,
                            g = e.state("main"),
                            h = ["??????:Alt+Up:ArrangeUp", "??????:Tab|Insert:AppendChildNode", "??????:Enter:AppendSiblingNode", "??????:Alt+Down:ArrangeDown", "??????:Delete|Backspace:RemoveNode", "??????:Shift+Tab|Shift+Insert:AppendParentNode"],
                            i = 0;
                        h.forEach(function(a) {
                            var b = a.split(":"),
                                e = b.shift(),
                                h = b.shift(),
                                j = b.shift();
                            g.button({
                                position: "ring",
                                label: e,
                                key: h,
                                action: function() {
                                    function a() {--i || c.editText(),
                                        d.off("layoutallfinish", a)
                                    }
                                    0 === j.indexOf("Append") ? (i++, d.execCommand(j, "????????????"), d.on("layoutallfinish", a)) : (d.execCommand(j), f.jump("normal", "command-executed"))
                                },
                                enable: function() {
                                    return - 1 != d.queryCommandState(j)
                                }
                            })
                        }),
                            g.button({
                                position: "bottom",
                                label: "????????????",
                                key: "Alt + V",
                                enable: function() {
                                    var a = d.getSelectedNodes();
                                    return 1 == a.length
                                },
                                action: a,
                                next: "idle"
                            }),
                            g.button({
                                position: "bottom",
                                label: "????????????",
                                key: "Alt + C",
                                enable: function() {
                                    var a = d.getSelectedNodes();
                                    return 1 == a.length
                                },
                                action: b,
                                next: "idle"
                            })
                    }
                    return c.exports = d
                }
            },
            b[16] = {
                value: function(a, b, c) {
                    function d() {
                        var a = this.minder,
                            b = this.hotbox,
                            c = b.state("main");
                        c.button({
                            position: "top",
                            label: "?????????",
                            key: "P",
                            next: "priority",
                            enable: function() {
                                return - 1 != a.queryCommandState("priority")
                            }
                        });
                        var d = b.state("priority");
                        "123456789".replace(/./g,
                            function(b) {
                                d.button({
                                    position: "ring",
                                    label: "P" + b,
                                    key: b,
                                    action: function() {
                                        a.execCommand("Priority", b)
                                    }
                                })
                            }),
                            d.button({
                                position: "center",
                                label: "??????",
                                key: "Del",
                                action: function() {
                                    a.execCommand("Priority", 0)
                                }
                            }),
                            d.button({
                                position: "top",
                                label: "??????",
                                key: "esc",
                                next: "back"
                            })
                    }
                    return c.exports = d
                }
            },
            b[17] = {
                value: function(a, b, c) {
                    function d() {
                        var a = this.minder,
                            b = this.hotbox,
                            c = b.state("main");
                        c.button({
                            position: "top",
                            label: "??????",
                            key: "G",
                            next: "progress",
                            enable: function() {
                                return - 1 != a.queryCommandState("progress")
                            }
                        });
                        var d = b.state("progress");
                        "012345678".replace(/./g,
                            function(b) {
                                d.button({
                                    position: "ring",
                                    label: "G" + b,
                                    key: b,
                                    action: function() {
                                        a.execCommand("Progress", parseInt(b) + 1)
                                    }
                                })
                            }),
                            d.button({
                                position: "center",
                                label: "??????",
                                key: "Del",
                                action: function() {
                                    a.execCommand("Progress", 0)
                                }
                            }),
                            d.button({
                                position: "top",
                                label: "??????",
                                key: "esc",
                                next: "back"
                            })
                    }
                    return c.exports = d
                }
            },
            b[18] = {
                value: function(a, c, d) {
                    function e() {
                        function a(a) {
                            a.is = function(a) {
                                for (var b = a.split("|"), c = 0; c < b.length; c++) if (f.is(this, b[c])) return ! 0;
                                return ! 1
                            };
                            for (var c, d = 0; d < g.length; d++) if (c = g[d], ("*" == c.notifyState || c.notifyState == b.state()) && c.call(null, a)) return
                        }
                        var b = this.fsm,
                            c = this.minder,
                            d = document.createElement("div");
                        d.contentEditable = !0,
                            d.setAttribute("tabindex", -1),
                            d.classList.add("receiver"),
                            d.onkeydown = d.onkeypress = d.onkeyup = a,
                            this.container.appendChild(d);
                        var e = {
                            element: d,
                            selectAll: function() {
                                d.innerHTML || (d.innerHTML = "&nbsp;");
                                var a = document.createRange(),
                                    b = window.getSelection();
                                a.selectNodeContents(d),
                                    b.removeAllRanges(),
                                    b.addRange(a),
                                    d.focus()
                            },
                            enable: function() {
                                d.setAttribute("contenteditable", !0)
                            },
                            disable: function() {
                                d.setAttribute("contenteditable", !1)
                            },
                            fixFFCaretDisappeared: function() {
                                d.removeAttribute("contenteditable"),
                                    d.setAttribute("contenteditable", "true"),
                                    d.blur(),
                                    d.focus()
                            },
                            onblur: function(a) {
                                d.onblur = a
                            }
                        };
                        e.selectAll(),
                            c.on("beforemousedown", e.selectAll),
                            c.on("receiverfocus", e.selectAll),
                            c.on("readonly",
                                function() {
                                    c.disable(),
                                        editor.receiver.element.parentElement.removeChild(editor.receiver.element),
                                        editor.hotbox.$container.removeChild(editor.hotbox.$element)
                                });
                        var g = [];
                        e.listen = function(a, b) {
                            1 == arguments.length && (b = a, a = "*"),
                                b.notifyState = a,
                                g.push(b)
                        },
                            this.receiver = e
                    }
                    var f = b.r(23);
                    b.r(2);
                    return d.exports = e
                }
            },
            b[19] = {
                value: function(a, c, d) {
                    function e() {}
                    function f(a) {
                        for (var b = 0,
                                 c = 0; c < a.length; c++) b += a.charCodeAt(c);
                        return b
                    }
                    function g(a) {
                        var b = this.flaged = -1 != window.location.search.indexOf(a);
                        if (b) {
                            var c = f(a) % 360,
                                d = h("background: hsl({0}, 50%, 80%); color: hsl({0}, 100%, 30%); padding: 2px 3px; margin: 1px 3px 0 0;border-radius: 2px;", c),
                                g = "background: none; color: black;";
                            this.log = function() {
                                var b = h.apply(null, arguments);
                                console.log(h("%c{0}%c{1}", a, b), d, g)
                            }
                        } else this.log = e
                    }
                    var h = b.r(20);
                    return d.exports = g
                }
            },
            b[20] = {
                value: function(a, b, c) {
                    function d(a, b) {
                        return "object" != typeof b && (b = [].slice.call(arguments, 1)),
                            String(a).replace(/\{(\w+)\}/gi,
                                function(a, c) {
                                    return b[c] || c
                                })
                    }
                    return c.exports = d
                }
            },
            b[21] = {
                value: function(a, b, c) { ! ("innerText" in document.createElement("a")) && "getSelection" in window && (HTMLElement.prototype.__defineGetter__("innerText",
                    function() {
                        var a, b, c = window.getSelection(),
                            d = [];
                        for (b = 0; b < c.rangeCount; b++) d[b] = c.getRangeAt(b);
                        for (c.removeAllRanges(), c.selectAllChildren(this), a = c.toString(), c.removeAllRanges(), b = 0; b < d.length; b++) c.addRange(d[b]);
                        return a
                    }), HTMLElement.prototype.__defineSetter__("innerText",
                    function(a) {
                        this.innerHTML = (a || "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>")
                    }))
                }
            },
            b[22] = {
                value: function(a, b, c) {
                    function d(a) {
                        return - 1 === a.indexOf("/") && -1 === a.indexOf("~") ? a: a.replace(/~/g, "~0").replace(/\//g, "~1")
                    }
                    function e(a) {
                        return "object" == typeof a ? JSON.parse(JSON.stringify(a)) : a
                    }
                    function f(a, b, c, g) {
                        for (var i = h(b), j = h(a), k = !1, l = !1, m = j.length - 1; m >= 0; m--) {
                            var n = j[m],
                                o = a[n];
                            if (b.hasOwnProperty(n)) {
                                var p = b[n];
                                "object" == typeof o && null != o && "object" == typeof p && null != p ? f(o, p, c, g + "/" + d(n)) : o != p && (k = !0, c.push({
                                    op: "replace",
                                    path: g + "/" + d(n),
                                    value: e(p)
                                }))
                            } else c.push({
                                op: "remove",
                                path: g + "/" + d(n)
                            }),
                                l = !0
                        }
                        if (l || i.length != j.length) for (var m = 0; m < i.length; m++) {
                            var n = i[m];
                            a.hasOwnProperty(n) || c.push({
                                op: "add",
                                path: g + "/" + d(n),
                                value: e(b[n])
                            })
                        }
                    }
                    function g(a, b) {
                        var c = [];
                        return f(a, b, c, ""),
                            c
                    }
                    var h = function() {
                        return Object.keys ? Object.keys: function(a) {
                            var b = [];
                            for (var c in a) a.hasOwnProperty(c) && b.push(c);
                            return b
                        }
                    } ();
                    return c.exports = g
                }
            },
            b[23] = {
                value: function(a, c, d) {
                    function e(a) {
                        return "string" == typeof a ? h(a) : g(a)
                    }
                    function f(a, b) {
                        return a && b && e(a) == e(b)
                    }
                    function g(a) {
                        var b = 0;
                        if ((a.ctrlKey || a.metaKey) && (b |= j), a.altKey && (b |= k), a.shiftKey && (b |= l), -1 === [16, 17, 18, 91].indexOf(a.keyCode)) {
                            if (229 === a.keyCode && a.keyIdentifier) return b |= parseInt(a.keyIdentifier.substr(2), 16);
                            b |= a.keyCode
                        }
                        return b
                    }
                    function h(a) {
                        var b = 0;
                        return a.toLowerCase().split(/\s*\+\s*/).forEach(function(a) {
                            switch (a) {
                                case "ctrl":
                                case "cmd":
                                    b |= j;
                                    break;
                                case "alt":
                                    b |= k;
                                    break;
                                case "shift":
                                    b |= l;
                                    break;
                                default:
                                    b |= i[a]
                            }
                        }),
                            b
                    }
                    var i = b.r(24),
                        j = 4096,
                        k = 8192,
                        l = 16384;
                    c.hash = e,
                        c.is = f
                }
            },
            b[24] = {
                value: function(a, b, c) {
                    var d = {
                        Shift: 16,
                        Control: 17,
                        Alt: 18,
                        CapsLock: 20,
                        BackSpace: 8,
                        Tab: 9,
                        Enter: 13,
                        Esc: 27,
                        Space: 32,
                        PageUp: 33,
                        PageDown: 34,
                        End: 35,
                        Home: 36,
                        Insert: 45,
                        Left: 37,
                        Up: 38,
                        Right: 39,
                        Down: 40,
                        Direction: {
                            37 : 1,
                            38 : 1,
                            39 : 1,
                            40 : 1
                        },
                        Del: 46,
                        NumLock: 144,
                        Cmd: 91,
                        CmdFF: 224,
                        F1: 112,
                        F2: 113,
                        F3: 114,
                        F4: 115,
                        F5: 116,
                        F6: 117,
                        F7: 118,
                        F8: 119,
                        F9: 120,
                        F10: 121,
                        F11: 122,
                        F12: 123,
                        "`": 192,
                        "=": 187,
                        "-": 189,
                        "/": 191,
                        ".": 190
                    };
                    for (var e in d) d.hasOwnProperty(e) && (d[e.toLowerCase()] = d[e]);
                    var f = 65,
                        g = "a".charCodeAt(0);
                    "abcdefghijklmnopqrstuvwxyz".split("").forEach(function(a) {
                        d[a] = f + (a.charCodeAt(0) - g)
                    });
                    var h = 9;
                    do d[h.toString()] = h + 48;
                    while (--h);
                    c.exports = d
                }
            };
        var c = {
            "expose-editor": 1
        };
        angular.module("kityminderEditor", ["ui.bootstrap", "ui.codemirror", "ui.colorpicker"]).config(["$sceDelegateProvider",
            function(a) {
                a.resourceUrlWhitelist(["self", "http://agroup.baidu.com:8910/**", "http://cq01-fe-rdtest01.vm.baidu.com:8910/**", "http://agroup.baidu.com:8911/**"])
            }]),
            angular.module("kityminderEditor").run(["$templateCache",
                function(a) {
                    "use strict";
                    a.put("ui/directive/appendNode/appendNode.html", "<div class=\"km-btn-group append-group\"><div class=\"km-btn-item append-child-node\" ng-disabled=\"minder.queryCommandState('AppendChildNode') === -1\" ng-click=\"minder.queryCommandState('AppendChildNode') === -1 || execCommand('AppendChildNode')\" title=\"{{ 'appendchildnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'appendchildnode' | lang:'ui/command' }}</span></div><div class=\"km-btn-item append-parent-node\" ng-disabled=\"minder.queryCommandState('AppendParentNode') === -1\" ng-click=\"minder.queryCommandState('AppendParentNode') === -1 || execCommand('AppendParentNode')\" title=\"{{ 'appendparentnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'appendparentnode' | lang:'ui/command' }}</span></div><div class=\"km-btn-item append-sibling-node\" ng-disabled=\"minder.queryCommandState('AppendSiblingNode') === -1\" ng-click=\"minder.queryCommandState('AppendSiblingNode') === -1 ||execCommand('AppendSiblingNode')\" title=\"{{ 'appendsiblingnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'appendsiblingnode' | lang:'ui/command' }}</span></div></div>"),
                        a.put("ui/directive/arrange/arrange.html", "<div class=\"km-btn-group arrange-group\"><div class=\"km-btn-item arrange-up\" ng-disabled=\"minder.queryCommandState('ArrangeUp') === -1\" ng-click=\"minder.queryCommandState('ArrangeUp') === -1 || minder.execCommand('ArrangeUp')\" title=\"{{ 'arrangeup' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'arrangeup' | lang:'ui/command' }}</span></div><div class=\"km-btn-item arrange-down\" ng-disabled=\"minder.queryCommandState('ArrangeDown') === -1\" ng-click=\"minder.queryCommandState('ArrangeDown') === -1 || minder.execCommand('ArrangeDown');\" title=\"{{ 'arrangedown' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'arrangedown' | lang:'ui/command' }}</span></div></div>"),
                        a.put("ui/directive/colorPanel/colorPanel.html", '<div class="bg-color-wrap"><span class="quick-bg-color" ng-click="minder.queryCommandState(\'background\') === -1 || minder.execCommand(\'background\', bgColor)" ng-disabled="minder.queryCommandState(\'background\') === -1"></span> <span color-picker class="bg-color" set-color="setDefaultBg()" ng-disabled="minder.queryCommandState(\'background\') === -1"><span class="caret"></span></span> <span class="bg-color-preview" ng-style="{ \'background-color\': bgColor }" ng-click="minder.queryCommandState(\'background\') === -1 || minder.execCommand(\'background\', bgColor)" ng-disabled="minder.queryCommandState(\'background\') === -1"></span></div>'),
                        a.put("ui/directive/expandLevel/expandLevel.html", '<div class="btn-group-vertical" dropdown is-open="isopen"><button type="button" class="btn btn-default expand" title="{{ \'expandtoleaf\' | lang:\'ui\' }}" ng-class="{\'active\': isopen}" ng-click="minder.execCommand(\'ExpandToLevel\', 9999)"></button> <button type="button" class="btn btn-default expand-caption dropdown-toggle" title="{{ \'expandtoleaf\' | lang:\'ui\' }}" dropdown-toggle><span class="caption">{{ \'expandtoleaf\' | lang:\'ui\' }}</span> <span class="caret"></span> <span class="sr-only">{{ \'expandtoleaf\' | lang:\'ui\' }}</span></button><ul class="dropdown-menu" role="menu"><li ng-repeat="level in levels"><a href ng-click="minder.execCommand(\'ExpandToLevel\', level)">{{ \'expandtolevel\' + level | lang:\'ui/command\' }}</a></li></ul></div>'),
                        a.put("ui/directive/fontOperator/fontOperator.html", '<div class="font-operator"><div class="dropdown font-family-list" dropdown><div class="dropdown-toggle current-font-item" dropdown-toggle ng-disabled="minder.queryCommandState(\'fontfamily\') === -1"><a href class="current-font-family" title="{{ \'fontfamily\' | lang: \'ui\' }}">{{ getFontfamilyName(minder.queryCommandValue(\'fontfamily\')) || \'??????\' }}</a> <span class="caret"></span></div><ul class="dropdown-menu font-list"><li ng-repeat="f in fontFamilyList" class="font-item-wrap"><a ng-click="minder.execCommand(\'fontfamily\', f.val)" class="font-item" ng-class="{ \'font-item-selected\' : f == minder.queryCommandValue(\'fontfamily\') }" ng-style="{\'font-family\': f.val }">{{ f.name }}</a></li></ul></div><div class="dropdown font-size-list" dropdown><div class="dropdown-toggle current-font-item" dropdown-toggle ng-disabled="minder.queryCommandState(\'fontsize\') === -1"><a href class="current-font-size" title="{{ \'fontsize\' | lang: \'ui\' }}">{{ minder.queryCommandValue(\'fontsize\') || \'??????\' }}</a> <span class="caret"></span></div><ul class="dropdown-menu font-list"><li ng-repeat="f in fontSizeList" class="font-item-wrap"><a ng-click="minder.execCommand(\'fontsize\', f)" class="font-item" ng-class="{ \'font-item-selected\' : f == minder.queryCommandValue(\'fontsize\') }" ng-style="{\'font-size\': f + \'px\'}">{{ f }}</a></li></ul></div><span class="s-btn-icon font-bold" ng-click="minder.queryCommandState(\'bold\') === -1 || minder.execCommand(\'bold\')" ng-class="{\'font-bold-selected\' : minder.queryCommandState(\'bold\') == 1}" ng-disabled="minder.queryCommandState(\'bold\') === -1"></span> <span class="s-btn-icon font-italics" ng-click="minder.queryCommandState(\'italic\') === -1 || minder.execCommand(\'italic\')" ng-class="{\'font-italics-selected\' : minder.queryCommandState(\'italic\') == 1}" ng-disabled="minder.queryCommandState(\'italic\') === -1"></span><div class="font-color-wrap"><span class="quick-font-color" ng-click="minder.queryCommandState(\'forecolor\') === -1 || minder.execCommand(\'forecolor\', foreColor)" ng-disabled="minder.queryCommandState(\'forecolor\') === -1">A</span> <span color-picker class="font-color" set-color="setDefaultColor()" ng-disabled="minder.queryCommandState(\'forecolor\') === -1"><span class="caret"></span></span> <span class="font-color-preview" ng-style="{ \'background-color\': foreColor }" ng-click="minder.queryCommandState(\'forecolor\') === -1 || minder.execCommand(\'forecolor\', foreColor)" ng-disabled="minder.queryCommandState(\'forecolor\') === -1"></span></div><color-panel minder="minder" class="inline-directive"></color-panel></div>'),
                        a.put("ui/directive/hyperLink/hyperLink.html", '<div class="btn-group-vertical" dropdown is-open="isopen"><button type="button" class="btn btn-default hyperlink" title="{{ \'link\' | lang:\'ui\' }}" ng-class="{\'active\': isopen}" ng-click="addHyperlink()" ng-disabled="minder.queryCommandState(\'HyperLink\') === -1"></button> <button type="button" class="btn btn-default hyperlink-caption dropdown-toggle" ng-disabled="minder.queryCommandState(\'HyperLink\') === -1" title="{{ \'link\' | lang:\'ui\' }}" dropdown-toggle><span class="caption">{{ \'link\' | lang:\'ui\' }}</span> <span class="caret"></span> <span class="sr-only">{{ \'link\' | lang:\'ui\' }}</span></button><ul class="dropdown-menu" role="menu"><li><a href ng-click="addHyperlink()">{{ \'insertlink\' | lang:\'ui\' }}</a></li><li><a href ng-click="minder.execCommand(\'HyperLink\', null)">{{ \'removelink\' | lang:\'ui\' }}</a></li></ul></div>'),
                        a.put("ui/directive/imageBtn/imageBtn.html", '<div class="btn-group-vertical" dropdown is-open="isopen"><button type="button" class="btn btn-default image-btn" title="{{ \'image\' | lang:\'ui\' }}" ng-class="{\'active\': isopen}" ng-click="addImage()" ng-disabled="minder.queryCommandState(\'Image\') === -1"></button> <button type="button" class="btn btn-default image-btn-caption dropdown-toggle" ng-disabled="minder.queryCommandState(\'Image\') === -1" title="{{ \'image\' | lang:\'ui\' }}" dropdown-toggle><span class="caption">{{ \'image\' | lang:\'ui\' }}</span> <span class="caret"></span> <span class="sr-only">{{ \'image\' | lang:\'ui\' }}</span></button><ul class="dropdown-menu" role="menu"><li><a href ng-click="addImage()">{{ \'insertimage\' | lang:\'ui\' }}</a></li><li><a href ng-click="minder.execCommand(\'Image\', \'\')">{{ \'removeimage\' | lang:\'ui\' }}</a></li></ul></div>'),
                        a.put("ui/directive/kityminderEditor/kityminderEditor.html", '<div class="minder-editor-container"><div class="top-tab" top-tab="minder" editor="editor" ng-if="minder"></div><div search-box minder="minder" ng-if="minder"></div><div class="minder-editor"></div><div class="km-note" note-editor minder="minder" ng-if="minder"></div><div class="note-previewer" note-previewer ng-if="minder"></div><div class="navigator" navigator minder="minder" ng-if="minder"></div></div>'),
                        a.put("ui/directive/kityminderViewer/kityminderViewer.html", '<div class="minder-editor-container"><div class="minder-viewer"></div><div class="note-previewer" note-previewer ng-if="minder"></div><div class="navigator" navigator minder="minder" ng-if="minder"></div></div>'),
                        a.put("ui/directive/layout/layout.html", '<div class="readjust-layout"><a ng-click="minder.queryCommandState(\'resetlayout\') === -1 || minder.execCommand(\'resetlayout\')" class="btn-wrap" ng-disabled="minder.queryCommandState(\'resetlayout\') === -1"><span class="btn-icon reset-layout-icon"></span> <span class="btn-label">{{ \'resetlayout\' | lang: \'ui/command\' }}</span></a></div>'),
                        a.put("ui/directive/navigator/navigator.html", '<div class="nav-bar"><div class="nav-btn zoom-in" ng-click="minder.execCommand(\'zoomIn\')" title="{{ \'zoom-in\' | lang : \'ui\' }}" ng-class="{ \'active\' : getZoomRadio(zoom) == 0 }"><div class="icon"></div></div><div class="zoom-pan"><div class="origin" ng-style="{\'transform\': \'translate(0, \' + getHeight(100) + \'px)\'}" ng-click="minder.execCommand(\'zoom\', 100);"></div><div class="indicator" ng-style="{\n             \'transform\': \'translate(0, \' + getHeight(zoom) + \'px)\',\n             \'transition\': \'transform 200ms\'\n             }"></div></div><div class="nav-btn zoom-out" ng-click="minder.execCommand(\'zoomOut\')" title="{{ \'zoom-out\' | lang : \'ui\' }}" ng-class="{ \'active\' : getZoomRadio(zoom) == 1 }"><div class="icon"></div></div><div class="nav-btn hand" ng-click="minder.execCommand(\'hand\')" title="{{ \'hand\' | lang : \'ui\' }}" ng-class="{ \'active\' : minder.queryCommandState(\'hand\') == 1 }"><div class="icon"></div></div><div class="nav-btn camera" ng-click="minder.execCommand(\'camera\', minder.getRoot(), 600);" title="{{ \'camera\' | lang : \'ui\' }}"><div class="icon"></div></div><div class="nav-btn nav-trigger" ng-class="{\'active\' : isNavOpen}" ng-click="toggleNavOpen()" title="{{ \'navigator\' | lang : \'ui\' }}"><div class="icon"></div></div></div><div class="nav-previewer" ng-show="isNavOpen"></div>'),
                        a.put("ui/directive/noteBtn/noteBtn.html", '<div class="btn-group-vertical note-btn-group" dropdown is-open="isopen"><button type="button" class="btn btn-default note-btn" title="{{ \'note\' | lang:\'ui\' }}" ng-class="{\'active\': isopen}" ng-click="addNote()" ng-disabled="minder.queryCommandState(\'note\') === -1"></button> <button type="button" class="btn btn-default note-btn-caption dropdown-toggle" ng-disabled="minder.queryCommandState(\'note\') === -1" title="{{ \'note\' | lang:\'ui\' }}" dropdown-toggle><span class="caption">{{ \'note\' | lang:\'ui\' }}</span> <span class="caret"></span> <span class="sr-only">{{ \'note\' | lang:\'ui\' }}</span></button><ul class="dropdown-menu" role="menu"><li><a href ng-click="addNote()">{{ \'insertnote\' | lang:\'ui\' }}</a></li><li><a href ng-click="minder.execCommand(\'note\', null)">{{ \'removenote\' | lang:\'ui\' }}</a></li></ul></div>'),
                        a.put("ui/directive/noteEditor/noteEditor.html", '<div class="panel panel-default" ng-init="noteEditorOpen = false" ng-show="noteEditorOpen"><div class="panel-heading"><h3 class="panel-title">??????</h3><span>???<a class="help" href="https://www.zybuluo.com/techird/note/46064" target="_blank">?????? GFM ????????????</a>???</span> <i class="close-note-editor glyphicon glyphicon-remove" ng-click="closeNoteEditor()"></i></div><div class="panel-body"><div ng-show="noteEnabled" ui-codemirror="{ onLoad: codemirrorLoaded }" ng-model="noteContent" ui-codemirror-opts="{\n                gfm: true,\n                breaks: true,\n                lineWrapping : true,\n                mode: \'gfm\',\n                dragDrop: false,\n                lineNumbers:true\n             }"></div><p ng-show="!noteEnabled" class="km-note-tips">???????????????????????????</p></div></div>'),
                        a.put("ui/directive/notePreviewer/notePreviewer.html", '<div id="previewer-content" ng-show="showNotePreviewer" ng-style="previewerStyle" ng-bind-html="noteContent"></div>'),
                        a.put("ui/directive/operation/operation.html", "<div class=\"km-btn-group operation-group\"><div class=\"km-btn-item edit-node\" ng-disabled=\"minder.queryCommandState('text') === -1\" ng-click=\"minder.queryCommandState('text') === -1 || editNode()\" title=\"{{ 'editnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'editnode' | lang:'ui/command' }}</span></div><div class=\"km-btn-item remove-node\" ng-disabled=\"minder.queryCommandState('RemoveNode') === -1\" ng-click=\"minder.queryCommandState('RemoveNode') === -1 || minder.execCommand('RemoveNode');\" title=\"{{ 'removenode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'removenode' | lang:'ui/command' }}</span></div></div>"),
                        a.put("ui/directive/priorityEditor/priorityEditor.html", '<ul class="km-priority tool-group" ng-disabled="commandDisabled"><li class="km-priority-item tool-group-item" ng-repeat="p in priorities" ng-click="commandDisabled || minder.execCommand(\'priority\', p)" ng-class="{ active: commandValue == p }" title="{{ getPriorityTitle(p) }}"><div class="km-priority-icon tool-group-icon priority-{{p}}"></div></li></ul>'),
                        a.put("ui/directive/progressEditor/progressEditor.html", '<ul class="km-progress tool-group" ng-disabled="commandDisabled"><li class="km-progress-item tool-group-item" ng-repeat="p in progresses" ng-click="commandDisabled || minder.execCommand(\'progress\', p)" ng-class="{ active: commandValue == p }" title="{{ getProgressTitle(p) }}"><div class="km-progress-icon tool-group-icon progress-{{p}}"></div></li></ul>'),
                        a.put("ui/directive/resourceEditor/resourceEditor.html", '<div class="resource-editor"><div class="input-group"><input class="form-control" type="text" ng-model="newResourceName" ng-required ng-keypress="$event.keyCode == 13 && addResource(newResourceName)" ng-disabled="!enabled"> <span class="input-group-btn"><button class="btn btn-default" ng-click="addResource(newResourceName)" ng-disabled="!enabled">??????</button></span></div><div class="resource-dropdown clearfix" id="resource-dropdown"><ul class="km-resource" ng-init="resourceListOpen = false" ng-class="{\'open\': resourceListOpen}"><li ng-repeat="resource in used" ng-disabled="!enabled" ng-blur="blurCB()"><label style="background: {{resourceColor(resource.name)}}"><input type="checkbox" ng-model="resource.selected" ng-disabled="!enabled"> <span>{{resource.name}}</span></label></li></ul><div class="resource-caret" click-anywhere-but-here="resourceListOpen = false" is-active="resourceListOpen" ng-click="resourceListOpen = !resourceListOpen"><span class="caret"></span></div></div></div>'),
                        a.put("ui/directive/searchBox/searchBox.html", '<div id="search" class="search-box clearfix" ng-show="showSearch"><div class="input-group input-group-sm search-input-wrap"><input type="text" id="search-input" class="form-control search-input" ng-model="keyword" ng-keydown="handleKeyDown($event)" aria-describedby="basic-addon2"> <span class="input-group-addon search-addon" id="basic-addon2" ng-show="showTip" ng-bind="\'??? \' + curIndex + \' ????????? \' + resultNum + \' ???\'"></span></div><div class="btn-group btn-group-sm prev-and-next-btn" role="group"><button type="button" class="btn btn-default" ng-click="doSearch(keyword, \'prev\')"><span class="glyphicon glyphicon-chevron-up"></span></button> <button type="button" class="btn btn-default" ng-click="doSearch(keyword, \'next\')"><span class="glyphicon glyphicon-chevron-down"></span></button></div><div class="close-search" ng-click="exitSearch()"><span class="glyphicon glyphicon-remove"></span></div></div>'),
                        a.put("ui/directive/searchBtn/searchBtn.html", '<div class="btn-group-vertical" dropdown is-open="isopen"><button type="button" class="btn btn-default search" title="{{ \'search\' | lang:\'ui\' }}" ng-class="{\'active\': isopen}" ng-click="enterSearch()"></button> <button type="button" class="btn btn-default search-caption dropdown-toggle" ng-click="enterSearch()" title="{{ \'search\' | lang:\'ui\' }}"><span class="caption">{{ \'search\' | lang:\'ui\' }}</span> <span class="sr-only">{{ \'search\' | lang:\'ui\' }}</span></button></div>'),
                        a.put("ui/directive/selectAll/selectAll.html", '<div class="btn-group-vertical" dropdown is-open="isopen"><button type="button" class="btn btn-default select" title="{{ \'selectall\' | lang:\'ui\' }}" ng-class="{\'active\': isopen}" ng-click="select[\'all\']()"></button> <button type="button" class="btn btn-default select-caption dropdown-toggle" title="{{ \'selectall\' | lang:\'ui\' }}" dropdown-toggle><span class="caption">{{ \'selectall\' | lang:\'ui\' }}</span> <span class="caret"></span> <span class="sr-only">{{ \'selectall\' | lang:\'ui\' }}</span></button><ul class="dropdown-menu" role="menu"><li ng-repeat="item in items"><a href ng-click="select[item]()">{{ \'select\' + item | lang:\'ui\' }}</a></li></ul></div>'),
                        a.put("ui/directive/styleOperator/styleOperator.html", '<div class="style-operator"><a ng-click="minder.queryCommandState(\'clearstyle\') === -1 || minder.execCommand(\'clearstyle\')" class="btn-wrap clear-style" ng-disabled="minder.queryCommandState(\'clearstyle\') === -1"><span class="btn-icon clear-style-icon"></span> <span class="btn-label">{{ \'clearstyle\' | lang: \'ui\' }}</span></a><div class="s-btn-group-vertical"><a class="s-btn-wrap" href ng-click="minder.queryCommandState(\'copystyle\') === -1 || minder.execCommand(\'copystyle\')" ng-disabled="minder.queryCommandState(\'copystyle\') === -1"><span class="s-btn-icon copy-style-icon"></span> <span class="s-btn-label">{{ \'copystyle\' | lang: \'ui\' }}</span></a> <a class="s-btn-wrap paste-style-wrap" href ng-click="minder.queryCommandState(\'pastestyle\') === -1 || minder.execCommand(\'pastestyle\')" ng-disabled="minder.queryCommandState(\'pastestyle\') === -1"><span class="s-btn-icon paste-style-icon"></span> <span class="s-btn-label">{{ \'pastestyle\' | lang: \'ui\' }}</span></a></div></div>'),
                        a.put("ui/directive/templateList/templateList.html", '<div class="dropdown temp-panel" dropdown on-toggle="toggled(open)"><div class="dropdown-toggle current-temp-item" ng-disabled="minder.queryCommandState(\'template\') === -1" dropdown-toggle><a href class="temp-item {{ minder.queryCommandValue(\'template\') }}" title="{{ minder.queryCommandValue(\'template\') | lang: \'template\' }}"></a> <span class="caret"></span></div><ul class="dropdown-menu temp-list"><li ng-repeat="(key, templateObj) in templateList" class="temp-item-wrap"><a ng-click="minder.execCommand(\'template\', key);" class="temp-item {{key}}" ng-class="{ \'temp-item-selected\' : key == minder.queryCommandValue(\'template\') }" title="{{ key | lang: \'template\' }}"></a></li></ul></div>'),
                        a.put("ui/directive/themeList/themeList.html", '<div class="dropdown theme-panel" dropdown><div class="dropdown-toggle theme-item-selected" dropdown-toggle ng-disabled="minder.queryCommandState(\'theme\') === -1"><a href class="theme-item" ng-style="getThemeThumbStyle(minder.queryCommandValue(\'theme\'))" title="{{ minder.queryCommandValue(\'theme\') | lang: \'theme\'; }}">{{ minder.queryCommandValue(\'theme\') | lang: \'theme\'; }}</a> <span class="caret"></span></div><ul class="dropdown-menu theme-list"><li ng-repeat="key in themeKeyList" class="theme-item-wrap"><a ng-click="minder.execCommand(\'theme\', key);" class="theme-item" ng-style="getThemeThumbStyle(key)" title="{{ key | lang: \'theme\'; }}">{{ key | lang: \'theme\'; }}</a></li></ul></div>'),
                        a.put("ui/directive/topTab/topTab.html", '<tabset><tab heading="{{ \'idea\' | lang: \'ui/tabs\'; }}" ng-click="toggleTopTab(\'idea\')" select="setCurTab(\'idea\')"><undo-redo editor="editor"></undo-redo><append-node minder="minder"></append-node><arrange minder="minder"></arrange><operation minder="minder"></operation><hyper-link minder="minder"></hyper-link><image-btn minder="minder"></image-btn><note-btn minder="minder"></note-btn><priority-editor minder="minder"></priority-editor><progress-editor minder="minder"></progress-editor><resource-editor minder="minder"></resource-editor></tab><tab heading="{{ \'appearence\' | lang: \'ui/tabs\'; }}" ng-click="toggleTopTab(\'appearance\')" select="setCurTab(\'appearance\')"><template-list minder="minder" class="inline-directive"></template-list><theme-list minder="minder"></theme-list><layout minder="minder" class="inline-directive"></layout><style-operator minder="minder" class="inline-directive"></style-operator><font-operator minder="minder" class="inline-directive"></font-operator></tab><tab heading="{{ \'view\' | lang: \'ui/tabs\'; }}" ng-click="toggleTopTab(\'view\')" select="setCurTab(\'view\')"><expand-level minder="minder"></expand-level><select-all minder="minder"></select-all><search-btn minder="minder"></search-btn></tab></tabset>'),
                        a.put("ui/directive/undoRedo/undoRedo.html", '<div class="km-btn-group do-group"><div class="km-btn-item undo" ng-disabled="editor.history.hasUndo() == false" ng-click="editor.history.hasUndo() == false || editor.history.undo();" title="{{ \'undo\' | lang:\'ui\' }}"><i class="km-btn-icon"></i></div><div class="km-btn-item redo" ng-disabled="editor.history.hasRedo() == false" ng-click="editor.history.hasRedo() == false || editor.history.redo()" title="{{ \'redo\' | lang:\'ui\' }}"><i class="km-btn-icon"></i></div></div>'),
                        a.put("ui/dialog/hyperlink/hyperlink.tpl.html", '<div class="modal-header"><h3 class="modal-title">??????</h3></div><div class="modal-body"><form><div class="form-group" id="link-url-wrap" ng-class="{true: \'has-success\', false: \'has-error\'}[urlPassed]"><label for="link-url">???????????????</label><input type="text" class="form-control" ng-model="url" ng-blur="urlPassed = R_URL.test(url)" ng-focus="this.value = url" ng-keydown="shortCut($event)" id="link-url" placeholder="???????????? http(s):// ??? ftp:// ??????"></div><div class="form-group" ng-class="{\'has-success\' : titlePassed}"><label for="link-title">???????????????</label><input type="text" class="form-control" ng-model="title" ng-blur="titlePassed = true" id="link-title" placeholder="???????????????????????????????????????????????????"></div></form></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">??????</button> <button class="btn btn-warning" ng-click="cancel()">??????</button></div>'),
                        a.put("ui/dialog/imExportNode/imExportNode.tpl.html", '<div class="modal-header"><h3 class="modal-title">{{ title }}</h3></div><div class="modal-body"><textarea type="text" class="form-control single-input" rows="8" ng-keydown="shortCut($event);" ng-model="value" ng-readonly="type === \'export\'">\n    </textarea></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()" ng-disabled="type === \'import\' && value == \'\'">OK</button> <button class="btn btn-warning" ng-click="cancel()">Cancel</button></div>'),
                        a.put("ui/dialog/image/image.tpl.html", '<div class="modal-header"><h3 class="modal-title">??????</h3></div><div class="modal-body"><tabset><tab heading="????????????"><form class="form-inline"><div class="form-group"><label for="search-keyword">????????????</label><input type="text" class="form-control" ng-model="data.searchKeyword2" id="search-keyword" placeholder="???????????????????????????"></div><button class="btn btn-primary" ng-click="searchImage()">????????????</button></form><div class="search-result" id="search-result"><ul><li ng-repeat="image in list" id="{{ \'img-item\' + $index }}" ng-class="{\'selected\' : isSelected}" ng-click="selectImage($event)"><img id="{{ \'img-\' + $index }}" ng-src="{{ image.src || \'\' }}" alt="{{ image.title }}" onerror="this.parentNode.removeChild(this)"> <span>{{ image.title }}</span></li></ul></div></tab><tab heading="????????????" active="true"><form><div class="form-group" ng-class="{true: \'has-success\', false: \'has-error\'}[urlPassed]"><label for="image-url">???????????????</label><input type="text" class="form-control" ng-model="data.url" ng-blur="urlPassed = data.R_URL.test(data.url)" ng-focus="this.value = data.url" ng-keydown="shortCut($event)" id="image-url" placeholder="???????????? http(s):// ??????"></div><div class="form-group" ng-class="{\'has-success\' : titlePassed}"><label for="image-title">???????????????</label><input type="text" class="form-control" ng-model="data.title" ng-blur="titlePassed = true" id="image-title" placeholder="???????????????????????????????????????????????????"></div><div class="form-group"><label for="image-preview">???????????????</label><img class="image-preview" id="image-preview" ng-src="{{ data.url }}" alt="{{ data.title }}"></div></form></tab></tabset></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">??????</button> <button class="btn btn-warning" ng-click="cancel()">??????</button></div>')
                }]),
            angular.module("kityminderEditor").service("commandBinder",
                function() {
                    return {
                        bind: function(a, b, c) {
                            a.on("interactchange",
                                function() {
                                    c.commandDisabled = -1 === a.queryCommandState(b),
                                        c.commandValue = a.queryCommandValue(b),
                                        c.$apply()
                                })
                        }
                    }
                }),
            angular.module("kityminderEditor").service("config",
                function() {
                    return {
                        _default: {
                            ctrlPanelMin: 250,
                            ctrlPanelWidth: parseInt(window.localStorage.__dev_minder_ctrlPanelWidth) || 250,
                            dividerWidth: 3,
                            defaultLang: "zh-cn",
                            zoom: [10, 20, 30, 50, 80, 100, 120, 150, 200]
                        },
                        getConfig: function(a) {
                            return void 0 == a ? this._default: this._default[a] || null
                        },
                        setConfig: function(a) {
                            this._default = a
                        }
                    }
                }),
            angular.module("kityminderEditor").service("lang.zh-cn",
                function() {
                    return {
                        "zh-cn": {
                            template: {
                                "default": "????????????",
                                tianpan: "?????????",
                                structure: "???????????????",
                                filetree: "???????????????",
                                right: "???????????????",
                                "fish-bone": "????????????"
                            },
                            theme: {
                                classic: "????????????",
                                "classic-compact": "????????????",
                                snow: "????????????",
                                "snow-compact": "????????????",
                                fish: "?????????",
                                wire: "??????",
                                "fresh-red": "?????????",
                                "fresh-soil": "?????????",
                                "fresh-green": "?????????",
                                "fresh-blue": "?????????",
                                "fresh-purple": "?????????",
                                "fresh-pink": "?????????",
                                "fresh-red-compat": "?????????",
                                "fresh-soil-compat": "?????????",
                                "fresh-green-compat": "?????????",
                                "fresh-blue-compat": "?????????",
                                "fresh-purple-compat": "?????????",
                                "fresh-pink-compat": "?????????",
                                tianpan: "????????????",
                                "tianpan-compact": "????????????"
                            },
                            maintopic: "????????????",
                            topic: "????????????",
                            panels: {
                                history: "??????",
                                template: "??????",
                                theme: "??????",
                                layout: "??????",
                                style: "??????",
                                font: "??????",
                                color: "??????",
                                background: "??????",
                                insert: "??????",
                                arrange: "??????",
                                nodeop: "??????",
                                priority: "?????????",
                                progress: "??????",
                                resource: "??????",
                                note: "??????",
                                attachment: "??????",
                                word: "??????"
                            },
                            error_message: {
                                title: "????????????????????????",
                                err_load: "??????????????????",
                                err_save: "??????????????????",
                                err_network: "????????????",
                                err_doc_resolve: "??????????????????",
                                err_unknown: "????????????????????????",
                                err_localfile_read: "??????????????????",
                                err_download: "??????????????????",
                                err_remove_share: "??????????????????",
                                err_create_share: "????????????",
                                err_mkdir: "??????????????????",
                                err_ls: "??????????????????",
                                err_share_data: "????????????????????????",
                                err_share_sync_fail: "????????????????????????",
                                err_move_file: "??????????????????",
                                err_rename: "???????????????",
                                unknownreason: "?????????????????????????????????...",
                                pcs_code: {
                                    3 : "??????????????????",
                                    4 : "???????????????????????????",
                                    5 : "IP?????????",
                                    110 : "???????????????????????????????????????",
                                    31001 : "?????????????????????",
                                    31002 : "?????????????????????",
                                    31003 : "????????????????????????",
                                    31021 : "????????????",
                                    31022 : "???????????????????????????",
                                    31023 : "??????????????????",
                                    31024 : "app id??????",
                                    31025 : "??????????????????",
                                    31041 : "?????????cookie?????????????????????cookie",
                                    31042 : "???????????????",
                                    31043 : "???????????????",
                                    31044 : "???????????????",
                                    31045 : "???????????????",
                                    31046 : "??????????????????",
                                    31061 : "??????????????????",
                                    31062 : "???????????????",
                                    31063 : "????????????????????????",
                                    31064 : "?????????????????????",
                                    31065 : "????????????",
                                    31066 : "???????????????",
                                    31067 : "??????????????????",
                                    31068 : "??????????????????",
                                    31069 : "??????????????????",
                                    31070 : "??????????????????",
                                    31071 : "???????????????????????????",
                                    31072 : "??????????????????",
                                    31073 : "?????????????????????",
                                    31079 : "???????????????MD5??????????????????API?????????????????????",
                                    31081 : "superfile????????????",
                                    31082 : "superfile ???????????????",
                                    31083 : "superfile ????????????",
                                    31101 : "tag??????????????????",
                                    31102 : "tag????????????",
                                    31103 : "tag????????????",
                                    31110 : "??????????????????????????????",
                                    31111 : "?????????????????????????????????",
                                    31112 : "????????????",
                                    31113 : "???????????????????????????????????????",
                                    31114 : "?????????????????????????????????",
                                    31141 : "???????????????????????????",
                                    31201 : "????????????",
                                    31202 : "???????????????",
                                    31203 : "??????acl??????",
                                    31204 : "??????acl????????????",
                                    31205 : "??????acl??????",
                                    31206 : "acl?????????",
                                    31207 : "bucket?????????",
                                    31208 : "??????????????????",
                                    31209 : "???????????????",
                                    31210 : "??????????????????",
                                    31211 : "????????????",
                                    31212 : "???????????????",
                                    31213 : "????????????",
                                    31214 : "????????????data??????",
                                    31215 : "????????????meta??????",
                                    31216 : "????????????data??????",
                                    31217 : "????????????meta??????",
                                    31218 : "??????????????????",
                                    31219 : "?????????????????????",
                                    31220 : "??????????????????",
                                    31298 : "??????????????????KEY??????",
                                    31299 : "??????????????????KEY?????????"
                                }
                            },
                            ui: {
                                shared_file_title: "[?????????] {0} (??????)",
                                load_share_for_edit: "???????????????????????????...",
                                share_sync_success: "?????????????????????",
                                recycle_clear_confirm: "????????????????????????????????????????????????????????????",
                                fullscreen_exit_hint: "??? Esc ??? F11 ????????????",
                                error_detail: "????????????",
                                copy_and_feedback: "???????????????",
                                move_file_confirm: '????????? "{0}" ????????? "{1}" ??????',
                                rename: "?????????",
                                rename_success: "{0} ???????????????",
                                move_success: "{0} ??????????????? {1}",
                                command: {
                                    appendsiblingnode: "??????????????????",
                                    appendparentnode: "??????????????????",
                                    appendchildnode: "??????????????????",
                                    removenode: "??????",
                                    editnode: "??????",
                                    arrangeup: "??????",
                                    arrangedown: "??????",
                                    resetlayout: "????????????",
                                    expandtoleaf: "??????????????????",
                                    expandtolevel1: "?????????????????????",
                                    expandtolevel2: "?????????????????????",
                                    expandtolevel3: "?????????????????????",
                                    expandtolevel4: "?????????????????????",
                                    expandtolevel5: "?????????????????????",
                                    expandtolevel6: "?????????????????????",
                                    fullscreen: "??????",
                                    outline: "??????"
                                },
                                search: "??????",
                                expandtoleaf: "??????",
                                back: "??????",
                                undo: "?????? (Ctrl + Z)",
                                redo: "?????? (Ctrl + Y)",
                                tabs: {
                                    idea: "??????",
                                    appearence: "??????",
                                    view: "??????"
                                },
                                quickvisit: {
                                    "new": "?????? (Ctrl + Alt + N)",
                                    save: "?????? (Ctrl + S)",
                                    share: "?????? (Ctrl + Alt + S)",
                                    feedback: "???????????????F1???",
                                    editshare: "??????"
                                },
                                menu: {
                                    mainmenutext: "????????????",
                                    newtab: "??????",
                                    opentab: "??????",
                                    savetab: "??????",
                                    sharetab: "??????",
                                    preferencetab: "??????",
                                    helptab: "??????",
                                    feedbacktab: "??????",
                                    recenttab: "????????????",
                                    netdisktab: "???????????????",
                                    localtab: "????????????",
                                    drafttab: "?????????",
                                    downloadtab: "???????????????",
                                    createsharetab: "????????????",
                                    managesharetab: "?????????",
                                    newheader: "????????????",
                                    openheader: "??????",
                                    saveheader: "?????????",
                                    draftheader: "?????????",
                                    shareheader: "??????????????????",
                                    downloadheader: "?????????????????????",
                                    preferenceheader: "????????????",
                                    helpheader: "??????",
                                    feedbackheader: "??????"
                                },
                                mydocument: "????????????",
                                emptydir: "???????????????",
                                pickfile: "????????????...",
                                acceptfile: "??????????????????{0}",
                                dropfile: "????????????????????????",
                                unsupportedfile: "????????????????????????",
                                untitleddoc: "???????????????",
                                overrideconfirm: "{0} ??????????????????????????????",
                                checklogin: "?????????????????????...",
                                loggingin: "????????????...",
                                recent: "????????????",
                                clearrecent: "??????",
                                clearrecentconfirm: "?????????????????????????????????",
                                cleardraft: "??????",
                                cleardraftconfirm: "????????????????????????",
                                none_share: "?????????",
                                public_share: "????????????",
                                password_share: "????????????",
                                email_share: "????????????",
                                url_share: "?????? URL ?????????",
                                sns_share: "?????????????????????",
                                sns_share_text: "???{0}??? - ?????????????????????????????????????????????????????????????????????{1}???",
                                none_share_description: "?????????????????????",
                                public_share_description: "??????????????????????????????",
                                share_button_text: "??????",
                                password_share_description: "????????????????????????????????????",
                                email_share_description: "???????????????????????????????????????????????????????????????",
                                ondev: "???????????????",
                                create_share_failed: "???????????????{0}",
                                remove_share_failed: "???????????????{1}",
                                copy: "??????",
                                copied: "?????????",
                                shared_tip: "??????????????? {0}  ????????????????????????????????????????????????????????????????????????",
                                current_share: "????????????",
                                manage_share: "????????????",
                                share_remove_action: "??????????????????",
                                share_view_action: "??????????????????",
                                share_edit_action: "?????????????????????",
                                login: "??????",
                                logout: "??????",
                                switchuser: "????????????",
                                userinfo: "????????????",
                                gotonetdisk: "????????????",
                                requirelogin: '??? <a class="login-button">??????</a> ?????????',
                                saveas: "?????????",
                                filename: "?????????",
                                fileformat: "????????????",
                                save: "??????",
                                mkdir: "????????????",
                                recycle: "?????????",
                                newdir: "???????????????",
                                bold: "??????",
                                italic: "??????",
                                forecolor: "????????????",
                                fontfamily: "??????",
                                fontsize: "??????",
                                layoutstyle: "??????",
                                node: "????????????",
                                saveto: "?????????",
                                hand: "????????????",
                                camera: "???????????????",
                                "zoom-in": "?????????Ctrl+???",
                                "zoom-out": "?????????Ctrl-???",
                                markers: "??????",
                                resource: "??????",
                                help: "??????",
                                preference: "????????????",
                                expandnode: "???????????????",
                                collapsenode: "?????????????????????",
                                template: "??????",
                                theme: "??????",
                                clearstyle: "????????????",
                                copystyle: "????????????",
                                pastestyle: "????????????",
                                appendsiblingnode: "????????????",
                                appendchildnode: "????????????",
                                arrangeup: "??????",
                                arrangedown: "??????",
                                editnode: "??????",
                                removenode: "??????",
                                priority: "?????????",
                                progress: {
                                    p1: "?????????",
                                    p2: "?????? 1/8",
                                    p3: "?????? 1/4",
                                    p4: "?????? 3/8",
                                    p5: "????????????",
                                    p6: "?????? 5/8",
                                    p7: "?????? 3/4",
                                    p8: "?????? 7/8",
                                    p9: "?????????",
                                    p0: "????????????"
                                },
                                link: "??????",
                                image: "??????",
                                note: "??????",
                                insertlink: "????????????",
                                insertimage: "????????????",
                                insertnote: "????????????",
                                removelink: "??????????????????",
                                removeimage: "??????????????????",
                                removenote: "??????????????????",
                                resetlayout: "??????",
                                justnow: "??????",
                                minutesago: "{0} ?????????",
                                hoursago: "{0} ?????????",
                                yesterday: "??????",
                                daysago: "{0} ??????",
                                longago: "????????????",
                                redirect: "????????????????????? {0}??????????????????????????????????????????????????????????????????",
                                navigator: "?????????",
                                unsavedcontent: "???????????????????????????????????????\n\n{0}\n\n??????????????????????????????????????????????????????????????????????????????????????????????????????",
                                shortcuts: "?????????",
                                contact: "???????????????",
                                email: "?????????",
                                qq_group: "QQ ???",
                                github_issue: "Github",
                                baidu_tieba: "??????",
                                clipboardunsupported: "????????????????????????????????????????????????????????????",
                                load_success: "{0} ????????????",
                                save_success: "{0} ???????????? {1}",
                                autosave_success: "{0} ?????????????????? {1}",
                                selectall: "??????",
                                selectrevert: "??????",
                                selectsiblings: "??????????????????",
                                selectlevel: "??????????????????",
                                selectpath: "????????????",
                                selecttree: "????????????"
                            },
                            popupcolor: {
                                clearColor: "????????????",
                                standardColor: "????????????",
                                themeColor: "????????????"
                            },
                            dialogs: {
                                markers: {
                                    "static": {
                                        lang_input_text: "???????????????",
                                        lang_input_url: "???????????????",
                                        lang_input_title: "?????????",
                                        lang_input_target: "?????????????????????"
                                    },
                                    priority: "?????????",
                                    none: "???",
                                    progress: {
                                        title: "??????",
                                        notdone: "?????????",
                                        done1: "?????? 1/8",
                                        done2: "?????? 1/4",
                                        done3: "?????? 3/8",
                                        done4: "?????? 1/2",
                                        done5: "?????? 5/8",
                                        done6: "?????? 3/4",
                                        done7: "?????? 7/8",
                                        done: "?????????"
                                    }
                                },
                                help: {},
                                hyperlink: {},
                                image: {},
                                resource: {}
                            },
                            hyperlink: {
                                hyperlink: "??????...",
                                unhyperlink: "????????????"
                            },
                            image: {
                                image: "??????...",
                                removeimage: "????????????"
                            },
                            marker: {
                                marker: "??????/?????????..."
                            },
                            resource: {
                                resource: "??????..."
                            }
                        }
                    }
                }),
            angular.module("kityminderEditor").service("memory",
                function() {
                    function a(a) {
                        var b = !1;
                        if (a) if (a.code) switch (a.code) {
                            case 22:
                                b = !0;
                                break;
                            case 1014:
                                "NS_ERROR_DOM_QUOTA_REACHED" === a.name && (b = !0)
                        } else - 2147024882 === a.number && (b = !0);
                        return b
                    }
                    return {
                        get: function(a) {
                            var b = window.localStorage.getItem(a);
                            return null || JSON.parse(b)
                        },
                        set: function(b, c) {
                            try {
                                return window.localStorage.setItem(b, JSON.stringify(c)),
                                    !0
                            } catch(d) {
                                if (a(d)) return ! 1
                            }
                        },
                        remove: function(a) {
                            var b = window.localStorage.getItem(a);
                            return window.localStorage.removeItem(a),
                                b
                        },
                        clear: function() {
                            window.localStorage.clear()
                        }
                    }
                }),
            angular.module("kityminderEditor").service("minder.service",
                function() {
                    function a(a) {
                        c.push(a)
                    }
                    function b() {
                        c.forEach(function(a) {
                            a.apply(this, arguments)
                        })
                    }
                    var c = [];
                    return {
                        registerEvent: a,
                        executeCallback: b
                    }
                }),
            angular.module("kityminderEditor").service("resourceService", ["$document",
                function(a) {
                    var b = null;
                    this.open = function(e) {
                        b || (a.bind("click", c), a.bind("keydown", d)),
                        b && b !== e && (b.resourceListOpen = !1),
                            b = e
                    },
                        this.close = function(e) {
                            b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
                        };
                    var c = function(a) {
                            if (b) {
                                var c = b.getToggleElement();
                                a && c && c[0].contains(a.target) || b.$apply(function() {
                                    console.log("to close the resourcelist"),
                                        b.resourceListOpen = !1
                                })
                            }
                        },
                        d = function(a) {
                            27 === a.which && (b.focusToggleElement(), c())
                        }
                }]),
            angular.module("kityminderEditor").service("revokeDialog", ["$modal", "minder.service",
                function(a, b) {
                    return b.registerEvent(function() {
                        var b = window.minder,
                            c = window.editor,
                            d = c.hotbox.getParentFSM();
                        b.on("importNodeData",
                            function() {
                                d.jump("modal", "import-text-modal");
                                var e = a.open({
                                    animation: !0,
                                    templateUrl: "ui/dialog/imExportNode/imExportNode.tpl.html",
                                    controller: "imExportNode.ctrl",
                                    size: "md",
                                    resolve: {
                                        title: function() {
                                            return "????????????"
                                        },
                                        defaultValue: function() {
                                            return ""
                                        },
                                        type: function() {
                                            return "import"
                                        }
                                    }
                                });
                                e.result.then(function(a) {
                                        try {
                                            b.Text2Children(b.getSelectedNode(), a)
                                        } catch(e) {
                                            alert(e)
                                        }
                                        d.jump("normal", "import-text-finish"),
                                            c.receiver.selectAll()
                                    },
                                    function() {
                                        d.jump("normal", "import-text-finish"),
                                            c.receiver.selectAll()
                                    })
                            }),
                            b.on("exportNodeData",
                                function() {
                                    d.jump("modal", "export-text-modal");
                                    var e = a.open({
                                        animation: !0,
                                        templateUrl: "ui/dialog/imExportNode/imExportNode.tpl.html",
                                        controller: "imExportNode.ctrl",
                                        size: "md",
                                        resolve: {
                                            title: function() {
                                                return "????????????"
                                            },
                                            defaultValue: function() {
                                                var a = b.getSelectedNode(),
                                                    c = window.kityminder.data.getRegisterProtocol("text").Node2Text;
                                                return c(a)
                                            },
                                            type: function() {
                                                return "export"
                                            }
                                        }
                                    });
                                    e.result.then(function(a) {
                                            d.jump("normal", "export-text-finish"),
                                                c.receiver.selectAll()
                                        },
                                        function() {
                                            d.jump("normal", "export-text-finish"),
                                                c.receiver.selectAll()
                                        })
                                })
                    }),
                        {}
                }]),
            angular.module("kityminderEditor").service("valueTransfer",
                function() {
                    return {}
                }),
            angular.module("kityminderEditor").filter("commandState",
                function() {
                    return function(a, b) {
                        return a.queryCommandState(b)
                    }
                }).filter("commandValue",
                function() {
                    return function(a, b) {
                        return a.queryCommandValue(b)
                    }
                }),
            angular.module("kityminderEditor").filter("lang", ["config", "lang.zh-cn",
                function(a, b) {
                    return function(c, d) {
                        var e = a.getConfig("defaultLang");
                        if (void 0 == b[e]) return "???????????????????????????????????? lang.xxx.service.js!";
                        var f = b[e];
                        return d.split("/").forEach(function(a, b) {
                            f = f[a]
                        }),
                        f[c] || null
                    }
                }]),
            angular.module("kityminderEditor").controller("hyperlink.ctrl", ["$scope", "$modalInstance", "link",
                function(a, b, c) {
                    a.R_URL = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?/,
                        a.url = c.url || "",
                        a.title = c.title || "",
                        setTimeout(function() {
                                var b = $("#link-url");
                                b.focus(),
                                    b[0].setSelectionRange(0, a.url.length)
                            },
                            30),
                        a.shortCut = function(b) {
                            b.stopPropagation(),
                                13 == b.keyCode ? a.ok() : 27 == b.keyCode && a.cancel()
                        },
                        a.ok = function() {
                            if (a.R_URL.test(a.url)) b.close({
                                url: a.url,
                                title: a.title
                            });
                            else {
                                a.urlPassed = !1;
                                var c = $("#link-url");
                                c.focus(),
                                    c[0].setSelectionRange(0, a.url.length)
                            }
                            editor.receiver.selectAll()
                        },
                        a.cancel = function() {
                            b.dismiss("cancel"),
                                editor.receiver.selectAll()
                        }
                }]),
            angular.module("kityminderEditor").controller("imExportNode.ctrl", ["$scope", "$modalInstance", "title", "defaultValue", "type",
                function(a, b, c, d, e) {
                    function f(a) {
                        var b = 0;
                        if (document.selection) {
                            a.focus();
                            var c = document.selection.createRange();
                            c.moveStart("character", -a.value.length),
                                b = c.text.length
                        } else(a.selectionStart || "0" == a.selectionStart) && (b = a.selectionStart);
                        return b
                    }
                    function g(a, b) {
                        if (a.setSelectionRange) a.focus(),
                            a.setSelectionRange(b, b);
                        else if (a.createTextRange) {
                            var c = a.createTextRange();
                            c.collapse(!0),
                                c.moveEnd("character", b),
                                c.moveStart("character", b),
                                c.select()
                        }
                    }
                    a.title = c,
                        a.value = d,
                        a.type = e,
                        a.ok = function() {
                            "" != a.value && (b.close(a.value), editor.receiver.selectAll())
                        },
                        a.cancel = function() {
                            b.dismiss("cancel"),
                                editor.receiver.selectAll()
                        },
                        setTimeout(function() {
                                $(".single-input").focus(),
                                    $(".single-input")[0].setSelectionRange(0, d.length)
                            },
                            30),
                        a.shortCut = function(b) {
                            if (b.stopPropagation(), 27 == b.keyCode && a.cancel(), 8 == b.keyCode && "export" == e && b.preventDefault(), 9 == b.keyCode) {
                                b.preventDefault();
                                var c = b.target,
                                    d = f(c),
                                    h = c.value;
                                c.value = h.substr(0, d) + "	" + h.substr(d),
                                    g(c, d + 1)
                            }
                        }
                }]),
            angular.module("kityminderEditor").controller("image.ctrl", ["$http", "$scope", "$modalInstance", "image",
                function(a, b, c, d) {
                    function e() {
                        var c = b.data.searchKeyword2,
                            d = new Date,
                            e = "http://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&fp=result&queryWord=" + c + "&cl=2&lm=-1&ie=utf-8&oe=utf-8&st=-1&ic=0&word=" + c + "&face=0&istype=2&nc=1&pn=60&rn=60&gsm=3c&" + d.getTime() + "=&callback=JSON_CALLBACK";
                        return a.jsonp(e)
                    }
                    b.data = {
                        list: [],
                        url: d.url || "",
                        title: d.title || "",
                        R_URL: /^https?\:\/\/(\w+\.)+\w+/
                    },
                        setTimeout(function() {
                                var a = $("#image-url");
                                a.focus(),
                                    a[0].setSelectionRange(0, b.data.url.length)
                            },
                            300),
                        b.searchImage = function() {
                            b.list = [],
                                e().success(function(a) {
                                    if (a && a.data) for (var c = 0; c < a.data.length; c++) a.data[c].objURL && b.list.push({
                                        title: a.data[c].fromPageTitleEnc,
                                        src: a.data[c].middleURL,
                                        url: a.data[c].middleURL
                                    })
                                }).error(function() {})
                        },
                        b.selectImage = function(a) {
                            var c = $("#img-item" + this.$index),
                                d = $("#img-" + this.$index);
                            c.siblings(".selected").removeClass("selected"),
                                c.addClass("selected"),
                                b.data.url = d.attr("src"),
                                b.data.title = d.attr("alt")
                        },
                        b.shortCut = function(a) {
                            a.stopPropagation(),
                                13 == a.keyCode ? b.ok() : 27 == a.keyCode && b.cancel()
                        },
                        b.ok = function() {
                            if (b.data.R_URL.test(b.data.url)) c.close({
                                url: b.data.url,
                                title: b.data.title
                            });
                            else {
                                b.urlPassed = !1;
                                var a = $("#image-url");
                                a.focus(),
                                    a[0].setSelectionRange(0, b.data.url.length)
                            }
                            editor.receiver.selectAll()
                        },
                        b.cancel = function() {
                            c.dismiss("cancel"),
                                editor.receiver.selectAll()
                        }
                }]),
            angular.module("kityminderEditor").directive("appendNode", ["commandBinder",
                function(a) {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/appendNode/appendNode.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(b) {
                            function c() {
                                var a = editor.receiver.element,
                                    b = editor.fsm,
                                    c = editor.receiver;
                                a.innerText = d.queryCommandValue("text"),
                                    b.jump("input", "input-request"),
                                    c.selectAll()
                            }
                            var d = b.minder;
                            a.bind(d, "appendchildnode", b),
                                b.execCommand = function(a) {
                                    d.execCommand(a, "????????????"),
                                        c()
                                }
                        }
                    }
                }]),
            angular.module("kityminderEditor").directive("arrange", ["commandBinder",
                function(a) {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/arrange/arrange.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(a) {
                            a.minder
                        }
                    }
                }]),
            angular.module("kityminderEditor").directive("colorPanel",
                function() {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/colorPanel/colorPanel.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(a) {
                            var b = a.minder;
                            b.getThemeItems();
                            a.$on("colorPicked",
                                function(c, d) {
                                    c.stopPropagation(),
                                        a.bgColor = d,
                                        b.execCommand("background", d)
                                }),
                                a.setDefaultBg = function() {
                                    var a = b.getSelectedNode(),
                                        c = b.getNodeStyle(a, "background");
                                    return "object" == typeof c ? c.toHEX() : c
                                },
                                a.bgColor = a.setDefaultBg() || "#fff"
                        }
                    }
                }),
            angular.module("kityminderEditor").directive("expandLevel",
                function() {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/expandLevel/expandLevel.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(a) {
                            a.levels = [1, 2, 3, 4, 5, 6]
                        }
                    }
                }),
            angular.module("kityminderEditor").directive("fontOperator",
                function() {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/fontOperator/fontOperator.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(a) {
                            var b = a.minder;
                            b.getThemeItems();
                            a.fontSizeList = [10, 12, 16, 18, 24, 32, 48],
                                a.fontFamilyList = [{
                                    name: "??????",
                                    val: "??????,SimSun"
                                },
                                    {
                                        name: "????????????",
                                        val: "????????????,Microsoft YaHei"
                                    },
                                    {
                                        name: "??????",
                                        val: "??????,??????_GB2312,SimKai"
                                    },
                                    {
                                        name: "??????",
                                        val: "??????, SimHei"
                                    },
                                    {
                                        name: "??????",
                                        val: "??????, SimLi"
                                    },
                                    {
                                        name: "Andale Mono",
                                        val: "andale mono"
                                    },
                                    {
                                        name: "Arial",
                                        val: "arial,helvetica,sans-serif"
                                    },
                                    {
                                        name: "arialBlack",
                                        val: "arial black,avant garde"
                                    },
                                    {
                                        name: "Comic Sans Ms",
                                        val: "comic sans ms"
                                    },
                                    {
                                        name: "Impact",
                                        val: "impact,chicago"
                                    },
                                    {
                                        name: "Times New Roman",
                                        val: "times new roman"
                                    },
                                    {
                                        name: "Sans-Serif",
                                        val: "sans-serif"
                                    }],
                                a.$on("colorPicked",
                                    function(c, d) {
                                        c.stopPropagation(),
                                            a.foreColor = d,
                                            b.execCommand("forecolor", d)
                                    }),
                                a.setDefaultColor = function() {
                                    var a = b.getSelectedNode(),
                                        c = b.getNodeStyle(a, "color");
                                    return "object" == typeof c ? c.toHEX() : c
                                },
                                a.foreColor = a.setDefaultColor() || "#000",
                                a.getFontfamilyName = function(b) {
                                    var c = "";
                                    return a.fontFamilyList.forEach(function(a, d, e) {
                                        return a.val === b ? (c = a.name, "") : void 0
                                    }),
                                        c
                                }
                        }
                    }
                }),
            angular.module("kityminderEditor").directive("hyperLink", ["$modal",
                function(a) {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/hyperLink/hyperLink.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(b) {
                            var c = b.minder;
                            b.addHyperlink = function() {
                                var b = c.queryCommandValue("HyperLink"),
                                    d = a.open({
                                        animation: !0,
                                        templateUrl: "ui/dialog/hyperlink/hyperlink.tpl.html",
                                        controller: "hyperlink.ctrl",
                                        size: "md",
                                        resolve: {
                                            link: function() {
                                                return b
                                            }
                                        }
                                    });
                                d.result.then(function(a) {
                                    c.execCommand("HyperLink", a.url, a.title || "")
                                })
                            }
                        }
                    }
                }]),
            angular.module("kityminderEditor").directive("imageBtn", ["$modal",
                function(a) {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/imageBtn/imageBtn.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(b) {
                            var c = b.minder;
                            b.addImage = function() {
                                var b = c.queryCommandValue("image"),
                                    d = a.open({
                                        animation: !0,
                                        templateUrl: "ui/dialog/image/image.tpl.html",
                                        controller: "image.ctrl",
                                        size: "md",
                                        resolve: {
                                            image: function() {
                                                return b
                                            }
                                        }
                                    });
                                d.result.then(function(a) {
                                    c.execCommand("image", a.url, a.title || "")
                                })
                            }
                        }
                    }
                }]),
            angular.module("kityminderEditor").directive("kityminderEditor", ["config", "minder.service", "revokeDialog",
                function(a, b, c) {
                    return {
                        restrict: "EA",
                        templateUrl: "ui/directive/kityminderEditor/kityminderEditor.html",
                        replace: !0,
                        scope: {
                            onInit: "&"
                        },
                        link: function(c, d, e) {
                            function f(a, d) {
                                c.onInit({
                                    editor: a,
                                    minder: d
                                }),
                                    b.executeCallback()
                            }
                            var g = d.children(".minder-editor")[0];
                            if ("undefined" != typeof seajs) seajs.config({
                                base: "./src"
                            }),
                                define("demo",
                                    function(b) {
                                        var d = b("editor"),
                                            e = window.editor = new d(g);
                                        window.localStorage.__dev_minder_content && e.minder.importJson(JSON.parse(window.localStorage.__dev_minder_content)),
                                            e.minder.on("contentchange",
                                                function() {
                                                    window.localStorage.__dev_minder_content = JSON.stringify(e.minder.exportJson())
                                                }),
                                            window.minder = window.km = e.minder,
                                            c.editor = e,
                                            c.minder = minder,
                                            c.config = a.getConfig(),
                                            c.$apply(),
                                            f(e, minder)
                                    }),
                                seajs.use("demo");
                            else if (window.kityminder && window.kityminder.Editor) {
                                var h = new kityminder.Editor(g);
                                window.editor = c.editor = h,
                                    window.minder = c.minder = h.minder,
                                    c.config = a.getConfig(),
                                    f(h, h.minder)
                            }
                        }
                    }
                }]),
            angular.module("kityminderEditor").directive("kityminderViewer", ["config", "minder.service",
                function(a, b) {
                    return {
                        restrict: "EA",
                        templateUrl: "ui/directive/kityminderViewer/kityminderViewer.html",
                        replace: !0,
                        scope: {
                            onInit: "&"
                        },
                        link: function(a, c, d) {
                            function e(c, d) {
                                a.onInit({
                                    editor: c,
                                    minder: d
                                }),
                                    b.executeCallback()
                            }
                            var f = c.children(".minder-viewer")[0];
                            if (window.kityminder && window.kityminder.Editor) {
                                var g = new kityminder.Editor(f);
                                window.editor = a.editor = g,
                                    window.minder = a.minder = g.minder,
                                    e(g, g.minder)
                            }
                        }
                    }
                }]),
            angular.module("kityminderEditor").directive("layout",
                function() {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/layout/layout.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(a) {}
                    }
                }),
            angular.module("kityminderEditor").directive("navigator", ["memory", "config",
                function(a, b) {
                    return {
                        restrict: "A",
                        templateUrl: "ui/directive/navigator/navigator.html",
                        scope: {
                            minder: "="
                        },
                        link: function(c) {
                            function d() {
                                minder.on("layout layoutallfinish", h),
                                    minder.on("viewchange", i)
                            }
                            function e() {
                                minder.off("layout layoutallfinish", h),
                                    minder.off("viewchange", i)
                            }
                            function f(a) {
                                switch (a) {
                                    case "tianpan":
                                    case "tianpan-compact":
                                        return function(a, b, c, d, e) {
                                            var f = d >> 1;
                                            a.push("M", b, c + f, "a", f, f, 0, 1, 1, 0, .01, "z")
                                        };
                                    default:
                                        return function(a, b, c, d, e) {
                                            a.push("M", b, c, "h", d, "v", e, "h", -d, "z")
                                        }
                                }
                            }
                            function g() {
                                function a(a, b) {
                                    var c = p;
                                    a.x = -a.x,
                                        a.y = -a.y;
                                    var d = minder.getPaper().getViewPortMatrix();
                                    c = d.transformBox(c);
                                    var e = a.offset(c.width / 2, c.height / 2);
                                    minder.getViewDragger().moveTo(e, b)
                                }
                                var b = !1;
                                k.on("mousedown",
                                    function(c) {
                                        b = !0,
                                            a(c.getPosition("top"), 200),
                                            j.addClass("grab")
                                    }),
                                    k.on("mousemove",
                                        function(c) {
                                            b && a(c.getPosition("top"))
                                        }),
                                    $(window).on("mouseup",
                                        function() {
                                            b = !1,
                                                j.removeClass("grab")
                                        })
                            }
                            function h() {
                                var a = minder.getRenderContainer().getBoundaryBox();
                                o = a;
                                var b = 30;
                                k.setViewBox(a.x - b - .5, a.y - b - .5, a.width + 2 * b + 1, a.height + 2 * b + 1);
                                var c = [],
                                    d = [];
                                minder.getRoot().traverse(function(a) {
                                    var b = a.getLayoutBox();
                                    q(c, b.x, b.y, b.width, b.height),
                                    a.getConnection() && a.parent && a.parent.isExpanded() && d.push(a.getConnection().getPathData())
                                }),
                                    k.setStyle("background", minder.getStyle("background")),
                                    c.length ? l.fill(minder.getStyle("root-background")).setPathData(c) : l.setPathData(null),
                                    d.length ? m.stroke(minder.getStyle("connect-color"), "0.5%").setPathData(d) : m.setPathData(null),
                                    i()
                            }
                            function i() {
                                p = minder.getViewDragger().getView(),
                                    n.setBox(p.intersect(o))
                            }
                            minder.setDefaultOptions({
                                zoom: b.getConfig("zoom")
                            }),
                                c.isNavOpen = !a.get("navigator-hidden"),
                                c.getZoomRadio = function(a) {
                                    var b = minder.getOption("zoom"),
                                        c = b[0],
                                        d = b[b.length - 1],
                                        e = d - c;
                                    return 1 - (a - c) / e
                                },
                                c.getHeight = function(a) {
                                    var b = $(".zoom-pan").height();
                                    return c.getZoomRadio(a) * b
                                },
                                c.zoom = 100,
                                minder.on("zoom",
                                    function(a) {
                                        c.zoom = a.zoom
                                    }),
                                c.toggleNavOpen = function() {
                                    c.isNavOpen = !c.isNavOpen,
                                        a.set("navigator-hidden", !c.isNavOpen),
                                        c.isNavOpen ? (d(), h(), i()) : e()
                                },
                                setTimeout(function() {
                                        c.isNavOpen ? (d(), h(), i()) : e()
                                    },
                                    0);
                            var j = $(".nav-previewer"),
                                k = new kity.Paper(j[0]),
                                l = k.put(new kity.Path),
                                m = k.put(new kity.Path),
                                n = k.put(new kity.Rect(100, 100).stroke("red", "1%")),
                                o = new kity.Box,
                                p = new kity.Box,
                                q = f(minder.getTheme());
                            minder.on("themechange",
                                function(a) {
                                    q = f(a.theme)
                                }),
                                g()
                        }
                    }
                }]),
            angular.module("kityminderEditor").directive("noteBtn", ["valueTransfer",
                function(a) {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/noteBtn/noteBtn.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(b) {
                            b.minder;
                            b.addNote = function() {
                                a.noteEditorOpen = !0
                            }
                        }
                    }
                }]),
            angular.module("kityminderEditor").directive("noteEditor", ["valueTransfer",
                function(a) {
                    return {
                        restrict: "A",
                        templateUrl: "ui/directive/noteEditor/noteEditor.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        controller: ["$scope",
                            function(b) {
                                function c() {
                                    var a = b.noteEnabled = -1 != e.queryCommandState("note"),
                                        c = e.queryCommandValue("note") || "";
                                    a && (b.noteContent = c),
                                        f = !0,
                                        b.$apply(),
                                        f = !1
                                }
                                var d, e = b.minder,
                                    f = !1;
                                b.codemirrorLoaded = function(a) {
                                    d = b.cmEditor = a,
                                        a.setSize("100%", "100%")
                                },
                                    b.$watch("noteContent",
                                        function(a) {
                                            var b = -1 != e.queryCommandState("note");
                                            a && b && !f && e.execCommand("note", a),
                                                setTimeout(function() {
                                                    d.refresh()
                                                })
                                        });
                                var g = function() {
                                    return a.noteEditorOpen
                                };
                                b.$watch(g,
                                    function(c, e) {
                                        c && setTimeout(function() {
                                            d.refresh(),
                                                d.focus()
                                        }),
                                            b.noteEditorOpen = a.noteEditorOpen
                                    },
                                    !0),
                                    b.closeNoteEditor = function() {
                                        a.noteEditorOpen = !1,
                                            editor.receiver.selectAll()
                                    },
                                    e.on("interactchange", c)
                            }]
                    }
                }]),
            angular.module("kityminderEditor").directive("notePreviewer", ["$sce", "valueTransfer",
                function(a, b) {
                    return {
                        restrict: "A",
                        templateUrl: "ui/directive/notePreviewer/notePreviewer.html",
                        link: function(b, c) {
                            function d(c, d) {
                                var e = c.getRenderer("NoteIconRenderer").getRenderShape(),
                                    h = e.getRenderBox("screen"),
                                    j = c.getData("note");
                                g[0].scrollTop = 0;
                                var k = marked(j);
                                d && (k = k.replace(new RegExp("(" + d + ")", "ig"), '<span class="highlight">$1</span>')),
                                    b.noteContent = a.trustAsHtml(k),
                                    b.$apply();
                                var l = $(f[0]).width(),
                                    m = $(f[0]).height(),
                                    n = $(g).outerWidth(),
                                    o = $(g).outerHeight(),
                                    p = h.cx - n / 2 - f[0].offsetLeft,
                                    q = h.bottom + 10 - f[0].offsetTop;
                                0 > p && (p = 10),
                                p + n > l && (p = h.left - n - 10 - f[0].offsetLeft),
                                q + o > m && (q = h.top - o - 10 - f[0].offsetTop),
                                    b.previewerStyle = {
                                        left: Math.round(p) + "px",
                                        top: Math.round(q) + "px"
                                    },
                                    b.showNotePreviewer = !0;
                                var r = g[0].querySelector(".highlight");
                                r && r.scrollIntoView(),
                                    i = !0,
                                    b.$apply()
                            }
                            var e = b.minder,
                                f = c.parent(),
                                g = c.children();
                            b.showNotePreviewer = !1,
                                marked.setOptions({
                                    gfm: !0,
                                    tables: !0,
                                    breaks: !0,
                                    pedantic: !1,
                                    sanitize: !0,
                                    smartLists: !0,
                                    smartypants: !1
                                });
                            var h;
                            e.on("shownoterequest",
                                function(a) {
                                    h = setTimeout(function() {
                                            d(a.node, a.keyword)
                                        },
                                        300)
                                }),
                                e.on("hidenoterequest",
                                    function() {
                                        clearTimeout(h),
                                            b.showNotePreviewer = !1
                                    });
                            var i = !1;
                            $(document).on("mousedown mousewheel DOMMouseScroll",
                                function() {
                                    i && (b.showNotePreviewer = !1, b.$apply())
                                }),
                                c.on("mousedown mousewheel DOMMouseScroll",
                                    function(a) {
                                        a.stopPropagation()
                                    })
                        }
                    }
                }]),
            angular.module("kityminderEditor").directive("operation",
                function() {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/operation/operation.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(a) {
                            a.editNode = function() {
                                var a = editor.receiver.element,
                                    b = editor.fsm,
                                    c = editor.receiver;
                                a.innerText = minder.queryCommandValue("text"),
                                    b.jump("input", "input-request"),
                                    c.selectAll()
                            }
                        }
                    }
                }),
            angular.module("kityminderEditor").directive("priorityEditor", ["commandBinder",
                function(a) {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/priorityEditor/priorityEditor.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(b) {
                            for (var c = b.minder,
                                     d = [], e = 0; 10 > e; e++) d.push(e);
                            a.bind(c, "priority", b),
                                b.priorities = d,
                                b.getPriorityTitle = function(a) {
                                    switch (a) {
                                        case 0:
                                            return "???????????????";
                                        default:
                                            return "?????????" + a
                                    }
                                }
                        }
                    }
                }]),
            angular.module("kityminderEditor").directive("progressEditor", ["commandBinder",
                function(a) {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/progressEditor/progressEditor.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(b) {
                            for (var c = b.minder,
                                     d = [], e = 0; 10 > e; e++) d.push(e);
                            a.bind(c, "progress", b),
                                b.progresses = d,
                                b.getProgressTitle = function(a) {
                                    switch (a) {
                                        case 0:
                                            return "????????????";
                                        case 1:
                                            return "?????????";
                                        case 9:
                                            return "????????????";
                                        default:
                                            return "??????" + (a - 1) + "/8"
                                    }
                                }
                        }
                    }
                }]),
            angular.module("kityminderEditor").directive("resourceEditor",
                function() {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/resourceEditor/resourceEditor.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        controller: ["$scope",
                            function(a) {
                                var b = a.minder,
                                    c = !1;
                                b.on("interactchange",
                                    function() {
                                        var d = a.enabled = -1 != b.queryCommandState("resource"),
                                            e = d ? b.queryCommandValue("resource") : [],
                                            f = b.getUsedResource().map(function(a) {
                                                return {
                                                    name: a,
                                                    selected: e.indexOf(a) > -1
                                                }
                                            });
                                        a.used = f,
                                            c = !0,
                                            a.$apply(),
                                            c = !1
                                    }),
                                    a.$watch("used",
                                        function(a) {
                                            if ( - 1 != b.queryCommandState("resource") && a) {
                                                var d = a.filter(function(a) {
                                                    return a.selected
                                                }).map(function(a) {
                                                    return a.name
                                                });
                                                if (c) return;
                                                b.execCommand("resource", d)
                                            }
                                        },
                                        !0),
                                    a.resourceColor = function(a) {
                                        return b.getResourceColor(a).toHEX()
                                    },
                                    a.addResource = function(c) {
                                        var d = b.queryCommandValue("resource");
                                        c && /\S/.test(c) && ( - 1 == d.indexOf(c) && a.used.push({
                                            name: c,
                                            selected: !0
                                        }), a.newResourceName = null)
                                    }
                            }]
                    }
                }).directive("clickAnywhereButHere", ["$document",
                function(a) {
                    return {
                        link: function(b, c, d) {
                            var e = function(a) {
                                var c = $("#resource-dropdown").has(a.target).length > 0,
                                    e = $("#resource-dropdown") == a.target,
                                    f = c || e;
                                f || b.$apply(d.clickAnywhereButHere)
                            };
                            b.$watch(d.isActive,
                                function(b, c) {
                                    b !== c && 1 == b ? a.bind("click", e) : b !== c && 0 == b && a.unbind("click", e)
                                })
                        }
                    }
                }]),
            angular.module("kityminderEditor").directive("searchBox",
                function() {
                    return {
                        restrict: "A",
                        templateUrl: "ui/directive/searchBox/searchBox.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        controller: ["$scope",
                            function(a) {
                                function b(b) {
                                    if (13 == b.keyCode) {
                                        var d = b.shiftKey ? "prev": "next";
                                        g(a.keyword, d)
                                    }
                                    27 == b.keyCode && c()
                                }
                                function c() {
                                    $("#search-input").blur(),
                                        a.showSearch = !1,
                                        h.fire("hidenoterequest"),
                                        i.receiver.selectAll()
                                }
                                function d() {
                                    a.showSearch = !0,
                                        setTimeout(function() {
                                                $("#search-input").focus()
                                            },
                                            10),
                                    a.keyword && $("#search-input")[0].setSelectionRange(0, a.keyword.length)
                                }
                                function e() {
                                    j = [],
                                        h.getRoot().traverse(function(a) {
                                            j.push(a)
                                        })
                                }
                                function f(a) {
                                    k = [];
                                    for (var b = 0; b < j.length; b++) {
                                        var c = j[b],
                                            d = c.getText().toLowerCase(); - 1 != d.indexOf(a) && k.push({
                                            node: c
                                        });
                                        var e = c.getData("note");
                                        e && -1 != e.toLowerCase().indexOf(a) && k.push({
                                            node: c,
                                            keyword: a
                                        })
                                    }
                                }
                                function g(b, c) {
                                    function d(a, b) {
                                        h.execCommand("camera", a, 50),
                                            setTimeout(function() {
                                                    h.select(a, !0),
                                                    a.isExpanded() || h.execCommand("expand", !0),
                                                    b && h.fire("shownoterequest", {
                                                        node: a,
                                                        keyword: b
                                                    })
                                                },
                                                60)
                                    }
                                    if (a.showTip = !1, h.fire("hidenoterequest"), !b || !/\S/.exec(b)) return void $("#search-input").focus();
                                    a.showTip = !0,
                                        a.curIndex = 0,
                                        a.resultNum = 0,
                                        b = b.toLowerCase();
                                    var e = g.lastKeyword != b;
                                    if (g.lastKeyword = b, e && f(b), a.resultNum = k.length, k.length) {
                                        var i = e ? 0 : ("next" === c ? g.lastIndex + 1 : g.lastIndex - 1) || 0;
                                        i = (k.length + i) % k.length,
                                            d(k[i].node, k[i].keyword),
                                            g.lastIndex = i,
                                            a.curIndex = i + 1
                                    }
                                }
                                var h = a.minder,
                                    i = window.editor;
                                a.handleKeyDown = b,
                                    a.doSearch = g,
                                    a.exitSearch = c,
                                    a.showTip = !1,
                                    a.showSearch = !1,
                                    $("body").on("keydown",
                                        function(b) {
                                            70 != b.keyCode || !b.ctrlKey && !b.metaKey || b.shiftKey || (d(), a.$apply(), b.preventDefault())
                                        }),
                                    h.on("searchNode",
                                        function() {
                                            d()
                                        });
                                var j = [],
                                    k = [];
                                h.on("contentchange", e),
                                    e()
                            }]
                    }
                }),
            angular.module("kityminderEditor").directive("searchBtn",
                function() {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/searchBtn/searchBtn.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(a) {
                            function b() {
                                minder.fire("searchNode")
                            }
                            a.enterSearch = b
                        }
                    }
                }),
            angular.module("kityminderEditor").directive("selectAll",
                function() {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/selectAll/selectAll.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(a) {
                            var b = a.minder;
                            a.items = ["revert", "siblings", "level", "path", "tree"],
                                a.select = {
                                    all: function() {
                                        var a = [];
                                        b.getRoot().traverse(function(b) {
                                            a.push(b)
                                        }),
                                            b.select(a, !0),
                                            b.fire("receiverfocus")
                                    },
                                    revert: function() {
                                        var a = b.getSelectedNodes(),
                                            c = [];
                                        b.getRoot().traverse(function(b) { - 1 == a.indexOf(b) && c.push(b)
                                        }),
                                            b.select(c, !0),
                                            b.fire("receiverfocus")
                                    },
                                    siblings: function() {
                                        var a = b.getSelectedNodes(),
                                            c = [];
                                        a.forEach(function(a) {
                                            a.parent && a.parent.children.forEach(function(a) { - 1 == c.indexOf(a) && c.push(a)
                                            })
                                        }),
                                            b.select(c, !0),
                                            b.fire("receiverfocus")
                                    },
                                    level: function() {
                                        var a = b.getSelectedNodes().map(function(a) {
                                                return a.getLevel()
                                            }),
                                            c = [];
                                        b.getRoot().traverse(function(b) { - 1 != a.indexOf(b.getLevel()) && c.push(b)
                                        }),
                                            b.select(c, !0),
                                            b.fire("receiverfocus")
                                    },
                                    path: function() {
                                        var a = b.getSelectedNodes(),
                                            c = [];
                                        a.forEach(function(a) {
                                            for (; a && -1 == c.indexOf(a);) c.push(a),
                                                a = a.parent
                                        }),
                                            b.select(c, !0),
                                            b.fire("receiverfocus")
                                    },
                                    tree: function() {
                                        var a = b.getSelectedNodes(),
                                            c = [];
                                        a.forEach(function(a) {
                                            a.traverse(function(a) { - 1 == c.indexOf(a) && c.push(a)
                                            })
                                        }),
                                            b.select(c, !0),
                                            b.fire("receiverfocus")
                                    }
                                }
                        }
                    }
                }),
            angular.module("kityminderEditor").directive("styleOperator",
                function() {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/styleOperator/styleOperator.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0
                    }
                }),
            angular.module("kityminderEditor").directive("templateList",
                function() {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/templateList/templateList.html",
                        scope: {
                            minder: "="
                        },
                        replace: !0,
                        link: function(a) {
                            a.templateList = kityminder.Minder.getTemplateList()
                        }
                    }
                }),
            angular.module("kityminderEditor").directive("themeList",
                function() {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/themeList/themeList.html",
                        replace: !0,
                        link: function(a) {
                            var b = kityminder.Minder.getThemeList();
                            a.getThemeThumbStyle = function(a) {
                                var c = b[a];
                                if (c) {
                                    var d = {
                                        color: c["root-color"],
                                        "border-radius": c["root-radius"] / 2
                                    };
                                    return c["root-background"] && (d.background = c["root-background"].toString()),
                                        d
                                }
                            },
                                a.themeKeyList = ["classic", "classic-compact", "fresh-blue", "fresh-blue-compat", "fresh-green", "fresh-green-compat", "fresh-pink", "fresh-pink-compat", "fresh-purple", "fresh-purple-compat", "fresh-red", "fresh-red-compat", "fresh-soil", "fresh-soil-compat", "snow", "snow-compact", "tianpan", "tianpan-compact", "fish", "wire"]
                        }
                    }
                }),
            angular.module("kityminderEditor").directive("topTab",
                function() {
                    return {
                        restrict: "A",
                        templateUrl: "ui/directive/topTab/topTab.html",
                        scope: {
                            minder: "=topTab",
                            editor: "="
                        },
                        link: function(a) {
                            function b() {
                                var a = $(".tab-content"),
                                    b = $(".minder-editor");
                                a.animate({
                                    height: 0,
                                    display: "none"
                                }),
                                    b.animate({
                                        top: "32px"
                                    })
                            }
                            function c() {
                                var a = $(".tab-content"),
                                    b = $(".minder-editor");
                                a.animate({
                                    height: "60px",
                                    display: "block"
                                }),
                                    b.animate({
                                        top: "92px"
                                    })
                            }
                            var d = !1,
                                e = !0,
                                f = !0;
                            a.setCurTab = function(a) {
                                setTimeout(function() {
                                    d = !0,
                                    "idea" != a && (e = !1)
                                })
                            },
                                a.toggleTopTab = function() {
                                    setTimeout(function() { (!d || e) && (e = !1, f ? b() : c(), f = !f),
                                        d = !1
                                    })
                                }
                        }
                    }
                }),
            angular.module("kityminderEditor").directive("undoRedo",
                function() {
                    return {
                        restrict: "E",
                        templateUrl: "ui/directive/undoRedo/undoRedo.html",
                        scope: {
                            editor: "="
                        },
                        replace: !0,
                        link: function(a) {}
                    }
                }),
            a("expose-editor")
    } ();
