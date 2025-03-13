import { Router } from 'express';
import { getResources, createResource, updateResource, deleteResource } from '../controllers/resource.controller';

const router = Router();

// Get all resources
router.get('/', getResources);

// Create a new resource
router.post('/', createResource);

// Update an existing resource
router.put('/:id', updateResource);

// Delete a resource
router.delete('/:id', deleteResource);

export default router;
