const { fetchPlaces } = require("../services/yelpService");

exports.getPizzaPlaces = async (req, res) => {
  try {
    const location = await req.query.location
    const places = await fetchPlaces("pizza" , location);
    console.log(places);
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJuicePlaces = async (req, res) => {
  try {
    const location = await req.query.location
    const places = await fetchPlaces("juice", location);
    console.log(places);
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getComboPlaces = async (req, res) => {
  try {
    const location = await req.query.location
    const [pizza, juice] = await Promise.all([
      fetchPlaces("pizza" , location),
      fetchPlaces("juice" , location),
    ]);
    console.log(pizza, juice);
    res.json([...pizza, ...juice]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
