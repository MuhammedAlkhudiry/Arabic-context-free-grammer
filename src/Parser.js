"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helper_1 = require("./Helper");
const LexicalAnalyzer_1 = require("./LexicalAnalyzer");
class Parser {
    constructor(text) {
        this.originalText = text;
        this.currentPass = 0;
        this.passNumber = 0;
        this.cleanText = Helper_1.default.cleanText(this.originalText);
    }
    parse() {
        const words = this.originalText.split(' ');
        const lexicalAnalyzer = new LexicalAnalyzer_1.default();
        for (const word of words) {
            const lookahead = lexicalAnalyzer.analyze(word);
        }
    }
}
exports.default = Parser;
//# sourceMappingURL=Parser.js.map