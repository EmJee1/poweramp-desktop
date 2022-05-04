interface ModalProps {
  children: JSX.Element | JSX.Element[];
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div
      tabIndex={-1}
      className="fixed inset-0 flex items-center justify-center bg-black/50"
    >
      <div className="relative bg-white">{children}</div>
    </div>
  );
};

export default Modal;
