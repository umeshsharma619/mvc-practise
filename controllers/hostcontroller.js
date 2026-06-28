const Home = require("../models/homemodels");

exports.getAddhomes = (req, res, next) => {
  res.render("host/addhome", { pagetitle: "addhome" });
};

exports.postAddhome = (req, res, next) => {
  const { housename, price, location, rating, photoUrl } = req.body;
  const home = new Home(housename, price, rating, location, photoUrl);
  home.save();

  res.render("host/homeadded", { pagetitle: "homeadded" });
};

exports.gethosthomes = (req, res, next) => {
  Home.fetchAll((rgisterhomes) =>
    res.render("host/host_home", {
      rgisterhomes: rgisterhomes,
      pagetitle: "host_home",
    }),
  );
};
