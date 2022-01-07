import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import { badRequest, ok, serverError } from "../../../../core/presentation/helpers/http-handler";
import { UserRepository } from "../../infra/repositories/user-repository";

export class CreateUserController implements Controller {
    constructor(private repository: UserRepository) {}

    async execute(req: Request, res: Response) {
        try {
            const { nome, username, cpf, idade } = req.body;

            if(!username) {
                return badRequest(res, "username not provided");
            }

            if(!cpf) {
                return badRequest(res, "cpf not provided");
            }

            await this.repository.create({
                nome, username, cpf, idade
            });

            return ok(res);
            
        } catch(error) {
            return serverError(res, String(error));
        }
    }
}
