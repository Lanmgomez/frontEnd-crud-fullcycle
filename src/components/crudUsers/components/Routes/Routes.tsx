import React from 'react';
import Crud from '../../Crud';
import UserCardInfosById from '../UserCardInfosByID/UserCardInfosById';
import EditCard from '../EditCard/EditCard';

export const Routes = [
  {
    path: "/",
    element: <Crud />
  },
  { 
    path: "/users/:id", 
    element: <UserCardInfosById /> 
  },
  {
    path: "/users/:id/edit-user",
    element: <EditCard />
  },
];