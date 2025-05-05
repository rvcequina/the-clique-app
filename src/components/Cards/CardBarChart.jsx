import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
  { month: "January", active: 186, discharged: 80 },
  { month: "February", active: 305, discharged: 200 },
  { month: "March", active: 237, discharged: 120 },
  { month: "April", active: 73, discharged: 190 },
  { month: "May", active: 209, discharged: 130 },
  { month: "June", active: 214, discharged: 140 },
]

const chartConfig = {
  active: {
    label: "active",
    color: "hsl(var(--chart-1))",
  },
  discharged: {
    label: "discharged",
    color: "hsl(var(--chart-2))",
  },
} 

const  CardBarChart=() =>{
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
         <Card >
      <CardHeader>
        <CardTitle>Performance Indicator</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent >
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="discharged"
              type="natural"
              fill="var(--color-discharged)"
              fillOpacity={0.4}
              stroke="var(--color-discharged)"
              stackId="a"
            />
            <Area
              dataKey="active"
              type="natural"
              fill="var(--color-active)"
              fillOpacity={0.4}
              stroke="var(--color-active)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - May 2025
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
    </div>
   
  )
}

export default CardBarChart