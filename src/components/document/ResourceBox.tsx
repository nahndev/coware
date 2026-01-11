import { DocumentResourceType } from "@/constants/document";
import { DocumentFile, DocumentFolder, DocumentResource } from "@/types/document";
import FolderChildrenBox from "./resource/FolderChildrenBox";
import FolderItem from "./resource/FolderItem";
import FileItem from "./resource/FileItem";

export type ResourceBoxProps = {
  resource: DocumentResource;
};

const ResourceBox: React.FC<ResourceBoxProps> = ({ resource }) => {
  if (resource.type === DocumentResourceType.Folder) {
    return (
      <div>
        <FolderItem folder={resource} />
        <FolderChildrenBox folder={resource} />
      </div>
    );
  }
  return <FileItem file={resource as DocumentFile} />;
};

export default ResourceBox;
