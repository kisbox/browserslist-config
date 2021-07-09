module.exports = [
  /* Base */
  "last 2 versions",

  /* Include safe */
  "firefox esr", // Long-Term-Support
  "ios_saf >= 12", // Still active

  /* Ignore unsafe */
  "not dead",
  "not ie 11", // No more security fixes
  "not ie_mob 11", // Almost dead

  /* Ignore marginals */
  "not < 0.1%"
]
