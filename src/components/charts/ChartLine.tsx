import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    pt: 1,
    pp: 20,
  },
  {
    name: "Page B",
    pt: 2,
    pp: 17,
  },
  {
    name: "Page C",
    pt: 2,
    pp: 16,
  },
  {
    name: "Page D",
    pt: 3,
    pp: 4,
  },
  {
    name: "Page E",
    pt: 10,
    pp: 5,
  },
  {
    name: "Page F",
    pt: 12,
    pp: 5,
  },
  {
    name: "Page G",
    pt: 20,
    pp: 1,
  },
];
export function ChartLine() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="1" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pp"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="pt" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
