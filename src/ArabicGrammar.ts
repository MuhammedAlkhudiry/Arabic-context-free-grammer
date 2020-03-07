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
        if (this.parser.lookahead === 'أخوات إن')
            this.match('أخوات إن');
        else if (this.parser.lookahead === 'أخوات كان')
            this.match('أخوات كان');
    }

    subjectPhrase() {
        this.subject();
        this.expansionPhrase();

    }

    subject() {
        if (this.parser.lookahead === 'noun') {
            this.match('noun');
        } else if (this.parser.lookahead === 'pronoun') {
            this.match('pronoun');
        }
    }


    predicatePhrase() {
        this.predicate();
        this.expansionPhrase();
    }

    predicate() {
        if (this.parser.lookahead === 'noun') {
            this.match('noun');
        }

    }

    derivedNoun() {
        switch (this.parser.lookahead) {
            case 'اسم فاعل':
                this.match('اسم فاعل');
                break;
            case 'اسم مفعول':
                this.match('اسم مفعول');
                break;
            case 'صيغة مبالغة':
                this.match('صيغة مبالغة');
                break;
            case 'صفة مشبهة':
                this.match('صفة مشبهة');
                break;
        }

    }

    semiSentence() {
        switch (this.parser.lookahead) {
            case 'حرف جر':
                this.match('حرف جر');
                this.match('noun');
                break;
            case 'ظرف':
                this.match('ظرف');
                this.match('noun');
                break;
        }

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
