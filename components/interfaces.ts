import { HTMLMotionProps } from 'framer-motion';
import { CSSProperties } from 'react';

export interface ButtonConfig extends HTMLMotionProps<'button'> {
  primary?: CSSProperties;
  secondary?: CSSProperties;
}

export interface DivConfig extends HTMLMotionProps<'div'> {
  style?: CSSProperties;
}
