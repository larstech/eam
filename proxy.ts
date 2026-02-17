import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for the ones:
  // - That start with `/_next`
  // - Containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!_next|.*\\..*).*)",
};
