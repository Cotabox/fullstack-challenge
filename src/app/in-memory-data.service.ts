import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

/* ORIGINAL CODE

    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

*/

/* FUTURE CODE, WITH NEW VARS

const heroes = [
{
id: 1,
name: 'Carlos',
employee-last-name: 'Moura',
percentual-participation: 5
},
{
id: 2,
name: 'Fernanda',
employee-last-name: 'Oliveira',
percentual-participation: 15
},
{
id: 3,
name: 'Hugo',
employee-last-name: 'Silva',
percentual-participation: 20
},
{
id: 4,
name: 'Eliza',
employee-last-name": 'Souza',
percentual-participation": 20
},
{
id: 5,
name: 'Anderson',
employee-last-name: 'Santos',
percentual-participation: 40
},
];

*/



const heroes = [
  { id: 1, firstName: 'Carlos', },
  { id: 2, firstName: 'Fernanda' },
  { id: 3, firstName: 'Hugo' },
  { id: 4, firstName: 'Eliza' },
  { id: 5, firstName: 'Anderson' },
];




/*
    const heroes = [
  { id: 1, firstName: 'Carlos', lastName: 'Moura', participation: 5 },
  { id: 2, firstName: 'Fernanda' lastName: 'Oliveira', participation: 15 },
  { id: 3, firstName: 'Hugo' lastName: 'Silva', participation: 20 },
  { id: 4, firstName: 'Eliza' lastName: 'Souza', participation: 20 },
  { id: 5, firstName: 'Anderson' lastName: 'Santos', participation: 40 },
];
*/



    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
