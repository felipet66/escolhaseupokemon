  
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListPokemonsResponse } from '../models/list-pokemons.model';
import { Injectable } from '@angular/core';
import { URL_API } from '../config/api';

@Injectable()
export class PokemonsService {
  constructor(private httpc: HttpClient) {}

  public getListPokemons(): Observable<ListPokemonsResponse[]> {
      return this.httpc.get<ListPokemonsResponse[]>(
        `${URL_API}pokemon/`
      );
  }
}