import { DomainError } from "../../../../core/domain/errors/domain-error";

export class InvalidCredentialsError extends DomainError {
    constructor() {
        super("Invalid credentials", 403);
        this.name = "InvalidCredentialsError";
    }
}
