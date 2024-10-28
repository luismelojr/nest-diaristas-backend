import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmConfigService } from '../typeorm-config';

const dataBase = new TypeOrmConfigService();

export const dataConfigMigration = new DataSource(
  dataBase.createTypeOrmOptions() as DataSourceOptions,
);
