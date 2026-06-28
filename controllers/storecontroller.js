const Home = require("../models/homemodels");

exports.getHomes = (req, res, next) => {
  Home.fetchAll((rgisterhomes) =>
    res.render("store/home", { rgisterhomes: rgisterhomes, pagetitle: "home" }),
  );
};

exports.getBooking = (req, res, next) => {
  res.render("store/booking", { pagetitle: "booking_page" });
};

exports.getfav = (req, res, next) => {
  Home.fetchAll((rgisterhomes) =>
    res.render("store/favourite", { rgisterhomes: rgisterhomes, pagetitle: "favourite" }),
  );
};