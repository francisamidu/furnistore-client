import { authApi } from "./authApi";
import { cartApi } from "./cartApi";
import { imageUploadApi } from "./imageUploadApi";
import { ordersApi } from "./ordersApi";
import { productsApi } from "./productsApi";
import { salesApi } from "./salesApi";
import { usersApi } from "./usersApi";

export {
  authApi,
  cartApi,
  imageUploadApi,
  ordersApi,
  productsApi,
  salesApi,
  usersApi,
};

export const { useLoginMutation, useLogoutMutation, useSignupMutation } =
  authApi;
export const {
  useLazyCreateCartQuery,
  useLazyDeleteCartQuery,
  useGetCartQuery,
  useGetCartsQuery,
  useLazyUpdateCartQuery,
} = cartApi;
export const { useUploadImageMutation } = imageUploadApi;
export const {
  useLazyCancelOrderQuery,
  useLazyCreateOrderQuery,
  useLazyDeleteOrderQuery,
  useGetOrderByUserQuery,
  useGetOrderQuery,
  useGetOrderStatsQuery,
  useGetOrdersByUserQuery,
  useGetOrdersQuery,
  useLazyUpdateOrderQuery,
} = ordersApi;
export const {
  useLazyCreateProductQuery,
  useLazyDeleteProductsQuery,
  useGetNewProductsQuery,
  useGetProductQuery,
  useGetProductStatsQuery,
  useGetProductsByCategoriesQuery,
  useGetProductsQuery,
  useLazyUpdateProductQuery,
} = productsApi;
export const { useGetSalesQuery } = salesApi;
export const {
  useLazyCreateUserQuery,
  useLazyDeleteUserQuery,
  useGetUserQuery,
  useGetUserStatsQuery,
  useGetUsersQuery,
  useLazyUpdateUserQuery,
} = usersApi;
