import CloseIcon from '../icons/CloseIcon';

interface ModalProps {
  title: string;
  onClose?: () => void;
  children: JSX.Element | JSX.Element[];
}

const Modal = ({ title, onClose, children }: ModalProps) => {
  return (
    <div
      tabIndex={-1}
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={() => onClose?.()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-32 relative w-1/2 rounded-lg bg-white py-2 px-4 shadow"
      >
        <div className="flex items-center justify-between rounded-t p-4">
          <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
          <button
            type="button"
            onClick={() => onClose?.()}
            className="rounded-lg p-1.5 text-slate-800 hover:bg-slate-200"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="space-y-6 p-6">{children}</div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  onClose: undefined,
};

export default Modal;
