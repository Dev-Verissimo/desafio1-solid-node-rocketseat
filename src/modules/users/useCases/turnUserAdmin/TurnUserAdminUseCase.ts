import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

/*
    Para que esse teste passe, é necessário que o método 
    execute do arquivo 
    src/modules/users/useCases/turnUserAdmin/TurnUserAdminUseCase.ts 
    receba o id de um usuário, chame o método do repositório que transforma 
    esse usuário em administrador e retorne o usuário após a alteração.
 */

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id)
    if (!user) {
        throw new Error("Mensagem do erro");
    }
    this.usersRepository.turnAdmin(user)
    return this.usersRepository.findById(user_id)
  }
}

export { TurnUserAdminUseCase };
