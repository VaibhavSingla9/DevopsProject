const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("DevOps application is running successfully!!");
});

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
