module.exports = [
  /* Base */
  "last 2 versions",

  /* Include safe */
  "edge 18", // Still active
  "firefox esr", // Long-Term-Support
  "ios_saf >= 12", // Still active

  /* Ignore unsafe */
  "not dead",
  "not ie 11", // No more security fixes
  "not ie_mob 11", // Almost dead
  "not op_mob 46", // Outdated, now based on Chrome

  /* Ignore marginals */
  "not < 0.1%"
]
