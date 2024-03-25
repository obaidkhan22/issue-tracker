import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssueFilter from "./IssueFilter";

const IssueAction = () => {
  return (
    <Flex justify="between">
      <IssueFilter />
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueAction;
