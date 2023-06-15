import React from 'react';
import { ITextContainerProps, WordProps } from './interface';




const Word = ({ word, highlightedWord, className }: WordProps) => {
  const parts = word.split(/(?=[A-Z])/);
  const highlightedParts = highlightedWord?.replace(',', '').split(/(?=[A-Z])/);

  return (
    <span>
      {parts.map((part, index) => {
        const subparts = part.split(',');
        return (
          <span
            key={index}
            className={`${highlightedWord &&
              subparts[0] == highlightedParts[1] && 'text-brand-1'} ${part === highlightedParts[0] && 'text-brand-5'}`}
          >
            {part}
          </span>
        );
      })}
    </span>
  );
};

const TextContainer = ({
  text,
  className = "bg-grey-2 w-text_container radius-4 rounded-lg absolute bottom-24 left-1/4 overflow-hidden  animate-fade-in-and-left",
  highlightedWord = '',
}: ITextContainerProps) => {
  const words = text?.split(' ');

  return (
    <div className={className}>
      <p className={'p-4 h-auto text-white animate-fade-in-and-up opacity-0'}>
        {words?.map((word, index) => (
          <React.Fragment key={index}>
            <Word word={word} highlightedWord={highlightedWord}/>
            {word === highlightedWord ? ', ' : ' '}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default TextContainer;