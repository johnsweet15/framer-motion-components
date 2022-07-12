import { motion } from 'framer-motion';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'primary' | 'secondary';
}

const Button = ({ children, onClick, mode }: ButtonProps) => {
  return (
    <motion.button
      className={`${styles.button} ${styles.primary}`}
      onClick={onClick}
      whileHover={{
        cursor: 'pointer',
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        opacity: 0.8,
        transition: { duration: 0.1 },
        scale: 1,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
