import { IUserRepository } from "./../../repositories/IUserRepository";
import { inject } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUseCase } from "../../../../interfaces/IUseCase";

export class CreateUserUsecase implements IUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driverLicense,
  }: ICreateUserDTO): Promise<void> {
    await this.userRepository.create({
      name,
      username,
      email,
      password,
      driverLicense,
    });
  }
}
