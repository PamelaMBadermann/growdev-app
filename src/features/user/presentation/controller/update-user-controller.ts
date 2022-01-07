import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import { ok, serverError } from "../../../../core/presentation/helpers/http-handler";
import { UserRepository } from "../../infra/repositories/user-repository";

export class UpdateUserController implements Controller {
    constructor(private repository: UserRepository) {}

    async execute(req: Request, res: Response) {
        try {
            const { idade } = req.body;
            const { username } = req.params;

            await this.repository.update(username, {
                idade,
                nome: "nome",
            });

            return ok(res);
            
        } catch(error) {
            return serverError(res, String(error));
        }
    }
}
