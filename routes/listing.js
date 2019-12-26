const router = require("express").Router();

// Add New listing

router.post("/", (req, res) => {
  res.send("Add New listing");
});

// Get All listings

router.get("/", (req, res) => {
  res.send("All listings");
});

// Single listing
router.get("/:listingId", (req, res) => {
  res.send("Single listing");
});

// Update listing
router.put("/:listingId", (req, res) => {
  res.send("Update listing");
});

// Delete listing
router.delete("/:listingId", (req, res) => {
  res.send("Delete listing");
});

module.exports = router;
