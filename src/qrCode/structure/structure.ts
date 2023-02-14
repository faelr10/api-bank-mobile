export type IPaymentQrCodeResponse = {
  message: string;
};

export type IPaymentQrCodeParams = {
  idUserQrCode: string;
  idUserLogged: string;
  value: string;
};

export interface IPaymentQrCode {
  execute(params: IPaymentQrCodeParams): Promise<IPaymentQrCodeResponse>;
}
