export const stringDoubleParse = (string: string):string => {
    const returnString = parseInt(string, 10).toString()
    if(returnString !== 'NaN')
        return returnString.trim()
    return string.trim()
}