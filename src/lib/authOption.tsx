import { loggerInfo } from "@/lib/logger";
import LINE from "next-auth/providers/line";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    LINE({
      clientId: process.env.LINE_CHANNEL_ID,
      clientSecret: process.env.LINE_CHANNEL_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      loggerInfo("login sucseeded");
      loggerInfo(session);
      if (session?.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
};
