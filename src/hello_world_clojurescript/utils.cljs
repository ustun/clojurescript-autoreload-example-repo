(ns hello-world-clojurescript.utils)

(defn substr [full-string partial-string]
  (> (.indexOf full-string partial-string) -1))


(defn test-str []
  "ustun")
