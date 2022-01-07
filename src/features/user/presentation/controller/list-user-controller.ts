import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import { ok, serverError } from "../../../../core/presentation/helpers/http-handler";
import { UserRepository } from "../../infra/repositories/user-repository";

export class ListUserController implements Controller {
    constructor(private repository: UserRepository) {}

    async execute(req: Request, res: Response) {
        try {
            const result = await this.repository.list();

            return ok(res, result);

        } catch(error) {
            return serverError(res, String(error));
        }
    }
}
