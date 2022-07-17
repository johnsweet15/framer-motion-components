import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
import { modalConfig } from './config';

interface ModalProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  handleClose: () => void;
}

const Modal = ({ text, handleClose, children }: ModalProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div onClick={(e) => e.stopPropagation()} {...modalConfig}>
        <p>{text}</p>
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
