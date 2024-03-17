import { z } from "zod";

const createIssueSchema = z.object({
  title: z.string().min(3, { message: "Title is required." }).max(225),
  description: z
    .string()
    .min(10, { message: "Description is required." })
    .max(250),
});

export default createIssueSchema;
