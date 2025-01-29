import { UserInteractionTracker } from "@/components/audio-player/UserInteractionTracker"
import RewardClaim from "./_component/reward-claim"
import { AudioInitializer } from "@/components/audio-player/AudioInitializer"
import Header from "@/components/Header"
import ModalPlayer from "@/components/audio-player/modal-player"
import AudioMiniPlayer from "@/components/audio-player/audio-mini-player"
import { Dialog } from "@/components/ui/dialog"
import Modal from "./_component/modal"


function Page() {
  return (
    <div className="relative">
        <UserInteractionTracker />
      <AudioInitializer />
      <div className=" fixed top-0 left-0 right-0">
      <Header />
      </div>
     <ModalPlayer />
     <Dialog>
      <RewardClaim />
      <Modal />
      </Dialog>
      <AudioMiniPlayer />
    </div>
  )
}

export default Page
