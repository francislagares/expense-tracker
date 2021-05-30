import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './AddUser.module.css';
import Button from 'components/UI/Button';
import Card from 'components/UI/Card';
import ErrorModal from 'components/UI/ErrorModal';

interface Props {
  onAddUser: (args: IUser) => void;
}

const initlUserState = {
  userName: '',
  age: '',
};

const AddUser = ({ onAddUser }: Props) => {
  const [userInput, setUserInput] = useState<IUser>(initlUserState);
  const [error, setError] = useState<IError | null>();

  const addUserHandler = (event: Submit) => {
    event.preventDefault();

    if (
      userInput.userName.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });

      return;
    }

    if (+userInput.age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (+ 0)',
      });

      return;
    }

    const userData = {
      userName: userInput.userName,
      age: userInput.age,
      id: uuidv4(),
    };

    onAddUser(userData);

    setUserInput({
      userName: '',
      age: '',
    });
  };

  const userChangeHandler = (event: ChangeInput) => {
    setUserInput({
      ...userInput,
      userName: event.target.value,
    });
  };

  const userAgeHandler = (event: ChangeInput) => {
    setUserInput({
      ...userInput,
      age: event.target.value,
    });
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
          <input
            id='username'
            type='text'
            value={userInput.userName}
            onChange={userChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={userInput.age}
            onChange={userAgeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
