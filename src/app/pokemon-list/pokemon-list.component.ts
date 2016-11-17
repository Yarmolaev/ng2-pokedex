import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../shared/services/pokemon.service';
import {PokemonEntry} from '../shared/models/pokemon-entry';

@Component({
  providers: [PokemonService],
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonEntry[];
  count: number = 0;
  offset: number = 0;
  limit: number = 20;

  constructor(private _service: PokemonService) { }

  ngOnInit() {
    this.findAll(this.offset, this.limit);
  }

  findAll(offset: number, limit: number) {
    this.pokemons = [];
    this._service.findAll(offset, limit).subscribe(result => {
      this.pokemons = result.pokemons;
      this.count = result.count;
    });
  }

  onPageChange() {
    console.log('changed page');
  }
}
