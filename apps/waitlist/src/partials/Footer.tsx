import Image from "next/image";
import logo from "@/assets/icons/Euterpe..png";
import instagram from "@/assets/icons/instagram.png";
import linkedin from "@/assets/icons/linkedin.png";
import X from "@/assets/icons/X.png";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function Footer() {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-[50px] bg-[#0C0C0C] px-[20px] pb-[40px] pt-[40px] md:gap-[120px] md:px-[60px] md:pt-[64px]">
      <div className="">
        <div className="flex items-start justify-between">
          <Logo />
          <div className="hidden flex-col items-end gap-6 md:flex">
            <h1 className="text-[24px] font-semibold tracking-[-1px]">
              Be a part of our community
            </h1>
            <div className="flex gap-[16px]">
              <Link
                href="https://www.instagram.com/euterpehq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-[#C1FF70]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2673_3387)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.69572 0.0981834C3.39342 0.156943 2.26465 0.475341 1.3532 1.38295C0.438556 2.29533 0.124113 3.42856 0.0652067 4.71732C0.0285891 5.52171 -0.185531 11.5986 0.435373 13.1923C0.854085 14.2675 1.67875 15.0941 2.76374 15.5142C3.27002 15.7111 3.84795 15.8444 4.69572 15.8833C11.7844 16.2041 14.4121 16.0295 15.5201 13.1923C15.7168 12.6873 15.8521 12.1099 15.8895 11.2642C16.2135 4.15737 15.837 2.61692 14.6015 1.38295C13.6216 0.405461 12.469 -0.259937 4.69572 0.0981834ZM4.76098 14.454C3.98485 14.4191 3.56376 14.2898 3.28276 14.181C2.57589 13.9063 2.04493 13.3775 1.7719 12.6747C1.29905 11.4638 1.45588 5.71242 1.49807 4.78178C1.53946 3.87019 1.72414 3.03707 2.36733 2.39389C3.16336 1.59982 4.19182 1.21066 11.1945 1.5267C12.1083 1.56799 12.9434 1.75229 13.5882 2.39389C14.3842 3.18794 14.779 4.22432 14.4574 11.2001C14.4224 11.9743 14.2927 12.3944 14.1836 12.6747C13.4632 14.5209 11.8059 14.7772 4.76098 14.454ZM11.2717 3.7517C11.2717 4.27737 11.6992 4.70482 12.227 4.70482C12.7547 4.70482 13.183 4.27737 13.183 3.7517C13.183 3.22604 12.7547 2.79896 12.227 2.79896C11.6992 2.79896 11.2717 3.22604 11.2717 3.7517ZM3.89013 7.99037C3.89013 10.2423 5.72021 12.0681 7.97776 12.0681C10.2353 12.0681 12.0654 10.2423 12.0654 7.99037C12.0654 5.73842 10.2353 3.91381 7.97776 3.91381C5.72021 3.91381 3.89013 5.73842 3.89013 7.99037ZM5.32458 7.99037C5.32458 6.52931 6.51226 5.34389 7.97776 5.34389C9.44325 5.34389 10.6309 6.52931 10.6309 7.99037C10.6309 9.45224 9.44325 10.638 7.97776 10.638C6.51226 10.638 5.32458 9.45224 5.32458 7.99037Z"
                        fill="#C1FF70"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2673_3387">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/euterpehq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-[#C1FF70]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2673_3392)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.64075 15.6319V5.33298H0.217969V15.6319H3.64075V15.6319ZM1.92972 3.92735C3.12294 3.92735 3.86622 3.13585 3.86622 2.14757C3.84366 1.13732 3.12294 0.368164 1.95209 0.368164C0.781062 0.368195 0.015625 1.13735 0.015625 2.1476C0.015625 3.13588 0.7585 3.92738 1.90719 3.92738L1.92972 3.92735ZM5.53512 15.6319C5.53512 15.6319 5.58003 6.29929 5.53512 5.33301H8.95844V6.82657H8.93572C9.38584 6.12376 10.1968 5.09116 12.0432 5.09116C14.2959 5.09116 15.9843 6.56313 15.9843 9.72657V15.6319H12.5616V10.1223C12.5616 8.73788 12.0663 7.7932 10.8273 7.7932C9.88187 7.7932 9.31844 8.43007 9.071 9.0457C8.98047 9.26482 8.95844 9.5726 8.95844 9.88041V15.6319H5.53512Z"
                        fill="#C1FF70"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2673_3392">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </Link>
              <Link
                href="https://x.com/euterpehq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-[#C1FF70]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2673_3395)">
                      <path
                        d="M13.9331 0H16.649L10.6859 6.78967L17.6527 16H12.1855L7.90505 10.403L3.00468 16H0.288814L6.60616 8.73801L-0.0654297 0H5.53752L9.40468 5.11292L13.9331 0ZM12.9825 14.4059H14.4881L4.74638 1.53506H3.12867L12.9825 14.4059Z"
                        fill="#C1FF70"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2673_3395">
                        <rect width="17.7122" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-6 md:mt-0">
          <Link className="text-sm font-medium" href="/">
            Euterpe for Listeners
          </Link>
          <Link className="text-sm font-medium" href="/artists">
            Euterpe for Artists
          </Link>
        </div>
        <div className="flex flex-col items-start gap-6 pt-12 md:hidden">
          <div className="flex gap-[16px]">
            <Link
              href="https://www.instagram.com/euterpehq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-[#C1FF70]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2673_3387)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.69572 0.0981834C3.39342 0.156943 2.26465 0.475341 1.3532 1.38295C0.438556 2.29533 0.124113 3.42856 0.0652067 4.71732C0.0285891 5.52171 -0.185531 11.5986 0.435373 13.1923C0.854085 14.2675 1.67875 15.0941 2.76374 15.5142C3.27002 15.7111 3.84795 15.8444 4.69572 15.8833C11.7844 16.2041 14.4121 16.0295 15.5201 13.1923C15.7168 12.6873 15.8521 12.1099 15.8895 11.2642C16.2135 4.15737 15.837 2.61692 14.6015 1.38295C13.6216 0.405461 12.469 -0.259937 4.69572 0.0981834ZM4.76098 14.454C3.98485 14.4191 3.56376 14.2898 3.28276 14.181C2.57589 13.9063 2.04493 13.3775 1.7719 12.6747C1.29905 11.4638 1.45588 5.71242 1.49807 4.78178C1.53946 3.87019 1.72414 3.03707 2.36733 2.39389C3.16336 1.59982 4.19182 1.21066 11.1945 1.5267C12.1083 1.56799 12.9434 1.75229 13.5882 2.39389C14.3842 3.18794 14.779 4.22432 14.4574 11.2001C14.4224 11.9743 14.2927 12.3944 14.1836 12.6747C13.4632 14.5209 11.8059 14.7772 4.76098 14.454ZM11.2717 3.7517C11.2717 4.27737 11.6992 4.70482 12.227 4.70482C12.7547 4.70482 13.183 4.27737 13.183 3.7517C13.183 3.22604 12.7547 2.79896 12.227 2.79896C11.6992 2.79896 11.2717 3.22604 11.2717 3.7517ZM3.89013 7.99037C3.89013 10.2423 5.72021 12.0681 7.97776 12.0681C10.2353 12.0681 12.0654 10.2423 12.0654 7.99037C12.0654 5.73842 10.2353 3.91381 7.97776 3.91381C5.72021 3.91381 3.89013 5.73842 3.89013 7.99037ZM5.32458 7.99037C5.32458 6.52931 6.51226 5.34389 7.97776 5.34389C9.44325 5.34389 10.6309 6.52931 10.6309 7.99037C10.6309 9.45224 9.44325 10.638 7.97776 10.638C6.51226 10.638 5.32458 9.45224 5.32458 7.99037Z"
                      fill="#C1FF70"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2673_3387">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/company/euterpehq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-[#C1FF70]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2673_3392)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.64075 15.6319V5.33298H0.217969V15.6319H3.64075V15.6319ZM1.92972 3.92735C3.12294 3.92735 3.86622 3.13585 3.86622 2.14757C3.84366 1.13732 3.12294 0.368164 1.95209 0.368164C0.781062 0.368195 0.015625 1.13735 0.015625 2.1476C0.015625 3.13588 0.7585 3.92738 1.90719 3.92738L1.92972 3.92735ZM5.53512 15.6319C5.53512 15.6319 5.58003 6.29929 5.53512 5.33301H8.95844V6.82657H8.93572C9.38584 6.12376 10.1968 5.09116 12.0432 5.09116C14.2959 5.09116 15.9843 6.56313 15.9843 9.72657V15.6319H12.5616V10.1223C12.5616 8.73788 12.0663 7.7932 10.8273 7.7932C9.88187 7.7932 9.31844 8.43007 9.071 9.0457C8.98047 9.26482 8.95844 9.5726 8.95844 9.88041V15.6319H5.53512Z"
                      fill="#C1FF70"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2673_3392">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
            <Link
              href="https://x.com/euterpehq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-[#C1FF70]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2673_3395)">
                    <path
                      d="M13.9331 0H16.649L10.6859 6.78967L17.6527 16H12.1855L7.90505 10.403L3.00468 16H0.288814L6.60616 8.73801L-0.0654297 0H5.53752L9.40468 5.11292L13.9331 0ZM12.9825 14.4059H14.4881L4.74638 1.53506H3.12867L12.9825 14.4059Z"
                      fill="#C1FF70"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2673_3395">
                      <rect width="17.7122" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="h-[1px] w-full bg-[#1E1E1E]" />
        <div className="flex w-full flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div className="flex w-full justify-center">
            <p className="text-sm font-medium text-[#757575]">
              © 2024 Euterpe. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
