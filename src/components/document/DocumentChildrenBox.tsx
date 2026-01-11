"use client";

import { Document } from "@/types/document";
import DocumentBox from "./DocumentBox";
import { useDocumentsByParent } from "@/store/document";

export type DocumentChildrenBoxProps = {
  parent: Document | null;
};

const DocumentChildrenBox: React.FC<DocumentChildrenBoxProps> = ({ parent }) => {
  const resources = useDocumentsByParent(parent);

  console.log("FolderChildrenBox Resources:", resources);
  return (
    <div>
      {resources.map((resource) => (
        <DocumentBox key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default DocumentChildrenBox;
