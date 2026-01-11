import { Button } from "@/ui/button";
import { FilePlus, FolderPlus, PlusCircle } from "lucide-react";
import ButtonIcon from "@/components/ui/button-icon";
import { FolderCreatorAction } from "./FolderCreatorDialog";

export type FolderActionProps = {};

const FolderAction: React.FC<FolderActionProps> = () => {
  return (
    <div className="flex flex-row gap-2">
      <FolderCreatorAction />
      <Button>
        <FolderPlus />
      </Button>
    </div>
  );
};

export default FolderAction;
