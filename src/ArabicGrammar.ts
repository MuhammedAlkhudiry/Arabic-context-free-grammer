import LexicalAnalyzer from "./LexicalAnalyzer";

class ArabicGrammar {
    private lexicalAnalyzer: LexicalAnalyzer;

    constructor() {
        this.lexicalAnalyzer = new LexicalAnalyzer();
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
        switch () {

        }
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
