import { useEffect, useState } from "react";
import { getStoredDonationApplication } from "../../utils/localStorage";
import { PieChart, Pie, Cell } from "recharts";

function Statistics() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  const hasDonations = getStoredDonationApplication();

  const calculate = ((hasDonations.length / donations.length) * 100).toFixed(1);
  const totalDonation = (100 - calculate).toFixed(1);

  const data = [
    {
      name: "yourdonation",
      value: parseFloat(calculate),
    },
    {
      name: "totaldonation",
      value: parseFloat(totalDonation),
    },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex flex-col mt-5 md:px-10 md:py-10 justify-center items-center ">
      <div>
        <PieChart width={400} height={350}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex justify-center items-center gap-2 text-xs md:text-base">
        <span>Your Donation</span>
        <span className="bg-[#00C49F] w-28 h-3 rounded-sm"> </span>

        <span className="ml-4">Total Donation</span>
        <span className="bg-[#FF444A] w-28 h-3 rounded-sm"> </span>
      </div>
    </div>
  );
}

export default Statistics;
