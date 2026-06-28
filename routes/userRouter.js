const express = require("express");
const userRouter = express.Router();
const storecontrollers = require("../controllers/storecontroller");
userRouter.get("/", storecontrollers.getHomes);
userRouter.get("/booking", storecontrollers.getBooking);
userRouter.get("/favourite", storecontrollers.getfav);

module.exports = userRouter;
