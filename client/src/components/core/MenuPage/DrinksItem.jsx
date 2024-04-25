import React from 'react'
import { drinkOptions } from '../../../data/main'

const DrinksItem = () => {
  return (
    <table className="m-auto w-full my-[71.2px]">
      <tr className="text-left">
        <th>Name</th>
        <th>Price</th>
      </tr>
      {drinkOptions.map((item, index) => (
        <tr className="">
          <>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </>
        </tr>
      ))}
    </table>
  )
}

export default DrinksItem