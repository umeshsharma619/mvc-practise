const express = require("express");
const hostRouter = express.Router();
const hostcontrollers = require("../controllers/hostcontroller");

hostRouter.get("/addHome", hostcontrollers.getAddhomes);
hostRouter.use(express.urlencoded());
hostRouter.post("/addHome", hostcontrollers.postAddhome);
hostRouter.get("/host_home", hostcontrollers.gethosthomes);

exports.hostRouter = hostRouter;
