const { v4: uuidv4 } = require('uuid');
export const generateUniqueSessionId = ():string => {
    return uuidv4();
}