"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersTodayWord = void 0;
const dbQuery_1 = require("../database/dbQuery");
const mongodb_1 = require("mongodb");
//TODO the word it the database is defined as a string and the date same, it needs to be defined better, probably some id
// pointing to word and a year,month,day format for the date. Currently crashes when finds as it returns string instead of a Word object
const getUsersTodayWord = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, dbQuery_1.dbQuery)({ _id: new mongodb_1.ObjectId(user.id) }, { words: 1 });
    // @ts-ignore
    if (!result || result[result.length - 1].date !== Date.now().toString())
        return;
    // @ts-ignore
    return result[result.length - 1].word;
});
exports.getUsersTodayWord = getUsersTodayWord;
