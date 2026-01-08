"use client";

import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";

export type VideoProps = {
  stream: MediaStream;
  className?: string;
};

const Video: React.FC<VideoProps> = ({ stream, className }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    console.log("Setting video stream", stream);
    console.log(videoRef.current);
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return <video ref={videoRef} autoPlay playsInline className={cn("size-full", className)} />;
};

export default Video;
