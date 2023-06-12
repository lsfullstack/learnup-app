import { IModalContainerProps } from "./interface";

const Modal = ({ title, isOpen, onClose, children }: IModalContainerProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-modal"
        onClick={() => onClose(false)}
      />

      <div className="relative z-10 flex h-full w-full flex-col items-center gap-4 overflow-y-auto bg-white p-4 sm:h-fit sm:max-w-[392px] sm:rounded-lg">
        <div className="w-full text-center">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
