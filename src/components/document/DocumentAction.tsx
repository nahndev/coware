import { Button } from "@/ui/button";
import { FilePlus, FolderPlus, PlusCircle } from "lucide-react";
import ButtonIcon from "@/components/ui/button-icon";
import { DocumentCreatorDialog } from "./DocumentResourceCreatorDialog";

export type DocumentActionProps = {};

const DocumentAction: React.FC<DocumentActionProps> = () => {
  return (
    <div className="flex flex-row gap-2">
      <DocumentCreatorDialog />
      <Button>
        <FolderPlus />
      </Button>
    </div>
  );
};

export default DocumentAction;
