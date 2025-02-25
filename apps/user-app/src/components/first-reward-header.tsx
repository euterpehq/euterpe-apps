"use client";
import React from "react";
import { useAccount } from "wagmi";
import FirstReward from "./first-reward";
import { useModalStore } from "@/store/modal.store";

function FirstRewardHeader() {
  const { isConnected } = useAccount();
  const { isOpen } = useModalStore();
  // this should only be displayed the first time the user signs up and is connected
  return <> 
        {isOpen ? (
          <></>
        ): (
          <><FirstReward /></>
        )

      }
        </>
}

export default FirstRewardHeader;
