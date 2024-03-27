import React from "react";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";
import { Metadata } from "next";

const NewIssuePage = async () => {
  const IssueForm = dynamic(
    () => import("@/app/issues/_components/IssueForm"),
    {
      ssr: false,
      loading: () => <IssueFormSkeleton />,
    }
  );
  return <IssueForm />;
};

export default NewIssuePage;

export const metadata: Metadata = {
  title: "Issue Tracker - Add a new Issue",
  description: "Add a new issue with title and description right here.",
};
