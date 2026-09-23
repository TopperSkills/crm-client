import type { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4">

      {/* Modal */}
      <div className="w-full max-w-lg bg-white rounded-2xl border border-[#B2DFDB] shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#B2DFDB]">
          <h2 className="text-xl font-bold text-[#263238]">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg text-gray-500 hover:text-[#263238] hover:bg-[#E0F2F1] transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {children}
        </div>

      </div>
    </div>
  );
};

export default Modal;