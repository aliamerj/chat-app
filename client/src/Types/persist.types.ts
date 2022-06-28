export interface IAppState {
  authentication?: IAuthenticationState;
  extras: {
    loading: boolean;
  };
}
export interface IAuthenticationState {
  token: string;
  expires: number;
  user?: {
    name: string;
    email: string;
  };
}
