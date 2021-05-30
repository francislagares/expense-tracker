import React from 'react';
import classes from './UserList.module.css';
import Card from 'components/UI/Card';

interface Props {
  items: IUser[];
}

const UsersList = ({ items }: Props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {items.map(user => (
          <li key={user.id}>
            {user.userName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
