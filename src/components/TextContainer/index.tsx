interface ITextContainerProps {
    text: string;
    className: string | "w-5";
}

const TextContainer = ({text, className}: ITextContainerProps) => {
    return( <div>
        <p className={className || "w-auto"}>{text}</p>
        </div>
    )
}

export default TextContainer;