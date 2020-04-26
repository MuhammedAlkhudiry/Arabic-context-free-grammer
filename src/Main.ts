import ArabicGrammar from "./grammer/ArabicGrammar";
import Parser from "./Parser";
import Sentence from "./grammer/Sentence";

export default class Main {

    run() {
        const parser = new Parser('أكل محمد التفاحة');
        new ArabicGrammar(parser);
        new Sentence(parser);
        return parser.result;
    }
}

new Main().run();
