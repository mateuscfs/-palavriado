import {MigrationInterface, QueryRunner} from "typeorm";

export class addUniqueConstraint1645027174234 implements MigrationInterface {
    name = 'addUniqueConstraint1645027174234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dictionary" ADD CONSTRAINT "UQ_cdddffe04b4f59f4f2074e13990" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dictionary" DROP CONSTRAINT "UQ_cdddffe04b4f59f4f2074e13990"`);
    }

}
