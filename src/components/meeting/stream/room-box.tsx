import { AccessToken } from "livekit-server-sdk";
import ShareScreen from "./share-screen";
import { Planning } from "@/types/planning";

const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || "livekitapikey";
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || "livekitapisecret";
const LIVEKIT_SERVER_URL = process.env.LIVEKIT_SERVER_URL || "ws://127.0.0.1:7880";

export type AutoRoomProps = {
  item: Planning;
};

const RoomBox: React.FC<AutoRoomProps> = async ({ item }) => {
  const participantIdentity = "example-participant";

  const accessToken = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
    identity: participantIdentity,
    ttl: "10h",
  });

  accessToken.addGrant({ roomJoin: true, room: item.id });
  const token = await accessToken.toJwt();

  return <ShareScreen token={token} serverUrl={LIVEKIT_SERVER_URL} />;
};

export default RoomBox;
