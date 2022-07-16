import { AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Head from 'next/head';

const Components: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [firstName, setFirstName] = useState('');

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    console.log(firstName);
  }, [firstName]);

  return (
    <div style={{ padding: 40 }}>
      <Head>
        <title>Components</title>
      </Head>
      <Input
        label='First Name'
        validations={[
          { pattern: /^[a-zA-Z0-9]+$/, errorMessage: 'Alphanumeric' },
        ]}
        required
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
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
