import { ControllerError } from "../../../../core/presentation/errors/controller-error";

export class NotProvidedError extends ControllerError {
    constructor(field: string) {
        super(`${field} not provided`);
        this.name = "NotProvidedError";
    }
}
