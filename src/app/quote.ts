export class Quote {
    id!:number;
    showDetails!:boolean;
    writer!:string;
    quote!:string;
    author!:string;
    creationDate!:Date;
    upvote!:number;
    downvote!:number

    constructor(id:number, writer:string, quote: string, author:string, creationDate:Date, upvote: number, downvote: number){
        this.id =id;
        this.writer= writer;
        this.quote = quote;
        this.author =author;
        this.upvote = upvote;
        this.creationDate =creationDate;
        this.downvote = downvote;
        this.showDetails =false;
    }
}
