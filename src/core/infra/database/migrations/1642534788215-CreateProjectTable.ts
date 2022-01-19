import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProjectTable1642534788215 implements MigrationInterface {
    name = "CreateProjectTable1642534788215";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "project" ("uid" uuid NOT NULL, "name" character varying(30) NOT NULL, "description" character varying(30) NOT NULL, "startDate" TIMESTAMP, "endDate" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "username" character varying(20), CONSTRAINT "PK_8505f3977d7839dd709ff79f9d7" PRIMARY KEY ("uid"))`
        );
        await queryRunner.query(
            `ALTER TABLE "project" ADD CONSTRAINT "FK_c2b460c69608b861ee8de1a2f96" FOREIGN KEY ("username") REFERENCES "user"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "project" DROP CONSTRAINT "FK_c2b460c69608b861ee8de1a2f96"`
        );
        await queryRunner.query(`DROP TABLE "project"`);
    }
}
