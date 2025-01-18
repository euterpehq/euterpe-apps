import Image from 'next/image'

export default function Profile() {
  return (
    <>
      <section className="p-4 w-full">
             <div className="p-[10px] flex justify-start items-center gap-x-[14px] rounded-[8px] h-[54px]">
        <div className="w-[40px] h-[40px] rounded-full border">
          <Image src="/images/artist.png" alt="artist" width={100} height={100}/>
        </div>
        <div>
          <h3 className="text-[#FFFFFF] text-[24px]">ford.</h3>
        </div>
            </div>
        </section>
    </>
  )
}
