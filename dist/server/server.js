"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const environment_1 = require("../config/environment");
class Server {
    createServer(routers) {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'My Microservice',
                    version: '1.0.0'
                });
                this.application.use(restify.plugins.queryParser());
                // routes
                for (let router of routers) {
                    router.applyRoutes(this.application);
                }
                this.application.listen(environment_1.environment.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    startServer(routers = []) {
        return this.createServer(routers).then(() => this);
    }
}
exports.Server = Server;
