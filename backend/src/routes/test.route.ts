import { Router } from 'express';
import pool from '../config/db';

const router = Router();

router.get('/test-db', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM resources LIMIT 5');
        res.json(rows);
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({ message: 'Database connection failed', error });
    }
});

export default router;
