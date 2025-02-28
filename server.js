const app = require("./app");

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`🚀 GraphQL running at http://localhost:${PORT}/graphql`);
});

module.exports = server; 
