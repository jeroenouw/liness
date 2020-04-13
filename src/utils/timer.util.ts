export const timerOn = (): number => {
    const currentTime = Date.now();
    return currentTime;
}

export const getExecutionTime = (initialTime: number): string => {
    const finalTime = Date.now();
    const second = 1000;
    return `${((finalTime - initialTime) / second).toFixed(4)}s`;
}
