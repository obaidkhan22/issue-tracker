import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssueFilter from "./IssueFilter";
import { Suspense } from "react";

const IssueAction = () => {
  return (
    <Flex justify="between">
      <Suspense>
        <IssueFilter />
      </Suspense>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueAction;
