import express from 'express';
import User from './src/controllers/User';


const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

export const test_message = "This is Automart and you are seeing the current version of the API";

app.get("/", (req, res, next) => {
    res.send({ test_message });
    next();
});

app.post("/api/v1/users", User.create);
app.get("/api/v1/users", User.getAll);

export const server = app.listen(3000, () => {
    console.log("Listening on port ...");
});

ft-sign-up-API-endpoint-166257625
ft-sign-up-API-endpoint-166257625


