export class ListPokemonsResponse {
    public count: Number;
    public next: String;
    public previous: null;
    public results: ListPokemons[];
}

export class ListPokemons {
    public name: String;
    public url: String;
}