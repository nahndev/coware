"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection } from "lexical";
import { $createHeadingNode, $createQuoteNode, HeadingTagType } from "@lexical/rich-text";
import { $createParagraphNode } from "lexical";
import { $setBlocksType } from "@lexical/selection";
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type StyleType = "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle";

const styleOptions = [
  { value: "normal", label: "Normal", className: "text-base" },
  { value: "h1", label: "Heading 1", className: "text-2xl font-bold" },
  { value: "h2", label: "Heading 2", className: "text-xl font-bold" },
  { value: "h3", label: "Heading 3", className: "text-lg font-bold" },
  { value: "subtitle", label: "Subtitle", className: "text-sm text-gray-600" },
];

function StyleTool() {
  const [editor] = useLexicalComposerContext();
  const [currentStyle, setCurrentStyle] = useState<StyleType>("normal");

  const applyStyle = (style: StyleType) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        if (style === "normal") {
          $setBlocksType(selection, () => $createParagraphNode());
        } else if (style === "subtitle") {
          $setBlocksType(selection, () => $createQuoteNode());
        } else {
          const headingTag = style as HeadingTagType;
          $setBlocksType(selection, () => $createHeadingNode(headingTag));
        }
      }
    });
  };

  const getCurrentStyle = () => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const anchorNode = selection.anchor.getNode();
        const element = anchorNode.getTopLevelElementOrThrow();

        if (element.getType() === "heading") {
          const headingNode = element as any;
          setCurrentStyle(headingNode.getTag() as StyleType);
        } else if (element.getType() === "quote") {
          setCurrentStyle("subtitle");
        } else {
          setCurrentStyle("normal");
        }
      }
    });
  };

  useEffect(() => {
    const removeUpdateListener = editor.registerUpdateListener(() => {
      getCurrentStyle();
    });
    return () => {
      removeUpdateListener();
    };
  }, [editor]);

  const handleStyleChange = (value: string) => {
    const style = value as StyleType;
    setCurrentStyle(style);
    applyStyle(style);
  };

  const currentOption = styleOptions.find((option) => option.value === currentStyle);

  return (
    <Select value={currentStyle} onValueChange={handleStyleChange}>
      <SelectTrigger className="w-48 h-8 border rounded-lg">
        <SelectValue>
          <span className={currentOption?.className}>{currentOption?.label}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {styleOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <span className={option.className}>{option.label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default StyleTool;
