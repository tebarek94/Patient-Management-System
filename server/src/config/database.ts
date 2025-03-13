import mysql from "mysql2";
import dotenv from "dotenv"
dotenv.config();
const dbCon = mysql.createConnection({
    database: process.env.database,
    password: process.env.password,
    user: process.env.user,
    host: process.env.host
});
export default dbCon;