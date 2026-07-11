const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests without an Origin header
    // (Postman, mobile apps, server-to-server requests)
    if (!origin) {
      return callback(null, true);
    }

    // Allowed frontend URLs
    const allowedOrigins = [
      "http://localhost:5500",
      "http://127.0.0.1:5500",
      process.env.FRONTEND_URL,
    ];

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(
        new Error("CORS policy does not allow access from this origin."),
      );
    }
  },

  credentials: true,

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = corsOptions;
