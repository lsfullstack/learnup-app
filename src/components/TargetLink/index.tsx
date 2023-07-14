import Link from "next/link";
import { ITargetLinkProps } from "./interface";

export const TargetLink = ({
  href,
  children,
  styleType,
  targetType,
}: ITargetLinkProps) => {
  const defaultStyle: string = `w-fit font-enphasis hover:underline`;

  return (
    <Link
      className={`
        ${styleType === "blue" && `text-brand-3 ${defaultStyle}`}
        ${styleType === "grey" && `text-grey-4 ${defaultStyle}`}
      `}
      href={href}
      target={targetType ? "_self" : "_blank"}
    >
      {children}
    </Link>
  );
};
