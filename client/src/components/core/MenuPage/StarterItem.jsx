import React from "react";
import { starterFoods } from "../../../data/main";

const StarterItem = () => {
  return (
    <table className="m-auto w-full my-[71.2px]">
      <tr className="text-left">
        <th>Name</th>
        <th>Price</th>
      </tr>
      {starterFoods.map((item, index) => (
        <tr className="">
          <>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </>
        </tr>
      ))}
    </table>
  );
};

export default StarterItem;
