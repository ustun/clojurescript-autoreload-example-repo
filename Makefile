

all:
	make open & foreman start

install_deps:
	lein deps
	gem install foreman
	npm install -g http-server grunt-cli
	npm install

watch:
	grunt watch

serve:
	http-server -p 8080

open:
	sleep 3
	open http://localhost:8080

build:
	lein cljsbuild auto hello-world-clojurescript
