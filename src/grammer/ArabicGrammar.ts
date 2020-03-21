import Parser from "../Parser";
import ATSError from "../Error";

export default class ArabicGrammar {
    protected readonly parser: Parser;

    constructor(parser: Parser) {
        this.parser = parser;
    }

    IsLookaheadIn(tokenList: Array<string>) {
        return this.parser.isLookaheadIn(tokenList);
    }

    IsLookaheadEquals(token: string) {
        return this.parser.isLookaheadEquals(token);
    }

    match(token: string, partOfSpeech: string = token) {
        return this.parser.match(token, partOfSpeech);
    }

};
