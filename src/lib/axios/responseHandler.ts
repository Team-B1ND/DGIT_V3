import { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import AuthRepositoryImpl from "../../repositories/auth/AuthRepositoryImpl";
import token from "../token/token";

export const responseHandler = async (error: AxiosError) => {
  if (error.response) {
    const {
      response: { status },
    } = error;

    const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY);
    const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

    if (
      usingAccessToken !== undefined &&
      usingRefreshToken !== undefined &&
      status === 401
    ) {
      try {
        const { data: newAccessToken } = await AuthRepositoryImpl.refresh(
          usingAccessToken
        );
        token.setToken(ACCESS_TOKEN_KEY, newAccessToken.accessToken);
      } catch (error) {}
    }
  }
};
