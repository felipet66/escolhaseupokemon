import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../shared/services/pokemons.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ListPokemonsResponse, ListPokemons } from '../shared/models/list-pokemons.model';
import { Pokemon } from '../shared/models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PokemonsService]
})
export class HomeComponent implements OnInit {
  private listPokemons: ListPokemonsResponse[] = [];
  private pokemonSelected: Pokemon[] = [];
  private loader = false;
  constructor(
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit () {
    this.getPokemons();
  }
  getPokemons () {
    this.pokemonsService
      .getListPokemons()
      .subscribe(
        (res: ListPokemonsResponse[]) => {
          this.listPokemons = res;
        },
        (error: HttpErrorResponse) => {
          this.handleError(error);
        }
      );
  }
  activeLoader (res) {
    this.loader = res;
  }
  responsePokemon (res: any) {
    this.pokemonSelected = res;
  }
  handleError (error: HttpErrorResponse): void {
    console.error(error)
  }
}
