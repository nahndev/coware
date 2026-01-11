"use client";

import { DocumentResourceType } from "@/constants/document";
import { useDocumentResourceByFolder } from "@/store/document";
import { DocumentFolder } from "@/types/document";
import ResourceBox from "../ResourceBox";

export type FolderChildrenBoxProps = {
  folder: DocumentFolder | null;
};

const FolderChildrenBox: React.FC<FolderChildrenBoxProps> = ({ folder }) => {
  const resources = useDocumentResourceByFolder(folder);

  console.log("FolderChildrenBox Resources:", resources);
  return (
    <div>
      {resources.map((resource) => (
        <ResourceBox key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default FolderChildrenBox;
