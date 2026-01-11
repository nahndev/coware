"use client";

import { useDocumentsByParent } from "@/store/document";
import DocumentAction from "./DocumentAction";
import DocumentChildrenBox from "./DocumentChildrenBox";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

export type DocumentTreeProps = {};

const DocumentTree: React.FC<DocumentTreeProps> = () => {
  const rootItems = useDocumentsByParent(null);

  return (
    <div>
      <nav className="flex items-center justify-between p-4 border-b">
        <h2>Document Tree</h2>
        <DocumentAction />
      </nav>
      <DocumentChildrenBox items={rootItems} />
    </div>
  );
};

export default DocumentTree;
