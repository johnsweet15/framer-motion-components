import { colors } from '../../theme';
import { DivConfig } from '../interfaces';

const easeIn = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export const modalConfig: DivConfig = {
  style: {
    width: 'clamp(50%, 700px, 90%)',
    height: 'min(50%, 300px)',
    margin: 'auto',
    padding: '3rem',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.darkGray,
  },
  variants: easeIn,
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: { duration: 0.2 },
};
