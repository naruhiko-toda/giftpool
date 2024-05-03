run:
	bun run dev
et:
	bun run e2e
cov:
	bun run e2e:cov
et_ci:
	bun run e2e:cov:ci
report:
	bun nyc report
install:
	bun install
install_pw:
	bun playwright install
build:
	bun run build
lint:
	bun run lint
gen_type:
	supabase gen types typescript --project-id "$PROJECT_REF" --schema public > src/_types/database.ts
	npx node_modules/better-supabase-types -i src/_types/database.ts -f
