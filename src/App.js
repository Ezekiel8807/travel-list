import { useState } from "react";

// components
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import PackageList from "./components/PackageList";

export default function App() {
  const [itemArr, setItemArr] = useState([]);

  const addNewItem = (newItem) => {
    setItemArr((itemArr) => [...itemArr, newItem]);
  };

  const deleteItem = (itemId) => {
    const filterArr = itemArr.filter((e) => e.id !== itemId);
    setItemArr((itemArr) => [...filterArr]);
  };

  const packedItem = (itemId) => {
    setItemArr((itemArr) =>
      itemArr.map((i) => (i.id === itemId ? { ...i, packed: !i.packed } : i))
    );
  };

  const clearItemArr = () => {
    if (itemArr.length < 1) return;

    const confirm = window.confirm(
      "Are you sure, you want to clear your items list?"
    );

    if (confirm) setItemArr([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddNewItem={addNewItem} />
      <PackageList
        itemArr={itemArr}
        onDeleteItem={deleteItem}
        onPacked={packedItem}
        onClearItemArr={clearItemArr}
      />
      <Stats itemArr={itemArr} />
    </div>
  );
}
