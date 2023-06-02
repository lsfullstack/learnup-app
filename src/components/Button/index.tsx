import { IButtonProps } from "./interface";
import { BlueButton, Gray1Button, Gray6Button, OrangeButton, RedButton } from "./variants";

const Button = ({children, icon, styleType, empty}: IButtonProps) => {

  let defaultStyle: string = `
    ${icon && "flex justify-between items-center px-4 gap-3"}
    min-w-fit w-full h-12 rounded-lg
    text-button font-button
    transition duration-300 
  `;

  switch (styleType) {
    case "blue":
      return <BlueButton children={children} icon={icon} defaultStyle={defaultStyle} empty={empty} />
    case "orange":
      return <OrangeButton children={children} icon={icon} defaultStyle={defaultStyle} empty={empty} />
    case "grey-1":
      return <Gray1Button children={children} icon={icon} defaultStyle={defaultStyle} empty={empty} />
    case "grey-2":
      return <Gray6Button children={children} icon={icon} defaultStyle={defaultStyle} empty={empty} />
    case "red":
      return <RedButton children={children} icon={icon} defaultStyle={defaultStyle} empty={empty} />
    default:
      return <BlueButton children={children} icon={icon} defaultStyle={defaultStyle} empty={empty} />
  }
}

export default Button;
