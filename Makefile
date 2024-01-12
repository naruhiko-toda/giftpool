run:
	docker-compose exec app bun run dev
ut:
	docker-compose run --rm test bun run test
et:
	docker-compose run --rm test bun run e2e -p 9323:9323
cov:
	docker-compose run --rm test bun run e2e:cov -p 9323:9323
report:
	docker-compose run --rm test bun nyc report
install:
	docker-compose run --rm app bun install
install_test:
	docker-compose run --rm test bun install
build:
	docker-compose run --rm app bun run build
lint:
	docker-compose run --rm app bun run lint
