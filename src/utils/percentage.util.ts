import { red, green, yellow } from 'kleur';

import { Info } from '../models/info';

const getPercentage = (currentCount: number, totalCount: number): number => {
    return Math.round(10000 * currentCount / totalCount) / 100;
}

const getColorPercentage = (succesCondition: boolean, warningCondition: boolean, percentage: number): string => {
    if (succesCondition) return `${green(`${percentage}%`)}`;
    if (warningCondition) return `${yellow(`${percentage}%`)}`;
    return `${red(`${percentage}%`)}`;
}

export const getWrittenPercentage = (info: Info): string => {
    const tresholdPercentage = 75;
    const percentage = getPercentage(info.lineInfo.written, info.lineInfo.total);

    return getColorPercentage(
        percentage >= (tresholdPercentage + 10), 
        percentage >= tresholdPercentage && percentage < (tresholdPercentage + 10), 
        percentage,
    );
}

export const getEmptyPercentage = (info: Info): string => {
    const tresholdPercentage = 25;
    const percentage = getPercentage(info.lineInfo.empty, info.lineInfo.total);

    return getColorPercentage(
        percentage <= (tresholdPercentage - 10), 
        percentage <= tresholdPercentage && percentage > (tresholdPercentage - 10),
        percentage,
    );
}
