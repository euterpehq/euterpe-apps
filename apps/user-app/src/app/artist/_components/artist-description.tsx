"use client";
import { useState } from "react";
import Link from "next/link";

type Prop = {
  artist: any;
};

export default function ArtistDescription({ artist }: Prop) {
  const [isExpanded, setIsExpanded] = useState(false);

  //const spotifyLink = songs.filter((song) => song.spotify);
  //const youtubeLink = songs.filter((song) => song.youtube);

  return (
    <div className="h-full w-full px-[24px]">
      <div className="flex w-full flex-col md:gap-[24px] gap-[15px] py-[24px] md:pr-[100px]">
        <div>
          <Link href="/">
            <h1 className="font-figtree md:text-[80px] text-[56px] font-bold md:tracking-[-4.8px] tracking-[-3.36px]">
              {artist?.artist_name}
            </h1>
          </Link>
        </div>
        <div>
          {artist?.bio && (
            <p className="font-figtree text-[14px] tracking-[-0.28px]">
              {isExpanded ? artist?.bio : `${artist?.bio}...`}
              <span
                className="cursor-pointer text-[#C1FF70]"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {" "}
                {isExpanded ? " Show less" : " Read more"}
              </span>
            </p>
          )}
        </div>
        <div className="flex flex-wrap w-full items-center gap-[10px] ">
          <Link
            href={`${artist?.spotify_url}`}
            className="flex cursor-pointer items-center justify-center gap-[10px] rounded-[120px] bg-[#1B1B1B] px-[12px] py-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.13 6.23C8.89 4.9 5.145 4.76 3.01 5.425C2.66 5.53 2.31 5.32 2.205 5.005C2.1 4.655 2.31 4.305 2.625 4.2C5.11 3.465 9.205 3.605 11.795 5.145C12.11 5.32 12.215 5.74 12.04 6.055C11.865 6.3 11.445 6.405 11.13 6.23ZM11.06 8.19C10.885 8.435 10.57 8.54 10.325 8.365C8.435 7.21 5.565 6.86 3.36 7.56C3.08 7.63 2.765 7.49 2.695 7.21C2.625 6.93 2.765 6.615 3.045 6.545C5.6 5.775 8.75 6.16 10.92 7.49C11.13 7.595 11.235 7.945 11.06 8.19ZM10.22 10.115C10.08 10.325 9.835 10.395 9.625 10.255C7.98 9.24 5.915 9.03 3.465 9.59C3.22 9.66 3.01 9.485 2.94 9.275C2.87 9.03 3.045 8.82 3.255 8.75C5.915 8.155 8.225 8.4 10.045 9.52C10.29 9.625 10.325 9.905 10.22 10.115ZM7 0C3.15 0 0 3.15 0 7C0 10.85 3.15 14 7 14C10.85 14 14 10.85 14 7C14 3.15 10.885 0 7 0Z"
                fill="#C1FF70"
              />
            </svg>
            <p className="text-xs">Spotify</p>
          </Link>
          <Link
            href={`${artist?.youtube_music_url}`}
            className="flex cursor-pointer items-center justify-center gap-[10px] rounded-[120px] bg-[#1B1B1B] px-[12px] py-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.873 4.05388C12.8029 3.79532 12.6664 3.55961 12.4769 3.37018C12.2875 3.18076 12.0518 3.04421 11.7933 2.97413C10.8342 2.72125 7 2.72125 7 2.72125C7 2.72125 3.16575 2.72125 2.20675 2.97413C1.68175 3.115 1.26875 3.52888 1.127 4.05388C0.875 5.012 0.875 7 0.875 7C0.875 7 0.875 8.99762 1.127 9.94613C1.26875 10.4711 1.68263 10.885 2.20675 11.0259C3.16575 11.2788 7 11.2788 7 11.2788C7 11.2788 10.8342 11.2788 11.7933 11.0259C12.0518 10.9558 12.2875 10.8192 12.4769 10.6298C12.6664 10.4404 12.8029 10.2047 12.873 9.94613C13.125 8.988 13.125 7 13.125 7C13.125 7 13.125 5.012 12.873 4.05388Z"
                fill="#C1FF70"
              />
              <path
                d="M5.76953 8.84625L8.95803 7.0105L5.76953 5.16425V8.84625Z"
                fill="#0E0E0E"
              />
            </svg>
            <p className="text-xs">Youtube</p>
          </Link>

          <Link
            href={`/`}
            className="flex cursor-pointer items-center justify-center gap-[10px] rounded-[120px] bg-[#1B1B1B] px-[12px] py-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clipPath="url(#clip0_2806_3446)">
                <path
                  d="M4.66704 7C4.66704 5.71138 5.71138 4.66648 7 4.66648C8.28862 4.66648 9.33352 5.71138 9.33352 7C9.33352 8.28862 8.28862 9.33352 7 9.33352C5.71138 9.33352 4.66704 8.28862 4.66704 7ZM3.40558 7C3.40558 8.9852 5.0148 10.5944 7 10.5944C8.9852 10.5944 10.5944 8.9852 10.5944 7C10.5944 5.0148 8.9852 3.40558 7 3.40558C5.0148 3.40558 3.40558 5.0148 3.40558 7ZM9.89671 3.26306C9.89665 3.4292 9.94585 3.59163 10.0381 3.7298C10.1303 3.86797 10.2615 3.97569 10.4149 4.03933C10.5684 4.10297 10.7373 4.11967 10.9003 4.08732C11.0632 4.05498 11.2129 3.97504 11.3304 3.85761C11.448 3.74018 11.528 3.59054 11.5605 3.42761C11.593 3.26467 11.5764 3.09577 11.5129 2.94226C11.4494 2.78874 11.3418 2.65751 11.2037 2.56515C11.0656 2.4728 10.9032 2.42347 10.737 2.4234H10.7367C10.514 2.4235 10.3005 2.51199 10.143 2.66943C9.98548 2.82686 9.8969 3.04037 9.89671 3.26306ZM4.172 12.6978C3.48953 12.6668 3.11858 12.5531 2.87207 12.457C2.54526 12.3298 2.31207 12.1783 2.0669 11.9334C1.82174 11.6886 1.66998 11.4556 1.5433 11.1288C1.44721 10.8824 1.33353 10.5114 1.3025 9.8289C1.26857 9.09104 1.26179 8.86939 1.26179 7.00006C1.26179 5.13072 1.26913 4.90969 1.3025 4.17122C1.33358 3.48874 1.4481 3.11842 1.5433 2.87129C1.67054 2.54447 1.82207 2.31129 2.0669 2.06612C2.31174 1.82095 2.5447 1.66919 2.87207 1.54252C3.11847 1.44642 3.48953 1.33274 4.172 1.30172C4.90986 1.26778 5.1315 1.26101 7 1.26101C8.8685 1.26101 9.09037 1.26834 9.82884 1.30172C10.5113 1.3328 10.8816 1.44732 11.1288 1.54252C11.4556 1.66919 11.6888 1.82129 11.9339 2.06612C12.1791 2.31095 12.3303 2.54447 12.4575 2.87129C12.5536 3.11769 12.6673 3.48874 12.6983 4.17122C12.7323 4.90969 12.739 5.13072 12.739 7.00006C12.739 8.86939 12.7323 9.09042 12.6983 9.8289C12.6673 10.5114 12.553 10.8823 12.4575 11.1288C12.3303 11.4556 12.1788 11.6888 11.9339 11.9334C11.6891 12.178 11.4556 12.3298 11.1288 12.457C10.8824 12.5531 10.5113 12.6668 9.82884 12.6978C9.09098 12.7318 8.86934 12.7385 7 12.7385C5.13066 12.7385 4.90963 12.7318 4.172 12.6978ZM4.11404 0.042392C3.36885 0.076328 2.85964 0.194488 2.41494 0.367528C1.9544 0.546224 1.56453 0.78596 1.17494 1.17494C0.785344 1.56391 0.546224 1.9544 0.367528 2.41494C0.194488 2.85992 0.076328 3.36885 0.042392 4.11404C0.007896 4.86041 0 5.09902 0 7C0 8.90098 0.007896 9.13959 0.042392 9.88596C0.076328 10.6312 0.194488 11.1401 0.367528 11.5851C0.546224 12.0453 0.7854 12.4363 1.17494 12.8251C1.56447 13.2139 1.9544 13.4533 2.41494 13.6325C2.86048 13.8055 3.36885 13.9237 4.11404 13.9576C4.8608 13.9915 5.09902 14 7 14C8.90098 14 9.13959 13.9921 9.88596 13.9576C10.6312 13.9237 11.1401 13.8055 11.5851 13.6325C12.0453 13.4533 12.4355 13.214 12.8251 12.8251C13.2147 12.4361 13.4533 12.0453 13.6325 11.5851C13.8055 11.1401 13.9242 10.6312 13.9576 9.88596C13.9915 9.13903 13.9994 8.90098 13.9994 7C13.9994 5.09902 13.9915 4.86041 13.9576 4.11404C13.9237 3.36879 13.8055 2.85964 13.6325 2.41494C13.4533 1.95468 13.214 1.56453 12.8251 1.17494C12.4361 0.785344 12.0453 0.546224 11.5856 0.367528C11.1401 0.194488 10.6312 0.075768 9.88652 0.042392C9.14015 0.008456 8.90154 0 7.00056 0C5.09958 0 4.8608 0.007896 4.11404 0.042392Z"
                  fill="#C1FF70"
                />
                <path
                  d="M4.66704 7C4.66704 5.71138 5.71138 4.66648 7 4.66648C8.28862 4.66648 9.33352 5.71138 9.33352 7C9.33352 8.28862 8.28862 9.33352 7 9.33352C5.71138 9.33352 4.66704 8.28862 4.66704 7ZM3.40558 7C3.40558 8.9852 5.0148 10.5944 7 10.5944C8.9852 10.5944 10.5944 8.9852 10.5944 7C10.5944 5.0148 8.9852 3.40558 7 3.40558C5.0148 3.40558 3.40558 5.0148 3.40558 7ZM9.89671 3.26306C9.89665 3.4292 9.94585 3.59163 10.0381 3.7298C10.1303 3.86797 10.2615 3.97569 10.4149 4.03933C10.5684 4.10297 10.7373 4.11967 10.9003 4.08732C11.0632 4.05498 11.2129 3.97504 11.3304 3.85761C11.448 3.74018 11.528 3.59054 11.5605 3.42761C11.593 3.26467 11.5764 3.09577 11.5129 2.94226C11.4494 2.78874 11.3418 2.65751 11.2037 2.56515C11.0656 2.4728 10.9032 2.42347 10.737 2.4234H10.7367C10.514 2.4235 10.3005 2.51199 10.143 2.66943C9.98548 2.82686 9.8969 3.04037 9.89671 3.26306ZM4.172 12.6978C3.48953 12.6668 3.11858 12.5531 2.87207 12.457C2.54526 12.3298 2.31207 12.1783 2.0669 11.9334C1.82174 11.6886 1.66998 11.4556 1.5433 11.1288C1.44721 10.8824 1.33353 10.5114 1.3025 9.8289C1.26857 9.09104 1.26179 8.86939 1.26179 7.00006C1.26179 5.13072 1.26913 4.90969 1.3025 4.17122C1.33358 3.48874 1.4481 3.11842 1.5433 2.87129C1.67054 2.54447 1.82207 2.31129 2.0669 2.06612C2.31174 1.82095 2.5447 1.66919 2.87207 1.54252C3.11847 1.44642 3.48953 1.33274 4.172 1.30172C4.90986 1.26778 5.1315 1.26101 7 1.26101C8.8685 1.26101 9.09037 1.26834 9.82884 1.30172C10.5113 1.3328 10.8816 1.44732 11.1288 1.54252C11.4556 1.66919 11.6888 1.82129 11.9339 2.06612C12.1791 2.31095 12.3303 2.54447 12.4575 2.87129C12.5536 3.11769 12.6673 3.48874 12.6983 4.17122C12.7323 4.90969 12.739 5.13072 12.739 7.00006C12.739 8.86939 12.7323 9.09042 12.6983 9.8289C12.6673 10.5114 12.553 10.8823 12.4575 11.1288C12.3303 11.4556 12.1788 11.6888 11.9339 11.9334C11.6891 12.178 11.4556 12.3298 11.1288 12.457C10.8824 12.5531 10.5113 12.6668 9.82884 12.6978C9.09098 12.7318 8.86934 12.7385 7 12.7385C5.13066 12.7385 4.90963 12.7318 4.172 12.6978ZM4.11404 0.042392C3.36885 0.076328 2.85964 0.194488 2.41494 0.367528C1.9544 0.546224 1.56453 0.78596 1.17494 1.17494C0.785344 1.56391 0.546224 1.9544 0.367528 2.41494C0.194488 2.85992 0.076328 3.36885 0.042392 4.11404C0.007896 4.86041 0 5.09902 0 7C0 8.90098 0.007896 9.13959 0.042392 9.88596C0.076328 10.6312 0.194488 11.1401 0.367528 11.5851C0.546224 12.0453 0.7854 12.4363 1.17494 12.8251C1.56447 13.2139 1.9544 13.4533 2.41494 13.6325C2.86048 13.8055 3.36885 13.9237 4.11404 13.9576C4.8608 13.9915 5.09902 14 7 14C8.90098 14 9.13959 13.9921 9.88596 13.9576C10.6312 13.9237 11.1401 13.8055 11.5851 13.6325C12.0453 13.4533 12.4355 13.214 12.8251 12.8251C13.2147 12.4361 13.4533 12.0453 13.6325 11.5851C13.8055 11.1401 13.9242 10.6312 13.9576 9.88596C13.9915 9.13903 13.9994 8.90098 13.9994 7C13.9994 5.09902 13.9915 4.86041 13.9576 4.11404C13.9237 3.36879 13.8055 2.85964 13.6325 2.41494C13.4533 1.95468 13.214 1.56453 12.8251 1.17494C12.4361 0.785344 12.0453 0.546224 11.5856 0.367528C11.1401 0.194488 10.6312 0.075768 9.88652 0.042392C9.14015 0.008456 8.90154 0 7.00056 0C5.09958 0 4.8608 0.007896 4.11404 0.042392Z"
                  fill="#C1FF70"
                />
              </g>
              <defs>
                <clipPath id="clip0_2806_3446">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-xs">Instagram</p>
          </Link>
          <Link
            href={`/`}
            className="flex cursor-pointer items-center justify-center gap-[10px] rounded-[120px] bg-[#1B1B1B] px-[12px] py-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clipPath="url(#clip0_2806_3451)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 2.54779C13.4856 2.78205 12.9317 2.94047 12.3508 3.01126C12.9441 2.64723 13.3993 2.07 13.6138 1.38239C13.0583 1.71946 12.4444 1.96467 11.7887 2.09612C11.2661 1.52395 10.5191 1.16667 9.69243 1.16667C8.1073 1.16667 6.82127 2.48543 6.82127 4.11177C6.82127 4.34266 6.84592 4.56681 6.89523 4.78253C4.50807 4.65951 2.39209 3.4882 0.974584 1.70428C0.72724 2.14078 0.585897 2.64723 0.585897 3.18653C0.585897 4.20784 1.09292 5.10949 1.86371 5.63784C1.39367 5.62351 0.94993 5.48953 0.562069 5.27044V5.30667C0.562069 6.73414 1.55227 7.92482 2.86705 8.19447C2.62628 8.26357 2.37237 8.29812 2.11023 8.29812C1.92534 8.29812 1.74455 8.28043 1.56952 8.24588C1.9352 9.41549 2.99524 10.2674 4.2525 10.2902C3.2697 11.0806 2.03052 11.5516 0.685329 11.5516C0.453598 11.5516 0.224335 11.5382 0 11.5112C1.27123 12.3454 2.78159 12.8333 4.40289 12.8333C9.68668 12.8333 12.5751 8.34615 12.5751 4.45389C12.5751 4.32581 12.5726 4.19772 12.5677 4.07217C13.129 3.65673 13.6162 3.1385 14 2.54779Z"
                  fill="#C1FF70"
                />
              </g>
              <defs>
                <clipPath id="clip0_2806_3451">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-xs">Twitter/X</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
