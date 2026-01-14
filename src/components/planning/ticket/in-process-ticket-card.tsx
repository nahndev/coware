"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Flex from "@/components/ui/flex";
import { useInProcessTicket } from "@/service/ticket";
import { Ticket } from "@/types/ticket";
import TicketTimer from "./ticket-timer";

export type InProcessTicketCardProps = {};

const InProcessTicketCard: React.FC<InProcessTicketCardProps> = () => {
  const inProcessTicket = useInProcessTicket();
  if (!inProcessTicket) {
    return <div>No ticket in process</div>;
  }
  return (
    <Card className="bg-transparent  border-0 shadow-none">
      <CardHeader>
        <Flex justify="space-between" align="center" direction="row">
          <CardTitle className="font-bold">{inProcessTicket.title}</CardTitle>
          <TicketTimer />
        </Flex>
      </CardHeader>
      <CardContent>
        <CardDescription>{inProcessTicket.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default InProcessTicketCard;
