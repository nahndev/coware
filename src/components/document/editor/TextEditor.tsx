"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { exampleTheme as theme } from "./theme";

import A4 from "@/components/ui/a4";
import TextToolbar from "./toolbar/TextToolbar";

const onError = (error: Error) => {
  console.error(error);
};

export type TextEditorProps = {
  value?: string;
  onChangeValue?: (value: string) => void;
};

export default function TextEditor({ value, onChangeValue }: TextEditorProps) {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode, QuoteNode],
    editionState: value,
  };

  const onChange = (editorState: any) => {
    const value = editorState.toJSON();
    onChangeValue?.(JSON.stringify(value));
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <TextToolbar />
      <A4 className="relative flex-1">
        <RichTextPlugin
          contentEditable={<ContentEditable className="size-full p-4 outline-none" />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
      </A4>
      <OnChangePlugin onChange={onChange} ignoreSelectionChange ignoreHistoryMergeTagChange />
    </LexicalComposer>
  );
}
