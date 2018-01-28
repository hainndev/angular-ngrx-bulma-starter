import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../reducers';
import { Search } from '../actions'
import { Observable } from 'rxjs/Observable';

import { Book } from '../../../share/models'
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public books$: Observable<Book[]>;

  constructor(public store: Store<fromRoot.State>) {
    this.books$ = store.pipe(select(fromRoot.searchBooks)); 
   }

  ngOnInit() {
  }

  search($event):void {
    log("SEARCH BOOOKS GOOO: "+ $event);
    this.store.dispatch(new Search($event));
  }

}
