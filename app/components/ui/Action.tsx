import type { ReactNode } from "react";
import type { IconName } from "../../../src/config/icons";
import { IconGlyph } from "./IconGlyph";

type ActionProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "editorial" | "link" | "liquid";
  external?: boolean;
  ariaLabel?: string;
  icon?: IconName;
};

export function Action({
  href,
  children,
  variant = "primary",
  external = false,
  ariaLabel,
  icon = "arrowRight",
}: ActionProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={`action action-${variant}`}
      aria-label={ariaLabel}
      {...externalProps}
    >
      <span>{children}</span>
      <IconGlyph name={icon} className="size-4" />
    </a>
  );
}
