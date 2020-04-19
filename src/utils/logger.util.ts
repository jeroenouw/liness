import { red, green, cyan, yellow } from 'kleur';
import * as figlet from 'figlet';

import { ConsoleMessage } from '../models/console-message';
import { Info } from '../models/info';
import { getExecutionTime } from './timer.util';
import { getWrittenPercentage, getEmptyPercentage } from './percentage.util';

const newLine = '\n';

export const showTitleAndBanner = (): void => {
    console.log(newLine);
    console.log(cyan(figlet.textSync(ConsoleMessage.TITLE, { horizontalLayout: 'full' })));
    console.info(cyan(ConsoleMessage.BANNER));
}

export const showStartChecking = (): void => {
    console.info(ConsoleMessage.START_CHECKING + newLine);
}

export const showError = (message: string | Error): void => {
    console.error(red(ConsoleMessage.ERROR) + message);
}

export const showWarning = (message: string): void => {
    console.warn(yellow(ConsoleMessage.WARNING) + message);
}

export const showSuccess = (message: string): void => {
    console.log(green(ConsoleMessage.SUCCESS) + message + newLine);
}

export const showInfo = (message: string): void => {
    console.info(cyan(ConsoleMessage.INFO) + message + newLine);
}

export const showTotalLines = (info: Info): void => {
    console.info(cyan(`${info.lineInfo.total}`) + ` - total lines (100.00%)`);
}

export const showWrittenLines = (info: Info): void => {
    console.info(
        cyan(`${info.lineInfo.written}`) + ` - written lines (${getWrittenPercentage(info)})`,
    );
}

export const showEmptyLines = (info: Info): void => {
    console.info(cyan(`${info.lineInfo.empty}`) + ` - empty lines (${getEmptyPercentage(info)})` + newLine)
}

export const showTotalFiles = (info: Info, initialTime: number): void => {
    console.info(cyan(`${info.fileInfo}`) + ` - total files, calculated in ${getExecutionTime(initialTime)}` + newLine + newLine);
}
