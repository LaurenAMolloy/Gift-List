import React from 'react'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
//import actions to update the state
import { addGift } from '../store/slices/giftSlice'
import { changeCost, changeName } from '../store/slices/formSlice'


export default function GiftForm() {
  //use dispatch
  const dispatch = useDispatch();
  //Access the state
  const name = useSelector(state => state.form.name)
  const cost = useSelector(state => state.form.cost)
  //Update the state with the form data
  //Render the list in the giftlist component
  //Make sure inputs are controlled-Why?

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value))
    
  }
  const handlecostChange = (e) => {
    const giftCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(giftCost))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //update state with form data
    //dispatch();
    dispatch(addGift({name, cost}))
  }
    
  return (
    //Display the form
    <div>
      <h1>Add Gift</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input 
        id="name" 
        type="text" 
        placeholder="Enter name" 
        value={name}
        onChange={handleNameChange}>
        </input>
        <label htmlFor='cost'>cost</label>
        <input 
        id="cost" 
        type="number" 
        placeholder="Enter cost" 
        value={cost || ""}
        onChange={handlecostChange}>
        </input>
        <Button primary>Add Gift</Button>
      </form>
    </div>
  )
}
