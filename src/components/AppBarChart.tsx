
"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
} from "../components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../components/ui/chart"
import { useState } from "react";

export const description = "A multiple line chart"

export const chartData = [
  { month: "Jan", presence: 23, visibility: 4.5, mentions: 120, citations: 15 },
  { month: "Feb", presence: 30, visibility: 5.0, mentions: 140, citations: 18 },
  { month: "Mar", presence: 28, visibility: 5.2, mentions: 160, citations: 22 },
  { month: "Apr", presence: 35, visibility: 6.0, mentions: 180, citations: 25 },
  { month: "May", presence: 40, visibility: 6.2, mentions: 200, citations: 30 },
  { month: "Jun", presence: 42, visibility: 7.0, mentions: 220, citations: 35 },
]


const chartConfig = {
  desktop: {
    label: "Presence %",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Visibility Score",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig


type Tab = 'v & p' | 'm & c'


const AppBarChart = () => {
    const [isActive, setIsActive] = useState<Tab>('v & p');


  return (
    <div className=" bg-gray-900 p-10 xl:w-[60%]  flex-col   ">
            <div className="flex w-full justify-around bg-gray-800 rounded-2xl items-center p-2  gap-4 mb-10">
                <button className={`text-white p-2 rounded-3xl text-sm transition-all duration-300 ease-in-out ${isActive === "v & p" ? "bg-blue-800 w-[50%] scale-110 shadow-lg border px-4" : "hover:scale-105  hover:bg-gray-700 px-4"}`} onClick={()=>setIsActive('v & p')}>
                    Visibility & Presence
                </button>
                <button className={`text-white p-2 rounded-3xl text-sm transition-all duration-300 ${isActive === "m & c" ? "bg-blue-800 scale-110 w-[50%] shadow-lg border px-4 " : "hover:scale-105 hover:bg-gray-700 px-4" }`} onClick={()=>setIsActive('m & c')}>
                    Mentions & Citations
                </button>
            </div>

      <Card className="bg-gray-950" >
        {isActive === 'v & p' && (
          <CardContent>
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data = {chartData }
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                 <YAxis
                   label={{
                     value: "Presence & Visibility Score",
                     angle: -90,
                     position: "insideLeft",
                     style: { textAnchor: "middle" },
                   }}
                 />
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                  dataKey='presence'
                  type="monotone"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="visibility"
                  type="monotone"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
          )}


          {isActive === 'm & c' && (
            <CardContent>
              <ChartContainer config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data = {chartData }
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                   <YAxis
                     label={{
                       value: "Presence & Visibility Score",
                       angle: -90,
                       position: "insideLeft",
                       style: { textAnchor: "middle" },
                     }}
                   />
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Line
                    dataKey='mentions'
                    type="monotone"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="citations"
                    type="monotone"
                    stroke="var(--color-mobile)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
            )}

          <CardFooter>
                <p className="mx-auto text-green-500 font-sm">
                  Presence % - <span className="text-white">Visibility Score </span>
                </p>
          </CardFooter>
        </Card>
    </div>
  )
}

export default AppBarChart
