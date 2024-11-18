export default function Item({ item, onDeleteItem, onPacked }) {
  return (
    <li>
      <input
        onChange={() => onPacked(item.id)}
        type="checkbox"
        value={item.packed}
      />
      <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
        {item.quantity} {item.item}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
