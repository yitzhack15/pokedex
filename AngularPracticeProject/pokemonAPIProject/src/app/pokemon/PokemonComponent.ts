import { Component, Input } from '@angular/core';
import { PokemonService } from '../services/pokemonService';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  @Input() pokemonName: string;
  pkn: string = '';
  public pokemon: any = [];

  constructor(private _pokemonService: PokemonService) {
    this.pokemonName = '';
  }

  getPokemon() {
    if(this.pokemonName != '' ){
      this.pkn = this.pokemonName.toLowerCase();
      console.log(this.pkn);
      this._pokemonService.getPokemon(this.pkn).subscribe(pokemonFromAPI => { this.pokemon = pokemonFromAPI; }, (err: any) => { alert('Por favor ingrese un nombre valido.') });
    } else {
      alert('Por favor ingresar un nombre valido');
    }
  }

}
