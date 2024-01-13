import { format, createLogger, transports } from "winston";
import { envs } from "../../config/envs";
const { combine, timestamp, colorize } = format;

function transportsDynamic() {
  const transportsArr: any = [];
  if (envs.ENVIRONMENT === "development" || envs.LOG_CONSOLE === true) {
    transportsArr.push(
      new transports.Console({
        format: combine(
          colorize(),
          timestamp({
            format: "MMM-DD-YYYY HH:mm:ss",
          }),
          format.printf(
            (info) => `[${info.timestamp}] ${info.level} ${info.message}`
          )
        ),
      })
    );
  }

  transportsArr.push(
    new transports.File({
      filename: "logs/app.log",
    })
  );
  transportsArr.push(
    new transports.File({
      level: "error",
      filename: "logs/error.log",
    })
  );

  return transportsArr;
}
export const logger = createLogger({
  level: "debug",
  format: combine(
    timestamp({
      format: "MM-DD-YYYY HH:mm:ss",
    }),
    format.json()
  ),
  transports: transportsDynamic(),
});
