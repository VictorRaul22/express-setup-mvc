import "dotenv/config";
import env from "env-var";
export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  ENVIRONMENT: env
    .get("NODE_ENV")
    .default("development")
    .asEnum(["production", "development"]),
  LOG_CONSOLE: env.get("LOG_CONSOLE").asBool(),
};
