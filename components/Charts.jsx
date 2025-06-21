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
  Radar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  RadialBarChart,
  RadialBar,
} from "recharts";

const pullRequestsData = [
  {
    name: "GSSoC'23",
    value: 7000,
  },
  {
    name: "GSSoC'24",
    value: 18000,
  },
  {
    name: "GSSoC'24 Ext",
    value: 21000,
  },
];

const mentorRegistrationsData = [
  {
    name: "GSSoC'23",
    value: 180,
  },
  {
    name: "GSSoC'24",
    value: 400,
  },
  {
    name: "GSSoC'24 Ext",
    value: 700,
  },
];

const campusAmbassadorsData = [
  {
    name: "GSSoC'23",
    value: 100,
  },
  {
    name: "GSSoC'24",
    value: 700,
  },
  {
    name: "GSSoC'24 Ext",
    value: 1083,
  },
];

const linkedinFollowersData = [
  {
    name: "GSSoC'23",
    value: 34000,
  },
  {
    name: "GSSoC'24",
    value: 28000,
  },
  {
    name: "GSSoC'24 Ext",
    value: 48000,
  },
];

const projectAdminRegistrationsData = [
  {
    name: "GSSoC'23",
    value: 18000,
  },
  {
    name: "GSSoC'24",
    value: 24000,
  },
  {
    name: "GSSoC'24 Ext",
    value: 29000,
  },
];

const contributorsMakingItOntoLeaderboardData = [
  {
    name: "GSSoC'23",
    value: 26000,
  },
  {
    name: "GSSoC'24",
    value: 31000,
  },
  {
    name: "GSSoC'24 Ext",
    value: 35000,
  },
];

const registrationsFromContributorsData = [
  {
    name: "GSSoC'23",
    value: 33000,
  },
  {
    name: "GSSoC'24",
    value: 40000,
  },
  {
    name: "GSSoC'24 Ext",
    value: 47000,
  },
];

const COLORS = ["#4C75FF", "#1A4FFF", "#A7ADFE"];

// Format number to k format
const formatNumber = (value) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}k`;
  }
  return value;
};

export function BarChartComponent() {
  return (
    <div>
      <h3 className="w-full text-center text-[#A7ADFE] mb-3 font-semibold text-xl">
        Pull Requests
      </h3>
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
          <XAxis
            dataKey="name"
            interval={0}
            angle={-15}
            textAnchor="end"
            height={60}
            tick={{ fill: "#A7ADFE", fontSize: 13 }}
          />
          <YAxis
            tick={{ fill: "#A7ADFE", fontSize: 13 }}
            tickFormatter={formatNumber}
          />
          <Bar
            dataKey="value"
            fill="#4C75FF"
            radius={[4, 4, 0, 0]}
            activeBar={<Rectangle fill="#1A4FFF" stroke="#000055" width={3} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AreaChartComponent() {
  return (
    <div>
      <h3 className="w-full text-center text-[#A7ADFE] mb-3 font-semibold text-xl">
        Campus Ambassadors
      </h3>
      <ResponsiveContainer width="90%" height={300} className="px-1">
        <AreaChart
          data={campusAmbassadorsData}
          margin={{ top: 20, right: 15, left: 10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="1 1" stroke="#232D6B" />
          <XAxis
            dataKey="name"
            interval={0}
            angle={-15}
            textAnchor="end"
            height={60}
            tick={{ fill: "#A7ADFE", fontSize: 13 }}
          />
          <YAxis
            tick={{ fill: "#A7ADFE", fontSize: 13 }}
            tickFormatter={formatNumber}
          />
          <Tooltip
            wrapperClassName="border-[20px] border-red-500"
            contentStyle={{
              background: "#232D6B",
              border: "none",
              color: "#fff",
            }}
            labelStyle={{ color: "#A7ADFE" }}
            formatter={formatNumber}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#4C75FF"
            fill="#A7ADFE"
            fillOpacity={0.25}
            strokeWidth={3}
            dot={{ r: 3, fill: "#4C75FF" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RadarChartComponent() {
  return (
    <div>
      <h3 className="w-full text-center text-[#A7ADFE] font-semibold text-xl">
        LinkedIn Followers
      </h3>
      <ResponsiveContainer width={430} height={300}>
        <RadarChart
          cx="55%"
          cy="50%"
          outerRadius="60%"
          data={linkedinFollowersData}
          margin={{ left: 0, right: 0, top: 20, bottom: 10 }}
        >
          <PolarGrid stroke="#232D6B" />
          <PolarAngleAxis
            dataKey="name"
            tick={{ fontSize: 13, fill: "#A7ADFE" }}
            className="text-center text-sm md:text-base"
          />
          <PolarRadiusAxis
            tick={{ fill: "#A7ADFE", fontSize: 11 }}
            tickFormatter={formatNumber}
          />
          <Radar
            name="Followers"
            dataKey="value"
            stroke="#4C75FF"
            fill="#4C75FF"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function LineChartComponent() {
  return (
    <div>
      <h3 className="w-full text-center text-[#A7ADFE] mb-3 font-semibold text-xl">
        Project Admin Registrations
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={projectAdminRegistrationsData}
          margin={{ top: 20, right: 10, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#232D6B" />
          <XAxis dataKey="name" tick={{ fill: "#A7ADFE", fontSize: 11 }} />
          <YAxis
            tick={{ fill: "#A7ADFE", fontSize: 13 }}
            tickFormatter={formatNumber}
          />
          <Tooltip
            contentStyle={{
              background: "#232D6B",
              border: "none",
              color: "#fff",
            }}
            labelStyle={{ color: "#A7ADFE" }}
            formatter={formatNumber}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4C75FF"
            strokeWidth={3}
            dot={{ r: 4, fill: "#4C75FF" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function HorizontalBarChartComponent() {
  return (
    <div>
      <h3 className="w-full text-center text-[#A7ADFE] mb-3 font-semibold text-xl">
        Contributor Registrations
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={registrationsFromContributorsData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#232D6B" />
          <XAxis
            type="number"
            tick={{ fill: "#A7ADFE", fontSize: 13 }}
            tickFormatter={formatNumber}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={80}
            tick={{ fill: "#A7ADFE", fontSize: 13 }}
          />
          <Tooltip
            contentStyle={{
              background: "#232D6B",
              border: "none",
              color: "#fff",
            }}
            labelStyle={{ color: "#A7ADFE" }}
            formatter={formatNumber}
          />
          <Bar
            dataKey="value"
            fill="#4C75FF"
            radius={[0, 4, 4, 0]}
            activeBar={<Rectangle fill="#1A4FFF" stroke="#000055" />}
            barSize={45}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RadialBarChartComponent() {
  return (
    <div>
      <h3 className="w-full text-center text-[#A7ADFE] mb-3 font-semibold text-xl">
        Mentor Registrations
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart
          cx="50%"
          cy="40%"
          innerRadius="30%"
          outerRadius="90%"
          data={mentorRegistrationsData}
          barSize={25}
        >
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
          >
            {mentorRegistrationsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </RadialBar>
          <Legend
            iconSize={10}
            layout="horizontal"
            verticalAlign="bottom"
            formatter={(value) => <span style={{ color: '#A7ADFE' }}>{value}</span>}
          />
          <Tooltip
            contentStyle={{
              background: "#232D6B",
              border: "none",
              color: "#fff",
            }}
            labelStyle={{ color: "#A7ADFE" }}
            formatter={formatNumber}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ComposedChartComponent() {
  return (
    <div>
      <h3 className="w-full text-center text-[#A7ADFE] mb-3 font-semibold text-xl">
        Active Participants
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={contributorsMakingItOntoLeaderboardData}
          margin={{ top: 20, right: 0, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#232D6B" />
          <XAxis dataKey="name" tick={{ fill: "#A7ADFE", fontSize: 11 }} />
          <YAxis
            tick={{ fill: "#A7ADFE", fontSize: 13 }}
            tickFormatter={formatNumber}
          />
          <Tooltip
            contentStyle={{
              background: "#232D6B",
              border: "none",
              color: "#fff",
            }}
            labelStyle={{ color: "#A7ADFE" }}
            formatter={formatNumber}
          />
          <Area
            type="monotone"
            dataKey="value"
            fill="#4C75FF"
            fillOpacity={0.2}
            stroke="#4C75FF"
          />
          <Bar dataKey="value" fill="#1A4FFF" radius={[4, 4, 0, 0]} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#A7ADFE"
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
