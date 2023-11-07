import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express, {Request, Response} from 'express';
import { AppRouter } from './appRouter';
import './controllers/LoginController';
import './controllers/RootControllers';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['bjjdbfc'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('first')
})