import { cloneElement } from "react";
import { IVariantButtonProps } from "./interface";

export const BlueButton = ({
  children,
  icon,
  defaultStyle,
  empty,
  onClick,
}: IVariantButtonProps) => {
  return (
    <button
      className={`
      ${defaultStyle}
      ${
        empty
          ? "border-2 border-brand-1 text-brand-1 hover:bg-brand-1 hover:text-white"
          : "bg-brand-1 text-white hover:bg-brand-2"
      } 
    `}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && cloneElement(icon, { className: "w-7 h-7" })}
    </button>
  );
};

export const OrangeButton = ({
  children,
  icon,
  defaultStyle,
  empty,
  onClick,
}: IVariantButtonProps) => {
  return (
    <button
      className={`
      ${defaultStyle}
      ${
        empty
          ? "border-2 border-brand-4 text-brand-4 hover:bg-brand-4 hover:text-white"
          : "bg-brand-4 text-white hover:bg-brand-5"
      } 
    `}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && cloneElement(icon, { className: "w-7 h-7" })}
    </button>
  );
};

export const Gray1Button = ({
  children,
  icon,
  defaultStyle,
  empty,
  onClick,
}: IVariantButtonProps) => {
  return (
    <button
      className={`
      ${defaultStyle}
      ${
        empty
          ? "border-2 border-grey-1 text-grey-1 hover:bg-grey-1 hover:text-white"
          : "bg-grey-1 text-white hover:bg-grey-2"
      } 
    `}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && cloneElement(icon, { className: "w-7 h-7" })}
    </button>
  );
};

export const Gray6Button = ({
  children,
  icon,
  defaultStyle,
  empty,
  onClick,
}: IVariantButtonProps) => {
  return (
    <button
      className={`
      ${defaultStyle}
      border border-grey-5 bg-grey-6 hover:bg-grey-5
    `}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && cloneElement(icon, { className: "w-7 h-7" })}
    </button>
  );
};

export const RedButton = ({
  children,
  icon,
  defaultStyle,
  empty,
  onClick,
}: IVariantButtonProps) => {
  return (
    <button
      className={`
      ${defaultStyle}
      bg-feedback-error-1 text-white hover:bg-feedback-error-2
    `}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && cloneElement(icon, { className: "w-7 h-7" })}
    </button>
  );
};

export const WhiteButton = ({
  children,
  icon,
  defaultStyle,
  onClick,
  disabled,
}: IVariantButtonProps) => {
  return (
    <button
      className={`
      ${defaultStyle} 
      max-w-[220px] whitespace-nowrap border border-grey-5 bg-white text-brand-4 shadow-card hover:bg-grey-6 disabled:text-grey-4 disabled:hover:bg-white
    `}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      {icon && cloneElement(icon, { className: "w-7 h-7" })}
    </button>
  );
};
