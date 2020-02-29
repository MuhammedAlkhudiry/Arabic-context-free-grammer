import Helper from './Helper';
import LexicalAnalyzer from './LexicalAnalyzer';
import ATSError from "./Error";
import ArabicGrammar from "./ArabicGrammar";

export default class Parser {
    lexicalAnalyzer: LexicalAnalyzer;
    readonly originalText: string;
    readonly cleanText: string;
    readonly words: string[];
    currentPass: number = 0;
    position: number = 0;
    lookahead: string = '';

    constructor(text: string) {
        this.originalText = text;
        this.words = text.split(' ');
        this.cleanText = Helper.cleanText(this.originalText);
        this.lexicalAnalyzer = new LexicalAnalyzer();
        this.init();
    }

    init() {
        this.lookahead = this.lexicalAnalyzer.analyze(this.words[0]);
        new ArabicGrammar(this).init();
    }


    match(token, error: ATSError) {
        if (this.lookahead !== token)
            error.show();
    }


}
