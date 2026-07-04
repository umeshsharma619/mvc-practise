const Home = require("../models/homemodels");

exports.getHomes = (req, res, next) => {
  Home.fetchAll((rgisterhomes) =>
    res.render("store/home", { rgisterhomes: rgisterhomes, pagetitle: "home" }),
  );
};
exports.getIndex = (req, res, next) => {
  Home.fetchAll((rgisterhomes) =>
    res.render("store/home", { rgisterhomes: rgisterhomes, pagetitle: "home" }),
  );
};

exports.getBooking = (req, res, next) => {
  res.render("store/booking", { pagetitle: "booking_page" });
};

exports.getfav = (req, res, next) => {
  Home.fetchAll((rgisterhomes) =>
    res.render("store/favourite", {
      rgisterhomes: rgisterhomes,
      pagetitle: "favourite",
    }),
  );
};

exports.getdetails = (req, res, next) => {
  const HomesId = req.params.HomesId;
  console.log("at home page id", HomesId);
  res.render("store/details", { pagetitle: "details_page" });
};
