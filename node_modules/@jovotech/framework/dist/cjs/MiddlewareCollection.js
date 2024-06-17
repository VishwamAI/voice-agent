"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareCollection = void 0;
const Middleware_1 = require("./Middleware");
class MiddlewareCollection {
    constructor(...names) {
        this.middlewares = names.reduce((middlewares, middlewareName) => {
            middlewares[middlewareName] = new Middleware_1.Middleware(middlewareName);
            return middlewares;
        }, {});
    }
    get names() {
        return Object.keys(this.middlewares);
    }
    use(name, ...fns) {
        let middleware = this.get(name);
        if (!middleware) {
            middleware = new Middleware_1.Middleware(name);
            this.add(middleware);
        }
        middleware.use(...fns);
        return this;
    }
    add(...namesOrMiddlewares) {
        namesOrMiddlewares.forEach((nameOrMiddleware) => {
            if (typeof nameOrMiddleware === 'string') {
                this.middlewares[nameOrMiddleware] = new Middleware_1.Middleware(nameOrMiddleware);
            }
            else {
                this.middlewares[nameOrMiddleware.name] = nameOrMiddleware;
            }
        });
        return this;
    }
    has(name) {
        return !!this.middlewares[name] && this.middlewares[name] instanceof Middleware_1.Middleware;
    }
    get(name) {
        return this.middlewares[name];
    }
    remove(...names) {
        names.forEach((name) => {
            if (this.has(name)) {
                delete this.middlewares[name];
            }
        });
        return this;
    }
    clear() {
        this.remove(...this.names);
        return this;
    }
    async run(nameOrNames, jovo, payload) {
        const names = typeof nameOrNames === 'string' ? [nameOrNames] : nameOrNames;
        for (const name of names) {
            const beforeName = `before.${name}`;
            if (this.has(beforeName)) {
                await this.run(beforeName, jovo, payload);
            }
            const middleware = this.get(name);
            await (middleware === null || middleware === void 0 ? void 0 : middleware.run(jovo, payload));
            const afterName = `after.${name}`;
            if (this.has(afterName)) {
                await this.run(afterName, jovo, payload);
            }
        }
    }
    disable(...names) {
        names.forEach((name) => {
            const middleware = this.get(name);
            if (middleware) {
                middleware.enabled = false;
            }
        });
        return this;
    }
    enable(...names) {
        names.forEach((name) => {
            const middleware = this.get(name);
            if (middleware) {
                middleware.enabled = true;
            }
        });
        return this;
    }
}
exports.MiddlewareCollection = MiddlewareCollection;
//# sourceMappingURL=MiddlewareCollection.js.map