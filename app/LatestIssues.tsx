
import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import React, { useEffect } from "react";
import { IssueStatusBadge } from "@/app/components";
import Link from "next/link";

const LatestIssues = async () => {
  const latestIssues = await prisma.issue.findMany({
    orderBy: { createAt: "desc" },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <Card>
      <Heading mb="3" ml="2">
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {latestIssues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" gap="2" align="start">
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  {issue.assignedToUser && (
                    <Avatar
                      src={issue.assignedToUser.image!}
                      fallback="?"
                      radius="full"
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
