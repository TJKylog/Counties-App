import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent {
  constructor( private paisService: PaisService ) { }

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  

  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital( this.termino ).subscribe( {
      next: (resp) => {
        console.log(resp);
        this.paises = resp;
      },
      error: (err) => {
        this.hayError = true;
        console.info(err);
        this.paises = [];
      }
    });
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital( this.termino ).subscribe( {
      next: (resp) => {
        console.log(resp);
        this.paises = resp;
      },
      error: (err) => {
        this.hayError = true;
        console.info(err);
        this.paises = [];
      }
    });
  }
}
