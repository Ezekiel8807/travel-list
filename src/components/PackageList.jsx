import { useState } from "react";

// componemts
import Item from "./Item";

export default function PackageList({
  itemArr,
  onDeleteItem,
  onPacked,
  onClearItemArr,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedList;

  switch (sortBy) {
    case "input":
      sortedList = itemArr;
      break;

    case "description":
      sortedList = itemArr.slice().sort((a, b) => a.item.localeCompare(b.item));
      break;

    case "packed":
      sortedList = itemArr
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;

    default:
      break;
  }

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onPacked={onPacked}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={onClearItemArr}>Clear list</button>
      </div>
    </div>
  );
}
