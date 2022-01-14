import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProfileTable1641950071211 implements MigrationInterface {
    name = 'CreateProfileTable1641950071211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profile" ("username" character varying NOT NULL, "password" character varying(50) NOT NULL, "avatarUrl" character varying(120), "phone" integer, CONSTRAINT "REL_d80b94dc62f7467403009d8806" UNIQUE ("username"), CONSTRAINT "PK_d80b94dc62f7467403009d88062" PRIMARY KEY ("username"))`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_d80b94dc62f7467403009d88062" FOREIGN KEY ("username") REFERENCES "user"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_d80b94dc62f7467403009d88062"`);
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}
