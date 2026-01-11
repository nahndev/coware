"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection } from "lexical";
import { $getSelectionStyleValueForProperty, $patchStyleText } from "@lexical/selection";
import { useState, useEffect } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import ButtonIcon from "@/components/ui/button-icon";
import { Input } from "@/components/ui/input";

function SizeTool() {
  const [editor] = useLexicalComposerContext();
  const [fontSize, setFontSize] = useState(16);

  const applyFontSize = (size: number) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, {
          "font-size": `${size}px`,
        });
      }
    });
  };

  const getCurrentFontSize = () => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const size = $getSelectionStyleValueForProperty(selection, "font-size");
        const numericSize = size ? parseInt(size) : 16;
        setFontSize(numericSize);
      }
    });
  };

  useEffect(() => {
    const removeUpdateListener = editor.registerUpdateListener(() => {
      getCurrentFontSize();
    });
    return () => {
      removeUpdateListener();
    };
  }, [editor]);

  const handleInputChange = (value: string) => {
    const size = parseInt(value);
    if (!isNaN(size)) {
      const clampedSize = Math.max(8, Math.min(128, size));
      setFontSize(clampedSize);
      applyFontSize(clampedSize);
    }
  };

  const increment = () => {
    const newSize = Math.min(128, fontSize + 1);
    setFontSize(newSize);
    applyFontSize(newSize);
  };

  const decrement = () => {
    const newSize = Math.max(8, fontSize - 1);
    setFontSize(newSize);
    applyFontSize(newSize);
  };

  return (
    <div className="flex items-center border rounded-lg">
      <ButtonIcon icon={MinusIcon} onClick={decrement}></ButtonIcon>
      <Input
        className="border-0 focus-visible:ring-0 w-8 text-center p-0"
        value={fontSize}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <ButtonIcon icon={PlusIcon} onClick={increment}></ButtonIcon>
    </div>
  );
}

export default SizeTool;
