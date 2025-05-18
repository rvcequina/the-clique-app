import React from "react";
import { TrendingUp } from "lucide-react"
import { LabelList, RadialBar, RadialBarChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {

  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
 
const chartData = [
  { browser: "Laparoscopic Cholecystectomy", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Abdominal Ultrasound", visitors: 200, fill: "var(--color-safari)" },
  { browser: "appendectomy", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "minor cases", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "X-Ray",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "MRI",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Appendectomy",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Minor",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
}

export default function CardSocialTraffic() {

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
              <CardTitle>Medical Cases</CardTitle>
              <CardDescription>January - May 2025</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <RadialBarChart
                  data={chartData}
                  startAngle={-90}
                  endAngle={380}
                  innerRadius={30}
                  outerRadius={110}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel nameKey="browser" />}
                  />
                  <RadialBar dataKey="visitors" background>
                    <LabelList
                      position="insideStart"
                      dataKey="browser"
                      className="fill-white capitalize mix-blend-luminosity"
                      fontSize={11}
                    />
                  </RadialBar>
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Showing total of Medical Procedures for the last 6 months
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

