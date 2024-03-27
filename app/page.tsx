import { Flex, Grid } from "@radix-ui/themes";
import IssueChart from "./IssueChart";
import LatestIssues from "./LatestIssues";
import IssuesSummary from "./IssuesSummary";
import prisma from "@/prisma/client";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const close = await prisma.issue.count({ where: { status: "CLOSE" } });
  const props = { open, inProgress, close };
  return (
    <>
      <Grid columns={{ initial: "1", md: "2" }} gap="5">
        <Flex direction="column" gap="5">
          <IssuesSummary {...props} />
          <IssueChart {...props} />
        </Flex>
        <LatestIssues />
      </Grid>
    </>
  );
}
