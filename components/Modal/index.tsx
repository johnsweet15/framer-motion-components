import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
import Button from '../Button';
import { modalConfig } from './config';

interface ModalProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  handleClose: () => void;
}

const Modal = ({ text, handleClose }: ModalProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div onClick={(e) => e.stopPropagation()} {...modalConfig}>
        <p>{text}</p>
        <Button onClick={handleClose}>Close</Button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
