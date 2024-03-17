import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.status}</p>
      <p>{issue.createAt.toDateString()}</p>
      <p>{issue.description}</p>
    </div>
  );
};

export default IssueDetailPage;
