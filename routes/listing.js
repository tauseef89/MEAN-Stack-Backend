const router = require("express").Router();

const Listing = require("../model/Listing");

// Add New listing

router.post("/", async (req, res) => {
  const listing = new Listing({
    title: req.body.title,
    price: req.body.price,
    locality: req.body.locality,
    details: req.body.details
  });

  try {
    const savedListing = await listing.save();
    res.send(savedListing);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get All listings

router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (error) {
    res.json({ message: error });
  }
});

// Single listing
router.get("/:listingId", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.listingId);
    res.json(listing);
  } catch (error) {
    res.json({ message: error });
  }
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
