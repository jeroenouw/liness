import fs from 'fs';
import path from 'path';

import { defaultIgnoredDirs, defaultValidExtensions } from '../default/values.default';

function hasLines(dirPath: string): boolean {
    const dir = fs.readdirSync(dirPath);
    return dir.filter(dir => hasValidExtensions(dir, dirPath)).length > 0;
}

export function hasValidExtensions(dir: string, dirPath: string): boolean {
   if (!defaultIgnoredDirs.includes(dir) && !dir.startsWith('.')) {
        return (fs.statSync(path.join(dirPath, dir)).isDirectory() && hasLines(path.join(dirPath, dir))) 
        || defaultValidExtensions.some(defaultValidExtension => dir.endsWith(`.${defaultValidExtension}`)) 
    } 
    return false;    
}
