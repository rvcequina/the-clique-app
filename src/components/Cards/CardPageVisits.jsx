import React from "react";
import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { date: "2025-01-15", running: 450, swimming: 300 },
  { date: "2025-02-16", running: 380, swimming: 420 },
  { date: "2025-03-17", running: 520, swimming: 120 },
  { date: "2025-04-18", running: 140, swimming: 550 },
  { date: "2025-05-19", running: 600, swimming: 350 },

]

const chartConfig = {
  running: {
    label: "nurses",
    color: "hsl(var(--chart-1))",
  },
  swimming: {
    label: "patient",
    color: "hsl(var(--chart-2))",
  },
}
// components

export default function CardPageVisits() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <Card>
            <CardHeader>
              <CardTitle>Nurses : Patient</CardTitle>
              <CardDescription>Nurses to Patient Ratio</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        weekday: "short",
                      })
                    }}
                  />
                  <Bar
                    dataKey="running"
                    stackId="a"
                    fill="var(--color-running)"
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="swimming"
                    stackId="a"
                    fill="var(--color-swimming)"
                    radius={[4, 4, 0, 0]}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        }}
                      />
                    }
                    cursor={false}
                    defaultIndex={1}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
}


