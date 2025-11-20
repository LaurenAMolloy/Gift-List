import React from 'react'
import { useSelector } from 'react-redux'

export default function GiftList() {
     //Get the list of gifts from the store
     const gifts = useSelector((state) => {
        return state.gifts.data
     });

     console.log(gifts)
      //Handlers for the delete button

     //Render the list with a delete button
    const renderedGifts = gifts.map((gift) => {
        return (
            <div key={gift.id}>
                <p>{gift.name} - {gift.cost}</p>
            </div>
        )
    });
  return (
    <div className="gift list">
        {renderedGifts}
    </div>
  )
}
