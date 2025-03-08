import React, { useState } from "react";
import axios from "axios";
import './ProductsForm.css'
import {useNavigate} from 'react-router-dom'

const ProductsForm = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [discountprice,setDiscountprice] = useState('')
  const [stock, setStock] = useState('')
  const [description, setDescription] = useState('')
  const [files, setFiles] = useState('')

  axios.defaults.withCredentials= true;

 

  const handleSubmit =  (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('name', name);
    formData.set('category', category);
    formData.set('price', price);
    formData.set('discountprice', discountprice);
    formData.set('stock', stock);
    formData.set('description', description);
    formData.set('file', files?.[0]);

    axios.post("http://localhost:3001/productform", formData)
    .then(user => {console.log(user)
      navigate('/')
    })
    .catch ((err) => 
      console.log(err))
    }
  

 return (
    <div className="form-container">
      <h2>Add Grocery Product</h2>
      <form onSubmit={handleSubmit}   className="form-merge">
        <label>Product Name:</label>
        <input type="text" name="name" placeholder="choose one - rice, pulses, chocolates, personal care things, snacks, note" onChange={(e => setName(e.target.value))} required />

        <label>Category:</label>
        <input type="text" name="category"  onChange={(e => setCategory(e.target.value))} required />

        <label>Price:</label>
        <input type="number" name="price" onChange={(e => setPrice(e.target.value))}required />

        <label>Discount Price:</label>
        <input type="number" name="discountprice" onChange={(e => setDiscountprice(e.target.value))} required />

        <label>Stock Quantity:</label>
        <input type="number" name="stock" onChange={(e => setStock(e.target.value))} required />

        <label>Description:</label>
        <textarea name="description" onChange={(e => setDescription(e.target.value))} required></textarea>

        <label>Upload Image:</label>
        <input type="file" name="files" accept="image/*" onChange={(e => setFiles(e.target.files))} required />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductsForm;
