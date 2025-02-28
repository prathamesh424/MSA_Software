const express = require("express");
const { getPizzaPlaces, getJuicePlaces, getComboPlaces } = require("../controllers/placeController");

const router = express.Router();

router.get("/search/pizza", getPizzaPlaces);
router.get("/search/juice", getJuicePlaces);
router.get("/search/combo", getComboPlaces);

module.exports = router;
