import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { mapTo, delay, filter } from 'rxjs/operators';

export const epic = (action$:ActionsObservable<Action>) => action$.pipe(
    filter(action => action.type === 'Inc'),
    delay(1000), 
    mapTo({ type: 'Dec' })
  );