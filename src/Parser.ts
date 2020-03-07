import Helper from './Helper';
import LexicalAnalyzer from './LexicalAnalyzer';
import ATSError from "./Error";

export default class Parser {
    lexicalAnalyzer: LexicalAnalyzer;
    readonly originalText: string;
    readonly cleanText: string;
    readonly words: string[];
    currentPass: number = 0;
    position: number = 0;
    lookahead: string = '';
    currentIndex: number = 0;

    constructor(text: string) {
        this.originalText = text;
        this.words = text.split(' ');
        this.cleanText = Helper.cleanText(this.originalText);
        this.lexicalAnalyzer = new LexicalAnalyzer();
    }

    readFirstWord() {
        this.lookahead = this.analyzeCurrentWord();
    }


    match(token, error: ATSError = new ATSError('خطأ لغوي')) {
        if (this.lookahead === token) {
            this.lookahead = this.analyzeCurrentWord();
            this.currentIndex++;
        } else
            error.print();
    }

    analyzeCurrentWord() {
        if (this.currentIndex <= this.words.length)
            return this.lexicalAnalyzer.analyze(this.words[this.currentIndex]);
        else
            new ATSError('end of file');
    }

}
