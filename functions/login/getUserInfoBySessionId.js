"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfoBySessionId = void 0;
const stringDoubleParse_1 = require("../general/stringDoubleParse");
const getUserInfoBySessionId = (users, sessionId) => {
    return users.find(user => user.sessionId === (0, stringDoubleParse_1.stringDoubleParse)(sessionId));
};
exports.getUserInfoBySessionId = getUserInfoBySessionId;
