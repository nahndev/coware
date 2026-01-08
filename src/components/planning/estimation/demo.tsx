import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import "./styles.css";

/**
 * This is an example of using a ref to a smaller
 * component as the dragConstraints to a motion.div in Framer Motion 2.
 *
 * By providing using a constraints component that's smaller
 * than the draggable component, you can easily create scrollable planes.
 */

export default function Demo() {
  const ref = useRef(null);

  return (
    <div className="container" ref={ref}>
      <motion.div className="scroller" drag="x" dragConstraints={ref} onMeasureDragConstraints={console.log} />
    </div>
  );
}
