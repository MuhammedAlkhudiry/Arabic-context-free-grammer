import ArabicGrammar from "./ArabicGrammar";
import Parser from "../Parser";
import Sentence from "./Sentence";

export default class NominalSentence extends ArabicGrammar {
    private sentence: Sentence;

    constructor(parser: Parser, sentence: Sentence) {
        super(parser);
        this.sentence = sentence;
        this.nominalSentence();
    }

    nominalSentence() {
        this.annular();
        this.subjectPhrase();
        this.predicatePhrase();
    }

    annular() {
        if (this.parser.isLookaheadIn([
            'حرف نفي',
            'حرف استفهام',
            'حرف جر',
        ]))
            this.sentence.originalParticle();
        else if (this.parser.isLookaheadIn([
            'حرف ناسخ',
            'فعل ناسخ',
        ]))
            this.sentence.transformedParticle();
    }

    subjectPhrase() {
        this.sentence.subject();
        this.sentence.expansionPhrase();
    }

    predicatePhrase() {
        this.predicate();
        this.sentence.expansionPhrase();
    }

    predicate() {
        if (this.parser.isLookaheadIn(['اسم فاعل', 'اسم مفعول', 'صيغة مبالغة', 'صفة مشبهة']))
            this.sentence.derivedNoun();
        else if (this.IsLookaheadEquals('اسم')) {
            this.match('اسم');
        } else if (this.parser.isSemiSentence()) {
            this.sentence.semiSentence();
        } else new Sentence(this.parser);
    }

}
