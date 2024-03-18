import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";
import React from "react";
import Markdown from "react-markdown";
interface Props {
  issue: Issue;
}
const IssueDetail = ({ issue }: Props) => {
  return (
    <div className="space-y-3">
      <Heading>{issue.title}</Heading>
      <Flex gap="3">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full">
        <Markdown>{issue.description}</Markdown>
      </Card>
    </div>
  );
};

export default IssueDetail;
