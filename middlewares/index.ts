import { cartMiddleware } from "../app/cart.slice";
import logger from "./logger";

export default [cartMiddleware, logger];
