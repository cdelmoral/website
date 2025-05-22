import { LibraryItemType } from "@types";
import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const reads = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    url: z.string().url().optional(),
    type: z.nativeEnum(LibraryItemType),
  }),
});

export const collections = { work, reads };
