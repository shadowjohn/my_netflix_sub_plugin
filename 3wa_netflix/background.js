function run_3wa_netflix() {
    if (location.href.indexOf("https://www.netflix.com/") == -1) {
        //console.log(location.href.indexOf("netflix"));
        //console.log("only run on netflix url...");
        return; //只有在 netflix 才有效
    }
    if (window['isRun_3wa_netflix'] != null) {
        return;
    }
    //只能在 netflix 的網站運行
    window['isRun_3wa_netflix'] = "YES...loaded";
    // 注入 jQuery 3.6.0 
    /*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
    !function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (C, e) { "use strict"; var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function (e) { return t.flat.call(e) } : function (e) { return t.concat.apply([], e) }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function (e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item }, x = function (e) { return null != e && e === e.window }, E = C.document, c = { type: !0, src: !0, nonce: !0, noModule: !0 }; function b(e, t, n) { var r, i, o = (n = n || E).createElement("script"); if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i); n.head.appendChild(o).parentNode.removeChild(o) } function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.6.0", S = function (e, t) { return new S.fn.init(e, t) }; function p(e) { var t = !!e && "length" in e && e.length, n = w(e); return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) } S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function () { return s.call(this) }, get: function (e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return S.each(this, e) }, map: function (n) { return this.pushStack(S.map(this, function (e, t) { return n.call(e, t, e) })) }, slice: function () { return this.pushStack(s.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, even: function () { return this.pushStack(S.grep(this, function (e, t) { return (t + 1) % 2 })) }, odd: function () { return this.pushStack(S.grep(this, function (e, t) { return t % 2 })) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e, t, n) { b(e, { nonce: t && t.nonce }, n) }, each: function (e, t) { var n, r = 0; if (p(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, makeArray: function (e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : i.call(t, e, n) }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]); return r }, map: function (e, t, n) { var r, i, o = 0, a = []; if (p(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g(a) }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var d = function (n) { var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function (e, t) { return e === t && (l = !0), 0 }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) { for (var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n; return -1 }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e }, oe = function () { T() }, ae = be(function (e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) { H = { apply: t.length ? function (e, t) { L.apply(e, O.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function se(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (T(e), e = e || C, E)) { if (11 !== p && (u = Z.exec(t))) if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n } if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) { if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) { (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]); c = l.join(",") } try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") } } } return g(t.replace($, "$1"), e, n, r) } function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } } function le(e) { return e[S] = !0, e } function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function fe(e, t) { var n = e.split("|"), r = n.length; while (r--) b.attrHandle[n[r]] = t } function pe(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function de(t) { return function (e) { return "input" === e.nodeName.toLowerCase() && e.type === t } } function he(n) { return function (e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } } function ge(t) { return function (e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } } function ve(a) { return le(function (o) { return o = +o, le(function (e, t) { var n, r = a([], e.length, o), i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) } function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e } for (e in d = se.support = {}, i = se.isXML = function (e) { var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function (e) { var t, n, r = e ? e.ownerDocument || e : p; return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function (e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function (e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function (e) { var t = e.replace(te, ne); return function (e) { return e.getAttribute("id") === t } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function (e) { var n = e.replace(te, ne); return function (e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function (e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) { var t; a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]") }), ce(function (e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, j = t ? function (e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function (e, t) { if (e === t) return l = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t); n = e; while (n = n.parentNode) a.unshift(n); n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0 }), C }, se.matches = function (e, t) { return se(e, null, null, t) }, se.matchesSelector = function (e, t) { if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) } return 0 < se(t, C, null, [e]).length }, se.contains = function (e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) }, se.attr = function (e, t) { (e.ownerDocument || e) != C && T(e); var n = b.attrHandle[t.toLowerCase()], r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0; return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, se.escape = function (e) { return (e + "").replace(re, ie) }, se.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function (e) { var t, n = [], r = 0, i = 0; if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return u = null, e }, o = se.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else while (t = e[r++]) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (n, r, i) { return function (e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function (h, e, t, g, v) { var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e; return 1 === g && 0 === v ? function (e) { return !!e.parentNode } : function (e, t, n) { var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1; if (c) { if (y) { while (l) { a = e; while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1; u = l = "only" === h && !u && "nextSibling" } return !0 } if (u = [m ? c.firstChild : c.lastChild], m && p) { d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break } } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break; return (d -= v) === g || d % g == 0 && 0 <= d / g } } }, PSEUDO: function (e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) { var n, r = a(e, o), i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function (e) { return a(e, 0, t) }) : a } }, pseudos: { not: le(function (e) { var r = [], i = [], s = f(e.replace($, "$1")); return s[S] ? le(function (e, t, n, r) { var i, o = s(e, null, r, []), a = e.length; while (a--) (i = o[a]) && (e[a] = !(t[a] = i)) }) : function (e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: le(function (t) { return function (e) { return 0 < se(t, e).length } }), contains: le(function (t) { return t = t.replace(te, ne), function (e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: le(function (n) { return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) { var t; do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function (e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function (e) { return e === a }, focus: function (e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !b.pseudos.empty(e) }, header: function (e) { return J.test(e.nodeName) }, input: function (e) { return Q.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ve(function () { return [0] }), last: ve(function (e, t) { return [t - 1] }), eq: ve(function (e, t, n) { return [n < 0 ? n + t : n] }), even: ve(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: ve(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)e.push(r); return e }), gt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e); function me() { } function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function be(s, e, t) { var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++; return e.first ? function (e, t, n) { while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n); return !1 } : function (e, t, n) { var r, i, o, a = [k, p]; if (n) { while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1 } } function we(i) { return 1 < i.length ? function (e, t, n) { var r = i.length; while (r--) if (!i[r](e, t, n)) return !1; return !0 } : i[0] } function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function Ce(d, h, g, v, y, e) { return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) { var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) { for (var r = 0, i = t.length; r < i; r++)se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f; if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = p.length; while (o--) (a = p[o]) && i.push(f[o] = a); y(null, p = [], i, r) } o = p.length; while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a)) } } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p) }) } function Ee(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) { return e === i }, a, !0), l = be(function (e) { return -1 < P(i, e) }, a, !0), c = [function (e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) { for (n = ++s; n < r; n++)if (b.relative[e[n].type]) break; return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e)) } c.push(t) } return we(c) } return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0); a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : x(e, s).slice(0) }, f = se.compile = function (e, t) { var n, v, y, m, x, r, i = [], o = [], a = A[e + " "]; if (!a) { t || (t = h(e)), n = t.length; while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a); (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) { var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length; for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument == C || (T(o), n = !E); while (s = v[a++]) if (s(o, t || C, n)) { r.push(o); break } i && (k = h) } m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r)); f = Te(f) } H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r) } return i && (k = h, w = p), c }, m ? le(r) : r))).selector = e } return a }, g = se.select = function (e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n; l && (t = t.parentNode), e = e.slice(o.shift().value.length) } i = G.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } } } return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function (e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function (e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function (e) { return null == e.getAttribute("disabled") }) || fe(R, function (e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(C); S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape; var h = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && S(e).is(n)) break; r.push(e) } return r }, T = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, k = S.expr.match.needsContext; function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function j(e, n, r) { return m(n) ? S.grep(e, function (e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function (e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function (e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) } S.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) { return 1 === e.nodeType })) }, S.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(S(e).filter(function () { for (t = 0; t < r; t++)if (S.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)S.find(e, i[t], n); return 1 < r ? S.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(j(this, e || [], !1)) }, not: function (e) { return this.pushStack(j(this, e || [], !0)) }, is: function (e) { return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length } }); var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (S.fn.init = function (e, t, n) { var r, i; if (!e) return this; if (n = n || D, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this) }).prototype = S.fn, D = S(E); var L = /^(?:parents|prev(?:Until|All))/, H = { children: !0, contents: !0, next: !0, prev: !0 }; function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } S.fn.extend({ has: function (e) { var t = S(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (S.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e); if (!k.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), S.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return h(e, "parentNode") }, parentsUntil: function (e, t, n) { return h(e, "parentNode", n) }, next: function (e) { return O(e, "nextSibling") }, prev: function (e) { return O(e, "previousSibling") }, nextAll: function (e) { return h(e, "nextSibling") }, prevAll: function (e) { return h(e, "previousSibling") }, nextUntil: function (e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return h(e, "previousSibling", n) }, siblings: function (e) { return T((e.parentNode || {}).firstChild, e) }, children: function (e) { return T(e.firstChild) }, contents: function (e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function (r, i) { S.fn[r] = function (e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } }); var P = /[^\x20\t\r\n\f]+/g; function R(e) { return e } function M(e) { throw e } function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } S.Callbacks = function (r) { var e, n; r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) { n[t] = !0 }), n) : S.extend({}, r); var i, t, o, a, s = [], u = [], l = -1, c = function () { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) } r.memory || (t = !1), i = !1, a && (s = t ? [] : "") }, f = { add: function () { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function (e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function () { return S.each(arguments, function (e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function (e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function () { return s && (s = []), this }, disable: function () { return a = u = [], s = t = "", this }, disabled: function () { return !s }, lock: function () { return a = u = [], t || i || (s = t = ""), this }, locked: function () { return !!a }, fireWith: function (e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function () { return f.fireWith(this, arguments), this }, fired: function () { return !!o } }; return f }, S.extend({ Deferred: function (e) { var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]], i = "pending", a = { state: function () { return i }, always: function () { return s.done(arguments).fail(arguments), this }, "catch": function (e) { return a.then(null, e) }, pipe: function () { var i = arguments; return S.Deferred(function (r) { S.each(o, function (e, t) { var n = m(i[t[4]]) && i[t[4]]; s[t[1]](function () { var e = n && n.apply(this, arguments); e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function (t, n, r) { var u = 0; function l(i, o, a, s) { return function () { var n = this, r = arguments, e = function () { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution"); t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } }, t = s ? e : function () { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } }; i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t)) } } return S.Deferred(function (e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise() }, promise: function (e) { return null != e ? S.extend(e, a) : a } }, s = {}; return S.each(o, function (e, t) { var n = t[2], r = t[5]; a[t[1]] = n.add, r && n.add(function () { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function (e) { var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = S.Deferred(), a = function (t) { return function (e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then(); while (t--) I(i[t], a(t), o.reject); return o.promise() } }); var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; S.Deferred.exceptionHook = function (e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function (e) { C.setTimeout(function () { throw e }) }; var F = S.Deferred(); function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() } S.fn.ready = function (e) { return F.then(e)["catch"](function (e) { S.readyException(e) }), this }, S.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]) } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B)); var $ = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(S(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, _ = /^-ms-/, z = /-([a-z])/g; function U(e, t) { return t.toUpperCase() } function X(e) { return e.replace(_, "ms-").replace(z, U) } var V = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function G() { this.expando = S.expando + G.uid++ } G.uid = 1, G.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] } (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) } }; var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g; function Z(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) { } Q.set(e, t, n) } else n = void 0; return n } S.extend({ hasData: function (e) { return Q.hasData(e) || Y.hasData(e) }, data: function (e, t, n) { return Q.access(e, t, n) }, removeData: function (e, t) { Q.remove(e, t) }, _data: function (e, t, n) { return Y.access(e, t, n) }, _removeData: function (e, t) { Y.remove(e, t) } }), S.fn.extend({ data: function (n, e) { var t, r, i, o = this[0], a = o && o.attributes; if (void 0 === n) { if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r])); Y.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function () { Q.set(this, n) }) : $(this, function (e) { var t; if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0; this.each(function () { Q.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function (e) { return this.each(function () { Q.remove(this, e) }) } }), S.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = S.queue(e, t), r = n.length, i = n.shift(), o = S._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () { S.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function () { Y.remove(e, [t + "queue", n]) }) }) } }), S.fn.extend({ queue: function (t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () { var e = S.queue(this, t, n); S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t) }) }, dequeue: function (e) { return this.each(function () { S.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function (e) { return S.contains(e.ownerDocument, e) }, oe = { composed: !0 }; re.getRootNode && (ie = function (e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument }); var ae = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") }; function se(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return S.css(e, t, "") }, u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, S.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ue = {}; function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++)null != l[c] && (e[c].style.display = l[c]); return e } S.fn.extend({ show: function () { return le(this, !0) }, hide: function () { return le(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { ae(this) ? S(this).show() : S(this).hide() }) } }); var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i; ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild; var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n } function ye(e, t) { for (var n = 0, r = e.length; n < r; n++)Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) } ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]); var me = /<|&#?\w+;/; function xe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; S.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o); else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } var be = /^([^.]*)(?:\.(.+)|)/; function we() { return !0 } function Te() { return !1 } function Ce(e, t) { return e === function () { try { return E.activeElement } catch (e) { } }() == ("focus" === t) } function Ee(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function () { S.event.add(this, t, i, r, n) }) } function Se(e, i, o) { o ? (Y.set(e, i, !1), S.event.add(e, i, { namespace: !1, handler: function (e) { var t, n, r = Y.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Y.get(e, i) && S.event.add(e, i, we) } S.event = { global: {}, add: function (t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(P) || [""]).length; while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]) } else for (d in u) S.event.remove(e, d + t[l], n, r, !0); S.isEmptyObject(u) && Y.remove(e, "handle events") } }, dispatch: function (e) { var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++)s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function () { if (this.originalEvent) return e(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[t] }, set: function (e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function (e) { return e[S.expando] ? e : new S.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1 }, trigger: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0 }, _default: function (e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, S.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function (e, t) { if (!(this instanceof S.Event)) return new S.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0 }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function (e, t) { S.event.special[e] = { setup: function () { return Se(this, e, Ce), !1 }, trigger: function () { return Se(this, e), !0 }, _default: function () { return !0 }, delegateType: t } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) { S.event.special[e] = { delegateType: i, bindType: i, handle: function (e) { var t, n = e.relatedTarget, r = e.handleObj; return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), S.fn.extend({ on: function (e, t, n, r) { return Ee(this, e, t, n, r) }, one: function (e, t, n, r) { return Ee(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () { S.event.remove(this, e, n, t) }) } }); var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function je(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e } function De(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function qe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Le(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++)S.event.add(t, i, s[i][n]); Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a)) } } function He(n, r, i, o) { r = g(r); var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d); if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) { var t = n.eq(e); h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o) }); if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c); if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(Ne, ""), u, l)) } return n } function Oe(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e } S.extend({ htmlPrefilter: function (e) { return e }, clone: function (e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e); if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)Le(o[r], a[r]); else Le(e, c); return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c }, cleanData: function (e) { for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)if (V(n)) { if (t = n[Y.expando]) { if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle); n[Y.expando] = void 0 } n[Q.expando] && (n[Q.expando] = void 0) } } }), S.fn.extend({ detach: function (e) { return Oe(this, e, !0) }, remove: function (e) { return Oe(this, e) }, text: function (e) { return $(this, function (e) { return void 0 === e ? S.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return He(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e) }) }, prepend: function () { return He(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = je(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return He(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return He(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return S.clone(this, e, t) }) }, html: function (e) { return $(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = S.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var n = []; return He(this, arguments, function (e) { var t = this.parentNode; S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this)) }, n) } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) { S.fn[e] = function (e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } }); var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) }, Me = function (e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r }, Ie = new RegExp(ne.join("|"), "i"); function We(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a } function Fe(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } !function () { function e() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l); var e = C.getComputedStyle(l); n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null } } function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div"); l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function () { return e(), r }, pixelBoxStyles: function () { return e(), o }, pixelPosition: function () { return e(), n }, reliableMarginLeft: function () { return e(), s }, scrollboxSize: function () { return e(), i }, reliableTrDimensions: function () { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a } })) }(); var Be = ["Webkit", "Moz", "ms"], $e = E.createElement("div").style, _e = {}; function ze(e) { var t = S.cssProps[e] || _e[e]; return t || (e in $e ? e : _e[e] = function (e) { var t = e[0].toUpperCase() + e.slice(1), n = Be.length; while (n--) if ((e = Be[n] + t) in $e) return e }(e) || e) } var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ve = { position: "absolute", visibility: "hidden", display: "block" }, Ge = { letterSpacing: "0", fontWeight: "400" }; function Ye(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function Qe(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u } function Je(e, t, n) { var r = Re(e), i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r), o = i, a = We(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1); if (Pe.test(a)) { if (!n) return a; a = "auto" } return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px" } function Ke(e, t, n, r, i) { return new Ke.prototype.init(e, t, n, r, i) } S.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = We(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = X(t), u = Xe.test(t), l = e.style; if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = X(t); return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), S.each(["height", "width"], function (e, u) { S.cssHooks[u] = { get: function (e, t, n) { if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () { return Je(e, u, n) }) }, set: function (e, t, n) { var r, i = Re(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s) } } }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function (i, o) { S.cssHooks[i + o] = { expand: function (e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Ye) }), S.fn.extend({ css: function (e, t) { return $(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = Re(e), i = t.length; a < i; a++)o[t[a]] = S.css(e, t[a], !1, r); return o } return void 0 !== n ? S.style(e, t, n) : S.css(e, t) }, e, t, 1 < arguments.length) } }), ((S.Tween = Ke).prototype = { constructor: Ke, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function () { var e = Ke.propHooks[this.prop]; return e && e.get ? e.get(this) : Ke.propHooks._default.get(this) }, run: function (e) { var t, n = Ke.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this } }).init.prototype = Ke.prototype, (Ke.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = Ke.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = Ke.prototype.init, S.fx.step = {}; var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/; function ot() { et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick()) } function at() { return C.setTimeout(function () { Ze = void 0 }), Ze = Date.now() } function st(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = ne[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function ut(e, t, n) { for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function lt(o, e, t) { var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always(function () { delete u.elem }), u = function () { if (a) return !1; for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) }, l = s.promise({ elem: o, props: S.extend({}, e), opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t), originalProperties: e, originalOptions: t, startTime: Ze || at(), duration: t.duration, tweens: [], createTween: function (e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function (e) { var t = 0, n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++)l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }), c = l.props; for (!function (e, t) { var n, r, i, o, a; for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i }(c, l.opts.specialEasing); r < i; r++)if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n; return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l } S.Animation = S.extend(lt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] }, tweener: function (e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t) }, prefilters: [function (e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow"); for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++, p.always(function () { p.always(function () { a.unqueued--, S.queue(e, "fx").length || a.empty.fire() }) })), t) if (i = t[r], rt.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue; g = !0 } d[r] = v && v[r] || S.style(e, r) } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function () { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function (e, t) { t ? lt.prefilters.unshift(e) : lt.prefilters.push(e) } }), S.speed = function (e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (t, e, n, r) { var i = S.isEmptyObject(t), o = S.speed(e, n, r), a = function () { var e = lt(this, S.extend({}, t), o); (i || Y.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (i, e, o) { var a = function (e) { var t = e.stop; delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () { var e = !0, t = null != i && i + "queueHooks", n = S.timers, r = Y.get(this); if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]); for (t = n.length; t--;)n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1)); !e && o || S.dequeue(this, i) }) }, finish: function (a) { return !1 !== a && (a = a || "fx"), this.each(function () { var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0; for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++)n[e] && n[e].finish && n[e].finish.call(this); delete t.finish }) } }), S.each(["toggle", "show", "hide"], function (e, r) { var i = S.fn[r]; S.fn[r] = function (e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n) } }), S.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) { S.fn[e] = function (e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function () { var e, t = 0, n = S.timers; for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || S.fx.stop(), Ze = void 0 }, S.fx.timer = function (e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function () { et || (et = !0, ot()) }, S.fx.stop = function () { et = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function (r, e) { return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) { var n = C.setTimeout(e, r); t.stop = function () { C.clearTimeout(n) } }) }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value; var ct, ft = S.expr.attrHandle; S.fn.extend({ attr: function (e, t) { return $(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function (e) { return this.each(function () { S.removeAttr(this, e) }) } }), S.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(P); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), ct = { set: function (e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) { var a = ft[t] || S.find.attr; ft[t] = function (e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r } }); var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i; function ht(e) { return (e.match(P) || []).join(" ") } function gt(e) { return e.getAttribute && e.getAttribute("class") || "" } function vt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] } S.fn.extend({ prop: function (e, t) { return $(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function (e) { return this.each(function () { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { S.propFix[this.toLowerCase()] = this }), S.fn.extend({ addClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { S(this).addClass(t.call(this, e, gt(this))) }); if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") { a = 0; while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " "); i !== (s = ht(r)) && n.setAttribute("class", s) } return this }, removeClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { S(this).removeClass(t.call(this, e, gt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") { a = 0; while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " "); i !== (s = ht(r)) && n.setAttribute("class", s) } return this }, toggleClass: function (i, t) { var o = typeof i, a = "string" === o || Array.isArray(i); return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) { S(this).toggleClass(i.call(this, e, gt(this), t), t) }) : this.each(function () { var e, t, n, r; if (a) { t = 0, n = S(this), r = vt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || "")) }) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0; return !1 } }); var yt = /\r/g; S.fn.extend({ val: function (n) { var r, e, i, t = this[0]; return arguments.length ? (i = m(n), this.each(function (e) { var t; 1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0 } }), S.extend({ valHooks: { option: { get: function (e) { var t = S.find.attr(e, "value"); return null != t ? t : ht(S.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (t = S(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = S.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), S.each(["radio", "checkbox"], function () { S.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, y.checkOn || (S.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C; var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function (e) { e.stopPropagation() }; S.extend(S.event, { trigger: function (e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !x(n)) { for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)p.push(o), a = o; a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C) } i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function (e, t, n) { var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 }); S.event.trigger(r, null, t) } }), S.fn.extend({ trigger: function (e, t) { return this.each(function () { S.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function (n, r) { var i = function (e) { S.event.simulate(r, e.target, S.event.fix(e)) }; S.event.special[r] = { setup: function () { var e = this.ownerDocument || this.document || this, t = Y.access(e, r); t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1) }, teardown: function () { var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1; t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r)) } } }); var bt = C.location, wt = { guid: Date.now() }, Tt = /\?/; S.parseXML = function (e) { var t, n; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { } return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) { return e.textContent }).join("\n") : e)), t }; var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i; function At(n, e, r, i) { var t; if (Array.isArray(e)) S.each(e, function (e, t) { r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) At(n + "[" + t + "]", e[t], r, i) } S.param = function (e, t) { var n, r = [], i = function (e, t) { var n = m(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () { i(this.name, this.value) }); else for (n in e) At(n, e[n], t, i); return r.join("&") }, S.fn.extend({ serialize: function () { return S.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e)) }).map(function (e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function (e) { return { name: t.name, value: e.replace(Et, "\r\n") } }) : { name: t.name, value: n.replace(Et, "\r\n") } }).get() } }); var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ot = {}, Pt = {}, Rt = "*/".concat("*"), Mt = E.createElement("a"); function It(o) { return function (e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0, i = e.toLowerCase().match(P) || []; if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } } function Wt(t, i, o, a) { var s = {}, u = t === Pt; function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function (e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") } function Ft(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e } Mt.href = bt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: bt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e) }, ajaxPrefilter: It(Ot), ajaxTransport: It(Pt), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (h) { if (!n) { n = {}; while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) } t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function () { return h ? p : null }, setRequestHeader: function (e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function (e) { return null == h && (v.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]]; return this }, abort: function (e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T; for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T; v.async && 0 < v.timeout && (d = C.setTimeout(function () { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e; l(-1, e) } } else l(-1, "No Transport"); function l(e, t, n, r) { var i, o, a, s, u, l = t; h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () { }), s = function (e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop"))) } return T }, getJSON: function (e, t, n) { return S.get(e, t, n, "json") }, getScript: function (e, t) { return S.get(e, void 0, t, "script") } }), S.each(["get", "post"], function (e, i) { S[i] = function (e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function (e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function (e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (e) { S.globalEval(e, t, n) } }) }, S.fn.extend({ wrapAll: function (e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (n) { return m(n) ? this.each(function (e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function () { var e = S(this), t = e.contents(); t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function (t) { var n = m(t); return this.each(function (e) { S(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { S(this).replaceWith(this.childNodes) }), this } }), S.expr.pseudos.hidden = function (e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function () { try { return new C.XMLHttpRequest } catch (e) { } }; var Bt = { 0: 200, 1223: 204 }, $t = S.ajaxSettings.xhr(); y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) { var o, a; if (y.cors || $t && !i.crossDomain) return { send: function (e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]); o = function (e) { return function () { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () { 4 === r.readyState && C.setTimeout(function () { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function () { o && o() } } }), S.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function (n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function (e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function (e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function () { i && i() } } }); var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/; S.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = zt.pop() || S.expando + "_" + wt.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function (e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function () { o = arguments }, n.always(function () { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, S.expr.pseudos.animated = function (t) { return S.grep(S.timers, function (e) { return t === e.elem }).length }, S.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, S.fn.extend({ offset: function (t) { if (arguments.length) return void 0 === t ? this : this.each(function (e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) { var o = "pageYOffset" === i; S.fn[t] = function (e) { return $(this, function (e, t, n) { var r; if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t]; r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), S.each(["top", "left"], function (e, n) { S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) { if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function (a, s) { S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) { S.fn[o] = function (e, t) { var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border"); return $(this, function (e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { S.fn[t] = function (e) { return this.on(t, e) } }), S.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) { S.fn[n] = function (e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; S.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++, i }, S.holdReady = function (e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function (e) { return null == e ? "" : (e + "").replace(Xt, "") }, "function" == typeof define && define.amd && define("jquery", [], function () { return S }); var Vt = C.jQuery, Gt = C.$; return S.noConflict = function (e) { return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S });
    function strpos(haystack, needle, offset) { var i = (haystack + '').indexOf(needle, (offset || 0)); return i === -1 ? false : i; }
    function substr(str, start, len) { var i = 0, allBMP = true, es = 0, el = 0, se = 0, ret = ''; str += ''; var end = str.length; this.php_js = this.php_js || {}; this.php_js.ini = this.php_js.ini || {}; switch ((this.php_js.ini['unicode.semantics'] && this.php_js.ini['unicode.semantics'].local_value.toLowerCase())) { case 'on': for (i = 0; i < str.length; i++) { if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) { allBMP = false; break; } } if (!allBMP) { if (start < 0) { for (i = end - 1, es = (start += end); i >= es; i--) { if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) { start--; es--; } } } else { var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g; while ((surrogatePairs.exec(str)) != null) { var li = surrogatePairs.lastIndex; if (li - 2 < start) { start++; } else { break; } } } if (start >= end || start < 0) { return false; } if (len < 0) { for (i = end - 1, el = (end += len); i >= el; i--) { if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) { end--; el--; } } if (start > end) { return false; } return str.slice(start, end); } else { se = start + len; for (i = start; i < se; i++) { ret += str.charAt(i); if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) { se++; } } return ret; } break; } case 'off': default: if (start < 0) { start += end; } end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start); return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end); } return undefined; }
    function strlen(string) { var str = string + ''; var i = 0, chr = '', lgth = 0; if (!this.php_js || !this.php_js.ini || !this.php_js.ini['unicode.semantics'] || this.php_js.ini['unicode.semantics'].local_value.toLowerCase() !== 'on') { return string.length; } var getWholeChar = function (str, i) { var code = str.charCodeAt(i); var next = '', prev = ''; if (0xD800 <= code && code <= 0xDBFF) { if (str.length <= (i + 1)) { throw 'High surrogate without following low surrogate'; } next = str.charCodeAt(i + 1); if (0xDC00 > next || next > 0xDFFF) { throw 'High surrogate without following low surrogate'; } return str.charAt(i) + str.charAt(i + 1); } else if (0xDC00 <= code && code <= 0xDFFF) { if (i === 0) { throw 'Low surrogate without preceding high surrogate'; } prev = str.charCodeAt(i - 1); if (0xD800 > prev || prev > 0xDBFF) { throw 'Low surrogate without preceding high surrogate'; } return false; } return str.charAt(i); }; for (i = 0, lgth = 0; i < str.length; i++) { if ((chr = getWholeChar(str, i)) === false) { continue; } lgth++; } return lgth; }

    var appClass = {
        //debug_mode: true, //怪怪的，先不要
        appVersion: "3.1",
        movieID: null,
        icon: {
            /* 3wa_logo.png */
            "3wa_logo": "data:image/png;base64,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",

            /* x_close.png */
            "x_close": "data:image/png;base64,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"
        },
        method: {
            fix_sentence_first_letter_upper_case: function (str) { // 句子，字首大寫
                var txt = str;
                txt = txt.toLowerCase();
                var m = txt.split(".");
                for (var i = 0, max_i = m.length; i < max_i; i++) {
                    if (m[i].length < 1) continue;
                    m[i] = m[i].trim();
                    var first_letter = m[i].charAt(0);
                    if (/[a-z]/.test(first_letter)) {
                        m[i] = first_letter.toUpperCase() + m[i].substring(1);
                    }
                }
                txt = m.join('. ');
                // custom fix “
                txt = txt.replace(/“[a-z0-9\s]*“/g, x => x.toUpperCase());
                return txt;
            },
            "get_between": function ($data, $s_begin, $s_end) {
                /*
                  $a = "abcdefg";
                  echo get_between($a, "cde", "g");
                  // get "f"
                */
                $s = $data;
                $start = strpos($s, $s_begin);
                $new_s = substr($s, $start + strlen($s_begin));
                $end = strpos($new_s, $s_end);
                return substr($s, $start + strlen($s_begin), $end);
            },
            "xmlSubParse": function (xmlSource, nowVideoDT) {
                nowVideoDT *= 1000000 * 10; //奇妙
                var m = $($.parseXML(xmlSource)).find("div").html().split("\n");
                for (var i = 0, max_i = m.length; i < max_i; i++) {
                    var s = parseInt($(m[i]).attr('begin'));
                    var e = parseInt($(m[i]).attr('end'));

                    //console.log(s + "," + e + "," + nowVideoDT);

                    if (nowVideoDT >= s && nowVideoDT <= e) {

                        var txt = $(m[i]).text();
                        //console.log(txt);
                        return txt;
                    }
                }
                return null;
            },
            "trim": function (data) {
                if (typeof (data) == "string") {
                    return data.replace(/(^\s*)|(\s*$)/g, "");
                }
                else {
                    return data;
                }
            },
            "loadScript": function (src) {
                return new Promise(function (resolve, reject) {
                    const script = document.createElement('script');
                    document.body.appendChild(script);
                    script.onload = () => resolve(!0);
                    script.onerror = () => reject(!1);
                    script.src = src;
                });
            },
            "fixOrinURL": function () {
                //非 播放頁時，修正原來的 URL.create...
                // 如果有 window.my_netflix_URLCREATEOBJECTURL
                var img = document.createElement('img');
                img.style.display = "none";
                img.style.position = "absolute";
                img.style.zIndex = -10;
                img.setAttribute("onerror", `
                        if(window.my_netflix_URLCREATEOBJECTURL!=null){
                            window.URL.createObjectURL = window.my_netflix_URLCREATEOBJECTURL;
                            window.my_netflix_URLCREATEOBJECTURL = null;
                            //移除 img[reqc='fixCURL']、div[reqc='my_netflix_imageSubsB64']
                            if(window.document.querySelectorAll("img[reqc='fixCURL']").length!=0)
                            {
                              window.document.querySelectorAll("img[reqc='fixCURL']")[0].remove();
                            }
                            if(window.document.querySelectorAll("div[reqc='my_netflix_imageSubsB64']").length!=0)
                            {
                              window.document.querySelectorAll("div[reqc='my_netflix_imageSubsB64']")[0].remove();
                            }
                        
                            //順便把 JSON.parse 給懟了
                            //移除 div[reqc='my_netflix_JSON']
                            window.JSON.parse = window.my_netflix_JSONPARSE;
                            window.my_netflix_JSONPARSE = null;
                            if(window.document.querySelectorAll("div[reqc='my_netflix_JSON']").length!=0)
                            {
                              window.document.querySelectorAll("div[reqc='my_netflix_JSON']")[0].remove();
                            }

                            //換回 xhr
                            //window.XMLHttpRequest.prototype.open = window.my_netflix_XHROPEN;
                            //window.my_netflix_XHROPEN = null;
                        }
                        //移除自己
                        this.remove();
                `);
                //append to body
                document.querySelectorAll("body")[0].appendChild(img);
                img.setAttribute("src", appClass.flag.fakeURL);
            },
            "getMovieID": function () {
                var href = location.href;
                //https://www.netflix.com/watch/81087271?trackId=254015180&tctx=0%2C
                if (href.indexOf("netflix.com/watch/") != -1) {
                    var tmpMovieID = href.split("netflix.com/watch/")[1].split("?")[0];
                    /*if (appClass.movieID != tmpMovieID) {
                        appClass.flag.mainSubHasData = false;
                        appClass.movieID = tmpMovieID;
                        $("#subMain_div").empty();
                    }
                    */
                    appClass.method.setMemory("movieID", tmpMovieID);
                    return tmpMovieID;
                }
                return null;
            },
            "arduino_map": function (x, in_min, in_max, out_min, out_max) {
                //x = 輸入值
                //in 如 0~255
                //out 如 0~1024
                return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
            }, //arduino_map
            "getWindowSize": function () {
                var myWidth = 0, myHeight = 0;
                if (typeof (window.innerWidth) == 'number') {
                    //Non-IE
                    myWidth = window.innerWidth;
                    myHeight = window.innerHeight;
                } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                    //IE 6+ in 'standards compliant mode'
                    myWidth = document.documentElement.clientWidth;
                    myHeight = document.documentElement.clientHeight;
                } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                    //IE 4 compatible
                    myWidth = document.body.clientWidth;
                    myHeight = document.body.clientHeight;
                }
                var a = new Object();
                a['width'] = myWidth;
                a['height'] = myHeight;
                return a;
            }, //取畫面大小
            "setMemory": function (wtfkey, value) {
                localStorage.setItem(wtfkey, value);
            }, // 設定 ram
            "getMemory": function (wtfkey) {
                return localStorage.getItem(wtfkey);
            }, // 取出 ram
            "smallComment": function (message, seconds, is_need_motion, cssOptions) {
                //畫面的1/15	
                if ($("#mysmallComment").length == 0) {
                    $("body").append("<div id='mysmallComment'><span class='' id='mysmallCommentContent'></span></div>");
                    $("#mysmallComment").css({
                        'display': 'none',
                        'position': 'fixed',
                        'left': '0px',
                        'right': '0px',
                        'padding': '15px',
                        'bottom': '3em',
                        'z-index': new Date().getTime(),
                        'text-align': 'center',
                        'opacity': 0.8,
                        'pointer-events': 'none'
                    });
                    $("#mysmallCommentContent").css({
                        'color': '#fff',
                        'background-color': '#000',
                        'padding': '10px',
                        'border': '3px solid #fff',
                        'pointer-events': 'none'
                    });
                    $("#mysmallCommentContent").css(cssOptions);
                }
                $("#mysmallCommentContent").html(message);
                if (is_need_motion == true) {
                    //$("#mysmallComment").stop();
                    //$("#mysmallComment").fadeIn("slow");
                    //clearTimeout(window['smallComment_TIMEOUT']);
                    //window['smallComment_TIMEOUT'] = setTimeout(function () {
                    //$("#mysmallComment").fadeOut('fast');
                    //}, seconds);
                }
                else {
                    //$("#mysmallComment").stop();
                    $("#mysmallComment")[0].style.display = "inline";
                    clearTimeout(window['smallComment_TIMEOUT']);
                    window['smallComment_TIMEOUT'] = setTimeout(function () {
                        $("#mysmallComment")[0].style.display = "none";
                    }.bind(this), seconds);
                }
            }, //浮動說明
            "mytabs": function (dom, obj) { //自製的分頁功能
                /*
                  obj.head_css
                  obj.head_li_focus_css
                  obj.content_css
                  obj.show = #div id
                  //example:
              mytabs($("#tabs"),{
                head_li_focus_css:{
                  'background-color':'#77ff77',
                  'font-weight':'bold'
                },
                head_li_css:{
                  'background-color':'#eeeeee',
                  'font-weight':'normal'
                },
                head_a_css:{
                  color:'#000'
                },  content_css:{
                 
                },
                show : "#tabs-1"
              });
                */
                var li_a = dom.find("> ul li a");
                dom.find("> ul li a").css({
                    "text-decoration": "none"
                });
                dom.find("> ul li").css({
                    "display": "inline",
                    "padding": "3px",
                    "border-top": "1px solid #fff",
                    "border-left": "1px solid #fff",
                    "border-right": "1px solid #fff",
                    "border-bottom": "0px",
                    "margin": "0px",
                    "border-radius": "5px 5px 0px 0px"
                });
                if (obj.head_li_css != null) {
                    dom.find("> ul li").css(obj.head_li_css);
                }
                if (obj.head_a_css != null) {
                    dom.find("> ul li a").css(obj.head_a_css);
                }
                if (obj.content_css != null) {
                    for (var i = 0, max_i = li_a.length; i < max_i; i++) {
                        var id = li_a.eq(i).attr('href');
                        dom.find(id).css(obj.content_css);
                    }
                }
                li_a.unbind("click").bind("click", { "dom": dom, "obj": obj }, function (e) {
                    var this_href = $(this).attr('href');
                    var li_a = e.data.dom.find("> ul li a");
                    var mids = new Array();
                    for (var i = 0, max_i = li_a.length; i < max_i; i++) {
                        var id = li_a.eq(i).attr('href');
                        li_a.eq(i).closest("li").css({ 'background-color': 'transparent' });
                        if (e.data.obj.head_li_css != null) {
                            li_a.eq(i).closest("li").css(e.data.obj.head_li_css);
                        }
                        mids.push(id);
                        e.data.dom.find(id).hide();
                    }
                    //li css
                    $(this).closest("li").css({ 'background-color': '#006' });
                    if (e.data.obj.head_li_focus_css != null) {
                        $(this).closest("li").css(e.data.obj.head_li_focus_css);
                    }

                    //e.data.dom.find(this_href).show();
                    // 把所有設成穿透，只有前景不能穿
                    // 似乎是這個原因，害 tabs 裡的 range 都無法順順調整，改成 span 就正常
                    e.data.dom.find("> div").css({
                        'pointer-events': 'none'
                    }).hide();
                    //div css
                    e.data.dom.find(this_href).css({
                        'border': '1px solid #fff',
                        'padding': '10px',
                        'display': 'block',
                        'margin-top': '10px',
                        'pointer-events': 'auto' //不能穿透，任何東西都無法點
                    });
                    return false;
                }); //a click
                if (obj.show != null) {
                    dom.find("> ul li a[href='" + obj.show + "']").trigger("click");
                }
                else {
                    dom.find("> ul li a").eq(0).trigger("click");
                }
            },
            "dialogMyBoxOn": function (message, isTouchOutSideClose, functionAction) {
                $.mybox({
                    is_background_touch_close: isTouchOutSideClose,
                    message: message,
                    css: {
                        border: '2px solid #fff',
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '15px'
                    },
                    onBlock: function () {
                        functionAction();
                    }
                });
            },
            "dialogMyBoxOff": function () {
                $.unmybox();
            },
            "isImageFont": function () {
                return ($(".image-based-subtitles svg image").length > 0);
            },
            "registerFontSize": function () {
                $("style[reqc='style_fontsize']").remove();
                //jQuery("svg image").attr('my3waFlag',null);
                $("svg image").attr('my3waFlag', null);
            }, //註冊字體大小
            "loadUIInit": function () { //要 bind UI                
                //注入 createObjectURL 
                //沒想到可以用 img onerror 的方法，把語法注入...
                //那就用這個方法重新註冊 URL.createObjectURL... ~_~!!
                if ($("img[reqc='fixCURL']").length == 0) {
                    //console.log("Inject..............URL createObjectURL");
                    $("body").append("<img reqc='fixCURL' style='display:none;position:absolute;z-index:-1;'>");
                    $("img[reqc='fixCURL']").attr("onerror", `
                    if(window.document.querySelectorAll("div[reqc='my_netflix_imageSubsB64']").length==0)
                    {
	                    var eDiv = window.document.createElement('div');
	                    eDiv.style.cssText = 'position:absolute;width:0%;height:%;left:0px;top:0px;opacity:0;z-index:-100;background:#000;display:none;';
	                    eDiv.setAttribute('reqc','my_netflix_imageSubsB64');
	                    window.document.body.appendChild(eDiv);
	                    window.my_netflix_URLCREATEOBJECTURL = window.URL.createObjectURL;
	                    window.URL.createObjectURL = function(bdata){
                             try{
	                            var dom = window.document.querySelectorAll("div[reqc='my_netflix_imageSubsB64']");
		                        if(dom.length!=0){
		                          var reader = new window.FileReader();
                              
		                          reader.onload = function() {
		                            var dom = window.document.querySelectorAll("div[reqc='my_netflix_imageSubsB64']");
			                        if(dom.length!=0)
                                    {
                                   
                                            //console.log(reader);
		                                    var dataUrl = reader.result;
		                                    var b64 = dataUrl;
		                                    var m = dom[0].innerHTML.split('|||3WA_BR|||');
                                            //字幕|||3WA|||時間
		                                    m.push(b64+"|||3WA|||"+new Date().getTime());
                                
		                                    m = m.slice(-10); /* keep last 10 */
		                                    dom[0].innerHTML = m.join('|||3WA_BR|||');                                        
                                    }
		                          };
		                          reader.readAsDataURL(bdata);                             
		                        }
                            }catch (e) {
                                //pass 修正 91、修正自動下一集會 crash 的問題
                            }
		                    //window.my_netflix_URLCREATEOBJECTURL(bdata);
                            if(typeof(window.my_netflix_URLCREATEOBJECTURL)=="function"){
                              //這裡少加 return ，難怪會當...Orz
                              return window.my_netflix_URLCREATEOBJECTURL.apply(this, arguments);
                            }		                    
	                    }

                        //搞一個 JSON 的 hook~
                        var eDiv = window.document.createElement('div');
	                    eDiv.style.cssText = 'position:absolute;width:0%;height:%;left:0px;top:0px;opacity:0;z-index:-100;background:#000;display:none;';
	                    eDiv.setAttribute('reqc','my_netflix_JSONPARSE');
	                    window.document.body.appendChild(eDiv);
	                    window.my_netflix_JSONPARSE = window.JSON.parse;
                        window.JSON.parse = function(data){
                            //console.log(data); // 一樣寫入 div[reqc='my_netflix_JSONPARSE']
                            var jd = window.my_netflix_JSONPARSE(data); 
                            //console.log(jd);
                            return jd;
                        }
                        //搞一個 xhr.response 的 hook~
                        if(window.my_netflix_XHROPEN == null)
                        {
                            window.my_netflix_XHROPEN = window.XMLHttpRequest.prototype.open;
                            window.XMLHttpRequest.prototype.open = function() {
                                //console.log('request started!');
                                this.addEventListener('load', function() {
                                    //console.log('request completed!');
                                    //console.log(this.readyState); //will always be 4 (ajax is completed successfully)
                                    //console.log(this); //whatever the response was
                                    if(this.responseType=='' && this.response.indexOf('tts:fontSize')!=-1)
                                    {
                                        //發現字幕了
                                        //console.log(this.response);
                                        //如果第二字幕按壓的時間在 2 秒內，就存下來
                                        if(window.localStorage.getItem("my_netflix_sub2_Click_DT")!=null)
                                        {
                                            if(new Date().getTime()-parseInt(window.localStorage.getItem("my_netflix_sub2_Click_DT")) < 2000){
                                                var movieID = window.localStorage.getItem("movieID");
                                                var subTitle = window.localStorage.getItem("my_netflix_sub2");
                                                window.localStorage.setItem("my_netflix___SUB["+movieID+"]["+subTitle+"]", this.response);
                                            }
                                        }
                                    }         
                                    if(typeof(this.response.indexOf)=="function")
                                    {
                                        if(this.response.indexOf("nflxvideo")!=-1){
                                        
                                            //console.log(this.response);
                                        }
                                    
                                    }
                                });
                                window.my_netflix_XHROPEN.apply(this, arguments);
                            };
                        }
                    }
                    `
                    );
                    $("img[reqc='fixCURL']").attr('src', appClass.flag.fakeURL);
                }

                //將原廠的字幕藏掉
                //Fix issue: 76、寬螢幕如果遇到超長字幕，偶爾會透在底下(如：迷霧：第6集 剩 1:30 左右)
                $("head").append("<style>.player-timedtext{z-index:-222;opacity:0.01;}</style>");

                //註冊新版雙字幕操作方法
                //藏掉原本的字幕列表
                $("head").append("<style>div[data-uia='selector-audio-subtitle']{position:absolute;z-index:-2;}</style>");

                //影片標題下移
                //Issue 74、影片標題下移、加一點透明度
                $("head").append("<style>div[data-uia='video-title']{opacity:0.8;position:absolute;bottom:-4%;}</style>")

                //重要，嘗試修正播放捲軸
                //並提示在捲軸時，無法翻譯
                //註冊一下 #my3wanetflix_alert_sub_comments
                //$("#my3wanetflix_alert_sub_comments").remove();
                //$("body").append("<div id='my3wanetflix_alert_sub_comments'>滑鼠在下方控制區時，雙字幕將無法正常使用</div>");
                /*$("#my3wanetflix_alert_sub_comments").css({
                    'position': 'absolute',
                    'background-color': 'rgba(0,0,0,0.8)',
                    'z-index': 999999,
                    'font-size': '16px',
                    'bottom': '15px',
                    'left': '60%',
                    'margin-left': 'auto',
                    'margin-right': 'auto',
                    'text-align': 'center',
                    'pointer-events': 'none', //div 可穿透
                    'color': 'orange',
                    'border': '1px solid red',
                    'border-radius': '10px',
                    'padding': '8px'
                });
                */
                $("body").unbind("mousemove").bind("mousemove", function (e) {
                    //console.log(e.originalEvent);
                    // 滑鼠一移動，就改 cursor
                    $("body").css({
                        'cursor': 'auto'
                    });
                    $("button[data-uia='control-flag']").css({ //問題回報
                        'pointer-events': 'auto', //不可穿透
                    });
                    $("button[data-uia='rol-nav-back']").css({ //回上頁
                        'pointer-events': 'auto', //不可穿透
                    });

                    $("button[data-uia='watch-credits-seamless-button']").css({ // 下一集
                        'pointer-events': 'auto'
                    });
                    $("button[data-uia='next-episode-seamless-button']").css({ // 工作人員名單
                        'pointer-events': 'auto'
                    });
                    $("button[data-uia='nfplayer-exit']").css({ // 返回瀏覽
                        'pointer-events': 'auto'
                    });
                    $("button[data-uia='player-skip-intro']").css({ // 略過簡介
                        'pointer-events': 'auto'
                    });

                    $("button[data-uia='player-skip-recap']").css({ // 前情提要
                        'pointer-events': 'auto'
                    });
                    // 修正 issue 40
                    $("button[data-uia='control-nav-back']").css({ // 回上頁按鈕
                        'pointer-events': 'auto'
                    });
                    $("button[data-uia='control-flag']").css({ // 問題回報鈕
                        'pointer-events': 'auto'
                    });
                    $("button[data-uia='control-flag']").hide();

                    //控制項顯示
                    // Issue 65、全螢幕時，控制項每六秒隱藏
                    $("div[data-uia='controls-standard']").css({
                        'opacity': 1
                    });
                    //如果是全螢幕模式，6 秒隱藏
                    if (document.fullscreenElement) {
                        // 功能全螢幕，每隔六秒滑鼠沒移動，自動隱藏
                        // fix issue 45、全螢幕時，滑鼠沒移動一段時間後要自動隱藏(6秒)
                        clearTimeout(appClass.interval.fullScreenMouseNoMoveTimeout);
                        appClass.interval.fullScreenMouseNoMoveTimeout = setTimeout(function () {
                            $("body").css({
                                'cursor': 'none'
                            });
                            //控制項也要隱藏
                            // Issue 65、全螢幕時，控制項每六秒隱藏
                            $("div[data-uia='controls-standard']").css({
                                'opacity': 0.01
                            });
                        }, 6000);
                    }

                    appClass.flag.mouse.X = e.originalEvent.screenX;
                    appClass.flag.mouse.Y = e.originalEvent.screenY;
                    if (appClass.flag.mouse.Y > $(window).height() * 80 / 100) {
                        appClass.flag.inControl = true;
                        //$("#my3wanetflix_alert_sub_comments").stop().show();
                        //setTimeout(function () {
                        //    $("#my3wanetflix_alert_sub_comments").fadeOut();
                        //}, 1000);
                    }
                    else {
                        appClass.flag.inControl = false;
                        //$("#my3wanetflix_alert_sub_comments").hide();
                    }
                    //console.log("appClass.flag.inControl: " + appClass.flag.inControl);
                });

                if ($("body").attr('isDefinedKeyup') != "YES") {
                    $("body").attr('isDefinedKeyup', "YES");
                    $("body").unbind("keydown");
                    $("body").unbind("keyup");
                    $("body").unbind("keydown").bind("keydown", function (e) {
                        // Issue 56、按「空白鍵」可以控制播放、停止
                        // Issue 57、按「o 或 O」(Open) 可以喚出字幕選單
                        // 需要時再打開
                        // console.log(e.code.toLowerCase());

                        switch (e.code.toLowerCase()) {
                            case "keym":
                                {
                                    //靜音/有聲
                                    if ($("button[data-uia='control-volume-off']").length == 0) {
                                        $("button[data-uia='control-volume-high']").trigger("click");
                                        $("button[data-uia='control-volume-medium']").trigger("click");
                                        if ($("button[data-uia='control-volume-off']").length != 0) {
                                            $("button[data-uia='control-volume-off']")[0].blur();
                                        }
                                        $("div[data-uia='scrubber']").hide(); //隱藏音效條
                                    }
                                    else {
                                        $("button[data-uia='control-volume-off']").trigger("click");
                                        if ($("button[data-uia='control-volume-high']").length != 0) {
                                            $("button[data-uia='control-volume-high']")[0].blur();
                                        }
                                        if ($("button[data-uia='control-volume-medium']").length != 0) {
                                            $("button[data-uia='control-volume-medium']")[0].blur();
                                        }
                                        $("div[data-uia='scrubber']").hide(); //隱藏音效條
                                    }
                                }
                                break;
                            case "arrowleft": //上十秒
                            case "numpad4":
                                {
                                    $("button[data-uia='control-back10']").trigger("click");
                                }
                                break;
                            case "arrowright": //下十秒
                            case "numpad6":
                                {
                                    $("button[data-uia='control-forward10']").trigger("click");
                                }
                                break;
                            case "keyn": //下一集
                                {
                                    $("button[data-uia='control-next']").trigger("click");
                                }
                                break;
                            case "keys": //略過片頭、前情提要
                                {
                                    //這裡用 jquery 的 trigger 好像會異常
                                    //2022-11-04 issue 85、熱鍵 S 發現 bug，有時按下後，會回到片頭
                                    if ($("button[data-uia='player-skip-intro']").length != 0) {
                                        $("button[data-uia='player-skip-intro']")[0].click();
                                    }
                                    if ($("button[data-uia='player-skip-recap']").length != 0) {
                                        $("button[data-uia='player-skip-recap']")[0].click();
                                    }
                                }
                                break;
                            case "keyf": //觸發我的全螢幕
                                {
                                    $("button[reqc='my3wanetflix_fullscreen_btn']").trigger("click");
                                }
                                break;
                            case "keyo": //叫出選單
                                {
                                    if ($(".my_netflix_controller_class").length != 0 && $(".my_netflix_controller_class").css('opacity') == 1) {
                                        $(".my_netflix_controller_class").attr('my_hidenow', 'YES').trigger("mouseleave");
                                    } else {
                                        $(".my_netflix_controller_class").trigger("mousemovemousemove");
                                    }
                                }
                                break;
                            case "space": //按下暫停、繼續
                                {
                                    if ($("video").length != 0) {
                                        if ($("video")[0].paused) {
                                            $("video")[0].play();
                                        } else {
                                            $("video")[0].pause();
                                        }
                                    }
                                }
                                break;
                        }
                    });
                }

                //播放器單點，應該要暫停或開始播放
                $("video").unbind("click").click(function (e) {
                    //Issue 97、片尾時播放終止，點畫面中間會有當掉的問題，如: 柯南159集，觸發原因為: $("video").play();
                    //解決方式：當 video duration 與 currentTime 相同，video 加入 css style.pointerEvents = "none";
                    if ($("div[data-uia='background-video']").length > 0 &&
                        $("div[data-uia='background-video'] video").length > 0) {
                        //$("div[data-uia='background-video'] video")[0].pause();
                        //然後改成靜音好了
                        $("div[data-uia='background-video'] video")[0].muted = true;
                    }
                    if ($("video").length > 0 && $("video")[0].currentTime == $("video")[0].duration) {
                        $("video").css({
                            'pointer-events': 'none'
                        });
                        return;
                    }
                    //重新自定義畫面點到的效果
                    if ($("video")[0].paused) {
                        $("video")[0].play();
                    }
                    else {
                        $("video")[0].pause();
                    }
                    e.stopPropagation();
                });
                $("video").unbind("dblclick").bind("dblclick", function (e) {
                    $("button[reqc='my3wanetflix_fullscreen_btn']").trigger("click");

                    //Issue 95、看到最後一集片尾會自動跳出，想跳回去看片尾卻沒辦法，如: LiSA Live is Smile Always (From: Takashi_灯)
                    //console.log("WTF...!!?"); //確實有觸發
                    //console.log(appClass.method.getMovieID());
                    //console.log($("div[data-uia='watch-video-player-view-minimized']").length);
                    //如果有發現 div data-uia='watch-video-player-view-minimized' 仍可進全螢幕
                    //如果有發現 background-video，把他暫停
                    if ($("div[data-uia='background-video']").length > 0 &&
                        $("div[data-uia='background-video'] video").length > 0) {
                        $("div[data-uia='background-video'] video")[0].pause();
                        //然後改成靜音好了
                        $("div[data-uia='background-video'] video")[0].muted = true;
                    }

                    if ($("div[data-uia='watch-video-player-view-minimized']").length > 0
                        &&
                        $("div[data-uia='watch-video-player-view-minimized'] video").length > 0
                    ) {
                        //appClass.method.fixOrinURL();
                        $("div[data-uia='watch-video-player-view-minimized'] video")[0].webkitEnterFullscreen();
                        //藏掉 track bar
                        //From : https://stackoverflow.com/questions/42325531/how-to-hide-progress-bar-in-html5-video-player
                        //不藏使用者點了會當掉
                        $("div[data-uia='watch-video-player-view-minimized'] video").append(`
                        <style>
                            div[data-uia='watch-video-player-view-minimized'] audio::-webkit-media-controls-timeline,
                            div[data-uia='watch-video-player-view-minimized'] video::-webkit-media-controls-timeline {
                                display: none;
                            }
                        </style>
                        `); 
                        
                        //同樣修正最後一秒後繼續播會當的問題
                        //$("div[data-uia='watch-video-player-view-minimized'] video").unbind("mouseup");
                        //$("div[data-uia='watch-video-player-view-minimized'] video").unbind("click");
                        $("div[data-uia='watch-video-player-view-minimized'] video").unbind("mousedown").mousedown(function (e) {
                            
                            if ($("div[data-uia='watch-video-player-view-minimized'] video").length > 0 &&
                                $("div[data-uia='watch-video-player-view-minimized'] video")[0].currentTime == $("div[data-uia='watch-video-player-view-minimized'] video")[0].duration) {
                                $("div[data-uia='watch-video-player-view-minimized'] video").css({
                                    'pointer-events': 'none'
                                });
                                //console.log("GGGGGg");
                                //最後點了離開全螢幕好了
                                $("div[data-uia='watch-video-player-view-minimized'] video")[0].webkitExitFullscreen();
                                return false;
                            }                            
                            e.stopPropagation();                            
                        });
                    }
                });
                //$("button[data-uia='control-play-pause-pause']").trigger("click");
                //});
                //全螢幕
                //https://usefulangle.com/post/12/javascript-going-fullscreen-is-rare
                //要改成自己寫的 fullscreen ?
                //不讓畫面可點
                //修正點 video 畫面，會造成 UI 變化，無法連點語言
                $("div[data-uia='watch-video']").find("div").css({ 'pointer-events': 'none' });
                $("div[reqc='my_netflix_controller_div'] *").css({ 'pointer-events': 'auto' });
                $("div[data-uia='controls-standard']").closest("div").find("*").css({ 'pointer-events': 'auto' });
                $("div[data-uia='timeline']").closest("div").find("*").css({ 'pointer-events': 'auto' });
                $("video").closest("div").css({ 'pointer-events': 'auto' });

                //這二行也要註冊到連續使用的 interval
                $("button[data-uia='control-nav-back']").css({ 'pointer-events': 'auto' }); //回上頁按鈕
                $("button[data-uia='control-flag']").css({ 'pointer-events': 'auto' }); //問題回報鈕



            },
            "cleanXMLSubs": function () {
                //清掉字幕組
                for (var k in localStorage) {
                    //my_netflix___SUB[movieID][語言]
                    // Issue: 89、清字幕 localStorage 不小心清到字幕設定
                    // 這裡應該要針對 my_netflix___SUB[ 檢查，符合
                    // 且與本片 MovieID 不同，就移掉，省記憶體
                    if (k.indexOf("my_netflix___SUB[") == 0 && k.indexOf("my_netflix___SUB[" + appClass.method.getMovieID() + "]") == -1) { //這裡應該不是 -1 才要清
                        localStorage.removeItem(k);
                    }
                }
            }
        },
        "interval": { //用來放一堆無腦 interval 的好地方
            uiInterval: null, //初始畫面綁定使用
            waitControlUIHideShowInterval: null, // 滑鼠進入 ControlUI 延遲消失使用
            subtitleInterval: null, // 字幕反覆取得多字幕            
            subtitleUIInterval: null, // 字幕一直出現的 interval，時間相當短 50ms
            watchIntervalUI: null, //判斷網址列是否符合
            fullScreenMouseNoMoveTimeout: null, // 滑鼠全螢幕時，6 秒後會隱藏滑鼠指標            
            omkt8s_Timeout: null, //滑鼠進入控制區，進度條不要立馬 show
            mouseMoveTimeLineTimeout: null //當滑鼠在移動時進入時間軸，不進行翻譯
        },
        "flag": {
            fakeURL: 'https://www.netflix.com/3wanetflix.png',
            mouse: {
                X: null,
                Y: null
            },
            mainSubHasData: false, //是否已產字幕列表
            sub1: null, //第一字幕
            sub2: null,  //第二字幕
            isSub1Image: false, //第一字幕是否圖片
            isSub2Image: false, //第二字幕是否圖片
            timelineBarDom: null, //播放條
            timeLineSliding: false, //是否捲動中
            inControl: false, //滑鼠是否在下方控制區
            lastSubTime: null, //影片最後抓到字幕的時間
            isCheckSub1: false, //是否已檢查目前進入控制項是主字幕
            isSkipIntro: false, //是否已跳過片頭，一片只會跳過一次
            isSkipRecap: false //是否已跳過前情提要，一片只會跳過一次
        },
        "doms": {

        }
    };


    /*
     * //如果使用者點了字幕
    //不讓滑鼠離開關掉!
    window['wtf_i'] = setInterval(function () {
        if ($("div[data-uia='selector-audio-subtitle']").length != 0) {
            console.log("found selector-audio-subtitle...");
            var sub_html = $("div[data-uia='selector-audio-subtitle']").closest("div").closest("div").clone(true, true);
            $("body").append("<div reqc='ggg'></div>");
            $("div[reqc='ggg']").css({
                'position': 'absolute',
                'z-index': 5,
                'top': '0px',
                'left': '0px'
            });
            sub_html.appendTo($("div[reqc='ggg']"));
            clearInterval(window['wtf_i']);
        }
    }, 50);
    */

    //主程式開始
    //3秒後執行
    //setTimeout(function(){
    //console.log(location.href);
    if (location.href.indexOf("netflix.com/watch/") == -1) {
        console.log(location.href.indexOf("netflix"));
        console.log("only run on netflix url...");
        //return; //只有在 netflix 才有效        
    }

    // bind ui   
    clearInterval(appClass.interval.uiInterval);
    appClass.interval.uiInterval = setInterval(function () {
        if ($("#" + appClass.method.getMovieID()).length != 0 && $("#" + appClass.method.getMovieID()).attr('isBindClass') == null) {
            appClass.method.loadUIInit();
            $("#" + appClass.method.getMovieID()).attr('isBindClass', "已載入 UI");
            //清掉非此影片的字幕
            appClass.method.cleanXMLSubs();

        }
    }, 100);


    var _myNetFlixSettings = {
        //主要字幕
        'my_netflix_sub1': { 'default': '繁體中文' }, // 最後選的字幕
        'my_netflix_font_family': {
            'default': 'Netflix Sans', 'sets': ['Netflix Sans', '微軟正黑體', '標楷體', 'Copperplate', 'Arial', 'Helvetica']
        },
        //主要字幕 字型
        'my_netflix_font_color': { 'default': '#fff5f8' }, // 字色
        'my_netflix_font_border_color': { 'default': '#1c5cb0' }, // 字框色
        'my_netflix_font_bolder': { 'default': 400, 'min': 100, 'max': 700, 'step': 300, 'sets': { 100: '細緻', 400: '正常', 700: '粗體' } }, // 字粗
        'my_netflix_y_position': { 'default': 18, 'min': -40, 'max': 100, 'step': 1 }, //y 軸位置
        'my_netflix_fontsize': { 'default': 1.5, 'min': 0.1, 'max': 3, 'step': 0.1 }, //文字大小
        'my_netflix_fontspace': { 'default': 12.5, 'min': -50, 'max': 50, 'step': 0.1 }, //文字間距
        'my_netflix_font_text_shadow': { 'default': 10, 'min': 0, 'max': 50, 'step': 0.1 }, //字框粗細

        //第二字幕
        'my_netflix_sub2': { 'default': '關閉' }, // 最後選的字幕
        'my_netflix_font_family_2': {
            'default': 'Netflix Sans', 'sets': ['Netflix Sans', '微軟正黑體', '標楷體', 'Copperplate', 'Arial', 'Helvetica']
        },
        //第二字幕 字型
        'my_netflix_font_color_2': { 'default': '#fff5f8' }, // 字色
        'my_netflix_font_border_color_2': { 'default': '#121212' }, // 字框色
        'my_netflix_font_bolder_2': { 'default': 400, 'min': 100, 'max': 700, 'step': 300, 'sets': { 100: '細緻', 400: '正常', 700: '粗體' } }, // 字粗
        'my_netflix_y_position_2': { 'default': 30, 'min': -40, 'max': 100, 'step': 1 }, //y 軸位置 第二字幕高度
        'my_netflix_fontsize_2': { 'default': 0.7, 'min': 0.1, 'max': 3, 'step': 0.1 }, //文字大小
        'my_netflix_fontspace_2': { 'default': 2.6, 'min': -50, 'max': 50, 'step': 0.1 }, //文字間距
        'my_netflix_font_text_shadow_2': { 'default': 5.6, 'min': 0, 'max': 50, 'step': 0.1 }, //字框粗細
        //自動設定
        'my_netflix_auto_skip_intro': { 'default': 'false' }, //自動跳過片頭，預設不啟動
        'my_netflix_auto_skip_recap': { 'default': 'false' }, //自動跳過前情提要，預設不啟動
        'my_netflix_auto_next_movie': { 'default': 'false' }, //自動切換下一集，預設不啟動
        'my_netflix_auto_fix_english_first_letter_case': { 'default': 'false' } //自動修正英文 CC 字幕，首字大寫，後面都改小寫
    };

    for (var k in _myNetFlixSettings) {
        window[k] = _myNetFlixSettings[k]['default'];
        if (appClass.method.getMemory(k) != null) {
            //get Last setting
            window[k] = appClass.method.getMemory(k);
        }
        if (typeof (_myNetFlixSettings[k]['min']) != 'undefined') {
            window[k] = (window[k] >= _myNetFlixSettings[k]['max']) ? _myNetFlixSettings[k]['max'] : window[k];
            window[k] = (window[k] <= _myNetFlixSettings[k]['min']) ? _myNetFlixSettings[k]['min'] : window[k];
        }
    }
    //註冊style到 head
    appClass.method.registerFontSize();
    $("head style[reqc='s']").remove();
    $("head").append(`
<style reqc='s'>   
  .my_netflix_controller_class{ 
    width: 480px; 
    padding:10px; 
    text-align:center; 
    position:fixed; 
    color:#000; 
    z-index: -100; /* 一開始要沉下去 */
    pointer-events: none;
    background-color: rgba(255,255,255,0.8); 
    font-size:18px; 
    top:0px; 
    left: 35%; 
    border:2px solid #00f; 
    border-radius: 5px;
    opacity:0.01; 
    display:none;
  } 
  /* From : https://stackoverflow.com/questions/1409649/how-to-change-the-height-of-a-br */
  /*
  .my_netflix_controller_class br{    
    display: block; 
    content: ""; 
    margin-top: 5px; 
    margin-bottom: 5px;
  }
  */
  /* 標題 */
  .my_netflix_controller_title_class{
    border-bottom: 3px solid #000;
    font-weight: bold;    
    text-align: center;
    margin-bottom: 8px;
  }
  .my_netflix_controller_class select{    
    margin: 0;
    width: 100%;
  }
  .my_netflix_controller_class input[type='range']{
    -webkit-appearance: none;
    margin: 12px 0;
    width: 100%;
  }
  .my_netflix_controller_class input[type='range']:focus {
    outline: none;
  }
  .my_netflix_controller_class input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  .my_netflix_controller_class input[type='range']::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 30px;
    width: 30px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  .my_netflix_controller_class input[type='range']:focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }
  .my_netflix_controller_class input[type='range']::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  .my_netflix_controller_class input[type='range']::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 30px;
    width: 30px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  .my_netflix_controller_class input[type='range']::-ms-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 25px 0;
    color: transparent;
  }
  .my_netflix_controller_class input[type='range']::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  .my_netflix_controller_class input[type='range']::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  .my_netflix_controller_class input[type='range']::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  .my_netflix_controller_class input[type='range']:focus::-ms-fill-lower {
    background: #3071a9;
  }
  .my_netflix_controller_class input[type='range']:focus::-ms-fill-upper {
    background: #367ebd;
  }
  /* 圖片型字幕，預設隱藏 */
  .image-based-subtitles svg image{
    display: none;
  }
  /* 注意事項 */
  .my_netflix_subMessage_table_class{
    background-color: rgba(255,255,255,0.8);
  }
  .my_netflix_subMessage_table_class th{
    background-color: orange;
    font-weight: bold;
    text-align:center;
    padding:3px;
  }
  .my_netflix_subMessage_table_class th[field='項次']{
    width: 40px;
    border-bottom: 1px solid #00f;
  }
  .my_netflix_subMessage_table_class th[field='內容']{    
    border-bottom: 1px solid #00f;
  }
  .my_netflix_subMessage_table_class td[field='項次']{
    text-align: center;
    font-weight: bold;
  }
  .my_netflix_subMessage_table_class td{
    border-bottom: 0.5px solid #00f;
    text-align: left;
    padding: 2px;
  }
  /* 新版的右下按鈕 */
  button[reqc='my_control-audio-subtitle']:hover{        
    animation: shake 0.8s;
  }
  @keyframes shake{
     0%{
       transform: rotate(0deg);
     }
     25%{
       transform: rotate(10deg) ;
       box-shadow: 0 0 0 2px rgba(255,255,0,0.2);
     }       
     50%{
       transform: rotate(0deg);
       box-shadow: 0 0 0 4px rgba(255,255,0,0.7)
     }
     75%{
       transform: rotate(-10deg);
       box-shadow: 0 0 0 2px rgba(255,255,0,0.2)
     }
     100%{
       transform: rotate(0deg);
       box-shadow: 0 0 0 0px rgba(0,0,0,0.2)
     }
   }

    /* 主要字幕、次要字幕的表格 */
    .my_netflix_sub_inside_table td{
        padding: 3px;
    }
    .my_netflix_sub_inside_table tr:hover{
        border-bottom: 1px dashed #008;
        background-color: rgba(255,255,255,0.4);
    }
    .my_netflix_auto_title_span {
        font-weight: bold;        
    }
    .checkbox_class{
        width: 35px;
        height: 35px;
    }
</style>`);

    //註冊一個調整字幕位置的功能
    $("div[reqc='my_netflix_controller_div']").remove();
    $("body").prepend(" \
    <div reqc='my_netflix_controller_div' class='my_netflix_controller_class'> \
      <img reqc='x_close' src='"+ appClass.icon['x_close'] + "' width='28' height='28' style='cursor:pointer;position:absolute;right:2px;top:2px;' onerror=\"this.style.border='1px solid #f00';\" alt='關閉' title='關閉'> \
      <img src='"+ appClass.icon['3wa_logo'] + "' width='28' onerror=\"this.style.display='none';\">&nbsp;&nbsp;&nbsp;3waNetflix V" + appClass.appVersion + " \
      <span id='thetabs'> \
        <ul> \
            <li><a href='#subMain_div'>字幕選擇</a></li> \
            <li><a href='#sub1_div'>主要字幕</a></li> \
            <li><a href='#sub2_div'>次要字幕</a></li> \
            <li><a href='#subSetting_div'>自動功能</a></li> \
            <li><a href='#subMessage_div'>注意事項</a></li> \
        </ul> \
        <span id='subMain_div'> \
        </span> \
        <span id='sub1_div'> \
              <table style='width:100%;'> \
                <tr> \
                  <td valign='top' style='width:220px;text-align:left;'> \
                  <div class='my_netflix_controller_title_class'>主要字幕</center></div> \
                    <table style='width:100%;' class='my_netflix_sub_inside_table'> \
                      <tr> \
                        <td>字體大小   <span reqc='my_netflix_fontsize_span'>"+ window['my_netflix_fontsize'] + "</span></td> \
                        <td><input class='my_netflix_fontsize_input_range_class' reqc='my_netflix_fontsize_input' type='range' min='"+ _myNetFlixSettings['my_netflix_fontsize']['min'] + "' max='" + _myNetFlixSettings['my_netflix_fontsize']['max'] + "' step='" + _myNetFlixSettings['my_netflix_fontsize']['step'] + "' value='" + window['my_netflix_fontsize'] + "'></td> \
                      </tr> \
                      <tr> \
                        <td>字體粗細   <span reqc='my_netflix_font_bolder_span'>"+ _myNetFlixSettings['my_netflix_font_bolder']['sets'][window['my_netflix_font_bolder']] + "</span></td> \
                        <td><input class='my_netflix_font_bolder_input_range_class' reqc='my_netflix_font_bolder_input' type='range' min='"+ _myNetFlixSettings['my_netflix_font_bolder']['min'] + "' max='" + _myNetFlixSettings['my_netflix_font_bolder']['max'] + "' step='" + _myNetFlixSettings['my_netflix_font_bolder']['step'] + "' value='" + window['my_netflix_font_bolder'] + "'></td> \
                      </tr> \
                      <tr> \
                        <td>字體間距   <span reqc='my_netflix_fontspace_span'>"+ window['my_netflix_fontspace'] + "</span></td> \
                        <td><input class='my_netflix_fontspace_input_range_class' reqc='my_netflix_fontspace_input' type='range' min='"+ _myNetFlixSettings['my_netflix_fontspace']['min'] + "' max='" + _myNetFlixSettings['my_netflix_fontspace']['max'] + "' step='" + _myNetFlixSettings['my_netflix_fontspace']['step'] + "' value='" + window['my_netflix_fontspace'] + "'></td> \
                      </tr> \
                      <tr> \
                        <td>字框粗細   <span reqc='my_netflix_font_text_shadow_span'>"+ window['my_netflix_font_text_shadow'] + "</span></td> \
                        <td><input class='my_netflix_font_text_shadow_input_range_class' reqc='my_netflix_font_text_shadow_input' type='range' min='"+ _myNetFlixSettings['my_netflix_font_text_shadow']['min'] + "' max='" + _myNetFlixSettings['my_netflix_font_text_shadow']['max'] + "' step='" + _myNetFlixSettings['my_netflix_font_text_shadow']['step'] + "' value='" + window['my_netflix_font_text_shadow'] + "'></td> \
                      </tr> \
                      <tr> \
                        <td>字型</td> \
                        <td><select reqc='my_netflix_font_family_select'></select></td> \
                      </tr> \
                      <tr> \
                        <td>字體顏色</td> \
                        <td><input type='color' reqc='my_netflix_font_color_input' value='"+ window['my_netflix_font_color'] + "' style='width:100%;'></td> \
                      </tr> \
                      <tr> \
                        <td>邊框顏色</td> \
                        <td><input type='color' reqc='my_netflix_font_border_color_input' value='"+ window['my_netflix_font_border_color'] + "' style='width:100%;'></td> \
                      </tr> \
                      <tr> \
                        <td>字幕高度   <span reqc='my_netflix_y_position_span'>"+ window['my_netflix_y_position'] + "</span></td> \
                        <td><input class='my_netflix_y_position_input_range_class' reqc='my_netflix_y_position_input' type='range' min='"+ _myNetFlixSettings['my_netflix_y_position']['min'] + "' min='" + _myNetFlixSettings['my_netflix_y_position']['max'] + "' step='" + _myNetFlixSettings['my_netflix_y_position']['step'] + "' value='" + window['my_netflix_y_position'] + "'></div></td> \
                      </tr> \
                    </table> \
                  </td> \
              </tr> \
              </table> \
            </span> \
            <span id='sub2_div'> \
                <table style='width:100%;'> \
                    <tr> \
                      <td valign='top' style='text-align:left;'> \
                        <div class='my_netflix_controller_title_class'>第二字幕</center></div> \
                        <table style='width:100%;' class='my_netflix_sub_inside_table'> \
                            <tr> \
                                <td>字體大小   <span reqc='my_netflix_fontsize_span_2'>"+ window['my_netflix_fontsize_2'] + "</span></td> \
                                <td><input class='my_netflix_fontsize_input_range_class_2' reqc='my_netflix_fontsize_input_2' type='range' min='"+ _myNetFlixSettings['my_netflix_fontsize_2']['min'] + "' max='" + _myNetFlixSettings['my_netflix_fontsize_2']['max'] + "' step='" + _myNetFlixSettings['my_netflix_fontsize_2']['step'] + "' value='" + window['my_netflix_fontsize_2'] + "'></td> \
                            </tr> \
                            <tr> \
                                <td>字體粗細   <span reqc='my_netflix_font_bolder_span_2'>"+ _myNetFlixSettings['my_netflix_font_bolder_2']['sets'][window['my_netflix_font_bolder_2']] + "</span></td> \
                                <td><input class='my_netflix_font_bolder_input_range_class_2' reqc='my_netflix_font_bolder_input_2' type='range' min='"+ _myNetFlixSettings['my_netflix_font_bolder_2']['min'] + "' max='" + _myNetFlixSettings['my_netflix_font_bolder_2']['max'] + "' step='" + _myNetFlixSettings['my_netflix_font_bolder_2']['step'] + "' value='" + window['my_netflix_font_bolder_2'] + "'></td> \
                            </tr> \
                            <tr> \
                                <td>字體間距   <span reqc='my_netflix_fontspace_span_2'>"+ window['my_netflix_fontspace_2'] + "</span></td> \
                                <td><input class='my_netflix_fontspace_input_range_class_2' reqc='my_netflix_fontspace_input_2' type='range' min='"+ _myNetFlixSettings['my_netflix_fontspace_2']['min'] + "' max='" + _myNetFlixSettings['my_netflix_fontspace_2']['max'] + "' step='" + _myNetFlixSettings['my_netflix_fontspace_2']['step'] + "' value='" + window['my_netflix_fontspace_2'] + "'></td> \
                            </tr> \
                            <tr> \
                                <td>字框粗細   <span reqc='my_netflix_font_text_shadow_span_2'>"+ window['my_netflix_font_text_shadow_2'] + "</span></td> \
                                <td><input class='my_netflix_font_text_shadow_input_range_class_2' reqc='my_netflix_font_text_shadow_input_2' type='range' min='"+ _myNetFlixSettings['my_netflix_font_text_shadow_2']['min'] + "' max='" + _myNetFlixSettings['my_netflix_font_text_shadow_2']['max'] + "' step='" + _myNetFlixSettings['my_netflix_font_text_shadow_2']['step'] + "' value='" + window['my_netflix_font_text_shadow_2'] + "'></td> \
                            </tr> \
                            <tr> \
                                <td>字型</td> \
                                <td><select reqc='my_netflix_font_family_select_2'></select></td> \
                            </tr> \
                            <tr> \
                                <td>字體顏色</td> \
                                <td><input type='color' reqc='my_netflix_font_color_input_2' value='"+ window['my_netflix_font_color_2'] + "' style='width:100%;'></td> \
                            </tr> \
                            <tr> \
                                <td>邊框顏色</td> \
                                <td><input type='color' reqc='my_netflix_font_border_color_input_2' value='"+ window['my_netflix_font_border_color_2'] + "' style='width:100%;'></td> \
                            </tr> \
                            <tr> \
                                <td>字幕高度 <span reqc='my_netflix_y_position_span_2'> "+ window['my_netflix_y_position_2'] + "</span></td> \
                                <td><input class='my_netflix_y_position_input_range_class_2' reqc='my_netflix_y_position_input_2' type='range' min='"+ _myNetFlixSettings['my_netflix_y_position_2']['min'] + "' min='" + _myNetFlixSettings['my_netflix_y_position_2']['max'] + "' step='" + _myNetFlixSettings['my_netflix_y_position_2']['step'] + "' value='" + window['my_netflix_y_position_2'] + "'></div></td> \
                            </tr> \
                        </table> \
                        </td> \
                        </tr> \
                    </table> \
            </span> \
            <span id='subSetting_div'> \
                <table style='width:100%;' class='my_netflix_subMessage_table_class'> \
                    <thead> \
                        <th colspan='2'> \
                            自動功能 \
                        </th> \
                    </thead> \
                    <tbody> \
                        <tr> \
                            <td field='項次' style='text-align:center; width:50px;'> \
                                <input type='checkbox' reqc='my_netflix_auto_skip_recap' class='checkbox_class'> \
                            </td> \
                            <td field='內容' style='padding-left:3px;'> \
                                <span class='my_netflix_auto_title_span'>自動跳過前情提要</span><br>注：啟動後，影片若有跳過前情提要，會自動跳過一次</td> \
                        </tr> \
                        <tr> \
                            <td field='項次' style='text-align:center; width:50px;'> \
                                <input type='checkbox' reqc='my_netflix_auto_skip_intro' class='checkbox_class'> \
                            </td> \
                            <td field='內容' style='padding-left:3px;'> \
                                <span class='my_netflix_auto_title_span'>自動跳過片頭</span><br>注：啟動後，影片若有片頭，會自動跳過一次</td> \
                        </tr> \
                        <tr> \
                            <td field='項次' style='text-align:center; width:50px;'> \
                                <input type='checkbox' reqc='my_netflix_auto_next_movie' class='checkbox_class'> \
                            </td> \
                            <td field='內容' style='padding-left:3px;'> \
                                <span class='my_netflix_auto_title_span'>自動切換下集</span><br>注：啟動後，影片遇到下一集按鈕，會自動點擊</td> \
                        </tr> \
                        <tr> \
                            <td field='項次' style='text-align:center; width:50px;'> \
                                <input type='checkbox' reqc='my_netflix_auto_fix_english_first_letter_case' class='checkbox_class'> \
                            </td> \
                            <td field='內容' style='padding-left:3px;'> \
                                <span class='my_netflix_auto_title_span'>自動修正英文字幕大小寫</span><br>注：針對全大寫字幕改首字大寫，其餘小寫</td> \
                        </tr> \
                    </tbody> \
                </table> \
            </span> \
            <span id='subMessage_div'> \
                <table style='width:100%;' class='my_netflix_subMessage_table_class'> \
                    <thead> \
                        <tr> \
                            <th field='項次'>項次</th> \
                            <th field='內容'>內容</th> \
                        </tr> \
                    </thead> \
                    <tbody> \
                        <tr> \
                            <td field='項次'>1</td> \
                            <td field='內容'>(待修正)<br>(圖片型字幕)滑鼠進入下方控制區，包含進度條，雙字幕將無法正常使用，請往上移開</td> \
                        </tr> \
                        <tr> \
                            <td field='項次'>2</td> \
                            <td field='內容'>(待修正)<br>已知有些改 1080p 或是部分字幕是「圖片型字幕」出字會異常，之後再研究</td> \
                        </tr> \
                        <tr> \
                            <td field='項次'>3</td> \
                            <td field='內容'>(待修正)<br>進度條不太好點的解決方法，滑鼠先移到聲音，再往右移開，就可以使用進度條，暫時找不到解決方法</td> \
                        </tr> \
                     </tbody> \
                    </table> \
                    <table style='width:100%;' class='my_netflix_subMessage_table_class'> \
                        <tbody> \
                        <tr> \
                            <th colspan='2'> \
                                熱鍵說明 \
                            </th> \
                        </tr> \
                        <tr> \
                            <td field='項次'>Space 空白鍵</td> \
                            <td field='內容' style='padding-left:15px;'>播放／暫停</td> \
                        </tr> \
                        <tr> \
                            <td field='項次'>(O)pen</td> \
                            <td field='內容' style='padding-left:15px;'>選單開啟／選單關閉</td> \
                        </tr> \
                        <tr> \
                            <td field='項次'>(F)ullScreen</td> \
                            <td field='內容' style='padding-left:15px;'>全螢幕開／閉</td> \
                        </tr> \
                        <tr> \
                            <td field='項次'>←</td> \
                            <td field='內容' style='padding-left:15px;'>上10秒</td> \
                        </tr> \
                        <tr> \
                            <td field='項次'>→</td> \
                            <td field='內容' style='padding-left:15px;'>下十秒</td> \
                        </tr> \
                        <tr> \
                            <td field='項次'>(M)ute</td> \
                            <td field='內容' style='padding-left:15px;'>聲音開／關</td> \
                        </tr> \
                        <tr> \
                            <td field='項次'>(S)kip</td> \
                            <td field='內容' style='padding-left:15px;'>略過片頭、前情提要</td> \
                        </tr> \
                        <tr> \
                            <td field='項次'>(N)ext</td> \
                            <td field='內容' style='padding-left:15px;'>下一集</td> \
                        </tr> \
                    </tbody > \
                </table> \
            </span> \
         </span><!--thetabs--> \
    </div> \
    ");

    //設定使用者點到的值

    $("input[reqc='my_netflix_auto_skip_recap']").prop("checked", (window['my_netflix_auto_skip_recap'] == "false") ? false : true);
    $("input[reqc='my_netflix_auto_skip_intro']").prop("checked", (window['my_netflix_auto_skip_intro'] == "false") ? false : true);
    $("input[reqc='my_netflix_auto_next_movie']").prop("checked", (window['my_netflix_auto_next_movie'] == "false") ? false : true);
    $("input[reqc='my_netflix_auto_fix_english_first_letter_case']").prop("checked", (window['my_netflix_auto_fix_english_first_letter_case'] == "false") ? false : true);

    //按到 x_close 的效果
    $("div[reqc='my_netflix_controller_div'] img[reqc='x_close']").unbind("click").click(function () {
        //觸發離開即可
        //移用者會稍微移一下，改成馬上離開
        $("div[reqc='my_netflix_controller_div']").attr('my_hidenow', 'YES').trigger("mouseleave");

    });
    //緊緻一下畫面
    $("#thetabs > ul").css({
        'margin-bottom': '-8px'
    });

    //首次載入，搖一下
    setTimeout(function () {
        $("button[reqc='my_control-audio-subtitle']").css({
            'animation': 'shake 0.8s'
        });
        setTimeout(function () { //搖完了
            $("button[reqc='my_control-audio-subtitle']").css({
                'animation': ''
            });
        }, 1000);
    }, 1500);

    //變成 tabs
    appClass.method.mytabs($("#thetabs"), {
        head_li_focus_css: {
            'background-color': '#77ff77',
            'font-weight': 'bold'
        },
        head_li_css: {
            'background-color': '#eeeeee',
            'font-weight': 'normal'
        },
        head_a_css: {
            color: '#000'
        },
        content_css: {

        },
        show: "#sub1_div"
    });



    //set Default
    //字型注滿
    {
        var m = new Array();
        for (var i = 0, max_i = _myNetFlixSettings.my_netflix_font_family.sets.length; i < max_i; i++) {
            var d = "<option value='" + _myNetFlixSettings.my_netflix_font_family.sets[i] + "'>" + _myNetFlixSettings.my_netflix_font_family.sets[i] + "</option>";
            m.push(d);
        }
        $("select[reqc='my_netflix_font_family_select']").html(m.join(""));
        $("select[reqc='my_netflix_font_family_select']").val(window['my_netflix_font_family']);

        m = new Array();
        for (var i = 0, max_i = _myNetFlixSettings.my_netflix_font_family_2.sets.length; i < max_i; i++) {
            var d = "<option value='" + _myNetFlixSettings.my_netflix_font_family_2.sets[i] + "'>" + _myNetFlixSettings.my_netflix_font_family_2.sets[i] + "</option>";
            m.push(d);
        }
        $("select[reqc='my_netflix_font_family_select_2']").html(m.join(""));
        $("select[reqc='my_netflix_font_family_select_2']").val(window['my_netflix_font_family_2']);
    }


    //註冊一個 interval，如果網頁是 netflix.com/watch/  .my_netflix_controller_class 才有事件
    clearInterval(appClass.interval.watchIntervalUI);
    appClass.interval.watchIntervalUI = setInterval(function () {
        if (location.href.indexOf("netflix.com/watch/") == -1) {
            //2022-05-18 #22 修正在選影片頁時，控制項不能被點選
            //不是播放頁
            $(".my_netflix_controller_class").css({
                'pointer-events': 'none',
                'z-index': -1 //下去~_~
            });
            //fix one time
            appClass.method.fixOrinURL();

            //非播放頁，視同重選影片了，intro flag 重置
            // Issue: 86、使用者可自定自動跳過片頭
            appClass.flag.isSkipIntro = false;

            appClass.flag.isSkipRecap = false;
        }
        else {
            //appClass.method.getMovieID(); //取得影片 ID
            //console.log(appClass.movieID);
            //這就是播放頁了
            //是播放頁，且滑鼠移入

            //按到上一頁
            if ($("button[data-uia='control-nav-back']").attr('isDefinedfixOrinURL') != "YES") {
                $("button[data-uia='control-nav-back']").attr('isDefinedfixOrinURL', "YES");
                $("button[data-uia='control-nav-back']").bind("click", function () {
                    appClass.method.fixOrinURL();
                    if (document.fullscreenElement) {
                        //如果回到首頁，仍是全螢幕嗎...
                        //停止全螢幕
                        // Issue 60、全螢幕回上一頁，要停止全螢幕
                        document.exitFullscreen();
                    }
                })
            }
            if ($("a[data-uia='postplay-back-to-browse']").attr('isDefinedfixOrinURL') != "YES") {
                $("a[data-uia='postplay-back-to-browse']").attr('isDefinedfixOrinURL', "YES");
                $("a[data-uia='postplay-back-to-browse']").bind("click", function () {
                    appClass.method.fixOrinURL();
                    if (document.fullscreenElement) {
                        //如果回到首頁，仍是全螢幕嗎...
                        //停止全螢幕
                        // Issue 88、電影，在片尾時「返回瀏覽」，如果是全螢幕，離開全螢幕
                        document.exitFullscreen();
                    }
                })
            }

            //全螢幕
            if ($("button[reqc='my3wanetflix_fullscreen_btn']").length == 0) {
                $("button[data-uia='control-fullscreen-enter']").hide();
                $("button[data-uia='control-fullscreen-enter']").before("<button reqc='my3wanetflix_fullscreen_btn'>");
                $("button[reqc='my3wanetflix_fullscreen_btn']").addClass($("button[data-uia='control-fullscreen-enter']").attr('class'));
                //拷貝 svg 給自定的 fullscreen 使用
                $("button[data-uia='control-fullscreen-enter'] div").clone().appendTo($("button[reqc='my3wanetflix_fullscreen_btn']"));
                $("button[reqc='my3wanetflix_fullscreen_btn']").unbind("mousemove").mousemove(function () {
                    clearTimeout(appClass.interval.omkt8s_Timeout);
                });
                $("button[reqc='my3wanetflix_fullscreen_btn']").unbind("click").click(function () {
                    //按到全螢幕時
                    //參考: https://stackoverflow.com/questions/19053181/how-to-remove-focus-around-buttons-on-click
                    //Fix issue: 79、全螢幕按鈕應避免 Focus ，不然空白鍵會觸發
                    $(this)[0].blur();
                    var full_screen_element = document.fullscreenElement;
                    // If no element is in full-screen
                    if (full_screen_element !== null) {
                        //console.log('FullScreen mode is activated');
                        document.exitFullscreen();
                        //離開全螢幕後，就不用隱藏滑鼠了
                        clearTimeout(appClass.interval.fullScreenMouseNoMoveTimeout);
                    }
                    else {
                        //console.log('FullScreen mode is not activated');
                        var element = document.querySelector("body");
                        // make the element go to full-screen mode
                        element.requestFullscreen().then(function () {
                            // element has entered fullscreen mode successfully                            
                            // 進入全螢幕了
                            // Issue 54、全螢幕時，立刻隱藏下方控制區
                            setTimeout(function () {
                                //1000ms 後觸發，因為剛點完全螢幕，滑鼠會移開下方
                                $("body").css({
                                    'cursor': 'none'
                                });
                                $("div[data-uia='controls-standard']").css({ "opacity": 0.01 }); //下方工具
                            }, 1000);
                        }).catch(function (error) {
                            // element could not enter fullscreen mode
                        });
                    }
                    return false;
                });
            }


            //修正畫面按到下一集
            if ($("button[data-uia='episode-preview-button']").attr('isDefinedfixOrinURL') != "YES") {
                $("button[data-uia='episode-preview-button']").attr('isDefinedfixOrinURL', "YES");
                $("button[data-uia='episode-preview-button']").bind("click", function () {
                    appClass.method.fixOrinURL();
                })
                $("button[data-uia='episode-preview-button']").bind("mousemove", function () {
                    clearTimeout(appClass.interval.omkt8s_Timeout);
                });
            }
            //直接按下一集的三角按鈕
            if ($("button[data-uia='control-next']").attr('isDefinedfixOrinURL') != "YES") {
                $("button[data-uia='control-next']").attr('isDefinedfixOrinURL', "YES");
                $("button[data-uia='control-next']").bind("click", function () {
                    appClass.method.fixOrinURL();
                })
                $("button[data-uia='control-next']").bind("mousemove", function () {
                    clearTimeout(appClass.interval.omkt8s_Timeout);
                });
            }

            //選集鈕
            if ($("button[data-uia='control-episodes']").attr('isDefinedfixOrinURL') != "YES") {
                $("button[data-uia='control-episodes']").attr('isDefinedfixOrinURL', "YES");
                $("button[data-uia='control-episodes']").bind("mousemove", function () {
                    clearTimeout(appClass.interval.omkt8s_Timeout);
                });
            }
            //選集
            if ($("div[data-uia='episode-pane-item-preview-open']").attr('isDefinedfixOrinURL') != "YES") {
                $("div[data-uia='episode-pane-item-preview-open']").attr('isDefinedfixOrinURL', "YES");
                $("div[data-uia='episode-pane-item-preview-open']").bind("click", function () {
                    appClass.method.fixOrinURL();
                })
                $("div[data-uia='episode-pane-item-preview-open']").bind("mousemove", function () {
                    clearTimeout(appClass.interval.omkt8s_Timeout);
                });
            }

            //播放鈕
            if ($("button[data-uia='control-play-pause-play']").attr('isDefinedfixOrinURL') != "YES") {
                $("button[data-uia='control-play-pause-play']").attr('isDefinedfixOrinURL', "YES");
                $("button[data-uia='control-play-pause-play']").unbind("click").click(function () {
                    if ($("video")[0].paused) {
                        $("video")[0].play();
                    } else {
                        $("video")[0].pause();
                    }
                })
                $("button[data-uia='control-play-pause-play']").bind("mousemove", function () {
                    clearTimeout(appClass.interval.omkt8s_Timeout);
                });
            }

            //最後字幕的下一集
            if ($("button[data-uia='next-episode-seamless-button']").attr('isDefinedfixOrinURL') != "YES") {
                $("button[data-uia='next-episode-seamless-button']").attr('isDefinedfixOrinURL', "YES");
                $("button[data-uia='next-episode-seamless-button']").bind("click", function () {
                    appClass.method.fixOrinURL();
                })
                $("button[data-uia='next-episode-seamless-button']").bind("mousemove", function () {
                    clearTimeout(appClass.interval.omkt8s_Timeout);
                });
            }


            if ($("div[data-uia='episode-preview']").length != 0 ||
                $("div[data-uia='episode-pane-back']").length != 0 ||
                $("div[data-uia='playback-speed']").length != 0) {
                //使用者正在「準備切換下一集」或「選集數」 或 「調影片速度」
                //對小螢幕來說，會檔到畫面，就不展開功能
                $(".my_netflix_controller_class").css({
                    'pointer-events': 'none',
                    'z-index': -100
                });
                return;
            }

            //如果需要跳過 intro 且此片還未跳過
            //console.log(window['my_netflix_auto_skip_intro'] + "," + appClass.flag.isSkipIntro);
            // Issue 86、使用者可自定自動跳過片頭 在此執行
            if (window['my_netflix_auto_skip_intro'] == 'true' && appClass.flag.isSkipIntro == false) {
                if ($("button[data-uia='player-skip-intro']").length > 0) {
                    appClass.flag.isSkipIntro = true;
                    appClass.method.smallComment("自動跳過片頭...", 3500, false, { 'font-size': '32px' });
                    setTimeout(function () {
                        //Issue 92、自動跳過片頭，才不會發生出現跳過片頭，使用者點了進度條或切頁，數量變 0 的問題
                        if ($("button[data-uia='player-skip-intro']").length > 0) {
                            $("button[data-uia='player-skip-intro']")[0].click(); //執行跳過片頭                        
                        }
                    }, 2000);
                }
            }

            // Issue 96、可以自動「略過前情提要」，如鬼滅之刃-刀匠村篇 11集
            if (window['my_netflix_auto_skip_recap'] == 'true' && appClass.flag.isSkipRecap == false) {
                if ($("button[data-uia='player-skip-recap']").length > 0) {
                    appClass.flag.isSkipRecap = true;
                    appClass.method.smallComment("自動跳過前情提要...", 3500, false, { 'font-size': '32px' });
                    setTimeout(function () {
                        //Issue 92、自動跳過片頭，才不會發生出現跳過片頭，使用者點了進度條或切頁，數量變 0 的問題
                        if ($("button[data-uia='player-skip-recap']").length > 0) {
                            $("button[data-uia='player-skip-recap']")[0].click(); //執行跳過前情提要
                        }
                    }, 2000);
                }
            }

            // Issue 87、使用者可自定自動跳至下一集
            if (window['my_netflix_auto_next_movie'] == 'true') {
                if ($("button[data-uia='next-episode-seamless-button']").length > 0) {
                    appClass.method.smallComment("自動跳下一集...", 3500, false, { 'font-size': '32px' });
                    setTimeout(function () {
                        if ($("button[data-uia='next-episode-seamless-button']").length > 0) {
                            $("button[data-uia='next-episode-seamless-button']").trigger("click"); //執行跳下一集                      
                        }
                    }, 2000);
                }
            }

            $(".my_netflix_controller_class").css({
                'pointer-events': 'auto',
                'z-index': 9999999999 //上來~~~
            });
        }
    }, 600);
    $(".my_netflix_controller_class").unbind("mousemovemousemove").bind("mousemovemousemove", function (e) {
        if (location.href.indexOf("netflix.com/watch/") == -1) {
            //不是播放頁，離開
            return;
        }
        // Issue 30. UI 控制區，只有滑鼠進入的高度 70% 切入才有效，不然螢幕太小時，調時間軸也會一直檔到
        // Example: https://3wa.tw/demo/htm/test_javascript.php?id=157
        // Issue 48、UI 控制區，只有滑鼠進入的高度 36% 切入才有效，不然螢幕太小時，調時間軸也會一直檔到
        //console.log(e);
        //var mouseInDivHeightPercent = (e.originalEvent.layerY / $(".my_netflix_controller_class").height() * 100.0);
        //console.log(mouseInDivHeightPercent);
        //if (mouseInDivHeightPercent >= 36) {
        //    return;
        //}

        $(".my_netflix_controller_class").stop().css({
            'opacity': 1,
            'display': 'inline',
            'pointer-events': 'auto'
        });
        //$(".my_netflix_controller_class").fadeIn("fast"); //使用 jquery 居然不能用 fadeIn ? 還是沒用 jquery-ui 忘了
        clearTimeout(appClass.interval.waitControlUIHideShowInterval);
    });

    // 改成 mouseleave 比較正常，mouseout 會因為進入內層物件也離開
    // 同 Issue 59、滑鼠移出設定 UI 視窗，等 1 秒再隱藏，重新滑入就停止計時，不然太容易不見
    $(".my_netflix_controller_class").unbind("mousemove").bind("mousemove", function () {
        if ($(this).css('opacity') > 0.1) {
            //這樣比較不會一划開馬上就不見
            $(this).stop().trigger('mousemovemousemove');
        }
    });
    // issue 47、調整畫面很容易滑鼠移動就消失，將 mouseout 改成 mouseleave 後較為正常
    $(".my_netflix_controller_class").unbind("mouseleave").bind("mouseleave", function () {
        //3waNetflix 控制框
        //滑鼠移出，等一下，再慢慢消失
        // Issue 59、滑鼠移出設定 UI 視窗，等 1 秒再隱藏，重新滑入就停止計時，不然太容易不見
        clearTimeout(appClass.interval.waitControlUIHideShowInterval);
        var t = 1000;
        var t_animate = 500;
        if ($(this).attr('my_hidenow') == "YES") {
            t = 0;
            t_animate = 100;
            $(this).attr('my_hidenow', '');
        }
        appClass.interval.waitControlUIHideShowInterval = setTimeout(function () {
            $(".my_netflix_controller_class").stop().animate({
                'opacity': 0,
                'pointer-events': 'auto'
            }, t_animate, function () {
                //after fadeOut
                //From : https://stackoverflow.com/questions/23560395/how-to-do-something-in-jquery-after-animation-finish
                $(".my_netflix_controller_class").css({
                    'z-index': -100,
                    'display': 'none'
                });
            });
        }, t);

    });

    $(".my_netflix_controller_class select,.my_netflix_controller_class div").unbind("mousemove").bind("mousemove", function (e) {
        //控制項裡的東西，需要 bubble 穿透
        e.preventDefault();
    });

    //字型 主要
    $("select[reqc='my_netflix_font_family_select']").unbind("change").bind("change", function () {
        window['my_netflix_font_family'] = $("select[reqc='my_netflix_font_family_select']").val();
        appClass.method.setMemory('my_netflix_font_family', window['my_netflix_font_family']);

        //重新註冊字大小
        appClass.method.registerFontSize();
    });
    //字型 次要
    $("select[reqc='my_netflix_font_family_select_2']").unbind("change").bind("change", function () {
        window['my_netflix_font_family_2'] = $("select[reqc='my_netflix_font_family_select_2']").val();
        appClass.method.setMemory('my_netflix_font_family_2', window['my_netflix_font_family_2']);

        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    //按到自動-跳過片頭  
    $("input[reqc='my_netflix_auto_skip_intro']").unbind("click").bind("click", function () {
        window['my_netflix_auto_skip_intro'] = $("input[reqc='my_netflix_auto_skip_intro']").prop("checked").toString();
        //console.log(window['my_netflix_auto_skip_intro']);
        appClass.method.setMemory('my_netflix_auto_skip_intro', window['my_netflix_auto_skip_intro']);
        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    //按到自動-跳過前情提要  
    $("input[reqc='my_netflix_auto_skip_recap']").unbind("click").bind("click", function () {
        window['my_netflix_auto_skip_recap'] = $("input[reqc='my_netflix_auto_skip_recap']").prop("checked").toString();
        //console.log(window['my_netflix_auto_skip_recap']);
        appClass.method.setMemory('my_netflix_auto_skip_recap', window['my_netflix_auto_skip_recap']);
        //重新註冊字大小
        appClass.method.registerFontSize();
    });
    //按到自動-跳下一集
    $("input[reqc='my_netflix_auto_next_movie']").unbind("click").bind("click", function () {
        window['my_netflix_auto_next_movie'] = $("input[reqc='my_netflix_auto_next_movie']").prop("checked").toString();
        //console.log(window['my_netflix_auto_next_movie']);
        appClass.method.setMemory('my_netflix_auto_next_movie', window['my_netflix_auto_next_movie']);
        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    //按到自動修正英文首字大寫，其餘小寫
    $("input[reqc='my_netflix_auto_fix_english_first_letter_case']").unbind("click").bind("click", function () {
        window['my_netflix_auto_fix_english_first_letter_case'] = $("input[reqc='my_netflix_auto_fix_english_first_letter_case']").prop("checked").toString();
        //console.log(window['my_netflix_auto_fix_english_first_letter_case']);
        appClass.method.setMemory('my_netflix_auto_fix_english_first_letter_case', window['my_netflix_auto_fix_english_first_letter_case']);
        //重新註冊字大小
        appClass.method.registerFontSize();
    });


    //主要 字體大小
    $("input[reqc='my_netflix_fontsize_input']").unbind("input").bind("input", function () {


        window['my_netflix_fontsize'] = parseFloat($("input[reqc='my_netflix_fontsize_input']").val());
        appClass.method.setMemory('my_netflix_fontsize', window['my_netflix_fontsize']);
        $("span[reqc='my_netflix_fontsize_span']").text(window['my_netflix_fontsize']);

        //重新註冊字大小
        appClass.method.registerFontSize();

    });




    //次要 字體大小
    $("input[reqc='my_netflix_fontsize_input_2']").unbind("input").bind("input", function () {
        window['my_netflix_fontsize_2'] = parseFloat($("input[reqc='my_netflix_fontsize_input_2']").val());
        appClass.method.setMemory('my_netflix_fontsize_2', window['my_netflix_fontsize_2']);
        $("span[reqc='my_netflix_fontsize_span_2']").text(window['my_netflix_fontsize_2']);

        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    // 主要 字體顏色
    $("input[reqc='my_netflix_font_color_input']").unbind("input").bind("input", function () {
        window['my_netflix_font_color'] = $("input[reqc='my_netflix_font_color_input']").val();
        appClass.method.setMemory('my_netflix_font_color', window['my_netflix_font_color']);

        if (appClass.method.isImageFont()) {
            appClass.method.smallComment("1080p 「圖片型字幕」無法調整【字體顏色】...", 2500, false, { 'font-size': '32px' });
            return;
        }
        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    // 次要 字體顏色
    $("input[reqc='my_netflix_font_color_input_2']").unbind("input").bind("input", function () {
        window['my_netflix_font_color_2'] = $("input[reqc='my_netflix_font_color_input_2']").val();
        appClass.method.setMemory('my_netflix_font_color_2', window['my_netflix_font_color_2']);

        if (appClass.method.isImageFont()) {
            appClass.method.smallComment("1080p 「圖片型字幕」無法調整【字體顏色】...", 2500, false, { 'font-size': '32px' });
            return;
        }
        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    // 主要 字框顏色
    $("input[reqc='my_netflix_font_border_color_input']").unbind("input").bind("input", function () {
        window['my_netflix_font_border_color'] = $("input[reqc='my_netflix_font_border_color_input']").val();
        appClass.method.setMemory('my_netflix_font_border_color', window['my_netflix_font_border_color']);

        if (appClass.method.isImageFont()) {
            appClass.method.smallComment("1080p 「圖片型字幕」無法調整【字框顏色】...", 2500, false, { 'font-size': '32px' });
            return;
        }
        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    // 次要 字框顏色
    $("input[reqc='my_netflix_font_border_color_input_2']").unbind("input").bind("input", function () {
        window['my_netflix_font_border_color_2'] = $("input[reqc='my_netflix_font_border_color_input_2']").val();
        appClass.method.setMemory('my_netflix_font_border_color_2', window['my_netflix_font_border_color_2']);

        if (appClass.method.isImageFont()) {
            appClass.method.smallComment("1080p 「圖片型字幕」無法調整【字框顏色】...", 2500, false, { 'font-size': '32px' });
            return;
        }
        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    // 主要 字體粗細
    $("input[reqc='my_netflix_font_bolder_input']").unbind("input").bind("input", function () {

        window['my_netflix_font_bolder'] = parseFloat($("input[reqc='my_netflix_font_bolder_input']").val());
        appClass.method.setMemory('my_netflix_font_bolder', window['my_netflix_font_bolder']);
        var v = _myNetFlixSettings['my_netflix_font_bolder']['sets'][window['my_netflix_font_bolder']];
        $("span[reqc='my_netflix_font_bolder_span']").text(v);

        if (appClass.method.isImageFont()) {
            appClass.method.smallComment("1080p 「圖片型字幕」無法調整【字體粗細】...", 2500, false, { 'font-size': '32px' });
            return;
        }
        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    // 次要 字體粗細
    $("input[reqc='my_netflix_font_bolder_input_2']").unbind("input").bind("input", function () {

        window['my_netflix_font_bolder_2'] = parseFloat($("input[reqc='my_netflix_font_bolder_input_2']").val());
        appClass.method.setMemory('my_netflix_font_bolder_2', window['my_netflix_font_bolder_2']);
        var v = _myNetFlixSettings['my_netflix_font_bolder_2']['sets'][window['my_netflix_font_bolder_2']];
        $("span[reqc='my_netflix_font_bolder_span_2']").text(v);

        if (appClass.method.isImageFont()) {
            appClass.method.smallComment("1080p 「圖片型字幕」無法調整【字體粗細】...", 2500, false, { 'font-size': '32px' });
            return;
        }
        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    // 主要 字體間距
    $("input[reqc='my_netflix_fontspace_input']").unbind("input").bind("input", function () {
        window['my_netflix_fontspace'] = parseFloat($("input[reqc='my_netflix_fontspace_input']").val());
        appClass.method.setMemory('my_netflix_fontspace', window['my_netflix_fontspace']);
        $("span[reqc='my_netflix_fontspace_span']").text(window['my_netflix_fontspace']);

        appClass.method.registerFontSize();


        if (appClass.method.isImageFont()) {
            appClass.method.smallComment("1080p 「圖片型字幕」無法調整【字體間距】...", 2500, false, { 'font-size': '32px' });
            return;
        }
        //重新註冊字大小
    });

    // 次要 字體間距
    $("input[reqc='my_netflix_fontspace_input_2']").unbind("input").bind("input", function () {
        window['my_netflix_fontspace_2'] = parseFloat($("input[reqc='my_netflix_fontspace_input_2']").val());
        appClass.method.setMemory('my_netflix_fontspace_2', window['my_netflix_fontspace_2']);
        $("span[reqc='my_netflix_fontspace_span_2']").text(window['my_netflix_fontspace_2']);

        if (appClass.method.isImageFont()) {
            appClass.method.smallComment("1080p 「圖片型字幕」無法調整【字體間距】...", 2500, false, { 'font-size': '32px' });
            return;
        }
        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    // 主要 字體 Y 軸位置
    $("input[reqc='my_netflix_y_position_input']").unbind("input").bind("input", function () {
        window['my_netflix_y_position'] = parseFloat($("input[reqc='my_netflix_y_position_input']").val());
        appClass.method.setMemory('my_netflix_y_position', window['my_netflix_y_position']);
        $("span[reqc='my_netflix_y_position_span']").text(window['my_netflix_y_position']);

        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    // 次要 字體 Y 軸位置
    $("input[reqc='my_netflix_y_position_input_2']").unbind("input").bind("input", function () {
        window['my_netflix_y_position_2'] = parseFloat($("input[reqc='my_netflix_y_position_input_2']").val());
        appClass.method.setMemory('my_netflix_y_position_2', window['my_netflix_y_position_2']);
        $("span[reqc='my_netflix_y_position_span_2']").text(window['my_netflix_y_position_2']);

        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    // 主要 字體邊框
    $("input[reqc='my_netflix_font_text_shadow_input']").unbind("input").bind("input", function () {
        window['my_netflix_font_text_shadow'] = parseFloat($("input[reqc='my_netflix_font_text_shadow_input']").val());
        appClass.method.setMemory('my_netflix_font_text_shadow', window['my_netflix_font_text_shadow']);
        $("span[reqc='my_netflix_font_text_shadow_span']").text(window['my_netflix_font_text_shadow']);

        if (appClass.method.isImageFont()) {
            appClass.method.smallComment("1080p 「圖片型字幕」無法調整【字體邊框】...", 2500, false, { 'font-size': '32px' });
            return;
        }
        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    // 次要 字體邊框
    $("input[reqc='my_netflix_font_text_shadow_input_2']").unbind("input").bind("input", function () {
        window['my_netflix_font_text_shadow_2'] = parseFloat($("input[reqc='my_netflix_font_text_shadow_input_2']").val());
        appClass.method.setMemory('my_netflix_font_text_shadow_2', window['my_netflix_font_text_shadow_2']);
        $("span[reqc='my_netflix_font_text_shadow_span_2']").text(window['my_netflix_font_text_shadow_2']);

        if (appClass.method.isImageFont()) {
            appClass.method.smallComment("1080p 「圖片型字幕」無法調整【字體邊框】...", 2500, false, { 'font-size': '32px' });
            return;
        }
        //重新註冊字大小
        appClass.method.registerFontSize();
    });

    clearInterval(appClass.interval.subtitleInterval);
    appClass.interval.subtitleInterval = setInterval(function () {
        if ($("video").length != 0 && $("div[reqc='my3waSubDiv']").length == 0) {
            //3wanetflix 的字幕要插在 video 裡，這樣全螢幕才有作用
            //2022-09-22 補充，改成 jquery 3.6.0 發現需要插在上一層 div 裡才行
            //可能 netflix 又改了~_~
            //(Issue 31)
            //這層的 div id="影片id"，有機會再用
            $("video").closest("div").eq(0).append("<div reqc='my3waSubDiv' class='my3waSubDiv_class'></div>");
            //加入羽山牌時間軸~_~
            $("div[data-uia='player']").closest("div").append(`
                <div reqc='my3waTimeLineDiv'><div reqc="my3waTimeLine-custom-handle" class="ui-slider-handle"></div></div>                
            `);

            // 如果是在原本的時間軸，也不進行翻譯
            $(window).on("mousemove", function (e) {
                //如果低於畫面的20% 就不翻譯??，因為是在操作 bar...
                //appClass.flag.timeLineSliding = true;
                clearTimeout(appClass.interval.mouseMoveTimeLineTimeout);

                if (appClass.flag.isPlayTimeLine == true) {
                    clearTimeout(window['controlUICloseTimeout']);
                    return;
                }

                appClass.interval.mouseMoveTimeLineTimeout = setTimeout(function () {
                    appClass.flag.timeLineSliding = false;
                }, 2000);
                $("div[data-uia='controls-standard']").css({ "opacity": 1 }); //下方工具
                $("button[data-uia='control-flag']").show(); //問題回報
                $("button[data-uia='control-nav-back']").show(); //回上頁
                //藏所有操作視窗
                clearTimeout(window['controlUICloseTimeout']);
                window['controlUICloseTimeout'] = setTimeout(function () {
                    //if (appClass.debug_mode == false) {
                    //    $("div[data-uia='controls-standard']").css({ "opacity": 0.01 }); //下方工具
                    //}
                    $("button[data-uia='control-flag']").hide(); //問題回報
                    $("button[data-uia='control-nav-back']").hide(); //回上頁
                    //改成 6000，修正 issue 44、如果使用者在調整時間軸，延長消失時間(6秒)
                }, 6000);
            });

            $("div[data-uia='timeline-knob']").on("mouseover", function (e) {
                clearTimeout(appClass.interval.mouseMoveTimeLineTimeout);
                appClass.flag.timeLineSliding = true;
                appClass.flag.isPlayTimeLine = true;
                clearTimeout(window['isPlayTimeLineTimeout']);
                window['isPlayTimeLineTimeout'] = setTimeout(function () {
                    appClass.flag.isPlayTimeLine = false;
                }, 2000);
            });

            //設定時間軸外面 div 樣式            
            $("div[reqc='my3waTimeLineDiv']").css({
                'position': 'absolute',
                'bottom': '15%',
                'z-index': -10, //new Date().getTime(), //比字幕高就好                
                'width': ($("video").width() * 90 / 100) + 'px',
                'height': '5px',
                'padding': '0px',
                'left': ($(window).width() * 5 / 100) + 'px',
                'pointer-events': 'auto',
                'display': 'none'
            });
            // 時間軸 pin 樣式
            $("div[reqc='my3waTimeLine-custom-handle']").css({
                'width': '1em',
                'height': '2.5em',
                'top': '50%',
                'margin-top': '-1.4em',
                'text-align': 'center',
                'line-height': '2.5em'
            });
            //註冊 window resize 事件
            $(window).bind('resize', function () {
                $("div[reqc='my3waTimeLineDiv']").css({
                    'width': ($("video").width() * 90 / 100) + 'px',
                    'left': ($(window).width() * 5 / 100) + 'px'
                });
            });
            /*$("div[reqc='my3waTimeLineDiv']").unbind("mouseover").bind("mouseover", function () {
                appClass.flag.timeLineSliding = true;
            });
            $("div[reqc='my3waTimeLineDiv']").slider({
                range: "min",
                value: $("video")[0].currentTime,
                min: 1,
                max: $("video")[0].duration,
                step: 0.1,
                start(event, ui) {
                    appClass.flag.timeLineSliding = true;
                },
                stop(event, ui) {
                    setTimeout(function () {
                        appClass.flag.timeLineSliding = false;
                    }, 3000);
                    //觸發原本的 video
                    //$("video")[0].current
                    //<div aria-label="進度列" aria-valuemax="1412744" aria-valuemin="0" aria-valuenow="693862" aria-valuetext="693/1412" data-uia="timeline-knob" tabindex="0" class="ltr-1gidbvb" style="left: calc(951.839px - 0.75rem);"></div>
                    console.log("move to : " + parseInt(ui.value * 1000));
                    $("div[data-uia='timeline-knob']").attr('aria-valuenow', parseInt(ui.value * 1000));
                    $("div[data-uia='timeline-knob']").trigger("click");
                }
            });
            */

        }
        //如果「字幕選擇」裡面是空的，就備份原本的字幕單 !?
        var movieID = appClass.method.getMovieID();
        //console.log(movieID);
        if (movieID == null) return;

        if ($("#subMain_div").attr('movieID') != movieID) {
            appClass.flag.mainSubHasData = false;
            //重選影片了，字幕重生
            appClass.flag.sub1 = null;
            appClass.flag.sub2 = null;

            //重選影片了，intro flag 重置
            appClass.flag.isSkipIntro = false;

            //前情提要重置
            appClass.flag.isSkipRecap = false;

            //使用最後紀錄到的字幕
            appClass.flag.sub1 = window['my_netflix_sub1'];
            appClass.flag.sub2 = (window['my_netflix_sub1'] == "關閉") ? null : window['my_netflix_sub1'];
        }
        if (appClass.flag.mainSubHasData == false) {
            $("#subMain_div").empty();
            if ($("div[data-uia='selector-audio-subtitle']").length != 0) {
                $("#subMain_div").attr('movieID', movieID);
                appClass.flag.mainSubHasData = true;
                $("div[data-uia='selector-audio-subtitle']").attr('reqc', '原本的字幕選單');
                $("div[data-uia='selector-audio-subtitle']").closest("div").closest("div").clone().appendTo($("#subMain_div"));

                //備份字幕勾勾的 svg
                //這裡不適合用 clone ，會copy到事件
                //Issue 72、音訊切換，造成主字幕勾勾跑版
                appClass.doms['勾勾svg'] = $("div[data-uia='selector-audio-subtitle'][reqc='原本的字幕選單'] li svg")[0].outerHTML;//.clone(true);
                appClass.doms['亮字效果'] = $("div[data-uia='selector-audio-subtitle'][reqc='原本的字幕選單'] li svg").closest("div").find("div").attr('class');

                //取一個暗字效果來用
                for (var i = 0, max_i = $("div[data-uia='selector-audio-subtitle'][reqc='原本的字幕選單'] li").length; i < max_i; i++) {
                    if ($("div[data-uia='selector-audio-subtitle'][reqc='原本的字幕選單'] li").eq(i).find("svg").length == 0) {
                        appClass.doms['暗字效果'] = $("div[data-uia='selector-audio-subtitle'][reqc='原本的字幕選單'] li").eq(i).find("div").find("div").attr('class');
                        break;
                    }
                }
                //console.log(appClass.doms);

                $("#subMain_div").find("div[data-uia='selector-audio-subtitle']").attr('reqc', '我的字幕選單');
                $("#subMain_div").find("div[reqc='我的字幕選單']").css({
                    'position': 'static',
                    'width': '100%'
                });
                $("#subMain_div").find("div[reqc='我的字幕選單'] *").css({
                    'padding-left': '2px', //縮小間距
                    'padding-top': '2px', //縮小間距
                    'padding-right': '2px', //縮小間距
                    'padding-bottom': '2px', //縮小間距
                    'margin': '0px'
                });

                //音訊的
                $("#subMain_div").find("div[reqc='我的字幕選單']").find(">div").eq(0).attr('reqc', '音訊')
                //然後將第二個 div h3變成「主要字幕」
                $("#subMain_div").find("div[reqc='我的字幕選單']").find(">div").eq(1).find("h3").text('主要字幕');
                //再備份一個第二 div 變成「次要字幕」
                $("#subMain_div").find("div[reqc='我的字幕選單']").find(">div").eq(1).attr('reqc', '主要字幕').clone().appendTo($("#subMain_div div[reqc='我的字幕選單']"));
                $("#subMain_div").find("div[reqc='我的字幕選單']").find(">div").eq(2).attr('reqc', '次要字幕').find("h3").text('次要字幕');
                //第二字幕需要移除所有 SVG
                $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] svg").remove();

                //只有勾勾要明顯些
                $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='音訊'] svg").next("div").css({
                    'margin-left': '45px'
                });
                $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕'] svg").next("div").css({
                    'margin-left': '45px'
                });

                //如果 appClass.flag.sub1 是 null 代表還沒設定字幕
                if (appClass.flag.sub1 == null) {
                    //subtitle-item-selected-英文 (CC)
                    appClass.flag.sub1 = $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕'] svg").closest("div").text();
                    //主要字幕的第一個，關閉
                    appClass.flag.sub2 = $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕'] li").eq(0).text();
                }

                //次要字幕移除所有樣式
                var orin_class = $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] li").eq(0).find("div").find("div").attr('class');
                for (var i = 0, max_i = $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] li").length; i < max_i; i++) {
                    $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] li").eq(i).find("div").find("div").attr('class', orin_class);
                    //如果 sub2 不是 null 代表有選字幕了
                    if (appClass.flag.sub2 != null) {
                        if ($("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] li").eq(i).text() == appClass.flag.sub2) {
                            //此時要設定成按到的樣式
                            var set_class = $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕'] svg").closest("div").find("div").attr('class');
                            //且加入 svg
                            $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕'] svg").clone().prependTo($("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] li").eq(i).find("div"));
                            $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] li").eq(i).find("div").find("div").attr('class', set_class);
                            //只有勾勾要明顯些
                            $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] div div").css({
                                'margin': '0px'
                            });
                            $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] svg").closest("div").find("div").css({
                                'margin-left': '45px'
                            });
                            //亮字效果
                            $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] svg").closest("div").find("div").find("div").attr('class', set_class);
                        }

                    }
                }

                //限制高度
                $("#subMain_div").find("div[reqc='我的字幕選單'] >div").css({
                    'max-height': '450px',
                    'min-height': '100px',
                    'overflow': 'auto'
                });



                //註冊我的字幕選單裡的聲音被按到，同步原生的選單被按到
                $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='音訊'] li[data-uia^='audio-item']").unbind("click").click(function (e) {
                    //只要按到，就先移除目前所有字幕
                    //清空圖片型字幕
                    $(".image-based-subtitles svg image").remove();
                    $(".player-timedtext-text-container").remove();
                    $("div[reqc='my_netflix_imageSubsB64']").empty();
                    $("div[reqc='my3waSubDiv'] p").remove();
                    window['lastWord_a'] = "";
                    window['lastWord_b'] = "";
                    window['lastImage_a'] = new Array();
                    window['lastImage_b'] = new Array();

                    var data_uiaName = $(this).attr('data-uia');
                    //這裡是指原來的字幕音訊
                    //console.log(data_uiaName);
                    //這裡不能有 -selected
                    //Fix Issue: 75、當切換音訊，再切回原來的音訊，沒有正常執行
                    $("div[reqc='原本的字幕選單'] li[data-uia='" + data_uiaName.replace("-selected", "") + "']").trigger("click");

                    //移除這裡範圍所有的 svg
                    $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='音訊']").find("li svg").remove();
                    //移除所有亮字效果

                    $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='音訊']").find("li div").attr('class', appClass.doms['暗字效果']);

                    //目前點到的，變成有 svg 跟亮字效果
                    $(this).append(appClass.doms['勾勾svg']);
                    $(this).find("div").attr('class', appClass.doms['亮字效果']);

                    //其他沒勾勾的，變不明顯
                    $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='音訊']").find("li").find("div").css({
                        'margin-left': '0px'
                    });
                    //只有勾勾要明顯些
                    $(this).find("div").css({
                        'margin-left': '15px'
                    });


                    //然後重建字幕選單
                    //$("#subMain_div").empty();
                    //appClass.flag.mainSubHasData = false;

                    //避免穿透
                    //Issue. 94. 修正點音訊沒有變化的問題                    
                    $("button[data-uia='control-audio-subtitle']").trigger("click");
                    e.stopPropagation();
                });

                //註冊主要字幕被點到
                $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕'] li").unbind("click").click(function (e) {
                    var data_uiaName = $(this).attr('data-uia');
                    $("div[reqc='原本的字幕選單'] li[data-uia='" + data_uiaName + "']").trigger("click");
                    //然後重建字幕選單
                    //$("#subMain_div").empty();
                    //appClass.flag.mainSubHasData = false;
                    // Issue. 93、修正下方進度條顯示問題
                    appClass.flag.isSub1Image = false;
                    $(".image-based-subtitles svg image").remove();
                    $(".player-timedtext-text-container").remove();
                    $("div[reqc='my_netflix_imageSubsB64']").empty();

                    appClass.flag.sub1 = $(this).text();

                    //移除這裡範圍所有的 svg
                    $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕']").find("li svg").remove();
                    //移除所有亮字效果
                    $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕']").find("li div").attr('class', appClass.doms['暗字效果']);
                    //目前點到的，變成有 svg 跟亮字效果
                    $(this).append(appClass.doms['勾勾svg']);
                    $(this).find("div").attr('class', appClass.doms['亮字效果']);

                    //其他沒勾勾的，變不明顯
                    $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕']").find("li").find("div").css({
                        'margin-left': '0px'
                    });
                    //只有勾勾要明顯些
                    $(this).find("div").css({
                        'margin-left': '15px'
                    });

                    //存 memory sub1
                    appClass.method.setMemory('my_netflix_sub1', appClass.flag.sub1);

                    //避免穿透
                    e.stopPropagation();

                });

                //觸發一次
                $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕'] li div:contains('" + window['my_netflix_sub1'] + "')").closest("li").trigger("click");

                //註冊次要字幕被點到
                $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] li").unbind("click").click({ orin_class: orin_class }, function (e) {
                    // Issue. 93、修正下方進度條顯示問題
                    appClass.flag.isSub2Image = false;
                    $(".image-based-subtitles svg image").remove();
                    $(".player-timedtext-text-container").remove();
                    $("div[reqc='my_netflix_imageSubsB64']").empty();

                    //移除已點到的任何值                    
                    $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] svg").remove();
                    for (var i = 0, max_i = $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] li").length; i < max_i; i++) {
                        $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] li").eq(i).find("div").find("div").attr('class', e.data.orin_class);
                    }
                    //此時要設定成按到的樣式
                    var set_class = $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕'] svg").closest("div").find("div").attr('class');
                    //且加入 svg
                    //console.log(set_class);
                    $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕'] svg").clone().prependTo($(this).find("div"));
                    $(this).find("div").find("div").attr('class', set_class);
                    appClass.flag.sub2 = $(this).text();

                    //只有勾勾要明顯些
                    $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] div div").css({
                        'margin': '0px'
                    });
                    $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] svg").closest("div").find("div").css({
                        'margin-left': '45px'
                    });
                    //亮字效果
                    $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] svg").closest("div").find("div").find("div").attr('class', set_class);

                    //存 memory sub2
                    appClass.method.setMemory('my_netflix_sub2', appClass.flag.sub2);

                    //存 第二字幕按壓時間
                    appClass.method.setMemory('my_netflix_sub2_Click_DT', new Date().getTime());
                    //避免穿透
                    e.stopPropagation();
                });
                //觸發一次
                $("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='次要字幕'] li div:contains('" + window['my_netflix_sub2'] + "')").closest("li").trigger("click");

                //$("#subMain_div").find("> div").css({
                //    "display": "block"
                //});
            }



        }
        //狂點字幕選單
        //如果滑鼠注目是在選集、調聲音、播速，就不要點字幕功能了

        //藏掉原本的字幕功能鈕
        //如果要隱藏 UI
        // data-uia='player' class inactive、active、passive
        // data-uia='timeline-bar' //播放軸
        //下方控制列，在「div[data-uia='player'] div[data-uia='video-canvas'] 後面的 div」，當播放器消失時，會直接被 remove
        $("button[data-uia='control-audio-subtitle']").css({
            'opacity': 0.1,
            'position': 'absolute',
            'z-index': -999,  // 沉下去
            'display': 'none'
        });
        //複製一個新版 3waNetflix 用的 control-audio-subtitle btn
        if ($("button[reqc='my_control-audio-subtitle']").length == 0) {
            var btn = $("button[data-uia='control-audio-subtitle']").clone();
            btn.attr({
                'data-uia': null,
                'reqc': 'my_control-audio-subtitle',
                'attr': '3waNetflix'
            }).css({
                'display': 'block',
                'opacity': '1',
                'position': 'static',
                'z-index': 1
            }).appendTo($("button[data-uia='control-audio-subtitle']").closest("div"));

            //滑鼠飄進字幕，就不要觸發進度條了
            $("button[reqc='my_control-audio-subtitle']").unbind("mouseover").bind("mouseover", function () {
                clearTimeout(appClass.interval.omkt8s_Timeout);
            });
            //滑鼠去點字幕
            $("button[reqc='my_control-audio-subtitle']").unbind("click").click(function () {
                $(".my_netflix_controller_class").trigger("mousemovemousemove");
            });
        }
        //然後定義到我的按鈕

        /*var tmp = "";
        tmp += '$("div[data-uia=\'episode-preview\']").length : ' + $("div[data-uia='episode-preview']").length + "\n";
        tmp += '$("div[data-uia=\'episode-pane\']").length : ' + $("div[data-uia='episode-pane']").length + "\n";
        tmp += '$("div[data-uia=\'scrubber-rail\']").length : ' + $("div[data-uia='scrubber-rail']").length + "\n";
        tmp += '$("div[data-uia=\'playback-speed\']").length : ' + $("div[data-uia='playback-speed']").length + "\n";
        tmp += 'appClass.flag.timeLineSliding : ' + appClass.flag.timeLineSliding;
        */
        //console.log(tmp);
        if (appClass.flag.inControl == true) {
            //修正滑鼠移入下方控制項，沒有捲軸的問題
            // Issue 43、滑鼠進入下方 Control 區，時間軸需要顯示，不用透過滑過聲音鈕
            if ($("div.active.ltr-omkt8s").attr('my_isClicked') == null) {
                //
                if ($("div.active.ltr-omkt8s span").length != 0) {
                    // 這裡需用 pure js 的 trigger 才不會一直點
                    // 找超久的，總算滑鼠移入，就會出現時間軸
                    // 不過這寫法不好，V2.3 先停用

                    //$("div.active.ltr-omkt8s span").eq(0).attr('my_isClicked', "YES");
                    //clearTimeout(appClass.interval.omkt8s_Timeout);
                    //appClass.interval.omkt8s_Timeout = setTimeout(function () {
                    //    if ($("div.active.ltr-omkt8s span").length != 0) {
                    //$("div.active.ltr-omkt8s span").eq(0)[0].mousedown();
                    //    }
                    //}, 300);
                }
            }
        }
        else if (
            $("div[data-uia='episode-preview']").length == 0 && // 選集預覽            
            $("div[data-uia='episode-pane']").length == 0 && // 選集            
            $("div[data-uia='scrubber-rail']").length == 0 && //調聲音
            $("div[data-uia='playback-speed']").length == 0 && //播放速度
            appClass.flag.timeLineSliding == false && //不能在捲播放速度時
            appClass.flag.inControl == false && // 滑鼠不能在控制區
            $("video").length > 0 && $("video")[0].currentTime <= ($("video")[0].duration * 99 / 100.0) && // (Issue 77 當影片播放進入最後 1%，停止翻譯字幕)
            $("video").length > 0 && $("video")[0].paused == false //暫停時不用一直翻譯 (Issue 78 當影片暫停時，停止翻譯字幕)

            //$("div[data-uia='timeline-bar']").length == 0 //播放條
        ) {
            //修正滑鼠移入下方控制項，沒有捲軸的問題
            // Issue 43、滑鼠進入下方 Control 區，時間軸需要顯示，不用透過滑過聲音鈕
            $("div.active.ltr-omkt8s").attr('my_isClicked', null);
            //狂點右下字幕選單按鈕，這個步驟決對不能停止
            //如果 appClass.flag.timelineBarDom == null, 備份一份進去
            //if (appClass.flag.timelineBarDom == null && $("div[data-uia='video-canvas']").next("div").length != 0) {
            //    appClass.flag.timelineBarDom = $("div[data-uia='video-canvas']").next("div").clone(true);
            //}
            //console.log("點了..." + $("button[data-uia='control-audio-subtitle']").length);
            //$("button[data-uia='control-audio-subtitle']").trigger("click");  
            // Issue. 93、修正下方進度條顯示問題
            if ($("#subMain_div").find("div[reqc='我的字幕選單'] div[reqc='主要字幕'] li").length == 0) {
                $("button[data-uia='control-audio-subtitle']").trigger("click");
                //console.log(" li = 0 ");               
            }
            else if (
                appClass.flag.sub2 != "關閉" &&
                appClass.method.getMemory("my_netflix___SUB[" + appClass.method.getMovieID() + "][" + appClass.method.getMemory("my_netflix_sub2") + "]") == null
            ) {
                //console.log(" li = 00 ");
                $("button[data-uia='control-audio-subtitle']").trigger("click");
                //window['control-audio-subtitle_' + appClass.method.getMovieID()] = "control-audio-subtitle_clicked";
            }
            if ((appClass.flag.isSub1Image == true && appClass.flag.sub1 != "關閉") || (appClass.flag.isSub2Image == true && appClass.flag.sub2 != "關閉")) {
                $("button[data-uia='control-audio-subtitle']").trigger("click");
                //console.log(" li = 000 ");
            }

            //console.log("點了");
        }
        //修正，如果找不到「原本的字幕選單」，他在 watch-video 裡面...
        if ($("div[data-uia='selector-audio-subtitle'][reqc='原本的字幕選單']").length == 0) {
            $("div[data-uia='watch-video'] div[data-uia='selector-audio-subtitle']").attr('reqc', '原本的字幕選單');
        }
        /*
         * 雙字幕的精華在此...
        */

        // 這裡就是傳說中，一直有小人幫你點右下字幕 繁體中文、英文，點來點去點不停的地方
        // Issue 55、影片暫停時，暫停取新字幕
        if ($("video").length != 0 && $("video")[0].paused) {
            return;
        }



        $("div[data-uia='selector-audio-subtitle'][reqc='原本的字幕選單'] li[data-uia='subtitle-item-" + appClass.flag.sub1 + "']").trigger("click");


        appClass.flag.isSubGet = false;
        //window['lastWord_a'] = "";
        //window['lastWord_b'] = "";
        //window['lastImage_a'] = new Array();
        //window['lastImage_b'] = new Array();
        setTimeout(function () {
            //window['lastWord_a'] = $(".player-timedtext-text-container").text();
            //console.log("window['lastWord_a']: " + window['lastWord_a']);
            //這裡的 $(".player-timedtext-text-container") 有可能是多行...
            //Issue (Done 2022-09-25)50、英文字幕，二行字會黏在一起
            var _m = new Array();
            for (var i = 0, max_i = $(".player-timedtext-text-container").length; i < max_i; i++) {
                //斷行會變 \n
                //console.log($(".player-timedtext-text-container").eq(i).html().replace("<br>", "__3WA__N__"));
                $(".player-timedtext-text-container").eq(i).html($(".player-timedtext-text-container").eq(i).html().replace("<br>", "__3WA__N__")).text();
                var _sm = $(".player-timedtext-text-container").eq(i).text().split("__3WA__N__");
                for (var j = 0, max_j = _sm.length; j < max_j; j++) {
                    _m.push(_sm[j]);
                }
            }
            //人民仍需要斷行!?            
            window['lastWord_a'] = _m.join("\n");
            if (window['lastWord_a'] != "") {
                appClass.flag.isSub1Image = false;
                //試看看移除字幕...
                //$(".player-timedtext-text-container").remove();
            }
            //if ($(".image-based-subtitles svg image").length > 0) {
            //圖片型字幕
            /*_m = new Array();
            for (var i = 0, max_i = $(".image-based-subtitles svg image").length; i < max_i; i++) {
                //_m.push($(".player-timedtext-text-container").eq(i).clone());
                _m.push($(".image-based-subtitles svg image").eq(i).attr('href'));
            }
            window['lastImage_a'] = _m.join("\n");
            */
            _m = new Array();
            if ($(".image-based-subtitles svg image").length > 0 && $("div[reqc='my_netflix_imageSubsB64']").length == 1) {

                var mb64 = $("div[reqc='my_netflix_imageSubsB64']").html().split("|||3WA_BR|||");
                for (var i = mb64.length - 1; i >= 0; i--) {
                    var d = mb64[i].split("|||3WA|||");
                    //b64 , 時間
                    if (new Date().getTime() - parseInt(d[1]) <= 2000) {
                        var appendImg = d[0];
                        if ($.inArray(appendImg, _m[i]) == -1) {
                            _m.push(appendImg);
                        }
                        if (_m.length >= 2) break; //最多二組字
                    }
                }
                window['lastImage_a'] = _m.join("\n");
                if (window['lastImage_a'] != "") {
                    appClass.flag.isSub1Image = true;
                    //移除圖片字幕
                    $(".image-based-subtitles svg image").remove();
                }

            }
            //}
        }, 50)
        //一、二字幕不要一樣
        if (appClass.flag.sub2 != null && appClass.flag.sub2 != "關閉" && appClass.flag.sub1 != appClass.flag.sub2) {

            //如果第二字幕已在 memory my_netflix___SUB[movieID][字幕] 直接解晰
            if (localStorage["my_netflix___SUB[" + appClass.method.getMovieID() + "][" + appClass.flag.sub2 + "]"] != null) {
                //直接從 XML 解內容
                //此時有可能回上頁，沒有 $("video")
                if ($("video").length == 0) return;
                var dt = $("video")[0].currentTime;
                var txt = appClass.method.xmlSubParse(localStorage.getItem("my_netflix___SUB[" + appClass.method.getMovieID() + "][" + appClass.flag.sub2 + "]"), dt);
                //console.log(txt);
                window['lastWord_b'] = txt;
            }
            else {
                //原來 2.1 版點不停的流程
                setTimeout(function () {
                    $("div[data-uia='selector-audio-subtitle'][reqc='原本的字幕選單'] li[data-uia='subtitle-item-" + appClass.flag.sub2 + "']").trigger("click");
                    setTimeout(function () {
                        if (appClass.flag.sub2 != null && appClass.flag.sub2 != "關閉") {
                            //window['lastWord_b'] = $(".player-timedtext-text-container").text();
                            //console.log("window['lastWord_b']: " + window['lastWord_b']);
                            //這裡的 $(".player-timedtext-text-container") 有可能是多行...
                            //Issue (Done 2022-09-25)50、英文字幕，二行字會黏在一起
                            var _m = new Array();
                            for (var i = 0, max_i = $(".player-timedtext-text-container").length; i < max_i; i++) {
                                _m.push($(".player-timedtext-text-container").eq(i).text());
                            }
                            window['lastWord_b'] = _m.join(" ");
                            if (window['lastWord_b'] != "") {
                                appClass.flag.isSub1Image = false;
                                //移除字幕
                                $(".player-timedtext-text-container").remove();
                            }
                            //if ($(".image-based-subtitles svg image").length > 0) {
                            //圖片型字幕
                            //想法是，只抓 2秒內 $("div[reqc='my_netflix_imageSubsB64']").html() 最後二組不同的字
                            _m = new Array();
                            if ($(".image-based-subtitles svg image").length > 0 && $("div[reqc='my_netflix_imageSubsB64']").length == 1) {

                                var mb64 = $("div[reqc='my_netflix_imageSubsB64']").html().split("|||3WA_BR|||");
                                for (var i = mb64.length - 1; i >= 0; i--) {
                                    var d = mb64[i].split("|||3WA|||");
                                    //b64 , 時間
                                    if (new Date().getTime() - parseInt(d[1]) <= 2000) {
                                        var appendImg = d[0];
                                        if ($.inArray(appendImg, _m[i]) == -1) {
                                            _m.push(appendImg);
                                        }
                                        if (_m.length >= 2) break; //最多二組字
                                    }
                                }
                                window['lastImage_b'] = _m.join("\n");
                                if (window['lastImage_b'] != "") {
                                    appClass.flag.isSub2Image = true;
                                    $(".image-based-subtitles svg image").remove();
                                }
                            }

                            //window['lastImage_b'] = _m.join("\n");
                            //}
                        }
                        else {
                            //沒設定字幕
                            window['lastWord_b'] = "";
                            window['lastImage_b'] = "";
                        }
                        appClass.flag.isSubGet = true;
                    }, 50);

                }, 100);
            }
        }
        else {
            appClass.flag.isSubGet = true;
            window['lastWord_b'] = "";
            window['lastImage_b'] = new Array();
        }

        //console.log(appClass.flag.sub1 + " , " + appClass.flag.sub2);
        //setTimeout(function () {
        //}, 300);

    }, 600);

    //字幕獨立變化
    clearInterval(appClass.interval.subtitleUIInterval);
    appClass.interval.subtitleUIInterval = setInterval(function () {


        //if (appClass.flag.timelineBarDom != null && $("div[data-uia='video-canvas']").next("div").length == 0) {
        //    appClass.flag.timelineBarDom.appendTo($("div[data-uia='video-canvas']").closest("div"));
        //}

        //$("div[data-uia='player']").removeClass('inactive').addClass('active');
        //狂顯時間軸
        //console.log($("div[data-uia='timeline-bar']").length);
        //$("div[data-uia='timeline-bar']").css({ 'display': 'inline' });
        //$("button[data-uia='control-audio-subtitle']").trigger("mouseout");

        //timeline要顯
        //$("div[data-uia='timeline']").closest("div").closest("div").closest("div").stop().show();

        var my3waSubDiv = $("div[reqc='my3waSubDiv']");
        //每 50ms 更新字幕的位置
        //$("image").attr('x',window['my_netflix_y_position']);

        //if ($(".image-based-subtitles svg image").length > 0) { //2022/03/18以前的舊版，圖片型字幕            
        /*if (window['lastImage_a'] != "" || windowwindow['lastImage_b'] != "")
        {
            console.log(window['lastImage_a']);
            console.log(window['lastImage_b']);
            //2022/03/18以前的舊版
            if ($(".image-based-subtitles svg image[my3waFlag='YES']").length > 0) return;
            var dom_image = $(".image-based-subtitles svg image");
            if (dom_image.attr("orin_height") == null) {
                dom_image.attr("orin_height", $(".image-based-subtitles svg image").attr("height"));
                dom_image.attr("orin_x", $(".image-based-subtitles svg image").attr("x"));
                dom_image.attr("orin_y", $(".image-based-subtitles svg image").attr("y"));
            }
            var orin_height = parseInt(dom_image.attr("orin_height"));
            dom_image.css({
                'width': '100%', // 2022-06-11 修正字體置中問題 這裡確定要 100% 才有效果，要放大縮小字，要靠 height                
                'height': (orin_height * window['my_netflix_fontsize'] * 1.1) + 'px' //再加 1.1 倍
            });
            //實際影響置中是 image x 圖片本身的 width、螢幕寬         
            window['wh'] = appClass.method.getWindowSize();
            dom_image[0].setAttribute('x', 0);
            dom_image[0].setAttribute('width', window['wh']['width']);
            var orin_y = parseInt(dom_image[0].getAttribute('orin_y')); //原本的 y 軸            
            //console.log(orin_y);
            //console.log((orin_y + window['my_netflix_y_position']));
            window['my_netflix_y_position'] = parseFloat($("input[reqc='my_netflix_y_position_input']").val());
            dom_image[0].setAttribute('y', (orin_y + window['my_netflix_y_position']));
     
            dom_image.attr('my3waFlag', 'YES');
            dom_image[0].style.display = "inline"; //位置喬定才顯示
        } //2022/03/18以前的舊版圖片型字幕
        */
        //else if ($(".player-timedtext-text-container").length > 0) { //2022/03/21 新版 0.7 文字型字幕 //原有個 span
        if (window['lastWord_a'] != "" || window['lastWord_b'] != "" || window['lastImage_a'] != "" || window['lastImage_b'] != "") {
            //2022/03/21 新版 0.7
            //$(".player-timedtext").css({'display':'none'});        

            // Fix Issue 41、調整 UI 時，有時會失效
            // 拿 isSubGet 來判字幕進場，會造成後面無法改字樣式，因為直接離開了
            if (appClass.flag.isSubGet != true) {
                //return;
                //用這個來判斷似乎不是好事
            }
            //var orinSubs = $(".player-timedtext-text-container span");
            //完啦，player-timedtext-text-container 是多行

            window['lastWord_a'] = appClass.method.trim(window['lastWord_a']);
            window['lastWord_b'] = appClass.method.trim(window['lastWord_b']);
            window['lastWord_c'] = window['lastWord_a'];
            window['lastWord_c'] += (window['lastWord_b'] == null || window['lastWord_b'] == "") ? "" : "\n" + window['lastWord_b'];
            window['lastWord_c'] = appClass.method.trim(window['lastWord_c']);
            //console.log(window['lastWord_c'] + "\n\n" + m_now_texts.join("\n"));
            //console.log("window['lastWord_c']: " + encodeURIComponent(window['lastWord_c']));
            if (window['lastWord_c'] == "") {
                //跟上次一樣                
                //無字中
                //console.log('無字中');
                //setTimeout(function () {
                my3waSubDiv.html('');
                //延遲一下
                //}, 200);
                return;
            }

            var m = new Array();

            var subs = "";

            //無腦置中效果
            // From : https://stackoverflow.com/questions/8508275/how-to-center-a-position-absolute-element

            //idea 
            //第一圖片
            //第一字幕
            //第二字幕
            //第二圖片

            //第一字幕
            var mm_subs = new Array();

            //塞圖片字幕??
            if ((window['lastWord_a'] == null || window['lastWord_a'] == "") && window['lastImage_a'] != null && appClass.flag.isSub1Image == true) {
                var m = window['lastImage_a'].split("\n");
                for (var i = 0, max_i = m.length; i < max_i; i++) {
                    var img = "<img reqc='my3waSubDivSpan' src='" + m[i] + "' style='display:none;'>";
                    if ($.inArray(img, mm_subs) == -1) {
                        mm_subs.push(img);
                        break; //only one
                    }
                }
            }

            if (window['lastWord_a'] != null) {
                // Issue 90、六人行英文 CC 字幕，有全大寫的問題
                if (window['my_netflix_auto_fix_english_first_letter_case'] == 'true' && appClass.flag.sub1 == '英語 (CC)') {
                    //如果是 英語 CC 才要處理
                    window['lastWord_a'] = appClass.method.fix_sentence_first_letter_upper_case(window['lastWord_a']);
                }
                var m = window['lastWord_a'].split("\n");
                for (var i = 0, max_i = m.length; i < max_i; i++) {

                    m[i] = m[i].replace("\"", "“"); //Fix character injection
                    //m[i] = m[i].replace("'", "“"); //Fix character injection                    

                    m[i] = "<p reqc='my3waSubDivSpan' data-text=\"" + m[i] + "\"></p>"; //sub1 文字在此
                    if (i != max_i - 1) {
                        m[i] += "<hr reqc='my3waSubDivSpanHR'>";
                    }
                    if ($.inArray(m[i], mm_subs) == -1) {
                        mm_subs.push(m[i]);
                    }
                }
            }


            if (window['lastWord_b'] != null) {
                if (appClass.flag.sub2 != null && appClass.flag.sub2 != "關閉") {

                    // Issue 90、六人行英文 CC 字幕，有全大寫的問題
                    if (window['my_netflix_auto_fix_english_first_letter_case'] == 'true' && appClass.flag.sub2 == '英語 (CC)') {
                        //如果是 英語 CC 才要處理
                        window['lastWord_b'] = appClass.method.fix_sentence_first_letter_upper_case(window['lastWord_b']);
                    }

                    var m = window['lastWord_b'].split("\n");
                    for (var i = 0, max_i = m.length; i < max_i; i++) {

                        m[i] = m[i].replace("\"", "“"); //Fix character injection
                        //m[i] = m[i].replace("'", "“"); //Fix character injection                        

                        m[i] = "<p reqc='my3waSubDivSpan_2' data-text=\"" + m[i] + "\"></p>"; //sub2 文字在此

                        if ($.inArray(m[i], mm_subs) == -1) {
                            mm_subs.push(m[i]);
                        }
                    }
                }
            }
            if ((window['lastWord_b'] == null || window['lastWord_b'] == "") && window['lastImage_b'] != null && appClass.flag.isSub2Image == true) {
                if (appClass.flag.sub2 != null && appClass.flag.sub2 != "關閉" && window['lastImage_b'] != "") {
                    var m = window['lastImage_b'].split("\n");
                    for (var i = 0, max_i = m.length; i < max_i; i++) {
                        var img = "<img reqc='my3waSubDivSpan_2' src='" + m[i] + "' style='display:none;'>";
                        if ($.inArray(img, mm_subs) == -1) {
                            mm_subs.push(img);
                            break; //only one
                        }
                    }
                }
            }

            subs = mm_subs.join("<br>");

            var m_now_texts = new Array();
            for (var i = 0, max_i = my3waSubDiv.find("p").length; i < max_i; i++) {
                m_now_texts.push(my3waSubDiv.find("p").eq(i).attr('data-text'));
            }

            //console.log(subs);            
            var subhtml = subs + `
                        <style>
                            div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan']{                                
                                display:flex;
                                align-items:center;
                                justify-content:center;                                
                                width:100%;
                                /* 修正雙行字高度 */                                        
                                margin-top:0px; 
                                margin-bottom:0px;
                                /* 如果是二、三行以上的字，加上行高 */
                            }                            
                            div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan']::before,
                            div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan']::after {
                                content: attr(data-text);
                                position: absolute;                    
                                z-index: -1;
                                color: `+ window['my_netflix_font_color'] + `; /*文字顏色*/             
                            }
                            div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan']::before{
                                -webkit-text-stroke: `+ window['my_netflix_font_text_shadow'] + `px ` + window['my_netflix_font_border_color'] + `; /*字框顏色*/
                            }                            
                            /* 第二組字幕 */
                            div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan_2']{
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                width:100%;
                                /* 修正雙行字高度 */
                                margin-top:0px;
                                margin-bottom:0px;
                            }
                            div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan_2']::before,
                            div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan_2']::after {
                                content: attr(data-text);
                                position: absolute;
                                z-index: -1;
                                color: `+ window['my_netflix_font_color_2'] + `; /*文字顏色*/             
                            }
                            div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan_2']::before{
                                -webkit-text-stroke: `+ window['my_netflix_font_text_shadow_2'] + `px ` + window['my_netflix_font_border_color_2'] + `; /*字框顏色*/
                            }
                        </style>
                     `;
            //紀錄最後的字幕內容，比較不用一直刷
            if (window['my_subhtml'] == null) {
                window['my_subhtml'] = subhtml;
                my3waSubDiv.html(subhtml);
            }
            else {
                if (window['my_subhtml'] != subhtml) {
                    window['my_subhtml'] = subhtml;
                    my3waSubDiv.html(subhtml);
                }
            }
            //my3waSubDiv.html(subhtml);
            // 字幕效果，特別感謝 张鑫旭
            // From : https://www.zhangxinxu.com/wordpress/2017/06/webkit-text-stroke-css-text-shadow/

            var sub1_margin_bottom = 0;
            if (typeof (window['lastWord_a']) == "string" && window['lastWord_a'].split("\n").length >= 2) {
                sub1_margin_bottom = (31 * window['my_netflix_fontsize'] * window['lastWord_a'].split("\n").length - 1) / 2.0;
            }
            //2022-10-05 如果第一行文字是雙行以上，加入 margin-bottom
            my3waSubDiv.find("p[reqc='my3waSubDivSpan']").eq(0).css({
                'margin-top': -1 * sub1_margin_bottom + 'px'
            });
            my3waSubDiv.css({
                'position': 'absolute', //改 fixed 往下延伸?
                'width': '100%',
                'height': '0px',
                'overflow': 'visible',
                //'background-size': 'cover',                
                'bottom': window['my_netflix_y_position'] + '%',
                'text-align': 'center',
                '-webkit-text-stroke': '0px black',
                'z-index': 555555566,
                'display': 'inline',
                'pointer-events': 'none', //div 可穿透
                //2022-04-20 增加字距
                //字距改到各自的內容
                //'letter-spacing': window['my_netflix_fontspace'] + 'px !important'                                
            });

            //第一文字字幕動態調整樣式
            my3waSubDiv.find("p[reqc='my3waSubDivSpan']").css({
                'font-size': (31 * window['my_netflix_fontsize']) + 'px',
                'font-family': window['my_netflix_font_family'], //'Netflix Sans,Copperplate,Arial,Helvetica', //Copperplate Gothic,Copperplate Gothic Bold
                //'font-variant': 'small-caps', //強制大寫，怎麼會寫這行呢...Or2
                'font-weight': window['my_netflix_font_bolder'],
                'letter-spacing': window['my_netflix_fontspace'] + 'px !important'
            });
            my3waSubDiv.find("hr[reqc='my3waSubDivSpanHR']").css({
                'visibility': 'hidden',
                'margin-top': (31 * window['my_netflix_fontsize']) + 'px',
                'margin-bottom': '0px'
            });
            //第二文字字幕動態調整樣式
            my3waSubDiv.find("p[reqc='my3waSubDivSpan_2']").css({
                'font-size': (31 * window['my_netflix_fontsize_2']) + 'px',
                'font-family': window['my_netflix_font_family_2'], //'Netflix Sans,Copperplate,Arial,Helvetica', //Copperplate Gothic,Copperplate Gothic Bold
                //'font-variant': 'small-caps', //強制大寫，怎麼會寫這行呢...Or2
                'font-weight': window['my_netflix_font_bolder_2'],
                'letter-spacing': window['my_netflix_fontspace_2'] + 'px !important'
            });

            //第一圖片字幕動態調整樣式
            if (my3waSubDiv.find("img[reqc='my3waSubDivSpan']").length != 0) {
                var w = parseInt(my3waSubDiv.find("img[reqc='my3waSubDivSpan']").attr('orin_w'));
                var h = parseInt(my3waSubDiv.find("img[reqc='my3waSubDivSpan']").attr('orin_h'));
                if (!isNaN(w)) {
                    var r = w / h;
                    var new_h = h * window['my_netflix_fontsize'];
                    var new_w = new_h * r;
                    //console.log("原 w,h: " + w + "," + h + "    新 w,h: " + new_w + "," + new_h);
                    if (new_w >= new_h) {
                        my3waSubDiv.find("img[reqc='my3waSubDivSpan']").css({
                            'width': new_w + "px",
                            'height': new_h + "px"
                        }).show();
                    }
                    else {
                        //2022-10-05 如果圖片型字幕，高比寬多，移到右邊中間
                        //Issue 69、直行日文字圖片型字幕，移到畫面右邊置中
                        window['wh'] = appClass.method.getWindowSize();
                        var r_percent = appClass.method.arduino_map($(window).width(), 800, 2048, 3, 15) + '%';
                        //(($(window).width() / $(window).height()) > 2.5) ? '15%' : '8%';
                        my3waSubDiv.find("img[reqc='my3waSubDivSpan']").css({
                            'position': 'fixed',
                            'right': r_percent,
                            'top': (window['wh']['height'] / 2 - new_h / 2) + 'px',
                            'width': new_w + "px",
                            'height': new_h + "px"
                        }).show();
                    }
                }
            }
            //第二圖片字幕動態調整樣式
            if (my3waSubDiv.find("img[reqc='my3waSubDivSpan_2']").length != 0) {
                var w = parseInt(my3waSubDiv.find("img[reqc='my3waSubDivSpan_2']").attr('orin_w'));
                var h = parseInt(my3waSubDiv.find("img[reqc='my3waSubDivSpan_2']").attr('orin_h'));
                if (!isNaN(w)) {
                    var r = w / h;
                    var new_h = h * window['my_netflix_fontsize_2'];
                    var new_w = new_h * r;
                    //console.log("原 w,h: " + w + "," + h + "    新 w,h: " + new_w + "," + new_h);
                    if (new_w >= new_h) {
                        my3waSubDiv.find("img[reqc='my3waSubDivSpan_2']").css({
                            'width': new_w + "px",
                            'height': new_h + "px"
                        }).show();
                    }
                    else {
                        //2022-10-05 如果圖片型字幕，高比寬多，移到右邊中間
                        //Issue 69、直行日文字圖片型字幕，移到畫面右邊置中
                        window['wh'] = appClass.method.getWindowSize();
                        var r_percent = appClass.method.arduino_map($(window).width(), 800, 2048, 3, 15) + '%';
                        //(($(window).width() / $(window).height()) > 2.5) ? '15%' : '8%';
                        my3waSubDiv.find("img[reqc='my3waSubDivSpan_2']").css({
                            'position': 'fixed',
                            'right': r_percent,
                            'top': (window['wh']['height'] / 2 - new_h / 2) + 'px',
                            'width': new_w + "px",
                            'height': new_h + "px"
                        }).show();
                    }
                }
            }


            my3waSubDiv.find("img[reqc='my3waSubDivSpan']").unbind("load").bind("load", function (e) {
                //console.log(e);
                //console.log("W,H: " + $(this).width() + "," + $(this).height());
                var w = $(this).width();
                var h = $(this).height();
                //寫入自己本身
                $(this).attr('orin_w', w);
                $(this).attr('orin_h', h);
                //Todo: 如果高大於寬很多，有可能是日文的直字幕，建議可以放影片右邊!?
                //240,122 好像是集數的影格                
                if (w == 240 && h == 122) {
                    return;
                } else {
                    //$(this).show();
                }
            });
            my3waSubDiv.find("img[reqc='my3waSubDivSpan_2']").unbind("load").bind("load", function (e) {
                //console.log(e);
                var w = $(this).width();
                var h = $(this).height();
                //寫入自己本身
                $(this).attr('orin_w', w);
                $(this).attr('orin_h', h);
                //Todo: 如果高大於寬很多，有可能是日文的直字幕，建議可以放影片右邊!?
                //if (isNaN(w)) {
                //    return;
                //}
                //240,122 好像是集數的影格
                if (w == 240 && h == 122) {
                    return;
                } else {
                    //$(this).show();
                }
            });
            //2022-07-11 netflix 偷加 style *letter-space: 0!important;
            //所以只好把 my3waSubDiv 裡所有的項目全加上 letter-spacing 且 important
            var all3waDoms = $("div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan']");
            for (var i = 0, max_i = all3waDoms.length; i < max_i; i++) {
                all3waDoms.eq(i)[0].style.setProperty("letter-spacing", window['my_netflix_fontspace'] + 'px', "important");
            }

            var all3waDoms_2 = $("div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan_2']");
            for (var i = 0, max_i = all3waDoms_2.length; i < max_i; i++) {
                //第一組，加入一些 margin-top
                if (i == 0) {
                    all3waDoms_2.eq(i).css({
                        'margin-top': window['my_netflix_y_position_2'] + 'px'
                    });
                }
                all3waDoms_2.eq(i)[0].style.setProperty("letter-spacing", window['my_netflix_fontspace_2'] + 'px', "important");
            }

            var all3waDoms_2_img = $("div[reqc='my3waSubDiv'] img[reqc='my3waSubDivSpan_2']");
            for (var i = 0, max_i = all3waDoms_2_img.length; i < max_i; i++) {
                //第二組，加入一些 margin-top
                if (i == 0) {
                    //經測試後，圖片型的 -52 差不多剛好
                    all3waDoms_2_img.eq(i).css({
                        'margin-top': (window['my_netflix_y_position_2'] - 52) + 'px'
                    });
                }
            }
            appClass.flag.lastSubTime = Date.now();

        } //2022/03/21 新版 0.7 文字型字幕
        else {
            // 沒有字幕了
            // 修正 Issue 42、無人說話時，字幕退場的時間不精準
            // 如果連續 2 秒都沒有字幕框，字幕退場
            if (appClass.flag.lastSubTime == null) {
                appClass.flag.lastSubTime = Date.now();
            }
            //如果現在時間，減去 lastSubTime 大於 2 秒 才關字幕
            //且影片要播放時，影片暫停時不用隱藏
            if ($("video").length > 0 && $("video")[0].paused == false && Date.now() - appClass.flag.lastSubTime >= 2000) {
                my3waSubDiv.css({
                    'display': 'none'
                });
                appClass.flag.lastSubTime = Date.now();
            }
            //return;
        }



        //如果有下一集、工作人員名單、返回瀏覽、略過簡介，要可以點
        $("button[data-uia='watch-credits-seamless-button']").css({ // 下一集
            'pointer-events': 'auto'
        });
        $("button[data-uia='next-episode-seamless-button']").css({ // 工作人員名單
            'pointer-events': 'auto'
        });
        $("button[data-uia='nfplayer-exit']").css({ // 返回瀏覽
            'pointer-events': 'auto'
        });

        $("button[data-uia='player-skip-intro']").css({ // 略過簡介
            'pointer-events': 'auto'
        });
        // 修正 issue 40
        $("button[data-uia='control-nav-back']").css({ // 回上頁按鈕
            'pointer-events': 'auto'
        });
        $("button[data-uia='control-flag']").css({ // 問題回報鈕
            'pointer-events': 'auto'
        });

    }, 50);

    //},1); //setTimeout    
}

//新版，啟動後自動載入
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: run_3wa_netflix
    });
});
/*chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: run_3wa_netflix
    });
});
*/