import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import classes from './ErrorModal.module.css';
import Button from 'components/UI/Button';

interface Props {
  title: string;
  message: string;
  onConfirm: () => void;
}

type Backdrop = Pick<Props, 'onConfirm'>;

const Backdrop = ({ onConfirm }: Backdrop) => {
  return <div className={classes.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }: Props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onConfirm }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root') as HTMLElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root') as HTMLElement,
      )}
    </>
  );
};

export default ErrorModal;
