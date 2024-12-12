import { Dot } from "lucide-react"
import Image from "next/image"
export default function Album() {
  return (
   <>
    <section className="flex justify-between items-center border-b p-4">
          <div className="flex justify items-center gap-x-[9px]">
            <Image
              className="w-[64px] h-[64px]"
              width={50}
              height={50}
              src="/images/album.png"
              alt="album"
            />
            <div>
              <h2 className="flex-1">AMUSIA</h2>
              <div></div>
              <h4 className="flex justify-start items-center mt-2 text-[12px] text-[#868B9F]">
                Album{" "}
                <span className="flex jutify-center items-center ">
                  <Dot size={25} color="#C1FF70" />3 tracks
                </span>
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
        <section className="flex justify-between items-center border-b p-4">
          <div className="flex justifrty items-center gap-x-[9px]">
            <div className="flex gap-x-[10px]">
              <h2 className="flex-1">1</h2>
              <div>Lover’s Quarrel</div>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">50</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024
            </h2>
          </div>
        </section>
          <section className="flex justify-between items-center border-b p-4">
          <div className="flex justifrty items-center gap-x-[9px]">
            <div className="flex gap-x-[10px]">
              <h2 className="flex-1">2</h2>
              <div>Lover’s Quarrel</div>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">50</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024
            </h2>
          </div>
        </section>
            <section className="flex justify-between items-center border-b p-4">
          <div className="flex justifrty items-center gap-x-[9px]">
            <div className="flex gap-x-[10px]">
              <h2 className="flex-1">3</h2>
              <div>Lover’s Quarrel</div>
            </div>
          </div>
          <div className="text-[#868B9F] w-fit flex justify-end items-center">
            <h2 className="text-[12px] ps-2.5 w-[135px]">50</h2>
            <h2 className="flex-end text-end text-[12px] flex justify-end items-center gap-x-2 w-[135px]">
              Januar 27, 2024
            </h2>
          </div>
        </section>
   </>
  )
}
