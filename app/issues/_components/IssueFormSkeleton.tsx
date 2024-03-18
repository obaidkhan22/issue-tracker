import { LoadingSkeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";
import React from "react";

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <LoadingSkeleton height="2rem" />
      <LoadingSkeleton height="24rem" />
    </Box>
  );
};

export default IssueFormSkeleton;
