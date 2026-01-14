import { Ticket } from "@/types/ticket";
import { create } from "zustand";

export type TicketState = {
  tickets: Ticket[];
  inProcess: Ticket | null;
};

export const useTicketStore = create<TicketState>(() => ({
  tickets: [],
  inProcess: { id: "12", title: "Sample Ticket", description: "This is a sample ticket." },
}));

export const useInProcessTicket = () => {
  const { inProcess } = useTicketStore();
  return inProcess;
};
