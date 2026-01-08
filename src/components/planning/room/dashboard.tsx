import EstimationPicker from "@/components/planning/estimation/estimation-picker";
import ResultBoard from "@/components/planning/result/result-board";
import ShareScreen from "@/components/planning/stream/share-screen";
import InProcessTicketCard from "@/components/planning/ticket/in-process-ticket-card";
import Absolute from "@/components/ui/absolute";
import Relative from "@/components/ui/relative";
import ResultCard from "../result/result-card";
import Center from "@/components/ui/center";
import Flex from "@/components/ui/flex";
import { Card } from "@/components/ui/card";

export type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Relative className="size-full">
      <ShareScreen />
      <Absolute fluid className="flex justify-center items-center bg-black/50">
        <Card className="rounded-lg size-5/6 bg-slate-200 overflow-hidden">
          <InProcessTicketCard />
          <Center className="flex-1">
            <ResultBoard />
          </Center>
          <EstimationPicker />
        </Card>
      </Absolute>
    </Relative>
  );
};

export default Dashboard;
