import type { IconName } from "../../../src/config/icons";
import { IconGlyph } from "./IconGlyph";

type FineIconProps = {
  icon: IconName;
  className?: string;
};

export function FineIcon({ icon, className = "" }: FineIconProps) {
  return <IconGlyph name={icon} className={className || "size-6"} />;
}
