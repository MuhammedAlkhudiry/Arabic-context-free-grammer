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

        } else if (this.isDigit()) {
        } else if (this.isVerb()) {

        }

    }


    isVerb() {
        for (const key of Object.keys(this.database.verbs)) {
            if (this.database.verbs[key].include(this.word))
                return 'verbs';
        }
        return null;
    }

    isHarf() {
        for (const key of Object.keys(this.database.horof)) {
            if (this.database.horof[key].include(this.word))
                return 'horof';
        }
        return null;
    }

    isDigit() {
        return /^\d+$/.test(this.word) ||
        isNaN(parseInt(this.word)) ||
        /[\u0660-\u0669]/.test(this.word) ? 'num' : null;
    }

    isNegativeParticle() {
        return this.database.horof['negativeParticle'].includes(this.word) ? 'negativeParticle' : null;
    }

    isInterrogativeParticle() {
        return this.database.horof['interrogativeParticle'].includes(this.word) ? 'interrogativeParticle' : null;
    }

    isPreposition() {
        return this.database.horof['preposition'].includes(this.word) ? 'preposition' : null;
    }
}
