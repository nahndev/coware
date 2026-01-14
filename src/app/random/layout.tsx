import RandomContainer from "@/components/random/random-container";
import MainActionLayout from "@/components/ui/layout/main-action-layout";
import ScreenLayout from "@/components/ui/layout/screen-layout";
import { PropsWithChildren } from "react";

export type RandomLayoutProps = PropsWithChildren<{}>;

const RandomLayout: React.FC<RandomLayoutProps> = ({ children }) => {
  return (
    <ScreenLayout className="bg-slate-200">
      <MainActionLayout className="mx-auto w-4/5 bg-white h-full overflow-hidden ">
        <main className="size-full overflow-hidden">{children}</main>

        <RandomContainer />
      </MainActionLayout>
    </ScreenLayout>
  );
};

export default RandomLayout;
