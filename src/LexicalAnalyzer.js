"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./Database");
class LexicalAnalyzer {
    constructor() {
        this.database = new Database_1.default();
    }
    analyze(word) {
        this.word = word;
        if (this.isHarf()) {
        }
    }
    lookup(word) {
    }
    isVerb() {
    }
    isHarf() {
        for (const key of Object.keys(this.database['horof'])) {
            if (this.database[key].include(this.word))
                return true;
        }
        return false;
    }
    isDigit() {
    }
}
exports.default = LexicalAnalyzer;
//# sourceMappingURL=LexicalAnalyzer.js.map