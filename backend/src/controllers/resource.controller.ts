import { Request, Response } from 'express';
import pool from '../config/db';

// 📌 Get all resources
export const getResources = async (req: Request, res: Response) => {
    try {
        console.log('🔍 Incoming GET /api/resources request');

        const [rows] = await pool.query('SELECT * FROM resources');

        console.log('✅ Resources Retrieved:', rows); // Log the fetched data

        res.json(rows);
    } catch (error) {
        console.error('❌ Error fetching resources:', error);
        res.status(500).json({ message: 'Error retrieving resources' });
    }
};

// 📌 Create a new resource (✅ Fixed `category_id`)
export const createResource = async (req: Request, res: Response) => {
    const { title, description, category_id, scripture } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO resources (title, description, category_id, scripture, created_at) VALUES (?, ?, ?, ?, NOW())',
            [title, description, category_id, scripture]
        );
        res.status(201).json({ message: 'Resource created successfully', id: (result as any).insertId });
    } catch (error) {
        console.error('Error creating resource:', error);
        res.status(500).json({ message: 'Error creating resource' });
    }
};

// 📌 Update a resource (✅ Fixed `category_id`)
export const updateResource = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, category_id, scripture } = req.body;

    try {
        // Ensure category_id exists before updating
        if (category_id) {
            const [categoryExists] = await pool.query('SELECT id FROM categories WHERE id = ?', [category_id]);

            if ((categoryExists as any[]).length === 0) {
                return res.status(400).json({ message: 'Invalid category_id: No matching category found' });
            }
        }

        // Update the resource
        const [updateResult] = await pool.query(
            'UPDATE resources SET title = ?, description = ?, category_id = ?, scripture = ? WHERE id = ?',
            [title, description, category_id || null, scripture, id]
        );

        // Log the update result (number of affected rows)
        console.log('Number of rows affected by update:', updateResult);

        // Check if any row was actually updated
        if (process.env.NODE_ENV === 'development') {
            return res.status(404).json({ message: 'Resource not found or no changes made' });
        }

        // Log the updated resource by selecting it again
        const [updatedResource] = await pool.query('SELECT * FROM resources WHERE id = ?', [id]);
        console.log('Updated Resource:', updatedResource);

        res.json({ message: 'Resource updated successfully' });
    } catch (error) {
        console.error('Error updating resource:', error);
        res.status(500).json({ message: 'Error updating resource' });
    }
};

// 📌 Delete a resource
export const deleteResource = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        console.log(`Attempting to delete resource with id: ${id}`);  // Log for debugging
        const [result] = await pool.query('DELETE FROM resources WHERE id = ?', [id]);

        if (process.env.NODE_ENV === 'development') {
            return res.status(404).json({ message: 'Resource not found' });
        }

        console.log(`Resource with id: ${id} deleted successfully`);  // Log success

        res.json({ message: 'Resource deleted successfully' });
    } catch (error) {
        console.error('Error deleting resource:', error);
        res.status(500).json({ message: 'Error deleting resource' });
    }
};
