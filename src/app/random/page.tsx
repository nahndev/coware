import RandomHistoryCard from "@/components/random/random-history-card";
import RandomResultBoard from "@/components/random/random-result-board";
import MainHeaderLayout from "@/components/ui/layout/main-header-layout";

export type RandomPageProps = {};

const RandomPage: React.FC<RandomPageProps> = () => {
  return (
    <MainHeaderLayout>
      <RandomResultBoard />
      <RandomHistoryCard />
    </MainHeaderLayout>
  );
};

export default RandomPage;
