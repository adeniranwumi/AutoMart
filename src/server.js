import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

export const test_message = "This is the Automart and this is the current version of the API";

app.get("/", (req, res, next) => {
    res.send({ test_message });
    next();
});

export const server = app.listen(3000, () => {
    console.log("Listening on port ...");
});




