"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND, LexicalCommand, TextFormatType, TextNode } from "lexical";

import { HeadingNode, $createHeadingNode, HeadingTagType } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import { $getSelection, $isRangeSelection } from "lexical";
import { exampleTheme as theme } from "../theme";

import {
  FORMAT_ELEMENT_COMMAND, // Thêm cái này
  ElementFormatType, // Thêm type này nếu dùng TS
} from "lexical";
import A4 from "@/components/ui/a4";
import SizeTool from "./SizeTool";
import AlignTool from "./AlignTool";
import FormatTool from "./FormatTool";
import StyleTool from "./StyleTool";

function TextToolbar() {
  const [editor] = useLexicalComposerContext();

  const formatText = (command: TextFormatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, command);
  };

  const formatHeading = (headingSize: HeadingTagType) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(headingSize));
      }
    });
  };

  const formatElement = (format: ElementFormatType) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, format);
  };

  return (
    <div className="toolbar border-b p-2 flex gap-2">
      <StyleTool />
      <FormatTool />
      <SizeTool />
      <AlignTool />
    </div>
  );
}

export default TextToolbar;
