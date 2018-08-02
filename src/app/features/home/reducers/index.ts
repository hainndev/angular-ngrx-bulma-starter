import { ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import * as fromBook from './book.reducer';
import { State } from './book.reducer';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../../../environments/environment';

export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}


export const reducers: ActionReducerMap<any> = {
    book: fromBook.reducer
};


export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [logger];
