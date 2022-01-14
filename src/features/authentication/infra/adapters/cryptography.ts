import bcrypt from "bcrypt";

export class Cryptography {
    static encode(data: string) {
        return bcrypt.hashSync(data, 10);
    }

    static compare(password: string, encryptedPassword: string) {
        return bcrypt.compareSync(password, encryptedPassword);
    }
}
