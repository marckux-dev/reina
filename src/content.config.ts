import { defineCollection, z } from "astro:content";

const servicesSchema = z.object({
  order: z.number().optional(),
  navItem: z.string(),
  title: z.string(),
  h1: z.string(),
  subtitle: z.string(),
  description: z.string().optional(),
  headerImage: z.union([
    z.string(),
    z.object({ src: z.string(), alt: z.string().optional() }),
  ]),
  features: z.array(z.string()),
  gallery: z.array(
    z.union([
      z.string(),
      z.object({ src: z.string(), alt: z.string().optional() }),
    ]),
  ),
  parallaxImage: z.union([
    z.string(),
    z.object({ src: z.string(), alt: z.string().optional() }),
  ]),
  slogan: z.string(),
  faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
});

const trabajosSchema = z.object({
  title: z.string(),
  h1: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  city: z.string(),
  location: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
  service: z.string(),
  serviceLabel: z.string(),
  coverImage: z.object({ src: z.string(), alt: z.string() }),
  gallery: z.array(z.object({
    src: z.string(),
    alt: z.string(),
    phase: z.string().optional(),
  })).optional(),
  videoUrl: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const makeServices = () => defineCollection({ type: "content", schema: servicesSchema });
const makeTrabajo  = () => defineCollection({ type: "content", schema: trabajosSchema });

export const collections = {
  services:    makeServices(),
  "services-en": makeServices(),
  "services-ru": makeServices(),
  trabajos:    makeTrabajo(),
  "trabajos-en": makeTrabajo(),
  "trabajos-ru": makeTrabajo(),
};
