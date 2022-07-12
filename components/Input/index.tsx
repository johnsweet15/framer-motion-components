import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './Input.module.scss';
import { getVariants } from './Input.anim';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label }: InputProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className={`${styles.container}`}>
      <input
        aria-label={label}
        className={`${styles.input}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <motion.span
        className={styles.span}
        variants={getVariants(focused, inputValue)}
        initial='initial'
        animate='animate'
      >
        {label}
      </motion.span>
    </div>
  );
};

export default Input;
