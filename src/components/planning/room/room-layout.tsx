import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import ChatSidebar from "../chat/chat-sidebar";

export default function RoomLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider style={{ "--sidebar-width": "20vw" } as React.CSSProperties}>
      <main className="flex-1">{children}</main>
      <ChatSidebar />
    </SidebarProvider>
  );
}
