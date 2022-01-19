import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import {
    ok,
    serverError,
} from "../../../../core/presentation/helpers/http-handler";
import { CreateProjectUseCase } from "../../domain/usecases/create-project-usecase";

export class CreateProjectController implements Controller {
    constructor(private createProjectUseCase: CreateProjectUseCase) {}

    async execute(req: Request, res: Response) {
        try {
            const { username, name, description, startDate, endDate } =
                req.body;

            // ....

            await this.createProjectUseCase.run({
                username,
                name,
                description,
                startDate,
                endDate,
            });

            return ok(res, "Project was successfully created");
        } catch (error) {
            return serverError(res, error);
        }
    }
}
