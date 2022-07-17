import { motion } from 'framer-motion';
import styles from './Card.module.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: number;
}

const Card = ({ elevation, children }: CardProps) => {
  return <motion.div className={styles.card}>{children}</motion.div>;
};

export default Card;
