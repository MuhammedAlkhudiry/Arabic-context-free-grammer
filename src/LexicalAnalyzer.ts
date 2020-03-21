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
            } else if (this.isInfinitiveParticle()) {
                return 'حرف جر';
            }
            return 'حرف';
        } else if (this.isDigit()) {
            return 'رقم';
        } else if (this.isIntransitiveVerb()) {
            return 'فعل لازم';
        } else if (this.isTransitiveVerb()) {
            return 'فعل معتدي';
        } else if (this.isPunctuation()) {
            return 'علامة ترقيم';
        } else if (this.isAdjectiveParticle()) {
            return 'حرف ناسخ';
        } else if (this.isVerbalTransformedParticle()) {
            return 'فعل ناسخ';
        } else if (this.isAdverb()) {
            return 'ظرف';
        }

        return 'اسم';
    }


    isIntransitiveVerb() {
        for (const key of Object.keys(this.database.verbs['لازم'])) {
            if (this.database.verbs['لازم'][key].includes(this.word))
                return true;
        }
        return false;
    }

    isTransitiveVerb() {
        for (const key of Object.keys(this.database.verbs['متعدي'])) {
            if (this.database.verbs['متعدي'][key].includes(this.word))
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
        return this.database.horof['حرف نفي'].includes(this.word);
    }

    isInterrogativeParticle() {
        return this.database.horof['حرف استفهام'].includes(this.word);
    }

    isPreposition() {
        return this.database.horof['حرف جر'].includes(this.word);
    }
    isInfinitiveParticle() {
        return this.database.horof['حرف مصدري'].includes(this.word);
    }

    isPunctuation() {
        return /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/.test(this.word);
    }

    isAdjectiveParticle() {
        return this.database.horof['حرف ناسخ'].includes(this.word);
    }

    isVerbalTransformedParticle() {
        return this.database.afal['فعل ناسخ'].includes(this.word);
    }

    isAdverb() {
        return this.database.asma['ظرف زمان'].includes(this.word) ||
            this.database.asma['ظرف مكان'].includes(this.word);
    }
}
