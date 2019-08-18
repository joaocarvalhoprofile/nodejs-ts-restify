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
const server_1 = require("./server/server");
const user_router_1 = require("./users/user.router");
(function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new server_1.Server();
        try {
            yield server.startServer([user_router_1.usersRouter]);
            console.log('Server is listening', server.application.address());
        }
        catch (error) {
            console.log('Server failed to start !');
            console.error(error);
            process.exit(1);
        }
    });
})();
