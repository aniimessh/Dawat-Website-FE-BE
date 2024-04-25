import { brunchItems } from "../../../data/main";

const BrunchItem = () => {
  return (
    <table className="m-auto w-full my-[71.2px]">
      <tr className="text-left">
        <th>Name</th>
        <th>Price</th>
      </tr>
      {brunchItems.map((item, index) => (
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

export default BrunchItem;
