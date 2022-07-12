import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FOCUSED_X_OFFSET = '0px';
const BLURRED_X_OFFSET = '16px';
const FOCUSED_Y_OFFSET = '-26px';
const BLURRED_Y_OFFSET = '16px';

const Input = ({ label }: InputProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const variants: Variants = {
    animate: () => ({
      opacity: focused ? 1 : 0.8,
      top: focused
        ? FOCUSED_Y_OFFSET
        : inputValue.length > 0
        ? FOCUSED_Y_OFFSET
        : BLURRED_Y_OFFSET,
      left: focused
        ? FOCUSED_X_OFFSET
        : inputValue.length > 0
        ? FOCUSED_X_OFFSET
        : BLURRED_X_OFFSET,
    }),
    initial: {
      opacity: 0.8,
    },
  };

  return (
    <div className={`${styles.container}`}>
      <motion.label id={label} className={styles.label}>
        <motion.input
          aria-labelledby={label}
          className={`${styles.input}`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setInputValue(e.target.value)}
        ></motion.input>
        <motion.span
          className={styles.span}
          variants={variants}
          initial='initial'
          animate='animate'
        >
          {label}
        </motion.span>
      </motion.label>
    </div>
  );
};

export default Input;
