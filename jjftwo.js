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
                            kjdata='{"root":{"data":{"id":"cp958zn5bw00","created":1671793256768,"text":"初级会计经济法思维导图","expandState":"expand"},"children":[{"data":{"id":"cp9590vbt5s0","created":1671793259440,"text":"第二章会计法律制度","expandState":"expand"},"children":[{"data":{"id":"cp9590vcerc0","created":1671793259441,"text":"第一节会计法律制度的概述★","expandState":"expand"},"children":[{"data":{"id":"cp9590vcktc0","created":1671793259441,"text":"会计法律制度","expandState":"collapse"},"children":[{"data":{"id":"cp9590vcesw0","created":1671793259441,"text":"1、 会计法律制度是指国家权力机关和行政机关制定的\\n关于会计工作的法律、法规、规章和,规范性文件的总称\\n，简称会计法规。"},"children":[]},{"data":{"id":"cp9590vcd200","created":1671793259441,"text":"2、 会计法律制度是调整会计关系的法律规范。"},"children":[]},{"data":{"id":"cp9590vcm880","created":1671793259441,"text":"3、 会计关系是指会计机构和会计人员在办理会计事务\\n过程中，以及国家在管理会计工作过程中发生的经济关系\\n。"},"children":[]},{"data":{"id":"cp9590vd4ps0","created":1671793259442,"text":"4、 会计关系的主体为会计机构和会计人员，客体为与\\n会计工作相关的具体事务"},"children":[]}]},{"data":{"id":"cp9590vd3rk0","created":1671793259442,"text":"会计法律制度使用的范围","expandState":"collapse"},"children":[{"data":{"id":"cp9590vda5c0","created":1671793259442,"text":"国家机关、社会团体、公司、企业、事业单位和其他组织"},"children":[]}]},{"data":{"id":"cp9590vczrs0","created":1671793259442,"text":"会计工作管理体制","expandState":"collapse"},"children":[{"data":{"id":"cp9590vd1tk0","created":1671793259442,"text":"会计工作的行政管理","expandState":"collapse"},"children":[{"data":{"id":"cp9590vcy680","created":1671793259442,"text":"国务院财政部主管全国的会计工作"},"children":[]},{"data":{"id":"cp9590vdnsw0","created":1671793259443,"text":"县级以上地方分级人民政府财政部门管理本行政区域内的会计工作"},"children":[]}]},{"data":{"id":"cp9590vdkts0","created":1671793259443,"text":"单位内部的会计管理","expandState":"collapse"},"children":[{"data":{"id":"cp9590vdpt40","created":1671793259443,"text":"单位负责人"},"children":[{"data":{"id":"cp9590vdss00","created":1671793259443,"text":"单位法定代表人"},"children":[]},{"data":{"id":"cp9590vdtr40","created":1671793259443,"text":"法律、行政法规规定代表单位行使职权的主要负责人"},"children":[]}]},{"data":{"id":"cp9590ve09s0","created":1671793259443,"text":"负责内容"},"children":[{"data":{"id":"cp9590vdzig0","created":1671793259443,"text":"对本单位的会计工作和会计资料的真实性、完整性负责"},"children":[]},{"data":{"id":"cp9590vdye80","created":1671793259443,"text":"应当保证会计机构、会计人员依法履行职责、不得授意、\\n指使、强令会计机构、会计人员违法办理会计事项"},"children":[]},{"data":{"id":"cp9590vdlr40","created":1671793259443,"text":"不需要单位负责人亲力亲为"},"children":[]}]}]}]}]},{"data":{"id":"cp9590vedkw0","created":1671793259444,"text":"第二节会计核算与监督★★","expandState":"expand"},"children":[{"data":{"id":"cp9590vehxc0","created":1671793259444,"text":"会计核算","expandState":"collapse"},"children":[{"data":{"id":"cp9590veg6w0","created":1671793259444,"text":"会计核算基本要求","expandState":"collapse"},"children":[{"data":{"id":"cp9590veac80","created":1671793259444,"text":"1、依法建账"},"children":[]},{"data":{"id":"cp9590vep9s0","created":1671793259444,"text":"2、根据实际业务核算"},"children":[]},{"data":{"id":"cp9590vee140","created":1671793259444,"text":"3、保证会计资料的真实和完整"},"children":[]},{"data":{"id":"cp9590veejs0","created":1671793259444,"text":"4、正确采用会计处理方法"},"children":[{"data":{"id":"cp9590velpc0","created":1671793259444,"text":"各单位采用的会计处理方法，前后各期应当一致’，不得\\n随意变更。确有必要变更的，应当按照国家统一的会计制\\n度的规定变更，并将变更的原因、情况及影响在财务会计\\n报告中说明。"},"children":[]}]},{"data":{"id":"cp9590vecs00","created":1671793259444,"text":"5、正确使用会计处理文字"},"children":[]},{"data":{"id":"cp9590vf5rc0","created":1671793259445,"text":"6、适用计算机核算必须合法。"},"children":[]}]},{"data":{"id":"cp9590veug00","created":1671793259445,"text":"会计核算的内容","expandState":"collapse"},"children":[{"data":{"id":"cp9590vf8880","created":1671793259445,"text":"1、 款项和有价证券的收付"},"children":[]},{"data":{"id":"cp9590vet3c0","created":1671793259445,"text":"2、 财物的收发、增减和使用。"},"children":[]},{"data":{"id":"cp9590vezhs0","created":1671793259445,"text":"3、 债权债务的发生和结算"},"children":[]},{"data":{"id":"cp9590vessg0","created":1671793259445,"text":"4、 资本，基金的增减"},"children":[]},{"data":{"id":"cp9590veqts0","created":1671793259445,"text":"5、 收入、费用、成本的计算"},"children":[]},{"data":{"id":"cp9590vf4kw0","created":1671793259445,"text":"6、 财务成果的计算和处理"},"children":[]}]},{"data":{"id":"cp9590vf1y00","created":1671793259445,"text":"会计年度","expandState":"collapse"},"children":[{"data":{"id":"cp9590veugw0","created":1671793259445,"text":"阳历1.1-12.31"},"children":[]}]},{"data":{"id":"cp9590vfunk0","created":1671793259446,"text":"记账本位币","expandState":"collapse"},"children":[{"data":{"id":"cp9590vfnxc0","created":1671793259446,"text":"1、 会计核算以人民币为记账本位币"},"children":[]},{"data":{"id":"cp9590vfp9s0","created":1671793259446,"text":"2、 业务收支以人民币以外的货币为主的单位，可以选\\n定其中一种货币作为记账本位币，但是 编造的财物会计\\n报告 应当折算为人民币"},"children":[]}]},{"data":{"id":"cp9590vfrao0","created":1671793259446,"text":"会计凭证和会计账簿","expandState":"collapse"},"children":[{"data":{"id":"cp9590vfrw00","created":1671793259446,"text":"会计凭证"},"children":[{"data":{"id":"cp9590vfplc0","created":1671793259446,"text":"详见实务第一章思维导图"},"children":[]}]},{"data":{"id":"cp9590vfod40","created":1671793259446,"text":"会计账簿"},"children":[{"data":{"id":"cp9590vfirc0","created":1671793259446,"text":"详见实务第一章思维导图"},"children":[]}]}]},{"data":{"id":"cp9590vfw2w0","created":1671793259446,"text":"财务会计报告","expandState":"collapse"},"children":[{"data":{"id":"cp9590vfu000","created":1671793259446,"text":"构成"},"children":[{"data":{"id":"cp9590vg8ao0","created":1671793259447,"text":"按编制时间分为年度、半年度、季度和月季财务会计报表"},"children":[{"data":{"id":"cp9590vg1zk0","created":1671793259447,"text":"年度报告包括资产负债表，利润表、现金流量表以及相关\\n附表，还包括会计报表附注和财务情况说明书（四表一注\\n一说明）"},"children":[]},{"data":{"id":"cp9590vg1e80","created":1671793259447,"text":"季度、月度财务会计报告可以只报送 资产负债表和利润表"},"children":[]}]}]},{"data":{"id":"cp9590vg8ds0","created":1671793259447,"text":"对外提供"},"children":[{"data":{"id":"cp9590vfxy00","created":1671793259447,"text":"国有企业、国有控股的或者站主导地位的企业，应当至少\\n每年一次向本企业的职工代表大会公布财务会计报告"},"children":[{"data":{"id":"cp9590vfywg0","created":1671793259447,"text":"反映与职工利益密切相关的信息："},"children":[]},{"data":{"id":"cp9590vg6000","created":1671793259447,"text":"内部审计发现的问题及纠正情况："},"children":[]},{"data":{"id":"cp9590vgh940","created":1671793259447,"text":"注册会计师审计的情况："},"children":[]},{"data":{"id":"cp9590vg99c0","created":1671793259447,"text":"国家审计机关发现的问题及纠正情况："},"children":[]},{"data":{"id":"cp9590vgcmw0","created":1671793259447,"text":"重大的投资、融资和资产处置决策及其原因"},"children":[]},{"data":{"id":"cp9590vgn600","created":1671793259448,"text":"需要说明的其他事项"},"children":[]}]}]},{"data":{"id":"cp9590vgp8o0","created":1671793259448,"text":"签章"},"children":[{"data":{"id":"cp9590vgypk0","created":1671793259448,"text":"由企业负责人+主管会计工作的负责人+会计机构负责人签名并盖章等"},"children":[{"data":{"id":"cp9590vgiw00","created":1671793259448,"text":"设置总会计师的企业，还应该有总会计师签名并盖章"},"children":[]}]}]},{"data":{"id":"cp9590vgwao0","created":1671793259448,"text":"审计报告"},"children":[{"data":{"id":"cp9590vgsco0","created":1671793259448,"text":"财务会计报告需经CPA审计的。企业应当将审计报告随\\n同财务会计报告一并对外提供"},"children":[]}]},{"data":{"id":"cp9590vh3600","created":1671793259448,"text":"保密义务"},"children":[{"data":{"id":"cp9590vh2rs0","created":1671793259448,"text":"接受企业此物会计报告的组织或者个人，在企业此物会计\\n报告未正式对外披露前，应当对其内容保密"},"children":[]}]}]},{"data":{"id":"cp9590vh3jk0","created":1671793259448,"text":"财务核对及财产清查","expandState":"collapse"},"children":[{"data":{"id":"cp9590vgnz40","created":1671793259448,"text":"账实核对"},"children":[]},{"data":{"id":"cp9590vhdpk0","created":1671793259449,"text":"账证核对"},"children":[]},{"data":{"id":"cp9590vhd9c0","created":1671793259449,"text":"账账核对"},"children":[]},{"data":{"id":"cp9590vho480","created":1671793259449,"text":"账表核对"},"children":[]}]}]},{"data":{"id":"cp9590vhg9k0","created":1671793259449,"text":"会计档案管理★★★","expandState":"collapse"},"children":[{"data":{"id":"cp9590vhlzk0","created":1671793259449,"text":"概念","expandState":"collapse"},"children":[{"data":{"id":"cp9590vhits0","created":1671793259449,"text":"电子会计档案属于会计档案"},"children":[]},{"data":{"id":"cp9590vhjz40","created":1671793259449,"text":"各单位的 财务预算、计划、制度等文件材料 属于文书\\n档案，不属于会计档案"},"children":[]}]},{"data":{"id":"cp9590vhhf40","created":1671793259449,"text":"归档","expandState":"collapse"},"children":[{"data":{"id":"cp9590vhcqg0","created":1671793259449,"text":"范围"},"children":[{"data":{"id":"cp9590vhwy00","created":1671793259450,"text":"1、 会计凭证类：原始凭证、记记账凭证"},"children":[]},{"data":{"id":"cp9590vi3bk0","created":1671793259450,"text":"2、 会计账簿类：总账、明细账、日记账、固定资产卡片、其他辅助类账簿"},"children":[]},{"data":{"id":"cp9590vi0vs0","created":1671793259450,"text":"3、 财务会计报告类：月度、季度、半年度、年度会计报告"},"children":[]},{"data":{"id":"cp9590vhyao0","created":1671793259450,"text":"4、 其他类：银行存款余额调节表、银行对账单、纳税\\n申报表、会计档案移交清册、会计档案保管清册、会计档\\n案销毁清册、会计档案签订意见书及其他具有保存价值的\\n会计资料"},"children":[]},{"data":{"id":"cp9590vhqz40","created":1671793259450,"text":"电子会计档案"},"children":[{"data":{"id":"cp9590vi3u80","created":1671793259450,"text":"来源"},"children":[{"data":{"id":"cp9590vhw880","created":1671793259450,"text":"单位内部形成的、属于归档范围的电子会计资料"},"children":[]},{"data":{"id":"cp9590vi1u80","created":1671793259450,"text":"单位从外部接收的电子会计资料"},"children":[]}]}]}]},{"data":{"id":"cp9590vitag0","created":1671793259451,"text":"要求"},"children":[{"data":{"id":"cp9590vig5c0","created":1671793259451,"text":"定期将应归档的会计资料整理立卷，编制会计档案保管清册"},"children":[]},{"data":{"id":"cp9590vihuw0","created":1671793259451,"text":"当年形成的会计档案，在会计年度终了后，可由单位会计\\n管理机构练市保管一年，再移交单位档案管理机构保管"},"children":[]},{"data":{"id":"cp9590vid4w0","created":1671793259451,"text":"电子档案要求"},"children":[{"data":{"id":"cp9590viw4g0","created":1671793259451,"text":"1、 来源真实，由电子设备形成和传输"},"children":[]},{"data":{"id":"cp9590viw800","created":1671793259451,"text":"2、 电算化系统完善，能够接受，读取，输出符合规定\\n的会计资料，设定了经办、审核、审批等必要的审签程序"},"children":[]},{"data":{"id":"cp9590virtk0","created":1671793259451,"text":"3、 电子档案管理系统完善，够接受、管理、利用电子\\n会计档案，符合长期保管要求，与相关联的纸质会计档案\\n建立检索关系"},"children":[]},{"data":{"id":"cp9590vimhs0","created":1671793259451,"text":"4、 能防止篡改"},"children":[]},{"data":{"id":"cp9590vit2g0","created":1671793259451,"text":"5、 已经备份"},"children":[]},{"data":{"id":"cp9590vj2740","created":1671793259452,"text":"6、 非需永久保存或有重要价值的会计档案"},"children":[]}]}]},{"data":{"id":"cp9590vjboo0","created":1671793259452,"text":"归档责任人"},"children":[{"data":{"id":"cp9590vjf4w0","created":1671793259452,"text":"会计机构或会计人员所属机构"},"children":[]}]},{"data":{"id":"cp9590viyeg0","created":1671793259452,"text":"归档时间"},"children":[{"data":{"id":"cp9590vjguw0","created":1671793259452,"text":"会计年度终了后。可由单位会计管理机构临时保管1年（\\n最长3年），再移交档案管理机构保管"},"children":[{"data":{"id":"cp9590vje280","created":1671793259452,"text":"出纳人员不得监管会计档案"},"children":[]}]}]},{"data":{"id":"cp9590vj1o00","created":1671793259453,"text":"移交与接收"},"children":[{"data":{"id":"cp9590vjysw0","created":1671793259453,"text":"由会计机构编制移交清册"},"children":[]},{"data":{"id":"cp9590vju3k0","created":1671793259453,"text":"档案机构对电子会计档案的准确性、完整性、可用性、安\\n全性进行检测，符合要求的才能接收"},"children":[]}]},{"data":{"id":"cp9590vjkjs0","created":1671793259453,"text":"外借"},"children":[{"data":{"id":"cp9590vju5c0","created":1671793259453,"text":"会计档案一般不得对外借用，确因工作需要且根据国家有\\n关规定必须借出的，应当严格按规定办理手续"},"children":[]},{"data":{"id":"cp9590vjqhs0","created":1671793259453,"text":"借用单位应妥善报挂和利用介入的会计档案，确保介入会\\n计档案的安全、完整，并在规定时间内归还"},"children":[]}]}]},{"data":{"id":"cp9590vjrag0","created":1671793259453,"text":"最低保管期限","expandState":"collapse"},"children":[{"data":{"id":"cp9590vjmx40","created":1671793259453,"text":"永久"},"children":[{"data":{"id":"cp9590vk0ds0","created":1671793259453,"text":"年度财务报告、会计档案保管清册、会计档案销毁清册、\\n会计档案鉴定意见书"},"children":[{"data":{"id":"cp9590vkoj40","created":1671793259454,"text":"会计档案销毁清册、会计档案鉴定意见书"},"children":[]}]}]},{"data":{"id":"cp9590vkjqw0","created":1671793259454,"text":"30年"},"children":[{"data":{"id":"cp9590vkl9k0","created":1671793259454,"text":"凭证‘账簿、会计档案移交清册"},"children":[]},{"data":{"id":"cp9590vkbc80","created":1671793259454,"text":"提示：凭证账簿移交30年’"},"children":[]}]},{"data":{"id":"cp9590vk66o0","created":1671793259454,"text":"10年"},"children":[{"data":{"id":"cp9590vk7fk0","created":1671793259454,"text":"其他财务报告，调节表，对账单，纳税申报表"},"children":[]},{"data":{"id":"cp9590vk41s0","created":1671793259454,"text":"固定资产卡片较特殊，固定资产报废清理后保管5年"},"children":[]}]}]},{"data":{"id":"cp9590vka000","created":1671793259454,"text":"鉴定和销毁","expandState":"collapse"},"children":[{"data":{"id":"cp9590vkgf40","created":1671793259454,"text":"鉴定机构"},"children":[{"data":{"id":"cp9590vl2r40","created":1671793259455,"text":"档案机构牵头+会计、审计、纪检监督等机构或人员共同\\n审查鉴定，并形成会计档案鉴定意见书"},"children":[]}]},{"data":{"id":"cp9590vkphs0","created":1671793259455,"text":"鉴定"},"children":[{"data":{"id":"cp9590vl6jk0","created":1671793259455,"text":"定期对已到保暖期限的会计档案进行鉴定，并形成会计档案鉴定意见书"},"children":[]},{"data":{"id":"cp9590vl81k0","created":1671793259455,"text":"经鉴定，扔需继续保存的会计档案，应重新规定保管期限"},"children":[]},{"data":{"id":"cp9590vkrts0","created":1671793259455,"text":"经鉴定，保暖汽贸，确无保存价值的会计档案，可以销毁"},"children":[]}]},{"data":{"id":"cp9590vl1wg0","created":1671793259455,"text":"不得销毁"},"children":[{"data":{"id":"cp9590vkur40","created":1671793259455,"text":"保管期满 未结清的债权债务 原始凭证"},"children":[]},{"data":{"id":"cp9590vl6h40","created":1671793259455,"text":"涉及其他未了事项的原始凭证"},"children":[]},{"data":{"id":"cp9590vll9s0","created":1671793259456,"text":"建设单位在项目建设期间形成的会计档案"},"children":[]}]},{"data":{"id":"cp9590vls480","created":1671793259456,"text":"销毁程序"},"children":[{"data":{"id":"cp9590vltuo0","created":1671793259456,"text":"编制销售清册：单位档案管理机构。"},"children":[]},{"data":{"id":"cp9590vllr40","created":1671793259456,"text":"签署意见：5个人（单位负责人+档案管理和会计管理机\\n构负责人+档案管理和会计管理机构经办人）"},"children":[]},{"data":{"id":"cp9590vlszs0","created":1671793259456,"text":"核对、签章（监销人）纸质：2人 单位档案管理机构+会计管理机构"},"children":[]},{"data":{"id":"cp9590vljlk0","created":1671793259456,"text":"电子：3人 单位档案管理机构+会计管理机构+信息系统管理机构"},"children":[]},{"data":{"id":"cp9590vlrdk0","created":1671793259456,"text":"销毁后：监销人在会计档案销毁清册上 签名或盖章"},"children":[]}]}]}]},{"data":{"id":"cp9590vllog0","created":1671793259456,"text":"会计监督","expandState":"collapse"},"children":[{"data":{"id":"cp9590vlszs0","created":1671793259456,"text":"单位内部监督","expandState":"collapse"},"children":[{"data":{"id":"cp9590vmgio0","created":1671793259457,"text":"单位内部监督概念"},"children":[{"data":{"id":"cp9590vm1io0","created":1671793259457,"text":"监督主体：会计机构，会计人员"},"children":[]},{"data":{"id":"cp9590vm0i80","created":1671793259457,"text":"监督对象：单位的经济活动"},"children":[]}]},{"data":{"id":"cp9590vm6zk0","created":1671793259457,"text":"单位内部会计监督的要求"},"children":[{"data":{"id":"cp9590vmbts0","created":1671793259457,"text":"对违反《会计法》和国家统一的会计制度规定的会计事项\\n，有权拒绝办理或者按照职权予以纠正"},"children":[]},{"data":{"id":"cp9590vm20g0","created":1671793259457,"text":"发现会计账簿记录与实物、款项及有关资料不相符的，按\\n照国家统一的会计制度的规定有权自行处理的，应当及时\\n处理：无权处理的，应当立即向单位负责人报告，请求查\\n明原因，作出处理。"},"children":[]},{"data":{"id":"cp9590vme1s0","created":1671793259457,"text":"会计权限：账实调整相符（账簿记录与实物、款项调整）"},"children":[]},{"data":{"id":"cp9590vm3p40","created":1671793259457,"text":"单位负责人应当保证会计机构、会计人员依法履行职责，\\n不得授意、指使、强令会计人员违法班里会计事项"},"children":[]}]},{"data":{"id":"cp9590vlvmo0","created":1671793259457,"text":"单位内部控制制度"},"children":[{"data":{"id":"cp9590vmh340","created":1671793259458,"text":"原则"},"children":[{"data":{"id":"cp9590vn1b40","created":1671793259458,"text":"一般单位"},"children":[{"data":{"id":"cp9590vn1oo0","created":1671793259458,"text":"适应性+成本效益+全面性（全过程控制+全员控制）+\\n重要性（重要业务事项-高风险领域）+制衡性"},"children":[]}]},{"data":{"id":"cp9590vmsvc0","created":1671793259458,"text":"小企业"},"children":[{"data":{"id":"cp9590vmle80","created":1671793259458,"text":"适应性+成本效益+实质重于形式+风险导向"},"children":[]}]}]},{"data":{"id":"cp9590vn08w0","created":1671793259458,"text":"措施"},"children":[{"data":{"id":"cp9590vmr200","created":1671793259458,"text":"企业"},"children":[{"data":{"id":"cp9590vmk8g0","created":1671793259458,"text":"不相容职务分离控制"},"children":[]},{"data":{"id":"cp9590vnh5k0","created":1671793259459,"text":"授权审批控制"},"children":[]},{"data":{"id":"cp9590vn7k80","created":1671793259459,"text":"会计系统控制"},"children":[]},{"data":{"id":"cp9590vnh0g0","created":1671793259459,"text":"财产保护控制"},"children":[]},{"data":{"id":"cp9590vn6qw0","created":1671793259459,"text":"预算控制"},"children":[]},{"data":{"id":"cp9590vnnkg0","created":1671793259459,"text":"运营分析控制"},"children":[]},{"data":{"id":"cp9590vn7co0","created":1671793259459,"text":"绩效考评控制"},"children":[]}]},{"data":{"id":"cp9590vn2nc0","created":1671793259459,"text":"行政事业单位"},"children":[{"data":{"id":"cp9590vne400","created":1671793259459,"text":"不相容职务分离控制"},"children":[]},{"data":{"id":"cp9590vnrvk0","created":1671793259460,"text":"内部授权审批控制"},"children":[]},{"data":{"id":"cp9590vo3jk0","created":1671793259460,"text":"会计控制"},"children":[]},{"data":{"id":"cp9590vnym00","created":1671793259460,"text":"财产保护控制"},"children":[]},{"data":{"id":"cp9590vo6ww0","created":1671793259460,"text":"预算控制"},"children":[]},{"data":{"id":"cp9590vo4f40","created":1671793259460,"text":"归口管理"},"children":[]},{"data":{"id":"cp9590vo4m80","created":1671793259460,"text":"单据控制"},"children":[]},{"data":{"id":"cp9590vo2nc0","created":1671793259460,"text":"信息内部公开"},"children":[]}]}]}]}]},{"data":{"id":"cp9590vo4r40","created":1671793259460,"text":"政府监督","expandState":"collapse"},"children":[{"data":{"id":"cp9590vomv40","created":1671793259461,"text":"监督主体"},"children":[{"data":{"id":"cp9590voo6w0","created":1671793259461,"text":"财政部门是会计工作政府监督的主体"},"children":[]},{"data":{"id":"cp9590voc080","created":1671793259461,"text":"政府其他部门 审计、税务、人民银行、证券监管、保险\\n监管 对特定的单位监督会计资料的真实性"},"children":[]}]},{"data":{"id":"cp9590voe880","created":1671793259461,"text":"财政部门监督内容"},"children":[{"data":{"id":"cp9590voc4o0","created":1671793259461,"text":"内容"},"children":[{"data":{"id":"cp9590vof0g0","created":1671793259461,"text":"是否依法设置会计账簿"},"children":[]},{"data":{"id":"cp9590vobo80","created":1671793259461,"text":"会计资料是否真实、完整’"},"children":[]},{"data":{"id":"cp9590vo9d40","created":1671793259461,"text":"会计核算是否符合《会计法》和国家统一的会计制度的规定"},"children":[]},{"data":{"id":"cp9590voc5s0","created":1671793259461,"text":"从事会计工作的人员是否具备专业能力，遵守职业道德"},"children":[]}]},{"data":{"id":"cp9590vp4og0","created":1671793259462,"text":"查询权"},"children":[]},{"data":{"id":"cp9590vp8c00","created":1671793259462,"text":"保密义务"},"children":[]}]}]},{"data":{"id":"cp9590vpf340","created":1671793259462,"text":"社会监督","expandState":"collapse"},"children":[{"data":{"id":"cp9590vovxs0","created":1671793259462,"text":"监督主体"},"children":[{"data":{"id":"cp9590vp1w80","created":1671793259462,"text":"注册会计师及其所在的会计事务所"},"children":[]},{"data":{"id":"cp9590vpe9s0","created":1671793259462,"text":"任何单位和个人对违反《会计法》和国际统一的会计制度\\n规定的行为，由检举权。"},"children":[]}]},{"data":{"id":"cp9590vp2p40","created":1671793259462,"text":"注册会计师审计报告"},"children":[{"data":{"id":"cp9590vpbtc0","created":1671793259462,"text":"概念和要素"},"children":[{"data":{"id":"cp9590vpj3s0","created":1671793259463,"text":"①标题"},"children":[]},{"data":{"id":"cp9590vpyvc0","created":1671793259463,"text":"②收件人"},"children":[]},{"data":{"id":"cp9590vph7s0","created":1671793259463,"text":"③引言段"},"children":[]},{"data":{"id":"cp9590vpom00","created":1671793259463,"text":"④管理层对财务报表的责任段"},"children":[]},{"data":{"id":"cp9590vpvn40","created":1671793259463,"text":"⑤注册会计师的责任段"},"children":[]},{"data":{"id":"cp9590vpksw0","created":1671793259463,"text":"⑥审计意见段"},"children":[]},{"data":{"id":"cp9590vprvk0","created":1671793259463,"text":"⑦注册会计师的签名和盖章"},"children":[]},{"data":{"id":"cp9590vpg4g0","created":1671793259463,"text":"⑧会计事务所的名称、地址和盖章"},"children":[]},{"data":{"id":"cp9590vps8o0","created":1671793259463,"text":"⑨报告日期"},"children":[]}]},{"data":{"id":"cp9590vqc8g0","created":1671793259464,"text":"审计报告的种类和审计意见的类型"},"children":[{"data":{"id":"cp9590vq8kg0","created":1671793259464,"text":"审计报告"},"children":[{"data":{"id":"cp9590vq3ts0","created":1671793259464,"text":"标准审计报告"},"children":[{"data":{"id":"cp9590vq9js0","created":1671793259464,"text":"不含有 说明段、强调事项段、其他事项的或者其他任何\\n修饰性用语 的无保留意见的审计报告"},"children":[]},{"data":{"id":"cp9590vqdu00","created":1671793259464,"text":"包含 其他报告责任段 ，但不含有强调事项段或其他事\\n项段的无保留意见的审计报告也被视为标准审计报告"},"children":[]}]},{"data":{"id":"cp9590vq5oo0","created":1671793259464,"text":"非标准审计报告"},"children":[{"data":{"id":"cp9590vq2q00","created":1671793259464,"text":"无保留意见的审计报告"},"children":[{"data":{"id":"cp9590vq1yo0","created":1671793259464,"text":"带 强调事项段 或者 其他事项段"},"children":[]}]},{"data":{"id":"cp9590vq2sg0","created":1671793259464,"text":"非无保留意见的审计报告"},"children":[{"data":{"id":"cp9590vr0u80","created":1671793259465,"text":"保留意见"},"children":[]},{"data":{"id":"cp9590vr1l40","created":1671793259465,"text":"否定意见"},"children":[]},{"data":{"id":"cp9590vqps00","created":1671793259465,"text":"无法表示意见"},"children":[]}]}]}]},{"data":{"id":"cp9590vr3000","created":1671793259465,"text":"审计意见"},"children":[{"data":{"id":"cp9590vqpeg0","created":1671793259465,"text":"无保留意见"},"children":[{"data":{"id":"cp9590vqoeo0","created":1671793259465,"text":"财务报表在所有重大方面按照适用的财务报告编制基础编制并实现公允反映"},"children":[]}]},{"data":{"id":"cp9590vqyb40","created":1671793259465,"text":"非无保留意见"},"children":[{"data":{"id":"cp9590vr68w0","created":1671793259465,"text":"无法表示意见"},"children":[{"data":{"id":"cp9590vrqvc0","created":1671793259466,"text":"无法获取充分、适当的审计证据以作为形成审计意见的基\\n础，但任务未发现的错误对财务报表可能产生的影响 重\\n大且广泛"},"children":[]}]},{"data":{"id":"cp9590vrcf40","created":1671793259466,"text":"否定意见"},"children":[{"data":{"id":"cp9590vri080","created":1671793259466,"text":"在获取充分、适当的审计证据后，认为错报单独或着汇总\\n起来对财务报表的影响 重大且广泛"},"children":[]}]},{"data":{"id":"cp9590vs3f40","created":1671793259467,"text":"保留意见"},"children":[{"data":{"id":"cp9590vsakw0","created":1671793259467,"text":"在获取充分、适当的审计证据后，认为错报单独或汇总起\\n来对财务报表影响 重大 ，但 不具有广泛性"},"children":[]},{"data":{"id":"cp9590vse000","created":1671793259467,"text":"无法获取充分、适当的审计证据以作为形成审计意见的基\\n础，但认为未发现的错报对财务报表可能产生的影响 重\\n大 ，但 不具有广泛性"},"children":[]}]}]}]}]}]}]}]}]},{"data":{"id":"cp9590vsd400","created":1671793259467,"text":"第三节会计机构和会计人员★★","expandState":"expand"},"children":[{"data":{"id":"cp9590vso6o0","created":1671793259468,"text":"会计机构","expandState":"collapse"},"children":[{"data":{"id":"cp9590vsiz40","created":1671793259468,"text":"根据《会计法》的规定，各单位应当根据会计业务的 需要，设置会计机构"},"children":[]},{"data":{"id":"cp9590vsgvs0","created":1671793259468,"text":"不具备设置条件，应当委托经批准的会计代理记账业务的\\n中介机构代理记账。"},"children":[]}]},{"data":{"id":"cp9590vsxy80","created":1671793259468,"text":"代理记账","expandState":"collapse"},"children":[{"data":{"id":"cp9590vsgww0","created":1671793259468,"text":"代理记账机构","expandState":"collapse"},"children":[{"data":{"id":"cp9590vsp2o0","created":1671793259468,"text":"会计事务所及其分所"},"children":[]},{"data":{"id":"cp9590vsn000","created":1671793259468,"text":"其他机构：需要代理记账许可证书（应当经县级以上财政部门批准）"},"children":[{"data":{"id":"cp9590vshhk0","created":1671793259468,"text":"除会计事务所以外 的机构从事代理记账业务，应当经 \\n县级 以上人民政府财政部门批准并领取由财政部统一规\\n定样式的代理记账许可证书 本资料唯一购买渠道微信号\\n:carrot8375"},"children":[]},{"data":{"id":"cp9590vt0m00","created":1671793259468,"text":"代理记账许可证书由 各地财政部门 根据财政规定的统一样式自行印刷"},"children":[]}]}]},{"data":{"id":"cp9590vt6sw0","created":1671793259469,"text":"代理记账机构及其人员义务","expandState":"collapse"},"children":[{"data":{"id":"cp9590vt1uo0","created":1671793259469,"text":"委托方"},"children":[{"data":{"id":"cp9590vtfqo0","created":1671793259469,"text":"1、 填制或取得 符合国家统一的会计制度规定的原始凭证"},"children":[]},{"data":{"id":"cp9590vt8bs0","created":1671793259469,"text":"2、配备专人负责 日常 货币收支和保管"},"children":[]},{"data":{"id":"cp9590vt19c0","created":1671793259469,"text":"3、及时向代理记账机构提供真实、完整的 原始凭证 和其他相关资料"},"children":[]},{"data":{"id":"cp9590vta2g0","created":1671793259469,"text":"4、对于代理记账机构退回，要求按规定 更正、补充 \\n的原始凭证、应当及时予以处理"},"children":[]}]},{"data":{"id":"cp9590vteps0","created":1671793259469,"text":"受托方"},"children":[{"data":{"id":"cp9590vtfww0","created":1671793259469,"text":"1、遵守法规，按委托合同办理业务"},"children":[]},{"data":{"id":"cp9590vtc140","created":1671793259469,"text":"2、对在执行业务中知悉的商业秘密予以保密"},"children":[]},{"data":{"id":"cp9590vtwfk0","created":1671793259470,"text":"3、对委托人要求作出不当的会计处理，提供不是的会计\\n资料等非法要求，予以拒绝"},"children":[]},{"data":{"id":"cp9590vtmg80","created":1671793259470,"text":"4、对委托人提出的有关会计处理相关问题予以解释"},"children":[]}]},{"data":{"id":"cp9590vu6hs0","created":1671793259470,"text":"共同"},"children":[{"data":{"id":"cp9590vtojs0","created":1671793259470,"text":"1、双方对会计资料真实性、完整性各自承担的责任"},"children":[]},{"data":{"id":"cp9590vtu9k0","created":1671793259470,"text":"2、会计资料传递程序和签收手续"},"children":[]},{"data":{"id":"cp9590vu0i80","created":1671793259470,"text":"3、编制和提供财务会计报告的要求"},"children":[]},{"data":{"id":"cp9590vtwbs0","created":1671793259470,"text":"4、会计档案的保管要求及相应的责任"},"children":[]},{"data":{"id":"cp9590vtzf40","created":1671793259470,"text":"5、终止委托合同应当办理的会计交接事宜"},"children":[]}]}]},{"data":{"id":"cp9590vts280","created":1671793259470,"text":"业务范围","expandState":"collapse"},"children":[{"data":{"id":"cp9590vunjc0","created":1671793259471,"text":"1、根据委托人提供的原始凭证和其他资料，按照国家统\\n一的会计制度的规定进行会计核算，包括审核原始凭证、\\n填制记账凭证、登记会计账簿、编制财务会计报告等。"},"children":[]},{"data":{"id":"cp9590vua880","created":1671793259471,"text":"2、对外提供财务会计报告"},"children":[{"data":{"id":"cp9590vujco0","created":1671793259471,"text":"注意：由 代理记账机构负责人 和 委托人负责人 2个人签名并盖章"},"children":[{"data":{"id":"cp9590vum200","created":1671793259471,"text":"对外报送财务会计报告由相关人员 签名或者盖章 调整为 签名并盖章 (2021)"},"children":[]}]}]},{"data":{"id":"cp9590vuq2o0","created":1671793259471,"text":"3、向税务机关提供税务资料"},"children":[]},{"data":{"id":"cp9590vubrs0","created":1671793259471,"text":"4、委托人委托的其他会计业务"},"children":[]}]},{"data":{"id":"cp9590vus680","created":1671793259471,"text":"任职资格","expandState":"collapse"},"children":[{"data":{"id":"cp9590vubrc0","created":1671793259471,"text":"担任单位会计机构负责人(会计主管人员):坚持原则廉\\n洁奉公、会计师以上职称或从事会计工作3年以上、熟悉\\n法律法规、较强组织能力、身体状况适应本职工作。"},"children":[]}]}]},{"data":{"id":"cp9590vuha80","created":1671793259471,"text":"会计岗位的设置","expandState":"collapse"},"children":[{"data":{"id":"cp9590vu7xc0","created":1671793259471,"text":"会计工作岗位设置要求","expandState":"collapse"},"children":[{"data":{"id":"cp9590vv3xs0","created":1671793259472,"text":"1、一人一岗"},"children":[]},{"data":{"id":"cp9590vuw2o0","created":1671793259472,"text":"2、一人多岗"},"children":[]},{"data":{"id":"cp9590vv45c0","created":1671793259472,"text":"3、一岗多人"},"children":[]},{"data":{"id":"cp9590vv17k0","created":1671793259472,"text":"4、任职资格"},"children":[{"data":{"id":"cp9590vv0800","created":1671793259472,"text":"① 一般会计员：应当具备从事会计工作所需的 准也能力 ，遵守 职业道德"},"children":[]},{"data":{"id":"cp9590vvc8o0","created":1671793259472,"text":"② 会计机构负责人（会计主管人员）：应当具备会计师\\n以上专业技术职务资格或者从事会计工作3年以上的经历"},"children":[]},{"data":{"id":"cp9590vvcnk0","created":1671793259472,"text":"③ 总会计师--会计工作行政领导：国有的和国有资产\\n占控股地位的或者主导地位的大、中型企业必须设置总会\\n计师"},"children":[]},{"data":{"id":"cp9590vutfk0","created":1671793259472,"text":"④ 反省一辈子"},"children":[]},{"data":{"id":"cp9590vvx280","created":1671793259473,"text":"因由提供续交财务会计报告，做假账。隐匿或者故意销毁\\n会计凭证、会计账簿、财务会计报告，贪污，挪用公款，\\n职务侵占等于会计职务有关的违法行为被追究刑事责任的\\n人员"},"children":[]}]}]},{"data":{"id":"cp9590vvmg00","created":1671793259473,"text":"回避制度","expandState":"collapse"},"children":[{"data":{"id":"cp9590vvfbk0","created":1671793259473,"text":"回避范围：国家机关、国有企业、事业单位"},"children":[]},{"data":{"id":"cp9590vvu6o0","created":1671793259473,"text":"单位负责人的直系亲属不得担任本单位的会计机构负责人、会计主管人员。"},"children":[]},{"data":{"id":"cp9590vvuxc0","created":1671793259473,"text":"会计机构负责人、会计主管人员的直系亲属不得在本单位\\n机构中担任出纳工作"},"children":[]}]},{"data":{"id":"cp9590vvlu80","created":1671793259473,"text":"会计工作交接","expandState":"collapse"},"children":[{"data":{"id":"cp9590vvjz40","created":1671793259473,"text":"总原则"},"children":[{"data":{"id":"cp9590vvjy00","created":1671793259473,"text":"交接清楚，分清责任，谁的责任谁来承担"},"children":[]}]},{"data":{"id":"cp9590vvedk0","created":1671793259473,"text":"交接的范围-换人来做"},"children":[{"data":{"id":"cp9590vwgm80","created":1671793259474,"text":"工作调动、离职、因病暂时不能工作"},"children":[]}]},{"data":{"id":"cp9590vw6i00","created":1671793259474,"text":"监交-直接上级"},"children":[{"data":{"id":"cp9590vwk680","created":1671793259474,"text":"1、一般会计人员办理交接手续，由主管监交"},"children":[]},{"data":{"id":"cp9590vwkh40","created":1671793259474,"text":"2、会计机构负责人办理交接手续，单位负责人监交"},"children":[]}]},{"data":{"id":"cp9590vwb5k0","created":1671793259474,"text":"交接后的有关事宜"},"children":[{"data":{"id":"cp9590vw9600","created":1671793259474,"text":"1、交接完毕后，交接双方和监交人要在移交清册上签名或者盖章"},"children":[]},{"data":{"id":"cp9590vwimg0","created":1671793259474,"text":"2、移交清册一般应当填制 一式三份 ，交接双方各执一份，存档一份"},"children":[]},{"data":{"id":"cp9590vwifs0","created":1671793259474,"text":"3、接替人员应当继续使用移交的会计账簿，不得自行另\\n立新账，以保持会计账簿的连续性"},"children":[]}]},{"data":{"id":"cp9590vwgyg0","created":1671793259474,"text":"交接责任"},"children":[{"data":{"id":"cp9590vwfd40","created":1671793259474,"text":"1、接替人员：继续使用移交的会计账簿，不得另立新账"},"children":[]},{"data":{"id":"cp9590vw5eo0","created":1671793259474,"text":"2、移交人员：对所移交的会计凭证、会计账簿、会计报\\n表和其他有关资料的合法性、真实性承担法律责任"},"children":[]}]}]},{"data":{"id":"cp9590vx5co0","created":1671793259475,"text":"会计专业资格与职务","expandState":"collapse"},"children":[{"data":{"id":"cp9590vwvm80","created":1671793259475,"text":"会计职务"},"children":[{"data":{"id":"cp9590vwnmg0","created":1671793259475,"text":"高级职务：正高级会计师、副高级会计师"},"children":[]},{"data":{"id":"cp9590vwsvc0","created":1671793259475,"text":"中级职务：会计师"},"children":[]},{"data":{"id":"cp9590vwopc0","created":1671793259475,"text":"初级职务：助理会计师、会计员"},"children":[]}]},{"data":{"id":"cp9590vx6ds0","created":1671793259475,"text":"会计专业技术资格"},"children":[{"data":{"id":"cp9590vwxzc0","created":1671793259475,"text":"初级资格：实行全国统一考试制度"},"children":[]},{"data":{"id":"cp9590vwun40","created":1671793259475,"text":"中级资格：实行全国统一考试制度"},"children":[]},{"data":{"id":"cp9590vwp9k0","created":1671793259475,"text":"高级资格：实行考试与评审"},"children":[]}]},{"data":{"id":"cp9590vx1gw0","created":1671793259475,"text":"聘任"},"children":[{"data":{"id":"cp9590vwppc0","created":1671793259475,"text":"会计师：已取得 中级 会计资格符合国家有关规定"},"children":[]},{"data":{"id":"cp9590vxghs0","created":1671793259476,"text":"助理会计师：已取得初级会计资格"},"children":[]},{"data":{"id":"cp9590vxhnk0","created":1671793259476,"text":"大专毕业且担任会计员职务满2年"},"children":[]},{"data":{"id":"cp9590vxdy00","created":1671793259476,"text":"中专毕业担任会计员职务满4年"},"children":[]},{"data":{"id":"cp9590vxc8w0","created":1671793259476,"text":"不具备规定学历的担任会计员职务满5年"},"children":[]},{"data":{"id":"cp9590vxq4g0","created":1671793259476,"text":"会计员：不符合以上条件的会计人员"},"children":[]}]}]},{"data":{"id":"cp9590vxfq80","created":1671793259476,"text":"会计专业人员继续教育","expandState":"collapse"},"children":[{"data":{"id":"cp9590vxk4g0","created":1671793259476,"text":"1、用人单位的 专业技术人员 应当接受继续教育"},"children":[]},{"data":{"id":"cp9590vxhhc0","created":1671793259476,"text":"2、公诉科目：法律法规、理论政策、职业道德、技术信息等基本知识"},"children":[]},{"data":{"id":"cp9590vxoyw0","created":1671793259476,"text":"3、专业科目：财务会计、管理会计、财务管理、内部控\\n制与风险管理、会计信息化、会计职业道德、财税金融、\\n会计法律法规等相关的只是"},"children":[]},{"data":{"id":"cp9590vy5g80","created":1671793259477,"text":"4、学分要求 90分 专业科目一般不少于总学分的三分之二"},"children":[]},{"data":{"id":"cp9590vyaps0","created":1671793259477,"text":"5、用人单位应当保障专业技术人员参加继续教育的权利。"},"children":[]},{"data":{"id":"cp9590vy2lk0","created":1671793259477,"text":"6、应当建立本单位专业技术人员继续教育与使用、计生\\n相衔接的激励机制，把专业技术人员参加继续教育情况作\\n为专业技术人员考核评价、岗位聘用的重要依据。"},"children":[]}]}]}]},{"data":{"id":"cp9590vy6u00","created":1671793259477,"text":"第四节违法会计法律制度的法律责任★★★","expandState":"expand"},"children":[{"data":{"id":"cp9590vxzt40","created":1671793259477,"text":"违反会计制度的行为","expandState":"collapse"},"children":[{"data":{"id":"cp9590vxvo00","created":1671793259477,"text":"1、 县级以上人民政府财政部门责令限期改正"},"children":[]},{"data":{"id":"cp9590vy5y80","created":1671793259477,"text":"2、 可对单位并处3000-5000。"},"children":[]},{"data":{"id":"cp9590vy5w00","created":1671793259477,"text":"3、 对直接负责主管人员和其他责任人员处2000-2000的处罚"},"children":[]},{"data":{"id":"cp9590vxxhc0","created":1671793259477,"text":"4、 属于国家工作人员的，由其单位或者有关单位已发给与行政处罚。"},"children":[]},{"data":{"id":"cp9590vyd540","created":1671793259477,"text":"5、 构成犯罪的，依法追究刑事责任。"},"children":[]},{"data":{"id":"cp9590vyu2w0","created":1671793259478,"text":"6、 会计人员有上述所列行为之一，情节严重的，5年内不得从事会计工作。"},"children":[]}]},{"data":{"id":"cp9590vydts0","created":1671793259478,"text":"伪造、变造会计凭证、会计账簿，编制虚假财务会计报告行为","expandState":"collapse"},"children":[{"data":{"id":"cp9590vyum00","created":1671793259478,"text":"对单位处罚：5000-10万"},"children":[]},{"data":{"id":"cp9590vyk3k0","created":1671793259478,"text":"对个人处罚：3000-5万"},"children":[]},{"data":{"id":"cp9590vyhso0","created":1671793259478,"text":"构成犯罪的依法追究刑事责任"},"children":[]},{"data":{"id":"cp9590vyynk0","created":1671793259478,"text":"行政处分：撤职—开除"},"children":[]},{"data":{"id":"cp9590vyt7c0","created":1671793259478,"text":"其中会计人员5年内不得从事会计工作"},"children":[]}]},{"data":{"id":"cp9590vyp1k0","created":1671793259478,"text":"隐匿或者故意销毁依法应当保存的会计凭证、会计账簿、财务会计报告行为","expandState":"collapse"},"children":[{"data":{"id":"cp9590vyy5s0","created":1671793259478,"text":"对单位处罚：5000-10万"},"children":[]},{"data":{"id":"cp9590vyxqw0","created":1671793259478,"text":"对个人处罚：3000-5万"},"children":[]},{"data":{"id":"cp9590vyyco0","created":1671793259478,"text":"5年以下、拘役罚金2万-20"},"children":[]},{"data":{"id":"cp9590vzew00","created":1671793259479,"text":"行政处分：撤职—开除"},"children":[]},{"data":{"id":"cp9590vzig00","created":1671793259479,"text":"其中会计人员5年内不得从事会计工作"},"children":[]}]},{"data":{"id":"cp9590vzduw0","created":1671793259479,"text":"单位负责人对依法履行职责，抵制违反《会计法》规定行\\n为的会计人员实行打击报复的","expandState":"collapse"},"children":[{"data":{"id":"cp9590vzf3s0","created":1671793259479,"text":"尚构不成犯罪的给予行政处分，恢复受打击报复人员的名\\n誉和原有职务、级别。"},"children":[]},{"data":{"id":"cp9590vz6ao0","created":1671793259479,"text":"3年以下 、拘役"},"children":[]}]},{"data":{"id":"cp9590vz36w0","created":1671793259479,"text":"授意、指使、强令会计机构、会计人员及其其他人员伪造\\n变造会计凭证、会计账簿、编制虚假财务会计报告或者隐\\n匿、故意销售依法应当保存的会计凭证、会计账簿、财务\\n会计报告行为","expandState":"collapse"},"children":[{"data":{"id":"cp9590vzk3s0","created":1671793259479,"text":"5000-5万"},"children":[]},{"data":{"id":"cp9590vzhn40","created":1671793259479,"text":"构成犯罪的依法追究刑事责任"},"children":[]},{"data":{"id":"cp9590vzhqg0","created":1671793259479,"text":"降级 撤职 开除"},"children":[]},{"data":{"id":"cp9590vz8xc0","created":1671793259479,"text":"其中会计人员5年内不得从事会计工作"},"children":[]}]},{"data":{"id":"cp9590vzdm80","created":1671793259479,"text":"财政部门及有关行政部门工作人员职务违法行为的","expandState":"collapse"},"children":[{"data":{"id":"cp9590vzsyw0","created":1671793259480,"text":"财政部门及其有关行政部门的工作人员在实施监督管理中\\n滥用职权，玩忽职守、徇私舞弊或者邪路国家秘密、商业\\n秘密、构成犯罪的，依法追究刑事责任。尚不构成犯罪的\\n依法给予行政处分"},"children":[]}]}]}]}]},"template":"default","theme":"fresh-blue","version":"1.4.33"}'
                        a.importData('json', kjdata);

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