import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(request: Request, response: Response): Response {
      const { name, email } = request.body
        try {
            this.createUserUseCase.execute({name, email})
            return response.status(201).json({name, email})    
        } catch (error) {
            return response.status(404).json({ error: "mensagem do erro" })
        }
    }
}

export { CreateUserController };
