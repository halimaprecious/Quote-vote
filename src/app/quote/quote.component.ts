import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

// new instance of a quote
quotes: Quote[]=[
  new Quote(1,"Paul","You can have it all.Just not all at once.","Oprah Winfrey",new Date(1999,5,7),0 ,0,),
  new Quote(2,"Rick","Beause paper has more patience than people.", "Anonymous",new Date(2012,5,3),0, 0),
  new Quote(3,"Darleen","The best way to predict the future is to create it.","Abraham Lincon", new Date(2019,9,2), 0 , 0),
  new Quote(4,"Milly","Take every chance drop every fear.", "Martin Luther",new Date(2021,2,2) ,0, 0),
  new Quote(5,"Dolly","There can be miracles when you believe.", "Whitney Houston",new Date(2007,2,2) ,0, 0),
  new Quote(6,"Pam","Magic is believing in yourself.","Anonymous",new Date(2021,2,2) ,0, 0),
];
highest!:number;
// delete button
quoteDelete(isComplete: boolean, index:number ){
  if (isComplete){
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`);
    if (toDelete){
      this.quotes.splice(index,1);
    }
   
  }
}
//display quote details
toggleDetails(index:number){
  this.quotes[index].showDetails =!this.quotes[index].showDetails;
}
//upvote logic
upVoteQuote(index: number){
  this.quotes[index].upVote++;
  // this.quotes[index].upVote=up;
  let arr:number[]=this.quotes.map(quotes=>quotes.upVote);
 this.highest =Math.max(...arr);
}
//downvote logic
downVoteQuote(index:  number){
  var down=this.quotes[index].downVote+1;
  this.quotes[index].downVote=down;
}
//nw quote logic
addNewQuote(quotes: Quote){
let quoteLength = this.quotes.length;
quotes.id = quoteLength+1;
this.quotes.push(quotes)
}
//quote with highest upvotes


  constructor() { }

  ngOnInit(): void {
  }
 //fucntion for showing highest quoteuovote
      // //highlightHighest (){ 
      //   //let quote Upvote = [] 
      //   let highest UpVote: number 
      //   for (let j = 0; j < this.quote.length; j++)
      //   { quote Upvote.push(this.quote[j].upVote) 
      //   } quote Upvote.sort(function (a, b){ return b - a })
      //    highest UpVote =quote Upvote[0] 
      //    //return highestUpVote; }
  
}
