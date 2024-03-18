import React from "react";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";

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
