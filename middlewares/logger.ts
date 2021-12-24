const { createLogger } = require("redux-logger");
const logger = createLogger({
  duration: true,
  timestamp: true,
});
export default logger;
