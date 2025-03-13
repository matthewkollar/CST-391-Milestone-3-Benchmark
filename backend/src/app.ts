import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import resourceRoutes from './routes/resource.route'; 
import testRoute from './routes/test.route';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Apply middleware before routes
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use('/api/resources', resourceRoutes); 
app.use('/api/test', testRoute);

app.get('/', (req, res) => {
    res.send('<h1>FaithTrack API is Running</h1>');
});

export default app;
