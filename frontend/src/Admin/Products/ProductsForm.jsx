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
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  axios.defaults.withCredentials= true;

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('discountprice', discountprice);
    formData.append('stock', stock);
    formData.append('description', description);
    formData.append("image", image);


    axios.post(`${process.env.REACT_APP_API_URL}/productform`, formData , {
      headers: {"Content-Type" : "multipart/form-data"}
     })
    .then(user => {console.log(user)
      navigate('/senshopproducts')
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
        <input type="file" accept="image/*" onChange={handleFileChange} required />
        {preview && <img src={preview} alt="Preview" width="20" className="pre-img"/>}

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductsForm;
