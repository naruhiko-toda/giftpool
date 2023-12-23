run:
	docker-compose up -rm app bun run dev
ut:
	docker-compose up -rm test bun run test
et:
	docker-compose up -rm test bun run e2e
