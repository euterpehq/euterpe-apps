import Image from 'next/image'

export default function UserProfile() {
  return (
    <>
    <div className="p-[10px] flex justify-start items-center gap-x-[10px] w-[240px] rounded-[8px] h-[54px] bg-[#181818]">
        <div className="w-[32px] h-[32px] rounded-full border">
          <Image src="/images/artist.png" alt="artist" width={100} height={100}/>
        </div>
        <div>
          <h3 className="text-[#FFF] text-[14px]">BurnaBoy</h3>
          <p className="text-[#868B9F] text-[10px]">Artist</p>
        </div>
      </div></>
  )
}
