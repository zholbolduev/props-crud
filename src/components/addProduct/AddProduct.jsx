import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ createProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function handleAddProduct() {
    if (!title || !price || !descr || !image) {
      alert("fucking write inputs");
      return;
    }

    let newProduct = {
      title,
      price,
      descr,
      image,
    };

    createProduct(newProduct);

    setTitle("");
    setPrice("");
    setDescr("");
    setImage("");

    navigate("/");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="desc"
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
      />
      <input
        type="text"
        placeholder="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
