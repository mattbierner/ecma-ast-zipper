"use strict";
var __o = require("nu-stream")["gen"],
    range = __o["range"],
    __o0 = require("nu-stream")["stream"],
    foldl = __o0["foldl"],
    from = __o0["from"],
    NIL = __o0["NIL"],
    __o1 = require("neith")["tree"],
    treeZipper = __o1["treeZipper"],
    __o2 = require("ecma_ast")["node"],
    Node = __o2["Node"],
    modify = __o2["modify"],
    ecmaZipper, buildArray = (function(pairs) {
        return foldl((function(p, __o3) {
            var key = __o3["key"],
                value = __o3["value"];
            (p[key] = value);
            return p;
        }), [], pairs);
    });
(ecmaZipper = treeZipper.bind(null, (function(node) {
    return (node ? (Array.isArray(node) ? range(0, node.length) : from(node.children)) : NIL);
}), (function(n, k) {
    return n[k];
}), (function(node, pairs, values) {
    return ((node instanceof Node) ? modify(node, values(), ({})) : buildArray(pairs));
})));
(exports.ecmaZipper = ecmaZipper);