import { defineCollection, z } from "astro:content";
// import { glob } from "astro/loaders";

const servicesCollection = defineCollection({
  // loader: glob({ pattern: "services/**/*.{md,mdx}", base: "./src/content" }),
  type: "content",
  schema: z.object({
    order: z.number().optional(),
    navItem: z.string(), // The text in the top menu
    title: z.string(), // The title of the Service webpage
    h1: z.string(),
    subtitle: z.string(),
    description: z.string().optional(),
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

const trabajosCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    h1: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    city: z.string(),
    location: z.string().optional(), // nombre del lugar exacto, ej: "Hotel Sandos Mónaco"
    lat: z.number().optional(),
    lng: z.number().optional(),
    service: z.string(), // slug del servicio relacionado, ej: "limpieza-cristales"
    serviceLabel: z.string(), // texto del enlace, ej: "Limpieza de Cristales"
    coverImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        phase: z.string().optional(),
      })
    ).optional(),
    videoUrl: z.string().optional(), // URL completa del Reel de Instagram, ej: "https://www.instagram.com/p/DVbWHw-jMFa/"
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  services: servicesCollection,
  trabajos: trabajosCollection,
};
