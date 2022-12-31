import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <form className="flex flex-col justify-between w-full bg-white h-full rounded-md p-5">
      <div>
        <label> Email </label>
        <input className="bg-gray-200 w-full py-2 rounded-md px-2 mb-2" />
      </div>
      <div>
        <label> Pick Up Location </label>
        <input className="bg-gray-200 w-full py-2 rounded-md px-2 mt-2" />
        <div>
          <input type="checkbox" />
          <label> provide more infomation on pickup location? </label>
        </div>
      </div>
      <textarea
        placeholder="more details for pickup"
        rows={4}
        className="bg-gray-200 w-full py-2 rounded-md px-2 my-3"
      ></textarea>
      <div>
        <label> Enter Destination </label>
        <input className="bg-gray-200 w-full py-2 rounded-md px-2 mt-2" />
        <div>
          <input type="checkbox" />
          <label> provide more infomation on pickup location? </label>
        </div>
      </div>
      <textarea
        placeholder="more details for pickup"
        rows={4}
        className="bg-gray-200 w-full py-2 rounded-md px-2 my-3"
      ></textarea>
      <Button text="Request" />
    </form>
  );
}

export default Form