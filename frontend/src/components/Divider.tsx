import React from "react";
import styles from "./Divider.module.css";

type DividerProps = {
  /** Pixel height of the SVG area (defaults to 200) */
  height?: number;
  /** Whether to position at the bottom of a section (adjusts seam translate). Defaults to "top". */
  position?: "top" | "bottom";
  /** Extra className if needed */
  className?: string;
};

export default function Divider({
  height = 200,
  position = "top",
  className,
}: DividerProps) {
  const classes = [styles.svg, position === "bottom" && styles.bottom, className]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      src="/icons/trees.svg"
      alt=""
      aria-hidden="true"
      className={classes}
      style={{ height }}
    />
  );
}
