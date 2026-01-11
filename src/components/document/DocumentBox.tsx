import { Document } from "@/types/document";
import DocumentItem from "./DocumentItem";
import DocumentChildrenBox from "./DocumentChildrenBox";

export type DocumentBoxProps = {
  resource: Document;
};

const DocumentBox: React.FC<DocumentBoxProps> = ({ resource }) => {
  return (
    <div className="p-2 border rounded mb-2">
      <DocumentItem documentResource={resource} />
      <DocumentChildrenBox parent={resource} />
    </div>
  );
};

export default DocumentBox;
