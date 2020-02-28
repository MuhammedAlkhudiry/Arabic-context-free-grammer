import Database from './Database';

export default class LexicalAnalyzer {
    private word: string;
    private readonly database: Database;

    constructor() {
        this.database = new Database();
    }

    analyze(word: string) {
        this.word = word;

        if (this.isHarf()) {

        }
    }

    lookup(word: string) {

    }

    isVerb() {

    }

    isHarf() {
        for (const key of Object.keys(this.database.horof)) {
            if (this.database.horof[key].include(this.word))
                return true;
        }
        return false;
    }

    isDigit() {

    }

    isNegativeParticle() {
        return this.database.horof['negativeParticle'].includes(this.word);
    }

    isInterrogativeParticle() {
        return this.database.horof['interrogativeParticle'].includes(this.word);
    }

    isPreposition() {
        return this.database.horof['preposition'].includes(this.word);
    }
}
