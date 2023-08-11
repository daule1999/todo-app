import { IUser } from "../types/index"
import axiosInstance, { BLOSSOM_TOKEN_NAME, saveToken } from "./config"

type RegisterUserTypes = IUser

export const registerUser = async ({
  email,
  name,
  password,
}: RegisterUserTypes) => {
  try {
    const data={email,
      password,
      name,}
      console.log("data in registerUser",data)
    const response = await axiosInstance.post("/auth/signup", data)
    return response.data.user
  } catch (error) {
    console.log("error in registerUser", error)
    throw error
  }
}

type LoginUserTypes = Omit<IUser, "name">

export const loginUser = async ({ email, password }: LoginUserTypes) => {
  try {
    const data= {
      email,
      password,
    }
    console.log("data in loginUser",data)
    const response = await axiosInstance.post("/auth/login",data)
    const _token = response.data.token
    axiosInstance.defaults.headers.common["Authorization"] = _token
    saveToken(BLOSSOM_TOKEN_NAME, _token)
    return response.data.user
  } catch (error) {
    console.log("error in loginUser", error)
    throw error
  }
}