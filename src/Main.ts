import ArabicGrammar from "./ArabicGrammar";

class Main {

    run() {
        const arabicGrammar = new ArabicGrammar('محمد في المسجد');
        arabicGrammar.analyze();
    }

}

new Main().run();
