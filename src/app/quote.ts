export class Quote {
    id!:number;
    showDetails!:boolean;
    writer!:string;
    quote!:string;
    author!:string;
    creationDate!:Date;
    upVote!:number;
    downVote!:number

    constructor(id:number, writer:string, quote: string, author:string, creationDate:Date, upvote: number, downvote: number){
        this.id =id;
        this.writer= writer;
        this.quote = quote;
        this.author =author;
        this.upVote = upvote;
        this.creationDate =creationDate;
        this.downVote = downvote;
        this.showDetails =false;
    }
}
