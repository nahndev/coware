import { useEstimationResults } from "@/store/estimation-result";
import ResultCard from "./result-card";
import Flex from "@/components/ui/flex";

export type ResultBoardProps = {};

const ResultBoard: React.FC<ResultBoardProps> = () => {
  const results = useEstimationResults();
  return (
    <Flex row justify="center" align="center" direction="row">
      {results.map((item) => (
        <div key={item.id} className="p-2">
          <ResultCard item={item} />
        </div>
      ))}
    </Flex>
  );
};

export default ResultBoard;
