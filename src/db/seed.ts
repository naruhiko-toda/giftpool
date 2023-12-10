if (!("DATABASE_URL" in process.env)) throw new Error("DATABASE_URL not found on .env.development");

const main = async () => {};

await main().then(async () => {
  process.exit(0);
});
