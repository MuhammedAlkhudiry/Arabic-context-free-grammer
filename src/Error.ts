export default class ATSError {
    private readonly msg: string;
    private type: number;

    constructor(msg: string, type: number) {
        this.msg = msg;
        this.type = type;
    }

    show() {
        console.log(this.msg);
        process.exit(1);

    }
}
