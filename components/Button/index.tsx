import { motion } from 'framer-motion';
import { buttonConfig } from './config';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'primary' | 'secondary';
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <motion.button {...buttonConfig} onClick={onClick}>
      {children}
    </motion.button>
  );
};

export default Button;
