import { AnimatePresence, motion } from 'framer-motion';
import { getVariants } from './CornerDialog.anim';
import styles from './CornerDialog.module.scss';

interface CornerDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  show?: boolean;
}

const CornerDialog = ({ show = true, children }: CornerDialogProps) => {
  return (
    <AnimatePresence initial={show} exitBeforeEnter={true}>
      {show && (
        <motion.div
          className={styles.container}
          variants={getVariants()}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CornerDialog;
