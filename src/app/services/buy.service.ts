import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Card} from "../models/Card";
import 'rxjs/add/observable/of';
import {Message} from "../models/Message";

@Injectable()
export class BuyService {
  constructor() { }
  buyAttempt(card: Card): Observable<Message> {
    if (card.cvv === 123) {
      return Observable.of({type: 'error', text: 'Something went wrong'});
    } else {
      return Observable.of({type: 'success', text: 'Item have been purchased'});
    }
  }
}
