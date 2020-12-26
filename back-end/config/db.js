const sql =  require('mssql');
const result = {};
const dotenv =require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        result.sql = await sql.connect(process.env.SQL_CONNECT_STRING);
        console.log('DB connect success')
    } catch (err) {
        console.log('DB connect fail ' + err)
    }
}
connectDB();

module.exports = result;
