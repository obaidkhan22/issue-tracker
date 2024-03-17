import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const IssueStatusBadge = ({ status }: { status: Status }) => {
  const statusMap: Record<
    Status,
    { label: string; color: "red" | "violet" | "green" }
  > = {
    OPEN: { label: "Open", color: "red" },
    IN_PROGRESS: { label: "In_PROGRESS", color: "violet" },
    CLOSE: { label: "CLOSE", color: "green" },
  };
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
