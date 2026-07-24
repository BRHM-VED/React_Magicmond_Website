import type { NavLink } from "./types";
import { CALENDLY } from "../../utils/constants/constants";

export { CALENDLY };

export const navLinks: NavLink[] = [
  { label: "About", to: "/#about" },
  { label: "InfraEdge", to: "/infraedge" },
  { label: "Sports", to: "/sports" },
  { label: "IT Services", to: "/it-services" },
  { label: "Services", to: "/#service" },
  { label: "Process", to: "/#process" },
  { label: "Contact", to: "/#cta" },
];

export const footerHomeLinks: NavLink[] = [
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#service" },
  { label: "Process", to: "/#process" },
  { label: "Case Studies", to: "/#case-studies" },
];
