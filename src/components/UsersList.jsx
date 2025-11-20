import React, { useEffect } from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../store/thunks/fetchUser';
import { addUser } from '../store/thunks/addUser';
import UsersListItem from './UsersListItem';

export default function UsersList() {
    const dispatch = useDispatch();
    //Create a custom hook so we can use loading states etc
    
    //Get users from the store using useSelector
    const { data, isLoading, error }= useSelector(state => state.users);
    console.log(data)

    //Call fetch users asyncThunk 
    useEffect(() => {
        dispatch(fetchUsers())
    },[]);

    const handleAddUser = () => {
      dispatch(addUser());
    }

    // //map users
    let content = data.map((user) => {
        return <UsersListItem user={user} key={user.id} />
    })

  return (
    <>
    <div className='pt-5 py-5 pl-5 pr-5 my-5 mx-5 border-2 rounded-md border-red-600'>
      <h1 className='text-2xl'>UsersList</h1>
    <div>{content}</div>
    <Button onClick={handleAddUser} className="mt-3" primary rounded>Add User</Button>
    </div>
    </>
  )
}
