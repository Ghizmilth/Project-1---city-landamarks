function index(req, res) {
  res.json({
    message: "Welcome to Wander Around!",
    documentation: "https://github.com/Ghizmilth/Project-1---city-landamarks",
    base_url: "localhost:3000",
    endpoints: [
      {
        method: "GET",
        path: "/api",
        description: "Describes available endpoints"
      }
    ]

  });
}

module.exports = {
  index: index
}
