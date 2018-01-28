import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Book } from './../../../share/models';

@Injectable()
export class BookService {
    
    private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

    constructor(private http: HttpClient) {}

    searchBooks(queryTitle: String): Observable<Book[]> {
        return this.http.get<{ items: Book[] }>(`${this.API_PATH}?q=${queryTitle}`)
        .pipe(map(books => books.items || []));
    }
}