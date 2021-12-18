import User from "./User";
export default interface ApiResponse {
  isFetching: boolean;
  error: Error;
  data: Partial<User>;
}
