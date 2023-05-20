"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const logger_1 = require("./utils/logger");
class Application {
    async init() {
        this.setUpDatabase();
        logger_1.default.info("StartUp Application!");
    }
    async setUpDatabase() {
        await mongodb_1.MongoClient.connect('mongodb://localhost:27017/');
    }
}
exports.default = Application;
//# sourceMappingURL=starter.js.map