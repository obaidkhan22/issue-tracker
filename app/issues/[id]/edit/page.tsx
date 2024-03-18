import React from "react";
import IssueForm from "../../_components/IssueForm";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../../_components/IssueFormSkeleton";
const IssueEditPage = () => {
  const IssueForm = dynamic(
    () => import("@/app/issues/_components/IssueForm"),
    {
      ssr: false,
      loading: () => <IssueFormSkeleton />,
    }
  );
  return <IssueForm />;
};

export default IssueEditPage;
