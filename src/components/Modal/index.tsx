import { useEffect, useRef, useState } from "react";
import { IModalContainerProps } from "./interface";

const Modal = ({ title, isOpen, children, big }: IModalContainerProps) => {
  if (!isOpen) return null;

  const [divSize, setDivSize] = useState<number>(0);

  const divElement = useRef<HTMLDivElement>(null);

  const divCurrent = divElement.current;

  useEffect(() => {
    if (!divCurrent) {
      return;
    }

    setDivSize(divCurrent.offsetHeight);
  }, [divCurrent?.offsetHeight]);

  return (
    <div
      className={`fixed inset-0 z-50 flex ${
        divSize < 656 && "items-center"
      }  justify-center bg-modal sm:overflow-y-auto`}
    >
      <div
        ref={divElement}
        className={`relative z-10 flex h-full w-full flex-col items-center gap-4 overflow-y-auto bg-white p-4 sm:m-5 sm:h-fit sm:max-h-[90%] ${
          big ? "sm:max-w-[992px]" : "sm:max-w-[392px]"
        }  sm:rounded-lg`}
      >
        <div className="w-full text-center">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
