import React from 'react';
import { useState, useEffect}  from 'react'
import axios from "axios";
// menridirect ke home dan menggukan history
import { useHistory, useParams } from 'react-router-dom';
const EditProduct = () => {
  const [title, setTitle ] = useState('');
  const [price, setPrice ] = useState('');
  const {id} = useParams();
  // variabel untk usehistory
  const history = useHistory();

  // membuat fungsion untuk di save ke backend
  const UpdateProduct = async (e) => {
    // untuk tidak mereload ketika di save
    e.preventDefault();
    await axios.patch(`http://localhost:5100/products/${id}`, {
      title: title,
      price: price
    });
    history.push("/");

  }

//   memanggil fungsi getproduct
useEffect(() => {
    getProductById();
}, [])

// fungsion untuk mengambil produk
    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5100/products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }
  return (
    <div>
        <form onSubmit={ UpdateProduct }>
        <div className="field">
            <label className="label">Title</label>
            <input 
            class="input" 
            type="text" 
            placeholder="Title"
            value={ title }
            onChange={ (e) => setTitle(e.target.value)}
            />
        </div>

        <div className="field">
            <label className="label">Price</label>
            <input 
            class="input" 
            type="text" 
            placeholder="Price"
            value={ price }
            onChange={ (e) => setPrice(e.target.value)}
            />
        </div>

        <div className="field">
            <button className="button is-primary">Update</button>
        </div>
        </form>
        { title } - { price }
    </div>
  )
}

export default EditProduct