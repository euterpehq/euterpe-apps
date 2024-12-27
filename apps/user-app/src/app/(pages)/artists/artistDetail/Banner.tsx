import Image from "next/image";
import img from "@/assets/images/artFrame.jpg";
import { Database } from "@/types/database.types";

type Prop = {
  artist: Database["public"]["Tables"]["artist_profiles"]["Row"];
};
export default function Banner({ artist }: Prop) {
  return (
    <div className="relative h-[250px] w-full bg-[#B8FF5B]">
      <div className="absolute right-10 top-[75%] h-[140px] w-[140px]">
        <Image
          src={artist?.artist_image_url || img}
          alt=""
          className="h-full w-full rounded-[24px] object-cover"
          width={140}
          height={140}
        />
      </div>
    </div>
  );
}
