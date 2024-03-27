import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";
import { Pagination } from "../../components";
import IssueAction from "./IssueAction";
import IssueTable, { IssueQuery, columnNames } from "./IssueTable";
import { Status } from "@prisma/client";
import { Metadata } from "next";
interface Props {
  searchParams: IssueQuery;
}
const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;
  const where = { status };
  const pageSize = 10;
  const page = parseInt(searchParams.page) || 1;
  const issuesCount = await prisma.issue.count({
    where,
  });
  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  return (
    <Flex direction="column" gap="4">
      <IssueAction />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination
        pageSize={pageSize}
        itemCount={issuesCount}
        currentPage={page}
      />
    </Flex>
  );
};

export default IssuesPage;

export const metadata: Metadata = {
  title: "Issue Tracker - Issues List",
  description: "All the issues are provided in this page. Check it out.",
};
