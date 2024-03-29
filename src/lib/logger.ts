import pino from "pino";

const pinoConfig = {
  level: process.env.NODE_ENV === "development" ? "debug" : "trace",
  formatters: {
    level: (label: string) => {
      return {
        level: label,
      };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  browser: {
    asObject: true,
  },
};

const logger = pino(pinoConfig);

export const loggerError = (message: string) => {
  return logger.error(message);
};

export const loggerWarn = (message: string) => {
  return logger.warn(message);
};

export const loggerInfo = (message: string) => {
  return logger.info(message);
};

export const loggerDebug = (message: string) => {
  return logger.debug(message);
};
