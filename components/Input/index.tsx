import { motion } from 'framer-motion';
import { ChangeEvent, useState } from 'react';
import styles from './Input.module.scss';
import { getVariants } from './Input.anim';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label }: InputProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length === 0) {
      setError('This is a required field');
    } else {
      setError(null);
    }
  };

  const handleFocus = (isFocused: boolean) => {
    // if focus
    // if (isFocused) {
    //   setError(null);
    // }
    // // if blur
    // else if (!isFocused && inputValue.length === 0) {
    //   setError('This is a required field');
    // }
    setFocused(isFocused);
  };

  return (
    // <div style={{ display: 'block', position: 'relative' }}>
    <div className={`${styles.container}`}>
      <input
        aria-label={label}
        className={`${styles.input}`}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        onChange={handleChange}
        style={{ border: error ? '1px solid red' : 'none' }}
      />
      <motion.p
        className={styles.span}
        variants={getVariants(focused, inputValue)}
        initial='initial'
        animate='animate'
        style={{ margin: 0 }}
      >
        {label}
      </motion.p>

      {error && <p style={{ color: 'red', fontSize: 14 }}>{error}</p>}
    </div>
    // </div>
  );
};

export default Input;
