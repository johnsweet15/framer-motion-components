import { motion } from 'framer-motion';
import { getVariants } from './CornerDialog.anim';
import styles from './CornerDialog.module.scss';

interface CornerDialogProps extends React.HTMLAttributes<HTMLDivElement> {}

const CornerDialog = ({ children }: CornerDialogProps) => {
  return (
    <motion.div
      className={styles.container}
      variants={getVariants()}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {children}
    </motion.div>
  );
};

export default CornerDialog;
