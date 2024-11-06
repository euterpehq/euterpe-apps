import Image from "next/image";
import Marquee from "react-fast-marquee";
import henryGreenImage from "../../../public/images/henry green.png";
import yinkaBernieImage from "../../../public/images/yinka bernie.png";
import makkMikkaelImage from "../../../public/images/makk mikkael.png";
import duskusImage from "../../../public/images/duskus.png";
import fordImage from "../../../public/images/ford.png";
import mikeImage from "../../../public/images/mike.png";
import temsImage from "../../../public/images/tems.png";

export const FeaturedArtists = () => {
  const featuredArtists = [
    {
      imageUrl: henryGreenImage,
      name: "Henry Green",
      text: "DUSK",
      subtext: "(DSK)"
    },
    {
      imageUrl: yinkaBernieImage,
      name: "Yinka Bernie",
      text: "DUSK",
      subtext: "(DSK)"
    },
    {
      imageUrl: makkMikkaelImage,
      name: "Makk Mikkael",
      text: "DUSK",
      subtext: "(DSK)"
    },
    {
      imageUrl: duskusImage,
      name: "Duskus",
      text: "DUSK",
      subtext: "(DSK)"
    },
    {
      imageUrl: fordImage,
      name: "Ford",
      text: "DUSK",
      subtext: "(DSK)"
    },
    {
      imageUrl: mikeImage,
      name: "Mike",
      text: "DUSK",
      subtext: "(DSK)"
    },
    {
      imageUrl: temsImage,
      name: "tEMS",
      text: "DUSK",
      subtext: "(DSK)"
    },
  ]
  return (
    <section className="border-b border-[#303033] my-10">
      <div className="px-[40px] h-[325px] gap-[12px] max-w-[90rem] mx-auto">
        <h1 className="text-[20px] font-semibold">Featured Artists</h1>
        <div className="flex items-center justify-between h-[289px] gap-[8px] pt-[16px] pb-[24px]">
          <Marquee direction="right" speed={100} pauseOnHover={true}>
            {featuredArtists.map((_, index) => (
              <div
                key={index}
                className="bg-[#181818] w-[200px] mr-2 h-[249px] rounded-[16px] py-[29px] px-[49px] gap-[10px]"
              >
                <div className="w-[120px] h-[176px] gap-[20px] flex flex-col items-center">
                  <Image
                    src={_.imageUrl}
                    alt="profile image"
                    className="w-[120px] h-[120px] rounded-[120px]"
                    width={80}
                    height={80}
                  />
                  <div className="w-full gap-[4px]">
                    <h2 className="text-[15px] font-medium text-center">{_.name}</h2>
                    <div className="flex items-center justify-center h-[14px] gap-[4px]">
                      <p className="bg-[#CB7600] w-[8px] h-[8.5px]"></p>
                      <p className="text-[12px]">{_.text} <span className="text-[#868B9F]">{_.subtext}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
};