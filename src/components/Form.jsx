import { useState } from "react";

export default function Form({ onAddNewItem }) {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState("");

  const handleSbmit = (e) => {
    e.preventDefault();

    if (!item) return;

    const newItem = {
      id: Date.now(),
      item,
      quantity,
      packed: false,
    };

    //set new item
    onAddNewItem(newItem);

    setItem("");
    setQuantity(1);
  };

  return (
    <div className="add-form">
      <h3>What do you need for your 🥰 trip? </h3>
      <form onSubmit={handleSbmit}>
        <select onChange={(e) => setQuantity(+e.target.value)} value={quantity}>
          {Array.from({ length: 20 }, (e, i) => i + 1).map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => setItem(e.target.value)}
          type="text"
          placeholder="Items..."
          value={item}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
