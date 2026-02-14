import { AppConfig } from './configuration';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getDatabaseConfig = (
  configService: ConfigService<AppConfig>,
): TypeOrmModuleOptions => {
  const dbConfig = configService.get<AppConfig['database']>('database');

  if (!dbConfig) {
    throw new Error('Database configuration not found');
  }

  return {
    type: 'postgres',
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.name,
    autoLoadEntities: true,
    synchronize: true,
  };
};
