import express, { Express, Request, Response } from 'express';
import cors from 'cors';


export default function App(): Express {
  const app = express();

  const corsOptions = {
    origin: '*',
    credentials: true,
  };
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/', (_: Request, res: Response) => {
    res.send('Project Express + TypeScript Server');
  });


  return app;
}