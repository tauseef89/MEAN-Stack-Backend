const express = require("express");
const app = express();

// Import routes
const listinRoutes = require("./routes/listing");

// route Middlewares
app.use("/api/listings", listinRoutes);

app.listen(4000, () => console.log("server up and runing on port 4000!"));
