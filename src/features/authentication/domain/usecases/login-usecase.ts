import { UseCase } from "../../../../core/domain/contracts/usecase";
import { NotFoundError } from "../../../../core/domain/errors/not-found-error";
import { Cryptography } from "../../infra/adapters/cryptography";
import { ProfileRepository } from "../../infra/repositories/profile-repository";
import { InvalidCredentialsError } from "../errors/invalid-credentials-error";

export interface LoginParams {
    username: string;
    password: string;
}

export class LoginUseCase implements UseCase {
    constructor(private repository: ProfileRepository) {}

    async run(params: LoginParams) {
        // 1- verificar se perfil existe
        const profile = await this.repository.findWithPassword(params.username);
        if (!profile) {
            throw new NotFoundError("Profile");
        }

        // 2- verificar se a senha/username estao corretos
        const passwordMatches = Cryptography.compare(
            params.password,
            profile.password
        );
        if (!passwordMatches) {
            throw new InvalidCredentialsError();
        }

        const loggedProfile = await this.repository.find(params.username);
        if (!loggedProfile) {
            throw new NotFoundError("Profile");
        }

        // ok
        return loggedProfile;
    }
}
