import { DivConfig } from '../interfaces';

export const backdropConfig: DivConfig = {
  style: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: '#000000e1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'hidden',
  },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
