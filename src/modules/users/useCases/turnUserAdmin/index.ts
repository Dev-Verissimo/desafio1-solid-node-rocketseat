import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";
import { TurnUserAdminController } from "./TurnUserAdminController";

const usersRepository = UsersRepository.getInstance();
const turnUserAdminUseCase = new TurnUserAdminUseCase(usersRepository);
const turnUserAdminController = new TurnUserAdminController(
  turnUserAdminUseCase
);

export { turnUserAdminController };
