import { Response } from "express"

export const ok = (res: Response, data?: any) => {
    return res.status(200).send({
        ok: true,
        data
    });
}

export const serverError = (res: Response, error?: any) => {
    return res.status(500).send({
        ok: true,
        error
    });
}

export const badRequest = (res: Response, reason?: string) => {
    return res.status(400).send({
        ok: true,
        reason
    });
}
