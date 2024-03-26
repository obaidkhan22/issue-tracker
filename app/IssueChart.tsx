'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
interface Props {
  open: number;
  inProgress: number;
  close: number;
}
const IssueChart = ({ open, inProgress, close }: Props) => {
  const data: { label: string; value: number }[] = [
    { label: "Open", value: open },
    { label: "Inprogress", value: inProgress },
    { label: "Closed", value: close },
  ];
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={data}>
        <XAxis dataKey="label" />
        <YAxis />
        <Bar barSize={60} style={{fill: 'var(--accent-9)'}} dataKey="value" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IssueChart;
