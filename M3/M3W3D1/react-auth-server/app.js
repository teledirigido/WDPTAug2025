require("dotenv/config");
require("./db");
const express = require("express");

const app = express();

require("./config")(app);

// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const projectRouter = require("./routes/project.routes");
app.use("/api", projectRouter);

const taskRouter = require("./routes/task.routes");
app.use("/api", taskRouter);

const authRouter = require('./routes/auth.routes');
app.use('/auth', authRouter);

require("./error-handling")(app);

module.exports = app;
