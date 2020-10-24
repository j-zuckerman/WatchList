import React, { useContext } from 'react';
import { UserContext } from '../../providers';

export const WatchList = () => {
  const user = useContext(UserContext);

  return <div>{user}</div>;
};
