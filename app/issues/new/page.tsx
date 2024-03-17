"use client";
import { Text, Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import createIssueSchema from "@/app/validationSchemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "@/app/components/Spinner";
type IssueForm = z.infer<typeof createIssueSchema>;
const NewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmmiting, setSubmmiting] = useState(false);
  const router = useRouter();

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-3">
          <Callout.Text color="red">{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmmiting(true);
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setSubmmiting(false);
            setError("An unexpected error occured.");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        {errors.title && (
          <Text as="p" color="red">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description..." {...field} />
          )}
        />
        {errors.description && (
          <Text as="p" color="red">
            {errors.description.message}
          </Text>
        )}
        <Button disabled={isSubmmiting}>
          Submit New Issue {isSubmmiting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
