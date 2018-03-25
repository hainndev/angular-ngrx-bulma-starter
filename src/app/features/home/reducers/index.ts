import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';

export const reducers = {
    book: fromBook.reducer
};
