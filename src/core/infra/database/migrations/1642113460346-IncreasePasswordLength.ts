import { MigrationInterface, QueryRunner } from "typeorm";

export class IncreasePasswordLength1642113460346 implements MigrationInterface {
    name = "IncreasePasswordLength1642113460346";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE profile ALTER COLUMN password TYPE varchar(100)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE profile ALTER COLUMN password TYPE varchar(50)`
        );
    }
}
