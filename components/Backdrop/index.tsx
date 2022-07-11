import { motion } from 'framer-motion';
import { backdropConfig } from './config';

interface BackdropProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const Backdrop = ({ children, onClick }: BackdropProps) => {
  return (
    <motion.div onClick={() => onClick()} {...backdropConfig}>
      {children}
    </motion.div>
  );
};

export default Backdrop;
