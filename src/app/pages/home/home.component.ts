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
  private pokemonSelected: any = [];
  constructor(
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit() {
    this.pokemonsService
      .getListPokemons()
      .subscribe(
        (res: ListPokemonsResponse[]) => {
          this.listPokemons = res;
        },
        (error: HttpErrorResponse) => {
          this.handleError(error);
        }
      )
  }
  sendRequest (name: String) {
    this.pokemonsService
      .getPokemonId(name)
      .subscribe(
        (res: Pokemon[]) => {
          console.log(res)
          this.pokemonSelected = res
        },
        (error: HttpErrorResponse) => {
          this.handleError(error);
        }
      )
  }
  handleError(error: HttpErrorResponse): void {
    console.error(error)
  }
}
