import * as dotenv from 'dotenv';
dotenv.config(); // Load environment variables first

import * as mysql from 'mysql2/promise';

// Debugging: Check if environment variables are loading
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    port: Number(process.env.DB_PORT) || 8889,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
