"use client";

import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export type ChatSidebarProps = {};

const ChatSidebar: React.FC<ChatSidebarProps> = () => {
  return (
    <Sidebar side="right">
      <SidebarHeader>Chat</SidebarHeader>
      <SidebarTrigger />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2">
          <Input type="text" placeholder="Type a message..." className="w-full px-2 py-1 border rounded" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default ChatSidebar;
