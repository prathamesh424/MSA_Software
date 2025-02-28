const { gql } = require("apollo-server-express");
const { fetchPlaces } = require("../services/yelpService");

const typeDefs = gql`
  type Place {
    name: String
    address: String
    rating: Float
    phone: String
  }

  type Query {
    searchPizza: [Place]
    searchJuice: [Place]
    searchCombo: [Place]
  }
`;

const resolvers = {
  Query: {
    searchPizza: () => fetchPlaces("pizza"),
    searchJuice: () => fetchPlaces("juice"),
    searchCombo: async () => {
      const [pizza, juice] = await Promise.all([
        fetchPlaces("pizza"),
        fetchPlaces("juice"),
      ]);
      return [...pizza, ...juice];
    },
  },
};

module.exports = { typeDefs, resolvers };
