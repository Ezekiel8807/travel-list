export default function Stats({ itemArr }) {
  if (itemArr.length < 1)
    return (
      <p className="stats">
        <em> Start adding some items to your packing list 🚀</em>
      </p>
    );

  const itemArrL = itemArr.length;
  const itemPacked = itemArr.filter((i) => i.packed).length;
  const packedPercent = Math.round((itemPacked / itemArrL) * 100);

  return (
    <footer className="stats">
      {packedPercent === 100 ? (
        "You got everything! Ready to go✈️"
      ) : (
        <em>
          You have {itemArrL} items on your list and you have packed{" "}
          {itemPacked} ({packedPercent}%)
        </em>
      )}
    </footer>
  );
}
