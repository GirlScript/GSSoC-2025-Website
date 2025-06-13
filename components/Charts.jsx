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
    <div>
      <h3 className="w-full text-center text-[#A7ADFE] mb-3 font-semibold text-xl">Pull Requests</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={pullRequestsData}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="4 0" stroke="#232D6B" />
          <XAxis dataKey="name" interval={0} angle={-15} textAnchor="end" height={60} tick={{ fill: '#A7ADFE', fontSize: 13 }} />
          <YAxis tick={{ fill: '#A7ADFE', fontSize: 13 }} />
          <Bar
            dataKey="value"
            fill="#4C75FF"
            radius={[8, 8, 0, 0]}
            activeBar={<Rectangle fill="#1A4FFF" stroke="#000055" />}
          >
            <LabelList dataKey="value" position="top" style={{ fill: '#fff', fontWeight: 600 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AreaChartComponent() {
  return (
    <div>
      <h3 className="w-full text-center text-[#A7ADFE] mb-3 font-semibold text-xl">Campus Ambassadors</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={campusAmbassadorsData} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="1 1" stroke="#232D6B" />
          <XAxis dataKey="name" interval={0} angle={-15} textAnchor="end" height={60} tick={{ fill: '#A7ADFE', fontSize: 13 }} />
          <YAxis tick={{ fill: '#A7ADFE', fontSize: 13 }} />
          <Tooltip wrapperClassName="border-[20px] border-red-500" contentStyle={{ background: '#232D6B', border: 'none', color: '#fff' }} labelStyle={{ color: '#A7ADFE' }} />
          <Area type="monotone" dataKey="value" stroke="#4C75FF" fill="#A7ADFE" fillOpacity={0.25} strokeWidth={3} dot={{ r: 5, fill: '#4C75FF' }}>
            <LabelList dataKey="value" position="top" style={{ fill: '#fff', fontWeight: 600 }} />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RadarChartComponent() {
  return (
    <div>
      <h3 className="w-full text-center text-[#A7ADFE] mb-4 font-semibold text-xl">LinkedIn Followers</h3>
      <ResponsiveContainer width={300} height={300}>
        <RadarChart 
          cx="55%" 
          cy="50%" 
          outerRadius="95%" 
          data={linkedinFollowersData}
          margin={{ left: 0, right: 0, top: 20, bottom: 10 }}
        >
          <PolarGrid stroke="#232D6B" />
          <PolarAngleAxis dataKey="name" tick={{ fontSize: 16, fill: '#A7ADFE' }} />
          <PolarRadiusAxis tick={{ fill: '#A7ADFE', fontSize: 13 }} />
          <Radar name="Followers" dataKey="value" stroke="#4C75FF" fill="#4C75FF" fillOpacity={0.4} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
