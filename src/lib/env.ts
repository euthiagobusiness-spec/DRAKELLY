import { z } from "zod";

const emptyStringToUndefined = (value: unknown) =>
  value === "" ? undefined : value;

const optionalUrl = z.preprocess(
  emptyStringToUndefined,
  z.string().url().optional(),
);

const envSchema = z
  .object({
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    NEXT_PUBLIC_SITE_URL: optionalUrl,
    WHATSAPP_URL: optionalUrl,
    CONTACT_URL: optionalUrl,
    BOOK_URL: optionalUrl,
    INSTAGRAM_URL: optionalUrl,
    TIKTOK_URL: optionalUrl,
    FACEBOOK_URL: optionalUrl,
    HOTMART_URL: optionalUrl,
  })
  .superRefine((env, context) => {
    const httpsOnlyKeys = [
      "WHATSAPP_URL",
      "CONTACT_URL",
      "BOOK_URL",
      "INSTAGRAM_URL",
      "TIKTOK_URL",
      "FACEBOOK_URL",
      "HOTMART_URL",
    ] as const;

    for (const key of httpsOnlyKeys) {
      const value = env[key];
      if (value && !value.startsWith("https://")) {
        context.addIssue({
          code: "custom",
          path: [key],
          message: `${key} must start with https://`,
        });
      }
    }

    if (
      env.NODE_ENV === "production" &&
      env.NEXT_PUBLIC_SITE_URL &&
      !env.NEXT_PUBLIC_SITE_URL.startsWith("https://")
    ) {
      context.addIssue({
        code: "custom",
        path: ["NEXT_PUBLIC_SITE_URL"],
        message: "NEXT_PUBLIC_SITE_URL must start with https:// in production",
      });
    }
  });

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  WHATSAPP_URL: process.env.WHATSAPP_URL,
  CONTACT_URL: process.env.CONTACT_URL,
  BOOK_URL: process.env.BOOK_URL,
  INSTAGRAM_URL: process.env.INSTAGRAM_URL,
  TIKTOK_URL: process.env.TIKTOK_URL,
  FACEBOOK_URL: process.env.FACEBOOK_URL,
  HOTMART_URL: process.env.HOTMART_URL,
});

export const externalLinks = {
  whatsapp: env.WHATSAPP_URL ?? "https://wa.me/",
  instagram: env.INSTAGRAM_URL,
  tiktok: env.TIKTOK_URL,
  facebook: env.FACEBOOK_URL,
  hotmart: env.HOTMART_URL,
  book: env.BOOK_URL,
  contact: env.CONTACT_URL,
};
