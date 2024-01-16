import { DataSource, type DataSourceOptions } from "typeorm";
import { envs } from "@/config/envs";
import { logger } from "@/utils/logger/logger";
import path from "path";
const defaultOptions: DataSourceOptions = {
  name: envs.data_base.NAME,
  type: "mysql",
  host: envs.data_base.HOST,
  port: envs.data_base.PORT,
  username: envs.data_base.USER,
  password: envs.data_base.PASSWORD,
  database: envs.data_base.NAME,
  entities: [path.resolve(__dirname, "../models/*{.js,.ts}")],
  logging: true,
  synchronize: true,
};
export class TypeOrmDataBase {
  private readonly appDataSource: DataSource;
  constructor(options: DataSourceOptions = defaultOptions) {
    this.appDataSource = new DataSource(options);
  }

  async start() {
    try {
      await this.appDataSource.initialize();
      logger.info("BD Connected");
    } catch (err) {
      if (err instanceof Error) {
        logger.error(err.message);
      }
    }
  }
}
