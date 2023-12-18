import {ButtonData} from "../types/types";

export const getCountries = (): ButtonData[] => {
    return [
        {
            id: 0,
            name: "Czech",
        },
        {
            id: 1,
            name: "Polish",
        },
        {
            id: 2,
            name: "Slovakia",
        }
    ];
}