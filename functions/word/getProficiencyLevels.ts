import {ButtonData} from "../types/types";

export const getProficiencyLevels = (): ButtonData[] => {
    return [
        {
            id: 0,
            name: "B1",
        },
        {
            id: 1,
            name: "B2",
        },
        {
            id: 2,
            name: "C1",
        },
        {
            id: 3,
            name: "C2",
        },
    ];
}