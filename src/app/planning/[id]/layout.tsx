import { SidebarProvider } from "@/components/ui/sidebar";
import ChatSidebar from "../../../components/planning/chat/chat-sidebar";

export default function RoomLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      className="w-screen h-screen overflow-hidden"
      style={{ "--sidebar-width": "20vw" } as React.CSSProperties}
    >
      <main className="size-full">{children}</main>
      <ChatSidebar />
    </SidebarProvider>
  );
}
