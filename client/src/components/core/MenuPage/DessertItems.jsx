import React from 'react'
import { dessertOptions } from '../../../data/main'

const DessertItems = () => {
  return (
    <table className="m-auto w-full my-[71.2px]">
      <tr className="text-left">
        <th>Name</th>
        <th>Price</th>
      </tr>
      {dessertOptions.map((item, index) => (
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

export default DessertItems