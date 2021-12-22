import formatCurrency from "./formatCurrency";
import Extractor from "./Extractor";
import generateId from "./generateId";

export { formatCurrency, generateId };

export const { extractCategories, extractColors, extractImage, extractSizes } =
  Extractor;
