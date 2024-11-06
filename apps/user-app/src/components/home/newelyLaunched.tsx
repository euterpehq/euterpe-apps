import Image, { StaticImageData } from "next/image";
import { MoveRight } from "lucide-react";
import frameTwoImage from "../../../public/images/frame2.png";

const FrameTwoCard = ({ frameTwoImage }: { frameTwoImage: StaticImageData }) => (
  <div className="bg-[#181818] flex flex-col h-[150px] w-[100%] md:w-[49%] xl:w-[32.33%] py-[12px] px-[16px] gap-[12px] rounded-[12px] mt-1">
    <div className="flex items-center h-[64px] gap-[16px]" >
      <Image
        src={frameTwoImage}
        alt="profile image"
        className="w-[64px] h-[64px] rounded-[8px]"
        width={80}
        height={80}
      />
      <div className="flex flex-col">
        <h2 className="text-[14px] font-semibold">Henry <span className="text-[#868B9F] font-light">(HEN)</span></h2>
        <p className="text-[12px] text-[#868B9F]">
          i need something that spans across two lines so i can easily calculate the extent of this component
        </p>
      </div>
    </div>
    <div className="w-[410.67px] h-[0.5px] bg-[#303033]"></div>
    <div className="flex justify-between">
      <div className="flex items-center w-[95px] h-[20px] gap-[8px]">
        <p className="w-[20px] h-[20px] rounded-[80px] bg-[#FFFFFF]"></p>
        <p className="text-[12px] text-[#E0FFB7] ">Henry green</p>
      </div>
      <div>
        <p className="text-[12px] flex">
          <span className="text-[#868B9F] mr-1">Market Cap:</span>
          72.1k
        </p>
      </div>
    </div>
    <div>
      <div className="w-[188px] h-[6px] rounded-[24px] bg-[#D6FFA0]"></div>
    </div>
  </div>
);

export const NewelyLaunched = () => {
  return (
    <section className="my-12">
      <div className="px-[40px] max-w-[90rem] mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[20px] font-semibold">Newely Launched</h1>
            <p className="text-[14px] text-[#868B9F]">Claim your stake early</p>
          </div>
          <div className="bg-[#1B1B1B] w-[36px] h-[36px] rounded-[120px] flex justify-center items-center cursor-pointer">
            <MoveRight size={16} strokeWidth={1.5} className="text-[#C1FF70]" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-between mt-10">
          {Array.from({ length: 6 }, (_, index) => (
            <FrameTwoCard key={index} frameTwoImage={frameTwoImage} />
          ))}
        </div>
      </div>
    </section>
  )
};