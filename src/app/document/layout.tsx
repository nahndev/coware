import DocumentTree from "@/components/document/browser/DocumentBrowser";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

export type DocumentLayoutProps = PropsWithChildren<{}>;

const DocumentLayout: React.FC<DocumentLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider
      className="w-screen h-screen overflow-hidden"
      style={{ "--sidebar-width": "500px" } as React.CSSProperties}
    >
      <Sidebar side="left" className="bg-white">
        <DocumentTree />
      </Sidebar>
      <main className="bg-slate-50 size-full overflow-hidden">{children}</main>
    </SidebarProvider>
  );
};

export default DocumentLayout;
