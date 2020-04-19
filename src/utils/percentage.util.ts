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
    const { lineInfo: { written, total } }  =  info;
    const tresholdPercentage = 75;
    const percentage = getPercentage(written, total);

    return getColorPercentage(
        percentage >= (tresholdPercentage + 10), 
        percentage >= tresholdPercentage && percentage < (tresholdPercentage + 10), 
        percentage,
    );
}

export const getEmptyPercentage = (info: Info): string => {
    const { lineInfo: { empty, total } }  =  info;
    const tresholdPercentage = 25;
    const percentage = getPercentage(empty, total);

    return getColorPercentage(
        percentage <= (tresholdPercentage - 10), 
        percentage <= tresholdPercentage && percentage > (tresholdPercentage - 10),
        percentage,
    );
}
