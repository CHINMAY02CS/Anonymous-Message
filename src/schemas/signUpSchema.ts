import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .max(20, "Username should not be long than 20 characters")
  .regex(/^[a-zA-Z0-9_]+&/, "Username must not contain special characters");

export const signupSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(6, {
    message: "Password must be atleast 6 characters",
  }),
});