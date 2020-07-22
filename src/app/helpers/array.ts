import { User } from '../user';

export function SortUserByName(a: User, b: User) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.firstName.toUpperCase();
    const bandB = b.firstName.toUpperCase();
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }