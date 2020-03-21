import ArabicGrammar from "./ArabicGrammar";
import Parser from "../Parser";
import Sentence from "./Sentence";

export default class VerbalSentence extends ArabicGrammar {
    private sentence: Sentence;

    constructor(parser: Parser, sentence: Sentence) {
        super(parser);
        this.sentence = sentence;
        this.verbalSentence();
    }

    verbalSentence() {
        this.verbPhrase();
        this.remainingVerbPhrase();
    }

    remainingVerbPhrase() {
        this.verbalSubjectPhrase();
    }


    verbalSubjectPhrase() {
        this.sentence.subject();
        this.remainingVerbalSubjectPhrase();

    }

    remainingVerbalSubjectPhrase() {
        this.sentence.complementPhrase();
    }

    verbPhrase() {
        if (this.IsLookaheadEquals('فعل لازم')) {
            this.match('فعل لازم');
            this.remainingIntransitive();
        } else if (this.IsLookaheadEquals('فعل متعدي')) {
            this.match('فعل متعدي');
            this.remainingTransitive();
        }
    }

    remainingIntransitive() {
        if (super.parser.isSemiSentence())
            this.sentence.adjunctsPhrase();
    }

    remainingTransitive() {
        if (super.parser.isObject()) {
            this.sentence.object();
            this.remainingTransitiveObject();
        }
    }

    remainingTransitiveObject() {
        if (super.parser.isSemiSentence())
            this.sentence.adjunctsPhrase();
    }
}
