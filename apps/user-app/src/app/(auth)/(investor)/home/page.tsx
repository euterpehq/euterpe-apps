"use client";
import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Swap from "@/partials/exchange/Swap";
import { useRouter } from "next/navigation";
//import { RiTokenSwapFill } from "react-icons/ri";
//import { FaSpotify } from "react-icons/fa6";
import {
  ChevronRight,
  ChevronUp,
  Info,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Image from "next/image";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { getArtistTokens } from "@/blockchain/token.interaction";
import { ArtistToken } from "@/entities";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const pieData = [
  { name: "Token A", value: 400 },
  { name: "Token B", value: 300 },
  { name: "Token C", value: 200 },
];

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import CoinIcon from "@/assets/icons/coin-vertical.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TbArrowNarrowDown, TbArrowNarrowUp } from "react-icons/tb";

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Your Token",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Average Token",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

type Activity = {
  id: number;
  description: string;
  time: string;
};

const activities: Activity[] = [
  { id: 1, description: "Purchased 10 EUT", time: "2 hours ago" },
  { id: 2, description: "Connected Spotify account", time: "1 day ago" },
];

// Colors for the pie chart slices
const COLORS = ["#1eab1a", "#87491b"];
export default function Page() {
  return (
    <main>
      <div className="max-w-9xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
        <Dashboard />
        <section className="mt-8 flex w-full flex-col items-center justify-between gap-x-2 gap-y-4 md:flex-row">
          <div className="w-full rounded-[16px] border-[0.5px] bg-white/[0.02]  px-4 py-4 shadow-md md:w-[50%]">
            <TopToken />
          </div>
          <div className="w-full rounded-[16px]  border-[0.5px] bg-white/[0.02] px-4 py-7 shadow-md md:w-[50%]">
            <section className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-x-4">
                <h3>Greed Index</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className=" flex items-center gap-1">
                        <Info size={14} className="text-muted-foreground" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">
                        We're actively developing the top tokens
                        <br /> for artist. Stay tuned!
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <h2 className="justify-stary flex cursor-pointer items-center gap-x-2 text-sm text-primary hover:underline">
                See all <ChevronRight size={15} />{" "}
              </h2>
            </section>
            {/* Pie Chart */}
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[250px] w-full"
            >
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value" // This key refers to the value in the data
                  nameKey="name" // This key refers to the name or category of each pie slice
                  cx="50%" // Center X position
                  cy="50%" // Center Y position
                  outerRadius={100} // Size of the Pie
                  fill="var(--color-desktop)" // Default fill color
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      formatter={(value, name) => [`${value} units`, `${name}`]}
                      labelFormatter={(value, name) => `${name}`} // Fixing labelFormatter to show the name instead of "undefined"
                      indicator="dot"
                    />
                  }
                />
              </PieChart>
            </ChartContainer>
          </div>
        </section>
        <RecentActivity />
      </div>
    </main>
  );
}

function Dashboard() {
  const [timeRange, setTimeRange] = useState("90d");
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });
  return (
    <section className="w-full pb-10">
      {/* chart */}
      <div className="mt-6 w-full">
        <Card className="rounded-[16px] border-[0.5px] bg-white/[0.02] md:h-96">
          <CardHeader className="flex items-center gap-2 space-y-0 border-b py-6 sm:flex-row">
            <div className="grid flex-1 gap-1 text-center sm:text-left">
              <CardTitle className="">
                <h2 className="flex items-center justify-start gap-x-3 text-xl font-semibold">
                  Balance <ChevronRight size={20} />{" "}
                </h2>
              </CardTitle>
              <CardDescription>
                <div className="mt-2 flex items-end justify-start gap-x-3 text-5xl font-semibold">
                  $3,200<span className="-ms-2 text-muted">.80</span>
                  <h5 className="-ms-2  flex items-center justify-start gap-x-1 text-sm text-green-500">
                    <ChevronUp size={15} /> 85,66%
                  </h5>
                </div>
              </CardDescription>
            </div>

            <div className="flex w-fit cursor-pointer items-center gap-2 rounded-lg border-[0.5px] bg-background p-1.5 font-azeret text-[0.688rem] sm:ml-auto">
              <div
                className={cn(
                  "px-2 py-0.5",
                  timeRange === "7d" && "rounded-sm bg-primary/5",
                )}
                onClick={() => setTimeRange("7d")}
              >
                1W
              </div>
              <div
                className={cn(
                  "px-2 py-0.5",
                  timeRange === "30d" && "rounded-sm bg-primary/5",
                )}
                onClick={() => setTimeRange("30d")}
              >
                1M
              </div>
              <div
                className={cn(
                  "px-2 py-0.5",
                  timeRange === "90d" && "rounded-sm bg-primary/5",
                )}
                onClick={() => setTimeRange("90d")}
              >
                3M
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-5 pt-4 sm:pt-6">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[250px] w-full"
            >
              <AreaChart data={filteredData}>
                <defs>
                  <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-desktop)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-desktop)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-mobile)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-mobile)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });
                      }}
                      indicator="dot"
                    />
                  }
                />
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="url(#fillMobile)"
                  stroke="var(--color-mobile)"
                  stackId="a"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="url(#fillDesktop)"
                  stroke="var(--color-desktop)"
                  stackId="a"
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function TopToken() {
  const router = useRouter();
  const [topTokens, setTopTokens] = useState<ArtistToken[]>([]);

  const { isPending, error, data } = useQuery({
    queryKey: ["getArtistTokens"],
    queryFn: getArtistTokens,
  });

  useEffect(() => {
    if (data) {
      const sortedTokens = [...data].sort(
        (a, b) => parseFloat(b.totalSupply) - parseFloat(a.totalSupply),
      );
      setTopTokens(sortedTokens.slice(0, 3)); // Fetch the top 3 tokens
    }
  }, [data]);

  const seeAllToken = () => {
    router.push("/explore");
  };

  if (isPending) {
    return (
      <div className="flex h-72 w-full items-center justify-center px-3 pb-10">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-72 w-full items-center justify-center px-3 pb-10 ">
        Error loading tokens
      </div>
    );
  }

  return (
    <>
      <section className="flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-start gap-x-4">
          <h3>Top Tokens</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-1">
                  <Info size={14} className="text-muted-foreground" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">
                  We're actively developing the top tokens
                  <br /> for artists. Stay tuned!
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <h2
          onClick={seeAllToken}
          className="flex cursor-pointer items-center justify-start gap-x-2 text-sm text-primary hover:underline"
        >
          See all <ChevronRight size={15} />
        </h2>
      </section>

      {topTokens.map((token) => (
        <Link key={token.address} href={`/token/${token.address}`}>
          <div className="mt-4 flex h-[70px] w-full items-center justify-between rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-primary/5 hover:shadow-md">
            <div className="flex items-center justify-start gap-x-3">
              <div className="h-14 w-14 rounded-full">
                <Image
                  src={CoinIcon}
                  alt="coin"
                  className="rounded-full"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h5>{token.name}</h5>
                <h5 className="text-sm text-gray-600">{token.symbol}</h5>
              </div>
            </div>
            <div>
              {parseFloat(token.totalSupply) > 0 ? (
                <TrendingUp className="text-green-500" size={40} />
              ) : (
                <TrendingDown className="text-red-500" size={40} />
              )}
            </div>
            <div className="flex flex-col">
              <h5 className="ms-2">0.0001</h5>
              <h5
                className={`flex items-center justify-start gap-x-1 text-sm ${parseFloat(token.totalSupply) > 0 ? "text-green-500" : "text-red-500"}`}
              >
                <ChevronUp size={15} /> 0.00%
              </h5>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

function RecentActivity() {
  return (
    <section className="mt-10 flex w-full flex-wrap  justify-between gap-x-10 rounded-[16px] rounded-lg border-[0.5px]  bg-white/[0.02] px-4 py-4 shadow-md shadow-md">
      <div className="w-full">
        <section className="flex items-center justify-between px-4">
          <div className="flex items-center justify-start gap-x-4">
            <h3>Recent Activities</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className=" flex items-center gap-1">
                    <Info size={14} className="text-muted-foreground" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">
                    We're actively working.
                    <br /> Stay tuned!
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <h2 className="justify-stary flex items-center gap-x-2 text-sm text-primary hover:underline">
            See all <ChevronRight size={15} />{" "}
          </h2>
        </section>
        <div className="hover:shaodow-md mt-8 flex h-[70px] w-full items-center justify-between rounded-xl px-4 py-2 hover:cursor-pointer  hover:bg-primary/5">
          <div className="flex items-center justify-start gap-x-3">
            <div className="h-18 w-10 rounded-full">
              <div className="flex items-center justify-center rounded-xl bg-[#2a323f] p-1">
                <TbArrowNarrowUp className="h-9  w-6 rotate-45 text-[#125cc4]" />
              </div>
            </div>
            <div className="">
              <h5 className="flex items-center justify-start gap-x-2">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                Oxle8....d533
              </h5>
              <h5 className="text-sm text-green-400">Completed</h5>
            </div>
          </div>
          <div className="hidden flex-col md:flex">
            <h5 className="ms-2 flex items-center justify-start gap-x-2">
              +3.2888980823ETH{" "}
              <span>
                <div className="h-3 w-3 rounded-full bg-white/5" />
              </span>
            </h5>
            <h5 className="ml-auto flex  items-center justify-start gap-x-2 text-sm text-muted">
              -10288.96USD{" "}
              <span>
                <div className="h-3 w-3 rounded-full bg-white/5" />
              </span>
            </h5>
          </div>
        </div>
        <div className="hover:shaodow-md mt-8 flex h-[70px] w-full items-center justify-between rounded-xl px-4 py-2 hover:cursor-pointer  hover:bg-primary/5">
          <div className="flex items-center justify-start gap-x-3">
            <div className="h-18 w-10 rounded-full">
              <div className="flex items-center justify-center rounded-xl bg-[#3b3343] p-1">
                <TbArrowNarrowDown className="h-9  w-6 rotate-45 text-[#b980da]" />
              </div>
            </div>
            <div className="">
              <h5 className="flex items-center justify-start gap-x-2">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                Oxle8....d533
              </h5>
              <h5 className="text-sm text-yellow-400">Pending</h5>
            </div>
          </div>
          <div className="hidden flex-col md:flex">
            <h5 className="ms-2 flex items-center justify-start gap-x-2">
              +3.2888980823ETH{" "}
              <span>
                <div className="h-3 w-3 rounded-full bg-white/5" />
              </span>
            </h5>
            <h5 className="ml-auto flex  items-center justify-start gap-x-2 text-sm text-muted">
              -10288.96USD{" "}
              <span>
                <div className="h-3 w-3 rounded-full bg-white/5" />
              </span>
            </h5>
          </div>
        </div>
        <div className="hover:shaodow-md mt-8 flex h-[70px] w-full items-center justify-between rounded-xl px-4 py-2 hover:cursor-pointer  hover:bg-primary/5">
          <div className="flex items-center justify-start gap-x-3">
            <div className="h-18 w-10 rounded-full">
              <div className="flex items-center justify-center rounded-xl bg-[#2a323f] p-1">
                <TbArrowNarrowUp className="h-9  w-6 rotate-45 text-[#125cc4]" />
              </div>
            </div>
            <div className="">
              <h5 className="flex items-center justify-start gap-x-2">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                Oxle8....d533
              </h5>
              <h5 className="text-sm text-green-400">Completed</h5>
            </div>
          </div>
          <div className="hidden flex-col md:flex">
            <h5 className="ms-2 flex items-center justify-start gap-x-2">
              +3.2888980823ETH{" "}
              <span>
                <div className="h-3 w-3 rounded-full bg-white/5" />
              </span>
            </h5>
            <h5 className="ml-auto flex  items-center justify-start gap-x-2 text-sm text-muted">
              -10288.96USD{" "}
              <span>
                <div className="h-3 w-3 rounded-full bg-white/5" />
              </span>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
