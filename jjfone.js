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
                                "application/km": "￿"
                            },
                            d = {
                                "\ufeff": "SPLITOR",
                                "￿": "application/km"
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
                                k = o.exportJsondata()
                        }
                        function b() {
                            var a = o.exportJsondata(),
                                b = f(a, k);
                            if (b.length) {
                                for (m.push(b); m.length > q;) m.shift();
                                return k = a,
                                    !0
                            }
                        }
                        function c() {
                            var a = o.exportJsondata();
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
                            label: "撤销",
                            key: "Ctrl + Z",
                            enable: h,
                            action: d,
                            next: "idle"
                        }),
                            r.button({
                                position: "top",
                                label: "重做",
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
                                label: "编辑",
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
                            // a.execCommand("text", "中心问问主我题"),
                             kjdata='{"root":{"data":{"id":"cp94x17k4p40","created":1671792319809,"text":"初级会计经济法思维导图","expandState":"expand"},"children":[{"data":{"id":"cp94x2yt2b40","created":1671792323634,"text":"第一章 总论","expandState":"expand"},"children":[{"data":{"id":"cp94x2ytln40","created":1671792323634,"text":"第一节 法律基础★","expandState":"expand"},"children":[{"data":{"id":"cp94x2ytft40","created":1671792323634,"text":"法和法律","expandState":"collapse"},"children":[{"data":{"id":"cp94x2ytwd40","created":1671792323635,"text":"法-本质：法是统治阶级的国家意志的体现"},"children":[]},{"data":{"id":"cp94x2ytuig0","created":1671792323635,"text":"法-特征：行为规则，社会规范"},"children":[{"data":{"id":"cp94x2yu1qw0","created":1671792323635,"text":"国家意志性"},"children":[]},{"data":{"id":"cp94x2yu5zc0","created":1671792323635,"text":"国家强制性"},"children":[]},{"data":{"id":"cp94x2ytn9k0","created":1671792323635,"text":"规范性"},"children":[]},{"data":{"id":"cp94x2ytors0","created":1671792323635,"text":"明确公开性和普遍约束性"},"children":[]}]}]},{"data":{"id":"cp94x2yubyo0","created":1671792323636,"text":"法律关系（社会关系）★","expandState":"collapse"},"children":[{"data":{"id":"cp94x2yufko0","created":1671792323636,"text":"法律关系："},"children":[{"data":{"id":"cp94x2yuhts0","created":1671792323636,"text":"民事法律关系"},"children":[]},{"data":{"id":"cp94x2yukko0","created":1671792323636,"text":"行政法律关系"},"children":[]},{"data":{"id":"cp94x2yudio0","created":1671792323636,"text":"经济法律关系"},"children":[]}]},{"data":{"id":"cp94x2yuj740","created":1671792323636,"text":"要素："},"children":[{"data":{"id":"cp94x2yupk00","created":1671792323636,"text":"主体"},"children":[{"data":{"id":"cp94x2yuy5c0","created":1671792323637,"text":"自然人（公民）"},"children":[]},{"data":{"id":"cp94x2yuteo0","created":1671792323637,"text":"组织（法人和非法人组织）"},"children":[{"data":{"id":"cp94x2yuuhs0","created":1671792323637,"text":"营利性法人"},"children":[]},{"data":{"id":"cp94x2yuyao0","created":1671792323637,"text":"非营利性法人"},"children":[]},{"data":{"id":"cp94x2yuvag0","created":1671792323637,"text":"特别法人"},"children":[]},{"data":{"id":"cp94x2yvdeg0","created":1671792323637,"text":"非法人组织"},"children":[]}]},{"data":{"id":"cp94x2yvigo0","created":1671792323638,"text":"国家"},"children":[]}]},{"data":{"id":"cp94x2yvqps0","created":1671792323638,"text":"内容"},"children":[{"data":{"id":"cp94x2yvw200","created":1671792323638,"text":"法律关系主体依法享有的权利和承担的义务"},"children":[]}]},{"data":{"id":"cp94x2yvlqo0","created":1671792323638,"text":"客体"},"children":[{"data":{"id":"cp94x2yvv200","created":1671792323638,"text":"特征：能为人类所控制并对人类有价值"},"children":[]},{"data":{"id":"cp94x2yvrs80","created":1671792323638,"text":"物"},"children":[]},{"data":{"id":"cp94x2yvym80","created":1671792323638,"text":"人身人格"},"children":[]},{"data":{"id":"cp94x2yvw2w0","created":1671792323638,"text":"非物质财富"},"children":[]},{"data":{"id":"cp94x2ywii00","created":1671792323639,"text":"行为（行为结果）"},"children":[]}]}]}]},{"data":{"id":"cp94x2yw8280","created":1671792323639,"text":"法律事实","expandState":"collapse"},"children":[{"data":{"id":"cp94x2ywhgg0","created":1671792323639,"text":"法律事件"},"children":[{"data":{"id":"cp94x2yw6hs0","created":1671792323639,"text":"不以当事人的主观意志为转移"},"children":[]}]},{"data":{"id":"cp94x2ywkdc0","created":1671792323639,"text":"法律行为"},"children":[{"data":{"id":"cp94x2yw2vc0","created":1671792323639,"text":"以法律关系主体意志为转移"},"children":[]},{"data":{"id":"cp94x2yw26g0","created":1671792323639,"text":"合法行为与违法行为"},"children":[]},{"data":{"id":"cp94x2yw3jk0","created":1671792323639,"text":"积极行为（作为）与消极行为（不作为）"},"children":[]},{"data":{"id":"cp94x2ywpbs0","created":1671792323640,"text":"意思表示行为与非表示行为"},"children":[]},{"data":{"id":"cp94x2ywr6g0","created":1671792323640,"text":"单方行为与多方行为"},"children":[]},{"data":{"id":"cp94x2ywm3k0","created":1671792323640,"text":"要式行为与非要式行为"},"children":[]},{"data":{"id":"cp94x2ywucg0","created":1671792323640,"text":"自主行为与代理行为"},"children":[]}]}]},{"data":{"id":"cp94x2ywqog0","created":1671792323640,"text":"法的形式和分类★","expandState":"collapse"},"children":[{"data":{"id":"cp94x2ywy4w0","created":1671792323640,"text":"形式"},"children":[{"data":{"id":"cp94x2ywzwo0","created":1671792323640,"text":"宪法；法律；行政法规；地方性法规、自治条例和单行条\\n例；特别行政区的法；规章；国际条约"},"children":[]},{"data":{"id":"cp94x2yx7ao0","created":1671792323641,"text":"法律效力等级(2022)"},"children":[{"data":{"id":"cp94x2yxag80","created":1671792323641,"text":"法律之间对同一事项的新旧不一致时，由全国人民代表大会常务委员会裁决"},"children":[]},{"data":{"id":"cp94x2yxnhc0","created":1671792323641,"text":"行政法规之间对同一事项的新旧不一致时，由国务院裁决"},"children":[]},{"data":{"id":"cp94x2yxlvk0","created":1671792323641,"text":"地方法规与部门规章之间不一致时，由有关机关依照规定的权限裁决"},"children":[{"data":{"id":"cp94x2yxqew0","created":1671792323641,"text":"同一机关制定的新旧不一致时，由制定机关裁决"},"children":[]},{"data":{"id":"cp94x2yxo2w0","created":1671792323641,"text":"地方性法规与部门规章之间不一致时，由国务院提出意见"},"children":[{"data":{"id":"cp94x2yxrow0","created":1671792323641,"text":"应适用地方性法规的，就在该地方适用地方性法规"},"children":[]},{"data":{"id":"cp94x2yxx2g0","created":1671792323642,"text":"应适用部门规章的，由全国人民代表大会常务委员会裁决"},"children":[]}]},{"data":{"id":"cp94x2yyb7c0","created":1671792323642,"text":"部门规章之间、部门规章与地方政府规章之间对同一事项\\n规定不一致时，由国务院裁决"},"children":[]}]},{"data":{"id":"cp94x2yy8rs0","created":1671792323642,"text":"根据授权制定的法规与法律不一致时，由全国人民代表大会常务委员会裁决"},"children":[]}]},{"data":{"id":"cp94x2yyd140","created":1671792323642,"text":"法的效力冲突及其解决方式(2022)"},"children":[{"data":{"id":"cp94x2yy0740","created":1671792323642,"text":"根本法优于普通法"},"children":[]},{"data":{"id":"cp94x2yy0ug0","created":1671792323642,"text":"上位法优于下位法"},"children":[]},{"data":{"id":"cp94x2yyr3k0","created":1671792323643,"text":"新法优于旧法"},"children":[]},{"data":{"id":"cp94x2yyfy00","created":1671792323643,"text":"特别法优于一般法"},"children":[]},{"data":{"id":"cp94x2yyixk0","created":1671792323643,"text":"普通法必须以宪法为依据，不得同宪法相抵触。"},"children":[]},{"data":{"id":"cp94x2yyleo0","created":1671792323643,"text":"不同位阶的法之间发生冲突，适用上位法。"},"children":[]}]}]},{"data":{"id":"cp94x2yzirs0","created":1671792323644,"text":"分类"},"children":[{"data":{"id":"cp94x2yz8yg0","created":1671792323644,"text":"成文法和不成文法"},"children":[{"data":{"id":"cp94x2yz3yw0","created":1671792323644,"text":"法的创制方式和发布形式"},"children":[]}]},{"data":{"id":"cp94x2yzexc0","created":1671792323644,"text":"根本法和普通法"},"children":[{"data":{"id":"cp94x2yz0i00","created":1671792323644,"text":"法的内容、效力和制定程序"},"children":[]}]},{"data":{"id":"cp94x2yze1s0","created":1671792323644,"text":"实体法和程序法"},"children":[{"data":{"id":"cp94x2yzhco0","created":1671792323644,"text":"法的内容"},"children":[]}]},{"data":{"id":"cp94x2yz6000","created":1671792323644,"text":"一般法和特别法"},"children":[{"data":{"id":"cp94x2yzilc0","created":1671792323644,"text":"法的空间效力、时间效力和对人的效力"},"children":[]}]},{"data":{"id":"cp94x2yzq480","created":1671792323645,"text":"国际法和国内法"},"children":[{"data":{"id":"cp94x2yzug00","created":1671792323645,"text":"法的主体、调整对象和渊源"},"children":[]}]},{"data":{"id":"cp94x2yzxxs0","created":1671792323645,"text":"公法和私法"},"children":[]}]}]},{"data":{"id":"cp94x2z05l40","created":1671792323645,"text":"法律部门与法律体系","expandState":"collapse"},"children":[{"data":{"id":"cp94x2yzt3s0","created":1671792323645,"text":"1.宪法及宪法相关法；2.民商法；3.行政法；4.经济法；"},"children":[]},{"data":{"id":"cp94x2yzpm80","created":1671792323645,"text":"5.社会法；6.刑法；7.诉讼与非诉讼程序法"},"children":[]}]},{"data":{"id":"cp94x2yzrwg0","created":1671792323645,"text":"法的效力范围(2022)","expandState":"collapse"},"children":[{"data":{"id":"cp94x2z02u80","created":1671792323645,"text":"时间效力"},"children":[{"data":{"id":"cp94x2yzx2w0","created":1671792323645,"text":"生效"},"children":[{"data":{"id":"cp94x2yzx9c0","created":1671792323645,"text":"明确规定一个具体生效时间 规定具备何种条件后开始生效"},"children":[]}]},{"data":{"id":"cp94x2z0n5s0","created":1671792323646,"text":"终止"},"children":[{"data":{"id":"cp94x2z0olk0","created":1671792323646,"text":"新法取代旧法 完成一定的历史任务后不再适用 发布专\\n门的决议、决定，废除某些法律同一机关制定的新旧法抵\\n触，以新法为准，旧法自动终止"},"children":[]}]}]},{"data":{"id":"cp94x2z08ls0","created":1671792323646,"text":"空间效力"},"children":[{"data":{"id":"cp94x2z0gm80","created":1671792323646,"text":"域内效力"},"children":[{"data":{"id":"cp94x2z0dd40","created":1671792323646,"text":"(全国范围内或我国局部地区有效)+域外效力"},"children":[]}]}]},{"data":{"id":"cp94x2z06w80","created":1671792323646,"text":"对人效力"},"children":[{"data":{"id":"cp94x2z0pkg0","created":1671792323646,"text":"属人主义"},"children":[{"data":{"id":"cp94x2z0oz40","created":1671792323646,"text":"凡是本国人，不论在国内还是在国外，一律受本国法的约束。"},"children":[]}]},{"data":{"id":"cp94x2z0ds80","created":1671792323646,"text":"属地主义"},"children":[{"data":{"id":"cp94x2z0r0w0","created":1671792323646,"text":"属地主义：凡属一国管辖范围的一切人，不管是本国人，\\n还是外国人，都受该国法的约束。"},"children":[]}]},{"data":{"id":"cp94x2z1bm00","created":1671792323647,"text":"保护主义"},"children":[{"data":{"id":"cp94x2z18m00","created":1671792323647,"text":"保护主义：只要损害了本国利益，不论侵犯者在何地域或\\n是何国国籍，一律受本国法律约束。"},"children":[]}]}]}]}]},{"data":{"id":"cp94x2z14oo0","created":1671792323647,"text":"第二节法律主体 ★","expandState":"expand"},"children":[{"data":{"id":"cp94x2z0za80","created":1671792323647,"text":"一、法律主体的分类","expandState":"collapse"},"children":[{"data":{"id":"cp94x2z0xtk0","created":1671792323647,"text":"（一)自然人"},"children":[{"data":{"id":"cp94x2z15340","created":1671792323647,"text":"自然人，是指具有生命的个体的人，即生物学上的人，是\\n基于出生而取得主体资格的人。"},"children":[]},{"data":{"id":"cp94x2z0zbs0","created":1671792323647,"text":"1 既包括中国公民，也包括居住在中国境内或在境内活\\n动的外国公民和无国籍人。"},"children":[]},{"data":{"id":"cp94x2z14rk0","created":1671792323647,"text":"公民是各国法律关系的基本主体之一，是指具有一国国籍的自然人。"},"children":[]},{"data":{"id":"cp94x2z1lsw0","created":1671792323648,"text":"自然人在出生之前也可以成为特殊法律关系的主体。例如\\n《民法典》规定:涉及遗产继承、接受赠与等胎儿利益保\\n护的，胎儿视为具有民事权利能力。但是，胎儿娩出时为\\n死体的，其民事权利能力自始不存在。"},"children":[]}]},{"data":{"id":"cp94x2z1rfc0","created":1671792323648,"text":"(二)法人"},"children":[{"data":{"id":"cp94x2z1lcw0","created":1671792323648,"text":"概念"},"children":[{"data":{"id":"cp94x2z1tso0","created":1671792323648,"text":"法人是具有民事权利能力和民事行为能力，依法独立享有\\n民事权利和承担民事义务的组织。"},"children":[]}]},{"data":{"id":"cp94x2z1nqg0","created":1671792323648,"text":"法人的相关规定"},"children":[{"data":{"id":"cp94x2z1dxk0","created":1671792323648,"text":"法定代表人的责任与限制"},"children":[{"data":{"id":"cp94x2z1y140","created":1671792323648,"text":"①法定代表人以法人名义从事的民事活动，其法律后果由法人承受。"},"children":[]},{"data":{"id":"cp94x2z1zwg0","created":1671792323649,"text":"②法人章程或者法人权力机构对法定代表人代表权的限制\\n，不得对抗善意相对人。"},"children":[]},{"data":{"id":"cp94x2z2i3k0","created":1671792323649,"text":"③法定代表人因执行职务造成他人损害的，由法人承担民\\n事责任。法人承担民事责任后，依照法律或者法人章程的\\n规定，可以向有过错的法定代表人追偿。"},"children":[]}]},{"data":{"id":"cp94x2z2j3s0","created":1671792323649,"text":"法人分立"},"children":[{"data":{"id":"cp94x2z21400","created":1671792323649,"text":"由分立后的法人享有连带债权、承担连带债务(债权债务人另有约定除外)。"},"children":[]}]},{"data":{"id":"cp94x2z2iw80","created":1671792323649,"text":"法人的分支机构"},"children":[{"data":{"id":"cp94x2z1zvc0","created":1671792323649,"text":"分支机构以自己的名义从事民事活动，产生的民事责任由\\n法人承担；也可以先以该分支机构管理的财产承担，不足\\n以承担的，由法人承担。"},"children":[]}]}]},{"data":{"id":"cp94x2z2ii80","created":1671792323649,"text":"营利法人"},"children":[{"data":{"id":"cp94x2z28kg0","created":1671792323649,"text":"以取得利润并分配给股 东等出资人为目的成立 的法人"},"children":[{"data":{"id":"cp94x2z31mg0","created":1671792323650,"text":"公司制营利法人"},"children":[{"data":{"id":"cp94x2z2qh40","created":1671792323650,"text":"公司制营利法人主要是有限责任公司、股份有限公司。"},"children":[]}]},{"data":{"id":"cp94x2z2zjc0","created":1671792323650,"text":"非公司制营利法人"},"children":[{"data":{"id":"cp94x2z2jzc0","created":1671792323650,"text":"非公司制营利法人主要是没有采用公司制的全民所有制企\\n业、集体所有制企业等。"},"children":[]}]}]}]},{"data":{"id":"cp94x2z2wls0","created":1671792323650,"text":"非营利法人"},"children":[{"data":{"id":"cp94x2z332g0","created":1671792323650,"text":"为公益目的或者其他非 营利目的成立，不向出 资人、\\n设立人或者会员 分配所取得利润的法人"},"children":[{"data":{"id":"cp94x2z2o1k0","created":1671792323650,"text":"事业单位"},"children":[]},{"data":{"id":"cp94x2z2mdk0","created":1671792323650,"text":"社会团体"},"children":[]},{"data":{"id":"cp94x2z316g0","created":1671792323650,"text":"基金会、社会服务机构等"},"children":[]}]}]},{"data":{"id":"cp94x2z2u0g0","created":1671792323650,"text":"特别法人"},"children":[{"data":{"id":"cp94x2z3jrs0","created":1671792323651,"text":"与营利和非营利法人存 在较大差别的一类法人"},"children":[{"data":{"id":"cp94x2z3pvs0","created":1671792323651,"text":"主要包括机关法人、农村集体经济组织法人、城镇农村的\\n合作经济组织法人、基层群众性自治组织法人。"},"children":[]}]}]}]},{"data":{"id":"cp94x2z3qi80","created":1671792323651,"text":"(三)非法人组织"},"children":[{"data":{"id":"cp94x2z3bds0","created":1671792323651,"text":"非法人组织是指不具有法人资格，但是能够依法以自己的\\n名义从事民事活动的组织。"},"children":[]},{"data":{"id":"cp94x2z3kbs0","created":1671792323651,"text":"非法人组织包括个人独资企业、合伙企业、不具有法人资\\n格的专业服务机构等。"},"children":[]}]},{"data":{"id":"cp94x2z379s0","created":1671792323651,"text":"(四)国家"},"children":[{"data":{"id":"cp94x2z39yo0","created":1671792323651,"text":"在特殊情况下，国家可以作为一个整体成为法律主体。如\\n在国内，国家是国家财产所有权唯一和统一的主体;在国\\n际上，国家作为主权者，是国际公法关系的主体，也可以\\n成为对外贸易关系中的债权人或债务人。"},"children":[]}]}]},{"data":{"id":"cp94x2z3iug0","created":1671792323651,"text":"二、法律主体的资格","expandState":"collapse"},"children":[{"data":{"id":"cp94x2z3lpk0","created":1671792323651,"text":"（一)权利能力"},"children":[{"data":{"id":"cp94x2z3zbc0","created":1671792323652,"text":"法人的权利能力"},"children":[{"data":{"id":"cp94x2z3zxs0","created":1671792323652,"text":"法人权利能力的范围由法人成立的宗旨和业务范围决定，\\n自法人成立时产生，至法人终止时消灭。"},"children":[]}]},{"data":{"id":"cp94x2z3v8g0","created":1671792323652,"text":"自然人的权利能力"},"children":[{"data":{"id":"cp94x2z3xa00","created":1671792323652,"text":"自然人从出生时起到死亡时止，具有民事权利能力，依法\\n享 有民事权利，承担民事义务。自然人的民事权利能力\\n一律平等。"},"children":[]}]}]},{"data":{"id":"cp94x2z49ns0","created":1671792323652,"text":"（二)行为能力"},"children":[{"data":{"id":"cp94x2z3uvs0","created":1671792323652,"text":"自然人的民事行为能力"},"children":[{"data":{"id":"cp94x2z3zfk0","created":1671792323652,"text":"1、完全民事行为人（完人）"},"children":[{"data":{"id":"cp94x2z3vhc0","created":1671792323652,"text":"（1）18周岁以上 （2）16周岁以上不满 18 \\n周岁，以自己的劳动收入为主要生活来源的 （一定要是\\n自己挣的钱，别人给的、继承的都不行）"},"children":[]}]},{"data":{"id":"cp94x2z4gk80","created":1671792323653,"text":"2、限制民事行为人（限人）"},"children":[{"data":{"id":"cp94x2z4lrs0","created":1671792323653,"text":"（1）8 周岁以上不满18周岁的 （2）不能完全辨认自己行为的成年人"},"children":[]},{"data":{"id":"cp94x2z4w680","created":1671792323653,"text":"限人的这4类民事行为有效"},"children":[{"data":{"id":"cp94x2z4k6w0","created":1671792323653,"text":"①、由法定代理人代理实施的民事行为（如限人的监护人\\n，代理此限人办事）②、经法定代理人同意、追认的民事\\n行为（如限人在监护人同意的情况下花钱消费）③、纯获\\n利的民事行为（如限人接受红包、赠予、奖励、捐款、资\\n助等只有好处没有坏处纯获利的行为）④、与限人年龄、\\n智力相适应的民事行为（如15岁的孩子花20元买学习\\n资料，这是与他年龄和智力适应的行为）"},"children":[]}]},{"data":{"id":"cp94x2z4ra00","created":1671792323653,"text":"知识小点"},"children":[{"data":{"id":"cp94x2z4ceg0","created":1671792323653,"text":"限制民事行为能力人可以独立实施的民事法律行为是（）\\n A.接受赠与 (ﾟ▽ﾟ)/"},"children":[]},{"data":{"id":"cp94x2z4dc00","created":1671792323653,"text":"下列属于有效的民事法律行为的是（） A.8岁小学生\\n接受长辈赠与的手表 (ﾟ▽ﾟ)/ B.甲乙签订买卖\\n四只黑熊熊掌的合同 ヽ(。>д<)【违反法律】 C\\n.丙丁之间签订房屋租赁合同，约定租期为25年 ヽ(\\n。>д<)【不能超过20年】 D.10岁小学生独自\\n到商场购买了一台价值6000元的电脑 ヽ(。>д<\\n)【10岁小学生（限制民事行为能力人）】"},"children":[]},{"data":{"id":"cp94x2z54gw0","created":1671792323654,"text":"甲有一块名表，15岁的乙愿意出价2万元购买，并约定\\n乙3个月内将钱付清，乙的父亲丙觉得价钱合理，对甲、\\n乙的合同行为予以追认。甲、乙的合同是否有效？（） \\nA.有效"},"children":[{"data":{"id":"cp94x2z58d40","created":1671792323654,"text":"限制民事行为能力人订立的合同，经法定代理人追认后，\\n该合同有效，但纯获利益的合同或者与其年龄、智力、精\\n神健康状况相适应而订立的合同，不必经法定代理人追认"},"children":[]}]},{"data":{"id":"cp94x2z5gls0","created":1671792323654,"text":"李某16周岁，继承遗产10万元，根据《民法总则》规\\n定，他是() C.限制民事行为能力人 (ﾟ▽ﾟ)/"},"children":[{"data":{"id":"cp94x2z51280","created":1671792323654,"text":"李某虽然年湖16周岁，但是并未做到以自己的劳动收入\\n为主要生活来源，所以不可以将其视为完全民事行为能力\\n人。"},"children":[]}]},{"data":{"id":"cp94x2z59iw0","created":1671792323654,"text":"国家一级杂技演员小刘（16周岁）利用自己演出获得的\\n报酬，在某大型超市内为其父亲购买了一台价值万元的家\\n庭按摩椅，作为父亲的生日礼物关于购买行为的法律效力\\n问题"},"children":[{"data":{"id":"cp94x2z55qw0","created":1671792323654,"text":"十六周岁以上的未成年人，以自己的劳动收入为主要生活\\n来源的，视为完全民事行为能力人"},"children":[]}]},{"data":{"id":"cp94x2z52140","created":1671792323654,"text":"限制民事行为能力人 乙，36周岁，患有精神病，不能完全辨认自己的行为"},"children":[]}]}]},{"data":{"id":"cp94x2z5gn40","created":1671792323654,"text":"3、无民事行为人（无人）"},"children":[{"data":{"id":"cp94x2z4xo00","created":1671792323654,"text":"（1）不满8周岁的未成年人 （2）不能辨认自己行为的人"},"children":[{"data":{"id":"cp94x2z5gzk0","created":1671792323654,"text":"一律由法定代理人代理实施民事行为（不能买东西、不能\\n消费，不能收红包（纯获利）。。。只能由监护人代理实\\n施）"},"children":[]}]},{"data":{"id":"cp94x2z619s0","created":1671792323655,"text":"知识小点"},"children":[{"data":{"id":"cp94x2z62ps0","created":1671792323655,"text":"对于无民事行为能力和限制民事行为能力人的人身、财产\\n及其他合法权益进行监督、保护的制度称为（）"},"children":[{"data":{"id":"cp94x2z5v6w0","created":1671792323655,"text":"监护"},"children":[]}]},{"data":{"id":"cp94x2z5mls0","created":1671792323655,"text":"甲为刚出生的小婴儿，对于其民事权利能力和民事行为能\\n力，以下说法正确的是（）甲有民事权利能力，无民事行\\n为能力"},"children":[]}]}]}]},{"data":{"id":"cp94x2z5jew0","created":1671792323655,"text":"自然人的刑事责任能力"},"children":[{"data":{"id":"cp94x2z5ryw0","created":1671792323655,"text":"14周岁<X<16周岁"},"children":[{"data":{"id":"cp94x2z5xzs0","created":1671792323655,"text":"故意杀人、故意伤害致人重伤或者死亡、强奸、 抢劫、\\n贩卖毒品、放火、爆炸、投放危险物质罪的"},"children":[{"data":{"id":"cp94x2z6ck00","created":1671792323656,"text":"负刑事责任"},"children":[]}]}]},{"data":{"id":"cp94x2z6o0o0","created":1671792323656,"text":"14周岁<X<18周岁"},"children":[{"data":{"id":"cp94x2z6mw80","created":1671792323656,"text":"犯罪"},"children":[{"data":{"id":"cp94x2z6a7c0","created":1671792323656,"text":"从轻或减轻处罚"},"children":[]}]}]},{"data":{"id":"cp94x2z6goo0","created":1671792323656,"text":"X>18周岁"},"children":[{"data":{"id":"cp94x2z69y00","created":1671792323656,"text":"犯罪"},"children":[{"data":{"id":"cp94x2z6glk0","created":1671792323656,"text":"负刑事责任"},"children":[]}]}]},{"data":{"id":"cp94x2z6byg0","created":1671792323656,"text":"X>75周岁"},"children":[{"data":{"id":"cp94x2z6fbk0","created":1671792323656,"text":"故意犯罪"},"children":[{"data":{"id":"cp94x2z79140","created":1671792323657,"text":"可从轻或减轻处罚"},"children":[]}]},{"data":{"id":"cp94x2z74jk0","created":1671792323657,"text":"过失犯罪"},"children":[{"data":{"id":"cp94x2z73080","created":1671792323657,"text":"应当从轻或减轻处罚"},"children":[]}]}]},{"data":{"id":"cp94x2z6ycg0","created":1671792323657,"text":"精神病人"},"children":[{"data":{"id":"cp94x2z6z280","created":1671792323657,"text":"完全不能辨认或者不能控制自己行为时犯罪"},"children":[{"data":{"id":"cp94x2z77pc0","created":1671792323657,"text":"不负刑事责任"},"children":[]}]},{"data":{"id":"cp94x2z6xr40","created":1671792323657,"text":"精神正常时犯罪"},"children":[{"data":{"id":"cp94x2z6rx40","created":1671792323657,"text":"负刑事责任"},"children":[]}]},{"data":{"id":"cp94x2z79x40","created":1671792323657,"text":"尚未完全丧失辨认或控制行为能力"},"children":[{"data":{"id":"cp94x2z6u740","created":1671792323657,"text":"可从轻或减轻处罚"},"children":[]}]}]}]}]}]}]},{"data":{"id":"cp94x2z7c0w0","created":1671792323658,"text":"第三节 法律责任★★★","expandState":"expand"},"children":[{"data":{"id":"cp94x2z7bhc0","created":1671792323658,"text":"种类","expandState":"collapse"},"children":[{"data":{"id":"cp94x2z7mlk0","created":1671792323658,"text":"民事责任"},"children":[{"data":{"id":"cp94x2z7lew0","created":1671792323658,"text":"1.停止侵害 2.排除妨碍 3.消除危险 4.返还\\n财产 5.恢复原状 6.修理、重作、更换"},"children":[]},{"data":{"id":"cp94x2z8aug0","created":1671792323659,"text":"7.继续履行 8.赔偿损失 9.支付违约金 10.消除影响、恢复名誉 11.赔礼道歉"},"children":[]}]},{"data":{"id":"cp94x2z8h140","created":1671792323659,"text":"行政责任"},"children":[{"data":{"id":"cp94x2z88wg0","created":1671792323659,"text":"行政处罚"},"children":[{"data":{"id":"cp94x2z897k0","created":1671792323659,"text":"1.警告 通报批评 2.罚款 3.没收违法所得、没\\n收非法财物 4.责令停产停业 5.暂扣或者吊销许可\\n证/执照 6.行政拘留 7.法律、行政法规的其他行\\n政处罚 8.限制从业 9.降低资质等级 10.限制\\n开展生产经营活动"},"children":[]}]},{"data":{"id":"cp94x2z7wm00","created":1671792323659,"text":"行政处分"},"children":[{"data":{"id":"cp94x2z81jk0","created":1671792323659,"text":"警告、记过、记大过、降级、撤职、开除"},"children":[]}]}]},{"data":{"id":"cp94x2z8bi00","created":1671792323659,"text":"刑事责任"},"children":[{"data":{"id":"cp94x2z92o80","created":1671792323660,"text":"主刑"},"children":[{"data":{"id":"cp94x2z8vw00","created":1671792323660,"text":"1.管制：不关押，三个月以上两年以下"},"children":[]},{"data":{"id":"cp94x2z8x0g0","created":1671792323660,"text":"2.拘役：剥夺短期人身自由，一个月以上六个月以下"},"children":[]},{"data":{"id":"cp94x2z8zgo0","created":1671792323660,"text":"3.有期徒刑：6个月以上15年以下"},"children":[]},{"data":{"id":"cp94x2z8zqw0","created":1671792323660,"text":"4.无期徒刑：剥夺终身自由"},"children":[]},{"data":{"id":"cp94x2z8q4g0","created":1671792323660,"text":"5.死刑：缓期2年执行"},"children":[]}]},{"data":{"id":"cp94x2z8odc0","created":1671792323660,"text":"附加刑"},"children":[{"data":{"id":"cp94x2z8ygo0","created":1671792323660,"text":"同主刑一起适用，也可以独立适用"},"children":[]},{"data":{"id":"cp94x2z8o8g0","created":1671792323660,"text":"1.罚金"},"children":[]},{"data":{"id":"cp94x2z8rc00","created":1671792323660,"text":"2.剥夺政治权利"},"children":[]},{"data":{"id":"cp94x2z94y80","created":1671792323661,"text":"3.没收财产"},"children":[]},{"data":{"id":"cp94x2z94680","created":1671792323661,"text":"4.驱逐出境"},"children":[]}]}]}]},{"data":{"id":"cp94x2z9ftk0","created":1671792323661,"text":"经济纠纷的解决途径","expandState":"collapse"},"children":[{"data":{"id":"cp94x2z9nq80","created":1671792323661,"text":"仲裁"},"children":[{"data":{"id":"cp94x2z98io0","created":1671792323661,"text":"特征"},"children":[{"data":{"id":"cp94x2z95eg0","created":1671792323661,"text":"1.以双方当事人自愿协商为基础"},"children":[]},{"data":{"id":"cp94x2z9bcw0","created":1671792323661,"text":"2.由双方当事人自愿选择的中立第三方进行裁判，机构是民间性的组织"},"children":[]},{"data":{"id":"cp94x2z9d8w0","created":1671792323661,"text":"3.仲裁裁决对双方当事人都具有约束力"},"children":[]}]},{"data":{"id":"cp94x2z98y80","created":1671792323661,"text":"适用范围"},"children":[{"data":{"id":"cp94x2z9l6o0","created":1671792323661,"text":"平等主体的公民、法人和其他组织间发生的合同纠纷和其他财产权益纠纷"},"children":[]},{"data":{"id":"cp94x2z9bx40","created":1671792323661,"text":"不能提请仲裁的："},"children":[{"data":{"id":"cp94x2za6zc0","created":1671792323662,"text":"1.婚姻、收养、监护、抚养、继承纠纷"},"children":[]},{"data":{"id":"cp94x2z9tqw0","created":1671792323662,"text":"2.依法应当由行政机关处理的行政争议"},"children":[]}]},{"data":{"id":"cp94x2za33s0","created":1671792323662,"text":"不属于《仲裁法》"},"children":[{"data":{"id":"cp94x2za7mo0","created":1671792323662,"text":"1.劳动争议"},"children":[]},{"data":{"id":"cp94x2za0dk0","created":1671792323662,"text":"2.农业集体经济组织内部的农业承包合同纠纷"},"children":[]}]}]},{"data":{"id":"cp94x2z9rs80","created":1671792323662,"text":"基本原则"},"children":[{"data":{"id":"cp94x2z9x2g0","created":1671792323662,"text":"1.双方自愿的原则"},"children":[]},{"data":{"id":"cp94x2z9zhs0","created":1671792323662,"text":"2.依据事实和法律，公平合理地解决纠纷的原则"},"children":[]},{"data":{"id":"cp94x2za9800","created":1671792323662,"text":"3.独立仲裁原则"},"children":[]},{"data":{"id":"cp94x2za9ts0","created":1671792323662,"text":"4.一裁终局原则"},"children":[]}]}]},{"data":{"id":"cp94x2zabvk0","created":1671792323663,"text":"民事诉讼"},"children":[{"data":{"id":"cp94x2zae2w0","created":1671792323663,"text":"概念：国家审判机关（人民法院），依照法律规定，在当\\n事人和其他诉讼参与人的参加下，依法解决讼争的活动。"},"children":[]},{"data":{"id":"cp94x2zasm80","created":1671792323663,"text":"适应范围"},"children":[{"data":{"id":"cp94x2zaveo0","created":1671792323663,"text":"公民之间、法人之间、其他组织之间以及他们相互之间因\\n财产关系和人身关系发生的纠纷。"},"children":[]},{"data":{"id":"cp94x2zaaog0","created":1671792323663,"text":"1.因民法、婚姻法、收养法、继承法等调整的平等主体\\n之间的财产关系和人身关系：合同纠纷、房产纠纷、侵害\\n名誉权纠纷等"},"children":[]},{"data":{"id":"cp94x2zad4w0","created":1671792323663,"text":"2.因经济法、劳动法调整的社会关系发生的争议，如劳动合同纠纷案件"},"children":[]},{"data":{"id":"cp94x2zaadk0","created":1671792323663,"text":"3.适用特别程序审理的选民资格案件和宣告公民失踪、死亡等非诉讼案件"},"children":[]},{"data":{"id":"cp94x2zakv40","created":1671792323663,"text":"4.按照督促程序解决的债务案件"},"children":[]},{"data":{"id":"cp94x2zaip40","created":1671792323663,"text":"5.按照公示催告程序解决的宣告票据和有关事项无效的案件"},"children":[]}]},{"data":{"id":"cp94x2zasm80","created":1671792323663,"text":"审判制度"},"children":[{"data":{"id":"cp94x2zb3u80","created":1671792323664,"text":"合议制度"},"children":[]},{"data":{"id":"cp94x2zayvs0","created":1671792323664,"text":"回避制度"},"children":[]},{"data":{"id":"cp94x2zb3hc0","created":1671792323664,"text":"公开审判制度"},"children":[{"data":{"id":"cp94x2zb0lc0","created":1671792323664,"text":"离婚案件、涉及商业秘密的案件，当事人申请不公开审理\\n的，可以不公开审理"},"children":[]}]},{"data":{"id":"cp94x2zaw400","created":1671792323664,"text":"两审终审制度"},"children":[]}]},{"data":{"id":"cp94x2zb8e00","created":1671792323664,"text":"诉讼管辖"},"children":[{"data":{"id":"cp94x2zb7qw0","created":1671792323664,"text":"级别管辖"},"children":[{"data":{"id":"cp94x2zbf540","created":1671792323664,"text":"大多数民事案件均归基层人民法院管辖"},"children":[]}]},{"data":{"id":"cp94x2zb8kg0","created":1671792323664,"text":"地域管辖"},"children":[{"data":{"id":"cp94x2zb1e00","created":1671792323664,"text":"一般地域管辖 原告就被告"},"children":[]},{"data":{"id":"cp94x2zbhqg0","created":1671792323665,"text":"特殊地域管辖"},"children":[]},{"data":{"id":"cp94x2zbjds0","created":1671792323665,"text":"专属管辖"},"children":[]},{"data":{"id":"cp94x2zbrk00","created":1671792323665,"text":"协议管辖"},"children":[]}]}]},{"data":{"id":"cp94x2zbz2o0","created":1671792323665,"text":"诉讼时效"},"children":[{"data":{"id":"cp94x2zbh9k0","created":1671792323665,"text":"期间"},"children":[{"data":{"id":"cp94x2zbyiw0","created":1671792323665,"text":"普通诉讼时效期间为3年"},"children":[]},{"data":{"id":"cp94x2zbl9k0","created":1671792323665,"text":"最长诉讼时效期间。自权利受到损害之日起超过20年的\\n，人民法院不予保护；有特殊情况的可根据权利人的申请\\n决定延长。"},"children":[]}]},{"data":{"id":"cp94x2zbx6g0","created":1671792323665,"text":"中止"},"children":[{"data":{"id":"cp94x2zbxe00","created":1671792323665,"text":"在诉讼时效期间的最后六个月内"},"children":[]}]},{"data":{"id":"cp94x2zbud40","created":1671792323665,"text":"中断"},"children":[]}]},{"data":{"id":"cp94x2zcj740","created":1671792323666,"text":"判决和执行"},"children":[{"data":{"id":"cp94x2zc7c80","created":1671792323666,"text":"调解"},"children":[]},{"data":{"id":"cp94x2zcd0g0","created":1671792323666,"text":"判决"},"children":[{"data":{"id":"cp94x2zchdk0","created":1671792323666,"text":"当事人不服地方人民法院第一审判决的，有权在判决书送\\n达之日起15日内向上一级法院提起上诉。"},"children":[]}]},{"data":{"id":"cp94x2zcl000","created":1671792323666,"text":"执行"},"children":[]}]}]},{"data":{"id":"cp94x2zckwo0","created":1671792323666,"text":"行政复议"},"children":[{"data":{"id":"cp94x2zcbds0","created":1671792323666,"text":"范围：公民、法人或者其他组织认为行政机关的具体行政\\n行为侵犯其合法权益，符合规定范围的，可以申请行政复\\n议"},"children":[]},{"data":{"id":"cp94x2zcabk0","created":1671792323666,"text":"排除事项："},"children":[{"data":{"id":"cp94x2zciog0","created":1671792323666,"text":"不服行政机关作出的行政处分或者其他人事处理决定，可提出申诉"},"children":[]},{"data":{"id":"cp94x2zctx40","created":1671792323667,"text":"不服从行政机关对民事纠纷作出的调解或者其他处理，可\\n依法申请仲裁或向法院提起诉讼"},"children":[]}]},{"data":{"id":"cp94x2zd42o0","created":1671792323667,"text":"行政复议的申请和受理"},"children":[{"data":{"id":"cp94x2zcw5k0","created":1671792323667,"text":"自知道该具体行政行为之日起60日内提出行政复议申请\\n，法律规定的申请期限超过60日的除外。"},"children":[]},{"data":{"id":"cp94x2zd0qg0","created":1671792323667,"text":"书面申请、口头申请"},"children":[]}]},{"data":{"id":"cp94x2zctr40","created":1671792323667,"text":"实行垂直领导的行政机关"},"children":[{"data":{"id":"cp94x2zd4a80","created":1671792323667,"text":"海关、金融"},"children":[{"data":{"id":"cp94x2zcto80","created":1671792323667,"text":"修改为 海关、金融等 ，删除了 国税、外汇管理(2021)"},"children":[]}]}]}]},{"data":{"id":"cp94x2zcypc0","created":1671792323667,"text":"行政诉讼"},"children":[{"data":{"id":"cp94x2zcwnc0","created":1671792323667,"text":"范围：公民、法人或者其他组织认为行政机关和行政机关\\n工作人员的行政行为侵犯其合法权益，有权向人民法院提\\n起行政诉讼。行政行为包括：法律、法规、规章授权的组\\n织做出的行政行为。 本资料唯一购买渠道 微信号:c\\narrot8375"},"children":[]}]},{"data":{"id":"cp94x2zdi2g0","created":1671792323668,"text":"刑事诉讼"},"children":[]}]}]}]}]},"template":"default","theme":"fresh-blue","version":"1.4.33"}'
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
                            h = ["前移:Alt+Up:ArrangeUp", "下级:Tab|Insert:AppendChildNode", "同级:Enter:AppendSiblingNode", "后移:Alt+Down:ArrangeDown", "删除:Delete|Backspace:RemoveNode", "上级:Shift+Tab|Shift+Insert:AppendParentNode"],
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
                                    0 === j.indexOf("Append") ? (i++, d.execCommand(j, "分支主题"), d.on("layoutallfinish", a)) : (d.execCommand(j), f.jump("normal", "command-executed"))
                                },
                                enable: function() {
                                    return - 1 != d.queryCommandState(j)
                                }
                            })
                        }),
                            g.button({
                                position: "bottom",
                                label: "导入节点",
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
                                label: "导出节点",
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
                            label: "优先级",
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
                                label: "移除",
                                key: "Del",
                                action: function() {
                                    a.execCommand("Priority", 0)
                                }
                            }),
                            d.button({
                                position: "top",
                                label: "返回",
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
                            label: "进度",
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
                                label: "移除",
                                key: "Del",
                                action: function() {
                                    a.execCommand("Progress", 0)
                                }
                            }),
                            d.button({
                                position: "top",
                                label: "返回",
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
                        a.put("ui/directive/fontOperator/fontOperator.html", '<div class="font-operator"><div class="dropdown font-family-list" dropdown><div class="dropdown-toggle current-font-item" dropdown-toggle ng-disabled="minder.queryCommandState(\'fontfamily\') === -1"><a href class="current-font-family" title="{{ \'fontfamily\' | lang: \'ui\' }}">{{ getFontfamilyName(minder.queryCommandValue(\'fontfamily\')) || \'字体\' }}</a> <span class="caret"></span></div><ul class="dropdown-menu font-list"><li ng-repeat="f in fontFamilyList" class="font-item-wrap"><a ng-click="minder.execCommand(\'fontfamily\', f.val)" class="font-item" ng-class="{ \'font-item-selected\' : f == minder.queryCommandValue(\'fontfamily\') }" ng-style="{\'font-family\': f.val }">{{ f.name }}</a></li></ul></div><div class="dropdown font-size-list" dropdown><div class="dropdown-toggle current-font-item" dropdown-toggle ng-disabled="minder.queryCommandState(\'fontsize\') === -1"><a href class="current-font-size" title="{{ \'fontsize\' | lang: \'ui\' }}">{{ minder.queryCommandValue(\'fontsize\') || \'字号\' }}</a> <span class="caret"></span></div><ul class="dropdown-menu font-list"><li ng-repeat="f in fontSizeList" class="font-item-wrap"><a ng-click="minder.execCommand(\'fontsize\', f)" class="font-item" ng-class="{ \'font-item-selected\' : f == minder.queryCommandValue(\'fontsize\') }" ng-style="{\'font-size\': f + \'px\'}">{{ f }}</a></li></ul></div><span class="s-btn-icon font-bold" ng-click="minder.queryCommandState(\'bold\') === -1 || minder.execCommand(\'bold\')" ng-class="{\'font-bold-selected\' : minder.queryCommandState(\'bold\') == 1}" ng-disabled="minder.queryCommandState(\'bold\') === -1"></span> <span class="s-btn-icon font-italics" ng-click="minder.queryCommandState(\'italic\') === -1 || minder.execCommand(\'italic\')" ng-class="{\'font-italics-selected\' : minder.queryCommandState(\'italic\') == 1}" ng-disabled="minder.queryCommandState(\'italic\') === -1"></span><div class="font-color-wrap"><span class="quick-font-color" ng-click="minder.queryCommandState(\'forecolor\') === -1 || minder.execCommand(\'forecolor\', foreColor)" ng-disabled="minder.queryCommandState(\'forecolor\') === -1">A</span> <span color-picker class="font-color" set-color="setDefaultColor()" ng-disabled="minder.queryCommandState(\'forecolor\') === -1"><span class="caret"></span></span> <span class="font-color-preview" ng-style="{ \'background-color\': foreColor }" ng-click="minder.queryCommandState(\'forecolor\') === -1 || minder.execCommand(\'forecolor\', foreColor)" ng-disabled="minder.queryCommandState(\'forecolor\') === -1"></span></div><color-panel minder="minder" class="inline-directive"></color-panel></div>'),
                        a.put("ui/directive/hyperLink/hyperLink.html", '<div class="btn-group-vertical" dropdown is-open="isopen"><button type="button" class="btn btn-default hyperlink" title="{{ \'link\' | lang:\'ui\' }}" ng-class="{\'active\': isopen}" ng-click="addHyperlink()" ng-disabled="minder.queryCommandState(\'HyperLink\') === -1"></button> <button type="button" class="btn btn-default hyperlink-caption dropdown-toggle" ng-disabled="minder.queryCommandState(\'HyperLink\') === -1" title="{{ \'link\' | lang:\'ui\' }}" dropdown-toggle><span class="caption">{{ \'link\' | lang:\'ui\' }}</span> <span class="caret"></span> <span class="sr-only">{{ \'link\' | lang:\'ui\' }}</span></button><ul class="dropdown-menu" role="menu"><li><a href ng-click="addHyperlink()">{{ \'insertlink\' | lang:\'ui\' }}</a></li><li><a href ng-click="minder.execCommand(\'HyperLink\', null)">{{ \'removelink\' | lang:\'ui\' }}</a></li></ul></div>'),
                        a.put("ui/directive/imageBtn/imageBtn.html", '<div class="btn-group-vertical" dropdown is-open="isopen"><button type="button" class="btn btn-default image-btn" title="{{ \'image\' | lang:\'ui\' }}" ng-class="{\'active\': isopen}" ng-click="addImage()" ng-disabled="minder.queryCommandState(\'Image\') === -1"></button> <button type="button" class="btn btn-default image-btn-caption dropdown-toggle" ng-disabled="minder.queryCommandState(\'Image\') === -1" title="{{ \'image\' | lang:\'ui\' }}" dropdown-toggle><span class="caption">{{ \'image\' | lang:\'ui\' }}</span> <span class="caret"></span> <span class="sr-only">{{ \'image\' | lang:\'ui\' }}</span></button><ul class="dropdown-menu" role="menu"><li><a href ng-click="addImage()">{{ \'insertimage\' | lang:\'ui\' }}</a></li><li><a href ng-click="minder.execCommand(\'Image\', \'\')">{{ \'removeimage\' | lang:\'ui\' }}</a></li></ul></div>'),
                        a.put("ui/directive/kityminderEditor/kityminderEditor.html", '<div class="minder-editor-container"><div class="top-tab" top-tab="minder" editor="editor" ng-if="minder"></div><div search-box minder="minder" ng-if="minder"></div><div class="minder-editor"></div><div class="km-note" note-editor minder="minder" ng-if="minder"></div><div class="note-previewer" note-previewer ng-if="minder"></div><div class="navigator" navigator minder="minder" ng-if="minder"></div></div>'),
                        a.put("ui/directive/kityminderViewer/kityminderViewer.html", '<div class="minder-editor-container"><div class="minder-viewer"></div><div class="note-previewer" note-previewer ng-if="minder"></div><div class="navigator" navigator minder="minder" ng-if="minder"></div></div>'),
                        a.put("ui/directive/layout/layout.html", '<div class="readjust-layout"><a ng-click="minder.queryCommandState(\'resetlayout\') === -1 || minder.execCommand(\'resetlayout\')" class="btn-wrap" ng-disabled="minder.queryCommandState(\'resetlayout\') === -1"><span class="btn-icon reset-layout-icon"></span> <span class="btn-label">{{ \'resetlayout\' | lang: \'ui/command\' }}</span></a></div>'),
                        a.put("ui/directive/navigator/navigator.html", '<div class="nav-bar"><div class="nav-btn zoom-in" ng-click="minder.execCommand(\'zoomIn\')" title="{{ \'zoom-in\' | lang : \'ui\' }}" ng-class="{ \'active\' : getZoomRadio(zoom) == 0 }"><div class="icon"></div></div><div class="zoom-pan"><div class="origin" ng-style="{\'transform\': \'translate(0, \' + getHeight(100) + \'px)\'}" ng-click="minder.execCommand(\'zoom\', 100);"></div><div class="indicator" ng-style="{\n             \'transform\': \'translate(0, \' + getHeight(zoom) + \'px)\',\n             \'transition\': \'transform 200ms\'\n             }"></div></div><div class="nav-btn zoom-out" ng-click="minder.execCommand(\'zoomOut\')" title="{{ \'zoom-out\' | lang : \'ui\' }}" ng-class="{ \'active\' : getZoomRadio(zoom) == 1 }"><div class="icon"></div></div><div class="nav-btn hand" ng-click="minder.execCommand(\'hand\')" title="{{ \'hand\' | lang : \'ui\' }}" ng-class="{ \'active\' : minder.queryCommandState(\'hand\') == 1 }"><div class="icon"></div></div><div class="nav-btn camera" ng-click="minder.execCommand(\'camera\', minder.getRoot(), 600);" title="{{ \'camera\' | lang : \'ui\' }}"><div class="icon"></div></div><div class="nav-btn nav-trigger" ng-class="{\'active\' : isNavOpen}" ng-click="toggleNavOpen()" title="{{ \'navigator\' | lang : \'ui\' }}"><div class="icon"></div></div></div><div class="nav-previewer" ng-show="isNavOpen"></div>'),
                        a.put("ui/directive/noteBtn/noteBtn.html", '<div class="btn-group-vertical note-btn-group" dropdown is-open="isopen"><button type="button" class="btn btn-default note-btn" title="{{ \'note\' | lang:\'ui\' }}" ng-class="{\'active\': isopen}" ng-click="addNote()" ng-disabled="minder.queryCommandState(\'note\') === -1"></button> <button type="button" class="btn btn-default note-btn-caption dropdown-toggle" ng-disabled="minder.queryCommandState(\'note\') === -1" title="{{ \'note\' | lang:\'ui\' }}" dropdown-toggle><span class="caption">{{ \'note\' | lang:\'ui\' }}</span> <span class="caret"></span> <span class="sr-only">{{ \'note\' | lang:\'ui\' }}</span></button><ul class="dropdown-menu" role="menu"><li><a href ng-click="addNote()">{{ \'insertnote\' | lang:\'ui\' }}</a></li><li><a href ng-click="minder.execCommand(\'note\', null)">{{ \'removenote\' | lang:\'ui\' }}</a></li></ul></div>'),
                        a.put("ui/directive/noteEditor/noteEditor.html", '<div class="panel panel-default" ng-init="noteEditorOpen = false" ng-show="noteEditorOpen"><div class="panel-heading"><h3 class="panel-title">备注</h3><span>（<a class="help" href="https://www.zybuluo.com/techird/note/46064" target="_blank">支持 GFM 语法书写</a>）</span> <i class="close-note-editor glyphicon glyphicon-remove" ng-click="closeNoteEditor()"></i></div><div class="panel-body"><div ng-show="noteEnabled" ui-codemirror="{ onLoad: codemirrorLoaded }" ng-model="noteContent" ui-codemirror-opts="{\n                gfm: true,\n                breaks: true,\n                lineWrapping : true,\n                mode: \'gfm\',\n                dragDrop: false,\n                lineNumbers:true\n             }"></div><p ng-show="!noteEnabled" class="km-note-tips">请选择节点编辑备注</p></div></div>'),
                        a.put("ui/directive/notePreviewer/notePreviewer.html", '<div id="previewer-content" ng-show="showNotePreviewer" ng-style="previewerStyle" ng-bind-html="noteContent"></div>'),
                        a.put("ui/directive/operation/operation.html", "<div class=\"km-btn-group operation-group\"><div class=\"km-btn-item edit-node\" ng-disabled=\"minder.queryCommandState('text') === -1\" ng-click=\"minder.queryCommandState('text') === -1 || editNode()\" title=\"{{ 'editnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'editnode' | lang:'ui/command' }}</span></div><div class=\"km-btn-item remove-node\" ng-disabled=\"minder.queryCommandState('RemoveNode') === -1\" ng-click=\"minder.queryCommandState('RemoveNode') === -1 || minder.execCommand('RemoveNode');\" title=\"{{ 'removenode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'removenode' | lang:'ui/command' }}</span></div></div>"),
                        a.put("ui/directive/priorityEditor/priorityEditor.html", '<ul class="km-priority tool-group" ng-disabled="commandDisabled"><li class="km-priority-item tool-group-item" ng-repeat="p in priorities" ng-click="commandDisabled || minder.execCommand(\'priority\', p)" ng-class="{ active: commandValue == p }" title="{{ getPriorityTitle(p) }}"><div class="km-priority-icon tool-group-icon priority-{{p}}"></div></li></ul>'),
                        a.put("ui/directive/progressEditor/progressEditor.html", '<ul class="km-progress tool-group" ng-disabled="commandDisabled"><li class="km-progress-item tool-group-item" ng-repeat="p in progresses" ng-click="commandDisabled || minder.execCommand(\'progress\', p)" ng-class="{ active: commandValue == p }" title="{{ getProgressTitle(p) }}"><div class="km-progress-icon tool-group-icon progress-{{p}}"></div></li></ul>'),
                        a.put("ui/directive/resourceEditor/resourceEditor.html", '<div class="resource-editor"><div class="input-group"><input class="form-control" type="text" ng-model="newResourceName" ng-required ng-keypress="$event.keyCode == 13 && addResource(newResourceName)" ng-disabled="!enabled"> <span class="input-group-btn"><button class="btn btn-default" ng-click="addResource(newResourceName)" ng-disabled="!enabled">添加</button></span></div><div class="resource-dropdown clearfix" id="resource-dropdown"><ul class="km-resource" ng-init="resourceListOpen = false" ng-class="{\'open\': resourceListOpen}"><li ng-repeat="resource in used" ng-disabled="!enabled" ng-blur="blurCB()"><label style="background: {{resourceColor(resource.name)}}"><input type="checkbox" ng-model="resource.selected" ng-disabled="!enabled"> <span>{{resource.name}}</span></label></li></ul><div class="resource-caret" click-anywhere-but-here="resourceListOpen = false" is-active="resourceListOpen" ng-click="resourceListOpen = !resourceListOpen"><span class="caret"></span></div></div></div>'),
                        a.put("ui/directive/searchBox/searchBox.html", '<div id="search" class="search-box clearfix" ng-show="showSearch"><div class="input-group input-group-sm search-input-wrap"><input type="text" id="search-input" class="form-control search-input" ng-model="keyword" ng-keydown="handleKeyDown($event)" aria-describedby="basic-addon2"> <span class="input-group-addon search-addon" id="basic-addon2" ng-show="showTip" ng-bind="\'第 \' + curIndex + \' 条，共 \' + resultNum + \' 条\'"></span></div><div class="btn-group btn-group-sm prev-and-next-btn" role="group"><button type="button" class="btn btn-default" ng-click="doSearch(keyword, \'prev\')"><span class="glyphicon glyphicon-chevron-up"></span></button> <button type="button" class="btn btn-default" ng-click="doSearch(keyword, \'next\')"><span class="glyphicon glyphicon-chevron-down"></span></button></div><div class="close-search" ng-click="exitSearch()"><span class="glyphicon glyphicon-remove"></span></div></div>'),
                        a.put("ui/directive/searchBtn/searchBtn.html", '<div class="btn-group-vertical" dropdown is-open="isopen"><button type="button" class="btn btn-default search" title="{{ \'search\' | lang:\'ui\' }}" ng-class="{\'active\': isopen}" ng-click="enterSearch()"></button> <button type="button" class="btn btn-default search-caption dropdown-toggle" ng-click="enterSearch()" title="{{ \'search\' | lang:\'ui\' }}"><span class="caption">{{ \'search\' | lang:\'ui\' }}</span> <span class="sr-only">{{ \'search\' | lang:\'ui\' }}</span></button></div>'),
                        a.put("ui/directive/selectAll/selectAll.html", '<div class="btn-group-vertical" dropdown is-open="isopen"><button type="button" class="btn btn-default select" title="{{ \'selectall\' | lang:\'ui\' }}" ng-class="{\'active\': isopen}" ng-click="select[\'all\']()"></button> <button type="button" class="btn btn-default select-caption dropdown-toggle" title="{{ \'selectall\' | lang:\'ui\' }}" dropdown-toggle><span class="caption">{{ \'selectall\' | lang:\'ui\' }}</span> <span class="caret"></span> <span class="sr-only">{{ \'selectall\' | lang:\'ui\' }}</span></button><ul class="dropdown-menu" role="menu"><li ng-repeat="item in items"><a href ng-click="select[item]()">{{ \'select\' + item | lang:\'ui\' }}</a></li></ul></div>'),
                        a.put("ui/directive/styleOperator/styleOperator.html", '<div class="style-operator"><a ng-click="minder.queryCommandState(\'clearstyle\') === -1 || minder.execCommand(\'clearstyle\')" class="btn-wrap clear-style" ng-disabled="minder.queryCommandState(\'clearstyle\') === -1"><span class="btn-icon clear-style-icon"></span> <span class="btn-label">{{ \'clearstyle\' | lang: \'ui\' }}</span></a><div class="s-btn-group-vertical"><a class="s-btn-wrap" href ng-click="minder.queryCommandState(\'copystyle\') === -1 || minder.execCommand(\'copystyle\')" ng-disabled="minder.queryCommandState(\'copystyle\') === -1"><span class="s-btn-icon copy-style-icon"></span> <span class="s-btn-label">{{ \'copystyle\' | lang: \'ui\' }}</span></a> <a class="s-btn-wrap paste-style-wrap" href ng-click="minder.queryCommandState(\'pastestyle\') === -1 || minder.execCommand(\'pastestyle\')" ng-disabled="minder.queryCommandState(\'pastestyle\') === -1"><span class="s-btn-icon paste-style-icon"></span> <span class="s-btn-label">{{ \'pastestyle\' | lang: \'ui\' }}</span></a></div></div>'),
                        a.put("ui/directive/templateList/templateList.html", '<div class="dropdown temp-panel" dropdown on-toggle="toggled(open)"><div class="dropdown-toggle current-temp-item" ng-disabled="minder.queryCommandState(\'template\') === -1" dropdown-toggle><a href class="temp-item {{ minder.queryCommandValue(\'template\') }}" title="{{ minder.queryCommandValue(\'template\') | lang: \'template\' }}"></a> <span class="caret"></span></div><ul class="dropdown-menu temp-list"><li ng-repeat="(key, templateObj) in templateList" class="temp-item-wrap"><a ng-click="minder.execCommand(\'template\', key);" class="temp-item {{key}}" ng-class="{ \'temp-item-selected\' : key == minder.queryCommandValue(\'template\') }" title="{{ key | lang: \'template\' }}"></a></li></ul></div>'),
                        a.put("ui/directive/themeList/themeList.html", '<div class="dropdown theme-panel" dropdown><div class="dropdown-toggle theme-item-selected" dropdown-toggle ng-disabled="minder.queryCommandState(\'theme\') === -1"><a href class="theme-item" ng-style="getThemeThumbStyle(minder.queryCommandValue(\'theme\'))" title="{{ minder.queryCommandValue(\'theme\') | lang: \'theme\'; }}">{{ minder.queryCommandValue(\'theme\') | lang: \'theme\'; }}</a> <span class="caret"></span></div><ul class="dropdown-menu theme-list"><li ng-repeat="key in themeKeyList" class="theme-item-wrap"><a ng-click="minder.execCommand(\'theme\', key);" class="theme-item" ng-style="getThemeThumbStyle(key)" title="{{ key | lang: \'theme\'; }}">{{ key | lang: \'theme\'; }}</a></li></ul></div>'),
                        a.put("ui/directive/topTab/topTab.html", '<tabset><tab heading="{{ \'idea\' | lang: \'ui/tabs\'; }}" ng-click="toggleTopTab(\'idea\')" select="setCurTab(\'idea\')"><undo-redo editor="editor"></undo-redo><append-node minder="minder"></append-node><arrange minder="minder"></arrange><operation minder="minder"></operation><hyper-link minder="minder"></hyper-link><image-btn minder="minder"></image-btn><note-btn minder="minder"></note-btn><priority-editor minder="minder"></priority-editor><progress-editor minder="minder"></progress-editor><resource-editor minder="minder"></resource-editor></tab><tab heading="{{ \'appearence\' | lang: \'ui/tabs\'; }}" ng-click="toggleTopTab(\'appearance\')" select="setCurTab(\'appearance\')"><template-list minder="minder" class="inline-directive"></template-list><theme-list minder="minder"></theme-list><layout minder="minder" class="inline-directive"></layout><style-operator minder="minder" class="inline-directive"></style-operator><font-operator minder="minder" class="inline-directive"></font-operator></tab><tab heading="{{ \'view\' | lang: \'ui/tabs\'; }}" ng-click="toggleTopTab(\'view\')" select="setCurTab(\'view\')"><expand-level minder="minder"></expand-level><select-all minder="minder"></select-all><search-btn minder="minder"></search-btn></tab></tabset>'),
                        a.put("ui/directive/undoRedo/undoRedo.html", '<div class="km-btn-group do-group"><div class="km-btn-item undo" ng-disabled="editor.history.hasUndo() == false" ng-click="editor.history.hasUndo() == false || editor.history.undo();" title="{{ \'undo\' | lang:\'ui\' }}"><i class="km-btn-icon"></i></div><div class="km-btn-item redo" ng-disabled="editor.history.hasRedo() == false" ng-click="editor.history.hasRedo() == false || editor.history.redo()" title="{{ \'redo\' | lang:\'ui\' }}"><i class="km-btn-icon"></i></div></div>'),
                        a.put("ui/dialog/hyperlink/hyperlink.tpl.html", '<div class="modal-header"><h3 class="modal-title">链接</h3></div><div class="modal-body"><form><div class="form-group" id="link-url-wrap" ng-class="{true: \'has-success\', false: \'has-error\'}[urlPassed]"><label for="link-url">链接地址：</label><input type="text" class="form-control" ng-model="url" ng-blur="urlPassed = R_URL.test(url)" ng-focus="this.value = url" ng-keydown="shortCut($event)" id="link-url" placeholder="必填：以 http(s):// 或 ftp:// 开头"></div><div class="form-group" ng-class="{\'has-success\' : titlePassed}"><label for="link-title">提示文本：</label><input type="text" class="form-control" ng-model="title" ng-blur="titlePassed = true" id="link-title" placeholder="选填：鼠标在链接上悬停时提示的文本"></div></form></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">确定</button> <button class="btn btn-warning" ng-click="cancel()">取消</button></div>'),
                        a.put("ui/dialog/imExportNode/imExportNode.tpl.html", '<div class="modal-header"><h3 class="modal-title">{{ title }}</h3></div><div class="modal-body"><textarea type="text" class="form-control single-input" rows="8" ng-keydown="shortCut($event);" ng-model="value" ng-readonly="type === \'export\'">\n    </textarea></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()" ng-disabled="type === \'import\' && value == \'\'">OK</button> <button class="btn btn-warning" ng-click="cancel()">Cancel</button></div>'),
                        a.put("ui/dialog/image/image.tpl.html", '<div class="modal-header"><h3 class="modal-title">图片</h3></div><div class="modal-body"><tabset><tab heading="图片搜索"><form class="form-inline"><div class="form-group"><label for="search-keyword">关键词：</label><input type="text" class="form-control" ng-model="data.searchKeyword2" id="search-keyword" placeholder="请输入搜索的关键词"></div><button class="btn btn-primary" ng-click="searchImage()">百度一下</button></form><div class="search-result" id="search-result"><ul><li ng-repeat="image in list" id="{{ \'img-item\' + $index }}" ng-class="{\'selected\' : isSelected}" ng-click="selectImage($event)"><img id="{{ \'img-\' + $index }}" ng-src="{{ image.src || \'\' }}" alt="{{ image.title }}" onerror="this.parentNode.removeChild(this)"> <span>{{ image.title }}</span></li></ul></div></tab><tab heading="插入图片" active="true"><form><div class="form-group" ng-class="{true: \'has-success\', false: \'has-error\'}[urlPassed]"><label for="image-url">链接地址：</label><input type="text" class="form-control" ng-model="data.url" ng-blur="urlPassed = data.R_URL.test(data.url)" ng-focus="this.value = data.url" ng-keydown="shortCut($event)" id="image-url" placeholder="必填：以 http(s):// 开头"></div><div class="form-group" ng-class="{\'has-success\' : titlePassed}"><label for="image-title">提示文本：</label><input type="text" class="form-control" ng-model="data.title" ng-blur="titlePassed = true" id="image-title" placeholder="选填：鼠标在图片上悬停时提示的文本"></div><div class="form-group"><label for="image-preview">图片预览：</label><img class="image-preview" id="image-preview" ng-src="{{ data.url }}" alt="{{ data.title }}"></div></form></tab></tabset></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">确定</button> <button class="btn btn-warning" ng-click="cancel()">取消</button></div>')
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
                                "default": "思维导图",
                                tianpan: "天盘图",
                                structure: "组织结构图",
                                filetree: "目录组织图",
                                right: "逻辑结构图",
                                "fish-bone": "鱼骨头图"
                            },
                            theme: {
                                classic: "脑图经典",
                                "classic-compact": "紧凑经典",
                                snow: "温柔冷光",
                                "snow-compact": "紧凑冷光",
                                fish: "鱼骨图",
                                wire: "线框",
                                "fresh-red": "清新红",
                                "fresh-soil": "泥土黄",
                                "fresh-green": "文艺绿",
                                "fresh-blue": "天空蓝",
                                "fresh-purple": "浪漫紫",
                                "fresh-pink": "脑残粉",
                                "fresh-red-compat": "紧凑红",
                                "fresh-soil-compat": "紧凑黄",
                                "fresh-green-compat": "紧凑绿",
                                "fresh-blue-compat": "紧凑蓝",
                                "fresh-purple-compat": "紧凑紫",
                                "fresh-pink-compat": "紧凑粉",
                                tianpan: "经典天盘",
                                "tianpan-compact": "紧凑天盘"
                            },
                            maintopic: "中心主题",
                            topic: "分支主题",
                            panels: {
                                history: "历史",
                                template: "模板",
                                theme: "皮肤",
                                layout: "布局",
                                style: "样式",
                                font: "文字",
                                color: "颜色",
                                background: "背景",
                                insert: "插入",
                                arrange: "调整",
                                nodeop: "当前",
                                priority: "优先级",
                                progress: "进度",
                                resource: "资源",
                                note: "备注",
                                attachment: "附件",
                                word: "文字"
                            },
                            error_message: {
                                title: "哎呀，脑图出错了",
                                err_load: "加载脑图失败",
                                err_save: "保存脑图失败",
                                err_network: "网络错误",
                                err_doc_resolve: "文档解析失败",
                                err_unknown: "发生了奇怪的错误",
                                err_localfile_read: "文件读取错误",
                                err_download: "文件下载失败",
                                err_remove_share: "取消分享失败",
                                err_create_share: "分享失败",
                                err_mkdir: "目录创建失败",
                                err_ls: "读取目录失败",
                                err_share_data: "加载分享内容出错",
                                err_share_sync_fail: "分享内容同步失败",
                                err_move_file: "文件移动失败",
                                err_rename: "重命名失败",
                                unknownreason: "可能是外星人篡改了代码...",
                                pcs_code: {
                                    3 : "不支持此接口",
                                    4 : "没有权限执行此操作",
                                    5 : "IP未授权",
                                    110 : "用户会话已过期，请重新登录",
                                    31001 : "数据库查询错误",
                                    31002 : "数据库连接错误",
                                    31003 : "数据库返回空结果",
                                    31021 : "网络错误",
                                    31022 : "暂时无法连接服务器",
                                    31023 : "输入参数错误",
                                    31024 : "app id为空",
                                    31025 : "后端存储错误",
                                    31041 : "用户的cookie不是合法的百度cookie",
                                    31042 : "用户未登陆",
                                    31043 : "用户未激活",
                                    31044 : "用户未授权",
                                    31045 : "用户不存在",
                                    31046 : "用户已经存在",
                                    31061 : "文件已经存在",
                                    31062 : "文件名非法",
                                    31063 : "文件父目录不存在",
                                    31064 : "无权访问此文件",
                                    31065 : "目录已满",
                                    31066 : "文件不存在",
                                    31067 : "文件处理出错",
                                    31068 : "文件创建失败",
                                    31069 : "文件拷贝失败",
                                    31070 : "文件删除失败",
                                    31071 : "不能读取文件元信息",
                                    31072 : "文件移动失败",
                                    31073 : "文件重命名失败",
                                    31079 : "未找到文件MD5，请使用上传API上传整个文件。",
                                    31081 : "superfile创建失败",
                                    31082 : "superfile 块列表为空",
                                    31083 : "superfile 更新失败",
                                    31101 : "tag系统内部错误",
                                    31102 : "tag参数错误",
                                    31103 : "tag系统错误",
                                    31110 : "未授权设置此目录配额",
                                    31111 : "配额管理只支持两级目录",
                                    31112 : "超出配额",
                                    31113 : "配额不能超出目录祖先的配额",
                                    31114 : "配额不能比子目录配额小",
                                    31141 : "请求缩略图服务失败",
                                    31201 : "签名错误",
                                    31202 : "文件不存在",
                                    31203 : "设置acl失败",
                                    31204 : "请求acl验证失败",
                                    31205 : "获取acl失败",
                                    31206 : "acl不存在",
                                    31207 : "bucket已存在",
                                    31208 : "用户请求错误",
                                    31209 : "服务器错误",
                                    31210 : "服务器不支持",
                                    31211 : "禁止访问",
                                    31212 : "服务不可用",
                                    31213 : "重试出错",
                                    31214 : "上传文件data失败",
                                    31215 : "上传文件meta失败",
                                    31216 : "下载文件data失败",
                                    31217 : "下载文件meta失败",
                                    31218 : "容量超出限额",
                                    31219 : "请求数超出限额",
                                    31220 : "流量超出限额",
                                    31298 : "服务器返回值KEY非法",
                                    31299 : "服务器返回值KEY不存在"
                                }
                            },
                            ui: {
                                shared_file_title: "[分享的] {0} (只读)",
                                load_share_for_edit: "正在加载分享的文件...",
                                share_sync_success: "分享内容已同步",
                                recycle_clear_confirm: "确认清空回收站么？清空后的文件无法恢复。",
                                fullscreen_exit_hint: "按 Esc 或 F11 退出全屏",
                                error_detail: "详细信息",
                                copy_and_feedback: "复制并反馈",
                                move_file_confirm: '确定把 "{0}" 移动到 "{1}" 吗？',
                                rename: "重命名",
                                rename_success: "{0} 重命名成功",
                                move_success: "{0} 移动成功到 {1}",
                                command: {
                                    appendsiblingnode: "插入同级主题",
                                    appendparentnode: "插入上级主题",
                                    appendchildnode: "插入下级主题",
                                    removenode: "删除",
                                    editnode: "编辑",
                                    arrangeup: "上移",
                                    arrangedown: "下移",
                                    resetlayout: "整理布局",
                                    expandtoleaf: "展开全部节点",
                                    expandtolevel1: "展开到一级节点",
                                    expandtolevel2: "展开到二级节点",
                                    expandtolevel3: "展开到三级节点",
                                    expandtolevel4: "展开到四级节点",
                                    expandtolevel5: "展开到五级节点",
                                    expandtolevel6: "展开到六级节点",
                                    fullscreen: "全屏",
                                    outline: "大纲"
                                },
                                search: "搜索",
                                expandtoleaf: "展开",
                                back: "返回",
                                undo: "撤销 (Ctrl + Z)",
                                redo: "重做 (Ctrl + Y)",
                                tabs: {
                                    idea: "思路",
                                    appearence: "外观",
                                    view: "视图"
                                },
                                quickvisit: {
                                    "new": "新建 (Ctrl + Alt + N)",
                                    save: "保存 (Ctrl + S)",
                                    share: "分享 (Ctrl + Alt + S)",
                                    feedback: "反馈问题（F1）",
                                    editshare: "编辑"
                                },
                                menu: {
                                    mainmenutext: "百度脑图",
                                    newtab: "新建",
                                    opentab: "打开",
                                    savetab: "保存",
                                    sharetab: "分享",
                                    preferencetab: "设置",
                                    helptab: "帮助",
                                    feedbacktab: "反馈",
                                    recenttab: "最近使用",
                                    netdisktab: "百度云存储",
                                    localtab: "本地文件",
                                    drafttab: "草稿箱",
                                    downloadtab: "导出到本地",
                                    createsharetab: "当前脑图",
                                    managesharetab: "已分享",
                                    newheader: "新建脑图",
                                    openheader: "打开",
                                    saveheader: "保存到",
                                    draftheader: "草稿箱",
                                    shareheader: "分享我的脑图",
                                    downloadheader: "导出到指定格式",
                                    preferenceheader: "偏好设置",
                                    helpheader: "帮助",
                                    feedbackheader: "反馈"
                                },
                                mydocument: "我的文档",
                                emptydir: "目录为空！",
                                pickfile: "选择文件...",
                                acceptfile: "支持的格式：{0}",
                                dropfile: "或将文件拖至此处",
                                unsupportedfile: "不支持的文件格式",
                                untitleddoc: "未命名文档",
                                overrideconfirm: "{0} 已存在，确认覆盖吗？",
                                checklogin: "检查登录状态中...",
                                loggingin: "正在登录...",
                                recent: "最近打开",
                                clearrecent: "清空",
                                clearrecentconfirm: "确认清空最近文档列表？",
                                cleardraft: "清空",
                                cleardraftconfirm: "确认清空草稿箱？",
                                none_share: "不分享",
                                public_share: "公开分享",
                                password_share: "私密分享",
                                email_share: "邮件邀请",
                                url_share: "脑图 URL 地址：",
                                sns_share: "社交网络分享：",
                                sns_share_text: "“{0}” - 我用百度脑图制作的思维导图，快看看吧！（地址：{1}）",
                                none_share_description: "不分享当前脑图",
                                public_share_description: "创建任何人可见的分享",
                                share_button_text: "创建",
                                password_share_description: "创建需要密码才可见的分享",
                                email_share_description: "创建指定人可见的分享，您还可以允许他们编辑",
                                ondev: "敬请期待！",
                                create_share_failed: "分享失败：{0}",
                                remove_share_failed: "删除失败：{1}",
                                copy: "复制",
                                copied: "已复制",
                                shared_tip: "当前脑图被 {0}  分享，你可以修改之后保存到自己的网盘上或再次分享",
                                current_share: "当前脑图",
                                manage_share: "我的分享",
                                share_remove_action: "不分享该脑图",
                                share_view_action: "打开分享地址",
                                share_edit_action: "编辑分享的文件",
                                login: "登录",
                                logout: "注销",
                                switchuser: "切换账户",
                                userinfo: "个人信息",
                                gotonetdisk: "我的网盘",
                                requirelogin: '请 <a class="login-button">登录</a> 后使用',
                                saveas: "保存为",
                                filename: "文件名",
                                fileformat: "保存格式",
                                save: "保存",
                                mkdir: "新建目录",
                                recycle: "回收站",
                                newdir: "未命名目录",
                                bold: "加粗",
                                italic: "斜体",
                                forecolor: "字体颜色",
                                fontfamily: "字体",
                                fontsize: "字号",
                                layoutstyle: "主题",
                                node: "节点操作",
                                saveto: "另存为",
                                hand: "允许拖拽",
                                camera: "定位根节点",
                                "zoom-in": "放大（Ctrl+）",
                                "zoom-out": "缩小（Ctrl-）",
                                markers: "标签",
                                resource: "资源",
                                help: "帮助",
                                preference: "偏好设置",
                                expandnode: "展开到叶子",
                                collapsenode: "收起到一级节点",
                                template: "模板",
                                theme: "皮肤",
                                clearstyle: "清除样式",
                                copystyle: "复制样式",
                                pastestyle: "粘贴样式",
                                appendsiblingnode: "同级主题",
                                appendchildnode: "下级主题",
                                arrangeup: "前调",
                                arrangedown: "后调",
                                editnode: "编辑",
                                removenode: "移除",
                                priority: "优先级",
                                progress: {
                                    p1: "未开始",
                                    p2: "完成 1/8",
                                    p3: "完成 1/4",
                                    p4: "完成 3/8",
                                    p5: "完成一半",
                                    p6: "完成 5/8",
                                    p7: "完成 3/4",
                                    p8: "完成 7/8",
                                    p9: "已完成",
                                    p0: "清除进度"
                                },
                                link: "链接",
                                image: "图片",
                                note: "备注",
                                insertlink: "插入链接",
                                insertimage: "插入图片",
                                insertnote: "插入备注",
                                removelink: "移除已有连接",
                                removeimage: "移除已有图片",
                                removenote: "移除已有备注",
                                resetlayout: "整理",
                                justnow: "刚刚",
                                minutesago: "{0} 分钟前",
                                hoursago: "{0} 小时前",
                                yesterday: "昨天",
                                daysago: "{0} 天前",
                                longago: "很久之前",
                                redirect: "您正在打开连接 {0}，百度脑图不能保证连接的安全性，是否要继续？",
                                navigator: "导航器",
                                unsavedcontent: "当前文件还没有保存到网盘：\n\n{0}\n\n虽然未保存的数据会缓存在草稿箱，但是清除浏览器缓存会导致草稿箱清除。",
                                shortcuts: "快捷键",
                                contact: "联系与反馈",
                                email: "邮件组",
                                qq_group: "QQ 群",
                                github_issue: "Github",
                                baidu_tieba: "贴吧",
                                clipboardunsupported: "您的浏览器不支持剪贴板，请使用快捷键复制",
                                load_success: "{0} 加载成功",
                                save_success: "{0} 已保存于 {1}",
                                autosave_success: "{0} 已自动保存于 {1}",
                                selectall: "全选",
                                selectrevert: "反选",
                                selectsiblings: "选择兄弟节点",
                                selectlevel: "选择同级节点",
                                selectpath: "选择路径",
                                selecttree: "选择子树"
                            },
                            popupcolor: {
                                clearColor: "清空颜色",
                                standardColor: "标准颜色",
                                themeColor: "主题颜色"
                            },
                            dialogs: {
                                markers: {
                                    "static": {
                                        lang_input_text: "文本内容：",
                                        lang_input_url: "链接地址：",
                                        lang_input_title: "标题：",
                                        lang_input_target: "是否在新窗口："
                                    },
                                    priority: "优先级",
                                    none: "无",
                                    progress: {
                                        title: "进度",
                                        notdone: "未完成",
                                        done1: "完成 1/8",
                                        done2: "完成 1/4",
                                        done3: "完成 3/8",
                                        done4: "完成 1/2",
                                        done5: "完成 5/8",
                                        done6: "完成 3/4",
                                        done7: "完成 7/8",
                                        done: "已完成"
                                    }
                                },
                                help: {},
                                hyperlink: {},
                                image: {},
                                resource: {}
                            },
                            hyperlink: {
                                hyperlink: "链接...",
                                unhyperlink: "移除链接"
                            },
                            image: {
                                image: "图片...",
                                removeimage: "移除图片"
                            },
                            marker: {
                                marker: "进度/优先级..."
                            },
                            resource: {
                                resource: "资源..."
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
                                            return "导入节点"
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
                                                return "导出节点"
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
                        if (void 0 == b[e]) return "未发现对应语言包，请检查 lang.xxx.service.js!";
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
                                    d.execCommand(a, "分支主题"),
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
                                    name: "宋体",
                                    val: "宋体,SimSun"
                                },
                                    {
                                        name: "微软雅黑",
                                        val: "微软雅黑,Microsoft YaHei"
                                    },
                                    {
                                        name: "楷体",
                                        val: "楷体,楷体_GB2312,SimKai"
                                    },
                                    {
                                        name: "黑体",
                                        val: "黑体, SimHei"
                                    },
                                    {
                                        name: "隶书",
                                        val: "隶书, SimLi"
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
                                                    window.localStorage.__dev_minder_content = JSON.stringify(e.minder.exportJsondata())
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
                                            return "移除优先级";
                                        default:
                                            return "优先级" + a
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
                                            return "移除进度";
                                        case 1:
                                            return "未开始";
                                        case 9:
                                            return "全部完成";
                                        default:
                                            return "完成" + (a - 1) + "/8"
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
