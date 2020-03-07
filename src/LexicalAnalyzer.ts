import Database from './Database';

export default class LexicalAnalyzer {
    private word: string;
    private readonly database: Database;
    private token: string;

    constructor() {
        this.database = new Database();
    }


    analyze(word: string) {
        this.word = word;

        if (this.isHarf()) {
            if (this.isNegativeParticle()) {
                return 'حرف نفي';
            } else if (this.isInterrogativeParticle()) {
                return 'حرف استفهام';
            } else if (this.isPreposition()) {
                return 'حرف جر';
            }
            return 'harf';
        } else if (this.isDigit()) {
            return 'num';
        } else if (this.isVerb()) {
            return 'verb';
        } else if (this.isPunctuation()) {
            return 'علامة ترقيم';
        } else if (this.isAdjectiveParticle()) {
            return 'أخوات إن';
        } else if (this.isVerbalTransformedParticle()) {
            return 'أخوات كان';
        } else if (this.isAdverb()) {
            return 'ظرف';
        }

        return 'noun';
    }


    isVerb() {
        for (const key of Object.keys(this.database.verbs)) {
            if (this.database.verbs[key].includes(this.word))
                return true;
        }
        return false;
    }

    isHarf() {
        for (const key of Object.keys(this.database.horof)) {
            if (this.database.horof[key].includes(this.word))
                return true;
        }
        return false;
    }

    isDigit() {
        return /^\d+$/.test(this.word) ||
            /[\u0660-\u0669]/.test(this.word);
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

    isPunctuation() {
        return /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/.test(this.word);
    }

    isAdjectiveParticle() {
        return this.database.horof['أخوات إن'].includes(this.word);
    }

    isVerbalTransformedParticle() {
        return this.database.afal['أخوات كان'].includes(this.word);
    }

    isAdverb() {
        return this.database.asma['ظرف زمان'].includes(this.word) ||
            this.database.asma['ظرف مكان'].includes(this.word);
    }
}
