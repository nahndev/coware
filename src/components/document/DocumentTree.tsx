import DocumentChildrenBox from "./DocumentChildrenBox";
import DocumentAction from "./DocumentAction";

export type DocumentTreeProps = {};

const DocumentTree: React.FC<DocumentTreeProps> = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 border-b">
        <h2>Document Tree</h2>
        <DocumentAction />
      </nav>
      <DocumentChildrenBox parent={null} />
    </div>
  );
};

export default DocumentTree;
