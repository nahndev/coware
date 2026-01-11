import DocumentEditor from "@/components/document/editor/DocumentEditor";

export type DocumentPageProps = {};

const DocumentPage: React.FC<DocumentPageProps> = () => {
  return (
    <div className="size-full">
      <DocumentEditor />
    </div>
  );
};

export default DocumentPage;
