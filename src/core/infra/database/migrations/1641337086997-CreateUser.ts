import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1641337086997 implements MigrationInterface {
    name = 'CreateUser1641337086997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("username" character varying(20) NOT NULL, "nome" character varying(30) NOT NULL, "cpf" character varying(11) NOT NULL, "idade" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_78a916df40e02a9deb1c4b75edb" PRIMARY KEY ("username"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
