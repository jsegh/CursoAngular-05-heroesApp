import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 50px;

    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe ;

  constructor(private activatedRoute:ActivatedRoute, private heroesService: HeroesService, private router: Router) {
   }

  ngOnInit(): void {
    //id del heroe y a consola
   this.activatedRoute.params
   .pipe(switchMap(({id})=>this.heroesService.getHeroePorId(id))).
   subscribe(heroe=>this.heroe = heroe);
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }
}
