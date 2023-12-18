"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueSessionId = void 0;
const { v4: uuidv4 } = require('uuid');
const generateUniqueSessionId = () => {
    return uuidv4();
};
exports.generateUniqueSessionId = generateUniqueSessionId;
