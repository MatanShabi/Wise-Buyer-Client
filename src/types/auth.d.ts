export interface IUser {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    refreshToken: string;
};

export type LoginData = {
    email: string;
    password: string
}  

export type SignupData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }