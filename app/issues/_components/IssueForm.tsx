"use client";
import { Spinner, ErrorMessage } from "@/app/components";
import createIssueSchema from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { z } from "zod";
import { Issue } from "@prisma/client";
interface Props {
  issue?: Issue;
}
type IssueFormData = z.infer<typeof createIssueSchema>;
const IssueForm = ({ issue }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(createIssueSchema),
  });

  const [error, setError] = useState("");
  const [isSubmmiting, setSubmmiting] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setFocus("title");
  }, [setFocus]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmmiting(true);
      if (issue) await axios.patch(`/api/issues/${issue.id}`, data);
      else await axios.post("/api/issues", data);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setSubmmiting(false);
      setError("An unexpected error occured.");
    }
  });
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-3">
          <Callout.Text color="red">{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className=" space-y-4" onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input
            defaultValue={issue?.title}
            autoFocus={true}
            placeholder="Title"
            {...register("title")}
          />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMdeReact placeholder="Description..." {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmmiting}>
          {issue ? "Update Issue" : "Submit New Issue"}
          {isSubmmiting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
