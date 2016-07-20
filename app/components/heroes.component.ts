import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/components-html/heroes.component.html',
  styleUrls: ['app/components-css/heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;
  
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    let link = ['/detail', this.selectedHero.id];
    this.router.navigate(link);
  }

  ngOnInit() { this.getHeroes(); }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
