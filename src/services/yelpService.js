const axios = require("axios");
require("dotenv").config();

const YELP_API_URL = "https://api.yelp.com/v3/businesses/search";
const API_KEY = process.env.YELP_API_KEY;
const HEADERS = { Authorization: `Bearer ${API_KEY}` };

async function fetchPlaces(term ,  location) {
  try {
    const { data } = await axios.get(YELP_API_URL, {
      headers: HEADERS,
      params: { term, location: location, limit: 10 },
    });
    return data.businesses.map((b) => ({
      name: b.name,
      address: b.location.address1,
      rating: b.rating,
      phone: b.display_phone,
    }));
  } catch (error) {
    console.error(`Error fetching ${term}:`, error.message);
    throw new Error("Failed to fetch data from Yelp API");
  }
}

module.exports = { fetchPlaces };
