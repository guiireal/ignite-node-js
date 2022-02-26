export interface ICreateUserDTO {
  id?: string;
  name: string;
  password: string;
  email: string;
  driverLicense: string;
  avatar?: string;
}
