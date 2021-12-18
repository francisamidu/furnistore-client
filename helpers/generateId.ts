const { v4 } = require("uuid");
const generateId = (): string => {
  return v4();
};
export default generateId;
