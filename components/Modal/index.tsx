import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Backdrop from '../Backdrop';
import { modalConfig } from './config';
import classes from './Modal.module.scss';

interface ModalProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClose: () => void;
  show: boolean;
}

const Modal = ({ show = true, handleClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [srcElement, setSrcElement] = useState<HTMLElement | null>();
  const [event, setEvent] = useState<KeyboardEvent>();

  const handleKeyEvent = (event: KeyboardEvent) => {
    if (show) {
      if (event.key === 'Escape') {
        handleClose();
        if (srcElement) {
          srcElement.focus();
          setSrcElement(null);
        }
      }
      if (event.key === 'Tab') {
        handleTabKey(event);
      }
    } else {
      if (event.key === 'Enter' || event.key === 'Space') {
        setSrcElement(event.target as HTMLElement);
      }
    }
  };

  const handleTabKey = (e: KeyboardEvent) => {
    if (modalRef.current) {
      const focusableModalElements = modalRef.current?.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      ) as NodeListOf<HTMLElement>;
      const firstElement = focusableModalElements[0];
      const lastElement =
        focusableModalElements[focusableModalElements.length - 1];

      if (
        firstElement &&
        !e.shiftKey &&
        document.activeElement !== firstElement
      ) {
        firstElement.focus();
        return e.preventDefault();
      }

      if (lastElement && e.shiftKey && document.activeElement !== lastElement) {
        lastElement.focus();
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      setEvent(event);
      // console.log(event);
    });

    return () => {
      window.removeEventListener('keydown', () => {});
    };
  }, []);

  useEffect(() => {
    if (event) {
      handleKeyEvent(event);
    }
  }, [event]);

  useEffect(() => {
    if (srcElement && !show) {
      srcElement.focus();
      setSrcElement(null);
    }
  }, [show]);

  return (
    <AnimatePresence initial={show} exitBeforeEnter={true}>
      {show ? (
        <Backdrop onClick={handleClose}>
          <motion.div
            className={classes.modal}
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            {...modalConfig}
          >
            {children}
          </motion.div>
        </Backdrop>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
