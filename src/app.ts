 
// import express from 'express';
// import cors from 'cors';
// import routes from './routes';
// import { errorHandler } from './utils/error-handler';

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api', routes);

// // Error handling
// app.use(errorHandler);

// export default app;












import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';
import { handleError } from './utils/error-handler';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(handleError);

export default app;