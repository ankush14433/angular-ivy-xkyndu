import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Living Room', url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3oPu-QHujuve5VqM_uaWTMiAjPZxrFGXjAA&usqp=CAU" },
      { id: 2, name: 'Drawing Room' ,url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-decor-dumais-sterlingmason-219-1584109349.jpg?crop=0.889xw:1.00xh;0,0&resize=480:*" },
      { id: 3, name: 'Guest Room',url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-decor-dumais-sterlingmason-219-1584109349.jpg?crop=0.889xw:1.00xh;0,0&resize=480:*"  },
      { id: 4, name: 'Master Bedroom',url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-decor-dumais-sterlingmason-219-1584109349.jpg?crop=0.889xw:1.00xh;0,0&resize=480:*"  },
      { id: 5, name: 'Play Room',url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-decor-dumais-sterlingmason-219-1584109349.jpg?crop=0.889xw:1.00xh;0,0&resize=480:*"  },
      { id: 6, name: 'Home theatre',url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-decor-dumais-sterlingmason-219-1584109349.jpg?crop=0.889xw:1.00xh;0,0&resize=480:*"  },
      { id: 7, name: 'Dining Hall',url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-decor-dumais-sterlingmason-219-1584109349.jpg?crop=0.889xw:1.00xh;0,0&resize=480:*"  },
      { id: 8, name: 'Kitchen',url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-decor-dumais-sterlingmason-219-1584109349.jpg?crop=0.889xw:1.00xh;0,0&resize=480:*"  },
      { id: 9, name: 'Play Area',url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-decor-dumais-sterlingmason-219-1584109349.jpg?crop=0.889xw:1.00xh;0,0&resize=480:*"  },
      { id: 10, name: 'Entrance',url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-decor-dumais-sterlingmason-219-1584109349.jpg?crop=0.889xw:1.00xh;0,0&resize=480:*"  }
    ];
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