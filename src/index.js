module.exports = [
  /* Base */
  "last 2 major versions",
  "last 10 chrome versions", // Don't drop out support too quickly

  /* Include safe */
  "firefox esr", // Long-Term-Support
  "ios_saf 12.4", // Last version on some iPhones

  /* Ignore unsafe */
  "not dead",
  "not ie 11", // No more security fixes
  "not ie_mob 11", // Almost dead

  /* Ignore marginals */
  "not < 0.1%"
]
