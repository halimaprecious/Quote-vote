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
  new Quote(1,"Paul","Those who deny freedom to others deserve it not for themselves.","Martin Luther",new Date(1999,5,7),0 ,0,),
  new Quote(2,"Rick","Beause paper has more patience than people.", "Anonymous",new Date(2012,5,3),0 , 0),
  new Quote(3,"Darleen","The best way to predict the future is to create it.","Abraham Lincon", new Date(2019,9,2), 0 , 0),
  new Quote(4,"Milly","Take every chance drop every fear.", "Anonymous",new Date(2021,2,2) ,0, 0),
  new Quote(5,"Ken","Be the peace you wish to see in the world.","Martin Luther",new Date(2022,8,1), 0 , 0),
  new Quote(6,"chief","Go hard or go home","Anonymous", new Date(2021,2,1),0 ,0),
  
];
  constructor() { }

  ngOnInit(): void {
  }

}
