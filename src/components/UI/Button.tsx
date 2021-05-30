import React from 'react';
import classes from './Button.module.css';

interface Props {
  type?: 'submit' | 'reset';
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({ type, onClick, children }: Props) => {
  return (
    <button
      className={classes.button}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
