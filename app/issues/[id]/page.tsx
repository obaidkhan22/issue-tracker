import prisma from "@/prisma/client";
import { Box, Grid, Flex } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import IssueDetail from "../_components/IssueDetail";
import IssueEditButton from "../_components/IssueEditButton";
import IssueDeleteButton from "../_components/IssueDeleteButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssigneeSelector from "./AssigneeSelector";

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetail issue={issue} />
      </Box>
      {session && (
        <Box>
          <AssigneeSelector issueId={issue.id} />
          <Flex direction="column" gap="3" className="mt-3">
            <IssueEditButton issueId={issue.id} />
            <IssueDeleteButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default IssueDetailPage;
