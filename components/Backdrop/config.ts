import { colors } from '../../theme';
import { DivConfig } from '../interfaces';

export const backdropConfig: DivConfig = {
  style: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: `${colors.black}e1`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'hidden',
    zIndex: 100,
  },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
