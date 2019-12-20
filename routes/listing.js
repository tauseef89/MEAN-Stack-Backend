const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("All listings");
});

module.exports = router;
