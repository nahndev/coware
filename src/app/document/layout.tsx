import { PropsWithChildren } from "react";

export type DocumentLayoutProps = PropsWithChildren<{}>;

const DocumentLayout: React.FC<DocumentLayoutProps> = ({ children }) => {
  return (
    <section className="bg-slate-500 w-screen h-screen">
      <main className="mx-auto w-4/5 h-full overflow-hidden bg-white">{children}</main>
    </section>
  );
};

export default DocumentLayout;
