import { AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';
import { useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Head from 'next/head';

const Components: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div style={{ padding: 40 }}>
      <Head>
        <title>Components</title>
      </Head>
      <Input label='First Name' />
      <div style={{ margin: 80 }}></div>
      <Input label='Last Name' />
      <div style={{ margin: 80 }}></div>
      <Button mode='primary' onClick={() => openModal()}>
        Click Me
      </Button>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal text='hello' handleClose={closeModal}>
            <Button mode='secondary' onClick={() => closeModal()}>
              Close
            </Button>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Components;
