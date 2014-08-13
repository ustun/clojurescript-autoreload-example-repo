(ns hello-world-clojurescript.core
  (:require [hello-world-clojurescript.books :as books]
            [hello-world-clojurescript.utils :as utils]))

(enable-console-print!)

(defn filter-books [books author]
  (let [pred (fn [book] (utils/substr (:author book) author))]
    (filter pred books)))

(println (filter-books books/books "Dost"))
