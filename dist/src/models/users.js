"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { "id": 1, "name": "USER1", "email": "user1@email.com" },
    { "id": 2, "name": "USER2", "email": "user2@email.com" }
];
class UserModel {
    static findAll() {
        return Promise.resolve(users);
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=users.js.map