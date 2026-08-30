import { siteConfig } from "@/config/site";

export const metadata = {
  // already declared in root layout with type, but kept for re-use
  siteName: siteConfig.name,
} as const;

export const openGraphImage = {
  width: 1200,
  height: 630,
  alt: siteConfig.title,
} as const;

export const twitterHandle = "@imohben" as const;
