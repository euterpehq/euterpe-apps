import Image from "next/image";

export default function Progress() {
  return (
    <>
      <div className="flex flex-col items-center justify-start">
        <div className="mt-4 flex items-center justify-start gap-x-2">
          <Image
            src="/images/music-icon.svg"
            className="h-[19px] w-fit"
            width={100}
            height={100}
            alt="music-icon"
          />
          <span>0/5</span>
        </div>
        {/* progress bar */}
        <div
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
          className="mb-4 mt-2 h-1.5 w-full rounded-full"
        >
          <div
            className="h-1.5 rounded-full bg-primary"
            style={{ width: "15%" }}
          ></div>
        </div>
      </div>
    </>
  );
}
