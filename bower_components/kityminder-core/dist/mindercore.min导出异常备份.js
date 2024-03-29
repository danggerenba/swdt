/*!
 * ====================================================
 * kityminder - v1.4.33 - 2016-03-19
 * https://github.com/fex-team/kityminder-core
 * GitHub: https://github.com/fex-team/kityminder-core.git
 * Copyright (c) 2016 Baidu FEX; Licensed MIT
 * ====================================================
 */

! function() {
	function a(a) {
		b.r([c[a]])
	}
	var b = {
		r: function(a) {
			if (b[a].inited) return b[a].value;
			if ("function" != typeof b[a].value) return b[a].inited = !0, b[a].value;
			var c = {
				exports: {}
			}, d = b[a].value(null, c.exports, c);
			if (b[a].inited = !0, b[a].value = d, void 0 !== d) return d;
			for (var e in c.exports)
				if (c.exports.hasOwnProperty(e)) return b[a].inited = !0, b[a].value = c.exports, c.exports
		}
	};
	b[0] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(11),
				g = (new e.Marker).pipe(function() {
					var a = 7,
						b = new e.Circle(a - 1);
					this.addShape(b), this.setRef(a - 1, 0).setViewBox(-a, -a, a + a, a + a).setWidth(a).setHeight(a), this.dot = b, this.node.setAttribute("markerUnits", "userSpaceOnUse")
				});
			f.register("arc", function(a, b, c, d, f) {
				var h, i, j, k = a.getLayoutBox(),
					l = b.getLayoutBox(),
					m = Math.abs,
					n = [],
					o = k.x > l.x ? "right" : "left";
				a.getMinder().getPaper().addResource(g), h = new e.Point(l.cx, l.cy), i = "left" == o ? new e.Point(k.right + 2, k.cy) : new e.Point(k.left - 2, k.cy), j = e.Vector.fromPoints(h, i), n.push("M", h), n.push("A", m(j.x), m(j.y), 0, 0, j.x * j.y > 0 ? 0 : 1, i), c.setMarker(g), g.dot.fill(f), c.setPathData(n)
			})
		}
	}, b[1] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(11),
				g = (new e.Marker).pipe(function() {
					var a = 7,
						b = new e.Circle(a - 1);
					this.addShape(b), this.setRef(a - 1, 0).setViewBox(-a, -a, a + a, a + a).setWidth(a).setHeight(a), this.dot = b, this.node.setAttribute("markerUnits", "userSpaceOnUse")
				});
			f.register("arc_tp", function(a, b, c, d, f) {
				var h = a.getLayoutBox(),
					i = b.getLayoutBox(),
					j = a.getIndex(),
					k = b.getChildren()[j + 1];
				a.getIndex() > 0 && (i = b.getChildren()[j - 1].getLayoutBox());
				var l, m, n, o = (Math.abs, []);
				h.x > i.x ? "right" : "left";
				a.getMinder().getPaper().addResource(g), l = new e.Point(i.cx, i.cy), m = new e.Point(h.cx, h.cy);
				var p = Math.sqrt(Math.pow(l.x - m.x, 2) + Math.pow(l.y - m.y, 2));
				if (p = 0 == a.getIndex() ? .4 * p : p, n = e.Vector.fromPoints(l, m), o.push("M", l), o.push("A", p, p, 0, 0, 1, m), c.setMarker(g), g.dot.fill(f), c.setPathData(o), k && k.getConnection()) {
					var q = k.getConnection(),
						r = k.getLayoutBox(),
						s = new e.Point(r.cx, r.cy),
						t = Math.sqrt(Math.pow(m.x - s.x, 2) + Math.pow(m.y - s.y, 2));
					o = [], o.push("M", m), o.push("A", t, t, 0, 0, 1, s), q.setMarker(g), g.dot.fill(f), q.setPathData(o)
				}
			})
		}
	}, b[2] = {
		value: function(a, c, d) {
			var e = (b.r(17), b.r(11));
			e.register("bezier", function(a, b, c) {
				var d = b.getLayoutVertexOut(),
					e = a.getLayoutVertexIn(),
					f = b.getLayoutVectorOut().normalize(),
					g = Math.round,
					h = Math.abs,
					i = [];
				if (i.push("M", g(d.x), g(d.y)), h(f.x) > h(f.y)) {
					var j = (e.x + d.x) / 2;
					i.push("C", j, d.y, j, e.y, e.x, e.y)
				} else {
					var k = (e.y + d.y) / 2;
					i.push("C", d.x, k, e.x, k, e.x, e.y)
				}
				c.setMarker(null), c.setPathData(i)
			})
		}
	}, b[3] = {
		value: function(a, c, d) {
			var e = (b.r(17), b.r(11));
			e.register("fish-bone-master", function(a, b, c) {
				var d = b.getLayoutVertexOut(),
					e = a.getLayoutVertexIn(),
					f = Math.abs,
					g = f(d.y - e.y),
					h = f(d.x - e.x),
					i = [];
				i.push("M", d.x, d.y), i.push("h", h - g), i.push("L", e.x, e.y), c.setMarker(null), c.setPathData(i)
			})
		}
	}, b[4] = {
		value: function(a, c, d) {
			var e = (b.r(17), b.r(11));
			e.register("l", function(a, b, c) {
				var d = b.getLayoutVertexOut(),
					e = a.getLayoutVertexIn(),
					f = b.getLayoutVectorOut(),
					g = [],
					h = Math.round,
					i = Math.abs;
				g.push("M", d.round()), i(f.x) > i(f.y) ? g.push("H", h(e.x)) : g.push("V", e.y), g.push("L", e), c.setPathData(g)
			})
		}
	}, b[5] = {
		value: function(a, c, d) {
			var e = (b.r(17), b.r(11));
			e.register("poly", function(a, b, c, d) {
				var e = b.getLayoutVertexOut(),
					f = a.getLayoutVertexIn(),
					g = b.getLayoutVectorOut().normalize(),
					h = Math.round,
					i = Math.abs,
					j = [];
				switch (j.push("M", h(e.x), h(e.y)), !0) {
					case i(g.x) > i(g.y) && g.x < 0:
						j.push("h", -b.getStyle("margin-left")), j.push("v", f.y - e.y), j.push("H", f.x);
						break;
					case i(g.x) > i(g.y) && g.x >= 0:
						j.push("h", b.getStyle("margin-right")), j.push("v", f.y - e.y), j.push("H", f.x);
						break;
					case i(g.x) <= i(g.y) && g.y < 0:
						j.push("v", -b.getStyle("margin-top")), j.push("h", f.x - e.x), j.push("V", f.y);
						break;
					case i(g.x) <= i(g.y) && g.y >= 0:
						j.push("v", b.getStyle("margin-bottom")), j.push("h", f.x - e.x), j.push("V", f.y)
				}
				c.setMarker(null), c.setPathData(j)
			})
		}
	}, b[6] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(11);
			f.register("under", function(a, b, c, d, f) {
				var g, h, i, j, k = a.getLayoutBox(),
					l = b.getLayoutBox(),
					m = (Math.abs, []),
					n = k.x > l.x ? "right" : "left",
					o = (a.getStyle("connect-radius"), k.bottom + 3),
					p = "sub" == b.getType() ? l.bottom + 3 : l.cy;
				"right" == n ? (g = new e.Point(l.right, p), h = new e.Point(k.left - 10, o), i = new e.Point(k.right, o)) : (g = new e.Point(l.left, p), h = new e.Point(k.right + 10, o), i = new e.Point(k.left, o)), j = (g.x + h.x) / 2, m.push("M", g), m.push("C", j, g.y, j, h.y, h), m.push("L", i), c.setMarker(null), c.setPathData(m)
			})
		}
	}, b[7] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(19);
			if (-1 != location.href.indexOf("boxv")) {
				var g;
				Object.defineProperty(e.Box.prototype, "visualization", {
					get: function() {
						return g ? g.setBox(this) : null
					}
				}), f.registerInitHook(function() {
					this.on("paperrender", function() {
						g = new e.Rect, g.fill("rgba(200, 200, 200, .5)"), g.stroke("orange"), this.getRenderContainer().addShape(g)
					})
				})
			}
		}
	}, b[8] = {
		value: function(a, c, d) {
			var e = b.r(19),
				f = {
					enableAnimation: !0,
					layoutAnimationDuration: 300,
					viewAnimationDuration: 100,
					zoomAnimationDuration: 300
				}, g = {};
			e.registerInitHook(function() {
				this.setDefaultOptions(f), this.getOption("enableAnimation") || this.disableAnimation()
			}), e.prototype.enableAnimation = function() {
				for (var a in f) f.hasOwnProperty(a) && this.setOption(g[a])
			}, e.prototype.disableAnimation = function() {
				for (var a in f) f.hasOwnProperty(a) && (g[a] = this.getOption(a), this.setOption(a, 0))
			}
		}
	}, b[9] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(19)),
				g = (b.r(21), b.r(13)),
				h = 0,
				i = -1,
				j = 1,
				k = e.createClass("Command", {
					constructor: function() {
						this._isContentChange = !0, this._isSelectionChange = !1
					},
					execute: function(a, b) {
						throw new Error("Not Implement: Command.execute()")
					},
					setContentChanged: function(a) {
						this._isContentChange = !! a
					},
					isContentChanged: function() {
						return this._isContentChange
					},
					setSelectionChanged: function(a) {
						this._isSelectionChange = !! a
					},
					isSelectionChanged: function() {
						return this._isContentChange
					},
					queryState: function(a) {
						return h
					},
					queryValue: function(a) {
						return 0
					},
					isNeedUndo: function() {
						return !0
					}
				});
			k.STATE_NORMAL = h, k.STATE_ACTIVE = j, k.STATE_DISABLED = i, e.extendClass(f, {
				_getCommand: function(a) {
					return this._commands[a.toLowerCase()]
				},
				_queryCommand: function(a, b, c) {
					var d = this._getCommand(a);
					if (d) {
						var e = d["query" + b];
						if (e) return e.apply(d, [this].concat(c))
					}
					return 0
				},
				queryCommandState: function(a) {
					return this._queryCommand(a, "State", [].slice.call(arguments, 1))
				},
				queryCommandValue: function(a) {
					return this._queryCommand(a, "Value", [].slice.call(arguments, 1))
				},
				execCommand: function(a) {
					if (!a) return null;
					a = a.toLowerCase();
					var b, c, d, e, f = [].slice.call(arguments, 1),
						h = this;
					return b = this._getCommand(a), e = {
						command: b,
						commandName: a.toLowerCase(),
						commandArgs: f
					}, b && ~this.queryCommandState(a) ? (this._hasEnterExecCommand ? (d = b.execute.apply(b, [h].concat(f)), this._hasEnterExecCommand || this._interactChange()) : (this._hasEnterExecCommand = !0, c = this._fire(new g("beforeExecCommand", e, !0)), c || (this._fire(new g("preExecCommand", e, !1)), d = b.execute.apply(b, [h].concat(f)), this._fire(new g("execCommand", e, !1)), b.isContentChanged() && this._firePharse(new g("contentchange")), this._interactChange()), this._hasEnterExecCommand = !1), void 0 === d ? null : d) : !1
				}
			}), d.exports = k
		}
	}, b[10] = {
		value: function(a, c, d) {
			function e(a) {
				var b = a.version || (a.root ? "1.4.0" : "1.1.3");
				switch (b) {
					case "1.1.3":
						h(a);
					case "1.2.0":
					case "1.2.1":
						g(a);
					case "1.3.0":
					case "1.3.1":
					case "1.3.2":
					case "1.3.3":
					case "1.3.4":
					case "1.3.5":
						i(a)
				}
				return a
			}

			function f(a, b) {
				b(a), a.children && a.children.forEach(function(a) {
					f(a, b)
				})
			}

			function g(a) {
				f(a, function(a) {
					var b = a.data;
					delete b.layout_bottom_offset, delete b.layout_default_offset, delete b.layout_filetree_offset
				})
			}

			function h(a) {
				var b = a.data.currentstyle;
				delete a.data.currentstyle, "bottom" == b ? (a.template = "structure", a.theme = "snow") : "default" == b && (a.template = "default", a.theme = "classic"), f(a, function(a) {
					var b = a.data;
					"PriorityIcon" in b && (b.priority = b.PriorityIcon, delete b.PriorityIcon), "ProgressIcon" in b && (b.progress = 1 + (b.ProgressIcon - 1 << 1), delete b.ProgressIcon), delete b.point, delete b.layout
				})
			}

			function i(a) {
				a.root = {
					data: a.data,
					children: a.children
				}, delete a.data, delete a.children
			}
			b.r(33);
			return e
		}
	}, b[11] = {
		value: function(a, c, d) {
			function e(a, b) {
				k[a] = b
			}
			var f = b.r(17),
				g = b.r(33),
				h = b.r(20),
				i = b.r(19),
				j = b.r(21),
				k = {};
			e("default", function(a, b, c) {
				c.setPathData(["M", b.getLayoutVertexOut(), "L", a.getLayoutVertexIn()])
			}), f.extendClass(j, {
				getConnect: function() {
					return this.data.connect || "default"
				},
				getConnectProvider: function() {
					return k[this.getConnect()] || k["default"]
				},
				getConnection: function() {
					return this._connection || null
				}
			}), f.extendClass(i, {
				getConnectContainer: function() {
					return this._connectContainer
				},
				createConnect: function(a) {
					if (!a.isRoot()) {
						var b = new f.Path;
						a._connection = b, this._connectContainer.addShape(b), this.updateConnect(a)
					}
				},
				removeConnect: function(a) {
					var b = this;
					a.traverse(function(a) {
						b._connectContainer.removeShape(a._connection), a._connection = null
					})
				},
				updateConnect: function(a) {
					var b = a._connection,
						c = a.parent;
					if (c && b) {
						if (c.isCollapsed()) return void b.setVisible(!1);
						b.setVisible(!0);
						var d = a.getConnectProvider(),
							e = a.getStyle("connect-color") || "white",
							f = a.getStyle("connect-width") || 2;
						b.stroke(e, f), d(a, c, b, f, e), f % 2 === 0 ? b.setTranslate(.5, .5) : b.setTranslate(0, 0)
					}
				}
			}), h.register("Connect", {
				init: function() {
					this._connectContainer = (new f.Group).setId(g.uuid("minder_connect_group")), this.getRenderContainer().prependShape(this._connectContainer)
				},
				events: {
					nodeattach: function(a) {
						this.createConnect(a.node)
					},
					nodedetach: function(a) {
						this.removeConnect(a.node)
					},
					"layoutapply layoutfinish noderender": function(a) {
						this.updateConnect(a.node)
					}
				}
			}), c.register = e
		}
	}, b[12] = {
		value: function(a, c, d) {
			function e(a, b) {
				l[a] = b;
				for (var c in l) l.hasOwnProperty(c) && (l[c] = l[c], l[c].name = c)
			}

			function f(a) {
				return void 0 === a ? l : l[a] || null
			}
			var g = b.r(17),
				h = (b.r(33), b.r(19)),
				i = (b.r(21), b.r(13)),
				j = b.r(10),
				k = b.r(25),
				l = {};
			c.registerProtocol = e, c.getRegisterProtocol = f, g.extendClass(h, {
				setup: function(a) {
					if ("string" == typeof a && (a = document.querySelector(a)), a) {
						var b = a.getAttribute("minder-data-type");
						if (b in l) {
							var c = a.textContent;
							a.textContent = null, this.renderTo(a), this.importData(b, c)
						}
						return this
					}
				},
				exportJsondata: function() {
					function a(b) {
						var c = {};
						c.data = b.getData();
						var d = b.getChildren();
						c.children = [];
						for (var e = 0; e < d.length; e++) c.children.push(a(d[e]));
						// console.log()
						return c
					}
					var b = {
						root: a(this.getRoot())
					};
					// console.log(b)
					b.template = this.getTemplate();
					b.theme = this.getTheme();
					b.version = h.version;
					// alert(1)
					// console.log(JSON.stringify(json))
					// console.log(JSON.parse(JSON.stringify(json)));
					// return JSON.parse(JSON.stringify(json));
					// var datajson=encrypt(JSON.stringify(b)))
					return JSON.parse(JSON.stringify(b));

					// $("#parent *").click(function(e){
					//      if(e.target == $("#dianji")[0]){


					//      }else{
					//      	return 'xx'
					//      }

					//  });


				},


				// 	function encrypt(str){
				// 	let newStr = '';
				// 	for (let i = 0; i < str.length; i++) {
				// 		newStr += String.fromCharCode(str.charCodeAt(i) + 1);
				// 	}
				// 	return newStr;
				// }

				Text2Children: function(a, b) {
					function c(a) {
						return "" === a && !/\S/.test(a)
					}

					function d(a) {
						return {
							data: {
								text: a.replace(/^(\t|\x20{4})+/, "").replace(/(\t|\x20{4})+$/, "")
							},
							children: []
						}
					}

					function e(a) {
						for (var b = 0; m.test(a);) a = a.replace(m, ""), b++;
						return b
					}

					function f(a, b) {
						a.children.push(b)
					}

					function g(a, b) {
						for (var c = 0, d = b.length; d > c; c++) {
							var e = q.createNode(null, a);
							e.setData("text", b[c].data.text || ""), g(e, b[c].children)
						}
					}
					if (a instanceof kityminder.Node) {
						for (var h, i = [], j = {}, k = 0, l = /\r|\n|\r\n/, m = /^(\t|\x20{4})/, n = b.split(l), o = "", p = 0, q = this; void 0 !== (o = n[p++]);)
							if (o = o.replace(/&nbsp;/g, ""), !c(o))
								if (k = e(o), h = d(o), 0 === k) j = {}, i.push(h), j[0] = i[i.length - 1];
								else {
									if (!j[k - 1]) throw new Error("Invalid local format");
									f(j[k - 1], h), j[k] = h
								}
						g(a, i), q.refresh()
					}
				},
				exportNode: function(a) {
					var b = {};
					b.data = a.getData();
					var c = a.getChildren();
					b.children = [];
					for (var d = 0; d < c.length; d++) b.children.push(this.exportNode(c[d]));
					return b
				},
				importNode: function(a, b) {
					var c = b.data;
					a.data = {};
					for (var d in c) a.setData(d, c[d]);
					for (var e = b.children || [], f = 0; f < e.length; f++) {
						var g = this.createNode(null, a);
						this.importNode(g, e[f])
					}
					return a
				},
				importJson: function(a) {
					if (a) {
						for (this._fire(new i("preimport", null, !1)); this._root.getChildren().length;) this.removeNode(this._root.getChildren()[0]);
						return a = j(a), this.importNode(this._root, a.root), this.setTemplate(a.template || "default"), this.setTheme(a.theme || null), this.refresh(), this.fire("import"), this._firePharse({
							type: "contentchange"
						}), this._interactChange(), this
					}
				},
				exportData: function(a, b) {
					var c, d;
					return c = this.exportJsondata(), !a || (d = l[a], d && d.encode) ? (this._fire(new i("beforeexport", {
						json: c,
						protocolName: a,
						protocol: d
					})), k.resolve(d.encode(c, this, b))) : k.reject(new Error("Not supported protocol:" + a))
				},
				importData: function(a, b, c) {
					var d, e = this;
					if (a && (d = l[a], !d || !d.decode)) return k.reject(new Error("Not supported protocol:" + a));
					var f = {
						local: b,
						protocolName: a,
						protocol: d
					};
					return this._fire(new i("beforeimport", f)), k.resolve(d.decode(b, this, c)).then(function(a) {
						return e.importJson(a), a
					})
				},
				decodeData: function(a, b, c) {
					var d;
					if (a && (d = l[a], !d || !d.decode)) return k.reject(new Error("Not supported protocol:" + a));
					var e = {
						local: b,
						protocolName: a,
						protocol: d
					};
					return this._fire(new i("beforeimport", e)), k.resolve(d.decode(b, this, c))
				}
			})
		}
	}, b[13] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(19)),
				g = e.createClass("MindEvent", {
					constructor: function(a, b, c) {
						b = b || {}, b.getType && "ShapeEvent" == b.getType() ? (this.kityEvent = b, this.originEvent = b.originEvent) : b.target && b.preventDefault ? this.originEvent = b : e.Utils.extend(this, b), this.type = a, this._canstop = c || !1
					},
					getPosition: function(a) {
						return this.kityEvent ? a && "minder" != a ? this.kityEvent.getPosition.call(this.kityEvent, a) : this.kityEvent.getPosition(this.minder.getRenderContainer()) : void 0
					},
					getTargetNode: function() {
						var a = this.kityEvent && this.kityEvent.targetShape;
						if (!a) return null;
						for (; !a.minderNode && a.container;) a = a.container;
						var b = a.minderNode;
						return b && a.getOpacity() < 1 ? null : b || null
					},
					stopPropagation: function() {
						this._stoped = !0
					},
					stopPropagationImmediately: function() {
						this._immediatelyStoped = !0, this._stoped = !0
					},
					shouldStopPropagation: function() {
						return this._canstop && this._stoped
					},
					shouldStopPropagationImmediately: function() {
						return this._canstop && this._immediatelyStoped
					},
					preventDefault: function() {
						this.originEvent.preventDefault()
					},
					isRightMB: function() {
						var a = !1;
						return this.originEvent ? ("which" in this.originEvent ? a = 3 == this.originEvent.which : "button" in this.originEvent && (a = 2 == this.originEvent.button), a) : !1
					},
					getKeyCode: function() {
						var a = this.originEvent;
						return a.keyCode || a.which
					}
				});
			f.registerInitHook(function(a) {
				this._initEvents()
			}), e.extendClass(f, {
				_initEvents: function() {
					this._eventCallbacks = {}
				},
				_resetEvents: function() {
					this._initEvents(), this._bindEvents()
				},
				_bindEvents: function() {
					this._paper.on("click dblclick mousedown contextmenu mouseup mousemove mouseover mousewheel DOMMouseScroll touchstart touchmove touchend dragenter dragleave drop", this._firePharse.bind(this)), window && window.addEventListener("resize", this._firePharse.bind(this))
				},
				dispatchKeyEvent: function(a) {
					this._firePharse(a)
				},
				_firePharse: function(a) {
					var b, c, d;
					"DOMMouseScroll" == a.type && (a.type = "mousewheel", a.wheelDelta = a.originEvent.wheelDelta = -10 * a.originEvent.detail, a.wheelDeltaX = a.originEvent.mozMovementX, a.wheelDeltaY = a.originEvent.mozMovementY), b = new g("before" + a.type, a, !0), this._fire(b) || (c = new g("pre" + a.type, a, !0), d = new g(a.type, a, !0), (this._fire(c) || this._fire(d)) && this._fire(new g("after" + a.type, a, !1)))
				},
				_interactChange: function(a) {
					var b = this;
					b._interactScheduled || (setTimeout(function() {
						b._fire(new g("interactchange")), b._interactScheduled = !1
					}, 100), b._interactScheduled = !0)
				},
				_listen: function(a, b) {
					var c = this._eventCallbacks[a] || (this._eventCallbacks[a] = []);
					c.push(b)
				},
				_fire: function(a) {
					a.minder = this;
					var b = this.getStatus(),
						c = this._eventCallbacks[a.type.toLowerCase()] || [];
					if (b && (c = c.concat(this._eventCallbacks[b + "." + a.type.toLowerCase()] || [])), 0 !== c.length) {
						for (var d = (this.getStatus(), 0); d < c.length && (c[d].call(this, a), !a.shouldStopPropagationImmediately()); d++);
						return a.shouldStopPropagation()
					}
				},
				on: function(a, b) {
					var c = this;
					return a.split(/\s+/).forEach(function(a) {
						c._listen(a.toLowerCase(), b)
					}), this
				},
				off: function(a, b) {
					var c, d, e, f, g = a.split(/\s+/);
					for (c = 0; c < g.length; c++)
						if (e = this._eventCallbacks[g[c].toLowerCase()]) {
							for (f = null, d = 0; d < e.length; d++) e[d] == b && (f = d);
							null !== f && e.splice(f, 1)
						}
				},
				fire: function(a, b) {
					var c = new g(a, b);
					return this._fire(c), this
				}
			}), d.exports = g
		}
	}, b[14] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(19);
			f.registerInitHook(function() {
				this.on("beforemousedown", function(a) {
					this.focus(), a.preventDefault()
				}), this.on("paperrender", function() {
					this.focus()
				})
			}), e.extendClass(f, {
				focus: function() {
					if (!this.isFocused()) {
						var a = this._renderTarget;
						a.classList.add("focus"), this.renderNodeBatch(this.getSelectedNodes())
					}
					return this.fire("focus"), this
				},
				blur: function() {
					if (this.isFocused()) {
						var a = this._renderTarget;
						a.classList.remove("focus"), this.renderNodeBatch(this.getSelectedNodes())
					}
					return this.fire("blur"), this
				},
				isFocused: function() {
					var a = this._renderTarget;
					return a && a.classList.contains("focus")
				}
			})
		}
	}, b[15] = {
		value: function(a, b, c) {
			var d = {
				Backspace: 8,
				Tab: 9,
				Enter: 13,
				Shift: 16,
				Control: 17,
				Alt: 18,
				CapsLock: 20,
				Esc: 27,
				Spacebar: 32,
				PageUp: 33,
				PageDown: 34,
				End: 35,
				Home: 36,
				Insert: 45,
				Left: 37,
				Up: 38,
				Right: 39,
				Down: 40,
				direction: {
					37: 1,
					38: 1,
					39: 1,
					40: 1
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
				".": 190,
				controlKeys: {
					16: 1,
					17: 1,
					18: 1,
					20: 1,
					91: 1,
					224: 1
				},
				notContentChange: {
					13: 1,
					9: 1,
					33: 1,
					34: 1,
					35: 1,
					36: 1,
					16: 1,
					17: 1,
					18: 1,
					20: 1,
					91: 1,
					37: 1,
					38: 1,
					39: 1,
					40: 1,
					113: 1,
					114: 1,
					115: 1,
					144: 1,
					27: 1
				},
				isSelectedNodeKey: {
					37: 1,
					38: 1,
					39: 1,
					40: 1,
					13: 1,
					9: 1
				}
			};
			for (var e in d) d.hasOwnProperty(e) && (d[e.toLowerCase()] = d[e]);
			var f = 65,
				g = "a".charCodeAt(0);
			"abcdefghijklmnopqrstuvwxyz".split("").forEach(function(a) {
				d[a] = f + (a.charCodeAt(0) - g)
			});
			var h = 9;
			do d[h.toString()] = h + 48; while (--h);
			c.exports = d
		}
	}, b[16] = {
		value: function(a, c, d) {
			function e(a, b, c) {
				b.split(" ").forEach(function(b) {
					a.addEventListener(b, c, !1)
				})
			}
			var f = b.r(17),
				g = (b.r(33), b.r(19));
			g.registerInitHook(function(a) {
				this.setDefaultOptions({
					enableKeyReceiver: !0
				}), this.getOption("enableKeyReceiver") && this.on("paperrender", function() {
					this._initKeyReceiver()
				})
			}), f.extendClass(g, {
				_initKeyReceiver: function() {
					if (!this._keyReceiver) {
						var a = this._keyReceiver = document.createElement("input");
						a.classList.add("km-receiver");
						var b = this._renderTarget;
						b.appendChild(a);
						var c = this;
						e(a, "keydown keyup keypress copy paste blur focus input", function(b) {
							switch (b.type) {
								case "blur":
									c.blur();
									break;
								case "focus":
									c.focus();
									break;
								case "input":
									a.value = null
							}
							c._firePharse(b), b.preventDefault()
						}), this.on("focus", function() {
							a.select(), a.focus()
						}), this.on("blur", function() {
							a.blur()
						}), this.isFocused() && (a.select(), a.focus())
					}
				}
			})
		}
	}, b[17] = {
		value: function(a, b, c) {
			c.exports = window.kity
		}
	}, b[18] = {
		value: function(a, c, d) {
			function e(a, b) {
				k[a] = b, f = f || a
			}
			var f, g = b.r(17),
				h = b.r(33),
				i = b.r(19),
				j = b.r(21),
				k = (b.r(13), b.r(9), {}),
				l = g.createClass("Layout", {
					doLayout: function(a, b) {
						throw new Error("Not Implement: Layout.doLayout()")
					},
					align: function(a, b, c) {
						var d = this;
						c = c || 0, a.forEach(function(a) {
							var e = d.getTreeBox([a]),
								f = a.getLayoutTransform();
							switch (b) {
								case "left":
									return f.translate(c - e.left, 0);
								case "right":
									return f.translate(c - e.right, 0);
								case "top":
									return f.translate(0, c - e.top);
								case "bottom":
									return f.translate(0, c - e.bottom)
							}
						})
					},
					stack: function(a, b, c) {
						var d = this,
							e = 0;
						return c = c || function(a, b, c) {
							return a.getStyle({
								x: "margin-right",
								y: "margin-bottom"
							}[c]) + b.getStyle({
								x: "margin-left",
								y: "margin-top"
							}[c])
						}, a.forEach(function(a, f, g) {
							var h = d.getTreeBox([a]),
								i = {
									x: h.width,
									y: h.height
								}[b],
								j = {
									x: h.left,
									y: h.top
								}[b],
								k = a.getLayoutTransform();
							"x" == b ? k.translate(e - j, 0) : k.translate(0, e - j), e += i, g[f + 1] && (e += c(a, g[f + 1], b))
						}), e
					},
					move: function(a, b, c) {
						a.forEach(function(a) {
							a.getLayoutTransform().translate(b, c)
						})
					},
					getBranchBox: function(a) {
						var b, c, d, e, f = new g.Box;
						for (b = 0; b < a.length; b++) c = a[b], d = c.getLayoutTransform(), e = c.getContentBox(), f = f.merge(d.transformBox(e));
						return f
					},
					getTreeBox: function(a) {
						var b, c, d, e, f = new g.Box;
						for (a instanceof Array || (a = [a]), b = 0; b < a.length; b++) c = a[b], d = c.getLayoutTransform(), e = c.getContentBox(), c.isExpanded() && c.children.length && (e = e.merge(this.getTreeBox(c.children))), f = f.merge(d.transformBox(e));
						return f
					},
					getOrderHint: function(a) {
						return []
					}
				});
			l.register = e, i.registerInitHook(function(a) {
				this.refresh()
			}), h.extend(i, {
				getLayoutList: function() {
					return k
				},
				getLayoutInstance: function(a) {
					var b = k[a];
					if (!b) throw new Error("Missing Layout: " + a);
					var c = new b;
					return c
				}
			}), g.extendClass(j, {
				getLayout: function() {
					var a = this.getData("layout");
					return a = a || (this.isRoot() ? f : this.parent.getLayout())
				},
				setLayout: function(a) {
					return a && ("inherit" == a ? this.setData("layout") : this.setData("layout", a)), this
				},
				layout: function(a) {
					return this.setLayout(a).getMinder().layout(), this
				},
				getLayoutInstance: function() {
					return i.getLayoutInstance(this.getLayout())
				},
				getOrderHint: function(a) {
					return this.parent.getLayoutInstance().getOrderHint(this)
				},
				getLayoutTransform: function() {
					return this._layoutTransform || new g.Matrix
				},
				getGlobalLayoutTransformPreview: function() {
					var a = this.parent ? this.parent.getLayoutTransform() : new g.Matrix,
						b = this.getLayoutTransform(),
						c = this.getLayoutOffset();
					return c && (b = b.clone().translate(c.x, c.y)), a.merge(b)
				},
				getLayoutPointPreview: function() {
					return this.getGlobalLayoutTransformPreview().transformPoint(new g.Point)
				},
				getGlobalLayoutTransform: function() {
					return this._globalLayoutTransform ? this._globalLayoutTransform : this.parent ? this.parent.getGlobalLayoutTransform() : new g.Matrix
				},
				setLayoutTransform: function(a) {
					return this._layoutTransform = a, this
				},
				setGlobalLayoutTransform: function(a) {
					return this.getRenderContainer().setMatrix(this._globalLayoutTransform = a), this
				},
				setVertexIn: function(a) {
					this._vertexIn = a
				},
				setVertexOut: function(a) {
					this._vertexOut = a
				},
				getVertexIn: function() {
					return this._vertexIn || new g.Point
				},
				getVertexOut: function() {
					return this._vertexOut || new g.Point
				},
				getLayoutVertexIn: function() {
					return this.getGlobalLayoutTransform().transformPoint(this.getVertexIn())
				},
				getLayoutVertexOut: function() {
					return this.getGlobalLayoutTransform().transformPoint(this.getVertexOut())
				},
				setLayoutVectorIn: function(a) {
					return this._layoutVectorIn = a, this
				},
				setLayoutVectorOut: function(a) {
					return this._layoutVectorOut = a, this
				},
				getLayoutVectorIn: function() {
					return this._layoutVectorIn || new g.Vector
				},
				getLayoutVectorOut: function() {
					return this._layoutVectorOut || new g.Vector
				},
				getLayoutBox: function() {
					var a = this.getGlobalLayoutTransform();
					return a.transformBox(this.getContentBox())
				},
				getLayoutPoint: function() {
					var a = this.getGlobalLayoutTransform();
					return a.transformPoint(new g.Point)
				},
				getLayoutOffset: function() {
					if (!this.parent) return new g.Point;
					var a = this.getData("layout_" + this.parent.getLayout() + "_offset");
					return a ? new g.Point(a.x, a.y) : new g.Point
				},
				setLayoutOffset: function(a) {
					return this.parent ? (this.setData("layout_" + this.parent.getLayout() + "_offset", a ? {
						x: a.x,
						y: a.y
					} : void 0), this) : this
				},
				hasLayoutOffset: function() {
					return !!this.getData("layout_" + this.parent.getLayout() + "_offset")
				},
				resetLayoutOffset: function() {
					return this.setLayoutOffset(null)
				},
				getLayoutRoot: function() {
					return this.isLayoutRoot() ? this : this.parent.getLayoutRoot()
				},
				isLayoutRoot: function() {
					return this.getData("layout") || this.isRoot()
				}
			}), g.extendClass(i, {
				layout: function() {
					function a(b, c) {
						b.isExpanded(), 0 || b.children.forEach(function(b) {
							a(b, c)
						});
						var d = b.getLayoutInstance();
						d.doLayout(b, b.getChildren(), c)
					}
					var b = this.getOption("layoutAnimationDuration");
					this.getRoot().traverse(function(a) {
						a.setLayoutTransform(null)
					}), a(this.getRoot(), 1), a(this.getRoot(), 2);
					var c = this;
					return this.applyLayoutResult(this.getRoot(), b, function() {
						setTimeout(function() {
							c.fire("layoutallfinish")
						}, 0)
					}), this.fire("layout")
				},
				refresh: function() {
					return this.getRoot().renderTree(), this.layout().fire("contentchange")._interactChange(), this
				},
				applyLayoutResult: function(a, b, c) {
					function d() {
						--i || c && c()
					}

					function e(a, b) {
						a.setGlobalLayoutTransform(b), h.fire("layoutapply", {
							node: a,
							matrix: b
						})
					}

					function f(a, c) {
						var i = a.getLayoutTransform().merge(c.clone()),
							j = a.getGlobalLayoutTransform() || new g.Matrix,
							k = a.getLayoutOffset();
						i.translate(k.x, k.y), i.m.e = Math.round(i.m.e), i.m.f = Math.round(i.m.f), a._layoutTimeline && (a._layoutTimeline.stop(), a._layoutTimeline = null), b ? a._layoutTimeline = new g.Animator(j, i, e).start(a, b, "ease").on("finish", function() {
							setTimeout(function() {
								e(a, i), h.fire("layoutfinish", {
									node: a,
									matrix: i
								}), d()
							}, 150)
						}) : (e(a, i), h.fire("layoutfinish", {
							node: a,
							matrix: i
						}), d());
						for (var l = 0; l < a.children.length; l++) f(a.children[l], i)
					}
					a = a || this.getRoot();
					var h = this,
						i = a.getComplex();
					return i > 200 && (b = 0), f(a, a.parent ? a.parent.getGlobalLayoutTransform() : new g.Matrix), this
				}
			}), d.exports = l
		}
	}, b[19] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(33),
				g = [],
				h = e.createClass("Minder", {
					constructor: function(a) {
						this._options = f.extend({}, a);
						for (var b, c = g.slice(); c.length;) b = c.shift(), "function" == typeof b && b.call(this, this._options);
						this.fire("finishInitHook")
					}
				});
			h.version = "1.4.33", h.registerInitHook = function(a) {
				g.push(a)
			}, d.exports = h
		}
	}, b[20] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(33),
				g = b.r(19),
				h = {};
			c.register = function(a, b) {
				h[a] = b
			}, g.registerInitHook(function() {
				this._initModules()
			}), e.extendClass(g, {
				_initModules: function() {
					var a = h,
						b = this._options.modules || f.keys(a);
					this._commands = {}, this._query = {}, this._modules = {}, this._rendererClasses = {};
					var c, d, e, g, i, j, k, l = this;
					for (c = 0; c < b.length; c++)
						if (d = b[c], a[d] && (g = "function" == typeof a[d] ? a[d].call(l) : a[d], this._modules[d] = g, g)) {
							g.defaultOptions && l.setDefaultOptions(g.defaultOptions), g.init && g.init.call(l, this._options), i = g.commands;
							for (d in i) this._commands[d.toLowerCase()] = new i[d];
							if (j = g.events)
								for (e in j) l.on(e, j[e]);
							if (k = g.renderers)
								for (e in k) this._rendererClasses[e] = this._rendererClasses[e] || [], f.isArray(k[e]) ? this._rendererClasses[e] = this._rendererClasses[e].concat(k[e]) : this._rendererClasses[e].push(k[e]);
							g.commandShortcutKeys && this.addCommandShortcutKeys(g.commandShortcutKeys)
						}
				},
				_garbage: function() {
					for (this.clearSelect(); this._root.getChildren().length;) this._root.removeChild(0)
				},
				destroy: function() {
					var a = this._modules;
					this._resetEvents(), this._garbage();
					for (var b in a) a[b].destroy && a[b].destroy.call(this)
				},
				reset: function() {
					var a = this._modules;
					this._garbage();
					for (var b in a) a[b].reset && a[b].reset.call(this)
				}
			})
		}
	}, b[21] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(33),
				g = b.r(19),
				h = e.createClass("MinderNode", {
					constructor: function(a) {
						this.parent = null, this.root = this, this.children = [], this.data = {
							id: f.guid(),
							created: +new Date
						}, this.initContainers(), f.isString(a) ? this.setText(a) : f.isObject(a) && f.extend(this.data, a)
					},
					initContainers: function() {
						this.rc = (new e.Group).setId(f.uuid("minder_node")), this.rc.minderNode = this
					},
					isRoot: function() {
						return this.root === this
					},
					isLeaf: function() {
						return 0 === this.children.length
					},
					getRoot: function() {
						return this.root || this
					},
					getParent: function() {
						return this.parent
					},
					getSiblings: function() {
						var a = this.parent.children,
							b = [],
							c = this;
						return a.forEach(function(a) {
							a != c && b.push(a)
						}), b
					},
					getLevel: function() {
						for (var a = 0, b = this.parent; b;) a++, b = b.parent;
						return a
					},
					getComplex: function() {
						var a = 0;
						return this.traverse(function() {
							a++
						}), a
					},
					getType: function(a) {
						return this.type = ["root", "main", "sub"][Math.min(this.getLevel(), 2)], this.type
					},
					isAncestorOf: function(a) {
						for (var b = a.parent; b;) {
							if (b == this) return !0;
							b = b.parent
						}
						return !1
					},
					getData: function(a) {
						return a ? this.data[a] : this.data
					},
					setData: function(a, b) {
						if ("object" == typeof a) {
							var c = a;
							for (a in c) c.hasOwnProperty(a) && (this.data[a] = c[a])
						} else this.data[a] = b;
						return this
					},
					setText: function(a) {
						return this.data.text = a
					},
					getText: function() {
						return this.data.text || null
					},
					preTraverse: function(a, b) {
						var c = this.getChildren();
						b || a(this);
						for (var d = 0; d < c.length; d++) c[d].preTraverse(a)
					},
					postTraverse: function(a, b) {
						for (var c = this.getChildren(), d = 0; d < c.length; d++) c[d].postTraverse(a);
						b || a(this)
					},
					traverse: function(a, b) {
						return this.postTraverse(a, b)
					},
					getChildren: function() {
						return this.children
					},
					getIndex: function() {
						return this.parent ? this.parent.children.indexOf(this) : -1
					},
					insertChild: function(a, b) {
						void 0 === b && (b = this.children.length), a.parent && a.parent.removeChild(a), a.parent = this, a.root = this.root, this.children.splice(b, 0, a)
					},
					appendChild: function(a) {
						return this.insertChild(a)
					},
					prependChild: function(a) {
						return this.insertChild(a, 0)
					},
					removeChild: function(a) {
						var b, c = a;
						a instanceof h && (c = this.children.indexOf(a)), c >= 0 && (b = this.children.splice(c, 1)[0], b.parent = null, b.root = b)
					},
					clearChildren: function() {
						this.children = []
					},
					getChild: function(a) {
						return this.children[a]
					},
					getRenderContainer: function() {
						return this.rc
					},
					getCommonAncestor: function(a) {
						return h.getNodeCommonAncestor(this, a)
					},
					contains: function(a) {
						return this == a || this.isAncestorOf(a)
					},
					clone: function() {
						var a = new h;
						return a.data = f.clone(this.data), this.children.forEach(function(b) {
							a.appendChild(b.clone())
						}), a
					},
					compareTo: function(a) {
						if (!f.comparePlainObject(this.data, a.data)) return !1;
						if (!f.comparePlainObject(this.temp, a.temp)) return !1;
						if (this.children.length != a.children.length) return !1;
						for (var b = 0; this.children[b];) {
							if (!this.children[b].compareTo(a.children[b])) return !1;
							b++
						}
						return !0
					},
					getMinder: function() {
						return this.getRoot().minder
					}
				});
			h.getCommonAncestor = function(a, b) {
				if (a instanceof Array) return h.getCommonAncestor.apply(this, a);
				switch (arguments.length) {
					case 1:
						return a.parent || a;
					case 2:
						if (a.isAncestorOf(b)) return a;
						if (b.isAncestorOf(a)) return b;
						for (var c = a.parent; c && !c.isAncestorOf(b);) c = c.parent;
						return c;
					default:
						return Array.prototype.reduce.call(arguments, function(a, b) {
							return h.getCommonAncestor(a, b)
						}, a)
				}
			}, e.extendClass(g, {
				getRoot: function() {
					return this._root
				},
				setRoot: function(a) {
					this._root = a, a.minder = this
				},
				getAllNode: function() {
					var a = [];
					return this.getRoot().traverse(function(b) {
						a.push(b)
					}), a
				},
				getNodeById: function(a) {
					return this.getNodesById([a])[0]
				},
				getNodesById: function(a) {
					var b = this.getAllNode(),
						c = [];
					return b.forEach(function(b) {
						-1 != a.indexOf(b.getData("id")) && c.push(b)
					}), c
				},
				createNode: function(a, b, c) {
					var d = new h(a);
					return this.fire("nodecreate", {
						node: d,
						parent: b,
						index: c
					}), this.appendNode(d, b, c), d
				},
				appendNode: function(a, b, c) {
					return b && b.insertChild(a, c), this.attachNode(a), this
				},
				removeNode: function(a) {
					a.parent && (a.parent.removeChild(a), this.detachNode(a), this.fire("noderemove", {
						node: a
					}))
				},
				attachNode: function(a) {
					var b = this.getRenderContainer();
					a.traverse(function(a) {
						a.attached = !0, b.addShape(a.getRenderContainer())
					}), b.addShape(a.getRenderContainer()), this.fire("nodeattach", {
						node: a
					})
				},
				detachNode: function(a) {
					var b = this.getRenderContainer();
					a.traverse(function(a) {
						a.attached = !1, b.removeShape(a.getRenderContainer())
					}), this.fire("nodedetach", {
						node: a
					})
				},
				getMinderTitle: function() {
					return this.getRoot().getText()
				}
			}), d.exports = h
		}
	}, b[22] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(33),
				g = b.r(19);
			g.registerInitHook(function(a) {
				this._defaultOptions = {}
			}), e.extendClass(g, {
				setDefaultOptions: function(a) {
					return f.extend(this._defaultOptions, a), this
				},
				getOption: function(a) {
					return a ? a in this._options ? this._options[a] : this._defaultOptions[a] : f.extend({}, this._defaultOptions, this._options)
				},
				setOption: function(a, b) {
					this._options[a] = b
				}
			})
		}
	}, b[23] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(33),
				g = b.r(19);
			g.registerInitHook(function() {
				this._initPaper()
			}), e.extendClass(g, {
				_initPaper: function() {
					this._paper = new e.Paper, this._paper._minder = this, this._paper.getNode().ondragstart = function(a) {
						a.preventDefault()
					}, this._paper.shapeNode.setAttribute("transform", "translate(0.5, 0.5)"), this._addRenderContainer(), this.setRoot(this.createNode()), this._options.renderTo && this.renderTo(this._options.renderTo)
				},
				_addRenderContainer: function() {
					this._rc = (new e.Group).setId(f.uuid("minder")), this._paper.addShape(this._rc)
				},
				renderTo: function(a) {
					if ("string" == typeof a && (a = document.querySelector(a)), a) {
						if ("script" == a.tagName.toLowerCase()) {
							var b = document.createElement("div");
							b.id = a.id, b["class"] = a["class"], a.parentNode.insertBefore(b, a), a.parentNode.removeChild(a), a = b
						}
						a.classList.add("km-view"), this._paper.renderTo(this._renderTarget = a), this._bindEvents(), this.fire("paperrender")
					}
					return this
				},
				getRenderContainer: function() {
					return this._rc
				},
				getPaper: function() {
					return this._paper
				},
				getRenderTarget: function() {
					return this._renderTarget
				}
			})
		}
	}, b[24] = {
		value: function(a, c, d) {
			function e(a, b, c, d) {
				return c = a.createNode(b.data, c, d), b.children.forEach(function(b, d) {
					e(a, b, c, d)
				}), c
			}

			function f(a, b) {
				var c = b.path.split("/");
				c.shift();
				var d, f = c.shift();
				if ("root" == f) {
					var g = c.indexOf("data");
					if (g > -1) {
						f = "data";
						var h = c.splice(g + 1);
						b.dataPath = h
					} else f = "node";
					d = a.getRoot();
					for (var i, j; i = c.shift();) "children" != i && ("undefined" != typeof j && (d = d.getChild(j)), j = +i);
					b.index = j, b.node = d
				}
				var k = b.express = [f, b.op].join(".");
				switch (k) {
					case "theme.replace":
						a.useTheme(b.value);
						break;
					case "template.replace":
						a.useTemplate(b.value);
						break;
					case "node.add":
						e(a, b.value, b.node, b.index).renderTree(), a.layout();
						break;
					case "node.remove":
						a.removeNode(b.node.getChild(b.index)), a.layout();
						break;
					case "data.add":
					case "data.replace":
					case "data.remove":
						var l, m = b.node.data;
						for (c = b.dataPath.slice(); m && c.length > 1;) l = c.shift(), l in m ? m = m[l] : "remove" != b.op && (m = m[l] = {});
						m && (l = c.shift(), m[l] = b.value), "expandState" == l ? d.renderTree() : d.render(), a.layout()
				}
				a.fire("patch", {
					patch: b
				})
			}
			var g = b.r(17),
				h = b.r(19);
			g.extendClass(h, {
				applyPatches: function(a) {
					for (var b = 0; b < a.length; b++) f(this, a[b]);
					return this.fire("contentchange"), this
				}
			})
		}
	}, b[25] = {
		value: function(a, b, c) {
			var d = 0,
				e = 1,
				f = 2,
				g = function(a) {
					return this instanceof g ? (this.id = "Thenable/1.0.7", this.state = d, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], void("function" == typeof a && a.call(this, this.fulfill.bind(this), this.reject.bind(this)))) : new g(a)
				};
			g.prototype = {
				fulfill: function(a) {
					return h(this, e, "fulfillValue", a)
				},
				reject: function(a) {
					return h(this, f, "rejectReason", a)
				},
				then: function(a, b) {
					var c = this,
						d = new g;
					return c.onFulfilled.push(k(a, d, "fulfill")), c.onRejected.push(k(b, d, "reject")), i(c), d
				}
			}, g.all = function(a) {
				return new g(function(b, c) {
					var d = a.length,
						e = 0,
						f = 0,
						g = [];
					for (0 === d && b(g); d > e;) a[e].then(function(a) {
						g.push(a), ++f === d && b(g)
					}, function(a) {
						c(a)
					}), e++
				})
			};
			var h = function(a, b, c, e) {
				return a.state === d && (a.state = b, a[c] = e, i(a)), a
			}, i = function(a) {
				a.state === e ? j(a, "onFulfilled", a.fulfillValue) : a.state === f && j(a, "onRejected", a.rejectReason)
			}, j = function(a, b, c) {
				if (0 !== a[b].length) {
					var d = a[b];
					a[b] = [];
					var e = function() {
						for (var a = 0; a < d.length; a++) d[a](c)
					};
					"object" == typeof process && "function" == typeof process.nextTick ? process.nextTick(e) : "function" == typeof setImmediate ? setImmediate(e) : setTimeout(e, 0)
				}
			}, k = function(a, b, c) {
				return function(d) {
					if ("function" != typeof a) b[c].call(b, d);
					else {
						var e;
						try {
							e = d instanceof g ? d.then(a) : a(d)
						} catch (f) {
							return void b.reject(f)
						}
						l(b, e)
					}
				}
			}, l = function(a, b) {
				if (a === b) return void a.reject(new TypeError("cannot resolve promise with itself"));
				var c;
				if ("object" == typeof b && null !== b || "function" == typeof b) try {
					c = b.then
				} catch (d) {
					return void a.reject(d)
				}
				if ("function" != typeof c) a.fulfill(b);
				else {
					var e = !1;
					try {
						c.call(b, function(c) {
							e || (e = !0, c === b ? a.reject(new TypeError("circular thenable chain")) : l(a, c))
						}, function(b) {
							e || (e = !0, a.reject(b))
						})
					} catch (d) {
						e || a.reject(d)
					}
				}
			};
			g.resolve = function(a) {
				return new g(function(b) {
					b(a)
				})
			}, g.reject = function(a) {
				return new g(function(b, c) {
					c(a)
				})
			}, c.exports = g
		}
	}, b[26] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(19);
			b.r(13);
			f.registerInitHook(function(a) {
				a.readOnly && this.setDisabled()
			}), e.extendClass(f, {
				disable: function() {
					var a = this;
					a.bkqueryCommandState = a.queryCommandState, a.bkqueryCommandValue = a.queryCommandValue, a.queryCommandState = function(b) {
						var c = this._getCommand(b);
						return c && c.enableReadOnly ? a.bkqueryCommandState.apply(a, arguments) : -1
					}, a.queryCommandValue = function(b) {
						var c = this._getCommand(b);
						return c && c.enableReadOnly ? a.bkqueryCommandValue.apply(a, arguments) : null
					}, this.setStatus("readonly"), a._interactChange()
				},
				enable: function() {
					var a = this;
					a.bkqueryCommandState && (a.queryCommandState = a.bkqueryCommandState, delete a.bkqueryCommandState), a.bkqueryCommandValue && (a.queryCommandValue = a.bkqueryCommandValue, delete a.bkqueryCommandValue), this.setStatus("normal"), a._interactChange()
				}
			})
		}
	}, b[27] = {
		value: function(a, c, d) {
			function e() {
				function a(a, b) {
					var c = [];
					["center", "left", "right", "top", "bottom", "outline", "outside"].forEach(function(a) {
						var d = "before" + a,
							e = "after" + a;
						b[d] && (c = c.concat(b[d])), b[a] && (c = c.concat(b[a])), b[e] && (c = c.concat(b[e]))
					}), a._renderers = c.map(function(b) {
						return new b(a)
					})
				}
				return {
					renderNodeBatch: function(b) {
						var c, d, e, g, h = this._rendererClasses,
							i = [],
							j = 0;
						if (b.length) {
							for (d = 0; d < b.length; d++) g = b[d], g._renderers || a(g, h), g._contentBox = new f.Box, this.fire("beforerender", {
								node: g
							});
							for (j = b[0]._renderers.length, c = 0; j > c; c++) {
								for (d = 0; d < b.length; d++) "function" == typeof i[d] && (i[d] = i[d]()), i[d] instanceof f.Box || (i[d] = new f.Box(i[d]));
								for (d = 0; d < b.length; d++) g = b[d], e = g._renderers[c], i[d] && (g._contentBox = g._contentBox.merge(i[d]), e.contentBox = i[d]), e.shouldRender(g) ? (e.getRenderShape() || (e.setRenderShape(e.create(g)), e.bringToBack ? g.getRenderContainer().prependShape(e.getRenderShape()) : g.getRenderContainer().appendShape(e.getRenderShape())), e.getRenderShape().setVisible(!0), i[d] = e.update(e.getRenderShape(), g, g._contentBox)) : e.getRenderShape() && (e.getRenderShape().setVisible(!1), i[d] = null)
							}
							for (d = 0; d < b.length; d++) this.fire("noderender", {
								node: b[d]
							})
						}
					},
					renderNode: function(b) {
						var c, d = this._rendererClasses;
						b._renderers || a(b, d), this.fire("beforerender", {
							node: b
						}), b._contentBox = new f.Box, b._renderers.forEach(function(a) {
							a.shouldRender(b) ? (a.getRenderShape() || (a.setRenderShape(a.create(b)), a.bringToBack ? b.getRenderContainer().prependShape(a.getRenderShape()) : b.getRenderContainer().appendShape(a.getRenderShape())), a.getRenderShape().setVisible(!0), c = a.update(a.getRenderShape(), b, b._contentBox), "function" == typeof c && (c = c()), c && (b._contentBox = b._contentBox.merge(c), a.contentBox = c)) : a.getRenderShape() && a.getRenderShape().setVisible(!1)
						}), this.fire("noderender", {
							node: b
						})
					}
				}
			}
			var f = b.r(17),
				g = b.r(19),
				h = b.r(21),
				i = f.createClass("Renderer", {
					constructor: function(a) {
						this.node = a
					},
					create: function(a) {
						throw new Error("Not implement: Renderer.create()")
					},
					shouldRender: function(a) {
						return !0
					},
					watchChange: function(a) {
						var b;
						b = void 0 === this.watchingData ? !0 : this.watchingData != a ? !0 : !1, this.watchingData = a
					},
					shouldDraw: function(a) {
						return !0
					},
					update: function(a, b, c) {
						return this.shouldDraw() && this.draw(a, b), this.place(a, b, c)
					},
					draw: function(a, b) {
						throw new Error("Not implement: Renderer.draw()")
					},
					place: function(a, b, c) {
						throw new Error("Not implement: Renderer.place()")
					},
					getRenderShape: function() {
						return this._renderShape || null
					},
					setRenderShape: function(a) {
						this._renderShape = a
					}
				});
			f.extendClass(g, e()), f.extendClass(h, {
				render: function() {
					return this.attached ? (this.getMinder().renderNode(this), this) : void 0
				},
				renderTree: function() {
					if (this.attached) {
						var a = [];
						return this.traverse(function(b) {
							a.push(b)
						}), this.getMinder().renderNodeBatch(a), this
					}
				},
				getRenderer: function(a) {
					var b = this._renderers;
					if (!b) return null;
					for (var c = 0; c < b.length; c++)
						if (b[c].getType() == a) return b[c];
					return null
				},
				getContentBox: function() {
					return this.parent && this.parent.isCollapsed() ? new f.Box : this._contentBox || new f.Box
				},
				getRenderBox: function(a, b) {
					var c = a && this.getRenderer(a),
						d = c ? c.contentBox : this.getContentBox(),
						e = f.Matrix.getCTM(this.getRenderContainer(), b || "paper");
					return e.transformBox(d)
				}
			}), d.exports = i
		}
	}, b[28] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(33),
				g = b.r(19),
				h = b.r(21);
			g.registerInitHook(function() {
				this._initSelection()
			}), e.extendClass(g, {
				_initSelection: function() {
					this._selectedNodes = []
				},
				renderChangedSelection: function(a) {
					var b = this.getSelectedNodes(),
						c = [];
					for (b.forEach(function(b) {
						-1 == a.indexOf(b) && c.push(b)
					}), a.forEach(function(a) {
						-1 == b.indexOf(a) && c.push(a)
					}), c.length && (this._interactChange(), this.fire("selectionchange")); c.length;) c.shift().render()
				},
				getSelectedNodes: function() {
					return this._selectedNodes
				},
				getSelectedNode: function() {
					return this.getSelectedNodes()[0] || null
				},
				removeAllSelectedNodes: function() {
					var a = this._selectedNodes.splice(0);
					return this._selectedNodes = [], this.renderChangedSelection(a), this.fire("selectionclear")
				},
				removeSelectedNodes: function(a) {
					var b = this,
						c = this._selectedNodes.slice(0);
					return a = f.isArray(a) ? a : [a], a.forEach(function(a) {
						var c; - 1 !== (c = b._selectedNodes.indexOf(a)) && b._selectedNodes.splice(c, 1)
					}), this.renderChangedSelection(c), this
				},
				select: function(a, b) {
					var c = this.getSelectedNodes().slice(0);
					b && (this._selectedNodes = []);
					var d = this;
					return a = f.isArray(a) ? a : [a], a.forEach(function(a) {
						-1 === d._selectedNodes.indexOf(a) && d._selectedNodes.unshift(a)
					}), this.renderChangedSelection(c), this
				},
				selectById: function(a, b) {
					a = f.isArray(a) ? a : [a];
					var c = this.getNodesById(a);
					return this.select(c, b)
				},
				toggleSelect: function(a) {
					return f.isArray(a) ? a.forEach(this.toggleSelect.bind(this)) : a.isSelected() ? this.removeSelectedNodes(a) : this.select(a), this
				},
				isSingleSelect: function() {
					return 1 == this._selectedNodes.length
				},
				getSelectedAncestors: function(a) {
					function b(a, b) {
						for (var c = a.length - 1; c >= 0; --c)
							if (a[c].isAncestorOf(b)) return !0;
						return !1
					}
					var c, d = this.getSelectedNodes().slice(0),
						e = [],
						f = d.indexOf(this.getRoot());
					for (~f && !a && d.splice(f, 1), d.sort(function(a, b) {
						return a.getLevel() - b.getLevel()
					}); c = d.pop();) b(d, c) || e.push(c);
					return e
				}
			}), e.extendClass(h, {
				isSelected: function() {
					var a = this.getMinder();
					return a && -1 != a.getSelectedNodes().indexOf(this)
				}
			})
		}
	}, b[29] = {
		value: function(a, c, d) {
			function e(a) {
				var b = 4096,
					c = 8192,
					d = 16384,
					e = 0;
				return "string" == typeof a ? a.toLowerCase().split(/\+\s*/).forEach(function(a) {
					switch (a) {
						case "ctrl":
						case "cmd":
							e |= b;
							break;
						case "alt":
							e |= c;
							break;
						case "shift":
							e |= d;
							break;
						default:
							e |= h[a]
					}
				}) : ((a.ctrlKey || a.metaKey) && (e |= b), a.altKey && (e |= c), a.shiftKey && (e |= d), e |= a.keyCode), e
			}
			var f = b.r(17),
				g = b.r(33),
				h = b.r(15),
				i = b.r(19),
				j = b.r(13);
			f.extendClass(j, {
				isShortcutKey: function(a) {
					var b = this.originEvent;
					return b ? e(a) == e(b) : !1
				}
			}), i.registerInitHook(function() {
				this._initShortcutKey()
			}), f.extendClass(i, {
				_initShortcutKey: function() {
					this._bindShortcutKeys()
				},
				_bindShortcutKeys: function() {
					var a = this._shortcutKeys = {}, b = "hasOwnProperty";
					this.on("keydown", function(c) {
						for (var d in a)
							if (a[b](d) && c.isShortcutKey(d)) {
								var e = a[d];
								if (e.__statusCondition && e.__statusCondition != this.getStatus()) return;
								e(), c.preventDefault()
							}
					})
				},
				addShortcut: function(a, b) {
					var c = this._shortcutKeys;
					a.split(/\|\s*/).forEach(function(a) {
						var d, e = a.split("::");
						e.length > 1 && (a = e[1], d = e[0], b.__statusCondition = d), c[a] = b
					})
				},
				addCommandShortcutKeys: function(a, b) {
					var c = this._commandShortcutKeys || (this._commandShortcutKeys = {}),
						d = {};
					b ? d[a] = b : d = a;
					var e = this;
					g.each(d, function(a, b) {
						c[b] = a, e.addShortcut(a, function() {
							-1 !== e.queryCommandState(b) && e.execCommand(b)
						})
					})
				},
				getCommandShortcutKey: function(a) {
					var b = this._commandShortcutKeys;
					return b && b[a] || null
				},
				supportClipboardEvent: function(a) {
					return !!a.ClipboardEvent
				}(window)
			})
		}
	}, b[30] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(19),
				g = ~window.location.href.indexOf("status"),
				h = ~window.location.href.indexOf("trace");
			f.registerInitHook(function() {
				this._initStatus()
			}), e.extendClass(f, {
				_initStatus: function() {
					this._status = "normal", this._rollbackStatus = "normal"
				},
				setStatus: function(a, b) {
					return "readonly" != this._status || b ? (a != this._status && (this._rollbackStatus = this._status, this._status = a, this.fire("statuschange", {
						lastStatus: this._rollbackStatus,
						currentStatus: this._status
					}), g && (console.log(window.event.type, this._rollbackStatus, "->", this._status), h && console.trace())), this) : this
				},
				rollbackStatus: function() {
					this.setStatus(this._rollbackStatus)
				},
				getRollbackStatus: function() {
					return this._rollbackStatus
				},
				getStatus: function() {
					return this._status
				}
			})
		}
	}, b[31] = {
		value: function(a, c, d) {
			function e(a, b) {
				l[a] = b
			}
			var f = b.r(17),
				g = b.r(33),
				h = b.r(19),
				i = b.r(9),
				j = b.r(21),
				k = b.r(20),
				l = {};
			c.register = e, g.extend(h, {
				getTemplateList: function() {
					return l
				}
			}), f.extendClass(h, function() {
				var a = h.prototype.getTheme;
				return {
					useTemplate: function(a, b) {
						this.setTemplate(a), this.refresh(b || 800)
					},
					getTemplate: function() {
						return this._template || "default"
					},
					setTemplate: function(a) {
						this._template = a || null
					},
					getTemplateSupport: function(a) {
						var b = l[this.getTemplate()];
						return b && b[a]
					},
					getTheme: function(b) {
						var c = this.getTemplateSupport("getTheme") || a;
						return c.call(this, b)
					}
				}
			}()), f.extendClass(j, function() {
				var a = j.prototype.getLayout,
					b = j.prototype.getConnect;
				return {
					getLayout: function() {
						var b = this.getMinder().getTemplateSupport("getLayout") || a;
						return b.call(this, this)
					},
					getConnect: function() {
						var a = this.getMinder().getTemplateSupport("getConnect") || b;
						return a.call(this, this)
					}
				}
			}()), k.register("TemplateModule", {
				commands: {
					template: f.createClass("TemplateCommand", {
						base: i,
						execute: function(a, b) {
							a.useTemplate(b), a.execCommand("camera")
						},
						queryValue: function(a) {
							return a.getTemplate() || "default"
						}
					})
				}
			})
		}
	}, b[32] = {
		value: function(a, c, d) {
			function e(a, b) {
				m[a] = b
			}
			var f = b.r(17),
				g = b.r(33),
				h = b.r(19),
				i = b.r(21),
				j = b.r(20),
				k = b.r(9),
				l = {
					left: function(a) {
						return 3 in a && a[3] || 1 in a && a[1] || a[0]
					},
					right: function(a) {
						return 1 in a && a[1] || a[0]
					},
					top: function(a) {
						return a[0]
					},
					bottom: function(a) {
						return 2 in a && a[2] || a[0]
					}
				}, m = {};
			c.register = e, g.extend(h, {
				getThemeList: function() {
					return m
				}
			}), f.extendClass(h, {
				useTheme: function(a) {
					return this.setTheme(a), this.refresh(800), !0
				},
				setTheme: function(a) {
					if (a && !m[a]) throw new Error("Theme " + a + " not exists!");
					var b = this._theme;
					this._theme = a || null;
					var c = this.getRenderTarget();
					return c && (c.classList.remove("km-theme-" + b), a && c.classList.add("km-theme-" + a), c.style.background = this.getStyle("background")), this.fire("themechange", {
						theme: a
					}), this
				},
				getTheme: function(a) {
					return this._theme || this.getOption("defaultTheme") || "fresh-blue"
				},
				getThemeItems: function(a) {
					this.getTheme(a);
					return m[this.getTheme(a)]
				},
				getStyle: function(a, b) {
					var c, d, e, f, h = this.getThemeItems(b);
					if (a in h) return h[a];
					if (c = a.split("-"), c.length < 2) return null;
					if (d = c.pop(), a = c.join("-"), a in h) {
						if (e = h[a], g.isArray(e) && (f = l[d])) return f(e);
						if (!isNaN(e)) return e
					}
					return null
				},
				getNodeStyle: function(a, b) {
					var c = this.getStyle(a.getType() + "-" + b, a);
					return null !== c ? c : this.getStyle(b, a)
				}
			}), f.extendClass(i, {
				getStyle: function(a) {
					return this.getMinder().getNodeStyle(this, a)
				}
			}), j.register("Theme", {
				defaultOptions: {
					defaultTheme: "fresh-blue"
				},
				commands: {
					theme: f.createClass("ThemeCommand", {
						base: k,
						execute: function(a, b) {
							return a.useTheme(b)
						},
						queryValue: function(a) {
							return a.getTheme() || "default"
						}
					})
				}
			}), h.registerInitHook(function() {
				this.setTheme()
			})
		}
	}, b[33] = {
		value: function(a, c) {
			var d = b.r(17),
				e = {};
			c.extend = d.Utils.extend.bind(d.Utils), c.each = d.Utils.each.bind(d.Utils), c.uuid = function(a) {
				return e[a] = e[a] ? e[a] + 1 : 1, a + e[a]
			}, c.guid = function() {
				return (1e6 * +new Date + Math.floor(1e6 * Math.random())).toString(36)
			}, c.trim = function(a) {
				return a.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, "")
			}, c.keys = function(a) {
				var b = [];
				for (var c in a) a.hasOwnProperty(c) && b.push(c);
				return b
			}, c.clone = function(a) {
				return JSON.parse(JSON.stringify(a))
			}, c.comparePlainObject = function(a, b) {
				return JSON.stringify(a) == JSON.stringify(b)
			}, c.encodeHtml = function(a, b) {
				return a ? a.replace(b || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function(a, b) {
					return b ? a : {
						"<": "&lt;",
						"&": "&amp;",
						'"': "&quot;",
						">": "&gt;",
						"'": "&#39;"
					}[a]
				}) : ""
			}, c.clearWhiteSpace = function(a) {
				return a.replace(/[\u200b\t\r\n]/g, "")
			}, c.each(["String", "Function", "Array", "Number", "RegExp", "Object"], function(a) {
				var b = Object.prototype.toString;
				c["is" + a] = function(c) {
					return b.apply(c) == "[object " + a + "]"
				}
			})
		}
	}, b[34] = {
		value: function(a, c, d) {
			d.exports = window.kityminder = b.r(35)
		}
	}, b[35] = {
		value: function(a, c, d) {
			var e = {
				version: b.r(19).version
			};
			b.r(33), e.Minder = b.r(19), e.Command = b.r(9), e.Node = b.r(21), b.r(22), b.r(8), e.Event = b.r(13), e.data = b.r(12), b.r(10), e.KeyMap = b.r(15), b.r(29), b.r(30), b.r(23), b.r(28), b.r(14), b.r(16), e.Module = b.r(20), b.r(26), e.Render = b.r(27), e.Connect = b.r(11), e.Layout = b.r(18), e.Theme = b.r(32), e.Template = b.r(31), e.Promise = b.r(25), b.r(7), b.r(24), b.r(42), b.r(43), b.r(44), b.r(45), b.r(46), b.r(47), b.r(48), b.r(49), b.r(50), b.r(51), b.r(52), b.r(53), b.r(54), b.r(55), b.r(56), b.r(57), b.r(58), b.r(59), b.r(60), b.r(61), b.r(62), b.r(63), b.r(67), b.r(64), b.r(66), b.r(65), b.r(40), b.r(36), b.r(37), b.r(38), b.r(39), b.r(41), b.r(74), b.r(77), b.r(76), b.r(75), b.r(77), b.r(79), b.r(78), b.r(0), b.r(1), b.r(2), b.r(3), b.r(4), b.r(5), b.r(6), b.r(68), b.r(72), b.r(69), b.r(71), b.r(70), b.r(73), d.exports = e
		}
	}, b[36] = {
		value: function(a, c, d) {
			function e(a) {
				function b(a) {
					var b = [],
						d = a.getLayoutBox(),
						e = 5;
					return "x" == c ? (b.push({
						type: "up",
						node: a,
						area: new f.Box({
							x: d.x,
							y: d.top - a.getStyle("margin-top") - e,
							width: d.width,
							height: a.getStyle("margin-top")
						}),
						path: ["M", d.x, d.top - e, "L", d.right, d.top - e]
					}), b.push({
						type: "down",
						node: a,
						area: new f.Box({
							x: d.x,
							y: d.bottom + e,
							width: d.width,
							height: a.getStyle("margin-bottom")
						}),
						path: ["M", d.x, d.bottom + e, "L", d.right, d.bottom + e]
					})) : (b.push({
						type: "up",
						node: a,
						area: new f.Box({
							x: d.left - a.getStyle("margin-left") - e,
							y: d.top,
							width: a.getStyle("margin-left"),
							height: d.height
						}),
						path: ["M", d.left - e, d.top, "L", d.left - e, d.bottom]
					}), b.push({
						type: "down",
						node: a,
						area: new f.Box({
							x: d.right + e,
							y: d.top,
							width: a.getStyle("margin-right"),
							height: d.height
						}),
						path: ["M", d.right + e, d.top, "L", d.right + e, d.bottom]
					})), b
				}
				var c = "left" == a || "right" == a ? "x" : "y",
					d = "left" == a || "top" == a ? -1 : 1,
					e = {
						left: "right",
						right: "left",
						top: "bottom",
						bottom: "top",
						x: "y",
						y: "x"
					};
				g.register(a, f.createClass({
					base: g,
					doLayout: function(b, g) {
						var h = b.getContentBox();
						if ("x" == c ? (b.setVertexOut(new f.Point(h[a], h.cy)), b.setLayoutVectorOut(new f.Vector(d, 0))) : (b.setVertexOut(new f.Point(h.cx, h[a])), b.setLayoutVectorOut(new f.Vector(0, d))), !g.length) return !1;
						g.forEach(function(b) {
							var g = b.getContentBox();
							b.setLayoutTransform(new f.Matrix), "x" == c ? (b.setVertexIn(new f.Point(g[e[a]], g.cy)), b.setLayoutVectorIn(new f.Vector(d, 0))) : (b.setVertexIn(new f.Point(g.cx, g[e[a]])), b.setLayoutVectorIn(new f.Vector(0, d)))
						}), this.align(g, e[a]), this.stack(g, e[c]);
						var i = this.getBranchBox(g),
							j = 0,
							k = 0;
						"x" == c ? (j = h[a], j += d * b.getStyle("margin-" + a), j += d * g[0].getStyle("margin-" + e[a]), k = h.bottom, k -= h.height / 2, k -= i.height / 2, k -= i.y) : (j = h.right, j -= h.width / 2, j -= i.width / 2, j -= i.x, k = h[a], k += d * b.getStyle("margin-" + a), k += d * g[0].getStyle("margin-" + e[a])), this.move(g, j, k)
					},
					getOrderHint: b
				}))
			}
			var f = b.r(17),
				g = b.r(18);
			["left", "right", "top", "bottom"].forEach(e)
		}
	}, b[37] = {
		value: function(a, c, d) {
			function e(a) {
				var b = "filetree-" + (a > 0 ? "down" : "up");
				g.register(b, f.createClass({
					base: g,
					doLayout: function(b, c, d) {
						var e = b.getContentBox(),
							g = 20;
						if (b.setVertexOut(new f.Point(e.left + g, a > 0 ? e.bottom : e.top)), b.setLayoutVectorOut(new f.Vector(0, a)), c.length) {
							c.forEach(function(a) {
								var b = a.getContentBox();
								a.setLayoutTransform(new f.Matrix), a.setVertexIn(new f.Point(b.left, b.cy)), a.setLayoutVectorIn(new f.Vector(1, 0))
							}), this.align(c, "left"), this.stack(c, "y");
							var h = 0;
							h += e.left, h += g, h += c[0].getStyle("margin-left");
							var i = 0;
							a > 0 ? (i += e.bottom, i += b.getStyle("margin-bottom"), i += c[0].getStyle("margin-top")) : (i -= this.getTreeBox(c).bottom, i += e.top, i -= b.getStyle("margin-top"), i -= c[0].getStyle("margin-bottom")), this.move(c, h, i)
						}
					},
					getOrderHint: function(a) {
						var b = [],
							c = a.getLayoutBox(),
							d = a.getLevel() > 1 ? 3 : 5;
						return b.push({
							type: "up",
							node: a,
							area: new f.Box({
								x: c.x,
								y: c.top - a.getStyle("margin-top") - d,
								width: c.width,
								height: a.getStyle("margin-top")
							}),
							path: ["M", c.x, c.top - d, "L", c.right, c.top - d]
						}), b.push({
							type: "down",
							node: a,
							area: new f.Box({
								x: c.x,
								y: c.bottom + d,
								width: c.width,
								height: a.getStyle("margin-bottom")
							}),
							path: ["M", c.x, c.bottom + d, "L", c.right, c.bottom + d]
						}), b
					}
				}))
			}
			var f = b.r(17),
				g = b.r(18);
			[-1, 1].forEach(e)
		}
	}, b[38] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(18);
			f.register("fish-bone-master", e.createClass("FishBoneMasterLayout", {
				base: f,
				doLayout: function(a, b, c) {
					var d = [],
						f = [],
						g = b[0],
						h = a.getContentBox();
					if (a.setVertexOut(new e.Point(h.right, h.cy)), a.setLayoutVectorOut(new e.Vector(1, 0)), g) {
						var i = (g.getContentBox(), a.getStyle("margin-right")),
							j = g.getStyle("margin-left"),
							k = g.getStyle("margin-top"),
							l = g.getStyle("margin-bottom");
						b.forEach(function(a, b) {
							a.setLayoutTransform(new e.Matrix);
							var c = a.getContentBox();
							b % 2 ? (f.push(a), a.setVertexIn(new e.Point(c.left, c.top)), a.setLayoutVectorIn(new e.Vector(1, 1))) : (d.push(a), a.setVertexIn(new e.Point(c.left, c.bottom)), a.setLayoutVectorIn(new e.Vector(1, -1)))
						}), this.stack(d, "x"), this.stack(f, "x"), this.align(d, "bottom"), this.align(f, "top");
						var m = h.right + i + j,
							n = h.cy - l - a.getStyle("margin-top"),
							o = h.cy + k + a.getStyle("margin-bottom");
						this.move(d, m, n), this.move(f, m + j, o)
					}
				}
			}))
		}
	}, b[39] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(18);
			f.register("fish-bone-slave", e.createClass("FishBoneSlaveLayout", {
				base: f,
				doLayout: function(a, b, c) {
					var d = this,
						f = Math.abs,
						g = .382,
						h = a.getContentBox(),
						i = a.getLayoutVectorIn();
					a.setLayoutVectorOut(i);
					var j = h.left + h.width * g,
						k = new e.Point(j, i.y > 0 ? h.bottom : h.top);
					a.setVertexOut(k);
					var l = b[0];
					if (l) {
						var m = l.getContentBox();
						b.forEach(function(a, b) {
							a.setLayoutTransform(new e.Matrix), a.setLayoutVectorIn(new e.Vector(1, 0)), a.setVertexIn(new e.Point(m.left, m.cy))
						}), this.stack(b, "y"), this.align(b, "left");
						var n = 0,
							o = 0;
						n += k.x, a.getLayoutVectorOut().y < 0 ? (o -= this.getTreeBox(b).bottom, o += a.getContentBox().top, o -= a.getStyle("margin-top"), o -= l.getStyle("margin-bottom")) : (o += a.getContentBox().bottom, o += a.getStyle("margin-bottom"), o += l.getStyle("margin-top")), this.move(b, n, o), 2 == c && b.forEach(function(a) {
							var b = a.getLayoutTransform(),
								c = a.getContentBox(),
								g = b.transformPoint(new e.Point(c.left, 0));
							d.move([a], f(g.y - k.y), 0)
						})
					}
				}
			}))
		}
	}, b[40] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(18),
				g = b.r(19);
			f.register("mind", e.createClass({
				base: f,
				doLayout: function(a, b) {
					var c = Math.ceil(a.children.length / 2),
						d = [],
						f = [];
					b.forEach(function(a) {
						a.getIndex() < c ? d.push(a) : f.push(a)
					});
					var h = g.getLayoutInstance("left"),
						i = g.getLayoutInstance("right");
					h.doLayout(a, f), i.doLayout(a, d);
					var j = a.getContentBox();
					a.setVertexOut(new e.Point(j.cx, j.cy)), a.setLayoutVectorOut(new e.Vector(0, 0))
				},
				getOrderHint: function(a) {
					var b = [],
						c = a.getLayoutBox(),
						d = 5;
					return b.push({
						type: "up",
						node: a,
						area: new e.Box({
							x: c.x,
							y: c.top - a.getStyle("margin-top") - d,
							width: c.width,
							height: a.getStyle("margin-top")
						}),
						path: ["M", c.x, c.top - d, "L", c.right, c.top - d]
					}), b.push({
						type: "down",
						node: a,
						area: new e.Box({
							x: c.x,
							y: c.bottom + d,
							width: c.width,
							height: a.getStyle("margin-bottom")
						}),
						path: ["M", c.x, c.bottom + d, "L", c.right, c.bottom + d]
					}), b
				}
			}))
		}
	}, b[41] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(18);
			b.r(19);
			f.register("tianpan", e.createClass({
				base: f,
				doLayout: function(a, b) {
					if (0 != b.length) {
						var c, d, f, g = this,
							h = a.getContentBox(),
							i = 5,
							j = Math.max(h.width, 50);
						b.forEach(function(a, b) {
							a.setLayoutTransform(new e.Matrix), f = g.getTreeBox(a), j = Math.max(Math.max(f.width, f.height), j)
						}), j = j / 1.5 / Math.PI, b.forEach(function(a, b) {
							c = j * (Math.cos(i) + Math.sin(i) * i), d = j * (Math.sin(i) - Math.cos(i) * i), i += .9 - .02 * b, a.setLayoutVectorIn(new e.Vector(1, 0)), a.setVertexIn(new e.Point(h.cx, h.cy)), a.setLayoutTransform(new e.Matrix), g.move([a], c, d)
						})
					}
				},
				getOrderHint: function(a) {
					var b = [],
						c = a.getLayoutBox(),
						d = 5;
					return b.push({
						type: "up",
						node: a,
						area: {
							x: c.x,
							y: c.top - a.getStyle("margin-top") - d,
							width: c.width,
							height: a.getStyle("margin-top")
						},
						path: ["M", c.x, c.top - d, "L", c.right, c.top - d]
					}), b.push({
						type: "down",
						node: a,
						area: {
							x: c.x,
							y: c.bottom + d,
							width: c.width,
							height: a.getStyle("margin-bottom")
						},
						path: ["M", c.x, c.bottom + d, "L", c.right, c.bottom + d]
					}), b
				}
			}))
		}
	}, b[42] = {
		value: function(a, c, d) {
			function e(a, b) {
				return a.getIndex() - b.getIndex()
			}

			function f(a, b) {
				return -e(a, b)
			}
			var g = b.r(17),
				h = b.r(21),
				i = b.r(9),
				j = b.r(20);
			g.extendClass(h, {
				arrange: function(a) {
					var b = this.parent;
					if (b) {
						var c = b.children;
						if (!(0 > a || a >= c.length)) return c.splice(this.getIndex(), 1), c.splice(a, 0, this), this
					}
				}
			});
			var k = g.createClass("ArrangeUpCommand", {
					base: i,
					execute: function(a) {
						var b = a.getSelectedNodes();
						b.sort(e);
						var c = b.map(function(a) {
							return a.getIndex()
						});
						b.forEach(function(a, b) {
							a.arrange(c[b] - 1)
						}), a.layout(300)
					},
					queryState: function(a) {
						var b = a.getSelectedNode();
						return b ? 0 : -1
					}
				}),
				l = g.createClass("ArrangeUpCommand", {
					base: i,
					execute: function(a) {
						var b = a.getSelectedNodes();
						b.sort(f);
						var c = b.map(function(a) {
							return a.getIndex()
						});
						b.forEach(function(a, b) {
							a.arrange(c[b] + 1)
						}), a.layout(300)
					},
					queryState: function(a) {
						var b = a.getSelectedNode();
						return b ? 0 : -1
					}
				}),
				m = g.createClass("ArrangeCommand", {
					base: i,
					execute: function(a, b) {
						var c = a.getSelectedNodes().slice();
						if (c.length) {
							var d = h.getCommonAncestor(c);
							if (d == c[0].parent) {
								var e = c.map(function(a) {
										return {
											index: a.getIndex(),
											node: a
										}
									}),
									f = Math.min.apply(Math, e.map(function(a) {
										return a.index
									})) >= b;
								e.sort(function(a, b) {
									return f ? b.index - a.index : a.index - b.index
								}), e.forEach(function(a) {
									a.node.arrange(b)
								}), a.layout(300)
							}
						}
					},
					queryState: function(a) {
						var b = a.getSelectedNode();
						return b ? 0 : -1
					}
				});
			j.register("ArrangeModule", {
				commands: {
					arrangeup: k,
					arrangedown: l,
					arrange: m
				},
				contextmenu: [{
					command: "arrangeup"
				}, {
					command: "arrangedown"
				}, {
					divider: !0
				}],
				commandShortcutKeys: {
					arrangeup: "normal::alt+Up",
					arrangedown: "normal::alt+Down"
				}
			})
		}
	}, b[43] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(19), b.r(21), b.r(9)),
				g = b.r(20),
				h = b.r(60);
			g.register("basestylemodule", function() {
				function a(a, b) {
					return a.getData(b) || a.getStyle(b)
				}
				var b = this;
				return h.registerStyleHook(function(b, c) {
					var d = a(b, "font-weight"),
						e = a(b, "font-style");
					[d, e].join("/");
					c.eachItem(function(a, b) {
						b.setFont({
							weight: d,
							style: e
						})
					})
				}), {
					commands: {
						bold: e.createClass("boldCommand", {
							base: f,
							execute: function(a) {
								var b = a.getSelectedNodes();
								1 == this.queryState("bold") ? b.forEach(function(a) {
									a.setData("font-weight").render()
								}) : b.forEach(function(a) {
									a.setData("font-weight", "bold").render()
								}), a.layout()
							},
							queryState: function() {
								var a = b.getSelectedNodes(),
									c = 0;
								return 0 === a.length ? -1 : (a.forEach(function(a) {
									return a && a.getData("font-weight") ? (c = 1, !1) : void 0
								}), c)
							}
						}),
						italic: e.createClass("italicCommand", {
							base: f,
							execute: function(a) {
								var b = a.getSelectedNodes();
								1 == this.queryState("italic") ? b.forEach(function(a) {
									a.setData("font-style").render()
								}) : b.forEach(function(a) {
									a.setData("font-style", "italic").render()
								}), a.layout()
							},
							queryState: function() {
								var a = b.getSelectedNodes(),
									c = 0;
								return 0 === a.length ? -1 : (a.forEach(function(a) {
									return a && a.getData("font-style") ? (c = 1, !1) : void 0
								}), c)
							}
						})
					},
					commandShortcutKeys: {
						bold: "ctrl+b",
						italic: "ctrl+i"
					}
				}
			})
		}
	}, b[44] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(21)),
				g = b.r(9),
				h = b.r(20);
			h.register("ClipboardModule", function() {
				function a(b, d) {
					h.push(d), c.appendNode(d, b), d.render(), d.setLayoutOffset(null);
					var e = d.children.map(function(a) {
						return a.clone()
					});
					d.clearChildren();
					for (var f, g = 0; f = e[g]; g++) a(d, f)
				}

				function b(a) {
					a.length && (a.sort(function(a, b) {
						return a.getIndex() - b.getIndex()
					}), d = a.map(function(a) {
						return a.clone()
					}))
				}
				var c = this,
					d = [],
					h = [],
					i = e.createClass("CopyCommand", {
						base: g,
						execute: function(a) {
							b(a.getSelectedAncestors(!0)), this.setContentChanged(!1)
						}
					}),
					j = e.createClass("CutCommand", {
						base: g,
						execute: function(a) {
							var c = a.getSelectedAncestors();
							0 !== c.length && (b(c), a.select(f.getCommonAncestor(c), !0), c.slice().forEach(function(b) {
								a.removeNode(b)
							}), a.layout(300))
						}
					}),
					k = e.createClass("PasteCommand", {
						base: g,
						execute: function(b) {
							if (d.length) {
								var c = b.getSelectedNodes();
								if (!c.length) return;
								for (var e, f = 0; e = d[f]; f++)
									for (var g, i = 0; g = c[i]; i++) a(g, e.clone());
								b.select(h, !0), h = [], b.layout(300)
							}
						},
						queryState: function(a) {
							return a.getSelectedNode() ? 0 : -1
						}
					});
				if (c.supportClipboardEvent && !e.Browser.gecko) {
					var l = function(a) {
						this.fire("beforeCopy", a)
					}, m = function(a) {
						this.fire("beforeCut", a)
					}, n = function(a) {
						this.fire("beforePaste", a)
					};
					return {
						commands: {
							copy: i,
							cut: j,
							paste: k
						},
						clipBoardEvents: {
							copy: l.bind(c),
							cut: m.bind(c),
							paste: n.bind(c)
						},
						sendToClipboard: b
					}
				}
				return {
					commands: {
						copy: i,
						cut: j,
						paste: k
					},
					commandShortcutKeys: {
						copy: "normal::ctrl+c|",
						cut: "normal::ctrl+x",
						paste: "normal::ctrl+v"
					},
					sendToClipboard: b
				}
			})
		}
	}, b[45] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(21)),
				g = b.r(9),
				h = b.r(20),
				i = e.createClass("MoveToParentCommand", {
					base: g,
					execute: function(a, b, c) {
						for (var d, e = b.length - 1; e >= 0; e--) d = b[e], d.parent && (d.parent.removeChild(d), c.appendChild(d), d.render());
						c.expand(), a.select(b, !0)
					}
				}),
				j = e.createClass("DropHinter", {
					base: e.Group,
					constructor: function() {
						this.callBase(), this.rect = new e.Rect, this.addShape(this.rect)
					},
					render: function(a) {
						this.setVisible( !! a), a && (this.rect.setBox(a.getLayoutBox()).setRadius(a.getStyle("radius") || 0).stroke(a.getStyle("drop-hint-color") || "yellow", a.getStyle("drop-hint-width") || 2), this.bringTop())
					}
				}),
				k = e.createClass("OrderHinter", {
					base: e.Group,
					constructor: function() {
						this.callBase(), this.area = new e.Rect, this.path = new e.Path, this.addShapes([this.area, this.path])
					},
					render: function(a) {
						this.setVisible( !! a), a && (this.area.setBox(a.area), this.area.fill(a.node.getStyle("order-hint-area-color") || "rgba(0, 255, 0, .5)"), this.path.setPathData(a.path), this.path.stroke(a.node.getStyle("order-hint-path-color") || "#0f0", a.node.getStyle("order-hint-path-width") || 1))
					}
				}),
				l = e.createClass("TreeDragger", {
					constructor: function(a) {
						this._minder = a, this._dropHinter = new j, this._orderHinter = new k, a.getRenderContainer().addShapes([this._dropHinter, this._orderHinter])
					},
					dragStart: function(a) {
						this._startPosition = a
					},
					dragMove: function(a) {
						var b = 10;
						if (this._startPosition) {
							var c = e.Vector.fromPoints(this._dragPosition || this._startPosition, a),
								d = this._minder;
							if (this._dragPosition = a, !this._dragMode) {
								if (e.Vector.fromPoints(this._dragPosition, this._startPosition).length() < b) return;
								if (!this._enterDragMode()) return
							}
							for (var f = 0; f < this._dragSources.length; f++) this._dragSources[f].setLayoutOffset(this._dragSources[f].getLayoutOffset().offset(c)), d.applyLayoutResult(this._dragSources[f]);
							this._dropTest() ? this._renderOrderHint(this._orderSucceedHint = null) : this._orderTest()
						}
					},
					dragEnd: function() {
						if (this._startPosition = null, this._dragPosition = null, this._dragMode) {
							if (this._fadeDragSources(1), this._dropSucceedTarget) this._dragSources.forEach(function(a) {
								a.setLayoutOffset(null)
							}), this._minder.layout(-1), this._minder.execCommand("movetoparent", this._dragSources, this._dropSucceedTarget);
							else if (this._orderSucceedHint) {
								var a = this._orderSucceedHint,
									b = a.node.getIndex(),
									c = this._dragSources.map(function(a) {
										return a.setLayoutOffset(null), a.getIndex()
									}),
									d = Math.max.apply(Math, c),
									e = Math.min.apply(Math, c);
								e > b && "down" == a.type && b++, b > d && "up" == a.type && b--, a.node.setLayoutOffset(null), this._minder.execCommand("arrange", b), this._renderOrderHint(null)
							} else this._minder.fire("savescene");
							this._minder.layout(300), this._leaveDragMode(), this._minder.fire("contentchange")
						}
					},
					_enterDragMode: function() {
						return this._calcDragSources(), this._dragSources.length ? (this._fadeDragSources(.5), this._calcDropTargets(), this._calcOrderHints(), this._dragMode = !0, this._minder.setStatus("dragtree"), !0) : (this._startPosition = null, !1)
					},
					_calcDragSources: function() {
						this._dragSources = this._minder.getSelectedAncestors()
					},
					_fadeDragSources: function(a) {
						var b = this._minder;
						this._dragSources.forEach(function(c) {
							c.getRenderContainer().setOpacity(a, 200), c.traverse(function(c) {
								1 > a ? b.detachNode(c) : b.attachNode(c)
							}, !0)
						})
					},
					_calcDropTargets: function() {
						function a(b, c) {
							var d, e = [];
							return e.push(c), c.getChildren().forEach(function(c) {
								for (d = 0; d < b.length; d++)
									if (b[d] == c) return;
								e = e.concat(a(b, c))
							}), e
						}
						this._dropTargets = a(this._dragSources, this._minder.getRoot()), this._dropTargetBoxes = this._dropTargets.map(function(a) {
							return a.getLayoutBox()
						})
					},
					_calcOrderHints: function() {
						var a = this._dragSources,
							b = f.getCommonAncestor(a);
						if (b == a[0] && (b = a[0].parent), 0 === a.length || b != a[0].parent) return void(this._orderHints = []);
						var c = b.children;
						this._orderHints = c.reduce(function(b, c) {
							return -1 == a.indexOf(c) && (b = b.concat(c.getOrderHint())), b
						}, [])
					},
					_leaveDragMode: function() {
						this._dragMode = !1, this._dropSucceedTarget = null, this._orderSucceedHint = null, this._renderDropHint(null), this._renderOrderHint(null), this._minder.rollbackStatus()
					},
					_drawForDragMode: function() {
						this._text.setContent(this._dragSources.length + " items"), this._text.setPosition(this._startPosition.x, this._startPosition.y + 5), this._minder.getRenderContainer().addShape(this)
					},
					_boxTest: function(a, b, c) {
						var d, e, f, g, h, i = this._dragSources.map(function(a) {
							return a.getLayoutBox()
						});
						for (c = c || function(a, b, c) {
							return a && !a.isEmpty()
						}, d = 0; d < a.length; d++)
							for (f = a[d], h = b.call(this, f, d), e = 0; e < i.length; e++) {
								g = i[e];
								var j = g.intersect(h);
								if (c(j, g, h)) return f
							}
						return null
					},
					_dropTest: function() {
						return this._dropSucceedTarget = this._boxTest(this._dropTargets, function(a, b) {
							return this._dropTargetBoxes[b]
						}, function(a, b, c) {
							function d(a) {
								return a.width * a.height
							}
							return a && d(a) ? d(a) > .5 * Math.min(d(b), d(c)) ? !0 : a.width + 1 >= Math.min(b.width, c.width) ? !0 : a.height + 1 >= Math.min(b.height, c.height) ? !0 : !1 : !1
						}), this._renderDropHint(this._dropSucceedTarget), !! this._dropSucceedTarget
					},
					_orderTest: function() {
						return this._orderSucceedHint = this._boxTest(this._orderHints, function(a) {
							return a.area
						}), this._renderOrderHint(this._orderSucceedHint), !! this._orderSucceedHint
					},
					_renderDropHint: function(a) {
						this._dropHinter.render(a)
					},
					_renderOrderHint: function(a) {
						this._orderHinter.render(a)
					},
					preventDragMove: function() {
						this._startPosition = null
					}
				});
			h.register("DragTree", function() {
				var a;
				return {
					init: function() {
						a = new l(this), window.addEventListener("mouseup", function() {
							a.dragEnd()
						})
					},
					events: {
						"normal.mousedown inputready.mousedown": function(b) {
							b.originEvent.button || b.getTargetNode() && b.getTargetNode() != this.getRoot() && a.dragStart(b.getPosition())
						},
						"normal.mousemove dragtree.mousemove": function(b) {
							a.dragMove(b.getPosition())
						},
						"normal.mouseup dragtree.beforemouseup": function(b) {
							a.dragEnd(), b.preventDefault()
						},
						statuschange: function(b) {
							"textedit" == b.lastStatus && "normal" == b.currentStatus && a.preventDragMove()
						}
					},
					commands: {
						movetoparent: i
					}
				}
			})
		}
	}, b[46] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(33),
				g = b.r(15),
				h = b.r(21),
				i = b.r(9),
				j = b.r(20),
				k = b.r(27);
			j.register("Expand", function() {
				var a = this,
					b = "expandState",
					c = "expand",
					d = "collapse";
				e.extendClass(h, {
					expand: function() {
						return this.setData(b, c), this
					},
					collapse: function() {
						return this.setData(b, d), this
					},
					isExpanded: function() {
						var a = this.getData(b) !== d;
						return a && (this.isRoot() || this.parent.isExpanded())
					},
					isCollapsed: function() {
						return !this.isExpanded()
					}
				});
				var j = e.createClass("ExpandCommand", {
						base: i,
						execute: function(a, b) {
							var c = a.getSelectedNode();
							if (c) {
								for (b && (c = c.parent); c.parent;) c.expand(), c = c.parent;
								c.renderTree(), a.layout(100)
							}
						},
						queryState: function(a) {
							var b = a.getSelectedNode();
							return !b || b.isRoot() || b.isExpanded() ? -1 : 0
						}
					}),
					l = e.createClass("ExpandToLevelCommand", {
						base: i,
						execute: function(a, b) {
							a.getRoot().traverse(function(a) {
								a.getLevel() < b && a.expand(), a.getLevel() != b || a.isLeaf() || a.collapse()
							}), a.refresh(100)
						},
						enableReadOnly: !0
					}),
					m = e.createClass("CollapseCommand", {
						base: i,
						execute: function(a) {
							var b = a.getSelectedNode();
							b && (b.collapse(), b.renderTree(), a.layout())
						},
						queryState: function(a) {
							var b = a.getSelectedNode();
							return b && !b.isRoot() && b.isExpanded() ? 0 : -1
						}
					}),
					n = e.createClass("Expander", {
						base: e.Group,
						constructor: function(a) {
							this.callBase(), this.radius = 6, this.outline = new e.Circle(this.radius).stroke("gray").fill("white"), this.sign = (new e.Path).stroke("gray"), this.addShapes([this.outline, this.sign]), this.initEvent(a), this.setId(f.uuid("node_expander")), this.setStyle("cursor", "pointer")
						},
						initEvent: function(b) {
							this.on("mousedown", function(c) {
								a.select([b], !0), b.isExpanded() ? b.collapse() : b.expand(), b.renderTree().getMinder().layout(100), b.getMinder().fire("contentchange"), c.stopPropagation(), c.preventDefault()
							}), this.on("dblclick click mouseup", function(a) {
								a.stopPropagation(), a.preventDefault()
							})
						},
						setState: function(a) {
							if ("hide" == a) return void this.setVisible(!1);
							this.setVisible(!0);
							var b = ["M", 1.5 - this.radius, 0, "L", this.radius - 1.5, 0];
							a == d && b.push(["M", 0, 1.5 - this.radius, "L", 0, this.radius - 1.5]), this.sign.setPathData(b)
						}
					}),
					o = e.createClass("ExpanderRenderer", {
						base: k,
						create: function(a) {
							return a.isRoot() ? void 0 : (this.expander = new n(a), a.getRenderContainer().prependShape(this.expander), a.expanderRenderer = this, this.node = a, this.expander)
						},
						shouldRender: function(a) {
							return !a.isRoot()
						},
						update: function(a, c, d) {
							if (c.parent) {
								var e = c.parent.isExpanded();
								a.setState(e && c.children.length ? c.getData(b) : "hide");
								var f = c.getLayoutVectorIn().normalize(a.radius + c.getStyle("stroke-width")),
									g = c.getVertexIn().offset(f.reverse());
								this.expander.setTranslate(g)
							}
						}
					});
				return {
					commands: {
						expand: j,
						expandtolevel: l,
						collapse: m
					},
					events: {
						layoutapply: function(a) {
							var b = a.node.getRenderer("ExpanderRenderer");
							b.getRenderShape() && b.update(b.getRenderShape(), a.node)
						},
						beforerender: function(a) {
							var b = a.node,
								c = !b.parent || b.parent.isExpanded();
							b.getRenderContainer().setVisible(c), c || a.stopPropagation()
						},
						"normal.keydown": function(a) {
							if ("textedit" != this.getStatus()) {
								if (a.originEvent.keyCode == g["/"]) {
									var b = this.getSelectedNode();
									if (!b || b == this.getRoot()) return;
									var c = b.isExpanded();
									this.getSelectedNodes().forEach(function(a) {
										c ? a.collapse() : a.expand(), a.renderTree()
									}), this.layout(100), this.fire("contentchange"), a.preventDefault(), a.stopPropagationImmediately()
								}
								a.isShortcutKey("Alt+`") && this.execCommand("expandtolevel", 9999);
								for (var d = 1; 6 > d; d++) a.isShortcutKey("Alt+" + d) && this.execCommand("expandtolevel", d)
							}
						}
					},
					renderers: {
						outside: o
					},
					contextmenu: [{
						command: "expandtoleaf",
						query: function() {
							return !a.getSelectedNode()
						},
						fn: function(a) {
							a.execCommand("expandtolevel", 9999)
						}
					}, {
						command: "expandtolevel1",
						query: function() {
							return !a.getSelectedNode()
						},
						fn: function(a) {
							a.execCommand("expandtolevel", 1)
						}
					}, {
						command: "expandtolevel2",
						query: function() {
							return !a.getSelectedNode()
						},
						fn: function(a) {
							a.execCommand("expandtolevel", 2)
						}
					}, {
						command: "expandtolevel3",
						query: function() {
							return !a.getSelectedNode()
						},
						fn: function(a) {
							a.execCommand("expandtolevel", 3)
						}
					}, {
						divider: !0
					}]
				}
			})
		}
	}, b[47] = {
		value: function(a, c, d) {
			function e(a, b) {
				return a.getData(b) || a.getStyle(b)
			}
			var f = b.r(17),
				g = (b.r(33), b.r(19), b.r(21), b.r(9)),
				h = b.r(20),
				i = b.r(60);
			i.registerStyleHook(function(a, b) {
				var c = a.getData("color"),
					d = a.getStyle("selected-color"),
					f = a.getStyle("color"),
					g = c || (a.isSelected() && d ? d : f),
					h = e(a, "font-family"),
					i = e(a, "font-size");
				b.fill(g), b.eachItem(function(a, b) {
					b.setFont({
						family: h,
						size: i
					})
				})
			}), h.register("fontmodule", {
				commands: {
					forecolor: f.createClass("fontcolorCommand", {
						base: g,
						execute: function(a, b) {
							var c = a.getSelectedNodes();
							c.forEach(function(a) {
								a.setData("color", b), a.render()
							})
						},
						queryState: function(a) {
							return 0 === a.getSelectedNodes().length ? -1 : 0
						},
						queryValue: function(a) {
							return 1 == a.getSelectedNodes().length ? a.getSelectedNodes()[0].getData("color") : "mixed"
						}
					}),
					background: f.createClass("backgroudCommand", {
						base: g,
						execute: function(a, b) {
							var c = a.getSelectedNodes();
							c.forEach(function(a) {
								a.setData("background", b), a.render()
							})
						},
						queryState: function(a) {
							return 0 === a.getSelectedNodes().length ? -1 : 0
						},
						queryValue: function(a) {
							return 1 == a.getSelectedNodes().length ? a.getSelectedNodes()[0].getData("background") : "mixed"
						}
					}),
					fontfamily: f.createClass("fontfamilyCommand", {
						base: g,
						execute: function(a, b) {
							var c = a.getSelectedNodes();
							c.forEach(function(c) {
								c.setData("font-family", b), c.render(), a.layout()
							})
						},
						queryState: function(a) {
							return 0 === a.getSelectedNodes().length ? -1 : 0
						},
						queryValue: function(a) {
							var b = a.getSelectedNode();
							return b ? b.getData("font-family") : null
						}
					}),
					fontsize: f.createClass("fontsizeCommand", {
						base: g,
						execute: function(a, b) {
							var c = a.getSelectedNodes();
							c.forEach(function(c) {
								c.setData("font-size", b), c.render(), a.layout(300)
							})
						},
						queryState: function(a) {
							return 0 === a.getSelectedNodes().length ? -1 : 0
						},
						queryValue: function(a) {
							var b = a.getSelectedNode();
							return b ? b.getData("font-size") : null
						}
					})
				}
			})
		}
	}, b[48] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(19), b.r(21), b.r(9)),
				g = b.r(20),
				h = b.r(27),
				i = "M16.614,10.224h-1.278c-1.668,0-3.07-1.07-3.599-2.556h4.877c0.707,0,1.278-0.571,1.278-1.278V3.834 c0-0.707-0.571-1.278-1.278-1.278h-4.877C12.266,1.071,13.668,0,15.336,0h1.278c2.116,0,3.834,1.716,3.834,3.834V6.39 C20.448,8.508,18.73,10.224,16.614,10.224z M5.112,5.112c0-0.707,0.573-1.278,1.278-1.278h7.668c0.707,0,1.278,0.571,1.278,1.278 S14.765,6.39,14.058,6.39H6.39C5.685,6.39,5.112,5.819,5.112,5.112z M2.556,3.834V6.39c0,0.707,0.573,1.278,1.278,1.278h4.877 c-0.528,1.486-1.932,2.556-3.599,2.556H3.834C1.716,10.224,0,8.508,0,6.39V3.834C0,1.716,1.716,0,3.834,0h1.278 c1.667,0,3.071,1.071,3.599,2.556H3.834C3.129,2.556,2.556,3.127,2.556,3.834z";
			g.register("hyperlink", {
				commands: {
					hyperlink: e.createClass("hyperlink", {
						base: f,
						execute: function(a, b, c) {
							var d = a.getSelectedNodes();
							d.forEach(function(a) {
								a.setData("hyperlink", b), a.setData("hyperlinkTitle", b && c), a.render()
							}), a.layout()
						},
						queryState: function(a) {
							var b = a.getSelectedNodes(),
								c = 0;
							return 0 === b.length ? -1 : (b.forEach(function(a) {
								return a && a.getData("hyperlink") ? (c = 0, !1) : void 0
							}), c)
						},
						queryValue: function(a) {
							var b = a.getSelectedNode();
							return {
								url: b.getData("hyperlink"),
								title: b.getData("hyperlinkTitle")
							}
						}
					})
				},
				renderers: {
					right: e.createClass("hyperlinkrender", {
						base: h,
						create: function() {
							var a = new e.HyperLink,
								b = new e.Path,
								c = new e.Rect(24, 22, -2, -6, 4).fill("rgba(255, 255, 255, 0)");
							return b.setPathData(i).fill("#666"), a.addShape(c), a.addShape(b), a.setTarget("_blank"), a.setStyle("cursor", "pointer"), a.on("mouseover", function() {
								c.fill("rgba(255, 255, 200, .8)")
							}).on("mouseout", function() {
								c.fill("rgba(255, 255, 255, 0)")
							}), a
						},
						shouldRender: function(a) {
							return a.getData("hyperlink")
						},
						update: function(a, b, c) {
							var d = b.getData("hyperlink");
							a.setHref(d);
							var f = b.getData("hyperlinkTitle");
							f = f ? [f, "(", d, ")"].join("") : d, a.node.setAttributeNS("http://www.w3.org/1999/xlink", "title", f);
							var g = b.getStyle("space-right");
							return a.setTranslate(c.right + g + 2, -5), new e.Box({
								x: c.right + g,
								y: -11,
								width: 24,
								height: 22
							})
						}
					})
				}
			})
		}
	}, b[49] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(19), b.r(21), b.r(9)),
				g = b.r(20),
				h = b.r(27);
			g.register("image", function() {
				function a(a, b) {
					var c = document.createElement("img");
					c.onload = function() {
						b(c.width, c.height)
					}, c.onerror = function() {
						b(null)
					}, c.src = a
				}

				function b(a, b, c, d) {
					var e = a / b,
						f = c / d;
					return a > c && e > f ? (a = c, b = a / e) : b > d && (b = d, a = b * e), {
						width: 0 | a,
						height: 0 | b
					}
				}
				var c = e.createClass("ImageCommand", {
						base: f,
						execute: function(c, d, e) {
							var f = c.getSelectedNodes();
							a(d, function(a, g) {
								f.forEach(function(f) {
									var h = b(a, g, c.getOption("maxImageWidth"), c.getOption("maxImageHeight"));
									f.setData("image", d), f.setData("imageTitle", d && e), f.setData("imageSize", d && h), f.render()
								}), c.fire("saveScene"), c.layout(300)
							})
						},
						queryState: function(a) {
							var b = a.getSelectedNodes(),
								c = 0;
							return 0 === b.length ? -1 : (b.forEach(function(a) {
								return a && a.getData("image") ? (c = 0, !1) : void 0
							}), c)
						},
						queryValue: function(a) {
							var b = a.getSelectedNode();
							return {
								url: b.getData("image"),
								title: b.getData("imageTitle")
							}
						}
					}),
					d = e.createClass("ImageRenderer", {
						base: h,
						create: function(a) {
							return new e.Image(a.getData("image"))
						},
						shouldRender: function(a) {
							return a.getData("image")
						},
						update: function(a, b, c) {
							var d = b.getData("image"),
								f = b.getData("imageTitle"),
								g = b.getData("imageSize"),
								h = b.getStyle("space-top");
							if (g) {
								f && a.node.setAttributeNS("http://www.w3.org/1999/xlink", "title", f);
								var i = c.cx - g.width / 2,
									j = c.y - g.height - h;
								return a.setUrl(d).setX(0 | i).setY(0 | j).setWidth(0 | g.width).setHeight(0 | g.height), new e.Box(0 | i, 0 | j, 0 | g.width, 0 | g.height)
							}
						}
					});
				return {
					defaultOptions: {
						maxImageWidth: 200,
						maxImageHeight: 200
					},
					commands: {
						image: c
					},
					renderers: {
						top: d
					}
				}
			})
		}
	}, b[50] = {
		value: function(a, c, d) {
			var e = (b.r(17), b.r(33), b.r(15), b.r(19), b.r(21), b.r(9), b.r(20));
			b.r(27);
			e.register("KeyboardModule", function() {
				function a(a) {
					var b, d = [];
					a.traverse(function(a) {
						b = a.getLayoutBox(), b.width && b.height && d.push({
							left: b.x,
							top: b.y,
							right: b.x + b.width,
							bottom: b.y + b.height,
							width: b.width,
							height: b.height,
							node: a
						})
					});
					for (var e = 0; e < d.length; e++) c(d, e)
				}

				function b(a, b) {
					var c, d, h, i, j, k, l;
					c = e(a.left, b.left), d = f(a.right, b.right), h = e(a.top, b.top), i = f(a.bottom, b.bottom), j = d - c - a.width - b.width, k = i - h - a.height - b.height, l = 0 > j ? k : 0 > k ? j : g(j * j + k * k);
					var m = a.node,
						n = b.node;
					return m.parent == n.parent && (l /= 10), n.parent == m && (l /= 5), l
				}

				function c(a, c) {
					for (var d, e, f = a[c], g = {}, h = 0; h < a.length; h++) h != c && (d = a[h], e = b(d, f), d.right < f.left && (!g.left || e < g.left.dist) && (g.left = {
						dist: e,
						node: d.node
					}), d.left > f.right && (!g.right || e < g.right.dist) && (g.right = {
						dist: e,
						node: d.node
					}), d.bottom < f.top && (!g.top || e < g.top.dist) && (g.top = {
						dist: e,
						node: d.node
					}), d.top > f.bottom && (!g.down || e < g.down.dist) && (g.down = {
						dist: e,
						node: d.node
					}));
					f.node._nearestNodes = {
						right: g.right && g.right.node || null,
						top: g.top && g.top.node || null,
						left: g.left && g.left.node || null,
						down: g.down && g.down.node || null
					}
				}

				function d(b, c) {
					var d = b.getSelectedNode();
					if (!d) return b.select(b.getRoot()), void a(b.getRoot());
					d._nearestNodes || a(b.getRoot());
					var e = d._nearestNodes[c];
					e && b.select(e, !0)
				}
				var e = Math.min,
					f = Math.max,
					g = (Math.abs, Math.sqrt);
				Math.exp;
				return {
					events: {
						layoutallfinish: function() {
							var b = this.getRoot();
							a(b)
						},
						"normal.keydown readonly.keydown": function(a) {
							var b = this;
							["left", "right", "up", "down"].forEach(function(c) {
								a.isShortcutKey(c) && (d(b, "up" == c ? "top" : c), a.preventDefault())
							})
						}
					}
				}
			})
		}
	}, b[51] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(9),
				g = b.r(20),
				h = e.createClass("LayoutCommand", {
					base: f,
					execute: function(a, b) {
						var c = a.getSelectedNodes();
						c.forEach(function(a) {
							a.layout(b)
						})
					},
					queryValue: function(a) {
						var b = a.getSelectedNode();
						return b ? b.getData("layout") : void 0
					},
					queryState: function(a) {
						return a.getSelectedNode() ? 0 : -1
					}
				}),
				i = e.createClass("ResetLayoutCommand", {
					base: f,
					execute: function(a) {
						var b = a.getSelectedNodes();
						b.length || (b = [a.getRoot()]), b.forEach(function(a) {
							a.traverse(function(a) {
								a.resetLayoutOffset(), a.isRoot() || a.setData("layout", null)
							})
						}), a.layout(300)
					},
					enableReadOnly: !0
				});
			g.register("LayoutModule", {
				commands: {
					layout: h,
					resetlayout: i
				},
				contextmenu: [{
					command: "resetlayout"
				}, {
					divider: !0
				}],
				commandShortcutKeys: {
					resetlayout: "Ctrl+Shift+L"
				}
			})
		}
	}, b[52] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(19), b.r(21)),
				g = b.r(9),
				h = b.r(20),
				i = (b.r(27), e.createClass("AppendChildCommand", {
					base: g,
					execute: function(a, b) {
						var c = a.getSelectedNode();
						if (!c) return null;
						var d = a.createNode(b, c);
						a.select(d, !0), c.isExpanded() ? d.render() : (c.expand(), c.renderTree()), a.layout(600)
					},
					queryState: function(a) {
						var b = a.getSelectedNode();
						return b ? 0 : -1
					}
				})),
				j = e.createClass("AppendSiblingCommand", {
					base: g,
					execute: function(a, b) {
						var c = a.getSelectedNode(),
							d = c.parent;
						if (!d) return a.execCommand("AppendChildNode", b);
						var e = a.createNode(b, d, c.getIndex() + 1);
						e.setGlobalLayoutTransform(c.getGlobalLayoutTransform()), a.select(e, !0), e.render(), a.layout(600)
					},
					queryState: function(a) {
						var b = a.getSelectedNode();
						return b ? 0 : -1
					}
				}),
				k = e.createClass("RemoverNodeCommand", {
					base: g,
					execute: function(a) {
						var b = a.getSelectedNodes(),
							c = f.getCommonAncestor.apply(null, b),
							d = b[0].getIndex();
						if (b.forEach(function(b) {
							b.isRoot() || a.removeNode(b)
						}), 1 == b.length) {
							var e = c.children[d - 1] || c.children[d];
							a.select(e || c || a.getRoot(), !0)
						} else a.select(c || a.getRoot(), !0);
						a.layout(600)
					},
					queryState: function(a) {
						var b = a.getSelectedNode();
						return b && !b.isRoot() ? 0 : -1
					}
				}),
				l = e.createClass("AppendParentCommand", {
					base: g,
					execute: function(a, b) {
						var c = a.getSelectedNodes();
						c.sort(function(a, b) {
							return a.getIndex() - b.getIndex()
						});
						var d = c[0].parent,
							e = a.createNode(b, d, c[0].getIndex());
						c.forEach(function(a) {
							e.appendChild(a)
						}), e.setGlobalLayoutTransform(c[c.length >> 1].getGlobalLayoutTransform()), a.select(e, !0), a.layout(600)
					},
					queryState: function(a) {
						var b = a.getSelectedNodes();
						if (!b.length) return -1;
						var c = b[0].parent;
						if (!c) return -1;
						for (var d = 1; d < b.length; d++)
							if (b[d].parent != c) return -1;
						return 0
					}
				});
			h.register("NodeModule", function() {
				return {
					commands: {
						AppendChildNode: i,
						AppendSiblingNode: j,
						RemoveNode: k,
						AppendParentNode: l
					},
					commandShortcutKeys: {
						appendsiblingnode: "normal::Enter",
						appendchildnode: "normal::Insert|Tab",
						appendparentnode: "normal::Shift+Tab|normal::Shift+Insert",
						removenode: "normal::Del|Backspace"
					}
				}
			})
		}
	}, b[53] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(19), b.r(21), b.r(9)),
				g = b.r(20),
				h = b.r(27);
			g.register("NoteModule", function() {
				var a = "M9,9H3V8h6L9,9L9,9z M9,7H3V6h6V7z M9,5H3V4h6V5z M8.5,11H2V2h8v7.5 M9,12l2-2V1H1v11",
					b = e.createClass("NoteCommand", {
						base: f,
						execute: function(a, b) {
							var c = a.getSelectedNode();
							c.setData("note", b), c.render(), c.getMinder().layout(300)
						},
						queryState: function(a) {
							return 1 === a.getSelectedNodes().length ? 0 : -1
						},
						queryValue: function(a) {
							var b = a.getSelectedNode();
							return b && b.getData("note")
						}
					}),
					c = e.createClass("NoteIcon", {
						base: e.Group,
						constructor: function() {
							this.callBase(), this.width = 16, this.height = 17, this.rect = new e.Rect(16, 17, .5, -8.5, 2).fill("transparent"), this.path = (new e.Path).setPathData(a).setTranslate(2.5, -6.5), this.addShapes([this.rect, this.path]), this.on("mouseover", function() {
								this.rect.fill("rgba(255, 255, 200, .8)")
							}).on("mouseout", function() {
								this.rect.fill("transparent")
							}), this.setStyle("cursor", "pointer")
						}
					}),
					d = e.createClass("NoteIconRenderer", {
						base: h,
						create: function(a) {
							var b = new c;
							return b.on("mousedown", function(b) {
								b.preventDefault(), a.getMinder().fire("editnoterequest")
							}), b.on("mouseover", function() {
								a.getMinder().fire("shownoterequest", {
									node: a,
									icon: b
								})
							}), b.on("mouseout", function() {
								a.getMinder().fire("hidenoterequest", {
									node: a,
									icon: b
								})
							}), b
						},
						shouldRender: function(a) {
							return a.getData("note")
						},
						update: function(a, b, c) {
							var d = c.right + b.getStyle("space-left"),
								f = c.cy;
							return a.path.fill(b.getStyle("color")), a.setTranslate(d, f), new e.Box(d, Math.round(f - a.height / 2), a.width, a.height)
						}
					});
				return {
					renderers: {
						right: d
					},
					commands: {
						note: b
					}
				}
			})
		}
	}, b[54] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(33),
				g = (b.r(19), b.r(21), b.r(9), b.r(20)),
				h = b.r(27),
				i = e.createClass("OutlineRenderer", {
					base: h,
					create: function(a) {
						var b = (new e.Rect).setId(f.uuid("node_outline"));
						return this.bringToBack = !0, b
					},
					update: function(a, b, c) {
						var d = b.getStyle("shape"),
							f = b.getStyle("padding-left"),
							g = b.getStyle("padding-right"),
							h = b.getStyle("padding-top"),
							i = b.getStyle("padding-bottom"),
							j = {
								x: c.x - f,
								y: c.y - h,
								width: c.width + f + g,
								height: c.height + h + i
							}, k = b.getStyle("radius");
						if (d && "circle" == d) {
							var l = Math.pow,
								m = Math.round;
							k = m(Math.sqrt(l(j.width, 2) + l(j.height, 2)) / 2), j.x = c.cx - k, j.y = c.cy - k, j.width = 2 * k, j.height = 2 * k
						}
						var n = b.isSelected() ? b.getMinder().isFocused() ? "selected-" : "blur-selected-" : "";
						return a.setPosition(j.x, j.y).setSize(j.width, j.height).setRadius(k).fill(b.getData("background") || b.getStyle(n + "background") || b.getStyle("background")).stroke(b.getStyle(n + "stroke" || b.getStyle("stroke")), b.getStyle(n + "stroke-width")), new e.Box(j)
					}
				}),
				j = e.createClass("ShadowRenderer", {
					base: h,
					create: function(a) {
						return this.bringToBack = !0, new e.Rect
					},
					shouldRender: function(a) {
						return a.getStyle("shadow")
					},
					update: function(a, b, c) {
						a.setPosition(c.x + 4, c.y + 5).fill(b.getStyle("shadow"));
						var d = b.getStyle("shape");
						if (d) {
							if ("circle" == d) {
								var e = Math.max(c.width, c.height);
								a.setSize(e, e), a.setRadius(e / 2)
							}
						} else a.setSize(c.width, c.height), a.setRadius(b.getStyle("radius"))
					}
				}),
				k = new e.Marker;
			k.setWidth(10), k.setHeight(12), k.setRef(0, 0), k.setViewBox(-6, -4, 8, 10), k.addShape((new e.Path).setPathData("M-5-3l5,3,-5,3").stroke("#33ffff"));
			var l = /wire/.test(window.location.href),
				m = e.createClass("WireframeRenderer", {
					base: h,
					create: function() {
						var a = new e.Group,
							b = this.oxy = (new e.Path).stroke("#f6f").setPathData("M0,-50L0,50M-50,0L50,0"),
							c = this.wireframe = (new e.Rect).stroke("lightgreen"),
							d = this.vectorIn = (new e.Path).stroke("#66ffff"),
							f = this.vectorOut = (new e.Path).stroke("#66ffff");
						return d.setMarker(k, "end"), f.setMarker(k, "end"), a.addShapes([b, c, d, f])
					},
					shouldRender: function() {
						return l
					},
					update: function(a, b, c) {
						this.wireframe.setPosition(c.x, c.y).setSize(c.width, c.height);
						var d = b.getVertexIn(),
							e = b.getVertexOut(),
							f = b.getLayoutVectorIn().normalize(30),
							g = b.getLayoutVectorOut().normalize(30);
						this.vectorIn.setPathData(["M", d.offset(f.reverse()), "L", d]), this.vectorOut.setPathData(["M", e, "l", g])
					}
				});
			g.register("OutlineModule", function() {
				return {
					events: l ? {
						ready: function() {
							this.getPaper().addResource(k)
						},
						layoutallfinish: function() {
							this.getRoot().traverse(function(a) {
								a.getRenderer("WireframeRenderer").update(null, a, a.getContentBox())
							})
						}
					} : null,
					renderers: {
						outline: i,
						outside: [j, m]
					}
				}
			})
		}
	}, b[55] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(33),
				g = (b.r(19), b.r(21), b.r(9)),
				h = b.r(20),
				i = b.r(27);
			h.register("PriorityModule", function() {
				var a = [null, ["#FF1200", "#840023"],
						["#0074FF", "#01467F"],
						["#00AF00", "#006300"],
						["#FF962E", "#B25000"],
						["#A464FF", "#4720C4"],
						["#A3A3A3", "#515151"],
						["#A3A3A3", "#515151"],
						["#A3A3A3", "#515151"],
						["#A3A3A3", "#515151"]
					],
					b = "M0,13c0,3.866,3.134,7,7,7h6c3.866,0,7-3.134,7-7V7H0V13z",
					c = "M20,10c0,3.866-3.134,7-7,7H7c-3.866,0-7-3.134-7-7V7c0-3.866,3.134-7,7-7h6c3.866,0,7,3.134,7,7V10z",
					d = "priority",
					h = e.createClass("PriorityIcon", {
						base: e.Group,
						constructor: function() {
							this.callBase(), this.setSize(20), this.create(), this.setId(f.uuid("node_priority"))
						},
						setSize: function(a) {
							this.width = this.height = a
						},
						create: function() {
							var a, d, f, g;
							a = (new e.Path).setPathData(c).fill("white"), d = (new e.Path).setPathData(b).setTranslate(.5, .5), f = (new e.Path).setPathData(c).setOpacity(.8).setTranslate(.5, .5), g = (new e.Text).setX(this.width / 2 - .5).setY(this.height / 2).setTextAnchor("middle").setVerticalAlign("middle").setFontItalic(!0).setFontSize(12).fill("white"), this.addShapes([d, f, g]), this.mask = f, this.back = d, this.number = g
						},
						setValue: function(b) {
							var c = this.back,
								d = this.mask,
								e = this.number,
								f = a[b];
							f && (c.fill(f[1]), d.fill(f[0])), e.setContent(b)
						}
					}),
					j = e.createClass("SetPriorityCommand", {
						base: g,
						execute: function(a, b) {
							for (var c = a.getSelectedNodes(), e = 0; e < c.length; e++) c[e].setData(d, b || null).render();
							a.layout()
						},
						queryValue: function(a) {
							for (var b, c = a.getSelectedNodes(), e = 0; e < c.length && !(b = c[e].getData(d)); e++);
							return b || null
						},
						queryState: function(a) {
							return a.getSelectedNodes().length ? 0 : -1
						}
					});
				return {
					commands: {
						priority: j
					},
					renderers: {
						left: e.createClass("PriorityRenderer", {
							base: i,
							create: function(a) {
								return new h
							},
							shouldRender: function(a) {
								return a.getData(d)
							},
							update: function(a, b, c) {
								var f, g, h = b.getData(d),
									i = b.getStyle("space-left");
								return a.setValue(h), f = c.left - a.width - i, g = -a.height / 2, a.setTranslate(f, g), new e.Box({
									x: f,
									y: g,
									width: a.width,
									height: a.height
								})
							}
						})
					}
				}
			})
		}
	}, b[56] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(33),
				g = (b.r(19), b.r(21), b.r(9)),
				h = b.r(20),
				i = b.r(27);
			h.register("ProgressModule", function() {
				var a = this,
					b = "progress",
					c = "#FFED83",
					d = "#43BC00",
					h = "M10,3c4.418,0,8,3.582,8,8h1c0-5.523-3.477-10-9-10S1,5.477,1,11h1C2,6.582,5.582,3,10,3z",
					j = "#8E8E8E",
					k = "M10,0C4.477,0,0,4.477,0,10c0,5.523,4.477,10,10,10s10-4.477,10-10C20,4.477,15.523,0,10,0zM10,18c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S14.418,18,10,18z",
					l = (new e.LinearGradient).pipe(function(a) {
						a.setStartPosition(0, 0), a.setEndPosition(0, 1), a.addStop(0, "#fff"), a.addStop(1, "#ccc")
					}),
					m = "M15.812,7.896l-6.75,6.75l-4.5-4.5L6.25,8.459l2.812,2.803l5.062-5.053L15.812,7.896z",
					n = "#EEE";
				a.getPaper().addResource(l);
				var o = e.createClass("ProgressIcon", {
						base: e.Group,
						constructor: function(a) {
							this.callBase(), this.setSize(20), this.create(), this.setValue(a), this.setId(f.uuid("node_progress")), this.translate(.5, .5)
						},
						setSize: function(a) {
							this.width = this.height = a
						},
						create: function() {
							var a, b, f, g, i;
							a = new e.Circle(9).fill(c), b = new e.Pie(9, 0).fill(d), f = (new e.Path).setPathData(h).setTranslate(-10, -10).fill(j), g = (new e.Path).setTranslate(-10, -10).setPathData(k).fill(l), i = (new e.Path).setTranslate(-10, -10).setPathData(m).fill(n), this.addShapes([a, b, f, i, g]), this.pie = b, this.check = i
						},
						setValue: function(a) {
							this.pie.setAngle(-360 * (a - 1) / 8), this.check.setVisible(9 == a)
						}
					}),
					p = e.createClass("ProgressCommand", {
						base: g,
						execute: function(a, c) {
							for (var d = a.getSelectedNodes(), e = 0; e < d.length; e++) d[e].setData(b, c || null).render();
							a.layout()
						},
						queryValue: function(a) {
							for (var c, d = a.getSelectedNodes(), e = 0; e < d.length && !(c = d[e].getData(b)); e++);
							return c || null
						},
						queryState: function(a) {
							return a.getSelectedNodes().length ? 0 : -1
						}
					});
				return {
					commands: {
						progress: p
					},
					renderers: {
						left: e.createClass("ProgressRenderer", {
							base: i,
							create: function(a) {
								return new o
							},
							shouldRender: function(a) {
								return a.getData(b)
							},
							update: function(a, c, d) {
								var f, g, h = c.getData(b),
									i = c.getStyle("space-left");
								return a.setValue(h), f = d.left - a.width - i, g = -a.height / 2, a.setTranslate(f + a.width / 2, g + a.height / 2), new e.Box(f, g, a.width, a.height)
							}
						})
					}
				}
			})
		}
	}, b[57] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(19)),
				g = (b.r(21), b.r(9)),
				h = b.r(20),
				i = b.r(27);
			h.register("Resource", function() {
				var a = function() {
						var a, b, c, d, e, f, g, h, i, j, k;
						return k = 4 * (1 << 30), a = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], e = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479], j = function(a) {
							return 0 > a && (a += k), ("00000000" + a.toString(16)).slice(-8)
						}, f = [
							[16, 50, 84, 118, 152, 186, 220, 254],
							[174, 132, 249, 109, 193, 32, 123, 53],
							[139, 12, 37, 223, 234, 99, 23, 73],
							[151, 19, 205, 235, 98, 165, 4, 143],
							[9, 117, 66, 250, 30, 203, 134, 211],
							[194, 166, 176, 56, 212, 87, 239, 145],
							[92, 241, 222, 164, 112, 54, 41, 184],
							[189, 231, 28, 147, 5, 79, 104, 162],
							[246, 158, 59, 128, 44, 125, 65, 90],
							[42, 72, 103, 81, 191, 233, 195, 13]
						], g = function(a, b, c) {
							var d = h[a] ^ h[b];
							h[a] = d >>> c | d << 32 - c
						}, b = function(a, b, j, k, l) {
							var m = d + f[c][a] % 16,
								n = d + (f[c][a] >> 4);
							b %= 4, j = 4 + j % 4, k = 8 + k % 4, l = 12 + l % 4, h[b] += h[j] + (i[m] ^ e[n % 16]), g(l, b, 16), h[k] += h[l], g(j, k, 12), h[b] += h[j] + (i[n] ^ e[m % 16]), g(l, b, 8), h[k] += h[l], g(j, k, 7)
						},
							function(f, g) {
								g instanceof Array && 4 === g.length || (g = [0, 0, 0, 0]);
								var k, l, m, n, o, p, q, r;
								for (l = a.slice(0), k = e.slice(0, 8), c = 0; 4 > c; c += 1) k[c] ^= g[c];
								if (m = 16 * f.length, o = m % 512 > 446 || m % 512 === 0 ? 0 : m, m % 512 === 432) f += "老";
								else {
									for (f += "耀"; f.length % 32 !== 27;) f += "\x00";
									f += ""
								}
								for (i = [], r = 0; r < f.length; r += 2) i.push(65536 * f.charCodeAt(r) + f.charCodeAt(r + 1));
								for (i.push(0), i.push(m), p = i.length - 16, q = 0, d = 0; d < i.length; d += 16) {
									for (q += 512, n = d === p ? o : Math.min(m, q), h = l.concat(k), h[12] ^= n, h[13] ^= n, c = 0; 10 > c; c += 1)
										for (r = 0; 8 > r; r += 1) 4 > r ? b(r, r, r, r, r) : b(r, r, r + 1, r + 2, r + 3);
									for (r = 0; 8 > r; r += 1) l[r] ^= g[r % 4] ^ h[r] ^ h[r + 8]
								}
								return l.map(j).join("")
							}
					}(),
					b = [51, 303, 75, 200, 157, 0, 26, 254].map(function(a) {
						return e.Color.createHSL(a, 100, 85)
					});
				e.extendClass(f, {
					getHashCode: function(b) {
						b = a(b);
						var c, d, e = 1315423911;
						for (c = b.length - 1; c >= 0; c--) d = b.charCodeAt(c), e ^= (e << 5) + d + (e >> 2);
						return 2147483647 & e
					},
					getResourceColor: function(a) {
						var c, d = this._getResourceColorIndexMapping();
						return d.hasOwnProperty(a) || (c = this._getNextResourceColorIndex(), d[a] = c), b[d[a]] || e.Color.createHSL(Math.floor(this.getHashCode(a) / 2147483647 * 359), 100, 85)
					},
					getUsedResource: function() {
						var a, b = this._getResourceColorIndexMapping(),
							c = [];
						for (a in b) b.hasOwnProperty(a) && c.push(a);
						return c
					},
					_getNextResourceColorIndex: function() {
						var a, c, d, e = this._getResourceColorIndexMapping();
						c = [];
						for (a in e) e.hasOwnProperty(a) && c.push(e[a]);
						for (d = 0; d < b.length; d++)
							if (!~c.indexOf(d)) return d;
						return -1
					},
					_getResourceColorIndexMapping: function() {
						return this._resourceColorMapping || (this._resourceColorMapping = {})
					}
				});
				var c = e.createClass("ResourceCommand", {
						base: g,
						execute: function(a, b) {
							var c = a.getSelectedNodes();
							"string" == typeof b && (b = [b]), c.forEach(function(a) {
								a.setData("resource", b).render()
							}), a.layout(200)
						},
						queryValue: function(a) {
							var b = a.getSelectedNodes(),
								c = [];
							return b.forEach(function(a) {
								var b = a.getData("resource");
								b && b.forEach(function(a) {~
									c.indexOf(a) || c.push(a)
								})
							}), c
						},
						queryState: function(a) {
							return a.getSelectedNode() ? 0 : -1
						}
					}),
					d = e.createClass("ResourceOverlay", {
						base: e.Group,
						constructor: function() {
							this.callBase();
							var a, b;
							b = this.rect = (new e.Rect).setRadius(4), a = this.text = (new e.Text).setFontSize(12).setVerticalAlign("middle"), this.addShapes([b, a])
						},
						setValue: function(a, b) {
							var c, d, e, f = 8,
								g = 4;
							c = this.text, a == this.lastResourceName ? d = this.lastBox : (c.setContent(a), d = c.getBoundaryBox(), this.lastResourceName = a, this.lastBox = d), c.setX(f).fill(b.dec("l", 70)), e = this.rect, e.setPosition(0, d.y - g), this.width = Math.round(d.width + 2 * f), this.height = Math.round(d.height + 2 * g), e.setSize(this.width, this.height), e.fill(b)
						}
					}),
					h = e.createClass("ResourceRenderer", {
						base: i,
						create: function(a) {
							return this.overlays = [], new e.Group
						},
						shouldRender: function(a) {
							return a.getData("resource") && a.getData("resource").length
						},
						update: function(a, b, c) {
							var f = b.getStyle("space-right"),
								g = this.overlays,
								h = b.getData("resource").filter(function(a) {
									return null !== a
								});
							if (0 !== h.length) {
								var i, j, k, l = b.getMinder();
								for (k = 0, i = 0; i < h.length; i++) k += f, j = g[i], j || (j = new d, g.push(j), a.addShape(j)), j.setVisible(!0), j.setValue(h[i], l.getResourceColor(h[i])), j.setTranslate(k, -1), k += j.width;
								for (; j = g[i++];) j.setVisible(!1);
								return a.setTranslate(c.right, 0), new e.Box({
									x: c.right,
									y: Math.round(-g[0].height / 2),
									width: k,
									height: g[0].height
								})
							}
						}
					});
				return {
					commands: {
						resource: c
					},
					renderers: {
						right: h
					}
				}
			})
		}
	}, b[58] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(19), b.r(21), b.r(9), b.r(20));
			b.r(27);
			f.register("Select", function() {
				var a = this,
					b = a.getRenderContainer(),
					c = function() {
						var c = null,
							d = new e.Path,
							f = !1,
							g = 10;
						return {
							selectStart: function(a) {
								return a.originEvent.button || a.originEvent.altKey ? void 0 : c ? this.selectEnd() : void(c = a.getPosition(b).round())
							},
							selectMove: function(h) {
								if ("textedit" != a.getStatus() && c) {
									var i = c,
										j = h.getPosition(b);
									if (!f) {
										if (e.Vector.fromPoints(i, j).length() < g) return;
										f = !0, b.addShape(d), d.fill(a.getStyle("marquee-background")).stroke(a.getStyle("marquee-stroke")).setOpacity(.8).getDrawer().clear()
									}
									var k = new e.Box(i.x, i.y, j.x - i.x, j.y - i.y),
										l = [];
									k.left = Math.round(k.left), k.top = Math.round(k.top), k.right = Math.round(k.right), k.bottom = Math.round(k.bottom), d.getDrawer().pipe(function() {
										this.clear(), this.moveTo(k.left, k.top), this.lineTo(k.right, k.top), this.lineTo(k.right, k.bottom), this.lineTo(k.left, k.bottom), this.close()
									}), a.getRoot().traverse(function(a) {
										var b = a.getLayoutBox();
										b.intersect(k).isEmpty() || l.push(a)
									}), a.select(l, !0), window.getSelection().removeAllRanges()
								}
							},
							selectEnd: function(a) {
								c && (c = null), f && (d.fadeOut(200, "ease", 0, function() {
									d.remove && d.remove()
								}), f = !1)
							}
						}
					}(),
					d = null,
					f = null;
				return {
					init: function() {
						window.addEventListener("mouseup", function() {
							c.selectEnd()
						})
					},
					events: {
						mousedown: function(a) {
							var b = a.getTargetNode();
							b ? a.isShortcutKey("Ctrl") ? this.toggleSelect(b) : b.isSelected() ? this.isSingleSelect() || (d = b, f = a.getPosition()) : this.select(b, !0) : (this.removeAllSelectedNodes(), c.selectStart(a), this.setStatus("normal"))
						},
						mousemove: c.selectMove,
						mouseup: function(a) {
							var b = a.getTargetNode();
							if (b && b == d) {
								var g = a.getPosition(),
									h = e.Vector.fromPoints(f, g);
								h.length() < 1 && this.select(d, !0), d = null
							}
							c.selectEnd(a)
						},
						"normal.keydown": function(a) {
							if (a.isShortcutKey("ctrl+a")) {
								var b = [];
								this.getRoot().traverse(function(a) {
									b.push(a)
								}), this.select(b, !0), a.preventDefault()
							}
						}
					}
				}
			})
		}
	}, b[59] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(19), b.r(21), b.r(9)),
				g = b.r(20);
			b.r(27);
			g.register("StyleModule", function() {
				function a(a) {
					for (var c = a.getData(), d = 0; d < b.length; d++)
						if (b[d] in c) return !0
				}
				var b = ["font-size", "font-family", "font-weight", "font-style", "background", "color"],
					c = null;
				return {
					commands: {
						copystyle: e.createClass("CopyStyleCommand", {
							base: f,
							execute: function(a) {
								var d = a.getSelectedNode(),
									e = d.getData();
								return c = {}, b.forEach(function(a) {
									a in e ? c[a] = e[a] : (c[a] = null, delete c[a])
								}), c
							},
							queryState: function(b) {
								var c = b.getSelectedNodes();
								return 1 !== c.length ? -1 : a(c[0]) ? 0 : -1
							}
						}),
						pastestyle: e.createClass("PastStyleCommand", {
							base: f,
							execute: function(a) {
								return a.getSelectedNodes().forEach(function(a) {
									for (var b in c) c.hasOwnProperty(b) && a.setData(b, c[b])
								}), a.renderNodeBatch(a.getSelectedNodes()), a.layout(300), c
							},
							queryState: function(a) {
								return c && a.getSelectedNodes().length ? 0 : -1
							}
						}),
						clearstyle: e.createClass("ClearStyleCommand", {
							base: f,
							execute: function(a) {
								return a.getSelectedNodes().forEach(function(a) {
									b.forEach(function(b) {
										a.setData(b)
									})
								}), a.renderNodeBatch(a.getSelectedNodes()), a.layout(300), c
							},
							queryState: function(b) {
								var c = b.getSelectedNodes();
								if (!c.length) return -1;
								for (var d = 0; d < c.length; d++)
									if (a(c[d])) return 0;
								return -1
							}
						})
					}
				}
			})
		}
	}, b[60] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = b.r(33),
				g = (b.r(19), b.r(21)),
				h = b.r(9),
				i = b.r(20),
				j = b.r(27),
				k = {
					safari: {
						"微软雅黑,Microsoft YaHei": -.17,
						"楷体,楷体_GB2312,SimKai": -.1,
						"隶书, SimLi": -.1,
						"comic sans ms": -.23,
						"impact,chicago": -.15,
						"times new roman": -.1,
						"arial black,avant garde": -.17,
						"default": 0
					},
					ie: {
						10: {
							"微软雅黑,Microsoft YaHei": -.17,
							"comic sans ms": -.17,
							"impact,chicago": -.08,
							"times new roman": .04,
							"arial black,avant garde": -.17,
							"default": -.15
						},
						11: {
							"微软雅黑,Microsoft YaHei": -.17,
							"arial,helvetica,sans-serif": -.17,
							"comic sans ms": -.17,
							"impact,chicago": -.08,
							"times new roman": .04,
							"sans-serif": -.16,
							"arial black,avant garde": -.17,
							"default": -.15
						}
					},
					edge: {
						"微软雅黑,Microsoft YaHei": -.15,
						"arial,helvetica,sans-serif": -.17,
						"comic sans ms": -.17,
						"impact,chicago": -.08,
						"sans-serif": -.16,
						"arial black,avant garde": -.17,
						"default": -.15
					},
					sg: {
						"微软雅黑,Microsoft YaHei": -.15,
						"arial,helvetica,sans-serif": -.05,
						"comic sans ms": -.22,
						"impact,chicago": -.16,
						"times new roman": -.03,
						"arial black,avant garde": -.22,
						"default": -.15
					},
					chrome: {
						Mac: {
							"andale mono": -.05,
							"comic sans ms": -.3,
							"impact,chicago": -.13,
							"times new roman": -.1,
							"arial black,avant garde": -.17,
							"default": 0
						},
						Win: {
							"微软雅黑,Microsoft YaHei": -.15,
							"arial,helvetica,sans-serif": -.02,
							"arial black,avant garde": -.2,
							"comic sans ms": -.2,
							"impact,chicago": -.12,
							"times new roman": -.02,
							"default": -.15
						},
						Lux: {
							"andale mono": -.05,
							"comic sans ms": -.3,
							"impact,chicago": -.13,
							"times new roman": -.1,
							"arial black,avant garde": -.17,
							"default": 0
						}
					},
					firefox: {
						Mac: {
							"微软雅黑,Microsoft YaHei": -.2,
							"宋体,SimSun": .05,
							"comic sans ms": -.2,
							"impact,chicago": -.15,
							"arial black,avant garde": -.17,
							"times new roman": -.1,
							"default": .05
						},
						Win: {
							"微软雅黑,Microsoft YaHei": -.16,
							"andale mono": -.17,
							"arial,helvetica,sans-serif": -.17,
							"comic sans ms": -.22,
							"impact,chicago": -.23,
							"times new roman": -.22,
							"sans-serif": -.22,
							"arial black,avant garde": -.17,
							"default": -.16
						},
						Lux: {
							"宋体,SimSun": -.2,
							"微软雅黑,Microsoft YaHei": -.2,
							"黑体, SimHei": -.2,
							"隶书, SimLi": -.2,
							"楷体,楷体_GB2312,SimKai": -.2,
							"andale mono": -.2,
							"arial,helvetica,sans-serif": -.2,
							"comic sans ms": -.2,
							"impact,chicago": -.2,
							"times new roman": -.2,
							"sans-serif": -.2,
							"arial black,avant garde": -.2,
							"default": -.16
						}
					}
				}, l = e.createClass("TextRenderer", {
					base: j,
					create: function() {
						return (new e.Group).setId(f.uuid("node_text"))
					},
					update: function(a, b) {
						function c(a) {
							return b.getData(a) || b.getStyle(a)
						}
						var d, f = b.getText(),
							g = f ? f.split("\n") : [" "],
							h = b.getStyle("line-height"),
							i = c("font-size"),
							j = c("font-family") || "default",
							l = h * i * g.length - (h - 1) * i,
							m = -l / 2,
							n = e.Browser;
						n.chrome || n.opera || n.bd || "chrome" === n.lb ? d = k.chrome[n.platform][j] : n.gecko ? d = k.firefox[n.platform][j] : n.sg ? d = k.sg[j] : n.safari ? d = k.safari[j] : n.ie ? d = k.ie[n.version][j] : n.edge ? d = k.edge[j] : n.lb && (d = .9), a.setTranslate(0, (d || 0) * i);
						var o = new e.Box,
							p = Math.round;
						this.setTextStyle(b, a);
						var q, r, s, t, u = g.length,
							v = a.getItems().length;
						if (v > u)
							for (q = u, r; r = a.getItem(q);) a.removeItem(q);
						else if (u > v)
							for (var w = u - v; w--;) s = (new e.Text).setAttr("text-rendering", "inherit"),
								e.Browser.ie || e.Browser.edge ? s.setVerticalAlign("top") : s.setAttr("dominant-baseline", "text-before-edge"), a.addItem(s);
						for (q = 0, s; t = g[q], s = a.getItem(q); q++) s.setContent(t), (e.Browser.ie || e.Browser.edge) && s.fixPosition();
						this.setTextStyle(b, a);
						var x = b.getText() + ["font-size", "font-name", "font-weight", "font-style"].map(c).join("/");
						return b._currentTextHash == x && b._currentTextGroupBox ? b._currentTextGroupBox : (b._currentTextHash = x, function() {
							a.eachItem(function(a, b) {
								var c = m + a * i * h;
								b.setY(c);
								var d = b.getBoundaryBox();
								o = o.merge(new e.Box(0, c, d.height && d.width || 1, i))
							});
							var c = new e.Box(p(o.x), p(o.y), p(o.width), p(o.height));
							return b._currentTextGroupBox = c, c
						})
					},
					setTextStyle: function(a, b) {
						var c = l._styleHooks;
						c.forEach(function(c) {
							c(a, b)
						})
					}
				}),
				m = e.createClass({
					base: h,
					execute: function(a, b) {
						var c = a.getSelectedNode();
						c && (c.setText(b), c.render(), a.layout())
					},
					queryState: function(a) {
						return 1 == a.getSelectedNodes().length ? 0 : -1
					},
					queryValue: function(a) {
						var b = a.getSelectedNode();
						return b ? b.getText() : null
					}
				});
			f.extend(l, {
				_styleHooks: [],
				registerStyleHook: function(a) {
					l._styleHooks.push(a)
				}
			}), e.extendClass(g, {
				getTextGroup: function() {
					return this.getRenderer("TextRenderer").getRenderShape()
				}
			}), i.register("text", {
				commands: {
					text: m
				},
				renderers: {
					center: l
				}
			}), d.exports = l
		}
	}, b[61] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(19), b.r(21), b.r(9)),
				g = b.r(20),
				h = (b.r(27), e.createClass("ViewDragger", {
					constructor: function(a) {
						this._minder = a, this._enabled = !1, this._bind();
						var b = this;
						this._minder.getViewDragger = function() {
							return b
						}, this.setEnabled(!1)
					},
					isEnabled: function() {
						return this._enabled
					},
					setEnabled: function(a) {
						var b = this._minder.getPaper();
						b.setStyle("cursor", a ? "pointer" : "default"), b.setStyle("cursor", a ? "-webkit-grab" : "default"), this._enabled = a
					},
					timeline: function() {
						return this._moveTimeline
					},
					move: function(a, b) {
						var c = (this._minder, this.getMovement().offset(a));
						this.moveTo(c, b)
					},
					moveTo: function(a, b) {
						if (b) {
							var c = this;
							return this._moveTimeline && this._moveTimeline.stop(), this._moveTimeline = this._minder.getRenderContainer().animate(new e.Animator(this.getMovement(), a, function(a, b) {
								c.moveTo(b)
							}), b, "easeOutCubic").timeline(), this._moveTimeline.on("finish", function() {
								c._moveTimeline = null
							}), this
						}
						this._minder.getRenderContainer().setTranslate(a.round()), this._minder.fire("viewchange")
					},
					getMovement: function() {
						var a = this._minder.getRenderContainer().transform.translate;
						return a ? a[0] : new e.Point
					},
					getView: function() {
						var a = this._minder,
							b = a._lastClientSize || {
								width: a.getRenderTarget().clientWidth,
								height: a.getRenderTarget().clientHeight
							}, c = this.getMovement(),
							d = new e.Box(0, 0, b.width, b.height),
							f = a.getPaper().getViewPortMatrix();
						return f.inverse().translate(-c.x, -c.y).transformBox(d)
					},
					_bind: function() {
						function a(a) {
							if (d) {
								d = null, a.stopPropagation(), c && (b.setEnabled(!1), c = !1, "hand" == b._minder.getStatus() && b._minder.rollbackStatus());
								var e = b._minder.getPaper();
								e.setStyle("cursor", "hand" == b._minder.getStatus() ? "-webkit-grab" : "default"), b._minder.fire("viewchanged")
							}
						}
						var b = this,
							c = !1,
							d = null,
							f = null;
						this._minder.on("normal.mousedown normal.touchstart inputready.mousedown inputready.touchstart readonly.mousedown readonly.touchstart", function(a) {
							2 == a.originEvent.button && a.originEvent.preventDefault(), (a.getTargetNode() == this.getRoot() || 2 == a.originEvent.button || a.originEvent.altKey) && (d = a.getPosition("view"), c = !0)
						}).on("normal.mousemove normal.touchmove readonly.mousemove readonly.touchmove inputready.mousemove inputready.touchmove", function(a) {
							if ("touchmove" == a.type && a.preventDefault(), c) {
								var f = e.Vector.fromPoints(d, a.getPosition("view"));
								if (f.length() > 10) {
									this.setStatus("hand", !0);
									var g = b._minder.getPaper();
									g.setStyle("cursor", "-webkit-grabbing")
								}
							}
						}).on("hand.beforemousedown hand.beforetouchstart", function(a) {
							if (b.isEnabled()) {
								d = a.getPosition("view"), a.stopPropagation();
								var c = b._minder.getPaper();
								c.setStyle("cursor", "-webkit-grabbing")
							}
						}).on("hand.beforemousemove hand.beforetouchmove", function(a) {
							if (d) {
								f = a.getPosition("view");
								var c = e.Vector.fromPoints(d, f);
								b.move(c), a.stopPropagation(), a.preventDefault(), a.originEvent.preventDefault(), d = f
							}
						}).on("mouseup touchend", a), window.addEventListener("mouseup", a), this._minder.on("contextmenu", function(a) {
							a.preventDefault()
						})
					}
				}));
			g.register("View", function() {
				var a = e.createClass("ToggleHandCommand", {
						base: f,
						execute: function(a) {
							"hand" != a.getStatus() ? a.setStatus("hand", !0) : a.rollbackStatus(), this.setContentChanged(!1)
						},
						queryState: function(a) {
							return "hand" == a.getStatus() ? 1 : 0
						},
						enableReadOnly: !0
					}),
					b = e.createClass("CameraCommand", {
						base: f,
						execute: function(a, b) {
							b = b || a.getRoot();
							var c = a.getPaper().getViewPort(),
								d = b.getRenderContainer().getRenderBox("view"),
								f = c.center.x - d.x - d.width / 2,
								g = c.center.y - d.y,
								h = a._viewDragger,
								i = a.getOption("viewAnimationDuration");
							h.move(new e.Point(f, g), i), this.setContentChanged(!1)
						},
						enableReadOnly: !0
					}),
					c = e.createClass("MoveCommand", {
						base: f,
						execute: function(a, b) {
							var c = a._viewDragger,
								d = a._lastClientSize,
								f = a.getOption("viewAnimationDuration");
							switch (b) {
								case "up":
									c.move(new e.Point(0, d.height / 2), f);
									break;
								case "down":
									c.move(new e.Point(0, -d.height / 2), f);
									break;
								case "left":
									c.move(new e.Point(d.width / 2, 0), f);
									break;
								case "right":
									c.move(new e.Point(-d.width / 2, 0), f)
							}
						},
						enableReadOnly: !0
					});
				return {
					init: function() {
						this._viewDragger = new h(this)
					},
					commands: {
						hand: a,
						camera: b,
						move: c
					},
					events: {
						statuschange: function(a) {
							this._viewDragger.setEnabled("hand" == a.currentStatus)
						},
						mousewheel: function(a) {
							var b, c;
							if (a = a.originEvent, !a.ctrlKey && !a.shiftKey) {
								"wheelDeltaX" in a ? (b = a.wheelDeltaX || 0, c = a.wheelDeltaY || 0) : (b = 0, c = a.wheelDelta), this._viewDragger.move({
									x: b / 2.5,
									y: c / 2.5
								});
								var d = this;
								clearTimeout(this._mousewheeltimer), this._mousewheeltimer = setTimeout(function() {
									d.fire("viewchanged")
								}, 100), a.preventDefault()
							}
						},
						"normal.dblclick readonly.dblclick": function(a) {
							a.kityEvent.targetShape instanceof e.Paper && this.execCommand("camera", this.getRoot(), 800)
						},
						"paperrender finishInitHook": function() {
							this.getRenderTarget() && (this.execCommand("camera", null, 0), this._lastClientSize = {
								width: this.getRenderTarget().clientWidth,
								height: this.getRenderTarget().clientHeight
							})
						},
						resize: function(a) {
							var b = {
								width: this.getRenderTarget().clientWidth,
								height: this.getRenderTarget().clientHeight
							}, c = this._lastClientSize;
							this._viewDragger.move(new e.Point((b.width - c.width) / 2 | 0, (b.height - c.height) / 2 | 0)), this._lastClientSize = b
						},
						"selectionchange layoutallfinish": function(a) {
							var b = this.getSelectedNode(),
								c = this;
							if (e.Browser.edge && this.fire("paperrender"), b) {
								var d = this._viewDragger,
									f = d.timeline();
								if (f) return void f.on("finish", function() {
									c.fire("selectionchange")
								});
								var g = d.getView(),
									h = b.getLayoutBox(),
									i = 50,
									j = 0,
									k = 0;
								h.right > g.right ? j += g.right - h.right - i : h.left < g.left && (j += g.left - h.left + i), h.bottom > g.bottom && (k += g.bottom - h.bottom - i), h.top < g.top && (k += g.top - h.top + i), (j || k) && d.move(new e.Point(j, k), 100)
							}
						}
					}
				}
			})
		}
	}, b[62] = {
		value: function(a, c, d) {
			var e = b.r(17),
				f = (b.r(33), b.r(19)),
				g = (b.r(21), b.r(9)),
				h = b.r(20);
			b.r(27);
			h.register("Zoom", function() {
				function a() {
					var a = h._zoomValue >= 100 ? "optimize-speed" : "geometricPrecision";
					h.getRenderContainer().setAttr("text-rendering", a)
				}

				function b(a) {
					var b = a.shapeNode,
						c = b.getCTM(),
						d = new e.Matrix(c.a, c.b, c.c, c.d, (0 | c.e) + .5, (0 | c.f) + .5);
					b.setAttribute("transform", "matrix(" + d.toString() + ")")
				}

				function c(b, c) {
					var f = b.getPaper();
					f.getViewPort();
					if (c) {
						a();
						var g = b.getOption("zoomAnimationDuration");
						if (b.getRoot().getComplex() > 200 || !g) b._zoomValue = c, b.zoom(c), b.fire("viewchange");
						else {
							var h = new e.Animator({
								beginValue: b._zoomValue,
								finishValue: c,
								setter: function(a, b) {
									a.zoom(b)
								}
							});
							b._zoomValue = c, d && d.pause(), d = h.start(b, g, "easeInOutSine"), d.on("finish", function() {
								b.fire("viewchange")
							})
						}
						b.fire("zoom", {
							zoom: c
						})
					}
				}
				var d, h = this;
				e.extendClass(f, {
					zoom: function(a) {
						var c = this.getPaper(),
							d = c.getViewPort();
						d.zoom = a / 100, d.center = {
							x: d.center.x,
							y: d.center.y
						}, c.setViewPort(d), 100 == a && b(c)
					},
					getZoomValue: function() {
						return this._zoomValue
					}
				});
				var i = e.createClass("Zoom", {
						base: g,
						execute: c,
						queryValue: function(a) {
							return a._zoomValue
						}
					}),
					j = e.createClass("ZoomInCommand", {
						base: g,
						execute: function(a) {
							c(a, this.nextValue(a))
						},
						queryState: function(a) {
							return +!this.nextValue(a)
						},
						nextValue: function(a) {
							var b, c = a.getOption("zoom");
							for (b = 0; b < c.length; b++)
								if (c[b] > a._zoomValue) return c[b];
							return 0
						},
						enableReadOnly: !0
					}),
					k = e.createClass("ZoomOutCommand", {
						base: g,
						execute: function(a) {
							c(a, this.nextValue(a))
						},
						queryState: function(a) {
							return +!this.nextValue(a)
						},
						nextValue: function(a) {
							var b, c = a.getOption("zoom");
							for (b = c.length - 1; b >= 0; b--)
								if (c[b] < a._zoomValue) return c[b];
							return 0
						},
						enableReadOnly: !0
					});
				return {
					init: function() {
						this._zoomValue = 100, this.setDefaultOptions({
							zoom: [10, 20, 50, 100, 200]
						}), a()
					},
					commands: {
						zoomin: j,
						zoomout: k,
						zoom: i
					},
					events: {
						"normal.mousewheel readonly.mousewheel": function(a) {
							if (a.originEvent.ctrlKey || a.originEvent.metaKey) {
								var b = a.originEvent.wheelDelta,
									c = this;
								e.Browser.mac || (b = -b), Math.abs(b) > 100 && (clearTimeout(this._wheelZoomTimeout), this._wheelZoomTimeout = setTimeout(function() {
									c.getPaper()._zoom || 1;
									0 > b ? c.execCommand("zoom-in") : b > 0 && c.execCommand("zoom-out")
								}, 100), a.originEvent.preventDefault())
							}
						}
					},
					commandShortcutKeys: {
						zoomin: "ctrl+=",
						zoomout: "ctrl+-"
					}
				}
			})
		}
	}, b[63] = {
		value: function(a, c, d) {
			var e = b.r(12);
			e.registerProtocol("json", d.exports = {
				fileDescription: "KityMinder 格式",
				fileExtension: ".km",
				dataType: "text",
				mineType: "application/json",
				encode: function(a) {
					return JSON.stringify(a)
				},
				decode: function(a) {
					return JSON.parse(a)
				}
			})
		}
	}, b[64] = {
		value: function(a, c, d) {
			function e(a) {
				return f(a, 1).join("\n")
			}

			function f(a, b) {
				var c = [];
				b = b || 1;
				var d = g(b);
				c.push(d + " " + a.data.text), c.push(o);
				var e = a.data.note;
				if (e) {
					var h = /^#/.test(e);
					h && (c.push(p), e = e.replace(/^#+/gm, function(a) {
						return d + a
					})), c.push(e), h && c.push(q), c.push(o)
				}
				return a.children && a.children.forEach(function(a) {
					c = c.concat(f(a, b + 1))
				}), c
			}

			function g(a) {
				for (var b = ""; a--;) b += "#";
				return b
			}

			function h(a) {
				var b, c, d, e, f, g, h, m = {};
				a = a.replace(/^(.+)\n={3,}/, function(a, b) {
					return "# " + b
				}), b = a.split(n);
				for (var o = 0; o < b.length; o++) c = b[o], d = k(c), d.noteClose ? g = !1 : d.noteStart ? g = !0 : (h = d.codeBlock ? !h : h, g || h || !d.level || d.level > e + 1 ? f && j(f, c) : (e = d.level, f = i(d.content, m[e - 1]), m[e] = f));
				return l(m[1]), m[1]
			}

			function i(a, b) {
				var c = {
					data: {
						text: a,
						note: ""
					}
				};
				return b && (b.children ? b.children.push(c) : b.children = [c]), c
			}

			function j(a, b) {
				a.data.note += b + "\n"
			}

			function k(a) {
				var b = /^(#+)?\s*(.*)$/.exec(a);
				return {
					level: b[1] && b[1].length || null,
					content: b[2],
					noteStart: a == p,
					noteClose: a == q,
					codeBlock: /^\s*```/.test(a)
				}
			}

			function l(a) {
				if (/\S/.test(a.data.note)) {
					for (var b = a.data.note.split("\n"); b.length && !/\S/.test(b[0]);) b.shift();
					for (; b.length && !/\S/.test(b[b.length - 1]);) b.pop();
					a.data.note = b.join("\n")
				} else a.data.note = null, delete a.data.note;
				a.children && a.children.forEach(l)
			}
			var m = b.r(12),
				n = /\r\n|\r|\n/,
				o = "",
				p = "<!--Note-->",
				q = "<!--/Note-->";
			m.registerProtocol("markdown", d.exports = {
				fileDescription: "Markdown/GFM 格式",
				fileExtension: ".md",
				mineType: "text/markdown",
				dataType: "text",
				encode: function(a) {
					return e(a.root)
				},
				decode: function(a) {
					return h(a)
				}
			})
		}
	}, b[65] = {
		value: function(a, c, d) {
			function e(a, b) {
				return new j(function(b, c) {
					var d = document.createElement("img");
					d.onload = function() {
						b({
							element: this,
							x: a.x,
							y: a.y,
							width: a.width,
							height: a.height
						})
					}, d.onerror = function(a) {
						c(a)
					}, d.crossOrigin = "", d.src = a.url
				})
			}

			function f(a) {
				var b, c, d, e, f, g, h = a.getPaper(),
					i = (h.container, a.getRenderContainer()),
					j = i.getRenderBox(),
					l = j.width + 1,
					m = j.height + 1;
				b = h.shapeNode.getAttribute("transform"), h.shapeNode.setAttribute("transform", "translate(0.5, 0.5)"), i.translate(-j.x, -j.y), c = h.container.innerHTML, i.translate(j.x, j.y), h.shapeNode.setAttribute("transform", b), d = document.createElement("div"), d.innerHTML = c, e = d.querySelector("svg"), e.setAttribute("width", j.width + 1), e.setAttribute("height", j.height + 1), e.setAttribute("style", 'font-family: Arial, "Microsoft Yahei","Heiti SC";'), d = document.createElement("div"), d.appendChild(e), c = d.innerHTML, c = c.replace(' xmlns="http://www.w3.org/2000/svg" xmlns:NS1="" NS1:ns1:xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:NS2="" NS2:xmlns:ns1=""', ""), c = c.replace(/&nbsp;/g, "&#xa0;"), f = new Blob([c], {
					type: "image/svg+xml"
				}), g = k.createObjectURL(f);
				for (var n = a.getAllNode(), o = [], p = 0; p < n.length; p++) {
					var q = n[p].data;
					if (q.image) {
						a.renderNode(n[p]);
						var r = q.image,
							s = q.imageSize,
							t = n[p].getRenderBox("ImageRenderer", a.getRenderContainer()),
							u = {
								url: r,
								width: s.width,
								height: s.height,
								x: -i.getBoundaryBox().x + t.x + 20,
								y: -i.getBoundaryBox().y + t.y + 20
							};
						o.push(u)
					}
				}
				return {
					width: l,
					height: m,
					dataUrl: g,
					xml: c,
					imagesInfo: o
				}
			}

			function g(a, b) {
				function c(a, b) {
					a.save(), a.fillStyle = b, a.fillRect(0, 0, m.width, m.height), a.restore()
				}

				function d(a, b, c, d, e, f) {
					e && f ? a.drawImage(b, c, d, e, f) : a.drawImage(b, c, d)
				}

				function g(a) {
					return a.toDataURL("image/png")
				}

				function i(a) {
					var b = a.map(function(a) {
						return e(a)
					});
					return l.all(b)
				}

				function j() {
					var a = {
						url: u
					};
					return e(a).then(function(a) {
						return d(n, a.element, w, w), i(v)
					}).then(function(a) {
						for (var b = 0; b < a.length; b++) d(n, a[b].element, a[b].x, a[b].y, a[b].width, a[b].height);
						return k.revokeObjectURL(u), document.body.appendChild(m), g(m)
					}, function(a) {
						return alert("脑图的节点中包含跨域图片，导出的 png 中节点图片不显示，你可以替换掉这些跨域的图片并重试。"), k.revokeObjectURL(u), document.body.appendChild(m), g(m)
					})
				}
				var l = kityminder.Promise,
					m = document.createElement("canvas"),
					n = m.getContext("2d"),
					o = b.getStyle("background").toString(),
					p = /url\(\"(.+)\"\)/.exec(o),
					q = h.Color.parse(o),
					r = f(b),
					s = r.width,
					t = r.height,
					u = r.dataUrl,
					v = r.imagesInfo,
					w = 20;
				if (m.width = s + 2 * w, m.height = t + 2 * w, p) {
					var x = {
						url: p[1]
					};
					return e(x).then(function(a) {
						return c(n, n.createPattern(a.element, "repeat")), j()
					})
				}
				return c(n, q.toString()), j()
			}
			var h = b.r(17),
				i = b.r(12),
				j = b.r(25),
				k = window.URL || window.webkitURL || window;
			i.registerProtocol("png", d.exports = {
				fileDescription: "PNG 图片",
				fileExtension: ".png",
				mineType: "image/png",
				dataType: "base64",
				encode: g
			})
		}
	}, b[66] = {
		value: function(a, c, d) {
			function e(a, b, c) {
				function d(a, b) {
					var c;
					try {
						c = b.getScreenCTM().inverse()
					} catch (d) {
						throw new Error("Can not inverse source element' ctm.")
					}
					return c.multiply(a.getScreenCTM())
				}

				function e(a, b) {
					b instanceof Function || (b = function() {});
					for (var c = [], d = [], e = [], f = 0, g = a.length; g > f; f++) switch (a[f]) {
						case "M":
						case "L":
						case "T":
						case "S":
						case "A":
						case "C":
						case "H":
						case "V":
						case "Q":
							e.length && (d.push(e.join("")), e = []), "," === d[d.length - 1] && d.pop(), d.length && (b(d), c.push(d.join("")), d = []), d.push(a[f]);
							break;
						case "Z":
						case "z":
							d.push(e.join(""), a[f]), b(d), c.push(d.join("")), e = [], d = [];
							break;
						case ".":
						case "e":
							e.push(a[f]);
							break;
						case "-":
							"e" !== a[f - 1] && (e.length && d.push(e.join(""), ","), e = []), e.push("-");
							break;
						case " ":
						case ",":
							e.length && (d.push(e.join(""), ","), e = []);
							break;
						default:
							/\d/.test(a[f]) ? e.push(a[f]) : e.length ? (d.push(e.join(""), a[f]), e = []) : ("," === d[d.length - 1] && d.pop(), d.push(a[f])), f + 1 === g && (e.length && d.push(e.join("")), b(d), c.push(d.join("")), e = null, d = null)
					}
					return c.join("")
				}

				function f(a, b, c) {
					if (a && "defs" !== a.tagName) {
						if ("transparent" === a.getAttribute("fill") && a.setAttribute("fill", "none"), a.getAttribute("marker-end") && a.removeAttribute("marker-end"), b = b || 0, c = c || 0, a.getAttribute("transform")) {
							var g = d(a, a.parentElement);
							b -= g.e, c -= g.f, a.removeAttribute("transform")
						}
						switch (a.tagName.toLowerCase()) {
							case "g":
								break;
							case "path":
								var h = a.getAttribute("d");
								return void(h && (h = e(h, function(a) {
									switch (a[0]) {
										case "V":
											a[1] = +a[1] - c;
											break;
										case "H":
											a[1] = +a[1] - b;
											break;
										case "M":
										case "L":
										case "T":
											a[1] = +a[1] - b, a[3] = +a[3] - c;
											break;
										case "Q":
										case "S":
											a[1] = +a[1] - b, a[3] = +a[3] - c, a[5] = +a[5] - b, a[7] = +a[7] - c;
											break;
										case "A":
											a[11] = +a[11] - b, a[13] = +a[13] - c;
											break;
										case "C":
											a[1] = +a[1] - b, a[3] = +a[3] - c, a[5] = +a[5] - b, a[7] = +a[7] - c, a[9] = +a[9] - b, a[11] = +a[11] - c
									}
								}), a.setAttribute("d", h), a.removeAttribute("transform")));
							case "image":
							case "text":
								if (b && c) {
									var i = +a.getAttribute("x") || 0,
										j = +a.getAttribute("y") || 0;
									a.setAttribute("x", i - b), a.setAttribute("y", j - c)
								}
								return a.getAttribute("dominant-baseline") && (a.removeAttribute("dominant-baseline"), a.setAttribute("dy", ".8em")), void a.removeAttribute("transform")
						}
						if (a.children)
							for (var k = 0, l = a.children.length; l > k; k++) f(a.children[k], b, c)
					}
				}
				a.style.display = "none", f(a, b || 0, c || 0), a.style.display = "inline"
			}
			var f = b.r(12);
			f.registerProtocol("svg", d.exports = {
				fileDescription: "SVG 矢量图",
				fileExtension: ".svg",
				mineType: "image/svg+xml",
				dataType: "text",
				encode: function(a, b) {
					var c, d, f, g = b.getPaper(),
						h = g.shapeNode.getAttribute("transform"),
						i = b.getRenderContainer(),
						j = i.getRenderBox(),
						k = (i.getTransform(), j.width),
						l = j.height,
						m = 20;
					return g.shapeNode.setAttribute("transform", "translate(0.5, 0.5)"), c = g.container.innerHTML, g.shapeNode.setAttribute("transform", h), d = document.createElement("div"), d.innerHTML = c, f = d.querySelector("svg"), f.setAttribute("width", k + 2 * m | 0), f.setAttribute("height", l + 2 * m | 0), f.setAttribute("style", "background: " + b.getStyle("background")), f.setAttribute("viewBox", [0, 0, k + 2 * m | 0, l + 2 * m | 0].join(" ")), d = document.createElement("div"), e(f, j.x - m | 0, j.y - m | 0), d.appendChild(f), c = d.innerHTML, c = c.replace(/&nbsp;/g, "&#xa0;")
				}
			})
		}
	}, b[67] = {
		value: function(a, c, d) {
			function e(a, b) {
				for (var c = ""; b--;) c += a;
				return c
			}

			function f(a) {
				if (!a) return "";
				for (var b = [], c = ["\\", "n"], d = 0, e = 0, f = a.length; f > d; d++)
					if ("\n" !== a[d] && "\r" !== a[d])
						if (a[d] !== c[e]) {
							switch (e) {
								case 0:
									b.push(a[d]);
									break;
								case 1:
									b.push(a[d - 1], a[d])
							}
							e = 0
						} else e++, 2 === e && (e = 0, b.push("\\\\n"));
					else b.push("\\n"), e = 0;
				return b.join("")
			}

			function g(a) {
				if (!a) return "";
				for (var b = [], c = ["\\", "\\", "n"], d = 0, e = 0, f = a.length; f > d; d++)
					if (a[d] !== c[e]) switch (e) {
						case 0:
							b.push(a[d]), e = 0;
							break;
						case 1:
							"n" === a[d] ? b.push("\n") : b.push(a[d - 1], a[d]), e = 0;
							break;
						case 2:
							b.push(a[d - 2]), "\\" !== a[d] && (e = 0, b.push(a[d - 1], a[d]))
					} else e++, 3 === e && (e = 0, b.push("\\n"));
				return b.join("")
			}

			function h(a, b) {
				var c = "";
				return b = b || 0, c += e("	", b), c += f(a.data.text) + p, a.children && a.children.forEach(function(a) {
					c += h(a, b + 1)
				}), c
			}

			function i(a) {
				return !/\S/.test(a)
			}

			function j(a) {
				for (var b = 0; r.REGEXP.test(a);) a = a.replace(r.REGEXP, ""), b++;
				return b
			}

			function k(a) {
				return {
					data: {
						text: g(a.replace(r.DELETE, ""))
					}
				}
			}

			function l(a) {
				function b(a, b) {
					var c = a.children || (a.children = []);
					c.push(b)
				}
				for (var c, d, e, f, g = {}, h = a.split(q), l = 0; l < h.length; l++)
					if (d = h[l], !i(d)) {
						if (e = j(d), f = k(d), 0 === e) {
							if (c) throw new Error("Invalid local format");
							c = f
						} else {
							if (!g[e - 1]) throw new Error("Invalid local format");
							b(g[e - 1], f)
						}
						g[e] = f
					}
				return c
			}

			function m(a) {
				function b(a) {
					var c = {};
					c.data = a.getData();
					var d = a.getChildren();
					c.children = [];
					for (var e = 0; e < d.length; e++) c.children.push(b(d[e]));
					return c
				}
				if (a) return /^\s*$/.test(a.data.text) && (a.data.text = "分支主题"), h(b(a))
			}
			var n = b.r(12),
				o = b.r(17).Browser,
				p = "\r",
				q = /\r\n|\r|\n/,
				r = function(a) {
					return a.gecko ? {
						REGEXP: new RegExp("^(	|" + String.fromCharCode(160, 160, 32, 160) + ")"),
						DELETE: new RegExp("^(	|" + String.fromCharCode(160, 160, 32, 160) + ")+")
					} : a.ie || a.edge ? {
						REGEXP: new RegExp("^(" + String.fromCharCode(32) + "|" + String.fromCharCode(160) + ")"),
						DELETE: new RegExp("^(" + String.fromCharCode(32) + "|" + String.fromCharCode(160) + ")+")
					} : {
						REGEXP: /^(\t|\x20{4})/,
						DELETE: /^(\t|\x20{4})+/
					}
				}(o);
			n.registerProtocol("text", d.exports = {
				fileDescription: "大纲文本",
				fileExtension: ".txt",
				dataType: "text",
				mineType: "text/plain",
				encode: function(a) {
					return h(a.root, 0)
				},
				decode: function(a) {
					return l(a)
				},
				Node2Text: function(a) {
					return m(a)
				}
			})
		}
	}, b[68] = {
		value: function(a, c, d) {
			var e = b.r(31);
			e.register("default", {
				getLayout: function(a) {
					if (a.getData("layout")) return a.getData("layout");
					var b = a.getLevel();
					return 0 === b ? "mind" : 1 === b ? a.getLayoutPointPreview().x > 0 ? "right" : "left" : a.parent.getLayout()
				},
				getConnect: function(a) {
					return 1 == a.getLevel() ? "arc" : "under"
				}
			})
		}
	}, b[69] = {
		value: function(a, c, d) {
			var e = b.r(31);
			e.register("filetree", {
				getLayout: function(a) {
					return a.getData("layout") ? a.getData("layout") : a.isRoot() ? "bottom" : "filetree-down"
				},
				getConnect: function(a) {
					return 1 == a.getLevel() ? "poly" : "l"
				}
			})
		}
	}, b[70] = {
		value: function(a, c, d) {
			var e = b.r(31);
			e.register("fish-bone", {
				getLayout: function(a) {
					if (a.getData("layout")) return a.getData("layout");
					var b = a.getLevel();
					return 0 === b ? "fish-bone-master" : 1 === b ? "fish-bone-slave" : a.getLayoutPointPreview().y > 0 ? "filetree-up" : "filetree-down"
				},
				getConnect: function(a) {
					switch (a.getLevel()) {
						case 1:
							return "fish-bone-master";
						case 2:
							return "line";
						default:
							return "l"
					}
				}
			})
		}
	}, b[71] = {
		value: function(a, c, d) {
			var e = b.r(31);
			e.register("right", {
				getLayout: function(a) {
					return a.getData("layout") || "right"
				},
				getConnect: function(a) {
					return 1 == a.getLevel() ? "arc" : "bezier"
				}
			})
		}
	}, b[72] = {
		value: function(a, c, d) {
			var e = b.r(31);
			e.register("structure", {
				getLayout: function(a) {
					return a.getData("layout") || "bottom"
				},
				getConnect: function(a) {
					return "poly"
				}
			})
		}
	}, b[73] = {
		value: function(a, c, d) {
			var e = b.r(31);
			e.register("tianpan", {
				getLayout: function(a) {
					if (a.getData("layout")) return a.getData("layout");
					var b = a.getLevel();
					return 0 === b ? "tianpan" : a.parent.getLayout()
				},
				getConnect: function(a) {
					return "arc_tp"
				}
			})
		}
	}, b[74] = {
		value: function(a, c, d) {
			var e = b.r(32);
			["classic", "classic-compact"].forEach(function(a) {
				var b = "classic-compact" == a;
				e.register(a, {
					background: '#3A4144 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=") repeat',
					"root-color": "#430",
					"root-background": "#e9df98",
					"root-stroke": "#e9df98",
					"root-font-size": 24,
					"root-padding": b ? [10, 25] : [15, 25],
					"root-margin": b ? [15, 25] : [30, 100],
					"root-radius": 30,
					"root-space": 10,
					"root-shadow": "rgba(0, 0, 0, .25)",
					"main-color": "#333",
					"main-background": "#a4c5c0",
					"main-stroke": "#a4c5c0",
					"main-font-size": 16,
					"main-padding": b ? [5, 15] : [6, 20],
					"main-margin": b ? [5, 10] : 20,
					"main-radius": 10,
					"main-space": 5,
					"main-shadow": "rgba(0, 0, 0, .25)",
					"sub-color": "white",
					"sub-background": "transparent",
					"sub-stroke": "none",
					"sub-font-size": 12,
					"sub-padding": [5, 10],
					"sub-margin": b ? [5, 10] : [15, 20],
					"sub-tree-margin": 30,
					"sub-radius": 5,
					"sub-space": 5,
					"connect-color": "white",
					"connect-width": 2,
					"main-connect-width": 3,
					"connect-radius": 5,
					"selected-background": "rgb(254, 219, 0)",
					"selected-stroke": "rgb(254, 219, 0)",
					"selected-color": "black",
					"marquee-background": "rgba(255,255,255,.3)",
					"marquee-stroke": "white",
					"drop-hint-color": "yellow",
					"sub-drop-hint-width": 2,
					"main-drop-hint-width": 4,
					"root-drop-hint-width": 4,
					"order-hint-area-color": "rgba(0, 255, 0, .5)",
					"order-hint-path-color": "#0f0",
					"order-hint-path-width": 1,
					"text-selection-color": "rgb(27,171,255)",
					"line-height": 1.5
				})
			})
		}
	}, b[75] = {
		value: function(a, c, d) {
			var e = b.r(32);
			e.register("fish", {
				background: '#3A4144 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=") repeat',
				"root-color": "#430",
				"root-background": "#e9df98",
				"root-stroke": "#e9df98",
				"root-font-size": 24,
				"root-padding": [35, 35],
				"root-margin": 30,
				"root-radius": 100,
				"root-space": 10,
				"root-shadow": "rgba(0, 0, 0, .25)",
				"main-color": "#333",
				"main-background": "#a4c5c0",
				"main-stroke": "#a4c5c0",
				"main-font-size": 16,
				"main-padding": [6, 20],
				"main-margin": [20, 20],
				"main-radius": 5,
				"main-space": 5,
				"main-shadow": "rgba(0, 0, 0, .25)",
				"sub-color": "black",
				"sub-background": "white",
				"sub-stroke": "white",
				"sub-font-size": 12,
				"sub-padding": [5, 10],
				"sub-margin": [10],
				"sub-radius": 5,
				"sub-space": 5,
				"connect-color": "white",
				"connect-width": 3,
				"main-connect-width": 3,
				"connect-radius": 5,
				"selected-background": "rgb(254, 219, 0)",
				"selected-stroke": "rgb(254, 219, 0)",
				"marquee-background": "rgba(255,255,255,.3)",
				"marquee-stroke": "white",
				"drop-hint-color": "yellow",
				"drop-hint-width": 4,
				"order-hint-area-color": "rgba(0, 255, 0, .5)",
				"order-hint-path-color": "#0f0",
				"order-hint-path-width": 1,
				"text-selection-color": "rgb(27,171,255)",
				"line-height": 1.5
			})
		}
	}, b[76] = {
		value: function(a, c, d) {
			function e(a, b, c) {
				return h.Color.createHSL(a, b, c)
			}

			function f(a, b) {
				return {
					background: "#fbfbfb",
					"root-color": "white",
					"root-background": e(a, 37, 60),
					"root-stroke": e(a, 37, 60),
					"root-font-size": 16,
					"root-padding": b ? [6, 12] : [12, 24],
					"root-margin": b ? 10 : [30, 100],
					"root-radius": 5,
					"root-space": 10,
					"main-color": "black",
					"main-background": e(a, 33, 95),
					"main-stroke": e(a, 37, 60),
					"main-stroke-width": 1,
					"main-font-size": 14,
					"main-padding": [6, 20],
					"main-margin": b ? 8 : 20,
					"main-radius": 3,
					"main-space": 5,
					"sub-color": "black",
					"sub-background": "transparent",
					"sub-stroke": "none",
					"sub-font-size": 12,
					"sub-padding": b ? [3, 5] : [5, 10],
					"sub-margin": b ? [4, 8] : [15, 20],
					"sub-radius": 5,
					"sub-space": 5,
					"connect-color": e(a, 37, 60),
					"connect-width": 1,
					"connect-radius": 5,
					"selected-stroke": e(a, 26, 30),
					"selected-stroke-width": "3",
					"blur-selected-stroke": e(a, 10, 60),
					"marquee-background": e(a, 100, 80).set("a", .1),
					"marquee-stroke": e(a, 37, 60),
					"drop-hint-color": e(a, 26, 35),
					"drop-hint-width": 5,
					"order-hint-area-color": e(a, 100, 30).set("a", .5),
					"order-hint-path-color": e(a, 100, 25),
					"order-hint-path-width": 1,
					"text-selection-color": e(a, 100, 20),
					"line-height": 1.5
				}
			}
			var g, h = b.r(17),
				i = b.r(32),
				j = {
					red: 0,
					soil: 25,
					green: 122,
					blue: 204,
					purple: 246,
					pink: 334
				};
			for (g in j) i.register("fresh-" + g, f(j[g])), i.register("fresh-" + g + "-compat", f(j[g], !0))
		}
	}, b[77] = {
		value: function(a, c, d) {
			var e = b.r(32);
			["snow", "snow-compact"].forEach(function(a) {
				var b = "snow-compact" == a;
				e.register(a, {
					background: '#3A4144 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=") repeat',
					"root-color": "#430",
					"root-background": "#e9df98",
					"root-stroke": "#e9df98",
					"root-font-size": 24,
					"root-padding": b ? [5, 10] : [15, 25],
					"root-margin": b ? 15 : 30,
					"root-radius": 5,
					"root-space": 10,
					"root-shadow": "rgba(0, 0, 0, .25)",
					"main-color": "#333",
					"main-background": "#a4c5c0",
					"main-stroke": "#a4c5c0",
					"main-font-size": 16,
					"main-padding": b ? [4, 10] : [6, 20],
					"main-margin": b ? [5, 10] : [20, 40],
					"main-radius": 5,
					"main-space": 5,
					"main-shadow": "rgba(0, 0, 0, .25)",
					"sub-color": "black",
					"sub-background": "white",
					"sub-stroke": "white",
					"sub-font-size": 12,
					"sub-padding": [5, 10],
					"sub-margin": b ? [5, 10] : [10, 20],
					"sub-radius": 5,
					"sub-space": 5,
					"connect-color": "white",
					"connect-width": 2,
					"main-connect-width": 3,
					"connect-radius": 5,
					"selected-background": "rgb(254, 219, 0)",
					"selected-stroke": "rgb(254, 219, 0)",
					"marquee-background": "rgba(255,255,255,.3)",
					"marquee-stroke": "white",
					"drop-hint-color": "yellow",
					"drop-hint-width": 4,
					"order-hint-area-color": "rgba(0, 255, 0, .5)",
					"order-hint-path-color": "#0f0",
					"order-hint-path-width": 1,
					"text-selection-color": "rgb(27,171,255)",
					"line-height": 1.5
				})
			})
		}
	}, b[78] = {
		value: function(a, c, d) {
			var e = b.r(32);
			["tianpan", "tianpan-compact"].forEach(function(a) {
				var b = "tianpan-compact" == a;
				e.register(a, {
					background: '#3A4144 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=") repeat',
					"root-color": "#430",
					"root-background": "#e9df98",
					"root-stroke": "#e9df98",
					"root-font-size": 25,
					"root-padding": b ? 15 : 20,
					"root-margin": b ? [15, 25] : 100,
					"root-radius": 30,
					"root-space": 10,
					"root-shadow": "rgba(0, 0, 0, .25)",
					"root-shape": "circle",
					"main-color": "#333",
					"main-background": "#a4c5c0",
					"main-stroke": "#a4c5c0",
					"main-font-size": 15,
					"main-padding": b ? 10 : 12,
					"main-margin": b ? 10 : 12,
					"main-radius": 10,
					"main-space": 5,
					"main-shadow": "rgba(0, 0, 0, .25)",
					"main-shape": "circle",
					"sub-color": "#333",
					"sub-background": "#99ca6a",
					"sub-stroke": "#a4c5c0",
					"sub-font-size": 13,
					"sub-padding": 5,
					"sub-margin": b ? 6 : 10,
					"sub-tree-margin": 30,
					"sub-radius": 5,
					"sub-space": 5,
					"sub-shadow": "rgba(0, 0, 0, .25)",
					"sub-shape": "circle",
					"connect-color": "white",
					"connect-width": 2,
					"main-connect-width": 3,
					"connect-radius": 5,
					"selected-background": "rgb(254, 219, 0)",
					"selected-stroke": "rgb(254, 219, 0)",
					"selected-color": "black",
					"marquee-background": "rgba(255,255,255,.3)",
					"marquee-stroke": "white",
					"drop-hint-color": "yellow",
					"sub-drop-hint-width": 2,
					"main-drop-hint-width": 4,
					"root-drop-hint-width": 4,
					"order-hint-area-color": "rgba(0, 255, 0, .5)",
					"order-hint-path-color": "#0f0",
					"order-hint-path-width": 1,
					"text-selection-color": "rgb(27,171,255)",
					"line-height": 1.4
				})
			})
		}
	}, b[79] = {
		value: function(a, c, d) {
			var e = b.r(32);
			e.register("wire", {
				background: "black",
				color: "#999",
				stroke: "none",
				padding: 10,
				margin: 20,
				"font-size": 14,
				"connect-color": "#999",
				"connect-width": 1,
				"selected-background": "#999",
				"selected-color": "black",
				"marquee-background": "rgba(255,255,255,.3)",
				"marquee-stroke": "white",
				"drop-hint-color": "yellow",
				"sub-drop-hint-width": 2,
				"main-drop-hint-width": 4,
				"root-drop-hint-width": 4,
				"order-hint-area-color": "rgba(0, 255, 0, .5)",
				"order-hint-path-color": "#0f0",
				"order-hint-path-width": 1,
				"text-selection-color": "rgb(27,171,255)",
				"line-height": 1.5
			})
		}
	};
	var c = {
		"expose-kityminder": 34
	};
	a("expose-kityminder")
}();