const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const path = require("path");
const Rootdir = require("./utils/pathutils");
const { errormsz } = require("./controllers/errrorcontroller");
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(Rootdir, "public")));
app.use(userRouter);
app.use(hostRouter);

app.use(errormsz);
const PORT = 3014;
app.listen(PORT, () => {
  console.log(`this server is running on http://localhost:${PORT}`);
});
