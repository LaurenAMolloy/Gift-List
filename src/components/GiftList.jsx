import { useFetchGiftsQuery } from '../store'
import Button from './Button'

export default function GiftList({ user }) {
    const { data, error, isLoading } = useFetchGiftsQuery(user);
    console.log(user)
    console.log(data, error, isLoading);
    //When user clicks show form to update gifts
    //When form is submitted hide form
    //Update giftlist using RTK Query
    //Add a mechanism where user can add a random gift
    //Fetch from dummy json
    //Use the mutation
  return (
    <>
    <div className="flex flex-row align-middle gap-5 py-4">
    <p>Gifts for {user.name}</p>
        <Button primary rounded>Add a Gift</Button>
        <Button primary rounded>Surprise Me!</Button>
    </div>
    </>
  )
}
