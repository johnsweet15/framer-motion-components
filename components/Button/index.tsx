import { motion } from 'framer-motion';
import { buttonConfig } from './config';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'primary' | 'secondary';
}

const Button = ({ children, onClick, mode }: ButtonProps) => {
  return (
    <motion.button
      style={buttonConfig[mode || 'primary']}
      onClick={onClick}
      {...buttonConfig}
    >
      {children}
    </motion.button>
  );
};

export default Button;
