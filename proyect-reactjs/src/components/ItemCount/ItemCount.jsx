import React from "react";
import { useState } from "react";

const ItemCount = (stock) => {
  const [count, setCount] = useState(1);

  const addToCart = () => {
    alert(`Se agrego ${count} items al carrito`);
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <button onClick={sumar}> Sumar</button>
      <button onClick={restar}>Restar</button>
      <p>{count}</p>
      <button onClick={addToCart}>Agregar</button>
    </div>
  );
};

export default ItemCount;
