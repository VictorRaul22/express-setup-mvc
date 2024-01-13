import expressWinston from "express-winston";
import winston from "winston";
import { envs } from "../../config/envs";
function transportsDynamic() {
  const transportsArr: any = [];
  if (envs.ENVIRONMENT === "development" || envs.LOG_CONSOLE === true) {
    transportsArr.push(
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
          winston.format.prettyPrint({
            colorize: true,
          }),
          winston.format.simple(),
          winston.format.printf(
            (info) => `[${info.timestamp}] ${info.level} ${info.message}`
          )
        ),
      })
    );
  }
  transportsArr.push(
    new winston.transports.File({
      filename: "logs/app.log",
      format: winston.format.combine(
        winston.format.timestamp({ format: "MM-DD-YYYY HH:mm:ss" }),
        winston.format.json({})
      ),
    })
  );
  return transportsArr;
}
export const loggerHttpMiddleware = expressWinston.logger({
  transports: transportsDynamic(),
  expressFormat: true,
  colorize: false,
  meta: false,
  msg: "HTTP {{req.method}} {{res.responseTime}}ms {{req.url}}",
});
