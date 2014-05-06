/*
 * THIS FILE IS AUTO GENERATED from 'lib/ecma_zipper.kep'
 * DO NOT EDIT
*/"use strict";
var __o = require("nu-stream")["gen"],
    range = __o["range"],
    __o0 = require("nu-stream")["stream"],
    foldl = __o0["foldl"],
    from = __o0["from"],
    NIL = __o0["NIL"],
    __o1 = require("neith")["tree"],
    treeZipper = __o1["treeZipper"],
    __o2 = require("khepri-ast")["node"],
    Node = __o2["Node"],
    modify = __o2["modify"],
    ecmaZipper, getChild, getChildren, construct, __dot = (function(x, y) {
        return x[y];
    });
(getChildren = (function(node) {
    return (Array.isArray(node) ? range(0, node.length) : ((node && node.children) ? from(node.children) : NIL));
}));
(getChild = __dot);
(construct = (function(node, pairs, values) {
    return (Array.isArray(node) ? foldl((function(p, __o3) {
        var key = __o3["key"],
            value = __o3["value"];
        (p[key] = value);
        return p;
    }), [], pairs) : ((node && node.children) ? modify(node, values(), ({})) : node));
}));
(ecmaZipper = treeZipper.bind(null, getChildren, getChild, construct));
(exports["ecmaZipper"] = ecmaZipper);
(exports["getChild"] = getChild);
(exports["getChildren"] = getChildren);
(exports["construct"] = construct);