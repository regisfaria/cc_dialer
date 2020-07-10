import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// Below table needs adjustment
export default class CreateLeads1594354780142 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'leads',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'dot',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'phoneNumber',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'companyName',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'primaryAddress',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'otherAddress',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'entityType',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'operatingStatus',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'mcs150FormDate',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'carrierOperation',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cargoCarried',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'powerUnits',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'operationClassification',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('leads');
  }
}
