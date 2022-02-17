import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
// memanggil fungsion cors bertujuan agar bisa di pakai pada frontend
import cors from "cors";

// memanggil fungsion express
const app = express();


try {
    await db.authenticate();
    console.log('Database Connected');
} catch (error) {
    console.error('Connection Error:', error);
}

// Mendeklarasikan cors
app.use(cors());
// mendeklarasikan middleware createproduct
app.use(express.json());
//  mendeklarasikan middleware productroutes di atas
app.use('/products', productRoutes);

app.listen(5100, () => console.log('Server Berjalan Pada Port 5100')); 