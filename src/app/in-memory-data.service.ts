import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { User } from "./user";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, firstName: "Carlos", lastName: "Moura", participation: 10 },
      { id: 2, firstName: "Fernanda", lastName: "Brasil", participation: 10 },
      { id: 3, firstName: "Hugo", lastName: "Santos", participation: 10 },
      { id: 4, firstName: "Eliza", lastName: "Oliveira", participation: 10 },
      { id: 5, firstName: "Anderson", lastName: "Silva", participation: 10 },
    ];

    return { users };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the users array is empty,
  // the method below returns the initial number (11).
  // if the users array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0
      ? Math.max(...users.map((hero) => hero.id)) + 1
      : 11;
  }
}
