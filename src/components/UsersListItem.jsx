import React from 'react'
import Button from './Button'
import { GoTrash } from "react-icons/go";
import ExpandablePanel from './ExpandablePanel';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../store/thunks/deleteUser'
import GiftList from './GiftList';
import GiftForm from './GiftForm';

export default function UsersListItem({ user }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }

  const header = <>
  <Button onClick={() => handleDelete(user.id)}>
      <GoTrash />
      </Button>
      <p className='ml-3'>{user.name}</p>
  </>

  return (
    <ExpandablePanel header={header}>
      <GiftList user={ user } />
      <GiftForm />
    </ExpandablePanel>
  )
}
