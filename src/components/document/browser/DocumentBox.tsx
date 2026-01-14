"use client";

import { Document } from "@/types/document";
import DocumentItem from "./DocumentItem";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useDocumentsByParent } from "@/service/document";
import { cn } from "@/lib/utils";
import DocumentChildrenBox from "./DocumentChildrenBox";

export type DocumentBoxProps = {
  item: Document;
};

const DocumentBox: React.FC<DocumentBoxProps> = ({ item }) => {
  const children = useDocumentsByParent(item);

  return (
    <AccordionItem value={item.id}>
      <AccordionTrigger expandable={children.length > 0} className="p-4">
        <DocumentItem document={item} />
      </AccordionTrigger>
      <AccordionContent className={cn("flex flex-col gap-4 text-balance", children.length === 0 && "hidden")}>
        <DocumentChildrenBox items={children} />
      </AccordionContent>
    </AccordionItem>
  );
};

export default DocumentBox;
