import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class PokemonService {

    public path = 'https://pokeapi.co/api/v2/';

    constructor(private _http: HttpClient){}

    

    getPokemon(pokemonName: string): Observable<any>{
        const url = this.path + 'pokemon/' + pokemonName;
        return this._http.get<any>(url);
    }
}