import { AnchorHTMLAttributes, CSSProperties, ReactNode } from "react";

export interface ITargetLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  styleType: "blue" | "grey";
  targetType?: "_blank" | "_self"	| "_parent"	| "_top"
}