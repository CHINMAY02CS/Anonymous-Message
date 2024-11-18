import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(5, "Content must be atleast of 5 characters")
    .max(300, "message should not be more than 300 characters"),
});
