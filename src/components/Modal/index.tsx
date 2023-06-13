import { IModalContainerProps } from "./interface";

const Modal = ({
  title,
  isOpen,
  onClose,
  children,
  big,
}: IModalContainerProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center sm:overflow-y-auto">
      <div
        className="absolute inset-0 bg-modal"
        onClick={() => onClose(false)}
      />

      <div
        className={`relative z-10 flex h-full w-full flex-col items-center gap-4 overflow-y-auto bg-white p-4 sm:m-5 sm:h-fit ${
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
