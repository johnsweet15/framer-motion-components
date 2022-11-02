import { useState } from 'react';
import { motion } from 'framer-motion';
import classes from './Switch.module.scss';

interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onToggle?: () => void;
}

const Switch = ({ style, onToggle }: SwitchProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle();
    }
  };
  return (
    <div
      className={classes.switch}
      data-isOn={isOn}
      onClick={toggleSwitch}
      style={style}
    >
      <motion.div className={classes.handle} layout transition={spring} />
    </div>
  );
};

export default Switch;

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};
