import { Document } from "@/types/document";

export type DocumentItemProps = {
  documentResource: Document;
};

const DocumentItem: React.FC<DocumentItemProps> = ({ documentResource: folder }) => {
  return <div>📁 {folder.name}</div>;
};

export default DocumentItem;
