import express from 'express';
import { message, userSignUpUrl } from './helpers/constants';
import user from './routes/user';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

user(app);

app.get("*", (req, res, next) => {
    res.send({ ...req.query, message });
    next();
});

export const server = app.listen(3000, () => {
    console.log("Listening on port ...");
});