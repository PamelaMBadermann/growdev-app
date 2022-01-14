import { DomainError } from "../../../../core/domain/errors/domain-error";

export class DuplicatedProfileError extends DomainError {
    constructor() {
        super("Perfil já existente");
        this.name = "DuplicatedProfileError";
    }
}
