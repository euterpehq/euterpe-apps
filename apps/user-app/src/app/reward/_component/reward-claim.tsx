"use client";
import { Button } from "@/components/ui/button"
import { DialogTrigger } from "@/components/ui/dialog";
import { useEarningsStore } from "@/providers/store/earnings.store";
import Modal from "./modal";
import { useState } from "react";


const RewardClaim = () => {
   const earnings = useEarningsStore((state) => state.earnings);

  const [selectedReward, setSelectedReward] = useState<{ id: number; amount: string; point: string } | null>(null);
   
  const rewards = [
    {
      id: 1,
      amount: "1000",
      point: "0",
    },
    {
      id: 2,
      amount: "4000",
      point: "400",
    },
    {
      id: 3,
      amount: "10000",
      point: "1000",
    },
    
  ]

  const handleClaim = (reward: { id: number; amount: string; point: string }) => {
    setSelectedReward(reward); // Store the selected reward
  };

  return (
    <>
    <div className="h-full w-screen bg-[#0E0E0E] flex flex-col items-center justify-center gap-[16px]">
      
      <h1 className="text-center font-figtree text-[24px] font-medium tracking-[-0.48px]">Claim rewards with your points</h1>
      <div className="md:w-[639px]  w-[95%] bg-[#ffffff05] px-[16px] pt-[16px] pb-[40px] gap-[16px] rounded-t-[48px] rounded-b-[32px] flex flex-col ">
        <div className=" w-full flex flex-col items-center justify-center h-[178px] gap-5 ">
          <div className="relative">
          <div>
            <svg 
            xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"
            >
              <path d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z" fill="url(#paint0_linear_3715_6783)"/>
              <defs>
                <linearGradient id="paint0_linear_3715_6783" x1="1.73903e-08" y1="5.52687" x2="41.6083" y2="8.06047" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F4FFE5"/>
                  <stop offset="1" stopColor="#BDFF00"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute top-2 left-2">
            <svg 
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="none"
            >
              <path d="M23.25 0.75H0.75V23.25H23.25V0.75Z" fill="url(#pattern0_3715_6784)"/>
              <defs>
                <pattern id="pattern0_3715_6784" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_3715_6784" transform="scale(0.0025)"/>
                </pattern>
                <image id="image0_3715_6784" width="400" height="400" xlinkHref="data:image/png;base64,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"/>
              </defs>
            </svg>
          </div>

          </div>
          <div className="flex flex-col items-center">
              <p className="text-[#8B9574] font-figtree text-[13px] font-medium">Your points balance</p>
              <h1 className="rewardH text-[32px] font-figtree text-center font-bold tracking-[-1.28px]">
                {earnings.toFixed(2)}
              </h1>
          </div>
        </div>

            <div className="flex flex-col items-center gap-2">
              {
                rewards.map((rew, index) =>{ 
                  const requiredPoints = Number(rew.point)
                  return(
                  <div key={index} className="w-full h-[88px] flex items-center justify-between px-[24px] rounded-[16px] bg-[#ffffff05]">
                    <div className="flex items-center gap-3">
                    <div className={`${earnings < requiredPoints ? "block" : "hidden"}`}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">       
                        <path 
                        d="M16 9V6C16 4.34315 14.6569 3 13 3H11C9.34315 3 8 4.34315 8 6V9M16 9H8M16 9C17.6569 9 19 10.3431 19 12V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V12C5 10.3431 6.34315 9 8 9M12 14V17M13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14Z" stroke="#868B9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        />
                      </svg>
                      </div>
                      <div className={`${earnings >= requiredPoints ? "block" : "hidden"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path 
                                d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z" stroke="url(#paint0_linear_3956_3077)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                              />
                              <defs>
                                <linearGradient id="paint0_linear_3956_3077" x1="3" y1="5.48709" x2="21.7237" y2="6.62721" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#F4FFE5"/>
                                  <stop offset="1" stopColor="#BDFF00"/>
                                </linearGradient>
                              </defs>
                            </svg>
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <h1 className="text-[14px] font-medium font-figtree tracking-[-0.28px] text-white">₦{Number(rew.amount)} Airtime</h1>
                        <p className="text-[#B1B5C6] text-[12px] font-medium tracking-[-0.24px] font-figtree">{Number(rew.point)} Points</p>
                      </div>
                    </div>
                    <DialogTrigger asChild>
                      <Button
                      onClick={() => handleClaim(rew)}
                      disabled={earnings < requiredPoints}
                      
                      className={`px-[16px] py-[8px] flex items-center gap-[4px] rounded-[8px] ${earnings >= requiredPoints ? "bg-[#C1FF70]  text-[#0E0E0E]"  : "bg-[#1B1B1B] text-[#4A4A4F]"}  text-[13px] font-figtree font-semibold tracking-[-0.26px] `}>
                        claim
                      </Button>
                    </DialogTrigger>
                  </div>
                )})
              }
            </div>
      </div>
    </div>
    {selectedReward && (
    <Modal selectedReward={selectedReward}/>
    )}
    </>
  )
}

export default RewardClaim
