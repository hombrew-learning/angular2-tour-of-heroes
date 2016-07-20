import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../data/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
  getHero(id: number) {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}
