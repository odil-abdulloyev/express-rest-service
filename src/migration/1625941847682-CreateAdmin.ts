import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAdmin1625941847682 implements MigrationInterface {
    name = 'CreateAdmin1625941847682';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "users" (name, login, password) VALUES ('Admin', 'admin', '$2b$10$tkqNsldk13QEdg6bA.1v..YRCPiVC84NgsxYLGjQg4Ran4kOD/TG.')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "users" WHERE login = 'admin'`);
    }
}
