import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './AddUser.module.css';
import Button from 'components/UI/Button';
import Card from 'components/UI/Card';
import ErrorModal from 'components/UI/ErrorModal';

interface Props {
  onAddUser: (args: IUser) => void;
}

const AddUser = ({ onAddUser }: Props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<IError | null>();

  const addUserHandler = (event: Submit) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredAge = ageInputRef.current?.value;

    if (enteredName?.trim().length === 0 || enteredAge?.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });

      return;
    }

    if (enteredAge && +enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (+ 0)',
      });

      return;
    }

    const userData = {
      userName: enteredName as string,
      age: enteredAge as string,
      id: uuidv4(),
    };

    onAddUser(userData);

    // TypeScript checks for null before using current
    if (nameInputRef.current !== null && ageInputRef.current !== null) {
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>User Name</label>
          <input id='username' type='text' ref={nameInputRef} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
