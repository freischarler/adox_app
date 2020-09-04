import mysql from 'mysql';
import keys from './keys'

//const pool = mysql.createPool(keys.database_origin);
const pool = mysql.createPool(keys.database_origin);

pool.getConnection((err,conection)=>{
    if(err) throw err;
    conection.release();
    console.log('DB is connected');
})

export default pool;