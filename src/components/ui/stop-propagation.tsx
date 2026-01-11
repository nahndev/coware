"use client";
import { H } from "node_modules/framer-motion/dist/types.d-a9pt5qxk";
import { PropsWithChildren, useEffect, useRef } from "react";

export type StopPropagationProps = PropsWithChildren<
  {
    eventTypes: Array<keyof HTMLElementEventMap>;
  } & React.HTMLAttributes<HTMLDivElement>
>;

const StopPropagation: React.FC<StopPropagationProps> = ({ eventTypes, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Setting up stopPropagation for events:", eventTypes);
    const element = ref.current;
    if (!element) return;

    const handlers: { [key in keyof HTMLElementEventMap]?: (e: Event) => void } = {};

    eventTypes.forEach((eventType) => {
      const handler = (e: Event) => {
        e.stopPropagation();
      };
      handlers[eventType] = handler;
      element.addEventListener(eventType, handler);
    });

    return () => {
      eventTypes.forEach((eventType) => {
        const handler = handlers[eventType];
        if (handler) {
          element.removeEventListener(eventType, handler);
        }
      });
    };
  }, [eventTypes, ref.current]);

  return (
    <div ref={ref} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};

export default StopPropagation;
