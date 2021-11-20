const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "wijniedb",
        mongodb_password: "weetikniet",
        mongodb_clustername: "cluster0",
        mongodb_database: "dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "wijniedb",
      mongodb_password: "weetikniet",
      mongodb_clustername: "cluster0",
      mongodb_database: "d",
    },
  };
};
