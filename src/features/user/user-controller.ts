import { Request, Response } from "express";
import { IUserRepository } from "./user-repository";

export class UserController {
    constructor(private repository: IUserRepository) {}

    async create(req: Request, res: Response) {
        try {
            const { nome, username, cpf, idade } = req.body;

            await this.repository.create({
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
            res.status(500).send({
                ok: false,
                error
            })
        }
    }
}