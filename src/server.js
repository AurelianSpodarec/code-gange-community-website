import express from 'express';

const app = express();

app.use(express.static('src'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});