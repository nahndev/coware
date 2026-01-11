import { DocumentFile } from "@/types/document";

export type FileItemProps = {
  file: DocumentFile;
};

const FileItem: React.FC<FileItemProps> = ({ file }) => {
  return <div>FileItem</div>;
};

export default FileItem;
