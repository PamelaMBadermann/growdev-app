import { UseCase } from "../../../../core/domain/contracts/usecase";
import { NotFoundError } from "../../../../core/domain/errors/not-found-error";
import { UserRepository } from "../../../user/infra/repositories/user-repository";
import { Cryptography } from "../../infra/adapters/cryptography";
import { ProfileRepository } from "../../infra/repositories/profile-repository";
import { DuplicatedProfileError } from "../errors/duplicated-profile-error";
import { IProfile } from "../model/profile";

export interface SignUpParams {
    username: string;
    password: string;
    avatarUrl?: string;
    phone?: number;
}

export class SignUpUseCase implements UseCase {
    constructor(
        private repository: ProfileRepository,
        private userRepository: UserRepository
    ) {}

    async run(data: SignUpParams) {
        if (data.password.length > 50) {
            throw new Error("A senha é maior do que 50 caracteres");
        }

        // Regras
        // 1- Nao pode perfil duplicado - ok
        // 2- O user já deve estar criado - ok

        const profile = await this.repository.find(data.username);
        if (!!profile) {
            throw new DuplicatedProfileError();
        }

        const user = await this.userRepository.find(data.username);
        if (!user) {
            throw new NotFoundError("User");
        }

        // encriptar a senha
        data.password = Cryptography.encode(data.password);

        await this.repository.create(data);
    }
}
