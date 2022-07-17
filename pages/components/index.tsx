import { AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';
import { useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Head from 'next/head';
import CornerDialog from '../../components/CornerDialog';

const Components: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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

      <Button
        mode='primary'
        style={{ display: 'block', marginBottom: '30px' }}
        onClick={() => openModal()}
      >
        Open Modal
      </Button>

      <Button
        mode='primary'
        style={{ display: 'block' }}
        onClick={() => setDialogOpen(true)}
      >
        Open Corner Dialog
      </Button>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal text='hello' handleClose={closeModal}>
            <Button mode='secondary' onClick={() => closeModal()}>
              Close
            </Button>
          </Modal>
        )}
        {dialogOpen && (
          <CornerDialog>
            <h1 style={{ fontSize: 22 }}>Corner Dialog</h1>
            <p>
              This is a test to see what the dialog looks like with more content
            </p>
            <Button
              style={{ display: 'flex', justifyContent: 'center' }}
              onClick={() => setDialogOpen(false)}
            >
              Close
            </Button>
          </CornerDialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Components;
