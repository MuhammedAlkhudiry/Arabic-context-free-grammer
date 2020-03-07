export default class ATSError {
    private readonly msg: string;
    // private type: number;

    constructor(msg: string) {
        this.msg = msg;
        // this.type = type;
    }

    print() {
        console.log(this.msg);
        process.exit(1);
    }
}
