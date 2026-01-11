"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, TextFormatType } from "lexical";
import { useState, useEffect } from "react";
import { Bold, Italic, Underline, Strikethrough } from "lucide-react";
import ButtonIcon from "@/components/ui/button-icon";

interface FormatState {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikethrough: boolean;
}

function FormatTool() {
  const [editor] = useLexicalComposerContext();
  const [formats, setFormats] = useState<FormatState>({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
  });

  const formatText = (format: TextFormatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  const getCurrentFormats = () => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        setFormats({
          bold: selection.hasFormat("bold"),
          italic: selection.hasFormat("italic"),
          underline: selection.hasFormat("underline"),
          strikethrough: selection.hasFormat("strikethrough"),
        });
      }
    });
  };

  useEffect(() => {
    const removeUpdateListener = editor.registerUpdateListener(() => {
      getCurrentFormats();
    });
    return () => {
      removeUpdateListener();
    };
  }, [editor]);

  return (
    <div className="flex items-center rounded-lg">
      <FormatButton icon={Bold} format="bold" isActive={formats.bold} onClick={() => formatText("bold")} title="Bold" />
      <FormatButton
        icon={Italic}
        format="italic"
        isActive={formats.italic}
        onClick={() => formatText("italic")}
        title="Italic"
      />
      <FormatButton
        icon={Underline}
        format="underline"
        isActive={formats.underline}
        onClick={() => formatText("underline")}
        title="Underline"
      />
      <FormatButton
        icon={Strikethrough}
        format="strikethrough"
        isActive={formats.strikethrough}
        onClick={() => formatText("strikethrough")}
        title="Strikethrough"
      />
    </div>
  );
}

type FormatButtonProps = {
  icon: React.ComponentType<any>;
  format: TextFormatType;
  isActive: boolean;
  onClick: () => void;
  title: string;
};

function FormatButton({ icon, format, isActive, onClick, title }: FormatButtonProps) {
  return (
    <ButtonIcon
      icon={icon}
      onClick={onClick}
      className={isActive ? "border-b border-black rounded-none" : "opacity-50"}
      title={title}
    />
  );
}

export default FormatTool;
