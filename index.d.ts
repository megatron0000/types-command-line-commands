declare function commandLineCommands(validCommands: string[]): {
    command: string;
    argv: string[];
}

export = commandLineCommands;
