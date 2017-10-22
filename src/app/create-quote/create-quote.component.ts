import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  @Input() quotes;
  @Output() createQuoteEvent = new EventEmitter();

  newQuote ={body: '', author: '', rating: 0};
  constructor() { }

  ngOnInit() {
  }
    onSubmit(){
      console.log(this.newQuote);
      this.createQuoteEvent.emit(this.newQuote);
      this.newQuote = {body: '', author: '', rating:0};
      
    }
}
