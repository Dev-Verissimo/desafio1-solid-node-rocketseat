import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

//UseCase -> Faz validações, nesse caso valida se o email já existe

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  private usersRepository: IUsersRepository
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ email, name }: IRequest): User {
    const userSelected = this.usersRepository.findByEmail(email);
    if (userSelected) {
      throw new Error("Mensagem do erro");
    }
    this.usersRepository.create({ name, email });
    console.log(this.usersRepository.findByEmail(email))
    return this.usersRepository.findByEmail(email);
  }
}

export { CreateUserUseCase };
