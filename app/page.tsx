import IssueChart from "./IssueChart";
import LatestIssues from "./LatestIssues";

export default function Home() {
  return <IssueChart open={20} inProgress={10} close={15} />;
}
