export enum LogColor {
    RESET = "\x1b[0m",
    BRIGHT = "\x1b[1m",
    DIM = "\x1b[2m",
    UNDERSCORE = "\x1b[4m",
    BLINK = "\x1b[5m",
    REVERSE = "\x1b[7m",
    HIDDEN = "\x1b[8m",
    FGBLACK = "\x1b[30m",
    FGRED = "\x1b[31m",
    FGGREEN = "\x1b[32m",
    FGYELLOW = "\x1b[33m",
    FGBLUE = "\x1b[34m",
    FGMAGENTA = "\x1b[35m",
    FGCYAN = "\x1b[36m",
    FGWHITE = "\x1b[37m",

    BGBLACK = "\x1b[40m",
    BGRED = "\x1b[41m",
    BGGREEN = "\x1b[42m",
    BGYELLOW = "\x1b[43m",
    BGBLUE = "\x1b[44m",
    BGMAGENTA = "\x1b[45m",
    BGCYAN = "\x1b[46m",
    BGWHITE = "\x1b[47m"
}

export class Logger {
    name: string;
    color: LogColor;

    constructor(name: string, color?: LogColor) {
        this.name = name;
        this.color = color ?? LogColor.FGWHITE;
    }

    private _log(args: any[]) {
        console.log("%s[%s]%s %s", this.color, this.name, LogColor.RESET, ...args);
    }

    public log(...args: any[]) {
        this._log(args);
    }
}