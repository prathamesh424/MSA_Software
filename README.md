# Pizza & Juice Finder API

## Overview

This is a backend service that provides information about nearby pizza and juice shops using the Yelp API.

## Tech Stack

- **Language**: Node.js
- **Frameworks**: Express.js, Apollo Server (GraphQL)
- **Data Fetching**: Axios
- **Testing**: Jest, Supertest
- **Logging**: Winston
- **Documentation**: Swagger

## API Endpoints

### REST Endpoints

- `GET /api/search/pizza?location={city}`: Returns a list of pizza places in the specified location.
- `GET /api/search/juice?location={city}`: Returns a list of juice places in the specified location.
- `GET /api/search/combo?location={city}`: Returns a list of places offering both pizza and juice in the specified location.

### GraphQL Endpoints

```
type Query {
  searchPizza(location: String!): [Place]
  searchJuice(location: String!): [Place]
  searchCombo(location: String!): [Place]
}

type Place {
  name: String
  address: String
  rating: Float
  phone: String
}
```

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add your Yelp API key:

   ```env
   YELP_API_KEY=your_api_key_here
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Run tests:

   ```bash
   npm test
   ```

## Testing

We use Jest and Supertest for testing. Example test cases:

```javascript
it("should return pizza places", async () => {
  const res = await request(app).get("/api/search/pizza?location=New%20York");
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

it("should return juice places", async () => {
  const res = await request(app).get("/api/search/juice?location=New%20York");
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

it("should return combo places", async () => {
  const res = await request(app).get("/api/search/combo?location=New%20York");
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});
```

