import { z } from "zod";
import { MAX_FILE_SIZE } from "@/lib/constants";

export const createAlbumvalidationSchema = z.object({
  category_type: z.string(),
  title: z.string(),
  genre: z.string(),
  sub_genres: z.string().array(),
  release_date: z.coerce.date(),
  cover_image: z
    .array(
      z.instanceof(File).refine((file) => file.size < MAX_FILE_SIZE, {
        message: "File size must be less than 4MB",
      }),
    )
    .max(1, {
      message: "Maximum 1 files are allowed",
    })
    .nullable(),
  tracks: z.array(
    z.object({
      audio_file: z
        .array(
          z.instanceof(File).refine((file) => file.size < MAX_FILE_SIZE, {
            message: "File size must be less than 4MB",
          }),
        )
        .max(1, {
          message: "Maximum 1 files are allowed",
        })
        .nullable(),
      track_number: z.number(),
      track_title: z.string(),
      featured_artists: z.string().array().optional(),
    }),
  ),
  terms: z.boolean().refine((val) => val, "Please check this box"),
});
