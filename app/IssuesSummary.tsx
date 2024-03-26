import { Status } from "@prisma/client";
import { Text, Card, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
interface Props {
  open: number;
  inProgress: number;
  close: number;
}
const IssuesSummary = ({ open, inProgress, close }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "Inprogress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: close, status: "CLOSE" },
  ];
  return (
    <Flex gap="5">
      {containers.map((container) => (
        <Link
          key={container.value}
          className="text"
          href={`/issues/list?status=${container.status}`}
        >
          <Card>
            <Flex direction="column" gap="1">
              <Text className="text-md text-zinc-400 font-medium">
                {container.label}
              </Text>
              <Text className="font-bold text-xl">{container.value}</Text>
            </Flex>
          </Card>
        </Link>
      ))}
    </Flex>
  );
};

export default IssuesSummary;
