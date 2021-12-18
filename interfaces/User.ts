import AuthRequest from "./AuthRequest";

export default interface User extends AuthRequest {
  message: string;
  success: boolean;
  user: {
    _id: string;
    isAdmin: boolean;
    isVerified: boolean;
  };
}
