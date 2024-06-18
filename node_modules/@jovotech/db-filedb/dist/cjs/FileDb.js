"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDb = void 0;
const framework_1 = require("@jovotech/framework");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const process_1 = __importDefault(require("process"));
class FileDb extends framework_1.DbPlugin {
    constructor(config) {
        super(config);
    }
    getDefaultConfig() {
        return Object.assign(Object.assign({}, super.getDefaultConfig()), { skipTests: true, pathToFile: '../db/db.json' });
    }
    get pathToFile() {
        if (path_1.default.isAbsolute(this.config.pathToFile)) {
            return this.config.pathToFile;
        }
        // Make sure the pathToFile is applied relative to the dist-dir
        return path_1.default.join(process_1.default.cwd(), 'dist', this.config.pathToFile);
    }
    async initialize() {
        const pathToFileDir = path_1.default.dirname(this.pathToFile);
        const pathExists = async (pathToFile) => !!(await fs_1.default.promises.stat(pathToFile).catch(() => false));
        if (!(await pathExists(pathToFileDir))) {
            await fs_1.default.promises.mkdir(pathToFileDir, { recursive: true });
        }
        if (!(await pathExists(this.pathToFile))) {
            await fs_1.default.promises.writeFile(this.pathToFile, '[]');
        }
    }
    async getDbItem(primaryKey) {
        const fileDataStr = await fs_1.default.promises.readFile(this.pathToFile, 'utf8');
        const users = fileDataStr.length > 0 ? JSON.parse(fileDataStr) : [];
        return users.find((userItem) => {
            return userItem.id === primaryKey;
        });
    }
    async loadData(userId, jovo) {
        const dbItem = await this.getDbItem(userId);
        if (dbItem) {
            jovo.$user.isNew = false;
            jovo.setPersistableData(dbItem, this.config.storedElements);
        }
    }
    async saveData(userId, jovo) {
        const fileDataStr = await fs_1.default.promises.readFile(this.pathToFile, 'utf8');
        const users = fileDataStr.length > 0 ? JSON.parse(fileDataStr) : [];
        const dbItem = users.find((userItem) => {
            return userItem.id === userId;
        });
        // // create new user
        if (!dbItem) {
            const item = {
                id: userId,
            };
            await this.applyPersistableData(jovo, item);
            users.push(item);
        }
        else {
            // update existing user
            for (let i = 0; i < users.length; i++) {
                if (users[i].id === userId) {
                    await this.applyPersistableData(jovo, users[i]);
                }
            }
        }
        return fs_1.default.promises.writeFile(this.pathToFile, JSON.stringify(users, null, 2));
    }
}
exports.FileDb = FileDb;
//# sourceMappingURL=FileDb.js.map