"use client";

import StopPropagation from "@/components/ui/stop-propagation";
import TextEditor from "./TextEditor";
import DocumentVideoBox from "./DocumentVideoBox";
import { useState } from "react";

export type DocumentEditorProps = {};

const DocumentEditor: React.FC<DocumentEditorProps> = () => {
  const [value, setValue] = useState<string | undefined>();

  return <TextEditor value={value} onChangeValue={setValue} />;
};

export default DocumentEditor;
