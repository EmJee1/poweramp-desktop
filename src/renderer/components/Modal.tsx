interface ModalProps {
  onClose?: () => void;
  children: JSX.Element | JSX.Element[];
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div
      tabIndex={-1}
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={() => onClose?.()}
    >
      <div onClick={(e) => e.stopPropagation()} className="relative bg-white">
        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  onClose: undefined,
};

export default Modal;
