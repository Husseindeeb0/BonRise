export interface AuthResponse {
  _id: string;
  username: string;
  email: string;
  role: string;
  message: string;
}

export interface ApiResponse<T = any> {
  state: "SUCCESS" | "ERROR";
  message: string;
  data?: T;
}
