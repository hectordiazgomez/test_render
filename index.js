const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    console.log("Hola amigos");
    res.send("Hola amigos");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});