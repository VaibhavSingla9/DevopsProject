const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("DevOps application is running successfully!!. Welcome to the Devops 🚀.");
});

app.get("/health", (req, res) => {
   res.json({ status: "healthy", version: "1.0" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
