"use client";
import React from 'react';
import { Database } from '@/types/database.types';
import Image from 'next/image';


type Prop = {
  artist: Database["public"]["Tables"]["artist_profiles"]["Row"];
};

export default function ArtistStats({ artist }: Prop) {
    
  return (
    <div className='w-full flex flex-col gap-5 px-[24px]'>
      <div className='w-full flex flex-col items-start gap-[12px] self-stretch pt-[20px] rounded-[12px] bg-[#181818]'>
            <div className='w-full flex py-0 px-[16px] justify-between items-center self-stretch'>
                <div className='flex items-center gap-[24px]'>
                    <div className='w-[64px] h-[64px] '>
                        <Image src={artist?.artist_image_url || "/images/artFrame.jpg"} alt="" width={64} height={64} className='w-full h-full object-cover  rounded-[8px]' />
                    </div>
                    <div>
                        <h1 className='text-[#fff] font-figtree text-[16px] font-medium leading-[24px] tracking-[0.15px]'>{artist.artist_name}<span className='text-[#868B9F]'>({artist.artist_name})</span></h1>
                        <div className='flex items-center gap-[8px] '>
                            <div className='flex items-center gap-[4px]'>
                                <p className='text-[#868B9F] font-figtree text-[14px] font-medium leading-normal'>1H</p>
                                <p className='text-[#C1FF70] font-bold leading-normal text-[14px] font-figtree'>2.4%</p>
                            </div>
                            <div className='flex items-center gap-[4px]'>
                            <p className='text-[#868B9F] font-figtree text-[14px] font-medium leading-normal'>24H</p>
                            <p className='text-[#C1FF70] font-bold leading-normal text-[14px] font-figtree'>1k%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[40px]'>
                    <div className='flex flex-col justify-center items-end gap-[8px] '>
                        <h1 className='text-[#868B9F] font-figtree text-[12px] font-normal leading-normal tracking-[-0.24px]'>Price (USD)</h1>
                        <p className='text-[#fff] font-figtree text-[16px] font-medium leading-normal tracking-[-0.32px]'>$0.0001709</p>
                    </div>
                    <div className='flex flex-col justify-center items-end gap-[8px] '>
                        <h1 className='text-[#868B9F] font-figtree text-[12px] font-normal leading-normal tracking-[-0.24px]'>Market cap</h1>
                        <p className='text-[#fff] font-figtree text-[16px] font-medium leading-normal tracking-[-0.32px]'>$72.1k</p>
                    </div>
                    <div className='flex flex-col justify-center items-end gap-[8px] '>
                        <h1 className='text-[#868B9F] font-figtree text-[12px] font-normal leading-normal tracking-[-0.24px]'>Total Volume</h1>
                        <p className='text-[#fff] font-figtree text-[16px] font-medium leading-normal tracking-[-0.32px]'>$72.1k</p>
                    </div>
                    <div className='flex flex-col justify-center items-end gap-[8px] '>
                        <h1 className='text-[#868B9F] font-figtree text-[12px] font-normal leading-normal tracking-[-0.24px]'>Liquidity</h1>
                        <p className='text-[#fff] font-figtree text-[16px] font-medium leading-normal tracking-[-0.32px]'>$72.1k</p>
                    </div>
                    <div className='flex flex-col justify-center items-end gap-[8px] '>
                        <h1 className='text-[#868B9F] font-figtree text-[12px] font-normal leading-normal tracking-[-0.24px]'>FDV</h1>
                        <p className='text-[#fff] font-figtree text-[16px] font-medium leading-normal tracking-[-0.32px]'>$72.1k</p>
                    </div>
                    
                </div>
            </div>
            <div className='w-full flex justify-between items-center self-stretch py-[12px] px-[16px] bg-[#ffffff05] rounded-b-[12px]'>
                <div className='flex items-center gap-[12px]'>
                    {/*<div className='flex py-[10px] px-[12px] justify-center items-center gap-[4px] rounded-[8px] cursor-pointer bg-[#292929]'>
                    <div className='w-[12px] h-[12px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clipPath="url(#clip0_4293_2098)">
                            <path d="M10.5 10.5H3.1C2.53994 10.5 2.25992 10.5 2.04601 10.391C1.85785 10.2951 1.70486 10.1422 1.60899 9.954C1.5 9.7401 1.5 9.46005 1.5 8.9V1.5M3.5 7.5L6 4.5L8 6.5L10.5 3.5" stroke="#C1FF70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_4293_2098">
                                <rect width="12" height="12" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    </div>
                    
                    <p className='font-figtree text-[12px] font-bold tracking-[-0.24px] text-center text-[#fff]'>View chart</p>
                    </div>*/}

                    <div className='flex py-[10px] px-[8px] justify-center items-center gap-[4px] rounded-[8px] bg-[#222329] cursor-pointer'>
                    <div className='w-[16px] h-[16px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_4293_2102)">
                            <path d="M10.6666 8.59992V11.3999C10.6666 13.7333 9.73325 14.6666 7.39992 14.6666H4.59992C2.26659 14.6666 1.33325 13.7333 1.33325 11.3999V8.59992C1.33325 6.26658 2.26659 5.33325 4.59992 5.33325H7.39992C9.73325 5.33325 10.6666 6.26658 10.6666 8.59992Z" stroke="#C1FF70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.6666 4.59992V7.39992C14.6666 9.73325 13.7333 10.6666 11.3999 10.6666H10.6666V8.59992C10.6666 6.26658 9.73325 5.33325 7.39992 5.33325H5.33325V4.59992C5.33325 2.26659 6.26658 1.33325 8.59992 1.33325H11.3999C13.7333 1.33325 14.6666 2.26659 14.6666 4.59992Z" stroke="#C1FF70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_4293_2102">
                                <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                    </div>
                    
                    <p className='font-figtree text-[12px] font-bold tracking-[-0.24px] text-center text-[#fff]'>0xC69D...DD6C</p>
                    </div>
                </div>
                <div className='flex items-center gap-[8px]'>
                    <div className=' flex py-[10px] px-[24px] justify-center items-center gap-[10px] rounded-[8px] bg-[#C1FF70] cursor-pointer'>
                        <p className='font-figtree text-[12px] font-bold leading-normal tracking-[-0.24px] text-center text-[#0E0E0E]'>Trade</p>
                    </div>
                    <div className='flex py-[10px] px-[12px] justify-center items-center gap-[4px] rounded-[8px] bg-[#222329] cursor-pointer'>
                    <div className='w-[12px] h-[12px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M4.57658 2.70419C5.2099 1.56807 5.52655 1 6 1C6.47345 1 6.7901 1.56806 7.4234 2.70419L7.58725 2.99812C7.76725 3.32097 7.8572 3.4824 7.99755 3.58891C8.13785 3.69542 8.31255 3.73495 8.66205 3.81402L8.98025 3.88601C10.2101 4.16428 10.825 4.30341 10.9713 4.77387C11.1176 5.2443 10.6984 5.73455 9.85995 6.71495L9.64305 6.9686C9.4048 7.2472 9.28565 7.3865 9.23205 7.55885C9.1785 7.7312 9.1965 7.91705 9.2325 8.2888L9.2653 8.6272C9.39205 9.9353 9.45545 10.5894 9.07245 10.8801C8.6894 11.1708 8.11365 10.9058 6.96215 10.3756L6.66425 10.2384C6.33705 10.0878 6.17345 10.0124 6 10.0124C5.82655 10.0124 5.66295 10.0878 5.33575 10.2384L5.03785 10.3756C3.88634 10.9058 3.31059 11.1708 2.92758 10.8801C2.54456 10.5894 2.60794 9.9353 2.7347 8.6272L2.76749 8.2888C2.80352 7.91705 2.82153 7.7312 2.76793 7.55885C2.71434 7.3865 2.59522 7.2472 2.35696 6.9686L2.14005 6.71495C1.30163 5.73455 0.882411 5.2443 1.02871 4.77387C1.17501 4.30341 1.78993 4.16428 3.01977 3.88601L3.33795 3.81402C3.68743 3.73495 3.86217 3.69542 4.00247 3.58891C4.14278 3.4824 4.23277 3.32097 4.41274 2.99812L4.57658 2.70419Z" fill="#C1FF70"/>
                    </svg>
                    </div>
                    
                    <p className='text-[#fff] text-center font-figtree text-[12px] font-bold leading-[14.4px] tracking-[-0.02em]'>Add to watchlist</p>
                    </div>
                    <div className='flex py-[10px] px-[12px] justify-center items-center gap-[4px] rounded-[8px] bg-[#222329] cursor-pointer'>
                        <div className='w-[12px] h-[12px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.99994 5C2.99994 3.34314 4.34309 2 5.99994 2C7.65679 2 8.99994 3.34314 8.99994 5V5.91547C8.99994 6.62515 9.19279 7.32145 9.55794 7.92995L9.83464 8.39115C10.0181 8.69705 10.1099 8.85 10.1162 8.97485C10.1259 9.1683 10.0231 9.34995 9.85219 9.44115C9.74189 9.5 9.56354 9.5 9.20684 9.5H2.79309C2.43637 9.5 2.25801 9.5 2.14769 9.44115C1.97681 9.34995 1.87396 9.1683 1.88369 8.97485C1.88997 8.85 1.98174 8.69705 2.16527 8.39115L2.44198 7.92995C2.80708 7.32145 2.99994 6.62515 2.99994 5.91549V5Z" fill="#C1FF70"/>
                        <path d="M7.17497 10C7.21637 10 7.25032 10.0336 7.24647 10.0749C7.22417 10.3127 7.09612 10.5373 6.88387 10.7071C6.64942 10.8946 6.33147 11 5.99997 11C5.66847 11 5.35051 10.8946 5.11606 10.7071C4.90382 10.5373 4.77579 10.3127 4.75348 10.0749C4.74961 10.0336 4.78354 10 4.82496 10H5.99997H7.17497Z" fill="#C1FF70"/>
                    </svg>
                        </div>
                    
                    <p className='font-figtree text-[12px] font-bold leading-[14.4px] tracking-[-0.02em] text-center text-[#fff]'>Create alert</p>
                    </div>
                </div>
            </div>
      </div>
      <div className='w-full flex items-start self-center  gap-[12px] '>
            <div className='w-full flex py-[24px] px-[165px] flex-col items-start gap-[10px] bg-[#181818] rounded-[12px]'>
                <div className='flex items-center justify-center flex-col self-stretch gap-[4px]'>
                    <h1 className='font-figtree text-[32px] font-medium leading-normal text-[#C1FF70] tracking-[-1.92px]'>538k</h1>
                    <p className='text-[#C1FF70] font-figtree font-medium leading-normal tracking-[-0.48px] text-[12px]'>Monthly listeners</p>
                </div>
            </div>
            <div className='w-full flex py-[24px] px-[165px] flex-col items-start gap-[10px] bg-[#181818] rounded-[12px]'>
                <div className='flex items-center justify-center flex-col self-stretch gap-[4px]'>
                    <h1 className='font-figtree text-[32px] font-medium leading-normal text-[#C1FF70] tracking-[-1.92px]'>2,348</h1>
                    <p className='text-[#C1FF70] font-figtree font-medium leading-normal tracking-[-0.48px] text-[12px]'>Followers</p>
                </div>
            </div>
            <div className='w-full flex py-[24px] px-[165px] flex-col items-start gap-[10px] bg-[#181818] rounded-[12px]'>
                <div className='flex items-center justify-center flex-col self-stretch gap-[4px]'>
                    <h1 className='font-figtree text-[32px] font-medium leading-normal text-[#C1FF70]'>81</h1>
                    <p className='text-[#C1FF70] font-figtree font-medium leading-normal tracking-[-0.48px] text-[12px]'>Releases</p>
                </div>
            </div>
      </div>
    </div>
  )
}


