import { AccessToken } from "livekit-server-sdk";
import { NextResponse } from "next/server";

const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || "";
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || "";
const LIVEKIT_SERVER_URL = process.env.LIVEKIT_SERVER_URL || "http://localhost:7880";

export async function POST(request: Request) {
  const roomName = "example-room";
  const participantIdentity = "example-participant";

  const accessToken = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
    identity: participantIdentity,
    ttl: "10h",
  });

  accessToken.addGrant({ roomJoin: true, room: roomName });

  return NextResponse.json({
    token: await accessToken.toJwt(),
    url: LIVEKIT_SERVER_URL,
  });
}
