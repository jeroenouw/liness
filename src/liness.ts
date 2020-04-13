import { showTitleAndBanner, showTotalFiles, showTotalLines, showWrittenLines, showEmptyLines, showStartChecking } from './utils/logger.util';
import { timerOn } from './utils/timer.util';
import { getInfo } from './line-reader';

export function liness(): void {
    showTitleAndBanner();
    showStartChecking();
    
    const initialTime = timerOn();
    const info = getInfo();

    showTotalLines(info);
    showWrittenLines(info);
    showEmptyLines(info);
    showTotalFiles(info, initialTime);
}
