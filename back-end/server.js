const express =require('express');
const dotenv =require('dotenv');
dotenv.config();
const db = require('./config/db.js');
const {notFound, errorHandler} =require("./middleware/errorMiddleware.js");
const colors =require('colors');
const productRoutes =require("./routes/productRoutes.js");
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes');
const cartRouters=require('./routes/cartRouter');
const typeRouters = require('./routes/typeRouters')
const checkoutRouters = require('./routes/checkoutRouter')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const PORT = process.env.PORT || 5000;


app.use('/api/products',productRoutes);
app.use('/api/users/',userRoutes);
app.use('/api/cart',cartRouters);
app.use('/api/types', typeRouters);
app.use('/api/checkout',checkoutRouters);
app.use(notFound)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
})

