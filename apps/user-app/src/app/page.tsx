import { Navbar } from "@/components/home/nav";
import { FeaturedArtists } from "@/components/home/featuredArtists";
import { PopularTokens } from "@/components/home/popularTokens";
import { NewelyLaunched } from "@/components/home/newelyLaunched";

export default function Page() {
  return (
    <div className="bg-[#111111] overflow-y-auto h-screen">
      <Navbar />
      <FeaturedArtists />
      <PopularTokens />
      <NewelyLaunched />
    </div>
  )
}