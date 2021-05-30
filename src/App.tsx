import React, { useState } from 'react';
import AddUser from 'components/Users/AddUser';
import UsersList from 'components/Users/UsersList';
import './App.css';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addUsersHandler = (user: IUser) => {
    setUsers(prevUsers => {
      return [user, ...prevUsers];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList items={users} />
    </>
  );
};

export default App;
