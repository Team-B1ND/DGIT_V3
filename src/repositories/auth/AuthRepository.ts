import { customAxios } from "../../lib/axios/customAxios";
import { TokenResponse } from "../../types/token/Token.type";

export interface AuthRepository {
  login({ code }: LoginParam): Promise<TokenResponse>;
  refresh(accessToken: string): Promise<{ data: { accessToken: string } }>;
}

export interface LoginParam {
  code: string;
}
