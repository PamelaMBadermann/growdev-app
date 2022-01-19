import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import {
    badRequest,
    ok,
    serverError,
} from "../../../../core/presentation/helpers/http-handler";
import { FindProjectByIdUseCase } from "../../domain/usecases/find-project-by-id/find-project-by-id-usecase";

export class FindProjectByIdController implements Controller {
    constructor(private findProjectByIdUseCase: FindProjectByIdUseCase) {}

    async execute(req: Request, res: Response) {
        try {
            const id = req.params.id;

            if (!id) {
                return badRequest(res, "ID não informado");
            }

            const project = await this.findProjectByIdUseCase.run({
                id,
            });

            return ok(res, project);
        } catch (error) {
            return serverError(res, error);
        }
    }
}
