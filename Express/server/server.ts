import express, { Express, Request, Response, ErrorRequestHandler, Router } from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import path from 'path';

import { GlobalErrorType } from './types.js';

import { taskController } from './controllers/taskController.js';

dotenv.config();
declare let process: {
    env: {
        mongoKey: string;
        PORT: number;
    }
}

const port = 3000;
const app: Express = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
mongoose.connect(process.env.mongoKey);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const router: Router = express.Router();
app.use('/api', router);

router.post('/addTask', taskController.addTask, (req: Request, res: Response) => {
  res.status(200).json(res.locals)
})

router.get('/getTasks', taskController.getTasks, (req: Request, res: Response) => {
  res.status(200).json(res.locals)
})

router.put('/editTask/:id', taskController.editTask, (req: Request, res: Response) => {
  res.status(200).json(res.locals)
})
router.put('/completeTask/:id', taskController.completeTask, (req: Request, res: Response) => {
  res.status(200).json(res.locals)
})
router.put('/reopenTask/:id', taskController.reopenTask, (req: Request, res: Response) => {
  res.status(200).json(res.locals)
})
router.delete('/deleteTask/:id', taskController.deleteTask, (req: Request, res: Response) => {
  res.status(200).json(res.locals)
})
app.get('/', (req: Request, res: Response) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

//Catch-all error handler:
app.use((req: Request, res: Response) => res.sendStatus(404));

//Global error handler:
app.use((err: ErrorRequestHandler, req: Request, res: Response) => {
  const defaultErr: GlobalErrorType = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj: GlobalErrorType = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;