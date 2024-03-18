import { LoadingSkeleton } from "@/app/components";
import { Box, Card, Flex } from "@radix-ui/themes";
const LoadingIssueDetailPage =  () => {
  return (
    <Box className="space-y-3 max-w-xl">
      <LoadingSkeleton/>
      <Flex gap="3">
       <LoadingSkeleton width='4rem'/>
        <LoadingSkeleton width='8rem'/>
      </Flex>
      <Card className="prose">
        <LoadingSkeleton count={3}/>
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
