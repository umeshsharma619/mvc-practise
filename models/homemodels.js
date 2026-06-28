const fs = require("fs");
const path = require("path");
const Rootdir = require("../utils/pathutils");
module.exports = class Home {
  constructor(housename, price, location, rating, photoUrl) {
    this.housename = housename;
    this.location = location;
    this.price = price;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }
  save() {
    Home.fetchAll((rgisterhomes) => {
      rgisterhomes.push(this);
      const filepath = path.join(Rootdir, "data", "houses.json");
      fs.writeFile(filepath, JSON.stringify(rgisterhomes), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    const filepath = path.join(Rootdir, "data", "houses.json");
    fs.readFile(filepath, (err, data) => {
      console.log("data come", err);
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
