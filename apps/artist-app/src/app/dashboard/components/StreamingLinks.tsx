import Image from "next/image";

export default function StreamingLinks() {
  return (
  <>
   <p className="mt-4">Streaming Links </p>
        <p className="text-[#868B9F]"> A description is meant to be here</p>
            <div className="mt-4 grid grid-cols-3 gap-x-4 gap-y-4">
                <div className="flex justfiy-start items-center gap-x-2 p-2.5 w-[100%] h-[40px] border rounded-sm">
                    <div className="w-[16px] h-[16px] border rounded-full">
                        <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-spotify text-[#1ED760]" viewBox="0 0 16 16">
                         <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                        </svg>
                    </div>
                     <input className="bg-transparent focus:outline-none" placeholder="Spotify" type="text" name="" id="" />
                </div>
                 <div className="flex justfiy-start items-center gap-x-2 p-2.5 w-[100%] h-[40px] border rounded-sm">
                    <div className="w-[16px] h-[16px] rounded-full">
                        <Image src="/images/shazam.png" alt="shazam" width={200} height={200}/>
                  </div>
                    <input className="bg-transparent focus:outline-none" placeholder="Shazam" type="text" name="" id="" />
                </div>
               <div className="flex justfiy-start items-center gap-x-2 p-2.5 w-[100%] h-[40px] border rounded-sm">
                  <div className="w-[16px] h-[16px] rounded-full">
                    <Image src="/images/youtube_music.png" alt="youtube_music" width={200} height={200}/>
                  </div>
                  <input className="bg-transparent focus:outline-none" placeholder="Youtube Music" type="text" name="" id="" />
                </div>
                  <div className="flex justfiy-start items-center gap-x-2 p-2.5 w-[100%] h-[40px] border rounded-sm">
                     <div className="w-[16px] h-[16px] rounded-full">
                    <Image src="/images/grooveshark.png" alt="grooveshark" width={200} height={200}/>
                  </div>
                     <input className="bg-transparent focus:outline-none" placeholder="Groovesshark" type="text" name="" id="" />
                </div>
              <div className="flex justfiy-start items-center gap-x-2 p-2.5 w-[100%] h-[40px] border rounded-sm">
                  <div className="w-[16px] h-[16px] rounded-full">
                    <Image src="/images/sound_cloud.png" alt="sound_cloud" width={200} height={200}/>
                  </div>
                  <input className="bg-transparent focus:outline-none" placeholder="SoundCloud" type="text" name="" id="" />
                </div>
                  <div className="flex justfiy-start items-center gap-x-2 p-2.5 w-[100%] h-[40px] border rounded-sm">
                    <div className="w-[16px] h-[16px] rounded-full">
                     <Image src="/images/apple_music.png" alt="apple_music" width={200} height={200}/>
                  </div>
                    <input className="bg-transparent focus:outline-none" placeholder="Apple Music" type="text" name="" id="" />
                </div>
              </div>
  </>
  )
}
