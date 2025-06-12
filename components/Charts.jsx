import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Rectangle,
  LabelList,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";

const pullRequestsData = [
  {
    name: "GSSoC'24",
    value: 29000,
  },
  {
    name: "GSSoC'23",
    value: 27000,
  },
  {
    name: "GSSoC'24 Ext",
    value: 36000,
  }
];

const campusAmbassadorsData = [
  {
    name: "GSSoC'24",
    value: 29000,
  },
  {
    name: "GSSoC'23",
    value: 27000,
  },
  {
    name: "GSSoC'24 Ext",
    value: 36000,
  }
];

const linkedinFollowersData = [
  {
    name: "GSSoC'24",
    value: 28000,
  },
  {
    name: "GSSoC'23",
    value: 34000,
  },
  {
    name: "GSSoC'24 Ext",
    value: 48000,
  }
];

export function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={pullRequestsData}
        margin={{
          top: 20,
          right: 10,
          left: 10,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="4 0" />
        <XAxis dataKey="name" interval={0} angle={-15} textAnchor="end" height={80} />
        <YAxis />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Bar
          dataKey="value"
          fill="#4C75FF"
          activeBar={<Rectangle fill="#1A4FFF" stroke="#000055" />}
        >
          <LabelList dataKey="value" position="top" className="text-sm" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function AreaChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={campusAmbassadorsData} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" interval={0} angle={-15} textAnchor="end" height={80} />
        <YAxis />
        {/* <Tooltip /> */}
        <Area type="monotone" dataKey="value" stroke="#4C75FF" fill="#A7ADFE" fillOpacity={0.3}>
          <LabelList dataKey="value" position="top" className="text-sm" />
        </Area>
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function RadarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={linkedinFollowersData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" tick={{ fontSize: 12 }} />
        <PolarRadiusAxis />
        <Radar name="Value" dataKey="value" stroke="#4C75FF" fill="#4C75FF" fillOpacity={0.4} />
        {/* <Legend /> */}
        {/* <Tooltip /> */}
      </RadarChart>
    </ResponsiveContainer>
  );
}
