import { useEstimationDefinitions } from "@/store/estimation";
import EstimationCard from "./estimation-card";

export type EstimationPickerProps = {};

const EstimationPicker: React.FC<EstimationPickerProps> = ({}) => {
  const definitions = useEstimationDefinitions();
  return (
    <div>
      Estimation Picker Component
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {definitions.map((item) => (
          <EstimationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default EstimationPicker;
