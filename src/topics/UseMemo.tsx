import { useMemo, useState } from "react";
import { initialItems } from "../utils/helpers";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const isSelected = useMemo(() => {
    return items.find((item) => item.isSelected);
  }, [items]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Selected Item: {isSelected?.id}</h2>
      <button
        className="px-8 py-3 bg-emerald-500 rounded-lg"
        onClick={() => setCount(count + 1)}
      >
        {" "}
        increament
      </button>
    </div>
  );
};

export default UseMemo;
