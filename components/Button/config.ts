import { colors, fontFamily } from '../../theme';
import { ButtonConfig } from '../interfaces';

export const buttonConfig: ButtonConfig = {
  style: {
    background: `linear-gradient(15deg, ${colors.magenta}, ${colors.purple})`,
    fontSize: 18,
    border: 'none',
    padding: '10px 20px',
    borderRadius: 4,
    fontFamily: fontFamily,
    color: colors.white,
  },
  whileHover: {
    cursor: 'pointer',
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  whileTap: {
    opacity: 0.8,
    transition: { duration: 0.1 },
    scale: 1,
  },
};
