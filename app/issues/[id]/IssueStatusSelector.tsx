"use client";
import { Issue } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const IssueStatusSelector = ({ issue }: { issue: Issue }) => {
  const router = useRouter();
  return (
    <Select.Root
      defaultValue={issue.status}
      onValueChange={async (status) => {
        try {
          await axios.patch(`/api/issues/${issue.id}`, {
            status,
          });
          router.refresh();
          toast.success("Issue status updaded successfully.");
        } catch (error) {
          toast.error("Changes could not be saved.");
        }
      }}
    >
      <Select.Trigger placeholder={issue.status} variant="soft" />
      <Select.Content position="popper">
        <Select.Item value="OPEN">OPEN</Select.Item>
        <Select.Item value="IN_PROGRESS">IN_PROGRESS</Select.Item>
        <Select.Item value="CLOSE">CLOSE</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusSelector;
