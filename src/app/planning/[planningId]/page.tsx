import RoomDashboard from "@/components/planning/room/dashboard";
import RoomLayout from "@/components/planning/room/room-layout";

export type TheRoomPageProps = {};

const TheRoomPage: React.FC<TheRoomPageProps> = ({}) => {
  return (
    <div className="bg-slate-200">
      <RoomLayout>
        <RoomDashboard />
      </RoomLayout>
    </div>
  );
};

export default TheRoomPage;
