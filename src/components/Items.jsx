import SingleItem from "./SingleItem";
import "./Items.css";

const Items = ({ items, editCompleted }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem key={item.id} item={item} editCompleted={editCompleted} />
        );
      })}
    </div>
  );
};

export default Items;
