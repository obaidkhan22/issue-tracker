import { z } from "zod";

const createIssueSchema = z.object({
  title: z.string().min(3).max(225),
  description: z.string().min(10).max(250),
});

export default createIssueSchema;
