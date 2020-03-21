const router = require("express").Router();

router.route("/").get((req, res) => {
  console.log("hello");
});

module.exports = router;
