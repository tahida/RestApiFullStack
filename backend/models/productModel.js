// mengimport sequelize
import { Sequelize } from "sequelize";

// mengimport koneksi ke database
import db from "../config/database.js";

// memanggil datatype
const { DataTypes } = Sequelize;

// membuat skema produckt
const Product = db.define('products', {
    title:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    }
}, {
    freezeTableName: true
});


export default Product;