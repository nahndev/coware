import { Document } from "@/types/document";

export type DocumentItemProps = {
  document: Document;
};

const DocumentItem: React.FC<DocumentItemProps> = ({ document }) => {
  const { name, desc } = document;
  return (
    <div className="flex-1 cursor-pointer">
      <h3 className="font-medium">{name}</h3>
      {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
    </div>
  );
};

export default DocumentItem;
