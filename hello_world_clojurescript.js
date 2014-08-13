goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../hello_world_clojurescript/utils.js", ['hello_world_clojurescript.utils'], ['cljs.core']);
goog.addDependency("../hello_world_clojurescript/books.js", ['hello_world_clojurescript.books'], ['cljs.core']);
goog.addDependency("../hello_world_clojurescript/core.js", ['hello_world_clojurescript.core'], ['hello_world_clojurescript.utils', 'cljs.core', 'hello_world_clojurescript.books']);