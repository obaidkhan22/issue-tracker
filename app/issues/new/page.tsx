"use client";
import { Box, Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useEffect, useRef } from "react";

const NewIssuePage = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
  });
  return (
    <Box className="max-w-xl space-y-4">
      <TextField.Root>
        <TextField.Input placeholder="Title" ref={ref} />
      </TextField.Root>
      <SimpleMDE placeholder="Description..." />
      <Button>Submit New Issue</Button>
    </Box>
  );
};

export default NewIssuePage;
