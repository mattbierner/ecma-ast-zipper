define(["require", "exports", "nu-stream/gen", "nu-stream/stream", "neith/tree", "ecma-ast/node"], (function(require,
    exports, __o, __o0, __o1, __o2) {
    "use strict";
    var range = __o["range"],
        foldl = __o0["foldl"],
        from = __o0["from"],
        NIL = __o0["NIL"],
        treeZipper = __o1["treeZipper"],
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
}));