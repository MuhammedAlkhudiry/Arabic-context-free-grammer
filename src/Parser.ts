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
        this.lexicalAnalyzer = new LexicalAnalyzer();
        this.words = text.split(' ');
        this.cleanText = Helper.cleanText(this.originalText);
        this.readFirstWord();
    }

    readFirstWord() {
        this.lookahead = this.analyzeCurrentWord();
    }

    match(token: string, partOfSpeech: string = token, error: ATSError = new ATSError('خطأ لغوي')) {
        if (this.lookahead === token) {
            console.log(`${this.getCurrentWord()} - (${token}) - (${partOfSpeech}))`);
            this.currentIndex++;
            if ((this.lookahead = this.analyzeCurrentWord()) === 'علامة ترقيم')
                this.lookahead = this.analyzeCurrentWord();
        } else
            error.print();
    }


    analyzeCurrentWord() {
        if (this.currentIndex < this.words.length)
            return this.lexicalAnalyzer.analyze(this.getCurrentWord());
        else
            new ATSError('end of file');
    }

    getCurrentWord() {
        return this.words[this.currentIndex];
    }

    // "is" helpers
    isNominalSentence() {
        return this.isLookaheadIn(['حرف نفي', 'حرف استفهام', 'حرف جر', 'حرف ناسخ', 'فعل ناسخ', 'اسم']);
    }

    isSemiSentence() {
        return this.isLookaheadIn(['حرف جر', 'ظرف مكان', 'ظرف زمان']);
    }

    isExpansion() {
        return this.isLookaheadIn(['اسم فاعل', 'اسم مفعول', 'صيغة مبالغة', 'صفة مشبهة', 'حرف عطف', 'اسم', 'اسم موصول',]);
    }

    isObject() {
        return this.isLookaheadIn(['اسم', 'حرف مصدري']) || this.isNominalSentence();
    }

    isLookaheadIn(tokenList: Array<string>) {
        return tokenList.includes(this.lookahead);
    }

    isLookaheadEquals(token: string) {
        return this.lookahead === token;
    }
}
