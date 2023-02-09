export type ILoginParams = {
  email: string;
  password: string;
};
export type ILoginResponse = {
  token: string;
  id: string;
};
export interface ILoginService {
  execute(params: ILoginParams): Promise<ILoginResponse>;
}
