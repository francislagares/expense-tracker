import React from 'react';
import Card from './Card';
import classes from './ErrorModal.module.css';
import Button from 'components/UI/Button';

interface Props {
  title: string;
  message: string;
  onConfirm: () => void;
}

const ErrorModal = ({ title, message, onConfirm }: Props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onConfirm} />
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
    </>
  );
};

export default ErrorModal;
