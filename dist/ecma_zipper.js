/*
 * THIS FILE IS AUTO GENERATED from 'lib/ecma_zipper.kep'
 * DO NOT EDIT
*/define(["require", "exports", "nu-stream/gen", "nu-stream/stream", "neith/tree", "khepri-ast/node"], (function(require,
    exports, __o, __o0, __o1, __o2) {
    "use strict";
    var range = __o["range"],
        foldl = __o0["foldl"],
        from = __o0["from"],
        NIL = __o0["NIL"],
        treeZipper = __o1["treeZipper"],
        Node = __o2["Node"],
        modify = __o2["modify"],
        ecmaZipper, getChild, getChildren, construct, __dot = (function(x, y) {
            return x[y];
        });
    (getChildren = (function(node) {
        return (Array.isArray(node) ? range(0, node.length) : ((node && node.children) ? from(node.children) :
            NIL));
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
}));