const express = require("express");
const app = express();

// Import Routes
const UserRoute = require("./routes/user");

// Add Routes to Express Middleware
app.use("/user", UserRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));