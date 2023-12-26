install:
	npm ci
link:
	npm link
publish:
	npm publish --dry-run
lint:
	npx eslint .
test:
	npx --experimental-vm-modules jest
test-cov:
	npx jest --coverage



