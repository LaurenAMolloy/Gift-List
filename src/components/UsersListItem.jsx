import React from 'react'
import { useState } from 'react';
import Button from './Button'
import { GoTrash } from "react-icons/go";
import ExpandablePanel from './ExpandablePanel';


export default function UsersListItem({ user }) {

  const header = <>
  <Button>
      <GoTrash />
      </Button>
      <p className='ml-3'>{user.name}</p>
  </>

  return (
    <ExpandablePanel header={header}>
      CONTENT!
      {/* {add gift form here to add items to list OR Add item from API?} */}
    </ExpandablePanel>
  )
}
