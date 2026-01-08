"use client";

import { useEffect, useMemo } from "react";
import { useCountdown } from "usehooks-ts";
import numeral from "numeral";
import { TimeUtils } from "@/utils/time";
import { Millisecond } from "@/constants/millisecond";

export type TicketTimerProps = {};

const TicketTimer: React.FC<TicketTimerProps> = () => {
  const [count, { startCountdown }] = useCountdown({ countStart: 90, intervalMs: Millisecond.Second });

  useEffect(() => {
    startCountdown();
  }, []);

  const formatted = useMemo(() => TimeUtils.formatDuration(count), [count]);

  return <div className="text-xl font-bold">{formatted}</div>;
};

export default TicketTimer;
