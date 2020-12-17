import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import productRouter from './routes/productRoutes.js';
import {notFound,errorHandler} from "./middleware/errorMiddleware.js";
import userRouter from './routes/userRoutes.js';
import colors from 'colors';

dotenv.config();

connectDB();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello');
});
app.use('/api/products',productRouter);
app.use('/api/users',userRouter);

app.use(notFound)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold );
})

