import Parser from "./Parser";

export default class ArabicGrammar {
    private readonly parser: Parser;

    constructor(text: string) {
        this.parser = new Parser(text);

    }

    match(token: string) {
        return this.parser.match(token);
    }

    analyze() {
        this.parser.readFirstWord();
        this.sentence();
    }

    /* --- Arabic Grammar --- */

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
        switch (this.parser.lookahead) {
            case 'حرف نفي':
                this.match('حرف نفي');
                break;
            case 'حرف استفهام':
                this.match('حرف استفهام');
                break;
            case 'حرف جر':
                this.match('حرف جر');
                break;
        }
    }

    transformedParticle() {
        this.match('أخوات إن');
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
};
