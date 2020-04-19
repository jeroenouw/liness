import fs from 'fs';
import path from 'path';

import { Info } from './models/info';
import { hasValidExtensions } from './utils/conditions.util';

const currentDirPath = process.cwd();
const encoding = 'utf8';

export function getInfo(): Info {
    const fileNames = getFiles(currentDirPath);

    if (!fileNames.length) {
        return { fileInfo: 0, lineInfo: { total: 0, empty: 0, written: 0 } };
    } 

    const linesInfo = fileNames
        .map(filename => {
            const currentFile = fs.readFileSync(path.join(currentDirPath, filename), encoding).split(/\r?\n/);
            const emptyLines = currentFile.filter(line => !line.length).length;
            const lineInfo = { total: currentFile.length, empty: emptyLines, written: currentFile.length - emptyLines };
            return lineInfo;
        })
        .reduce((a, v) => {
            return { total: a.total + v.total, empty: a.empty + v.empty, written: a.written + v.total - v.empty };
        });

    return { fileInfo: fileNames.length, lineInfo: linesInfo };
}

function getFiles(dirPath: string): string[] {
    const filesAndDirsInCurrentDir = fs.readdirSync(dirPath);

    const flattedAndFilteredDirs = filesAndDirsInCurrentDir
        .filter(dir => hasValidExtensions(dir, dirPath))
        .flatMap(dir => fs.statSync(path.join(dirPath, dir)).isDirectory() ? getFiles(path.join(dirPath, dir)) : mapCurrentDir(dirPath) + dir);
    return flattedAndFilteredDirs;
}

function mapCurrentDir(dirPath: string): string {
    const dir = dirPath !== currentDirPath ? dirPath.slice(currentDirPath.length + 1) : './';
    return dir.endsWith('/') ? dir : dir + '/';
}
