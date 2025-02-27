import Image from "next/image";

import { Database } from "@/types/database.types";

type Prop = {
  artist: Database["public"]["Tables"]["artist_profiles"]["Row"];
};
export default function ArtistHeader({ artist }: Prop) {
  return (
    <div className="relative h-[250px] w-full bg-[#B8FF5B] flex items-center justify-center">
      <div className="md:absolute md:right-10 md:top-[75%] h-[140px] w-[140px]">
        <Image
          src={artist?.artist_image_url || "/images/artFrame.jpg"}
          alt=""
          className="h-full w-full rounded-[24px] object-cover"
          width={140}
          height={140}
        />
      </div>
    </div>
  );
}
