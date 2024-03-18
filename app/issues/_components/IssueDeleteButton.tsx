import { Button } from "@radix-ui/themes";

const IssueDeleteButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button
      style={{ cursor: "pointer" }}
      color="red"
    >
      Delete Issue
    </Button>
  );
};

export default IssueDeleteButton;
