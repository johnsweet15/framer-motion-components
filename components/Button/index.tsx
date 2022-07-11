import { motion } from 'framer-motion';
import { buttonConfig } from './config';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'primary' | 'secondary';
}

const Button = ({ children, onClick, mode }: ButtonProps) => {
  console.log(buttonConfig[mode || 'primary']);
  return (
    <motion.button
      style={buttonConfig[mode || 'primary']}
      {...buttonConfig}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
