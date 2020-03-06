import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { HttpErrorResponse } from '@angular/common/http';
import { PokemonsService } from '../../../shared/services/pokemons.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent {
  @Input() pokemon: any;
  @Output() responsePokemon = new EventEmitter();
  @Output() activeLoader = new EventEmitter();
  constructor(
    private pokemonsService: PokemonsService
  ) { }

  sendRequest (pokemon: any) {
    this.pokemonsService
      .getPokemonId(pokemon)
      .subscribe(
        (res: Pokemon[]) => {
          this.activeLoader.emit(true);
          setTimeout(() => {
            this.responsePokemon.emit(res);
            this.activeLoader.emit(false);
          }, 1500);
        },
        (error: HttpErrorResponse) => {
          this.handleError(error);
        }
      )
  }
  handleError(error: HttpErrorResponse): void {
    console.error(error);
  }
}
