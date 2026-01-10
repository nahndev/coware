"use client";

import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";

export type ShareScreenProps = {
  token: string;
  serverUrl: string;
};

const ShareScreen: React.FC<ShareScreenProps> = ({ token, serverUrl }) => {
  console.log("ShareScreen token:", token);
  console.log("ShareScreen serverUrl:", serverUrl);
  return (
    <LiveKitRoom video={true} audio={true} token={token} serverUrl={serverUrl} data-lk-theme="default">
      <VideoConference />
    </LiveKitRoom>
  );
};

export default ShareScreen;
