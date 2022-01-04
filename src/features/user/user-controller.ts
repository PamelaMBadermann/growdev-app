import { Request, Response } from "express";
import { UserRepository } from "../../core/database/repositories/user-repository";

export class UserController {
    // private repository: UserRepository;

    private repository = new UserRepository();
    // constructor() {
    //     this.repository = new UserRepository();
    // }

    async create(req: Request, res: Response) {
        try {
            const { nome, username, cpf, idade } = req.body;

            const repo = new UserRepository();
            await repo.create({
                nome, username, cpf, idade
            });

            return res.status(201).send({
                ok: true
            });
            
        } catch(error) {
            res.status(500).send({
                ok: false,
                error
            })
        }
    }

    async list(req: Request, res: Response) {
        try {
            const result = await this.repository.list();

            return res.status(200).send({
                ok: true,
                data: result
            });
        } catch(error) {
            console.log(error);
            
            res.status(500).send({
                ok: false,
                error
            })
        }
    }
}