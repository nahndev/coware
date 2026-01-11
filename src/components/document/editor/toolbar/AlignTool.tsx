"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection, ElementFormatType, FORMAT_ELEMENT_COMMAND } from "lexical";
import { useState, useEffect } from "react";
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";
import ButtonIcon from "@/components/ui/button-icon";

const alignIcons: Record<ElementFormatType, React.ComponentType<any>> = {
  left: AlignLeft,
  center: AlignCenter,
  right: AlignRight,
  justify: AlignJustify,
  start: AlignLeft,
  end: AlignRight,
  "": AlignLeft,
};

function AlignTool() {
  const [editor] = useLexicalComposerContext();
  const [currentAlign, setCurrentAlign] = useState<ElementFormatType>("left");

  const applyAlignment = (format: ElementFormatType) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, format);
  };

  const getCurrentAlignment = () => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const element = selection.anchor.getNode().getTopLevelElement();
        if (element) {
          setCurrentAlign(element.getFormatType() || "left");
        }
      }
    });
  };

  useEffect(() => {
    const removeUpdateListener = editor.registerUpdateListener(() => {
      getCurrentAlignment();
    });
    return () => {
      removeUpdateListener();
    };
  }, [editor]);

  const cycleAlignment = () => {
    const alignOrder: ElementFormatType[] = ["left", "center", "right", "justify"];
    const currentIndex = alignOrder.indexOf(currentAlign);
    const nextIndex = (currentIndex + 1) % alignOrder.length;
    const nextAlign = alignOrder[nextIndex];

    setCurrentAlign(nextAlign);
    applyAlignment(nextAlign);
  };

  const CurrentIcon = alignIcons[currentAlign];

  return <ButtonIcon icon={CurrentIcon} onClick={cycleAlignment} title={`Text align: ${currentAlign}`} />;
}

export default AlignTool;
