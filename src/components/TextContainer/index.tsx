import React from 'react';
import { ITextContainerProps } from './interface';

const TextContainer = ({
  text,
  className,
  highlightedWord = '',
}: ITextContainerProps) => {
  const words = text?.split(' ');

  const highlightCamelCase = (word: string) => {
    const parts = word?.split(/(?=[A-Z])/);
    const highlightedParts = highlightedWord.replace(',', '').split(/(?=[A-Z])/);

    return (
      <span>
         {parts?.map((part, index) => {
          const subparts = part.split(',');

          return (
            <span
              key={index}
              className={`${
                subparts[0] == highlightedParts[1] && 'text-brand-1'
              } ${part === highlightedParts[0] && 'text-brand-5'}`}
            >
              {part}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <div className={"bg-grey-4 radius-4 rounded-lg"}>
      <p className={className || 'w-text_container p-4 h-auto text-white'}>
        {words?.map((word, index) => {
          const isHighlighted = word === highlightedWord;

          return (
            <span
              key={index}
              className={`${
                !isHighlighted ? 'text-white' : ''
              }`}
            >
              {highlightCamelCase(word)}{word === highlightedWord? ', ': ' '}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default TextContainer;