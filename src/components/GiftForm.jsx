import Button from "./Button"

export default function GiftForm() {
  return (
    <div className=''>
        <form className="flex flex-col w-1/2 p-5 border-2 mx-2 my-5 gap-2">
            <p className='font-bold'>Gift Form</p>
            <label htmlFor='name'></label>
            <input id="name" type="text" placeholder='Enter gift name'></input>
            <label htmlFor='price'></label>
            <input id="price" type="number" placeholder='Enter gift price'></input> 
            <Button primary rounded>Add Gift</Button>
        </form>
    </div>
  )
}
