"use client";

import { Document } from "@/types/document";
import { Accordion } from "@/components/ui/accordion";
import DocumentBox from "./DocumentBox";

export type DocumentChildrenBoxProps = {
  items: Document[];
};

const DocumentChildrenBox: React.FC<DocumentChildrenBoxProps> = ({ items }) => {
  return (
    <Accordion type="multiple" className="border-l-2">
      {items.map((child) => (
        <DocumentBox key={child.id} item={child} />
      ))}
    </Accordion>
  );
};

export default DocumentChildrenBox;
