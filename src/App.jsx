import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState(groceryItems);

  const editCompleted = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <section className="section-center">
      <Items items={items} editCompleted={editCompleted} />
    </section>
  );
};

export default App;
