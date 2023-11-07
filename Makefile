.PHONY: test e2e
build:
	docker-compose build --no-cache
test:
	docker-compose run --rm app bun test
e2e:
	docker-compose run --rm app bun playwright test
