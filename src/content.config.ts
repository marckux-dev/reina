import { defineCollection, z } from "astro:content";
// import { glob } from "astro/loaders";

const servicesCollection = defineCollection({
  // loader: glob({ pattern: "services/**/*.{md,mdx}", base: "./src/content" }),
  type: "content",
  schema: z.object({
    navItem: z.string(), // The text in the top menu
    title: z.string(), // The title of the Service webpage
    h1: z.string(),
    subtitle: z.string(),
    headerImage: z.union([
      z.string(),
      z.object({
        src: z.string(),
        alt: z.string().optional(),
      }),
    ]),
    features: z.array(z.string()),
    gallery: z.array(
      z.union([
        z.string(),
        z.object({
          src: z.string(),
          alt: z.string().optional(),
        }),
      ]),
    ),
    parallaxImage: z.union([
      z.string(),
      z.object({
        src: z.string(),
        alt: z.string().optional(),
      }),
    ]),
    slogan: z.string(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    ),
  }),
});

export const collections = {
  services: servicesCollection,
};
