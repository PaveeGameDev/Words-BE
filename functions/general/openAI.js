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
exports.openAI = void 0;
const app_1 = require("../../app");
const openAI = (messages) => __awaiter(void 0, void 0, void 0, function* () {
    const completion = yield app_1.openai.chat.completions.create({
        messages: messages.map(message => ({
            role: message.role,
            content: message.content
        })),
        model: "gpt-3.5-turbo",
    });
    return completion.choices[0];
});
exports.openAI = openAI;
