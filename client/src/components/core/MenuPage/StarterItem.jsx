import React from "react";
import { StarterItems } from "../../../data/main";

const StarterItem = () => {
  return (
    <table className="border m-auto">
      <tr className="w-full border">
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tr>
        {StarterItems.map((item, index) => (
          <>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </>
        ))}
      </tr>
    </table>
  );
};

export default StarterItem;
