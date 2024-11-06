import Image, { StaticImageData } from "next/image";
import { MoveRight } from "lucide-react";
import frameOneImage from "../../../public/images/frame.png";

const FrameOneCard = ({ frameOneImage }: { frameOneImage: StaticImageData }) => (
  <div className="bg-[#181818] flex flex-col h-[124.3px] w-[100%] md:w-[48%] lg:w-[32%] xl:w-[24%] p-[16px] gap-[12px] rounded-[12px]">
    <div className="flex items-center h-[48px] gap-[16px]" >
      <Image
        src={frameOneImage}
        alt="profile image"
        className="w-[48px] h-[48px] rounded-[8px]"
        width={80}
        height={80}
      />
      <div className="flex flex-col">
        <h2 className="text-[14px]">Henry <span className="text-[#868B9F]">(HEN)</span></h2>
        <p className="text-[12px] flex">
          <span className="text-[#868B9F] mr-1">Market Cap:</span>
          72.1k
        </p>
      </div>
    </div>
    <div className="w-[230.4px] h-[0.3px] bg-[#303033]"></div>
    <div className="flex items-center w-[95px] h-[20px] gap-[8px]">
      <p className="w-[20px] h-[20px] rounded-[80px] bg-[#FFFFFF]"></p>
      <p className="text-[12px] text-[#E0FFB7] ">Henry green</p>
    </div>
  </div>
);

export const PopularTokens = () => {
  return (
    <section className="border-b border-[#303033]">
      <div className="px-[40px] pb-6 max-w-[90rem] mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[20px] font-semibold">Popular tokens</h1>
            <p className="text-[14px] text-[#868B9F]">Disover today's trending tokens</p>
          </div>
          <div className="bg-[#1B1B1B] w-[36px] h-[36px] rounded-[120px] flex justify-center items-center cursor-pointer">
            <MoveRight size={16} strokeWidth={1.5} className="text-[#C1FF70]" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-between mt-10">
          {Array.from({ length: 12 }, (_, index) => (
            <FrameOneCard key={index} frameOneImage={frameOneImage} />
          ))}
        </div>
      </div>
    </section>
  )
};