import { Component, Input } from '@angular/core';
import { PokemonService } from '../services/pokemonService';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  @Input() pokemonName: string;
  public pokemon: any = [];
  public showDiv: boolean = false;

  constructor(private _pokemonService: PokemonService) {
    this.pokemonName = '';
  }

  getPokemon() {
    if(this.pokemonName != '' ){
      this._pokemonService.getPokemon(this.pokemonName).subscribe(pokemonFromAPI => { this.pokemon = pokemonFromAPI; }, (err: any) => { console.log(err); });
      this.toggleDiv();
    } else {
      alert('Por favor ingresar un nombre valido');
    }
  }

  toggleDiv(): void {
    this.showDiv = !this.showDiv;
  }
}
