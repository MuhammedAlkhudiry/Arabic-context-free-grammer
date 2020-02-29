import LexicalAnalyzer from "./LexicalAnalyzer";
import Parser from "./Parser";

export default class ArabicGrammar {
    private lexicalAnalyzer: LexicalAnalyzer;
    private parser: Parser;

    constructor(parser: Parser) {
        this.parser = parser;
        this.lexicalAnalyzer = new LexicalAnalyzer();
    }

    init() {
        this.sentence();
    }

    sentence() {
        this.nominalSentence();
        this.verbalSentence();
    }

    nominalSentence() {
        this.annular();
        this.subjectPhrase();
        this.predicatePhrase();
    }


    annular() {
        this.originalParticle();
        this.transformedParticle();
    }

    originalParticle() {
        // switch () {
        //
        // }
    }

    transformedParticle() {

    }

    subjectPhrase() {

    }

    subject() {

    }

    predicatePhrase() {

    }

    predicate() {

    }

    derivedNoun() {

    }

    semiSentence() {

    }

//    ---------------------------------------------

    verbalSentence() {

    }

    remainingVerbPhrase() {

    }

    remainingVerbalSubjectPhrase() {

    }

    verbPhrase() {

    }

    remainingIntransitive() {

    }

    remainingTransitive() {

    }

    remainingTransitiveVerb() {

    }

    adjunctsPhrase() {

    }

    adjunct() {

    }

    verbalSubjectPhrase() {

    }

    expansionPhrase() {

    }

    expansion() {

    }

    complementPhrase() {

    }

    complementElement() {

    }

    object() {

    }

    interpretedInfinitive() {

    }

    annexed() {

    }

    adjective() {

    }

    coordinate() {

    }

    remainingCoordinate() {

    }

    RelativeSentence() {

    }
}
