/*
 * THIS FILE IS AUTO GENERATED from 'lib/ecma_zipper.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "neith/zipper", "ecma_ast/node"], (function(require, exports, __o, __o0) {
    "use strict";
    var ecmaZipper;
    var __o = __o,
        treeZipper = __o["treeZipper"],
        __o0 = __o0,
        Node = __o0["Node"],
        reconstruct = __o0["reconstruct"]; {
            var range = (function(start, end) {
                var a = [];
                for (var i = 0;
                    (i < end);
                    (i = (i + 1)))(a[i] = i);

                return a;
            });
            var joinKeys = (function(children, values) {
                return children.reduce((function(p, c) {
                    (p[c] = values[c]);
                    return p;
                }), []);
            });
            (ecmaZipper = (function() {
                {
                    var getChildren = (function(node) {
                        return ((node instanceof Node) ? node.children : range(0, node.length));
                    }),
                        construct = (function(node, children, values) {
                            return ((node instanceof Node) ? reconstruct(node, values, ({})) : joinKeys(children, values));
                        }); {
                            return (function(root) {
                                return treeZipper(getChildren, construct, root);
                            });
                    }
                }
            })());
    }
    (exports.ecmaZipper = ecmaZipper);
}))