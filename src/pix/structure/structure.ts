export type INewPixParams = {
  keyPix: string;
  valuePix: string;
  profileId: string;
};

export type INewPixResponse = {
  message: string;
};

export interface INewPixService {
  execute(params: INewPixParams): Promise<INewPixResponse>;
}
