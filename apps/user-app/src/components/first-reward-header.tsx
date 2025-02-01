"use client";
import React from "react";
import { useAccount } from "wagmi";
import FirstReward from "./first-reward";

function FirstRewardHeader() {
  const { isConnected } = useAccount();
  // this should only be displayed the first time the user signs up and is connected
  return <>{isConnected && <FirstReward />}</>;
}

export default FirstRewardHeader;
