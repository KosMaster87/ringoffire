import { Injectable } from '@angular/core';

/**
 * Es wird der @Injectable-Dekorator mit { providedIn: 'root' } verwendet, was bedeutet,
 * dass der Service im Root-Injector von Angular registriert wird und in
 * der gesamten Anwendung verfügbar ist.
 */
@Injectable({
  providedIn: 'root',
})
export class RingOfFireService {
  constructor() {}
}
