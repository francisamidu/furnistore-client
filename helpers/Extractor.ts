import {
  MutationDefinition,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query";
import { MutationState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { Product } from "../interfaces";
import generateId from "./generateId";

class Extractor {
  static extractAuthData(
    mutations: MutationState<{
      login: MutationDefinition<
        any,
        BaseQueryFn<
          string | FetchArgs,
          unknown,
          FetchBaseQueryError,
          {},
          FetchBaseQueryMeta
        >,
        never,
        Partial<any>,
        "auth"
      >;
    }>
  ) {
    if (Object.keys(mutations).length) {
      const authDataKey = Object.keys(mutations);
      const data = mutations[authDataKey[0]]?.data;
      return data;
    }
  }
  static extractCategories(products: Product[]) {
    try {
      const tempArray = products
        .map((product: Product) => product?.categories)
        .filter((category: string[]) => !!category)
        .flat(Infinity);
      const tempCategories = Array.from(new Set(tempArray));
      return tempCategories.map((category: any) => ({
        id: generateId(),
        text: category?.toLowerCase(),
      }));
    } catch (error) {
      return [];
    }
  }
  static extractColors(products: Product[]) {
    try {
      const colors = products
        .map((product: Product) => product.colors)
        .flat(Infinity);
      const flatArray: any = Array.from(new Set(colors));
      return [...flatArray];
    } catch (error) {
      return [];
    }
  }
  static extractImage(product: Product) {
    return product.image;
  }
  static extractSizes(products: Product[]) {
    try {
      const sizes = products
        .map((product: Product) => product.sizes)
        .flat(Infinity);
      const flatArray: any = Array.from(new Set(sizes));
      return [...flatArray];
    } catch (error) {
      return [];
    }
  }
}

export default Extractor;
