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
  Home.findById(HomesId, (home) => {
    if (!home) {
      console.log("home not found");
      res.redirect("/home");
    } else {
      res.render("store/details", { pagetitle: "detail_page", homes: home });
    }
  });
};
exports.addtofav = (req, res, next) => {
  console.log("came add to fav", req.body.id);
  res.redirect("/favourite");
};
