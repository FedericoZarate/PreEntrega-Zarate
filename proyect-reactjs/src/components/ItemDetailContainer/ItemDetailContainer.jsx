import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState("");

  const { id } = useParams;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json();
        setProduct(data.find((p) => p.id === id));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  console.log(product);

  return (
    <div>
      {product == undefined ? <Spinner /> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
