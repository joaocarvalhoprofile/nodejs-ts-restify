"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
class App {
    bootstrap(routers) {
        return __awaiter(this, void 0, void 0, function* () {
            this.application = restify.createServer({
                name: 'My Microservice',
                version: '1.0.0'
            });
            this.middlewares();
            this.applyRoutes(routers);
        });
    }
    middlewares() {
        this.application.use(restify.plugins.queryParser());
        this.application.use(restify.plugins.bodyParser());
        this.application.use(restify.plugins.jsonBodyParser());
    }
    applyRoutes(routers) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let router of routers) {
                router.applyRoutes(this.application);
            }
        });
    }
    createServer(routers = []) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bootstrap(routers);
        });
    }
}
exports.default = new App();
//# sourceMappingURL=app.js.map