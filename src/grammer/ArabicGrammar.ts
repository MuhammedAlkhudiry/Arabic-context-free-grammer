import Parser from "../Parser";

export default class ArabicGrammar {
    protected readonly parser: Parser;

    constructor(parser: Parser) {
        this.parser = parser;
    }

    isLookaheadIn(tokenList: Array<string>) {
        return this.parser.isLookaheadIn(tokenList);
    }

    isLookaheadEquals(token: string) {
        return this.parser.isLookaheadEquals(token);
    }

    match(token: string, partOfSpeech: string = token) {
        return this.parser.match(token, partOfSpeech);
    }

    getWordsByIndex(previousIndex: number, currentIndex: number) {
        return this.parser.words.slice(previousIndex, currentIndex).join(' ');
    }
};
