import { HTMLMotionProps } from 'framer-motion';
import { CSSProperties } from 'react';

export interface ButtonConfig extends HTMLMotionProps<'button'> {
  style?: CSSProperties;
}

export interface DivConfig extends HTMLMotionProps<'div'> {
  style?: CSSProperties;
}
