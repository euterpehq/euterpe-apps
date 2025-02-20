import { UserInteractionTracker } from "@/components/audio-player/UserInteractionTracker";
import RewardClaim from "./_component/reward-claim";
import { AudioInitializer } from "@/components/audio-player/AudioInitializer";
import Header from "@/components/header";
import ModalPlayer from "@/components/audio-player/modal-player";
import AudioMiniPlayer from "@/components/audio-player/audio-mini-player";
import { Dialog } from "@/components/ui/dialog";
import Modal from "./_component/modal";
import { Suspense } from "react";

function Page() {
  return (
    <div className="relative">
      <UserInteractionTracker />
      <AudioInitializer />
      <Suspense fallback={<></>}>
        <Header />
      </Suspense>

      <ModalPlayer />
      <Dialog>
        <RewardClaim />
      </Dialog>
      <AudioMiniPlayer />
    </div>
  );
}

export default Page;
