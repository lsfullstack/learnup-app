import { AnchorHTMLAttributes, CSSProperties, ReactNode } from "react";

export interface ITargetLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  styleType: "blue" | "grey";
}