"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = require("pino");
const logger = (0, pino_1.default)({
    transport: {
        target: "pino-pretty",
        options: {
            ignore: "pid,hostname",
            translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
            colorize: true,
            errorLikeObjectKeys: ["err", "error"],
        },
    },
});
exports.default = logger;
//# sourceMappingURL=logger.js.map