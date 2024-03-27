import IssueForm from "../../_components/IssueForm";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../../_components/IssueFormSkeleton";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Metadata } from "next";
const IssueEditPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  const IssueForm = dynamic(
    () => import("@/app/issues/_components/IssueForm"),
    {
      ssr: false,
      loading: () => <IssueFormSkeleton />,
    }
  );
  return <IssueForm issue={issue} />;
};

export default IssueEditPage;

export const metadata: Metadata = {
  title: "Issue Tracker - Edit issue",
  description: "Edit informations about a specific issue here.",
};
