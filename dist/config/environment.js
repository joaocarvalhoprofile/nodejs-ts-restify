"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    auth: {},
    server: {
        port: process.env.SERVER_PORT || 3333
    },
    smtpMail: {
        host: '',
        port: '',
        user: '',
        password: '',
        ssl: true
    }
};
