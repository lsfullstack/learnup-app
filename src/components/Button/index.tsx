import { IButtonProps } from "./interface";
import {
  BlueButton,
  Gray1Button,
  Gray6Button,
  OrangeButton,
  RedButton,
  WhiteButton,
} from "./variants";

const Button = ({
  children,
  icon,
  styleType,
  empty,
  onClick,
  disabled,
}: IButtonProps) => {
  let defaultStyle: string = `
    ${icon && "flex justify-between items-center px-4 gap-3"}
    w-full h-12 rounded-lg px-4
    text-button font-button
    transition duration-300 
  `;

  switch (styleType) {
    case "blue":
      return (
        <BlueButton
          children={children}
          icon={icon}
          defaultStyle={defaultStyle}
          empty={empty}
          onClick={onClick}
        />
      );
    case "orange":
      return (
        <OrangeButton
          children={children}
          icon={icon}
          defaultStyle={defaultStyle}
          empty={empty}
          onClick={onClick}
        />
      );
    case "grey-1":
      return (
        <Gray1Button
          children={children}
          icon={icon}
          defaultStyle={defaultStyle}
          empty={empty}
          onClick={onClick}
        />
      );
    case "grey-2":
      return (
        <Gray6Button
          children={children}
          icon={icon}
          defaultStyle={defaultStyle}
          empty={empty}
          onClick={onClick}
        />
      );
    case "red":
      return (
        <RedButton
          children={children}
          icon={icon}
          defaultStyle={defaultStyle}
          empty={empty}
          onClick={onClick}
        />
      );
    case "white":
      return (
        <WhiteButton
          children={children}
          icon={icon}
          defaultStyle={defaultStyle}
          onClick={onClick}
          disabled={disabled}
        />
      );
    default:
      return (
        <BlueButton
          children={children}
          icon={icon}
          defaultStyle={defaultStyle}
          empty={empty}
          onClick={onClick}
        />
      );
  }
};

export default Button;
