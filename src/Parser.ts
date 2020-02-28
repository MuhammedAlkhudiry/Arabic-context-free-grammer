import Helper from './Helper';
import LexicalAnalyzer from './LexicalAnalyzer';

export default class Parser {
    private readonly originalText: string;
    private cleanText: string;
    private currentPass: number;
    private passNumber: number;
    private position: number;

    constructor(text: string) {
        this.originalText = text;
        this.currentPass = 0;
        this.passNumber = 0;
        this.position = 0;
        this.cleanText = Helper.cleanText(this.originalText);
    }

    parse() {
        const words = this.originalText.split(' ');
        const lexicalAnalyzer = new LexicalAnalyzer();
        for (const word of words) {
            const lookahead = lexicalAnalyzer.analyze(word);
        }
    }

    match() {

    }
}
