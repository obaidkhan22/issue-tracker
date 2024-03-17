"use client";
import { Box, Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <Box className="max-w-xl space-y-4">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description..." />
      <Button>Submit New Issue</Button>
    </Box>
  );
};

export default NewIssuePage;
