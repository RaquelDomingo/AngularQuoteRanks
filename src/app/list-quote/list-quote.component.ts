import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-quote',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.css']
})
export class ListQuoteComponent implements OnInit {

    @Input() quotes;
    
      @Output() deleteQuoteEvent = new EventEmitter();

      constructor() { }

      ngOnInit() {
      }

      voteUp(quote) {
        quote.rating++;
      }

      voteDown(quote) {
        quote.rating--;
      }

      delete(quote) {
        this.deleteQuoteEvent.emit(quote);
      }

    }
