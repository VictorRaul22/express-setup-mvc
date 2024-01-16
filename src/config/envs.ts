import "dotenv/config";
import env from "env-var";
export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  ENVIRONMENT: env
    .get("NODE_ENV")
    .default("development")
    .asEnum(["production", "development"]),
  LOG_CONSOLE: env.get("LOG_CONSOLE").asBool(),
  data_base: {
    NAME: env.get("DB_NAME").required().asString(),
    PORT: env.get("DB_PORT").required().asPortNumber(),
    HOST: env.get("DB_HOST").required().asString(),
    USER: env.get("DB_USER").required().asString(),
    PASSWORD: env.get("DB_PASSWORD").required().asString(),
  },
};
