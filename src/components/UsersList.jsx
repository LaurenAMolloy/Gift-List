import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'
import { fetchUsers } from '../store/thunks/fetchUser';
import { addUser } from '../store/thunks/addUser';
import UsersListItem from './UsersListItem';
import Skeleton from './Skeleton';
import { useThunk } from '../hooks/useThunk';

export default function UsersList() {
    //Set initial loading state for LOADING users in hook!
    //UI ONLY more precision than Redux isLoading
    const [doFetchUsers, isLoadingUsers, loadingUserError] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    //Get users from the store using useSelector
    const { data } = useSelector(state => state.users);

    //Call fetch users asyncThunk using hook
    useEffect(() => {
      doFetchUsers();
    },[doFetchUsers]);

    const handleAddUser = () => {
     doCreateUser();
    }
    
    //Add loading and error states!
    let content
    if(isLoadingUsers) {
      content =  <Skeleton times={6} className="h-10 w-full" />
    } else if(loadingUserError) {
      content = <div>Error..</div>
    } else {
      content =  data.map((user) => {
        return <UsersListItem user={user} key={user.id} />
    });
    };

  return (
    <>
    <div className='pt-5 py-5 pl-5 pr-5 my-5 mx-5 border-2 rounded-md border-red-600'>
      <h1 className='text-2xl'>UsersList</h1>
      {
        isCreatingUser ? 'CreatingUser...' :
        <Button loading={isCreatingUser} onClick={handleAddUser} className="mt-3 mb-5" primary rounded>Add User</Button>
      }
      {creatingUserError && 'Error creating user...'}
      <div>{content}</div>
    </div>
    </>
  )
}
