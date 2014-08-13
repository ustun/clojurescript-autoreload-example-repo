


all:
	make watch & make serve & make build & make open

watch:
	grunt watch

serve:
	http-server

open:
	open http://localhost:8080

build:
	lein cljsbuild auto hello-world-clojurescript
