import { ResponseBalance, ResponseUser } from "../../../schemas";

export interface ErrorMessage {
  message: string;
}

interface AuthLoginResponse {
  token: string;
  data: ResponseUser;
}

interface JWTResponse {
  validate: boolean;
  user: {
    id: string;
    first_name: string;
    email: string;
  };
}

export type BodyResponse =
  | ErrorMessage
  | ResponseUser
  | ResponseBalance
  | ResponseBalance[]
  | AuthLoginResponse
  | JWTResponse;

export interface ControllerResponse {
  status: number;
  body: BodyResponse;
}
