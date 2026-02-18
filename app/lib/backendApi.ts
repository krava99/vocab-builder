import axios from "axios";

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

export type User = {
  _id: string;
  email: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export const backendApi = axios.create({
  baseURL: "https://vocab-builder-backend.p.goit.global/api",
});

export const registerUser = async (data: RegisterRequest) => {
  const res = await backendApi.post<User>("/users/signup", data);
  return res.data;
};

export const loginUser = async (data: LoginRequest) => {
  const res = await backendApi.post<User>("/users/signin", data);
  return res.data;
};
