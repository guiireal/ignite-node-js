import { UpdateUserAvatarDTO } from "../../dtos/IUpdateAvatarDTO";
import { IUseCase } from "../../../../interfaces/IUseCase";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class UpdateUserAvatarUseCase implements IUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ user_id, avatar_file }: UpdateUserAvatarDTO): Promise<void> {
    const user = await this.userRepository.findById(user_id);

    user.avatar = avatar_file;

    await this.userRepository.create(user);
  }
}
