import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";


const Statistics = () => {
    const data = [
        { name: "Total", value: 720 - (60 * 4 + 54 + 30 + 28 + 58 + 60) },
        { name: "Assignment 01", value: 60 },
        { name: "Assignment 02", value: 60 },
        { name: "Assignment 03", value: 60 },
        { name: "Assignment 04", value: 60 },
        { name: "Assignment 05", value: 54 },
        { name: "Assignment 06", value: 30 },
        { name: "Assignment 07", value: 28 },
        { name: "Assignment 08", value: 58 },
        { name: "Assignment 09", value: 60 }
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "black", "grey", "Blue", "salmon", "pink"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
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
    }
    return (
        <div className="w-fit mx-auto">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Statistics;