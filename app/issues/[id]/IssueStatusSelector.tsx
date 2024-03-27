"use client";

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React from "react";

const IssueStatusSelector = ({ issueStatus }: { issueStatus: Status }) => {
  return (
    <Select.Root defaultValue={issueStatus}>
      <Select.Trigger placeholder={issueStatus} variant="soft" />
      <Select.Content position='popper'>
        <Select.Item value="OPEN">OPEN</Select.Item>
        <Select.Item value="IN_PROGRESS">IN_PROGRESS</Select.Item>
        <Select.Item value="CLOSE">CLOSE</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusSelector;
