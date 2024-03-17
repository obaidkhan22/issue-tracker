import { z } from "zod";

const createIssueSchema = z.object({
  title: z.string().min(3, "Title should be at least 3 characters.").max(225),
  description: z
    .string()
    .min(10, { message: "Description should be at least 10 characters." })
    .max(250, { message: "Description can be maximum of 250 characters." }),
});

export default createIssueSchema;
