import React, { forwardRef, CSSProperties } from "react";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  gap?: number | string;
  wrap?: boolean | "nowrap" | "wrap" | "wrap-reverse";
  inline?: boolean;
  row?: boolean; // shorthand for direction="row"
  column?: boolean; // shorthand for direction="column"
}

/**
 * Simple, strongly-typed Flex container component.
 *
 * - Uses inline styles so it's framework-agnostic (no Tailwind dependency).
 * - For gap: number -> px, string passes through (e.g. "0.5rem", "10px").
 * - forwardRef to allow parent access to the DOM node.
 */
const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    direction: directionProp,
    align = "stretch",
    justify = "flex-start",
    gap = 0,
    wrap = false,
    inline = false,
    row = false,
    column = false,
    style,
    children,
    className,
    ...rest
  } = props;

  // precedence: explicit `direction` prop > shorthand `row`/`column` > default "row"
  const direction = directionProp ?? (row ? "row" : column ? "column" : "row");

  const resolvedWrap = wrap === true ? "wrap" : wrap === false ? "nowrap" : wrap;

  const resolvedGap = typeof gap === "number" ? `${gap}px` : gap;

  const combinedStyle: CSSProperties = {
    display: inline ? "inline-flex" : "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    gap: resolvedGap,
    flexWrap: resolvedWrap,
    ...style,
  };

  return (
    <div ref={ref} style={combinedStyle} className={className} {...rest}>
      {children}
    </div>
  );
});

Flex.displayName = "Flex";

export default Flex;
