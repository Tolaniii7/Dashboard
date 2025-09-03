"use client"

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react"

export interface StatusMetric {
  title: string
  value: number
  icon: JSX.Element
}

export const statusData: StatusMetric[] = [
  {
    title: "Critical",
    value: 5,
    icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
  },
  {
    title: "Warnings",
    value: 12,
    icon: <AlertCircle className="h-6 w-6 text-yellow-500" />,
  },
  {
    title: "Passing",
    value: 45,
    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
  },
]


import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../components/ui/chart";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import type { JSX } from "react"

export const description = "A radial chart with stacked sections"

const chartData = [{ month: "january", desktopVisibility: Math.floor(Math.random() * 100), mobileVisibility: Math.floor(Math.random() * 100) }]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

function AppRadialChart() {
  const totalVisitors = chartData[0].desktopVisibility/10 + chartData[0].mobileVisibility/10;

  return (
    <Card className="flex flex-col max-md:p-5 mx-10 bg-gray-900">
      <CardHeader className="items-center ">
        <CardTitle>Site Optimization</CardTitle>
        <CardDescription>LLM visibility optimization status</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Overall Score
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktopVisibility"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobileVisibility"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>


        <div className="flex flex-col  gap-4 px-4 ">
          {statusData.map((status) => (
            <div key={status.title} className="p-4 flex justify-between items-center border rounded-2xl border-#fff text-sm">
              <div className="flex gap-4 items-center">
                 <p> {status.icon}</p>
                 <span className="text-muted-foreground">{status.title}</span>
              </div>
                <p className="p-2 border rounded-2xl border-#fff font-medium">{status.value}</p>
            </div>
          ))}
        </div>
    </Card>
  )
}


export default AppRadialChart
