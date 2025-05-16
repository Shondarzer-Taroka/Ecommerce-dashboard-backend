 
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './utils/error-handler';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

export default app;