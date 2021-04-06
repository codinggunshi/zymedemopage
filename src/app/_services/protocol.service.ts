import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {
  public productAdded = new Subject();

  constructor() { }
}
