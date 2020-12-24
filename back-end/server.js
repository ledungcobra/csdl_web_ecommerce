const express =require('express');
const dotenv =require('dotenv');
dotenv.config();
const db = require('./config/db.js');
const {notFound, errorHandler} =require("./middleware/errorMiddleware.js");
const colors =require('colors');
const productRoutes =require("./routes/productRoutes.js");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended : true}));

const PORT = process.env.PORT || 5000;


app.use('/api',productRoutes);


app.use(notFound)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
})

