import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  ChevronRight,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Palette,
  Phone,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { iconStroke, type IconName } from "../../../src/config/icons";

type IconGlyphProps = {
  name: IconName;
  className?: string;
};

export function IconGlyph({ name, className = "size-6" }: IconGlyphProps) {
  const iconProps = {
    className,
    strokeWidth: iconStroke,
    "aria-hidden": "true",
  } as const;

  switch (name) {
    case "bookOpen":
      return <BookOpen {...iconProps} />;
    case "calendarCheck":
      return <CalendarCheck {...iconProps} />;
    case "chevronRight":
      return <ChevronRight {...iconProps} />;
    case "graduationCap":
      return <GraduationCap {...iconProps} />;
    case "landmark":
      return <Landmark {...iconProps} />;
    case "mail":
      return <Mail {...iconProps} />;
    case "mapPin":
      return <MapPin {...iconProps} />;
    case "messageCircle":
      return <MessageCircle {...iconProps} />;
    case "microscope":
      return <Microscope {...iconProps} />;
    case "palette":
      return <Palette {...iconProps} />;
    case "phone":
      return <Phone {...iconProps} />;
    case "sparkles":
      return <Sparkles {...iconProps} />;
    case "stethoscope":
      return <Stethoscope {...iconProps} />;
    case "syringe":
      return <Syringe {...iconProps} />;
    case "arrowRight":
    default:
      return <ArrowRight {...iconProps} />;
  }
}
