const express = require("express");
const userRouter = express.Router();
const storecontrollers = require("../controllers/storecontroller");
userRouter.get("/", storecontrollers.getIndex);
userRouter.get("/home", storecontrollers.getHomes);
userRouter.get("/booking", storecontrollers.getBooking);
userRouter.get("/favourite", storecontrollers.getfav);
userRouter.get("/home/:HomesId", storecontrollers.getdetails);

module.exports = userRouter;
