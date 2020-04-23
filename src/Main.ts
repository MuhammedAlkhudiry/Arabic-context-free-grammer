import ArabicGrammar from "./grammer/ArabicGrammar";
import Parser from "./Parser";
import Sentence from "./grammer/Sentence";

class Main {

    run() {
        const parser = new Parser('ذهب الولد في الكتاب');
        new ArabicGrammar(parser);
        new Sentence(parser);
    }
}

new Main().run();
