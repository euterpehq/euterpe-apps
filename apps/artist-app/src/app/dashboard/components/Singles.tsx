import Image from "next/image"

export default function Singles() {
  return (
    <>
     <section className="mt-[40px] flex justify-between items-center border-b p-4">
          <div className="flex justifrty items-center gap-x-[9px]">
            <Image
              className="w-[64px] h-[64px]"
              width={50}
              height={50}
              src="/images/album.png"
              alt="album"
            />
            <div>
              <h2 className="flex-1">AMUSIA</h2>
              <h4 className="flex justify-start items-center mt-2 text-[12px] text-[#868B9F]">
                Single
              </h4>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">100</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024
            </h2>
          </div>
        </section>
    </>
  )
}
