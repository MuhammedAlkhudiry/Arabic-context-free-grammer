import Parser from "./Parser";

class App {
    constructor() {
        const parser = new Parser('محمد في المسجد');
        parser.parse();
    }
}

new App();
