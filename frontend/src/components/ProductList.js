import React from 'react';
import {useState, useEffect} from 'react'
// mengimort axios
import axios from "axios";
import { Link } from 'react-router-dom';

const ProductList = () => {
    // mendeklarasikan state
    const [products, setProduct] = useState([]);
    
    // fungsion yang memanggil perintah fetching

    useEffect(() => {
        getProducts();
    }, []);


    // metod untuk memfetching data dari Api dan deklarasikan import axio di atas
    const getProducts = async () => {
        const response = await axios.get('http://localhost:5100/products');
        // update state 
        setProduct(response.data);
    }

    // membuat fungsion delete product
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5100/products/${id}`);
        // memanggil metod getproduk bertujuan untuk melihat perubahannya
        getProducts();
    }


  return (
    <div>
        <Link to="/add" className="button is-primary mt-2">Add New</Link>
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* melooping data tablenya menggunakan metod map*/}
                { products.map((product, index) => (
                    <tr key={ product.id }>
                        <td>{ index + 1 }</td>
                        <td>{ product.title }</td>
                        <td>{ product.price }</td>
                        <td>
                            <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>    
                            <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>

                ))}
                
            </tbody>
        </table>

    </div>
  )
}

export default ProductList