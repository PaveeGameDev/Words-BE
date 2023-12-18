"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringDoubleParse = void 0;
const stringDoubleParse = (string) => {
    const returnString = parseInt(string, 10).toString();
    if (returnString !== 'NaN')
        return returnString.trim();
    return string.trim();
};
exports.stringDoubleParse = stringDoubleParse;
