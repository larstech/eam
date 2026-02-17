import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Wrappers around Next.js' navigation APIs that consider i18n
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
