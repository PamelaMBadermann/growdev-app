import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import {
    ok,
    serverError,
} from "../../../../core/presentation/helpers/http-handler";
import { ListProjectsUseCase } from "../../domain/usecases/list-projects-usecase";

export class ListProjectsController implements Controller {
    constructor(private listProjectsUseCase: ListProjectsUseCase) {}

    async execute(req: Request, res: Response) {
        try {
            const result = await this.listProjectsUseCase.run();

            return ok(res, result);
        } catch (error) {
            return serverError(res, error);
        }
    }
}
