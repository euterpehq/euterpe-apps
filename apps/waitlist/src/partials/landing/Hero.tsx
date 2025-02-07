"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { scrollToHref } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";

function Hero() {
  const pathname = usePathname();
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    sendGAEvent(
      "click",
      "Waitlist Button",
      "Hero",
      pathname,
      e.currentTarget.href,
    );
    scrollToHref(e);
  }
  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full flex-col gap-6 md:flex-row md:gap-0">
        <div className="z-20 flex flex-1 flex-col items-start justify-center gap-6 pl-[24px] md:flex-1 md:pl-[60px]">
          <div className="gap-9">
            <h1 className="py-5 text-[80px] font-bold leading-[72px] tracking-[-0.055em] md:text-[120px] md:leading-[100px]">
              Listen. <br />
              <span className="grad">Discover.</span>
              <br /> Earn.
            </h1>
            <p className="w-full text-[24px] leading-snug tracking-[-0.9px] md:w-[474px]">
              Find incredible music, support emerging artists, and get rewarded
              for every track you play
            </p>
          </div>
          <Button size="sm" asChild className="p-[12px]">
            <Link href="https://app.euterpe.fm">Start listening</Link>
          </Button>
        </div>
        <div className="relative flex w-full justify-center md:flex-1">
          <img src="/hero2.png" alt="" className="w-full object-cover" />
          {/* <div className="absolute right-10 top-[35%] md:hidden">
            <SVGImage />
          </div> */}
          <div className="absolute right-[10%] top-[-10%] md:-left-[7%] md:top-[40%]">
            <SVGImage />
          </div>
        </div>
      </div>
      {/*<div
      className="w-full h-full absolute top-0 left-0 right-0"
      style={{
        background:
          "linear-gradient(270deg, rgba(102, 102, 102, 0.20) 13.14%, #000 52.37%)",
       
      }}
      >

      </div>*/}
    </div>
  );
}

function SVGImage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="116"
      viewBox="0 0 120 116"
      fill="none"
    >
      <path
        d="M83.0211 0.0184291C82.5861 0.0313291 82.1531 0.0202718 81.7163 0.0571291C81.1764 0.101358 80.6493 0.221145 80.1296 0.368574C79.3077 0.606304 78.5171 0.947232 77.7062 1.22919C77.0778 1.45033 76.4494 1.67148 75.821 1.89446C74.671 2.2999 73.5156 2.69427 72.373 3.11997C70.672 3.75207 68.9747 4.38417 67.2756 5.01812C66.4666 5.32035 65.6631 5.62258 64.8633 5.94877C63.1255 6.65827 61.3914 7.36593 59.6572 8.07728C58.9201 8.37582 58.1829 8.67805 57.4421 8.98028C57.0864 9.12587 56.7271 9.26593 56.3788 9.42257C53.4836 10.7421 50.5903 12.0634 47.697 13.381C46.9802 13.7072 46.2799 14.0721 45.5741 14.4278C43.8399 15.3013 42.1076 16.1748 40.3753 17.0483C39.605 17.4372 38.8292 17.8076 38.0736 18.2241C36.579 19.0423 35.0789 19.8642 33.5844 20.6862C32.4326 21.3164 31.2808 21.9504 30.129 22.5825C29.766 22.7797 29.4084 22.9824 29.038 23.1685C28.3967 23.4855 27.748 23.7803 27.1251 24.1305C26.5188 24.4696 25.9217 24.8934 25.4629 25.4168C25.2012 25.7153 24.9082 26.1005 24.8013 26.493C24.7073 26.834 24.7497 27.1509 24.8308 27.4697C22.1697 28.7579 19.5049 30.0369 16.8475 31.3342C15.7657 31.8613 14.7061 32.4344 13.6372 32.9854C12.0413 33.8074 10.4472 34.6293 8.85128 35.4494C7.98698 35.8953 7.12452 36.3376 6.25837 36.7799C5.2835 37.2775 4.31783 37.7916 3.38534 38.3685C2.50077 38.9139 1.70096 39.594 0.886418 40.2408C0.619203 40.4011 0.407273 40.6149 0.246944 40.884C0.00184303 41.3004 -0.0644983 41.8091 0.0645022 42.2753C0.187974 42.7287 0.490204 43.1194 0.895635 43.3571C1.33055 43.6114 1.80048 43.6409 2.287 43.5377C3.51619 43.276 4.75459 43.0917 5.95614 42.7139C7.12636 42.3472 8.27447 41.9049 9.41151 41.4405C11.8054 40.4619 14.1385 39.3507 16.5158 38.339C18.952 37.318 21.4196 36.3634 23.8725 35.3812C27.0551 34.1041 30.2377 32.827 33.4204 31.5498C35.031 30.9048 36.6785 30.3465 38.3132 29.7586C41.9934 28.428 45.6717 27.0956 49.3556 25.7651C50.8944 25.2085 52.4277 24.6317 53.9849 24.1268C57.3647 23.0284 60.7464 21.9319 64.1243 20.8336C65.7479 20.3065 67.3715 19.7795 68.995 19.2524C69.5682 19.0663 70.1413 18.8636 70.7218 18.6959C73.8952 17.7744 77.0668 16.853 80.2402 15.9316C81.1764 15.6588 82.1088 15.3898 83.0413 15.117C83.6771 14.9327 84.3221 14.7742 84.9653 14.6102C84.8676 14.6471 84.7681 14.6821 84.6704 14.719C83.4283 15.1742 82.1936 15.6515 80.9515 16.1048C80.0338 16.442 79.116 16.7756 78.1946 17.1092C74.5549 18.4379 70.9116 19.7647 67.2719 21.0916C65.5894 21.7053 63.8995 22.3042 62.2262 22.9418C59.0196 24.1618 55.8112 25.3836 52.6046 26.6036C50.9755 27.2246 49.3482 27.8457 47.7173 28.4667C46.9101 28.7745 46.0956 29.0675 45.2995 29.4048C45.4414 29.3458 45.5814 29.2868 45.7252 29.2242C42.9019 30.3981 40.0823 31.583 37.2646 32.7625C35.9506 33.3098 34.6385 33.859 33.3245 34.4081C32.416 34.7896 31.5185 35.1969 30.6174 35.6005C28.7837 36.4224 26.9482 37.2443 25.1146 38.0662C24.2134 38.4661 23.3122 38.8752 22.4148 39.2807C21.4104 39.734 20.4153 40.2039 19.4459 40.7255C18.495 41.2359 17.6104 41.8607 16.6964 42.4338C16.1711 42.7637 15.8357 43.3073 15.8357 43.9357C15.8357 44.7282 16.3702 45.3861 17.1128 45.6146C17.5293 45.7436 17.9311 45.9095 18.3494 46.0385C18.8322 46.1877 19.3538 46.2043 19.8532 46.1914C20.8778 46.1711 21.9117 45.9887 22.9068 45.7565C24.7589 45.3253 26.5317 44.601 28.3211 43.98C29.2094 43.6704 30.1087 43.4013 31.0007 43.1065C31.994 42.7803 32.9836 42.4356 33.9677 42.0873C35.8677 41.411 37.7511 40.6997 39.6345 39.981C43.0862 38.6651 46.536 37.3457 49.984 36.0133C53.1869 34.7785 56.3917 33.542 59.5927 32.3054C60.774 31.8502 61.9645 31.419 63.155 30.9933C62.9228 31.0854 62.6924 31.1776 62.4602 31.2716C61.7876 31.5406 61.1241 31.8429 60.4552 32.1285C58.9883 32.7588 57.5195 33.3909 56.0526 34.0211C52.459 35.5654 48.8672 37.1079 45.2737 38.6504C43.8067 39.2788 42.3343 39.8943 40.8858 40.5633C37.5797 42.0892 34.2736 43.6169 30.9675 45.1428C29.6922 45.7325 28.4188 46.3204 27.1417 46.9101C26.5354 47.1902 25.9457 47.4962 25.3523 47.7984C23.128 48.9244 20.9055 50.0485 18.683 51.1745C17.8371 51.6021 16.9986 52.0407 16.1417 52.4516C15.6736 52.6764 15.2055 52.9068 14.7503 53.1593C14.1956 53.467 13.687 53.843 13.1931 54.2447C12.7747 54.5893 12.4006 55.0298 12.1537 55.5089C11.8644 56.0673 11.7262 56.6884 11.4939 57.2689C11.4202 57.5453 11.4202 57.8199 11.4939 58.0945C11.5677 58.3598 11.7022 58.5865 11.8939 58.7819C12.0874 58.9754 12.3177 59.108 12.5794 59.1799C12.854 59.2536 13.1323 59.2536 13.4068 59.1799C13.7754 59.1246 14.1421 59.0694 14.5107 59.0196C15.3879 58.9053 16.267 58.7948 17.1423 58.6639C18.1522 58.5128 19.14 58.2953 20.1241 58.0226C22.0149 57.5029 23.8688 56.845 25.7024 56.1466C28.4151 55.1146 31.0928 53.9978 33.8 52.9547C36.5293 51.8988 39.2622 50.8391 41.9934 49.7813C45.3087 48.4968 48.6258 47.2142 51.943 45.9297C53.3288 45.3935 54.7312 44.8996 56.1355 44.402C59.7862 43.1083 63.4351 41.8128 67.0858 40.5172C68.5435 39.9994 69.9975 39.4834 71.4552 38.9674C71.9252 38.7997 72.3933 38.6191 72.8706 38.4698C73.147 38.3832 73.4216 38.2984 73.698 38.2118C71.1807 39.1185 68.6615 40.0178 66.1423 40.9208C63.26 41.9547 60.3741 42.9922 57.4919 44.0242C57.0864 44.1698 56.6884 44.3338 56.2866 44.4923C54.8879 45.0488 53.491 45.6054 52.0904 46.1619C48.5835 47.5607 45.0765 48.9539 41.5677 50.3508C40.801 50.6548 40.0068 50.9294 39.2567 51.2814C38.2874 51.7366 37.3143 52.1844 36.3413 52.6378C33.155 54.1194 29.965 55.6029 26.7768 57.0846C26.1908 57.3573 25.614 57.6448 25.0372 57.9305C23.2275 58.8242 21.4288 59.7291 19.6578 60.6929C18.9207 61.091 18.2057 61.5296 17.4501 61.8926C16.7701 62.2188 16.0716 62.5008 15.4027 62.8472C14.7816 63.166 14.1661 63.5844 13.7054 64.1151C13.4032 64.4597 13.0936 64.8946 12.9738 65.348C12.8208 65.9322 12.8632 66.4979 13.0364 67.0748C13.1452 67.4341 13.311 67.7732 13.4124 68.1362C13.5322 68.5748 13.8252 68.9526 14.2177 69.183C14.6563 69.4373 15.0839 69.441 15.5667 69.3581C17.5459 69.0245 19.5381 68.7591 21.5228 68.4458C23.5002 68.1307 25.45 67.7179 27.3868 67.2093C31.2384 66.1994 35.0034 64.8983 38.7702 63.6138C42.0321 62.4971 45.3105 61.4411 48.5945 60.3944C52.3392 59.1984 56.0821 58.0042 59.8268 56.8082C61.3361 56.3272 62.8435 55.8462 64.3528 55.3633C64.9075 55.1883 65.4567 54.9892 66.0151 54.8344C71.9178 53.2109 77.8334 51.6371 83.7416 50.0356C84.2263 49.9048 84.711 49.7887 85.2049 49.6763C86.88 49.2948 88.5589 48.9133 90.234 48.5337C92.0548 48.1209 93.8774 47.7081 95.6963 47.2934C96.3818 47.1368 97.0655 46.9783 97.7529 46.8383C98.1731 46.7516 98.5933 46.665 99.0134 46.5784C96.6988 47.4648 94.3657 48.2996 92.0327 49.1345C90.2783 49.761 88.5257 50.3968 86.7713 51.0271C83.655 52.1475 80.5387 53.2662 77.4187 54.3848C72.7323 56.0673 68.0423 57.7462 63.3651 59.4582C59.7033 60.7961 56.0397 62.1377 52.3779 63.4775C50.7396 64.0783 49.0995 64.6735 47.474 65.3093C44.0684 66.6398 40.6665 67.9722 37.2609 69.3028C34.8725 70.2353 32.5303 71.2783 30.1732 72.2864C29.2186 72.6973 28.2622 73.1046 27.3094 73.5156C26.13 74.026 24.9469 74.5236 23.7859 75.0673C23.1132 75.3824 22.4498 75.7196 21.8232 76.1159C21.1524 76.5415 20.5369 77.0483 19.89 77.509C19.6523 77.6509 19.4625 77.8408 19.3206 78.0785C19.1087 78.4452 19.0479 78.893 19.1621 79.3003C19.2708 79.6965 19.5362 80.0411 19.89 80.2476C20.2826 80.4779 20.6788 80.4853 21.1119 80.4079C21.1266 80.406 21.1395 80.4024 21.1542 80.4005C20.7322 80.6622 20.336 80.9736 19.9711 81.3072C19.4809 81.755 19.2782 82.3963 18.9778 82.9658C18.7124 83.4707 18.683 84.0531 18.9778 84.5543C19.3464 85.1846 20.0614 85.4352 20.7543 85.2767C22.6617 84.8437 24.5893 84.4898 26.4857 83.9978C28.3985 83.5002 30.282 82.8699 32.1506 82.2213C34.0267 81.5726 35.8898 80.8815 37.7603 80.2144C38.9821 79.7758 40.2058 79.3335 41.446 78.9446C44.2417 78.0693 47.0354 77.1921 49.8292 76.3167C52.8736 75.364 55.9144 74.4112 58.9551 73.4584C59.4029 73.3165 59.8581 73.2078 60.3114 73.0917C61.8281 72.7029 63.3485 72.314 64.8652 71.9233C68.4569 71.0019 72.0468 70.0805 75.6367 69.159C76.173 69.0227 76.7074 68.8715 77.2474 68.7536C78.4526 68.4864 79.6597 68.2247 80.8649 67.9593C84.3995 67.1798 87.9341 66.4058 91.4688 65.6281C92.0327 65.5046 92.5948 65.3904 93.1642 65.2835C94.9278 64.9573 96.6951 64.6274 98.4606 64.3012C100.361 63.9492 102.255 63.5696 104.162 63.2637C105.688 63.0186 107.216 62.7735 108.746 62.5284C109.286 62.4418 109.822 62.357 110.362 62.2704C111.344 62.1138 112.317 61.8963 113.301 61.7415C113.465 61.7249 113.629 61.712 113.791 61.7046C113.666 61.8521 113.537 61.9958 113.403 62.1377C113.183 62.3626 112.938 62.5616 112.691 62.7569C109.897 64.8688 106.643 66.2289 103.527 67.7806C101.745 68.6688 99.9607 69.5405 98.151 70.3716C96.3247 71.2101 94.4855 72.0192 92.6427 72.8208C89.1799 74.3227 85.719 75.8228 82.2489 77.3045C77.0649 79.5215 71.8809 81.7347 66.7007 83.9536C61.4153 86.2203 56.1042 88.4391 50.8575 90.7979C48.8636 91.6936 46.8677 92.5892 44.8738 93.4885C43.9929 93.8847 43.1175 94.2883 42.2385 94.6882C41.1825 95.1711 40.1321 95.6668 39.1056 96.2086C38.081 96.7486 37.1374 97.4267 36.1681 98.057C35.6318 98.409 35.3388 99.0263 35.5138 99.6658C35.5175 99.6787 35.5212 99.6916 35.5249 99.7064C30.0792 101.75 24.6409 103.809 19.2045 105.873C17.8205 106.398 16.4273 106.882 15.0378 107.382C14.0703 107.73 13.1028 108.077 12.1353 108.427C11.5455 108.637 10.9558 108.847 10.3661 109.063C9.74507 109.291 9.12403 109.514 8.49377 109.704C8.98028 109.243 9.5055 108.819 10.027 108.408C11.4037 107.363 12.8614 106.433 14.332 105.526C15.926 104.544 17.5146 103.549 19.1087 102.565C22.529 100.445 26.0323 98.4716 29.5485 96.5182C30.3299 96.0851 31.1113 95.6502 31.8926 95.219C33.0776 94.7491 34.2681 94.2902 35.4457 93.7981C38.4293 92.5542 41.3944 91.2624 44.3688 89.9945C46.4218 89.1154 48.4342 88.1461 50.4613 87.2025C53.2183 85.9254 55.9715 84.6428 58.7284 83.3638C58.9219 83.2754 59.1081 83.1666 59.2942 83.0671C59.8692 82.7649 60.4404 82.4664 61.0136 82.1641C62.7367 81.2611 64.4616 80.3544 66.1828 79.4514C67.6774 78.6645 69.1738 77.8795 70.6683 77.0926C72.5038 76.1306 74.2656 75.0415 76.0366 73.9597C76.7092 73.5469 77.3856 73.1359 78.0656 72.7268C78.7032 72.3435 79.0276 71.5769 78.8286 70.8508C78.6351 70.1523 77.9624 69.6161 77.2271 69.6326C76.7166 69.6455 76.2227 69.664 75.7252 69.7967C75.3142 69.9035 74.918 70.062 74.5255 70.2242C73.593 70.6186 72.7047 71.0848 71.8091 71.5529C71.2599 71.8367 70.6978 72.0966 70.1394 72.3601C68.4698 73.1415 66.7983 73.921 65.125 74.7042C64.1925 75.1428 63.249 75.5611 62.3257 76.0182C61.2845 76.5305 60.2451 77.0428 59.202 77.5551C56.0212 79.1216 52.8405 80.688 49.6615 82.2563C47.9753 83.0874 46.3315 84.0051 44.6729 84.886C41.271 86.6957 37.8709 88.5017 34.4671 90.3096C33.002 91.0891 31.5425 91.8797 30.0885 92.6795C29.6296 92.8749 29.1689 93.0702 28.71 93.2637C27.8236 93.6415 26.9537 94.0488 26.0747 94.445C25.4039 94.7472 24.7368 95.0531 24.0623 95.3517C23.8651 95.4678 23.7066 95.6263 23.5887 95.8234C23.4781 96.0114 23.4173 96.2234 23.4099 96.439C23.1869 96.568 22.9621 96.697 22.7391 96.826C20.9294 97.8727 19.1363 98.9434 17.3598 100.051C16.5158 100.576 15.6828 101.118 14.8351 101.645C13.9744 102.181 13.1046 102.708 12.244 103.248C10.6038 104.275 9.00793 105.362 7.50783 106.588C6.80754 107.159 6.09988 107.771 5.53044 108.475C4.88175 109.276 4.40261 110.183 3.82763 111.036C3.54014 111.464 3.57516 112.09 3.82763 112.523C3.95848 112.743 4.13539 112.92 4.35654 113.051C4.47264 113.1 4.59058 113.15 4.70852 113.2C4.96837 113.27 5.23005 113.27 5.4899 113.2C5.62443 113.18 5.7608 113.159 5.89533 113.139C6.82229 113.016 7.73819 112.888 8.64488 112.64C9.63634 112.365 10.5965 111.982 11.5566 111.615C12.2293 111.357 12.9074 111.11 13.5856 110.863C15.3013 110.235 17.0152 109.608 18.7309 108.98C21.357 108.02 23.9591 106.995 26.5704 105.998C31.7765 104.013 37.001 102.076 42.22 100.128C44.4278 99.3009 46.6521 98.5214 48.8691 97.7234C51.1008 96.92 53.3307 96.1128 55.5642 95.3074C53.4707 96.4979 51.3772 97.6884 49.2837 98.8808C48.5392 99.3046 47.826 99.793 47.1018 100.252C45.4322 101.304 43.7588 102.358 42.0873 103.411C41.1567 103.997 40.2261 104.583 39.2954 105.17C38.5159 105.661 37.7529 106.182 36.9845 106.691C35.6152 107.592 34.246 108.493 32.8767 109.396C32.6722 109.496 32.4694 109.597 32.2649 109.697C31.4983 110.072 30.7335 110.452 29.9668 110.828C28.9662 111.318 28.0245 111.925 27.0809 112.511C26.6828 112.758 26.4248 113.176 26.4248 113.653C26.4248 114.236 26.8284 114.785 27.3979 114.93C27.6485 114.995 27.8954 115.026 28.1498 115.052C28.3525 115.072 28.6492 114.98 28.8519 114.928C29.261 114.829 29.6591 114.63 30.0295 114.438C30.8109 114.033 31.4946 113.438 32.2022 112.918C32.4289 112.75 32.6629 112.594 32.8988 112.437C33.1144 112.334 33.3282 112.23 33.5438 112.127C34.4984 111.667 35.4512 111.198 36.415 110.756C37.9262 110.056 39.4373 109.357 40.9466 108.661C42.0229 108.161 43.0899 107.636 44.1772 107.166C48.2775 105.438 52.3724 103.704 56.4691 101.973C56.3548 102.019 56.2406 102.069 56.1245 102.117C56.5336 101.945 56.9408 101.772 57.3481 101.601C57.3297 101.61 57.3094 101.617 57.2891 101.627C57.9231 101.359 58.5884 101.153 59.2352 100.919C60.8569 100.333 62.475 99.7469 64.0948 99.159C67.5686 97.9004 71.0443 96.6398 74.5181 95.3811C75.0599 95.1858 75.5962 94.9702 76.1435 94.7914C76.9783 94.5242 77.8113 94.257 78.6424 93.9898C82.2802 92.8251 85.9162 91.6567 89.5503 90.4883C91.8576 89.7494 94.1649 89.0141 96.4721 88.2695C100.233 87.0496 104.015 85.8959 107.762 84.6225C109.652 83.9793 111.538 83.3085 113.39 82.553C115.258 81.7882 117.088 80.9368 118.942 80.1351C119.014 80.1038 119.086 80.0725 119.158 80.043C119.539 79.8771 119.836 79.4072 119.939 79.0257C120.02 78.7235 120.02 78.425 119.939 78.1227C119.858 77.8352 119.711 77.5865 119.501 77.3727C119.355 77.2566 119.217 77.1294 119.075 77.0096C118.756 76.7406 118.557 76.6263 118.172 76.4697C117.752 76.2983 117.256 76.2799 116.803 76.2762C116.323 76.2762 115.83 76.3702 115.36 76.4623C114.875 76.5544 114.401 76.7019 113.93 76.8382C113.22 77.0428 112.503 77.1939 111.781 77.3358C109.949 77.6915 108.121 78.0453 106.289 78.4028C103.77 78.8912 101.258 79.4275 98.7407 79.949C96.5624 80.4023 94.3786 80.8207 92.217 81.3514C91.4337 81.5449 90.6505 81.7366 89.8673 81.9301C89.8784 81.9135 89.8913 81.8969 89.9023 81.8803C90.0037 81.7311 90.0627 81.5836 90.1345 81.4178C90.2801 81.1635 90.3538 80.8889 90.3575 80.5959C90.3557 80.301 90.2801 80.0264 90.1345 79.7739C89.9889 79.5288 89.7954 79.3335 89.5503 79.1898C89.1983 78.9852 88.6897 78.8801 88.2953 79.0239C87.1546 79.4441 86.0268 79.8956 84.9248 80.4023C84.0826 80.793 83.2404 81.1819 82.3982 81.5707C81.1874 82.1291 79.9896 82.7096 78.788 83.2809C77.4575 83.913 76.1324 84.558 74.8111 85.2085C72.5518 86.0839 70.2869 86.95 68.0109 87.7793C67.3936 88.0042 66.7781 88.2272 66.1607 88.452C65.934 88.5202 65.7074 88.5902 65.4807 88.6584C64.2275 89.0399 62.9781 89.4176 61.7286 89.7973C61.2181 89.9539 60.7206 90.1364 60.2193 90.3151C58.9403 90.7666 57.6614 91.2181 56.3825 91.6696C56.4138 91.6567 56.4451 91.6438 56.4764 91.6291C60.7113 89.8305 64.9444 88.0318 69.1812 86.235C69.0577 86.2866 68.9342 86.3382 68.8107 86.3917C74.6655 83.9259 80.5129 81.4417 86.364 78.9668C86.6976 78.8267 87.0311 78.6866 87.3647 78.5447C87.3076 78.5687 87.2486 78.5927 87.1915 78.6184C89.847 77.498 92.4952 76.3591 95.1416 75.2184C98.0957 73.9486 101.037 72.642 103.928 71.2323C105.172 70.6241 106.418 70.0178 107.673 69.4262C108.959 68.8181 110.242 68.1989 111.49 67.5115C112.783 66.7965 113.996 65.9764 115.155 65.0623C115.702 64.6311 116.163 64.1464 116.591 63.5991C117.046 63.0205 117.464 62.416 117.905 61.8281C117.923 61.8042 117.943 61.782 117.962 61.7581C118.176 61.5425 118.321 61.29 118.402 61.0007C118.483 60.6966 118.483 60.3925 118.402 60.0866C118.244 59.508 117.781 59.0491 117.204 58.8887C116.755 58.7616 116.314 58.6068 115.868 58.4723C115.356 58.3193 114.814 58.253 114.282 58.2327C113.742 58.2106 113.2 58.2917 112.665 58.3635C112.118 58.4372 111.578 58.5423 111.036 58.651C110.288 58.8021 109.536 58.9274 108.782 59.0546C106.964 59.3568 105.145 59.6591 103.324 59.9613C100.667 60.4036 98.0257 60.9564 95.3812 61.4632C94.0764 61.7139 92.7735 61.9627 91.4688 62.2133C90.7169 62.357 89.9742 62.5505 89.226 62.7164C85.5661 63.5401 81.9043 64.3676 78.2444 65.1913C77.5533 65.348 76.853 65.4825 76.1675 65.6613C75.2129 65.9119 74.2546 66.1607 73.2963 66.4113C69.5589 67.388 65.8179 68.3666 62.0806 69.347C60.927 69.6492 59.7752 69.9478 58.6234 70.25C58.1553 70.3735 57.6983 70.532 57.2375 70.6776C53.7859 71.7685 50.3323 72.865 46.8806 73.9597C44.7632 74.6323 42.6421 75.3087 40.5228 75.9758C38.8568 76.501 37.2148 77.111 35.5728 77.7062C34.8265 77.9771 34.0801 78.248 33.3319 78.5171C34.1022 78.1762 34.8744 77.8316 35.6429 77.4869C38.1381 76.4439 40.6518 75.4321 43.1525 74.4057C44.8406 73.7128 46.5287 73.0198 48.2149 72.3269C48.8157 72.08 49.4127 71.8128 50.0209 71.5879C56.012 69.3876 62.0106 67.1927 68.0036 64.996C68.5067 64.8136 69.0079 64.6072 69.5184 64.4431C70.4067 64.1557 71.2912 63.8663 72.1758 63.5788C75.8431 62.3883 79.5086 61.1979 83.1722 60.0074C84.6594 59.5245 86.1466 59.0399 87.6338 58.557C88.1184 58.3985 88.6068 58.2327 89.097 58.0871C92.2704 57.1491 95.442 56.2129 98.6154 55.2767C99.8907 54.9008 101.164 54.5212 102.441 54.1452C103.223 53.9149 104.008 53.6956 104.795 53.4781C105.716 53.2256 106.634 52.9713 107.546 52.6967C108.001 52.5585 108.454 52.4092 108.904 52.2563C109.4 52.0849 109.872 51.8601 110.347 51.6408C110.587 51.4989 110.775 51.309 110.917 51.0713C111.132 50.7046 111.189 50.2568 111.077 49.8495C110.85 49.0239 109.956 48.5005 109.125 48.7401C102.941 50.5314 96.7467 52.33 90.5658 54.1415C88.0392 54.8824 85.5274 55.6858 83.01 56.458C81.2998 56.9832 79.5933 57.5066 77.885 58.0318C77.3487 58.1958 76.8106 58.3506 76.2817 58.5312C73.4345 59.5061 70.5873 60.481 67.74 61.454C67.8156 61.4264 67.8911 61.3987 67.9667 61.3729C73.7257 59.2923 79.4994 57.267 85.2638 55.2159C87.7462 54.3332 90.223 53.4412 92.7072 52.5622C95.8769 51.4436 99.0429 50.3231 102.165 49.0847C103.774 48.4471 105.371 47.7781 106.938 47.0428C108.491 46.313 110.021 45.528 111.573 44.7908C111.971 44.601 112.275 44.1421 112.387 43.7293C112.474 43.4161 112.474 43.1009 112.387 42.784C112.302 42.4836 112.151 42.2219 111.932 41.9989C111.593 41.7169 111.285 41.4147 110.909 41.1714C110.706 41.0406 110.404 40.9521 110.159 40.9024C109.886 40.8489 109.593 40.8213 109.313 40.8029C108.836 40.7715 108.333 40.8729 107.865 40.9485C107.382 41.0277 106.91 41.1733 106.442 41.317C105.828 41.5032 105.22 41.6985 104.592 41.8293C104.417 41.8644 104.243 41.9012 104.07 41.9381C102.288 42.314 100.504 42.69 98.7223 43.0659C96.4113 43.5524 94.1114 44.0795 91.8115 44.6121C89.8821 45.058 87.9507 45.5022 86.0213 45.9482C85.3578 46.1011 84.6926 46.2559 84.031 46.4052C83.8209 46.4549 83.6071 46.4936 83.4007 46.5508C80.7728 47.2824 78.1375 47.9864 75.504 48.7032C72.2311 49.5933 68.9582 50.4853 65.6852 51.3791C64.1262 51.8048 62.5911 52.3392 61.0523 52.8294C54.9026 54.7921 48.7456 56.7326 42.607 58.7192C38.0588 60.1898 33.5678 61.8355 28.9809 63.1826C26.6847 63.859 24.3664 64.4505 22.0093 64.8633C20.7599 65.0826 19.5049 65.2632 18.2499 65.4401C18.8359 65.184 19.4293 64.9407 19.9877 64.6348C21.7569 63.6654 23.5315 62.7201 25.3375 61.8189C26.7842 61.0983 28.2345 60.398 29.6996 59.7199C33.037 58.1756 36.3782 56.6312 39.7137 55.0851C40.121 54.8971 40.5283 54.7091 40.9374 54.5193C46.4384 52.3226 51.9522 50.1554 57.4587 47.9716C58.9901 47.3635 60.5547 46.8364 62.1064 46.2817C65.8069 44.9585 69.511 43.6317 73.2133 42.3048C77.9403 40.6149 82.647 38.8881 87.361 37.1558C90.0516 36.1681 92.7459 35.1821 95.4328 34.1907C96.8352 33.6728 98.2339 33.1439 99.64 32.6316C101.262 32.04 102.872 31.419 104.441 30.6966C105.178 30.3575 105.898 29.9816 106.601 29.5761C107.334 29.1504 107.922 28.5497 108.556 27.9968C109.164 27.4679 109.228 26.4654 108.838 25.8001C108.418 25.0796 107.586 24.7773 106.79 24.9671C105.526 25.2694 104.251 25.5255 103.001 25.883C102.22 26.106 101.441 26.3253 100.661 26.5483C99.406 26.904 98.151 27.2486 96.8997 27.6172C93.8166 28.5257 90.7353 29.4342 87.6522 30.3409C85.4794 30.9804 83.3288 31.7047 81.1708 32.3902C78.1098 33.3651 75.0451 34.3399 71.9841 35.3148C71.5068 35.4659 71.0388 35.6484 70.5707 35.8179C69.113 36.3395 67.6608 36.8628 66.2049 37.3862C62.5579 38.6946 58.9127 40.0068 55.2675 41.3152C53.8651 41.8201 52.4645 42.3177 51.0787 42.8577C47.7652 44.1514 44.4517 45.4432 41.1364 46.7369C38.444 47.7855 35.7534 48.8378 33.0592 49.8864C30.7629 50.782 28.4759 51.7108 26.1797 52.6175C24.4253 53.3122 22.6562 53.9738 20.8575 54.547C19.9619 54.8308 19.0589 55.0943 18.1448 55.3117C17.7099 55.415 17.2676 55.4997 16.8254 55.5734C16.9415 55.5126 17.0594 55.4536 17.1773 55.3947C17.8758 55.0482 18.5761 54.711 19.269 54.3608C19.621 54.1821 19.9711 54.007 20.3231 53.8282C22.0185 52.975 23.7158 52.1181 25.4113 51.263C26.1355 50.8999 26.8579 50.5332 27.584 50.1683C27.8236 50.0467 28.0668 49.9158 28.3119 49.8016C29.2094 49.3888 30.105 48.9778 31.0025 48.5669C34.4597 46.9802 37.9133 45.3953 41.3686 43.8104C42.0487 43.499 42.7213 43.1691 43.4105 42.8724C44.1274 42.5647 44.848 42.2606 45.5685 41.9547C51.5025 39.4244 57.4347 36.8942 63.3688 34.3639C65.5728 33.5107 67.7677 32.6169 69.9681 31.7415C73.5211 30.3317 77.076 28.9182 80.629 27.5066C82.1936 26.8856 83.7527 26.259 85.3228 25.6582C87.8254 24.6999 90.3446 23.7803 92.8233 22.7575C94.117 22.225 95.407 21.6739 96.6712 21.0676C97.8617 20.4963 98.9876 19.7924 100.143 19.1566C100.794 18.8009 101.101 17.9864 100.908 17.2805C100.794 16.8677 100.514 16.5065 100.143 16.2891C100.012 16.2338 99.8814 16.1767 99.7469 16.1232C99.4557 16.044 99.1646 16.044 98.8716 16.1214C98.9379 16.1122 99.0061 16.1048 99.0724 16.0956C99.0042 16.1048 98.9379 16.1122 98.8716 16.1214C98.8697 16.1214 98.8642 16.1232 98.8623 16.1232C98.7849 16.1324 98.7094 16.1435 98.632 16.1527C98.6983 16.1435 98.7647 16.1343 98.831 16.1269C97.9059 16.243 96.9918 16.361 96.0833 16.5913C95.0808 16.8456 94.0985 17.1829 93.1144 17.5035C92.5063 17.7007 91.8926 17.8887 91.2789 18.0785C89.4969 18.6332 87.713 19.1879 85.9309 19.7408C83.5076 20.4927 81.1026 21.3054 78.6959 22.0941C76.536 22.8036 74.3633 23.4799 72.22 24.2521C68.7794 25.4942 65.3351 26.74 61.8926 27.9821C56.6312 29.8802 51.4251 31.9295 46.2062 33.929C43.3423 35.0273 40.473 36.1091 37.6037 37.1853C34.738 38.2616 31.8631 39.3009 28.9422 40.2224C28.8537 40.25 28.7634 40.2795 28.675 40.3071C29.8802 39.7709 31.0873 39.2327 32.2925 38.6946C32.9209 38.4145 33.5457 38.1215 34.1778 37.8488C36.2694 36.9881 38.3537 36.1091 40.4417 35.2374C42.6568 34.316 44.8738 33.4038 47.0834 32.4676C46.9415 32.5266 46.7996 32.5892 46.6577 32.6482C49.0976 31.701 51.5505 30.7887 53.9978 29.8618C57.1104 28.6787 60.2211 27.4955 63.3337 26.3161C65.0881 25.6508 66.8573 25.0261 68.6228 24.3866C72.244 23.0708 75.8578 21.7532 79.4772 20.4374C81.3109 19.7721 83.1353 19.0829 84.9634 18.4139C87.4826 17.4906 89.9945 16.5655 92.4492 15.4819C93.6212 14.9641 94.7951 14.413 95.8972 13.7551C96.9808 13.1065 97.963 12.2974 99.0024 11.5824C99.2751 11.4221 99.4907 11.2065 99.6511 10.9337C99.8962 10.5154 99.9625 10.0049 99.8335 9.54051C99.6234 8.77757 98.89 8.19154 98.0883 8.21181C97.1595 8.23392 96.2344 8.19153 95.3111 8.30026C94.2128 8.43111 93.1402 8.67989 92.0751 8.96554C91.1463 9.21617 90.2248 9.47233 89.296 9.71743C87.5416 10.18 85.789 10.6425 84.0346 11.1051C83.2422 11.3152 82.4461 11.5179 81.6555 11.7483C80.1186 12.1961 78.5761 12.6494 77.041 13.0991C75.1944 13.639 73.3479 14.1772 71.5032 14.7171C70.8416 14.9106 70.1726 15.0875 69.5165 15.3031C66.6196 16.2485 63.7207 17.1939 60.8238 18.1375C57.9581 19.0718 55.0924 20.0061 52.2268 20.9405C51.7458 21.0971 51.274 21.2814 50.7986 21.4528C49.3169 21.9891 47.8334 22.5272 46.3517 23.0635C42.7453 24.37 39.1388 25.6766 35.5323 26.9832C34.7177 27.2781 33.9069 27.5748 33.0905 27.866C32.4694 28.0908 31.8576 28.3617 31.2421 28.6086C30.5547 28.8851 29.8655 29.1597 29.1781 29.4361C29.8305 29.121 30.481 28.8077 31.1334 28.4925C32.9615 27.6061 34.8357 26.8008 36.6896 25.9604C39.8298 24.5396 42.9738 23.1151 46.1159 21.6942C46.2412 21.6518 46.3665 21.6094 46.4918 21.567C46.8622 21.4417 47.2345 21.298 47.6104 21.1893C49.0829 20.7654 50.5498 20.3379 52.0204 19.9122C52.6728 19.7223 53.3215 19.5344 53.9757 19.3464C54.3516 19.2377 54.7405 19.1639 55.1238 19.0773C56.0747 18.8654 57.0219 18.6498 57.9728 18.4342C58.288 18.3641 58.6013 18.2923 58.9127 18.2204C59.3568 18.119 59.7991 17.9919 60.2469 17.909C60.317 17.9034 60.387 17.8997 60.4552 17.9034C60.481 17.909 60.5086 17.9126 60.5363 17.9182C60.7574 17.9845 61.008 17.9255 61.1739 17.7597C61.4338 17.4998 61.3987 17.1239 61.1739 16.8585C60.9841 16.6355 60.6118 16.6337 60.3446 16.6208C60.1585 16.6134 59.9558 16.6595 59.7733 16.6871C59.5632 16.7185 59.355 16.7811 59.1504 16.8327C58.8777 16.9028 58.6013 16.9488 58.323 17.0041C57.4274 17.1847 56.5317 17.3653 55.6324 17.5459C55.4371 17.5846 55.2399 17.6252 55.0445 17.6639C57.3407 16.6282 59.6351 15.5925 61.9313 14.5568C65.9101 12.7637 69.8943 10.9687 73.8288 9.07611C75.539 8.25235 77.2437 7.40095 78.9041 6.47951C80.6198 5.52675 82.2526 4.4284 83.9296 3.40561C84.6299 2.97991 84.9911 2.14325 84.7681 1.34161C84.5617 0.589718 83.8448 0 83.0542 0C83.0542 0.0184286 83.0376 0.0184291 83.0211 0.0184291ZM59.5411 11.6303C57.9452 12.349 56.3493 13.0678 54.7534 13.7865C51.2851 15.3492 47.8187 16.9138 44.3522 18.4803C45.7049 17.8187 47.0576 17.1571 48.4102 16.4973C49.0257 16.1951 49.6578 15.9279 50.2863 15.6515C52.7944 14.5402 55.3025 13.4234 57.818 12.3196C58.393 12.0892 58.9662 11.8588 59.5411 11.6303ZM60.411 17.8721C60.4128 17.8721 60.4128 17.8721 60.4146 17.8739C60.4128 17.8739 60.4128 17.8739 60.411 17.8721ZM1.00989 40.1523C0.973035 40.1818 0.936176 40.2113 0.899318 40.239C0.897476 40.2408 0.89379 40.2426 0.891947 40.2426C0.930648 40.2132 0.96935 40.1818 1.00989 40.1523ZM0.851406 40.274C0.803491 40.3108 0.755577 40.3495 0.709506 40.3864C0.755577 40.3495 0.803491 40.3127 0.851406 40.274ZM14.3356 59.0454C14.2767 59.0528 14.2195 59.0601 14.1606 59.0694C14.2177 59.0601 14.2767 59.0528 14.3356 59.0454ZM117.831 61.9424C117.792 61.9921 117.754 62.0437 117.715 62.0953C117.752 62.0437 117.79 61.9921 117.831 61.9424ZM77.1939 88.1848C77.7947 88.0097 78.3936 87.8015 79.0036 87.6577C80.1204 87.3979 81.2316 87.1362 82.3447 86.8727C85.9383 86.0286 89.5282 85.1846 93.1218 84.3406C95.3074 83.8264 97.5189 83.4375 99.7211 83.01C101.861 82.5954 104 82.1697 106.145 81.7753C104.415 82.3761 102.679 82.9473 100.939 83.5168C98.9674 84.1636 96.9973 84.8179 95.0273 85.4647C91.9221 86.4838 88.8206 87.5029 85.7172 88.5202C82.518 89.5688 79.3206 90.621 76.1232 91.6696C74.5918 92.169 73.0862 92.7532 71.575 93.3098C67.9059 94.6624 64.2331 96.0151 60.5602 97.3678C59.3642 97.8082 58.17 98.2468 56.974 98.6891C56.399 98.8992 55.8407 99.1443 55.2786 99.3839C53.4468 100.169 51.6131 100.952 49.7795 101.737C50.1794 101.49 50.5793 101.245 50.9939 101.015C54.0402 99.3267 57.0883 97.6387 60.1382 95.9543C62.2759 94.7712 64.4782 93.7097 66.6583 92.6076C68.0128 91.9221 69.3673 91.2384 70.7236 90.5547C71.564 90.1308 72.4209 89.7383 73.2705 89.3366C74.5789 88.9551 75.8873 88.5699 77.1939 88.1848ZM44.0426 107.238C44.0039 107.255 43.9671 107.271 43.9284 107.286C43.9652 107.269 44.0039 107.255 44.0426 107.238ZM9.97911 108.456C9.93304 108.491 9.88697 108.528 9.8409 108.563C9.88513 108.528 9.9312 108.491 9.97911 108.456ZM87.3757 78.5558C87.4458 78.5263 87.514 78.4987 87.5822 78.4692C87.514 78.4987 87.4439 78.5282 87.3757 78.5558ZM98.8494 16.1435C98.8623 16.1417 98.8752 16.1398 98.8881 16.138C98.8734 16.1398 98.8623 16.1417 98.8494 16.1435Z"
        fill="#C1FF70"
      />
    </svg>
  );
}

export default Hero;
