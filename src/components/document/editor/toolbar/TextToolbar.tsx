"use client";

import SizeTool from "./SizeTool";
import AlignTool from "./AlignTool";
import FormatTool from "./FormatTool";
import StyleTool from "./StyleTool";

function TextToolbar() {
  return (
    <nav className="border w-full bg-slate-50 border-b">
      <div className="flex gap-2 p-2">
        <div className="flex-1" />
        <StyleTool />
        <FormatTool />
        <AlignTool />
        <SizeTool />
      </div>
    </nav>
  );
}

export default TextToolbar;
