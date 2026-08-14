// const cache = new Map();

// const COOLDOWN = 5 * 60 * 1000;

// module.exports = (req, res, next) => {
//   const email = req.body.email?.trim().toLowerCase();

//   if (!email) {
//     return next();
//   }

//   const lastRequest = cache.get(email);

//   if (lastRequest && Date.now() - lastRequest < COOLDOWN) {
//     return res.status(429).json({
//       success: false,
//       message:
//         "We have already received your enquiry. Please wait 5 minutes before submitting again.",
//     });
//   }

//   cache.set(email, Date.now());

//   next();
// };


const cache = new Map();

const COOLDOWN = 5 * 60 * 1000;

module.exports = (req, res, next) => {
  const email = req.body.email?.trim().toLowerCase();

  if (!email) {
    return next();
  }

  const lastRequest = cache.get(email);

  if (lastRequest && Date.now() - lastRequest < COOLDOWN) {
    return res.status(429).json({
      success: false,
      message:
        "We have already received your enquiry. Please wait 5 minutes before submitting again.",
    });
  }

  // Make cache available to the controller
  req.emailCooldownCache = cache;

  next();
};