import { loggerError } from "@/lib/logger";
import { supabase } from "@/lib/supabase";

if (!("NEXT_PUBLIC_SUPABASE_URL" in process.env)) {
  throw new Error("DATABASE_URL not found on .env.development");
}

const main = async () => {
  await supabase.from("Project").delete();
};

await main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    loggerError(e);
    process.exit(1);
  });
