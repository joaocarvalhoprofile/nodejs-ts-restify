"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const environment_1 = require("./src/config/environment");
// routes
const users_1 = require("./src/routes/users");
// Server instance
app_1.default.createServer([users_1.default]);
app_1.default.application.listen(environment_1.environment.server.port, () => {
    console.log(`Server started on port ${environment_1.environment.server.port}`);
});
//# sourceMappingURL=server.js.map