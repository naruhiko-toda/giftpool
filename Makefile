run:
	docker-compose exec app bun run dev
ut:
	docker-compose run --rm test bun run test
et:
	docker-compose run --rm test bun run e2e
install:
	docker-compose run --rm app bun install
