b: build
build:
	npm run $@

publish:
	npm $@ --access public
