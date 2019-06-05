import express from 'express';
import { message } from './helpers/constants';
import user from './routes/user';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

user(app);

app.get('*', (req, res, next) => {
  res.send({ ...req.query, message });
  next();
});

const server = app.listen(3000, () => {
  console.log('Listening on port ...');
});

export default server;
