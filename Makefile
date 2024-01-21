run:
	docker-compose exec app bun run dev
ut:
	docker-compose run --rm test bun run test
ut_ci:
	docker-compose run test bun run test
et:
	docker-compose run --rm test bun run e2e
cov:
	docker-compose run --rm test bun run e2e:cov
et_ci:
	docker-compose run test bun run e2e:cov:ci
report:
	docker-compose run --rm test bun nyc report
install:
	docker-compose run --rm app bun install
install_test:
	docker-compose run test bun install
install_pw:
	docker-compose run test bun playwright install
build:
	docker-compose run --rm app bun run build
lint:
	docker-compose run --rm app bun run lint
