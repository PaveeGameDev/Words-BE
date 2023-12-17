import { stringDoubleParse } from "../general/stringDoubleParse";
import { User } from "../types/types";

export const getUserInfoBySessionId = (users: User[], sessionId: string): User | undefined => {
    return users.find(user => user.sessionId === stringDoubleParse(sessionId));
};