"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { scrollToHref } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";

function FirstCTA() {
  const pathname = usePathname();
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    sendGAEvent(
      "click",
      "Waitlist Button",
      "First CTA",
      pathname,
      e.currentTarget.href,
    );
    scrollToHref(e);
  }
  return (
    <div className="flex flex-col-reverse justify-items-stretch gap-12 bg-[#070707] px-[24px] py-[64px] md:grid md:grid-cols-2 md:px-[60px] md:py-10">
      <div className="mt-0 flex flex-col gap-6 md:mt-[72px]">
        <div className="flex flex-col gap-5">
          <h1 className="text-[32px] font-semibold leading-tight md:text-[48px]">
            Expand your audience
          </h1>
          <p className="max-w-[277px] text-[18px] text-[#B1B5C6]">
            Share your music, get discovered and expand your fanbase
          </p>
        </div>
        <Button size="sm" className="w-fit" asChild>
          <Link href="#waitlist" onClick={handleClick}>
            Join the waitlist
          </Link>
        </Button>
      </div>
      <div className="flex justify-center md:justify-end">
        <SVGImage />
      </div>
    </div>
  );
}

function SVGImage() {
  return (
    <div>
      <svg
        className="block md:hidden"
        width="374"
        height="374"
        viewBox="0 0 374 374"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2662_8520)">
          <rect
            x="88"
            y="88"
            width="198"
            height="198"
            rx="99"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="58"
            y="58"
            width="258"
            height="258"
            rx="129"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="28"
            y="28"
            width="318"
            height="318"
            rx="159"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-2"
            y="-2"
            width="378"
            height="378"
            rx="189"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-32"
            y="-32"
            width="438"
            height="438"
            rx="219"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-62"
            y="-62"
            width="498"
            height="498"
            rx="249"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-92"
            y="-92"
            width="558"
            height="558"
            rx="279"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-122"
            y="-122"
            width="618"
            height="618"
            rx="309"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-152"
            y="-152"
            width="678"
            height="678"
            rx="339"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-182"
            y="-182"
            width="738"
            height="738"
            rx="369"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-212"
            y="-212"
            width="798"
            height="798"
            rx="399"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <path
            d="M161.543 218.227C172.06 268.496 184.141 415.267 221.61 406.858C245.466 401.503 221.288 208.169 221.288 208.169C216.238 229.256 177.535 236.554 161.543 218.227Z"
            fill="#C1FF70"
          />
          <path
            d="M210.282 348.905C205.9 350.338 201.121 349.632 196.629 348.362C192.897 334.661 189.847 316.868 185.481 303.347C190.524 301.178 195.615 298.998 201.067 298.202C205.285 312.985 208.527 333.677 210.282 348.905Z"
            fill="#C1FF70"
          />
          <path
            d="M230.436 158.073C224.85 149.623 216.986 142.673 207.79 138.541C180.185 126.153 146.717 141.518 138.038 169.722C135.544 177.846 135.299 186.594 136.983 195.015C137.641 198.885 140.999 207.435 140.999 207.435C141.514 208.567 142.07 209.68 142.657 210.768C143.758 212.812 144.977 214.783 146.326 216.664C149.31 220.864 152.89 224.619 156.998 227.739C157.504 228.131 158.023 228.505 158.538 228.871C160.563 230.28 162.673 231.525 164.858 232.623C181.358 240.856 202.111 240.054 217.175 229.855C219.644 228.176 221.94 226.275 224.053 224.177C230.435 217.827 235.084 209.707 237.513 200.94C238.086 198.849 238.539 196.719 238.86 194.567C238.86 194.567 238.887 194.276 238.927 193.771C239.101 191.541 239.52 185.093 238.984 180.567C237.922 172.568 234.904 164.836 230.436 158.073Z"
            fill="#C1FF70"
          />
          <path
            d="M211.713 239.657C206.98 241.122 201.741 243.017 199.678 247.554C198.128 250.961 198.818 254.98 199.602 258.696C201.67 268.503 205.201 269.593 214.246 267.86C224.806 265.836 235.21 262.882 245.307 259.264C252.228 256.783 256.184 250.857 254.467 242.943C249.886 221.833 223.499 236.008 211.713 239.657Z"
            fill="#C1FF70"
          />
          <path
            d="M219.748 265.009C214.925 266.158 209.569 267.7 207.215 272.084C205.448 275.375 205.879 279.422 206.423 283.174C207.86 293.076 211.319 294.393 220.467 293.26C231.147 291.938 241.731 289.679 252.052 286.739C259.128 284.724 263.46 279.081 262.253 271.087C259.032 249.764 231.757 262.148 219.748 265.009Z"
            fill="#C1FF70"
          />
          <path
            d="M224.236 290.808C219.326 291.535 213.85 292.609 211.133 296.762C209.093 299.881 209.183 303.94 209.41 307.715C210.012 317.679 213.352 319.285 222.578 318.945C233.347 318.548 244.101 317.213 254.649 315.177C261.879 313.781 266.678 308.546 266.145 300.499C264.724 279.032 236.462 288.997 224.236 290.808Z"
            fill="#C1FF70"
          />
          <path
            d="M227.007 315.86C222.078 316.462 216.575 317.395 213.753 321.475C211.635 324.539 211.623 328.595 211.757 332.372C212.109 342.341 215.411 344.03 224.646 343.925C235.427 343.803 246.216 342.743 256.816 340.978C264.083 339.768 269.013 334.661 268.682 326.609C267.795 305.129 239.281 314.363 227.007 315.86Z"
            fill="#C1FF70"
          />
          <path
            d="M222.07 315.133C218.415 314.965 214.381 312.358 213.946 308.118C213.806 306.759 213.746 305.394 213.767 304.031C213.8 301.745 214.157 299.261 215.81 297.732C216.536 297.06 217.455 296.636 218.388 296.304C220.299 295.624 224.039 294.285 226.065 295.457C229.341 297.352 227.983 305.817 228.124 309.148C228.31 313.481 225.341 315.283 222.07 315.133Z"
            fill="#C1FF70"
          />
          <path
            d="M223.255 340.282C219.6 340.114 215.566 337.507 215.13 333.268C214.991 331.908 214.931 330.543 214.951 329.18C214.984 326.894 215.341 324.41 216.994 322.881C217.721 322.21 218.639 321.785 219.572 321.453C221.483 320.774 225.224 319.434 227.25 320.606C230.525 322.501 229.167 330.966 229.309 334.297C229.494 338.629 226.526 340.431 223.255 340.282Z"
            fill="#C1FF70"
          />
          <path
            d="M237.903 193.73C230.243 197.048 222.781 200.604 214.837 203.253C206.883 205.906 198.704 207.966 190.411 209.314C182.149 210.658 173.819 211.28 165.433 211.468C161.418 211.558 157.398 211.492 153.381 211.291C149.515 211.097 144.54 209.794 140.867 211.019C139.024 211.633 139.202 213.937 140.653 214.899C143.85 217.018 149.092 216.851 152.774 217.172C157.128 217.552 161.494 217.75 165.855 217.779C174.553 217.834 183.284 216.965 191.826 215.517C208.484 212.693 226.018 207.824 240.537 199.034C243.298 197.364 240.94 192.415 237.903 193.73Z"
            fill="#C1FF70"
          />
          <path
            d="M185.575 147.507C185.226 146.624 184.485 145.971 183.589 145.785C183.368 145.712 183.139 145.659 182.904 145.639C182.655 145.586 182.41 145.598 182.169 145.676C181.788 145.713 181.44 145.845 181.125 146.075C181.092 146.091 181.06 146.108 181.028 146.124C180.848 146.284 180.668 146.444 180.49 146.604C180.24 146.875 180.073 147.187 179.986 147.541C179.798 148.109 179.751 148.777 179.98 149.357C180.166 149.828 180.443 150.244 180.809 150.595C181.252 151.018 182.202 151.415 182.815 151.307C182.851 151.301 182.887 151.295 182.922 151.288C183.169 151.242 183.416 151.196 183.663 151.15C184.034 151.043 184.349 150.852 184.608 150.579C184.795 150.413 184.951 150.223 185.089 150.02C185.656 149.344 185.91 148.358 185.575 147.507Z"
            fill="#C1FF70"
          />
          <path
            d="M168.917 151.791C168.279 151.501 167.588 151.412 166.919 151.634C166.287 151.842 165.719 152.342 165.428 152.944C165.15 153.52 165.074 154.34 165.317 154.955C165.57 155.593 166.01 156.197 166.651 156.488C167.289 156.778 167.98 156.867 168.648 156.645C169.28 156.436 169.848 155.937 170.139 155.334C170.416 154.759 170.493 153.939 170.25 153.323C169.998 152.686 169.556 152.083 168.917 151.791Z"
            fill="#C1FF70"
          />
          <path
            d="M154.186 167.207C153.423 166.86 152.596 166.755 151.797 167.019C151.041 167.269 150.362 167.865 150.014 168.586C149.682 169.274 149.591 170.254 149.881 170.991C150.183 171.755 150.711 172.476 151.476 172.825C152.238 173.172 153.065 173.277 153.864 173.013C154.62 172.763 155.299 172.166 155.647 171.446C155.98 170.758 156.071 169.778 155.78 169.041C155.479 168.278 154.952 167.556 154.186 167.207Z"
            fill="#C1FF70"
          />
          <path
            d="M172.81 170.244C171.917 170.048 170.718 170.329 170.176 171.115C170.157 171.142 170.139 171.168 170.121 171.196C169.818 171.553 169.62 171.962 169.527 172.426C169.436 172.906 169.471 173.379 169.63 173.847C169.792 174.313 170.058 174.71 170.427 175.038C170.787 175.352 171.198 175.56 171.66 175.664C171.692 175.674 171.723 175.685 171.754 175.696C172.672 175.999 173.8 175.51 174.388 174.825C175.019 174.091 175.213 173.043 174.891 172.108C174.57 171.172 173.767 170.454 172.81 170.244Z"
            fill="#C1FF70"
          />
          <path
            d="M184.642 159.181C183.951 159.06 183.254 159.158 182.669 159.554C181.96 160.032 181.441 160.967 181.557 161.858C181.651 162.581 181.914 163.209 182.465 163.695C183.74 164.815 185.762 164.429 186.487 162.927C187.186 161.476 186.31 159.471 184.642 159.181Z"
            fill="#C1FF70"
          />
          <path
            d="M206.72 146.289C206.371 145.404 205.589 144.697 204.662 144.541C204.539 144.496 204.421 144.463 204.315 144.444C203.669 144.331 203.066 144.401 202.481 144.687C201.907 144.968 201.493 145.391 201.191 145.954C200.868 146.556 200.815 147.511 201.07 148.157C201.558 149.396 202.652 150.15 203.965 150.147C204.657 150.147 205.524 149.724 205.95 149.183C206.007 149.109 206.064 149.028 206.119 148.947C206.775 148.284 207.071 147.177 206.72 146.289Z"
            fill="#C1FF70"
          />
          <path
            d="M215.683 155.9C212.423 156.977 214.193 162.126 217.458 161.047C220.717 159.97 218.948 154.821 215.683 155.9Z"
            fill="#C1FF70"
          />
          <path
            d="M202.674 164.894C202.053 164.612 201.381 164.526 200.731 164.74C200.115 164.943 199.563 165.43 199.28 166.015C199.01 166.575 198.935 167.373 199.171 167.971C199.416 168.593 199.846 169.179 200.468 169.463C201.089 169.745 201.761 169.831 202.411 169.617C203.027 169.414 203.579 168.927 203.863 168.342C204.133 167.782 204.207 166.983 203.971 166.385C203.726 165.764 203.298 165.177 202.674 164.894Z"
            fill="#C1FF70"
          />
          <path
            d="M188.747 178.779C185.402 179.885 187.218 185.169 190.568 184.061C193.913 182.955 192.098 177.672 188.747 178.779Z"
            fill="#C1FF70"
          />
          <path
            d="M154.266 186.515C154.178 186.579 154.091 186.641 154.003 186.705C153.32 187.2 152.922 188.172 153.255 189.015C153.591 189.868 154.367 190.421 155.28 190.408C155.389 190.406 155.498 190.405 155.607 190.403C156.981 190.384 157.887 188.904 157.447 187.629C157.008 186.355 155.371 185.715 154.266 186.515Z"
            fill="#C1FF70"
          />
          <path
            d="M219.077 171.506C218.721 171.327 218.345 171.245 217.951 171.261C217.54 171.282 217.165 171.407 216.825 171.633C216.696 171.7 216.567 171.766 216.437 171.832C216.298 171.956 216.159 172.081 216.019 172.204C215.825 172.415 215.696 172.657 215.629 172.932C215.483 173.372 215.446 173.892 215.624 174.342C215.767 174.707 215.984 175.031 216.267 175.302C216.614 175.635 217.345 175.935 217.824 175.855C217.969 175.83 218.112 175.807 218.255 175.783C218.666 175.762 219.041 175.637 219.382 175.411C219.705 175.19 219.952 174.903 220.125 174.549C220.36 174.002 220.421 173.406 220.22 172.822C220.032 172.27 219.596 171.769 219.077 171.506Z"
            fill="#C1FF70"
          />
          <path
            d="M231.965 179.065C229.349 179.93 230.769 184.062 233.39 183.196C236.006 182.331 234.585 178.199 231.965 179.065Z"
            fill="#C1FF70"
          />
          <path
            d="M206.695 189.267C203.843 190.209 205.391 194.715 208.248 193.77C211.101 192.828 209.552 188.322 206.695 189.267Z"
            fill="#C1FF70"
          />
          <path
            d="M175.794 195.246C175.144 195.461 174.561 195.973 174.262 196.592C173.977 197.184 173.898 198.025 174.148 198.656C174.69 200.03 176.149 200.862 177.569 200.393C178.218 200.178 178.802 199.666 179.1 199.047C179.386 198.455 179.464 197.614 179.215 196.982C178.672 195.609 177.214 194.777 175.794 195.246Z"
            fill="#C1FF70"
          />
          <path
            d="M150.473 200.025C147.178 201.114 148.968 206.319 152.268 205.228C155.562 204.138 153.773 198.935 150.473 200.025Z"
            fill="#C1FF70"
          />
          <path
            d="M244.388 258.139C237.531 260.202 230.636 262.271 223.902 264.702C223.272 264.929 223.607 266.052 224.265 265.873C231.239 263.988 238.133 261.713 244.991 259.454C245.858 259.169 245.236 257.884 244.388 258.139Z"
            fill="#C1FF70"
          />
          <path
            d="M251.417 286.893C245.358 286.562 238.94 287.847 232.959 288.878C227.057 289.893 220.36 290.742 214.922 293.353C214.602 293.506 214.744 293.949 215.086 293.919C221.11 293.39 227.163 291.277 233.154 290.232C239.196 289.178 245.444 288.996 251.425 287.751C251.899 287.652 251.941 286.921 251.417 286.893Z"
            fill="#C1FF70"
          />
          <path
            d="M260.237 313.728C253.29 313.497 246.154 314.51 239.26 315.232C231.776 316.014 224.097 316.65 216.771 318.386C216.305 318.497 216.419 319.149 216.893 319.118C224.139 318.639 231.344 317.355 238.564 316.584C245.753 315.818 253.138 315.684 260.265 314.536C260.708 314.464 260.709 313.744 260.237 313.728Z"
            fill="#C1FF70"
          />
          <path
            d="M214.342 246.473C202.281 235.376 182.917 241.81 169.333 245.042C147.023 250.352 147.35 267.429 142.748 287.579C141.608 292.573 140.352 329.548 138.809 330.868C97.2962 366.373 71.765 391.738 27.7355 420.954L66.3933 504.354C84.1306 486.285 134.478 436.443 169.95 403.783C180.076 394.46 185.694 387.977 192.379 375.874C199.396 363.17 199.911 347.743 198.677 333.085C197.03 313.522 191.68 293.556 184.573 275.158C187.509 274.186 192.261 273.592 195.197 272.621C199.217 281.332 204.366 294.448 216.031 291.989C235.859 287.809 224.752 256.052 214.342 246.473Z"
            fill="#C1FF70"
          />
          <path
            d="M226.334 263.639C222.427 265.563 218.208 266.866 213.878 267.488C214.721 270.505 215.687 274.293 216.53 277.311C217.105 279.37 217.708 281.486 219.007 283.192C220.306 284.898 222.486 286.114 224.53 285.631C227.348 284.964 228.538 281.624 228.821 278.712C229.302 273.749 228.415 268.222 226.334 263.639Z"
            fill="#C1FF70"
          />
          <path
            d="M196.131 263.243C194.855 264.923 195.088 267.575 195.225 269.616C195.368 271.74 195.62 274.702 197.224 276.288C197.434 276.496 197.778 276.414 197.819 276.109C198.086 274.11 197.209 271.893 197.095 269.854C196.98 267.787 197.691 265.492 197.189 263.499C197.063 262.996 196.449 262.823 196.131 263.243Z"
            fill="#C1FF70"
          />
          <path
            d="M178.25 264.724C177.489 264.294 176.412 265.197 177.144 265.942C180.832 269.692 183.908 272.917 185.472 278.097C185.766 279.07 187.306 278.883 187.047 277.857C185.779 272.84 182.906 267.358 178.25 264.724Z"
            fill="#C1FF70"
          />
          <path
            d="M139.846 331.022C139.136 330.502 138.36 331.435 138.862 332.106C141.921 336.199 145.308 339.678 147.607 344.338C149.655 348.49 151.162 352.89 153.177 357.062C153.428 357.582 154.352 357.365 154.174 356.767C151.505 347.748 147.786 336.833 139.846 331.022Z"
            fill="#C1FF70"
          />
        </g>
        <defs>
          <clipPath id="clip0_2662_8520">
            <rect width="374" height="374" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        className="hidden md:block"
        width="449"
        height="529"
        viewBox="0 0 449 529"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2587_3232)">
          <rect
            x="126"
            y="201"
            width="198"
            height="198"
            rx="99"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="96"
            y="171"
            width="258"
            height="258"
            rx="129"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="66"
            y="141"
            width="318"
            height="318"
            rx="159"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="36"
            y="111"
            width="378"
            height="378"
            rx="189"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="6"
            y="81"
            width="438"
            height="438"
            rx="219"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-24"
            y="51"
            width="498"
            height="498"
            rx="249"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-54"
            y="21"
            width="558"
            height="558"
            rx="279"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-84"
            y="-9"
            width="618"
            height="618"
            rx="309"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-114"
            y="-39"
            width="678"
            height="678"
            rx="339"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-144"
            y="-69"
            width="738"
            height="738"
            rx="369"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <rect
            x="-174"
            y="-99"
            width="798"
            height="798"
            rx="399"
            stroke="#C1FF70"
            strokeWidth="2"
          />
          <path
            d="M235.958 333.715C248.058 390.881 262.26 557.773 304.73 548.242C331.772 542.174 303.69 322.328 303.69 322.328C298.034 346.301 254.159 354.566 235.958 333.715Z"
            fill="#C1FF70"
          />
          <path
            d="M291.576 482.349C286.61 483.974 281.188 483.168 276.089 481.72C271.809 466.139 268.289 445.905 263.291 430.528C269.003 428.066 274.771 425.592 280.952 424.691C285.786 441.504 289.533 465.033 291.576 482.349Z"
            fill="#C1FF70"
          />
          <path
            d="M314.289 265.391C307.917 255.776 298.963 247.865 288.504 243.157C257.112 229.043 219.153 246.489 209.391 278.559C206.585 287.796 206.336 297.745 208.277 307.323C209.038 311.725 212.88 321.453 212.88 321.453C213.469 322.741 214.105 324.006 214.774 325.245C216.031 327.571 217.423 329.814 218.961 331.954C222.364 336.733 226.442 341.006 231.118 344.559C231.694 345.005 232.285 345.431 232.872 345.848C235.176 347.452 237.577 348.87 240.062 350.121C258.828 359.499 282.395 358.604 299.469 347.018C302.268 345.111 304.869 342.951 307.262 340.568C314.489 333.35 319.742 324.12 322.471 314.151C323.114 311.773 323.622 309.351 323.979 306.904C323.979 306.904 324.009 306.573 324.053 305.998C324.243 303.463 324.698 296.129 324.073 290.982C322.841 281.884 319.387 273.087 314.289 265.391Z"
            fill="#C1FF70"
          />
          <path
            d="M293.12 358.104C287.745 359.767 281.796 361.919 279.466 367.079C277.716 370.953 278.514 375.525 279.417 379.754C281.801 390.912 285.819 392.156 296.095 390.191C308.091 387.898 319.908 384.547 331.373 380.44C339.232 377.624 343.709 370.885 341.731 361.881C336.452 337.86 306.505 353.963 293.12 358.104Z"
            fill="#C1FF70"
          />
          <path
            d="M302.253 386.93C296.775 388.233 290.692 389.983 288.031 394.968C286.034 398.71 286.538 403.314 287.169 407.583C288.835 418.849 292.771 420.35 303.165 419.07C315.3 417.575 327.323 415.015 339.045 411.679C347.08 409.392 351.986 402.977 350.587 393.882C346.853 369.622 315.893 383.686 302.253 386.93Z"
            fill="#C1FF70"
          />
          <path
            d="M307.354 416.264C301.776 417.087 295.556 418.304 292.482 423.026C290.174 426.573 290.29 431.19 290.561 435.484C291.278 446.82 295.08 448.649 305.564 448.271C317.802 447.828 330.02 446.319 342.001 444.012C350.214 442.431 355.65 436.48 355.017 427.325C353.33 402.903 321.243 414.214 307.354 416.264Z"
            fill="#C1FF70"
          />
          <path
            d="M310.504 444.75C304.904 445.429 298.653 446.486 295.46 451.125C293.063 454.608 293.063 459.222 293.228 463.519C293.662 474.859 297.42 476.784 307.915 476.673C320.167 476.543 332.425 475.347 344.466 473.349C352.721 471.979 358.307 466.173 357.903 457.013C356.823 432.578 324.448 443.057 310.504 444.75Z"
            fill="#C1FF70"
          />
          <path
            d="M304.96 443.943C300.808 443.749 296.219 440.781 295.71 435.958C295.547 434.412 295.475 432.86 295.493 431.31C295.523 428.71 295.92 425.885 297.792 424.148C298.614 423.384 299.656 422.903 300.715 422.526C302.882 421.755 307.125 420.235 309.429 421.57C313.155 423.727 311.642 433.353 311.814 437.142C312.039 442.07 308.674 444.117 304.96 443.943Z"
            fill="#C1FF70"
          />
          <path
            d="M306.307 472.538C302.156 472.344 297.566 469.376 297.058 464.553C296.895 463.007 296.822 461.455 296.841 459.905C296.87 457.305 297.267 454.48 299.139 452.743C299.962 451.98 301.004 451.498 302.062 451.121C304.23 450.35 308.473 448.83 310.777 450.165C314.503 452.322 312.99 461.948 313.161 465.737C313.386 470.664 310.022 472.71 306.307 472.538Z"
            fill="#C1FF70"
          />
          <path
            d="M322.911 305.933C314.209 309.702 305.734 313.742 296.708 316.75C287.67 319.762 278.374 322.1 268.945 323.628C259.553 325.15 250.079 325.85 240.542 326.058C235.975 326.157 231.402 326.079 226.832 325.847C222.435 325.623 216.772 324.136 212.597 325.527C210.504 326.225 210.714 328.846 212.368 329.941C216.012 332.356 221.974 332.169 226.162 332.538C231.116 332.974 236.082 333.203 241.044 333.239C250.937 333.31 260.865 332.328 270.576 330.687C289.514 327.487 309.441 321.96 325.925 311.97C329.06 310.072 326.362 304.438 322.911 305.933Z"
            fill="#C1FF70"
          />
          <path
            d="M263.426 253.352C263.027 252.346 262.183 251.603 261.165 251.391C260.913 251.308 260.653 251.247 260.386 251.224C260.103 251.164 259.824 251.177 259.551 251.266C259.118 251.307 258.724 251.458 258.367 251.719C258.329 251.737 258.293 251.756 258.256 251.774C258.053 251.956 257.85 252.138 257.647 252.32C257.364 252.627 257.175 252.983 257.078 253.385C256.866 254.031 256.816 254.791 257.077 255.451C257.29 255.986 257.606 256.46 258.023 256.859C258.527 257.341 259.608 257.794 260.304 257.671C260.345 257.664 260.386 257.657 260.426 257.649C260.706 257.597 260.986 257.545 261.266 257.493C261.687 257.372 262.044 257.155 262.337 256.844C262.549 256.656 262.727 256.44 262.882 256.209C263.524 255.44 263.809 254.319 263.426 253.352Z"
            fill="#C1FF70"
          />
          <path
            d="M244.482 258.222C243.757 257.891 242.972 257.789 242.213 258.041C241.496 258.277 240.853 258.844 240.525 259.529C240.21 260.184 240.127 261.116 240.405 261.816C240.694 262.543 241.197 263.229 241.925 263.561C242.651 263.892 243.435 263.993 244.194 263.742C244.911 263.504 245.554 262.937 245.883 262.252C246.196 261.597 246.28 260.665 246.002 259.965C245.714 259.24 245.21 258.554 244.482 258.222Z"
            fill="#C1FF70"
          />
          <path
            d="M227.732 275.749C226.865 275.353 225.925 275.233 225.019 275.532C224.161 275.816 223.391 276.494 222.999 277.313C222.624 278.096 222.524 279.21 222.856 280.048C223.201 280.917 223.803 281.737 224.673 282.135C225.54 282.531 226.479 282.65 227.386 282.351C228.244 282.068 229.013 281.389 229.406 280.571C229.781 279.788 229.881 278.674 229.549 277.836C229.204 276.968 228.603 276.146 227.732 275.749Z"
            fill="#C1FF70"
          />
          <path
            d="M248.909 279.202C247.895 278.977 246.534 279.296 245.921 280.19C245.899 280.22 245.879 280.25 245.858 280.282C245.515 280.687 245.292 281.153 245.188 281.68C245.086 282.226 245.127 282.764 245.309 283.296C245.496 283.826 245.799 284.278 246.219 284.651C246.629 285.008 247.097 285.246 247.622 285.364C247.657 285.375 247.693 285.388 247.729 285.4C248.772 285.746 250.051 285.191 250.717 284.412C251.432 283.578 251.648 282.387 251.279 281.323C250.911 280.258 249.997 279.44 248.909 279.202Z"
            fill="#C1FF70"
          />
          <path
            d="M262.363 266.622C261.577 266.485 260.786 266.595 260.122 267.045C259.319 267.588 258.733 268.651 258.868 269.664C258.977 270.487 259.277 271.201 259.905 271.754C261.357 273.029 263.651 272.593 264.47 270.884C265.26 269.235 264.257 266.954 262.363 266.622Z"
            fill="#C1FF70"
          />
          <path
            d="M287.468 251.967C287.069 250.959 286.178 250.154 285.125 249.976C284.985 249.925 284.851 249.888 284.73 249.866C283.996 249.737 283.312 249.816 282.648 250.141C281.997 250.46 281.528 250.941 281.187 251.581C280.822 252.265 280.765 253.351 281.057 254.086C281.616 255.496 282.86 256.354 284.352 256.352C285.138 256.352 286.122 255.873 286.603 255.257C286.668 255.173 286.732 255.081 286.794 254.989C287.538 254.235 287.869 252.977 287.468 251.967Z"
            fill="#C1FF70"
          />
          <path
            d="M297.658 262.891C293.96 264.113 295.987 269.971 299.692 268.746C303.389 267.524 301.362 261.666 297.658 262.891Z"
            fill="#C1FF70"
          />
          <path
            d="M282.865 273.118C282.16 272.797 281.396 272.699 280.658 272.942C279.96 273.172 279.334 273.725 279.014 274.39C278.709 275.027 278.627 275.935 278.897 276.615C279.177 277.322 279.667 277.99 280.375 278.313C281.081 278.634 281.845 278.732 282.583 278.489C283.281 278.259 283.907 277.706 284.227 277.041C284.532 276.404 284.614 275.496 284.343 274.816C284.063 274.109 283.574 273.441 282.865 273.118Z"
            fill="#C1FF70"
          />
          <path
            d="M267.031 288.905C263.236 290.159 265.316 296.17 269.117 294.913C272.912 293.658 270.833 287.648 267.031 288.905Z"
            fill="#C1FF70"
          />
          <path
            d="M227.83 297.7C227.73 297.772 227.631 297.843 227.531 297.916C226.757 298.478 226.309 299.584 226.69 300.543C227.075 301.514 227.958 302.143 228.995 302.129C229.118 302.127 229.242 302.125 229.366 302.124C230.926 302.102 231.951 300.421 231.446 298.97C230.943 297.521 229.083 296.792 227.83 297.7Z"
            fill="#C1FF70"
          />
          <path
            d="M301.516 280.637C301.111 280.432 300.684 280.34 300.237 280.357C299.77 280.381 299.345 280.523 298.959 280.78C298.813 280.855 298.666 280.931 298.519 281.005C298.361 281.146 298.204 281.288 298.046 281.428C297.826 281.667 297.68 281.943 297.605 282.256C297.44 282.756 297.401 283.347 297.604 283.86C297.768 284.274 298.015 284.643 298.338 284.952C298.733 285.33 299.564 285.672 300.108 285.582C300.272 285.554 300.435 285.528 300.598 285.501C301.064 285.477 301.49 285.336 301.876 285.079C302.242 284.827 302.522 284.502 302.717 284.099C302.982 283.477 303.05 282.799 302.819 282.135C302.604 281.507 302.107 280.937 301.516 280.637Z"
            fill="#C1FF70"
          />
          <path
            d="M316.172 289.23C313.204 290.211 314.831 294.912 317.805 293.93C320.773 292.948 319.145 288.248 316.172 289.23Z"
            fill="#C1FF70"
          />
          <path
            d="M287.44 300.829C284.204 301.898 285.978 307.024 289.219 305.953C292.455 304.883 290.682 299.757 287.44 300.829Z"
            fill="#C1FF70"
          />
          <path
            d="M252.303 307.628C251.566 307.871 250.905 308.453 250.568 309.157C250.246 309.83 250.16 310.786 250.445 311.505C251.066 313.068 252.725 314.015 254.336 313.483C255.073 313.239 255.734 312.657 256.071 311.954C256.393 311.28 256.479 310.324 256.194 309.605C255.573 308.042 253.914 307.095 252.303 307.628Z"
            fill="#C1FF70"
          />
          <path
            d="M223.513 313.061C219.775 314.296 221.825 320.218 225.569 318.979C229.307 317.743 227.257 311.823 223.513 313.061Z"
            fill="#C1FF70"
          />
          <path
            d="M330.298 379.142C322.503 381.485 314.664 383.834 307.01 386.595C306.293 386.854 306.679 388.132 307.427 387.929C315.356 385.788 323.193 383.205 330.989 380.639C331.974 380.315 331.262 378.852 330.298 379.142Z"
            fill="#C1FF70"
          />
          <path
            d="M338.293 411.842C331.399 411.461 324.103 412.919 317.302 414.086C310.592 415.238 302.977 416.198 296.8 419.164C296.436 419.339 296.599 419.843 296.988 419.809C303.839 419.212 310.718 416.812 317.529 415.627C324.398 414.434 331.505 414.231 338.305 412.819C338.844 412.707 338.889 411.875 338.293 411.842Z"
            fill="#C1FF70"
          />
          <path
            d="M348.321 442.359C340.42 442.09 332.307 443.237 324.468 444.053C315.959 444.937 307.228 445.654 298.902 447.624C298.372 447.749 298.504 448.491 299.043 448.456C307.282 447.918 315.473 446.462 323.682 445.591C331.855 444.725 340.254 444.578 348.355 443.278C348.859 443.196 348.858 442.377 348.321 442.359Z"
            fill="#C1FF70"
          />
          <path
            d="M295.677 365.889C281.937 353.257 259.958 360.557 244.535 364.222C219.204 370.242 219.634 389.666 214.473 412.582C213.194 418.262 211.891 460.318 210.142 461.817C163.096 502.166 134.173 530.995 84.2454 564.188L128.448 659.085C148.54 638.549 205.576 581.9 245.768 544.783C257.242 534.187 263.604 526.818 271.159 513.057C279.088 498.614 279.622 481.066 278.171 464.392C276.234 442.139 270.088 419.424 261.951 398.491C265.284 397.388 270.681 396.716 274.014 395.614C278.61 405.526 284.505 420.449 297.75 417.663C320.264 412.925 307.537 376.794 295.677 365.889Z"
            fill="#C1FF70"
          />
          <path
            d="M309.732 385.393C305.303 387.577 300.519 389.055 295.606 389.759C296.573 393.191 297.682 397.499 298.649 400.931C299.309 403.273 300.001 405.681 301.481 407.622C302.961 409.563 305.44 410.948 307.758 410.399C310.956 409.644 312.295 405.846 312.606 402.535C313.135 396.892 312.11 390.606 309.732 385.393Z"
            fill="#C1FF70"
          />
          <path
            d="M275.416 384.941C273.974 386.85 274.248 389.866 274.41 392.186C274.579 394.602 274.875 397.969 276.699 399.774C276.938 400.011 277.328 399.918 277.373 399.571C277.67 397.298 276.668 394.777 276.532 392.458C276.395 390.108 277.192 387.499 276.616 385.233C276.472 384.661 275.776 384.464 275.416 384.941Z"
            fill="#C1FF70"
          />
          <path
            d="M255.096 386.623C254.233 386.134 253.016 387.16 253.848 388.007C258.039 392.274 261.535 395.942 263.325 401.832C263.661 402.938 265.405 402.727 265.108 401.561C263.655 395.856 260.381 389.621 255.096 386.623Z"
            fill="#C1FF70"
          />
          <path
            d="M211.43 462.004C210.626 461.413 209.75 462.474 210.32 463.237C213.798 467.892 217.643 471.849 220.261 477.148C222.594 481.869 224.315 486.873 226.61 491.616C226.896 492.208 227.941 491.961 227.738 491.281C224.684 481.026 220.437 468.616 211.43 462.004Z"
            fill="#C1FF70"
          />
        </g>
        <defs>
          <clipPath id="clip0_2587_3232">
            <rect width="449" height="529" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default FirstCTA;
