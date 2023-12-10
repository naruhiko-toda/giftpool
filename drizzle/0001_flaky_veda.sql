CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"price" integer
);
--> statement-breakpoint
DROP TABLE "posts";