import { DocumentFolder } from "@/types/document";

export type FolderItemProps = {
  folder: DocumentFolder;
};

const FolderItem: React.FC<FolderItemProps> = ({ folder }) => {
  return <div>📁 {folder.name}</div>;
};

export default FolderItem;
