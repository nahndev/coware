import { Button } from "@/ui/button";
import FolderChildrenBox from "./resource/FolderChildrenBox";
import FolderAction from "./resource/FolderAction";

export type DocumentTreeProps = {};

const DocumentTree: React.FC<DocumentTreeProps> = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 border-b">
        <h2>Document Tree</h2>
        <FolderAction />
      </nav>
      <FolderChildrenBox folder={null} />
    </div>
  );
};

export default DocumentTree;
