import RoomDashboard from "@/components/planning/room/dashboard";
import RoomLayout from "@/app/planning/[planningId]/layout";

export type TheRoomPageProps = {};

const TheRoomPage: React.FC<TheRoomPageProps> = ({}) => {
  return (
    <div className="w-screen h-screen bg-slate-200">
      <RoomLayout>
        <RoomDashboard />
      </RoomLayout>
    </div>
  );
};

export default TheRoomPage;
