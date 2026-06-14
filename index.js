import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'; 

dotenv.config();
connectDB();

const app = express();
const corsOptions = {
  origin: [
    "https://lucky-cart-fe.vercel.app", 
    "http://localhost:5173"             
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/products', productRoutes);
app.get('/', (req, res) => {
  res.send('LuckyCart API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running in production mode on port ${PORT}`);
});