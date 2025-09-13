
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
    <div className="  p-10 xl:w-[50%]  flex-col   ">
            <div className="flex w-full justify-around bg-[var(--brand-accent)] rounded-2xl items-center p-2  gap-4 mb-10">
                <button className={`text-[var(--brand-50)] p-2 rounded-3xl text-sm transition-all duration-300 ease-in-out ${isActive === "v & p" ? "bg-[var(--brand-50)] text-[var(--brand-950)] dark:bg-[var(--brand-950)] dark:text-[var(--brand-50)] w-[50%] scale-110 shadow-lg  px-4" : "hover:scale-105  hover:bg-gray-700 px-4"}`} onClick={()=>setIsActive('v & p')}>
                    Visibility & Presence
                </button>
                <button className={` text-[var(--brand-50)] p-2 rounded-3xl text-sm transition-all duration-300 ${isActive === "m & c" ? "bg-[var(--brand-50)] text-[var(--brand-950)] dark:bg-[var(--brand-950)] dark:text-[var(--brand-50)] w-[50%] scale-110 shadow-lg  px-4 " : "hover:scale-105 hover:bg-gray-700 px-4" }`} onClick={()=>setIsActive('m & c')}>
                    Mentions & Citations
                </button>
            </div>

      <Card className="dark:bg-[var(--brand-950)]  bg-[#e4e2e2] border-0" >
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
                     style: {  textAnchor: "middle" },
                     
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
                  stroke="var(--brand-500)"
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
                    tickLine={true}
                    axisLine={true}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Line
                    dataKey='mentions'
                    type="monotone"
                    stroke="var(--brand-500)"
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
                  Presence % - <span className="text-[var(--brand-500)]">Visibility Score </span>
                </p>
          </CardFooter>
        </Card>
    </div>
  )
}

export default AppBarChart
