export class Message {

    constructor(
        private author: string,
        private message: string,
        private time: Date
    ) {}

    public getAuthor(): string {
        return this.author;
    }

    public getText(): string {
        return this.message;
    }

    public getTime(): Date {
        return this.time;
    }

}