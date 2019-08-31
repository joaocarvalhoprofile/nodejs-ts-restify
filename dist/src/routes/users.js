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
const route_1 = require("../common/route");
const users_1 = require("../models/users");
class UsersRouter extends route_1.Router {
    applyRoutes(application) {
        application.get('/users', (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const users = yield users_1.UserModel.findAll();
            response.json(users);
            return next();
        }));
    }
}
exports.default = new UsersRouter();
//# sourceMappingURL=users.js.map