import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "nl"],
  defaultLocale: process.env.I18N_DEFAULT_LOCALE,
});
