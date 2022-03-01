import Extractor from "./Extractor";
import Formatter from "./Formatter";
import Generator from "./Generator";
import Validator from "./Validator";
import millify from "./millify";
import Serializer from "./Serializer";

export const { generateId, generateRandomNumber } = Generator;

export const {
  formatCurrency,
  reverseFormat,
  formatDate,
  formatDateAndTime,
  formatNumber,
  formatRelativeDate,
} = Formatter;

export const {
  extractAuthData,
  extractCategories,
  extractColors,
  extractImage,
  extractSizes,
} = Extractor;

export const {
  serializeOrder,
  serializeOrders,
  serializeProduct,
  serializeProducts,
  serializeUser,
  serializeUsers,
} = Serializer;
export const { validateEmail, validatePassword } = Validator;
export { millify };
