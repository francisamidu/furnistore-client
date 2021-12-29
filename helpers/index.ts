import Extractor from "./Extractor";
import generateId from "./generateId";
import Formatter from "./Formatter";
import Validator from "./Validator";

export { generateId };

export const {
  formatCurrency,
  reverseFormat,
  formatDate,
  formatDateAndTime,
  formatRelativeDate,
} = Formatter;

export const {
  extractAuthData,
  extractCategories,
  extractColors,
  extractImage,
  extractSizes,
} = Extractor;
export const { validateEmail, validatePassword } = Validator;
