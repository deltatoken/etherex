var bigRat = require('big-rational');

var units = {
  "Uether": bigRat("1000000000000000000000000000000000000000000000000000000"),
  "Vether": bigRat("1000000000000000000000000000000000000000000000000000"),
  "Dether": bigRat("1000000000000000000000000000000000000000000000000"),
  "Nether": bigRat("1000000000000000000000000000000000000000000000"),
  "Yether": bigRat("1000000000000000000000000000000000000000000"),
  "Zether": bigRat("1000000000000000000000000000000000000000"),
  "Eether": bigRat("1000000000000000000000000000000000000"),
  "Pether": bigRat("1000000000000000000000000000000000"),
  "Tether": bigRat("1000000000000000000000000000000"),
  "Gether": bigRat("1000000000000000000000000000"),
  "Mether": bigRat("1000000000000000000000000"),
  "Kether": bigRat("1000000000000000000000"),
   "ether": bigRat("1000000000000000000"),
  "finney": bigRat("1000000000000000"),
   "szabo": bigRat("1000000000000"),
    "Gwei": bigRat("1000000000"),
    "Mwei": bigRat("1000000"),
    "Kwei": bigRat("1000"),
     "wei": bigRat("1")
};

module.exports = units;
