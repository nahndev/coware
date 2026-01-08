"use client";

import Video from "@/components/ui/video";
import { useEffect, useRef, useState } from "react";

export type ShareScreenProps = {};

const ShareScreen: React.FC<ShareScreenProps> = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);

  // useEffect(() => {
  //   let activeStream: MediaStream | null = null;
  //   navigator.mediaDevices
  //     .getDisplayMedia({ video: true, audio: false })
  //     .then((mediaStream) => {
  //       setStream(mediaStream);
  //       activeStream = mediaStream;
  //     })
  //     .catch((error) => {});
  //   return () => {
  //     if (activeStream) {
  //       activeStream.getTracks().forEach((t) => t.stop());
  //     }
  //   };
  // }, []);

  if (!stream) {
    return (
      <div className="size-full bg-gray-800 flex items-center justify-center text-white">Loading screen share...</div>
    );
  }

  return (
    <div className="size-full bg-slate-700">
      <Video stream={stream} />
    </div>
  );
};

export default ShareScreen;
