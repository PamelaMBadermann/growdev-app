import { NotFoundError } from "../../../../../src/core/domain/errors/not-found-error";
import {
    DatabaseConnection,
    RedisConnection,
} from "../../../../../src/core/infra/database/connections";

import { CacheRepository } from "../../../../../src/core/infra/repositories/cache-repository";
import {
    CreateProjectUseCase,
    IUserRepository,
} from "../../../../../src/features/projects/domain/usecases/create-project-usecase";
import { ProjectRepository } from "../../../../../src/features/projects/infra/repositories/project-repository";
import { IUser } from "../../../../../src/features/user/domain/model/user";
import { UserRepository } from "../../../../../src/features/user/infra/repositories/user-repository";

// class MockUserRepository implements IUserRepository {
//     find(username: string) {
//         if (username === undefined) {
//             return undefined;
//         }

//         if (username === "teste_mock_erro") {
//             throw new Error();
//         }
//     }

//     async create(_: IUser) {}
// }

describe("Create Project UseCase tests", () => {
    jest.mock(
        "../../../../../src/features/user/infra/repositories/user-repository"
    );

    const makeSut = () => {
        const userRepo = new UserRepository();
        const projectRepo = new ProjectRepository();
        const cacheRepo = new CacheRepository();

        const sut = new CreateProjectUseCase(projectRepo, userRepo, cacheRepo);
        return sut;
    };

    beforeAll(async () => {
        await DatabaseConnection.initConnection();
        RedisConnection.initConnection();
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("deveria gerar NotFoundError se o usuario não existe", async () => {
        const spyTest = jest
            .spyOn(UserRepository.prototype, "find")
            .mockResolvedValue(undefined);

        const sut = makeSut();

        expect.assertions(4);

        try {
            await sut.run({
                username: "teste",
                description: "any_description",
                name: "any_name",
            });
        } catch (error) {
            expect(error).toBeInstanceOf(NotFoundError);

            expect(spyTest).toHaveBeenCalledWith("teste");

            const err = error as NotFoundError;
            expect(err.name).toEqual("NotFoundError");
            expect(err.message).toEqual("user not found.");
        }
    });
});
