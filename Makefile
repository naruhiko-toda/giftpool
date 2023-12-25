run:
	docker-compose exec --rm app bun run dev
ut:
	docker-compose run --rm test bun run test
et:
	docker-compose run --rm test bun run e2e
