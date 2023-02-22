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
                            kjdata='{"root":{"data":{"id":"cp958zn5bw00","created":1671793256768,"text":"初级会计实务思维导图","expandState":"expand"},"children":[{"data":{"id":"cp95dm9gko80","created":1671793619463,"text":"第二章会计基础","expandState":"expand"},"children":[{"data":{"id":"cp95dm9gsmo0","created":1671793619464,"text":"第一节会计要素及其确认与计量 ★★","expandState":"expand"},"children":[{"data":{"id":"cp95dm9h79s0","created":1671793619464,"text":"会计要素计量属性及其应用原则★","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9hbnc0","created":1671793619464,"text":"重置成本，又称现行成本,是指按照当前市场条件,重新\\n取得同样一项资产所需要支付的现金或者现金等价物金额\\n。"},"children":[]},{"data":{"id":"cp95dm9h5cg0","created":1671793619464,"text":"历史成本又称实际成本,是指取得或制造某项财产物资时\\n所实际支付的现金或者其他等价物"},"children":[]},{"data":{"id":"cp95dm9hdo80","created":1671793619465,"text":"易错点:实际成本和现行成本易混淆"},"children":[]}]},{"data":{"id":"cp95dm9how80","created":1671793619465,"text":"会计要素及其确认条件★","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9hobk0","created":1671793619465,"text":"收入定义和确认条件 费用定义和确认条件"},"children":[]},{"data":{"id":"cp95dm9ia4g0","created":1671793619466,"text":"资产定义和确认条件"},"children":[{"data":{"id":"cp95dm9iif40","created":1671793619466,"text":"企业拥有的一项经济资源即使没有发生实际成本或者发生\\n的实际成本很小,但如果公允价值能够可靠计量,也应认\\n为符合资产能够可靠计量的确认条件"},"children":[]},{"data":{"id":"cp95dm9i2dk0","created":1671793619466,"text":"已经报废的机器设备不算资产"},"children":[]}]},{"data":{"id":"cp95dm9ibao0","created":1671793619466,"text":"负债定义和确认条件"},"children":[{"data":{"id":"cp95dm9i3go0","created":1671793619466,"text":"一项现时义务符合负债的定义,并且未来很可能流出的经\\n济利益的金额能够可靠地计量,即可确认为负债"},"children":[]}]},{"data":{"id":"cp95dm9i3qo0","created":1671793619466,"text":"所有者权益定义和确认条件"},"children":[]},{"data":{"id":"cp95dm9i3qw0","created":1671793619466,"text":"利润定义和确认条件"},"children":[]},{"data":{"id":"cp95dm9iexs0","created":1671793619466,"text":"费用定义和确认条件"},"children":[{"data":{"id":"cp95dm9i3eg0","created":1671793619466,"text":"企业的费用是日常活动中发生的,营业外支出是企业非日\\n常活动中发生的损失,不属于费用"},"children":[]}]}]}]},{"data":{"id":"cp95dm9ijzk0","created":1671793619467,"text":"第二节会计科目和会计账户和借贷记账法★★","expandState":"expand"},"children":[{"data":{"id":"cp95dm9irrc0","created":1671793619467,"text":"会计科目★","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9ips00","created":1671793619467,"text":"考点2 所有者权益类 利润分配 资本公积 本年利润\\n 其他综合收益 2.1 所有者权益由实收资本、资本\\n公积、盈余公积和未分配利润组成[计算]"},"children":[]},{"data":{"id":"cp95dm9it600","created":1671793619467,"text":"考点1:成本类账户 生产成本制造费用 研发支出 1\\n.借方登记增加 货方登记减少 期末余额一般在借方 \\n有些账户可能无余额"},"children":[{"data":{"id":"cp95dm9irfc0","created":1671793619467,"text":"成本类科目下 劳务成本 变更为 合同履约成本 (2020新增)"},"children":[{"data":{"id":"cp95dm9iye80","created":1671793619467,"text":"①实际发生劳务成本  借:合同履约成本  贷:应付\\n职工薪酬 ②确认收入并结转劳务成本 借:银行存款等\\n 贷:主营业务收入 应交税费-应交增值税 (销项税\\n额) 借:主营业务成本 贷:合同履约成本"},"children":[]}]}]},{"data":{"id":"cp95dm9iqlc0","created":1671793619467,"text":"考点3: 损益类科目 主营业务成本 营业外收入 其\\n他业务成本 以前年度损益调整 公允价值变动损益 营\\n业外支出"},"children":[]},{"data":{"id":"cp95dm9ik4o0","created":1671793619467,"text":"考点7 费用类科目:主营业务成本、其他业务成本、资\\n产减值损失、税金及附加、销售费用、管理费用、财务费\\n用、所得税费用等."},"children":[]},{"data":{"id":"cp95dm9j1ow0","created":1671793619467,"text":"考点4 资产类科目 其他应收款 应收账款 待处理财产损溢 预付账款"},"children":[]},{"data":{"id":"cp95dm9jpi00","created":1671793619468,"text":"考点5 负债类科目的 预收账款 应付账款 应付职工薪酬薪酬 应交税费"},"children":[]},{"data":{"id":"cp95dm9jksw0","created":1671793619468,"text":"考点6 收入类科目:主营业务收入、其他业务收入、投\\n资收益、公允价值变动损益等."},"children":[]}]},{"data":{"id":"cp95dm9j7880","created":1671793619468,"text":"账户与会计科目","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9j4r40","created":1671793619468,"text":"账户是根据会计科目设置的,具有一定格式和结构,[能\\n够]反映会计要素增减变动情况是其结果的载体,"},"children":[]},{"data":{"id":"cp95dm9jk0o0","created":1671793619468,"text":"会计科目[不具有]格式结构,[不能]反映各会计要素的增减变动"},"children":[]},{"data":{"id":"cp95dm9j6400","created":1671793619468,"text":"会计科目是账户的名称,也是设置账户的依据;"},"children":[]}]},{"data":{"id":"cp95dm9jhig0","created":1671793619468,"text":"账户★","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9j5lk0","created":1671793619468,"text":"日记账"},"children":[{"data":{"id":"cp95dm9jmqo0","created":1671793619468,"text":"在我国,对于日记账,大多数企业一般只设库存现金日记账和银行存款日记账"},"children":[]},{"data":{"id":"cp95dm9j6pk0","created":1671793619468,"text":"库存现金日记账"},"children":[{"data":{"id":"cp95dm9k7e80","created":1671793619469,"text":"1每日终了,结出收支合计和余额,与库存现金核对。"},"children":[]}]},{"data":{"id":"cp95dm9jxj40","created":1671793619469,"text":"银行存款日记账"},"children":[{"data":{"id":"cp95dm9k2zk0","created":1671793619469,"text":"1银行存款日记账应按企业在银行开立的账户和币种分别\\n设置,每个银行账户设置一本日记账。"},"children":[]},{"data":{"id":"cp95dm9k4a80","created":1671793619469,"text":"会导致企业银行存款日记账余额大于银行对账单余额的事项有"},"children":[{"data":{"id":"cp95dm9jx3s0","created":1671793619469,"text":"企业销售商品一批,收对方开具的转账支票已入账,而银\\n行尚未入账 和 银行代企业支 付水电费,未通知企业"},"children":[]}]}]}]},{"data":{"id":"cp95dm9js5k0","created":1671793619469,"text":"总分类账户与明细分类账户的平行登记"},"children":[{"data":{"id":"cp95dm9k6bc0","created":1671793619469,"text":"总分类账户与明细分类账户平行登记的要点包括[方向相\\n同 金额相等 期间一致]"},"children":[]}]},{"data":{"id":"cp95dm9k2x40","created":1671793619469,"text":"试算平衡"},"children":[{"data":{"id":"cp95dm9jsv40","created":1671793619469,"text":"能通过编制试算平衡表发现的记账错误是"},"children":[{"data":{"id":"cp95dm9jvcw0","created":1671793619469,"text":"只登记了会计分录的借方或贷方,漏记了另一方"},"children":[]}]},{"data":{"id":"cp95dm9kh600","created":1671793619470,"text":"导致借贷不平衡的情况有"},"children":[{"data":{"id":"cp95dm9ktag0","created":1671793619470,"text":".一张记入赊购业务的记账凭证中,仅将应付账款登记入账"},"children":[]}]},{"data":{"id":"cp95dm9kpc00","created":1671793619470,"text":"不会影响平衡的情况有"},"children":[{"data":{"id":"cp95dm9kn9s0","created":1671793619470,"text":"收到某公司偿还欠款的转账支票5 000元,但会计分\\n录的借方科目错记为库存现金"},"children":[]},{"data":{"id":"cp95dm9ki400","created":1671793619470,"text":"到开户银行存入现金1000元,但编制记账凭证时误记\\n为借记库存现金,贷记银行存款"},"children":[]},{"data":{"id":"cp95dm9kjf40","created":1671793619470,"text":".遗漏一张记账凭证未入账"},"children":[]},{"data":{"id":"cp95dm9ktdc0","created":1671793619470,"text":"存货被高估3000元,管理费用同时被低估3000元"},"children":[]},{"data":{"id":"cp95dm9kifs0","created":1671793619470,"text":".从银行提取现金的记账凭证被重复登记2次"},"children":[]},{"data":{"id":"cp95dm9ktuw0","created":1671793619470,"text":".从开户银行提取现金500元,记账时重复登记一次"},"children":[]},{"data":{"id":"cp95dm9kgo00","created":1671793619470,"text":"收到现金100元,但没有登记入账"},"children":[]}]}]},{"data":{"id":"cp95dm9kziw0","created":1671793619471,"text":"账户的四个金额要素"},"children":[{"data":{"id":"cp95dm9l6kw0","created":1671793619471,"text":"期初余额、期末余额、本期增加发生额和本期减少发生额"},"children":[{"data":{"id":"cp95dm9ldps0","created":1671793619471,"text":"收入与费用类账户本来就没有余额没有期末余额,也就没有期初余额"},"children":[]}]},{"data":{"id":"cp95dm9lcc80","created":1671793619471,"text":"借方期末余额=借方期初余额+本期借方发生额-本期贷方发生额"},"children":[{"data":{"id":"cp95dm9kyyg0","created":1671793619471,"text":"这一公式只适用于资产类和成本、费用类性质账户的结账"},"children":[]}]}]},{"data":{"id":"cp95dm9kxy00","created":1671793619471,"text":"累计折旧账户"},"children":[{"data":{"id":"cp95dm9kyeg0","created":1671793619471,"text":"累计折旧属于备抵账户,与一般资产类账户的结构正好相\\n反,借方表示减少,贷方表示增加"},"children":[]},{"data":{"id":"cp95dm9l5u80","created":1671793619471,"text":"年末余额的计算"},"children":[{"data":{"id":"cp95dm9l5mw0","created":1671793619471,"text":"期末贷 方余额700(万元)=年初贷方余额600万\\n元+本期贷方发生额300万元−本期借方发生额200\\n万元"},"children":[]}]}]},{"data":{"id":"cp95dm9lzkw0","created":1671793619472,"text":"明细账户"},"children":[{"data":{"id":"cp95dm9ll680","created":1671793619472,"text":"明细分类账"},"children":[{"data":{"id":"cp95dm9lra80","created":1671793619472,"text":"数量金额式账⻚"},"children":[{"data":{"id":"cp95dm9lo800","created":1671793619472,"text":"根据[记账凭证、原始凭证或汇总原始凭证]逐日逐笔或定期汇总登记"},"children":[]},{"data":{"id":"cp95dm9lkv40","created":1671793619472,"text":"适用于原材料、库存商品 等存货账户"},"children":[]}]}]}]}]},{"data":{"id":"cp95dm9lnts0","created":1671793619472,"text":"借贷记账法★★","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9ln2g0","created":1671793619472,"text":"根据借贷记账法可知负债增加记贷方,负债减少记借方 \\n资产增加记借方,资产减少记贷方 费用增加记借方,费\\n用减少记贷方 收入增加记贷方,收入减少记借方"},"children":[]},{"data":{"id":"cp95dm9lt000","created":1671793619472,"text":"借贷记账法下分别以借、贷两个记账符号表示各会计要素\\n的增加或减少,至于借表示增加还是贷表示增加,则取决\\n于账户的性质与所记录经济内容的性质"},"children":[]},{"data":{"id":"cp95dm9lw340","created":1671793619472,"text":"我国会计准则规定,企业、行政单位和事业单位会计核算\\n采用借贷记账法记账"},"children":[]}]},{"data":{"id":"cp95dm9ma480","created":1671793619473,"text":"会计表达式","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9mimo0","created":1671793619473,"text":"资产=负债+所有者权益】会计等式左右两边同时增加"},"children":[{"data":{"id":"cp95dm9mfmo0","created":1671793619473,"text":"从银行借入短期借款"},"children":[]}]},{"data":{"id":"cp95dm9mmbc0","created":1671793619473,"text":"一项资产增加,另一项资产减少"},"children":[{"data":{"id":"cp95dm9mj4w0","created":1671793619473,"text":"收回某公司欠的购货款 借记 银行存款 ,贷记 应收账款"},"children":[]}]},{"data":{"id":"cp95dm9mmnk0","created":1671793619473,"text":"资产与负债同时减少,所有者权益不变"},"children":[{"data":{"id":"cp95dm9muww0","created":1671793619474,"text":"以银行存款偿还欠货款 借:应付账款 贷:银行存款"},"children":[]}]},{"data":{"id":"cp95dm9mz880","created":1671793619474,"text":"资产与负债同时增加,所有者权益不变;"},"children":[{"data":{"id":"cp95dm9n4so0","created":1671793619474,"text":"以赊购方式采购材料 借:原材料 贷:应付账款 和 \\n购进商品一批,货款尚未支付"},"children":[]}]},{"data":{"id":"cp95dm9mvnk0","created":1671793619474,"text":"所有者权益增加,负债减少"},"children":[{"data":{"id":"cp95dm9mpsw0","created":1671793619474,"text":"将应付账款转为股本 借:应付账款 贷:股本 负债减少,所有者权益增加;"},"children":[]}]},{"data":{"id":"cp95dm9ms5s0","created":1671793619474,"text":"所有者权益减少,负债增加"},"children":[{"data":{"id":"cp95dm9mxr40","created":1671793619474,"text":"宣告分派现金股利 借:利润分配——应付现金股利 贷:应付股利"},"children":[]}]},{"data":{"id":"cp95dm9n9ig0","created":1671793619474,"text":"所有者权益增加,资产增加"},"children":[{"data":{"id":"cp95dm9n47c0","created":1671793619474,"text":"接受投资者投入实物"},"children":[]}]}]}]},{"data":{"id":"cp95dm9my0o0","created":1671793619474,"text":"第三节会计凭证、会计账簿★★","expandState":"expand"},"children":[{"data":{"id":"cp95dm9ndko0","created":1671793619475,"text":"一、会计凭证★","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9nuq80","created":1671793619475,"text":"记账凭证:财会部门根据原始凭证填制的记账依据的会计凭证"},"children":[]},{"data":{"id":"cp95dm9ntgg0","created":1671793619475,"text":"会计凭证的作用:记录经济业务发生的证明,经过审核的\\n记账凭证是登记账簿的依据"},"children":[]},{"data":{"id":"cp95dm9ncf40","created":1671793619475,"text":"原始凭证:经济业务发生时取得的凭证"},"children":[{"data":{"id":"cp95dm9nsa80","created":1671793619475,"text":"原始凭证的取得"},"children":[{"data":{"id":"cp95dm9nk6o0","created":1671793619475,"text":"从外单位取得的原始凭证,必须有填制单位的公章或财务专用章"},"children":[{"data":{"id":"cp95dm9nu2o0","created":1671793619475,"text":"从外单位取得的原始凭证遗失,针对确实无法取得证明的\\n,如⻋票,应由当事人写明详细情况,由经办单位会计机\\n构负责人、会计主管人员和单位负责人批准后,代作原始\\n凭证"},"children":[]}]},{"data":{"id":"cp95dm9nn3c0","created":1671793619475,"text":"自制原始凭证必须有经办单位相关负责人的签名盖章;"},"children":[]},{"data":{"id":"cp95dm9ncbc0","created":1671793619475,"text":"对外开出的原始凭证必须加盖本单位公章"},"children":[]},{"data":{"id":"cp95dm9nq3k0","created":1671793619475,"text":"从个人取得的原始 凭证,必须有填制人员的签名或盖章。"},"children":[]}]}]},{"data":{"id":"cp95dm9o64w0","created":1671793619476,"text":"会计凭证的保管:会计凭证保管年限从10年到永久"},"children":[]},{"data":{"id":"cp95dm9oco00","created":1671793619476,"text":"收款凭证和付款凭证"},"children":[{"data":{"id":"cp95dm9o3xs0","created":1671793619476,"text":"将现金存入银行或从银行提取现金,为了避免重复记账,\\n一般只填制付款凭证,不再填制收款凭证"},"children":[]},{"data":{"id":"cp95dm9o2vk0","created":1671793619476,"text":"收款凭证的作用"},"children":[{"data":{"id":"cp95dm9o2k00","created":1671793619476,"text":"①收款凭证根据有关库存现金和银行存款收入业务的原始\\n凭证填制 ②收款凭证是登记[库存现金日记账、银行存\\n款日记]】以及有关[明细账和总账]等账簿的依据 ③\\n收款凭证也是[出纳]人员收讫款项的依据"},"children":[]}]}]},{"data":{"id":"cp95dm9o4ww0","created":1671793619476,"text":"会计凭证的保管要求(2022)"},"children":[{"data":{"id":"cp95dm9o4880","created":1671793619476,"text":"（1）定期装订成册。"},"children":[]},{"data":{"id":"cp95dm9o5uo0","created":1671793619476,"text":"（2）重要的原始凭证， 如押金收据、提货单等应另编目录， 单独保管 。"},"children":[]},{"data":{"id":"cp95dm9nxsg0","created":1671793619476,"text":"（3） 同时满足 真实有效、符合标准、符合长期保管\\n要求、有防篡改措施、有备份、非需永 久保存档案条件\\n的， 从外部接收的电子资料附有符合《电子签名法》规\\n定的电子签名的， 电子 会计资料可仅以 电子形式 \\n保存， 无须打印 。"},"children":[]},{"data":{"id":"cp95dm9o4g80","created":1671793619476,"text":"（4）设有档案机构的：会计机构可临时保管 1 年，\\n经批准最长不超过 3 年；未设档案机 构的：在会计\\n机构等机构内部指定专人保管。 出纳人员不得兼管会计\\n档案。"},"children":[]},{"data":{"id":"cp95dm9of4o0","created":1671793619476,"text":"（5） 会计档案除按国家规定外一般不得对外借出。 \\n特殊情况下经批准 可 复制 ， 不可借 原件 。"},"children":[]},{"data":{"id":"cp95dm9ok680","created":1671793619477,"text":"（6） 保管期满前不得任意销毁 ， 保管期满但未结\\n清的债权债务会计凭证和涉及其他未了事 项的会计凭证\\n 不得销毁 。"},"children":[]}]}]},{"data":{"id":"cp95dm9ok600","created":1671793619477,"text":"会计账簿★","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9oy2g0","created":1671793619477,"text":"账簿的登记要求:正常记账使用蓝黑墨水或碳素墨水书写\\n,不得使用圆珠笔(银行的复写账薄除外)或者铅笔书写\\n。 特殊记账使用红墨水。"},"children":[{"data":{"id":"cp95dm9p2400","created":1671793619477,"text":"可以用红色墨水记账的特殊情况"},"children":[{"data":{"id":"cp95dm9oom80","created":1671793619477,"text":"①按照红字冲账的记账凭证，冲销错误记录； ②在不设\\n借贷等栏的多栏式账页中，登记减少数； ③在三栏式账\\n户的余额栏前，如未印明余额方向的 ④根据国家统一会\\n计制度的规定可以用红字登记的其他会计记录 ⑤在余额\\n栏内登记负数余额；"},"children":[]}]}]},{"data":{"id":"cp95dm9oixs0","created":1671793619477,"text":"会计账簿是指由一定格式账⻚组成的,以经过审核的会计\\n凭证为依据,全面、系统、连续地记录 各项经济业务的\\n簿籍。"},"children":[{"data":{"id":"cp95dm9p0680","created":1671793619477,"text":"原始凭证和经过审核的记账凭证都可以作为登记账簿的依据。"},"children":[]},{"data":{"id":"cp95dm9ow0g0","created":1671793619477,"text":"易错点:要经过审核要是会计凭证(不是经过审核的原始\\n凭证) 才是登记账簿的依据"},"children":[]}]},{"data":{"id":"cp95dm9p1sg0","created":1671793619477,"text":"会计账簿的启用:账薄封面上写单位名称和账薄名称,扉⻚上附启用表."},"children":[]},{"data":{"id":"cp95dm9ohk00","created":1671793619477,"text":"账簿的分类"},"children":[{"data":{"id":"cp95dm9plrs0","created":1671793619478,"text":"序时账簿"},"children":[{"data":{"id":"cp95dm9p4940","created":1671793619478,"text":"普通日记账"},"children":[{"data":{"id":"cp95dm9pbw80","created":1671793619478,"text":"普通日记账每天发生的所有经济业务编成会计分录记入账簿"},"children":[]}]},{"data":{"id":"cp95dm9pa680","created":1671793619478,"text":"特种日记账"},"children":[{"data":{"id":"cp95dm9p33c0","created":1671793619478,"text":"特种日记账它只把特定项目按经济业务顺序记入账簿如库\\n存现金日记账和银行存款日记账。"},"children":[]},{"data":{"id":"cp95dm9pb9k0","created":1671793619478,"text":"订本账形式"},"children":[]}]}]},{"data":{"id":"cp95dm9palc0","created":1671793619478,"text":"分类账簿"},"children":[{"data":{"id":"cp95dm9phsw0","created":1671793619478,"text":"按用途分类"},"children":[{"data":{"id":"cp95dm9pc880","created":1671793619478,"text":"总分类账户与明细分类账户平行登记的要点包括 方向相\\n同 金额相等 期间一致"},"children":[]},{"data":{"id":"cp95dm9p95k0","created":1671793619478,"text":"总分类账(总账)"},"children":[{"data":{"id":"cp95dm9q1c00","created":1671793619479,"text":"是根据总分类科目开设账户,用来登记全部经济业务,进\\n行总分类核算的分类账簿"},"children":[]},{"data":{"id":"cp95dm9q6w00","created":1671793619479,"text":"订本账形式"},"children":[]}]},{"data":{"id":"cp95dm9pu800","created":1671793619479,"text":"明细分类账(明细账,)"},"children":[{"data":{"id":"cp95dm9q7n40","created":1671793619479,"text":"根据明细分类科目开设账户,用来登记某—类经济业务,\\n进行明细分类核算,提供明细核算资料的分类账簿。"},"children":[]}]},{"data":{"id":"cp95dm9pt1k0","created":1671793619479,"text":"备查账簿(辅助账簿)"},"children":[{"data":{"id":"cp95dm9pt3k0","created":1671793619479,"text":"是对某些在序时账簿和分类账簿等主要账簿中都不予登记\\n或登记不够详细的经济业务事项进行补充登记时使用的账\\n簿"},"children":[{"data":{"id":"cp95dm9psyo0","created":1671793619479,"text":"入固定资产登记簿"},"children":[]},{"data":{"id":"cp95dm9pu0g0","created":1671793619479,"text":"代销商品登记簿等"},"children":[]}]}]}]},{"data":{"id":"cp95dm9prhc0","created":1671793619479,"text":"按账⻚格式分类"},"children":[{"data":{"id":"cp95dm9qi7s0","created":1671793619480,"text":"两栏式账簿"},"children":[{"data":{"id":"cp95dm9qd9s0","created":1671793619480,"text":"两栏式账簿只有借方和贷方两个基本金额栏目。"},"children":[{"data":{"id":"cp95dm9qfts0","created":1671793619480,"text":"普通日记账和转账日记账"},"children":[]}]}]},{"data":{"id":"cp95dm9qmmo0","created":1671793619480,"text":"三栏式账簿"},"children":[{"data":{"id":"cp95dm9qn080","created":1671793619480,"text":"设有借方、贷方和余额三个金额栏目的账簿。"},"children":[{"data":{"id":"cp95dm9qns00","created":1671793619480,"text":"应付账款明细账 银行存款日记账 各种日记账、总账以\\n及资本、债权、债务明细账 实收资本 应收账款明细账\\n 短期投资 主营业务收入总分类账"},"children":[{"data":{"id":"cp95dm9qd8w0","created":1671793619480,"text":"三栏式明细分类账和总账是一样的格式"},"children":[]}]}]}]},{"data":{"id":"cp95dm9qajc0","created":1671793619480,"text":"多栏式账簿"},"children":[{"data":{"id":"cp95dm9r4uw0","created":1671793619481,"text":"多栏式明细分类账是将属于同一个总账科目的各个明细科\\n目合并在一张账⻚上进行登记,适用于成本费用类科目的\\n明细核算。"},"children":[{"data":{"id":"cp95dm9r2pk0","created":1671793619481,"text":"制造费用明细账 销售费用明细账 生产成本明细账 管\\n理费用明细账 收入、成本、费用明细账 主营业务收入\\n明细账"},"children":[]}]}]},{"data":{"id":"cp95dm9qwt40","created":1671793619481,"text":"数量金额式账簿"},"children":[{"data":{"id":"cp95dm9qylc0","created":1671793619481,"text":"其借方(收入)、贷方(发出)和余额(结存)都分别设\\n有数量、单价和金额三个专栏,适用于既要进行金额核算\\n又要进行数量核算的账户"},"children":[{"data":{"id":"cp95dm9qw2o0","created":1671793619481,"text":"原材料明细账 库存商品明细账 产成品明细账 库存商品明细分类账"},"children":[]}]}]}]},{"data":{"id":"cp95dm9rg1s0","created":1671793619481,"text":"按外形特征分类"},"children":[{"data":{"id":"cp95dm9r9f40","created":1671793619481,"text":"订本式账簿"},"children":[{"data":{"id":"cp95dm9ryr40","created":1671793619482,"text":"缺点:同一账簿在同一时间只能由一人登记,这样不便于\\n会计人员分工协作记账,也不便于计算机打印记账"},"children":[]},{"data":{"id":"cp95dm9royg0","created":1671793619482,"text":"总分类账、现金日记账和银行存款日记账 库存现金日记账和 特种日记账"},"children":[]},{"data":{"id":"cp95dm9rkls0","created":1671793619482,"text":"订本式账簿优点:可以避免账⻚散失,防止账⻚被抽换,安全。"},"children":[]}]},{"data":{"id":"cp95dm9rzjc0","created":1671793619482,"text":"活⻚式账簿"},"children":[{"data":{"id":"cp95dm9rsvc0","created":1671793619482,"text":"优点:可以根据实际需要增添账⻚,不会浪费账⻚,使用\\n灵活,并且便于同时分工记账"},"children":[]},{"data":{"id":"cp95dm9rq000","created":1671793619482,"text":"各种明细分类账"},"children":[]},{"data":{"id":"cp95dm9rue00","created":1671793619482,"text":"缺点:账⻚容易散失和被抽换。"},"children":[]}]},{"data":{"id":"cp95dm9s1kg0","created":1671793619482,"text":"卡片式账簿"},"children":[{"data":{"id":"cp95dm9rzgo0","created":1671793619482,"text":"是将一定数量的卡片式账⻚存放于专设的卡片箱中,账⻚\\n可以根据需要随时增添的账簿。"},"children":[{"data":{"id":"cp95dm9sga80","created":1671793619483,"text":"固定资产明细帐"},"children":[]}]}]}]}]},{"data":{"id":"cp95dm9slmo0","created":1671793619483,"text":"备查账簿"},"children":[]}]},{"data":{"id":"cp95dm9siuw0","created":1671793619483,"text":"账簿的核对"},"children":[{"data":{"id":"cp95dm9s2vc0","created":1671793619483,"text":"账证核对"},"children":[{"data":{"id":"cp95dm9smu80","created":1671793619483,"text":"账簿记录与会计凭证(原始凭证、记账凭证)核对"},"children":[]}]},{"data":{"id":"cp95dm9sik00","created":1671793619483,"text":"账账核对"},"children":[{"data":{"id":"cp95dm9sbmw0","created":1671793619483,"text":"库存现金总账 库存现金日记账 核对 总分类账簿 所\\n辖明细分类账簿 总分类账簿 总分类账簿 明细分类账\\n簿 明细分类账簿"},"children":[{"data":{"id":"cp95dm9sblc0","created":1671793619483,"text":"总对日记 总对明细 总对总 明细对明细"},"children":[]}]}]},{"data":{"id":"cp95dm9scdc0","created":1671793619483,"text":"账实核对"},"children":[{"data":{"id":"cp95dm9s9pc0","created":1671793619483,"text":"现金日记账 现金实际库存数 各项债权明细账 对方单\\n位账面记录 银行存款日记账 银行对账单余额"},"children":[]}]}]},{"data":{"id":"cp95dm9sxr40","created":1671793619484,"text":"结账"},"children":[{"data":{"id":"cp95dm9szao0","created":1671793619484,"text":"结账的要点: ①不按月结的账户 要随时结出余额，每\\n月最后一笔余额是月末余额。月末结账时，要在通栏划单\\n红线，不需要结计余额 ②需要按月结计的收入、费用等\\n账，每月结账时，在通栏划单红线，结出本月发生额和余\\n额，在摘要栏内注明 本月合计 字样，并在下面通栏划\\n单红线 ③需要结计本年累计发生额的明细账户，每月结\\n账时，应在 本月合计 行下结出自年初起至本月末止的\\n累计发生额，登记在月份发生额下面，在摘要栏内注明 \\n本年累计 字样，并在下面通栏划单红线。12月末的 \\n本年累计 就是全年累计发生额，全年累计发生额下面通\\n栏划双红线。 ④总账账户平时只需结出月末余额。年终\\n结账时。要将所有总账账户结出全年发生额和年末余额，\\n在摘要栏内注 明 本年合计 字样，并在合计数下面通\\n栏划双红线。 ⑤年度终了结账时，有余额的账户，应将\\n其余额结转下年，并在摘要栏注明 结转下年 字样；在\\n下一会计年度新建有关账户的第一行余额栏内填写上年结\\n转的余额，并在摘要栏注明 上年结转 字样，使年末有\\n余额账户的余额如实地在账户中加以反映"},"children":[]},{"data":{"id":"cp95dm9snpc0","created":1671793619484,"text":"月末、季末或 年末进行 为编制财务报表 ,需要进行结账"},"children":[]}]},{"data":{"id":"cp95dm9t6og0","created":1671793619484,"text":"错账更正的方法"},"children":[{"data":{"id":"cp95dm9syd40","created":1671793619484,"text":"红字更正法"},"children":[{"data":{"id":"cp95dm9sso00","created":1671793619484,"text":"红字更正法.适用于两种记账后发现记账凭证中应借、应\\n贷会计科目有错误所引起的记账错误  更正方法是:用\\n红字填写一张与原记账凭证完全相同的记账凭证, 在摘\\n要栏内写明 注销某月某日某号凭证 .并据以用红字登\\n记入账 ,以示注销原记账凭证"},"children":[]}]},{"data":{"id":"cp95dm9subs0","created":1671793619484,"text":"划线更正法"},"children":[{"data":{"id":"cp95dm9srs00","created":1671793619484,"text":"在结账前发现账簿记录有文字或数字错误,而记账凭证没\\n有错误,应当采用划线更正法 更正时,可在错误的文字\\n或数字上划 一条红线,在红线的上方填写正确的 文字\\n或 数字,并由记账人员和会计机构负责人 (会计主管\\n人员 )在更正处盖章,以明确责任"},"children":[]}]},{"data":{"id":"cp95dm9sqk00","created":1671793619484,"text":"补充登记法"},"children":[{"data":{"id":"cp95dm9st4o0","created":1671793619484,"text":"记账后发理记账凭证和账簿记录中应借、应贷会计科目无\\n误，只是所记金额小于应记金额时 应当采用补充登记法\\n 按少记的金额用蓝字填制一张与原记账 凭证应借 、\\n应贷科目完全相同的记赃凭证．在摘要栏内写明 补记某\\n月 某日第×号记账 凭证少记金额 ，以补充少的金额\\n．并据以用蓝字登记入账"},"children":[]}]},{"data":{"id":"cp95dm9tf0o0","created":1671793619485,"text":"隔⻚"},"children":[{"data":{"id":"cp95dm9tlyo0","created":1671793619485,"text":"应将空⻚用红线对角划掉,注明此⻚空白或此行空白字样\\n,并有记账人员和会计机构负责人(会计主管人员)在更\\n正处签章"},"children":[]}]}]}]}]},{"data":{"id":"cp95dm9tbcw0","created":1671793619485,"text":"第四节财产清查 ★★","expandState":"expand"},"children":[{"data":{"id":"cp95dm9tkdc0","created":1671793619485,"text":"清查的处理:","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9tl5k0","created":1671793619485,"text":"填制盘存单+核对账面余额->填制实存账存对比表"},"children":[]},{"data":{"id":"cp95dm9toco0","created":1671793619485,"text":"财产清查结果处理的要求"},"children":[{"data":{"id":"cp95dm9tf5k0","created":1671793619485,"text":"\\n(1)分析产生差异的原因和性质,提出处理建议; \\n(2)积极处理多余积压财产,清理往来款项; \\n(3)总结经验教训,建立健全各项管理制度; \\n(4)及时调整账簿记录,保证 账实相符"},"children":[]},{"data":{"id":"cp95dm9tdf40","created":1671793619485,"text":"对于财产清查结果的账务处理一般分两步进行,即审批前\\n先调整有关账面记录,审批后转入有关账户 财产清查结\\n果处理的步骤包括审批之前的处理和审批之后的处理"},"children":[]},{"data":{"id":"cp95dm9tm680","created":1671793619485,"text":"对于盘盈或盘亏的财产物资,需在期末结账前处理完毕,\\n在期末结账前尚未经批准处理的,应在对外提供财务会计\\n报告时先按规定进行处理,并在会计报表附注中作出说明\\n。"},"children":[]}]}]},{"data":{"id":"cp95dm9tlm80","created":1671793619485,"text":"财产清查的分类","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9uefs0","created":1671793619486,"text":"清查范围"},"children":[{"data":{"id":"cp95dm9udw00","created":1671793619486,"text":"全面清查"},"children":[{"data":{"id":"cp95dm9u8v40","created":1671793619486,"text":"所有财产+盘点+核对"},"children":[]}]},{"data":{"id":"cp95dm9ty480","created":1671793619486,"text":"局部清查"},"children":[]}]},{"data":{"id":"cp95dm9u5l40","created":1671793619486,"text":"清查的时间"},"children":[{"data":{"id":"cp95dm9u6t40","created":1671793619486,"text":"定期清查"},"children":[{"data":{"id":"cp95dm9u9r40","created":1671793619486,"text":"月末+季末+年末"},"children":[]}]},{"data":{"id":"cp95dm9uaeo0","created":1671793619486,"text":"不定期清查"},"children":[{"data":{"id":"cp95dm9tzds0","created":1671793619486,"text":"1.更换财产物资保管人员和现金出纳人员; 2.发生\\n自然灾害和意外损失时; 3.财政、 审计、税务、银\\n行等部门,对本单位进行检查。 4.进行临时性的清产\\n核资;"},"children":[]}]}]},{"data":{"id":"cp95dm9u4kg0","created":1671793619486,"text":"清查的执行系统"},"children":[{"data":{"id":"cp95dm9upwg0","created":1671793619487,"text":"内部清查"},"children":[]},{"data":{"id":"cp95dm9uydc0","created":1671793619487,"text":"外部清查"},"children":[]}]}]},{"data":{"id":"cp95dm9usfk0","created":1671793619487,"text":"财产清查的方法","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9ur9s0","created":1671793619487,"text":"库存现金的清查"},"children":[{"data":{"id":"cp95dm9umhk0","created":1671793619487,"text":"实地盘点法"},"children":[]}]},{"data":{"id":"cp95dm9uzaw0","created":1671793619487,"text":"银行存款的清查"},"children":[{"data":{"id":"cp95dm9uv9k0","created":1671793619487,"text":"与银行对账单核对账目"},"children":[]}]},{"data":{"id":"cp95dm9uwbk0","created":1671793619487,"text":"应收款等往来款项的清查"},"children":[{"data":{"id":"cp95dm9uxsw0","created":1671793619487,"text":"发函询证法"},"children":[{"data":{"id":"cp95dm9ujww0","created":1671793619487,"text":"应收账款 应付账款 预付账款 预收账款"},"children":[]}]}]},{"data":{"id":"cp95dm9uwhs0","created":1671793619487,"text":"实物资产原材料的清查"},"children":[{"data":{"id":"cp95dm9vjx40","created":1671793619488,"text":"技术推算法"},"children":[]},{"data":{"id":"cp95dm9v7uw0","created":1671793619488,"text":"实地盘点法"},"children":[]}]},{"data":{"id":"cp95dm9vlzs0","created":1671793619488,"text":"无形资产"},"children":[{"data":{"id":"cp95dm9vkq00","created":1671793619488,"text":"不涉及清查"},"children":[]}]}]},{"data":{"id":"cp95dm9v3s00","created":1671793619488,"text":"不同情况下的清查","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9v38g0","created":1671793619488,"text":"更换出纳人员的清查属于局部清查和不定期清查。"},"children":[]},{"data":{"id":"cp95dm9vilc0","created":1671793619488,"text":"库存现金清查盘点时,( 出纳人员)必须在场。"},"children":[]}]}]},{"data":{"id":"cp95dm9vsgw0","created":1671793619489,"text":"第五节会计账务处理程序★","expandState":"expand"},"children":[{"data":{"id":"cp95dm9w15c0","created":1671793619489,"text":"期末 将库存现金日记账 银行存款日记账 明细分类账\\n 与有关总分类账 核对期末 根据 总分类账 明细分\\n类账 编制财务报表"},"children":[]},{"data":{"id":"cp95dm9vtc00","created":1671793619489,"text":"记账凭证汇总表(科目汇总表)账务处理程序","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9vy540","created":1671793619489,"text":"科目汇总表账务处理程序优缺点及适用范围:减轻了登记\\n总分类账的工作量,并可做到试算平衡,简明易懂,方便\\n易学。其缺点是:科目汇总表不能反映账户对应关系,不\\n便于查对账目"},"children":[]},{"data":{"id":"cp95dm9whs00","created":1671793619490,"text":"原始凭证->汇总原始凭证->填制收付转账记账凭证-\\n> 填制记账凭证汇总表->填制银行存款库存现金日记\\n账->登记各种明细分类账->登记总分类账"},"children":[]}]},{"data":{"id":"cp95dm9wi480","created":1671793619490,"text":"记账凭证账务处理程序","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9wa7k0","created":1671793619490,"text":"汇总原始凭证->填制收付转账记账凭证->填制银行存\\n款库存现金日记账->登记各种明细分类账->登记总分\\n类账"},"children":[]}]},{"data":{"id":"cp95dm9weso0","created":1671793619490,"text":"汇总记账凭证账务处理程序","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9wdqg0","created":1671793619490,"text":"【特点】先根据记账凭证定期编制汇总记账凭证,再根据\\n汇总记账凭证登记总分类账。 【优点】大大减少了登记\\n总分类账的工作量;可以清晰地反映科目之间的对应关系\\n,便于查对和分析账目。 【缺点】编制汇总记账凭证的\\n程序比较繁琐;按每一贷方科目编制汇总转账凭证,不利\\n于会计核算的日常分工;当转账凭证较多时,编制汇总转\\n账凭证的工作量较大。"},"children":[]},{"data":{"id":"cp95dm9wl480","created":1671793619490,"text":"汇总原始凭证->填制收付转账记账凭证->汇总记账凭\\n证->填制银行存款库存现金日记账->登记各种明细分\\n类账->登记总分类账"},"children":[]}]},{"data":{"id":"cp95dm9wa2g0","created":1671793619490,"text":"信息化环境下的会计账务处理(2022)","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9wdh40","created":1671793619490,"text":"概述"},"children":[{"data":{"id":"cp95dm9wf1s0","created":1671793619490,"text":"会计信息化，是指企业利用计算机、网络通信等现代信息\\n技术手段开展会计核算以及利用上述技术手 段将会计核\\n算与其他经营管理活动有机结合的过程。"},"children":[]}]},{"data":{"id":"cp95dm9wn4w0","created":1671793619491,"text":"功能"},"children":[{"data":{"id":"cp95dm9x4fk0","created":1671793619491,"text":"1.为会计核算和财务管理直接采集数据。"},"children":[]},{"data":{"id":"cp95dm9xcqo0","created":1671793619491,"text":"2.生成会计凭证、账簿、报表等会计资料。"},"children":[]},{"data":{"id":"cp95dm9x9pc0","created":1671793619491,"text":"3.对会计资料进行转换、输出、分析、利用。"},"children":[]}]},{"data":{"id":"cp95dm9xdlc0","created":1671793619491,"text":"要求"},"children":[{"data":{"id":"cp95dm9x7fk0","created":1671793619491,"text":"1.应保障企业按照国家统一会计准则制度开展会计核算\\n，设定必要的审签程序，并不得有违背国家统 一会计准\\n则制度的功能设计。"},"children":[]},{"data":{"id":"cp95dm9wy1c0","created":1671793619491,"text":"2.应使用中文并且提供对中文处理的支持。"},"children":[]},{"data":{"id":"cp95dm9x6ig0","created":1671793619491,"text":"3.应提供符合国家统一会计准则制度的会计科目分类和编码功能。"},"children":[]},{"data":{"id":"cp95dm9xmrc0","created":1671793619492,"text":"4.应提供符合国家统一会计准则制度的会计凭证、账簿\\n和报表的显示和打印功能。"},"children":[]},{"data":{"id":"cp95dm9xvrs0","created":1671793619492,"text":"5.应提供不可逆的记账功能。"},"children":[]},{"data":{"id":"cp95dm9xn7s0","created":1671793619492,"text":"6.应具有符合国家统一·标准的数据接口，满足外部会计监督需。"},"children":[]},{"data":{"id":"cp95dm9xn4g0","created":1671793619492,"text":"7.应具有会计资料归档功能。"},"children":[]},{"data":{"id":"cp95dm9xkmg0","created":1671793619492,"text":"8.应记录生成用户操作日志，确保日志的安全、完整。"},"children":[]},{"data":{"id":"cp95dm9xum80","created":1671793619492,"text":"9.企业会计信息系统数据服务器的部署应符合国家有关\\n规定。数据服务器部署在境外的，应在境内保存会计资料\\n备份，备份频率不得低于每月一次。 境内备份的会计资\\n料应能够在境外服务器不能正常工作时，独立满足企业开\\n展会计工作的需以及外 部会计监督的需。"},"children":[]},{"data":{"id":"cp95dm9xgvc0","created":1671793619492,"text":"10.企业会计资料中对经济业务事项的描述应使用中文\\n， 可以同时使用外国或者少数民族文字对照。"},"children":[]},{"data":{"id":"cp95dm9xv680","created":1671793619492,"text":"11.企业应建立电子会计资料备份管理制度。"},"children":[]},{"data":{"id":"cp95dm9yiyg0","created":1671793619493,"text":"12.企业电子会计档案的归档管理，应符合《会计档案\\n管理办法》等法规规章的规定。"},"children":[]},{"data":{"id":"cp95dm9yiyg0","created":1671793619493,"text":"13.实行会计集中核算的企业以及企业分支机构，应为\\n外部会计监督机构及时查询和调阅异地储存的会 计资料\\n提供必要条件。"},"children":[]},{"data":{"id":"cp95dm9y5uw0","created":1671793619493,"text":"14.企业不得在非涉密信息系统中存储、处理和传输涉\\n及国家秘密、关系国家经济信息安全的电子会计 资料；\\n未经有关主管部门批准，不得将电子会计资料及其复印件\\n携带、寄运或者传输至境外。"},"children":[]}]}]}]},{"data":{"id":"cp95dm9yk680","created":1671793619493,"text":"第六节成本与管理会计基础★","expandState":"expand"},"children":[{"data":{"id":"cp95dm9yfkw0","created":1671793619493,"text":"管理会计概述","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9yjag0","created":1671793619493,"text":"管理会计概念和目标"},"children":[{"data":{"id":"cp95dm9y0v40","created":1671793619493,"text":"概念"},"children":[{"data":{"id":"cp95dm9ygco0","created":1671793619493,"text":"主要服务于单位（包括企业和行政事业单位）内部管理需\\n要，通过利用相关信息，有机融合财务与业务活动，在单\\n位规划、决策、控制和评价等方面发挥重要作用的管理活\\n动"},"children":[]}]},{"data":{"id":"cp95dm9ydig0","created":1671793619493,"text":"目标"},"children":[{"data":{"id":"cp95dm9yahk0","created":1671793619493,"text":"通过运用管理会计工具方法，参与单位规划、决策、控制\\n、评价活动并为之提供有用信息，推动单位实现战略计划"},"children":[]}]}]},{"data":{"id":"cp95dm9z6cg0","created":1671793619494,"text":"管理会计体系"},"children":[{"data":{"id":"cp95dm9z1ig0","created":1671793619494,"text":"基本指引"},"children":[{"data":{"id":"cp95dm9yqko0","created":1671793619494,"text":"起统领作用，是制定应用指引和建设案例库的基础"},"children":[]}]},{"data":{"id":"cp95dm9z0pk0","created":1671793619494,"text":"应用指引"},"children":[{"data":{"id":"cp95dm9yzj40","created":1671793619494,"text":"居于主体地位，是对单位管理会计工作的具体指导"},"children":[]}]},{"data":{"id":"cp95dm9yqlc0","created":1671793619494,"text":"案例库"},"children":[{"data":{"id":"cp95dm9ypzs0","created":1671793619494,"text":"是对国内外管理会计经验的总结提炼"},"children":[]}]}]},{"data":{"id":"cp95dm9z6ww0","created":1671793619494,"text":"管理会计要素"},"children":[{"data":{"id":"cp95dm9yrug0","created":1671793619494,"text":"应用环境"},"children":[]},{"data":{"id":"cp95dm9zopk0","created":1671793619495,"text":"管理会计活动"},"children":[]},{"data":{"id":"cp95dm9zfjs0","created":1671793619495,"text":"工具方法"},"children":[]},{"data":{"id":"cp95dm9zc2o0","created":1671793619495,"text":"信息与报告"},"children":[{"data":{"id":"cp95dm9zohk0","created":1671793619495,"text":"按期间"},"children":[{"data":{"id":"cp95dm9zkfs0","created":1671793619495,"text":"定期报告"},"children":[]},{"data":{"id":"cp95dm9zaw00","created":1671793619495,"text":"不定期报告"},"children":[]}]},{"data":{"id":"cp95dm9zacg0","created":1671793619495,"text":"按内容"},"children":[{"data":{"id":"cp95dm9zjuo0","created":1671793619495,"text":"综合性报告"},"children":[]},{"data":{"id":"cp95dm9zb600","created":1671793619495,"text":"专项报告"},"children":[]}]},{"data":{"id":"cp95dm9zflc0","created":1671793619495,"text":"一般应以公历期间作为报告期间，也可以根据特定需要设计报告期间"},"children":[]}]}]}]},{"data":{"id":"cp95dm9zzuw0","created":1671793619496,"text":"产品成本核算的要求和一般程序","expandState":"collapse"},"children":[{"data":{"id":"cp95dm9zv4w0","created":1671793619496,"text":"产品成本核算的要求"},"children":[{"data":{"id":"cp95dma09lc0","created":1671793619496,"text":"1.做好各项基础工作"},"children":[]},{"data":{"id":"cp95dma05e80","created":1671793619496,"text":"2.正确划分各种费用支出的界限"},"children":[]},{"data":{"id":"cp95dma02go0","created":1671793619496,"text":"3.选择适当的成本计算方法"},"children":[]},{"data":{"id":"cp95dma06ew0","created":1671793619496,"text":"4.遵守一致性原则"},"children":[]},{"data":{"id":"cp95dma0ab40","created":1671793619496,"text":"5.编制产品成本报表"},"children":[]}]},{"data":{"id":"cp95dma08uo0","created":1671793619496,"text":"产品成本核算的一般程序"},"children":[{"data":{"id":"cp95dma0q540","created":1671793619497,"text":"对企业在生产经营过程中发生的各项生产费用和期间费用\\n，按照成本核算的要求，逐步进行归集和分配，最后计算\\n出各种产品的生产成本和各项期间费用的过程"},"children":[]}]},{"data":{"id":"cp95dma0tk80","created":1671793619497,"text":"产品成本核算对象"},"children":[]},{"data":{"id":"cp95dma0fkw0","created":1671793619497,"text":"产品成本项目"},"children":[{"data":{"id":"cp95dma0pp40","created":1671793619497,"text":"直接材料"},"children":[{"data":{"id":"cp95dma0h8g0","created":1671793619497,"text":"原材料、辅助材料、备品配件、外购半成品、包装物、低值易耗品等"},"children":[]}]},{"data":{"id":"cp95dma0no80","created":1671793619497,"text":"燃料及动力"},"children":[]},{"data":{"id":"cp95dma0lko0","created":1671793619497,"text":"直接人工"},"children":[]},{"data":{"id":"cp95dma0mn40","created":1671793619497,"text":"制造费用"},"children":[{"data":{"id":"cp95dma0k9s0","created":1671793619497,"text":"车间管理人员的工资和福利费、车间房屋建筑物和机器设\\n备的折旧费、租赁费、办公费、水电费、机物料消耗、劳\\n动保护费、季节性和修理期间的停工损失、信息系统维护\\n费等"},"children":[]}]}]}]},{"data":{"id":"cp95dma18wg0","created":1671793619498,"text":"产品成本的归集和分配","expandState":"collapse"},"children":[{"data":{"id":"cp95dma121s0","created":1671793619498,"text":"基本原则"},"children":[{"data":{"id":"cp95dma1ig80","created":1671793619498,"text":"受益性原则"},"children":[]},{"data":{"id":"cp95dma18340","created":1671793619498,"text":"及时性原则"},"children":[]},{"data":{"id":"cp95dma19kw0","created":1671793619498,"text":"成本效益性原则"},"children":[]},{"data":{"id":"cp95dma1ijk0","created":1671793619498,"text":"基础性原则"},"children":[]},{"data":{"id":"cp95dma10v40","created":1671793619498,"text":"管理性原则"},"children":[]}]},{"data":{"id":"cp95dma1fvk0","created":1671793619498,"text":"要素费用的归集和分配"},"children":[{"data":{"id":"cp95dma10y80","created":1671793619498,"text":"成本核算的科目"},"children":[{"data":{"id":"cp95dma1ypk0","created":1671793619499,"text":"生产成本"},"children":[{"data":{"id":"cp95dma1xmo0","created":1671793619499,"text":"分配率=待分配金额/分配标准之和"},"children":[]},{"data":{"id":"cp95dma1urs0","created":1671793619499,"text":"会计分录：借：生产成本-基本生产成本-XX产品 贷\\n：原材料-XX材料 应付职工薪酬"},"children":[]}]},{"data":{"id":"cp95dma1tw00","created":1671793619499,"text":"制造费用"},"children":[]},{"data":{"id":"cp95dma1w5k0","created":1671793619499,"text":"辅助生产成本"},"children":[{"data":{"id":"cp95dma2ltc0","created":1671793619500,"text":"直接分配法"},"children":[]},{"data":{"id":"cp95dma2j4w0","created":1671793619500,"text":"交互分配法"},"children":[]},{"data":{"id":"cp95dma29u00","created":1671793619500,"text":"计划成本分配法"},"children":[]}]},{"data":{"id":"cp95dma2l6o0","created":1671793619500,"text":"废品损失"},"children":[{"data":{"id":"cp95dma2s2w0","created":1671793619501,"text":"不包括"},"children":[{"data":{"id":"cp95dma2xh40","created":1671793619501,"text":"经质检部门鉴定不需要返修、可降价出售的不合格品"},"children":[]},{"data":{"id":"cp95dma38co0","created":1671793619501,"text":"产品入库后由于保管不善等原因而损坏变质的产品"},"children":[]},{"data":{"id":"cp95dma2sew0","created":1671793619501,"text":"实行 三包 企业在产品出售后发现的废品"},"children":[]}]}]}]}]},{"data":{"id":"cp95dma2t9s0","created":1671793619501,"text":"完工产品和在产品之间的归集和分配"},"children":[{"data":{"id":"cp95dma35wo0","created":1671793619501,"text":"约当产量比例法"},"children":[{"data":{"id":"cp95dma30hs0","created":1671793619501,"text":"在产品约当产量=在产品数量*完工程度"},"children":[]},{"data":{"id":"cp95dma2swo0","created":1671793619501,"text":"单位成本（分配率）=月初在产品成本+本月发生生产成\\n本 完工产品产量+在产品约当产量"},"children":[]},{"data":{"id":"cp95dma2xuw0","created":1671793619501,"text":"在很多加工生产中，材料是在生产开始时一次性投入的。\\n这时在产品无论完工程度如何，都应和完工产品负担同样\\n的材料成本，材料费用应按完工产品和在产品实际数量比\\n例进行分配。"},"children":[]}]},{"data":{"id":"cp95dma37hs0","created":1671793619501,"text":"在产品按定额成本计价法"},"children":[{"data":{"id":"cp95dma3hg00","created":1671793619502,"text":"月末在产品成本=月末在产品数量*在产品单位定额成本"},"children":[]},{"data":{"id":"cp95dma3ypk0","created":1671793619502,"text":"完工产品总成本=（月初在产品成本+本月发生生产成本）-月末在产品成本"},"children":[]},{"data":{"id":"cp95dma3o9c0","created":1671793619502,"text":"适用于各项消耗定额或成本定额比较准确、稳定，而且各\\n月末在产品数量变化不是很大的产品"},"children":[]}]},{"data":{"id":"cp95dma3xew0","created":1671793619502,"text":"定额比例法"},"children":[{"data":{"id":"cp95dma3rm80","created":1671793619502,"text":"如：直接材料"},"children":[{"data":{"id":"cp95dma3u1s0","created":1671793619502,"text":"完工产品应负担的直接材料成本=完工产品定额材料成本\\n*直接材料成本分配率"},"children":[]},{"data":{"id":"cp95dma3i680","created":1671793619502,"text":"月末在产品应负担的直接材料成本=月末在产品定额材料\\n成本*直接材料成本分配率 本资料唯一销售渠道微信号\\ncarrot8375"},"children":[]},{"data":{"id":"cp95dma3r3s0","created":1671793619502,"text":"直接材料成本分配率=月初在产品实际材料成本+本月投\\n入的实际材料成本 完工产品定额材料成本+月末在产品\\n定额材料成本"},"children":[]}]}]}]},{"data":{"id":"cp95dma3evs0","created":1671793619502,"text":"联产品和副产品的成本分配"},"children":[{"data":{"id":"cp95dma4bcg0","created":1671793619503,"text":"联产品"},"children":[{"data":{"id":"cp95dma4cfs0","created":1671793619503,"text":"指使用同种原料，经过同一生产过程同时生产出来的两种\\n或两种以上的主要产品"},"children":[]}]},{"data":{"id":"cp95dma4h540","created":1671793619503,"text":"副产品"},"children":[{"data":{"id":"cp95dma4j400","created":1671793619503,"text":"指在同一生产过程中，使用同种原料，在生产主产品的同\\n时附带生产出来的非主要产品"},"children":[{"data":{"id":"cp95dma4cjk0","created":1671793619503,"text":"不计算副产品成本扣除法"},"children":[]},{"data":{"id":"cp95dma4fj40","created":1671793619503,"text":"副产品成本按固定价格或计划价格计算法"},"children":[]},{"data":{"id":"cp95dma4ddc0","created":1671793619503,"text":"副产品只负担继续加工成本法"},"children":[]},{"data":{"id":"cp95dma4bdk0","created":1671793619503,"text":"联合成本在主副产品之间分配法"},"children":[]},{"data":{"id":"cp95dma4be80","created":1671793619503,"text":"副产品作价扣除法"},"children":[{"data":{"id":"cp95dma4joo0","created":1671793619503,"text":"需要从产品售价中扣除继续加工成本、销售费用、销售税金及相应的利润"},"children":[]}]}]}]}]},{"data":{"id":"cp95dma4ae00","created":1671793619503,"text":"产品成本计算"},"children":[{"data":{"id":"cp95dma52u80","created":1671793619504,"text":"品种法"},"children":[{"data":{"id":"cp95dma529c0","created":1671793619504,"text":"成本计算对象：产品品种"},"children":[]},{"data":{"id":"cp95dma4r5k0","created":1671793619504,"text":"适用：大量大批的单步骤生产，如发电、供暖、采掘等企业"},"children":[]},{"data":{"id":"cp95dma4ye80","created":1671793619504,"text":"月末一般不存在在产品，如果有在产品要将生产成本在完\\n工产品和在产品之间进行分配"},"children":[]}]},{"data":{"id":"cp95dma53540","created":1671793619504,"text":"分批法"},"children":[{"data":{"id":"cp95dma54e00","created":1671793619504,"text":"成本计算对象：产品批别"},"children":[]},{"data":{"id":"cp95dma4mm00","created":1671793619504,"text":"适用：单件小批的单步骤生产，如造船、重型机器制造、精密仪器制造等"},"children":[]},{"data":{"id":"cp95dma50eo0","created":1671793619504,"text":"产品成本计算期与产品生产周期基本一致，但与财务报告\\n期不一致，一般不存在在完工产品和在产品之间分配成本\\n的问题"},"children":[]}]},{"data":{"id":"cp95dma4ucw0","created":1671793619504,"text":"分步法"},"children":[{"data":{"id":"cp95dma4n080","created":1671793619504,"text":"成本计算对象：生产步骤"},"children":[]},{"data":{"id":"cp95dma4v940","created":1671793619504,"text":"计算和结转"},"children":[{"data":{"id":"cp95dma5mfc0","created":1671793619505,"text":"逐步结转分步法"},"children":[{"data":{"id":"cp95dma5a5s0","created":1671793619505,"text":"优点"},"children":[{"data":{"id":"cp95dma5c9s0","created":1671793619505,"text":"能提供各个生产步骤的半成品成本资料"},"children":[]},{"data":{"id":"cp95dma59o80","created":1671793619505,"text":"为各生产步骤的在产品实物管理及资金管理提供资料"},"children":[]},{"data":{"id":"cp95dma5i1s0","created":1671793619505,"text":"能够全面地反映各生产步骤的生产耗费水平，更好地满足\\n各生产步骤成本管理的要求"},"children":[]}]},{"data":{"id":"cp95dma5m6o0","created":1671793619505,"text":"缺点"},"children":[{"data":{"id":"cp95dma5nio0","created":1671793619505,"text":"成本结转工作量较大，各生产步骤的半成品成本还要进行\\n成本还原，增加了核算的工作量"},"children":[{"data":{"id":"cp95dma5c9c0","created":1671793619505,"text":"成本还原：将产成品成本中以综合项目反映的自制半成品\\n成本（直接材料）按照其原始构成分解为直接材料、直接\\n人工、制造费用等，以反映产品成本的原始构成情况。"},"children":[]}]}]}]},{"data":{"id":"cp95dma5onc0","created":1671793619505,"text":"平行结转分步法"},"children":[{"data":{"id":"cp95dma5nj40","created":1671793619505,"text":"优点"},"children":[{"data":{"id":"cp95dma5ik00","created":1671793619505,"text":"能够直接提供按原始成本项目反映的产成品成本资料，不必进行成本还原"},"children":[]},{"data":{"id":"cp95dma5rog0","created":1671793619506,"text":"各步骤可以同时计算产品成本，平行汇总计入产成品成本\\n，不必逐步结转半成品成本"},"children":[]}]},{"data":{"id":"cp95dma67p40","created":1671793619506,"text":"缺点"},"children":[{"data":{"id":"cp95dma66ns0","created":1671793619506,"text":"不能提供各个步骤的半成品成本资料"},"children":[]},{"data":{"id":"cp95dma5yhc0","created":1671793619506,"text":"不能为各个生产步骤在产品的实物和资金管理提供资料"},"children":[]},{"data":{"id":"cp95dma5wjk0","created":1671793619506,"text":"不能全面地反映各该步骤产品的生产耗费水平，不能更好\\n地满足这些步骤成本管理的要求"},"children":[]}]}]}]},{"data":{"id":"cp95dma5wy00","created":1671793619506,"text":"适用：大量大批的多步骤生产，如冶金、纺织、机械制造等"},"children":[]},{"data":{"id":"cp95dma5vpc0","created":1671793619506,"text":"产品成本计算期是固定的，与产品的生产周期不一致。月\\n末为计算完工产品成本，还需要将归集生产成本在完工产\\n品和在产品之间进行分配"},"children":[]}]},{"data":{"id":"cp95dma6c5s0","created":1671793619506,"text":"分类法"},"children":[]},{"data":{"id":"cp95dma69eg0","created":1671793619506,"text":"定额法"},"children":[]}]}]}]},{"data":{"id":"cp95dma6al40","created":1671793619506,"text":"第七节政府会计基础★","expandState":"expand"},"children":[{"data":{"id":"cp95dma665s0","created":1671793619506,"text":"政府会计概述(2022)","expandState":"collapse"},"children":[{"data":{"id":"cp95dma6oao0","created":1671793619507,"text":"（二）政府会计的特点"},"children":[{"data":{"id":"cp95dma6qw00","created":1671793619507,"text":"双功能"},"children":[{"data":{"id":"cp95dma6nhc0","created":1671793619507,"text":"①预算会计对政府会计主体预算执行过程中发生的全部预\\n算收入和全部预算支出进行会计核算，主要反映和监督预\\n算收支执行情况 ②财务会计对政府会计主体发生的各项\\n经济业务或事项进行会计核算，主要反映和监督政府会计\\n主体财务状况、运行情况和现金流量等"},"children":[]}]},{"data":{"id":"cp95dma6kwo0","created":1671793619507,"text":"双基础"},"children":[{"data":{"id":"cp95dma6ds00","created":1671793619507,"text":"①预算会计实行收付实现制，国务院另有规定的，从其规\\n定 ②财务会计实行权责发生制"},"children":[]}]},{"data":{"id":"cp95dma6pmw0","created":1671793619507,"text":"双报告"},"children":[{"data":{"id":"cp95dma6d2o0","created":1671793619507,"text":"政府会计主体应编制决算报告和财务报告 ①政府决算报\\n告的编制主要以收付实现制为基础，以预算会计核算生成\\n的数据为准，综合反映政府会计主体预算收支的年度执行\\n结果 ②政府财务报告的编制主要以权责发生制为基础，\\n以财务会计核算生成的数据为准"},"children":[]}]},{"data":{"id":"cp95dma6fu00","created":1671793619507,"text":"双要素"},"children":[{"data":{"id":"cp95dma6ty00","created":1671793619507,"text":"要素1:预算会计要素包括预算收入、预算支出、预算结\\n余。要素2:财务会计要素包括资产、负债、净资产、收\\n入、费用。"},"children":[]}]}]},{"data":{"id":"cp95dma6pcg0","created":1671793619507,"text":"政府会计概念"},"children":[{"data":{"id":"cp95dma6in40","created":1671793619507,"text":"（一）政府会计的概念 政府会计是会计体系的重要分支\\n，它是运用会计专门方法对政府及其组成主体(包括政府\\n所属的行政事 业单位等)的财务状况、运行情况(含运\\n行成本)、现金流量、预算执行等情况进行全面核算、监\\n督和报告。"},"children":[]}]}]},{"data":{"id":"cp95dma6js80","created":1671793619507,"text":"政府会计基本准则","expandState":"collapse"},"children":[{"data":{"id":"cp95dma6y1s0","created":1671793619508,"text":"政府会计改革及目标"},"children":[]},{"data":{"id":"cp95dma73q80","created":1671793619508,"text":"核算模式"},"children":[{"data":{"id":"cp95dma715s0","created":1671793619508,"text":"双功能"},"children":[]},{"data":{"id":"cp95dma7aco0","created":1671793619508,"text":"双基础"},"children":[]},{"data":{"id":"cp95dma6yuw0","created":1671793619508,"text":"双报告"},"children":[]}]},{"data":{"id":"cp95dma7izk0","created":1671793619508,"text":"政府会计标准体系"},"children":[{"data":{"id":"cp95dma7blk0","created":1671793619508,"text":"基本准则"},"children":[]},{"data":{"id":"cp95dma7exs0","created":1671793619508,"text":"政府会计具体准则及应用指南"},"children":[]},{"data":{"id":"cp95dma7i6w0","created":1671793619508,"text":"政府会计制度"},"children":[]}]},{"data":{"id":"cp95dma78vc0","created":1671793619508,"text":"政府财务报告和决算报告"},"children":[{"data":{"id":"cp95dma740w0","created":1671793619508,"text":"政府财务报告"},"children":[]},{"data":{"id":"cp95dma7sk00","created":1671793619509,"text":"政府决算报告"},"children":[]},{"data":{"id":"cp95dma83mo0","created":1671793619509,"text":"政府财务报表"},"children":[]}]},{"data":{"id":"cp95dma7v4w0","created":1671793619509,"text":"政府会计核算模式2022"},"children":[{"data":{"id":"cp95dma7q0w0","created":1671793619509,"text":"预算会计与财务会计适度分离"},"children":[]},{"data":{"id":"cp95dma847c0","created":1671793619509,"text":"预算会计与财务会计相互衔接"},"children":[]}]},{"data":{"id":"cp95dma7p2o0","created":1671793619509,"text":"政府会计要素及其确认和计量2022"},"children":[{"data":{"id":"cp95dma85zk0","created":1671793619510,"text":"政府预算会计要素"},"children":[{"data":{"id":"cp95dma8ly80","created":1671793619510,"text":"预算收入"},"children":[{"data":{"id":"cp95dma8pkw0","created":1671793619510,"text":"一般在实际收到时确认，以实际支付的金额计量"},"children":[]}]},{"data":{"id":"cp95dma8i3c0","created":1671793619510,"text":"预算支出"},"children":[{"data":{"id":"cp95dma8cps0","created":1671793619510,"text":"一般在实际支付时确认，以实际支付的金额计量"},"children":[]}]},{"data":{"id":"cp95dma8l3k0","created":1671793619510,"text":"预算结余"},"children":[{"data":{"id":"cp95dma8o7s0","created":1671793619510,"text":"年度内预算收入扣除预算支出的资金余额，以及历年滚存的资金余额"},"children":[]}]}]},{"data":{"id":"cp95dma8gmo0","created":1671793619510,"text":"政府财务会计要素"},"children":[{"data":{"id":"cp95dma8paw0","created":1671793619510,"text":"资产"},"children":[{"data":{"id":"cp95dma896g0","created":1671793619510,"text":"确认条件同时满足:①经济资源很可能流入;②成本或价\\n值能够可靠 地计量一般采用历史成本，采用重置成本、\\n现值、公允价值计量 的，应保证确定的资产金额能持续\\n、可靠计量， 以上都无法采用的,采用名义金额(即人\\n民币1元)计量"},"children":[]}]},{"data":{"id":"cp95dma8b4w0","created":1671793619510,"text":"负债"},"children":[{"data":{"id":"cp95dma95ds0","created":1671793619511,"text":"确认条件同时满足:①经济资源很可能流出;②金额能够\\n可靠地计量 一般采用历史成本，采用现值、公允价值计\\n量的，应保证确定的债金额能持续、可靠计量"},"children":[]}]},{"data":{"id":"cp95dma8zh40","created":1671793619511,"text":"净资产"},"children":[{"data":{"id":"cp95dma8z7c0","created":1671793619511,"text":"资产扣除负债后的净额，金额取决于资产和负债的计量"},"children":[]}]},{"data":{"id":"cp95dma8ym80","created":1671793619511,"text":"收入"},"children":[{"data":{"id":"cp95dma8u8w0","created":1671793619511,"text":"确认条件同时满足:①经济资源很可能流入;②经济资源\\n的流入会导致资产的增加或负债的减少;③金额能够可靠\\n地计量"},"children":[]}]},{"data":{"id":"cp95dma8qgo0","created":1671793619511,"text":"费用"},"children":[{"data":{"id":"cp95dma8rs00","created":1671793619511,"text":"确认条件同时满足:①经济资源很可能流出；②经济资源\\n的流出会导致资产的减少或负债的增加；③金额能够可靠\\n地计量"},"children":[]}]}]}]}]},{"data":{"id":"cp95dma95mg0","created":1671793619511,"text":"政府单位会计核算","expandState":"collapse"},"children":[{"data":{"id":"cp95dma9axc0","created":1671793619511,"text":"单位会计核算概述"},"children":[]},{"data":{"id":"cp95dma9srk0","created":1671793619512,"text":"单位会计核算要求"},"children":[{"data":{"id":"cp95dma9va80","created":1671793619512,"text":"财务会计核算和预算会计核算"},"children":[{"data":{"id":"cp95dma9wp40","created":1671793619512,"text":"现金收支"},"children":[]}]},{"data":{"id":"cp95dma9kw80","created":1671793619512,"text":"财务会计核算"},"children":[{"data":{"id":"cp95dma9cf40","created":1671793619512,"text":"其他业务"},"children":[]}]}]},{"data":{"id":"cp95dma9kkw0","created":1671793619512,"text":"国库集中支付业务"},"children":[{"data":{"id":"cp95dma9rnc0","created":1671793619512,"text":"财政直接支付业务"},"children":[]},{"data":{"id":"cp95dma9qjk0","created":1671793619512,"text":"财政授权支付业务"},"children":[]}]},{"data":{"id":"cp95dma9k680","created":1671793619512,"text":"非财政拨款收支业务"},"children":[{"data":{"id":"cp95dma9hxs0","created":1671793619512,"text":"事业（预算）收入"},"children":[]},{"data":{"id":"cp95dmaacqo0","created":1671793619513,"text":"捐赠（预算）收入和支出"},"children":[]}]},{"data":{"id":"cp95dmaa2uo0","created":1671793619513,"text":"预算结转结余及分配业务"},"children":[{"data":{"id":"cp95dmaa61s0","created":1671793619513,"text":"财政拨款结转结余的核算"},"children":[]},{"data":{"id":"cp95dmaa7e80","created":1671793619513,"text":"非财政拨款结转结余的核算"},"children":[]}]},{"data":{"id":"cp95dmaa3go0","created":1671793619513,"text":"资产业务"},"children":[{"data":{"id":"cp95dmaa3a80","created":1671793619513,"text":"资产业务的几个共性内容"},"children":[]},{"data":{"id":"cp95dma9yio0","created":1671793619513,"text":"固定资产"},"children":[{"data":{"id":"cp95dmaa8so0","created":1671793619513,"text":"计提"},"children":[]},{"data":{"id":"cp95dmaa2yw0","created":1671793619513,"text":"折旧"},"children":[]}]}]},{"data":{"id":"cp95dmaaa000","created":1671793619513,"text":"净资产业务"},"children":[{"data":{"id":"cp95dmaap9k0","created":1671793619514,"text":"本期盈余及本年盈余分配"},"children":[]},{"data":{"id":"cp95dmaar6o0","created":1671793619514,"text":"专用基金"},"children":[]},{"data":{"id":"cp95dmaalkg0","created":1671793619514,"text":"无偿调拨净资产"},"children":[]},{"data":{"id":"cp95dmab1iw0","created":1671793619514,"text":"权益法调整"},"children":[]},{"data":{"id":"cp95dmaaoa00","created":1671793619514,"text":"以前年度盈余调整"},"children":[]},{"data":{"id":"cp95dmab1aw0","created":1671793619514,"text":"累计盈余"},"children":[]},{"data":{"id":"cp95dmab2vc0","created":1671793619514,"text":"本期盈余"},"children":[]}]},{"data":{"id":"cp95dmaao9c0","created":1671793619514,"text":"负债业务"},"children":[{"data":{"id":"cp95dmaat6g0","created":1671793619514,"text":"应缴财政款（不进行预算会计处理）"},"children":[]},{"data":{"id":"cp95dmabm480","created":1671793619515,"text":"应付职工应酬"},"children":[]}]}]}]}]}]},"template":"default","theme":"fresh-blue","version":"1.4.33"}'
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