import React from 'react';
import { useState}  from 'react'
import axios from "axios";
// menridirect ke home dan menggukan history
import { useHistory } from 'react-router-dom';
const AddProduct = () => {
  const [title, setTitle ] = useState('');
  const [price, setPrice ] = useState('');
  // variabel untk usehistory
  const history = useHistory();

  // membuat fungsion untuk di save ke backend
  const saveProduct = async (e) => {
    // untuk tidak mereload ketika di save
    e.preventDefault();
    await axios.post('http://localhost:5100/products', {
      title: title,
      price: price
    });
    history.push("/");

  }
  return (
    <div>
        <form onSubmit={ saveProduct }>
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
            <button className="button is-primary">Save</button>
        </div>
        </form>
        { title } - { price }
    </div>
  )
}

export default AddProduct