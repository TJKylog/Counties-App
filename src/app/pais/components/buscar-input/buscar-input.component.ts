import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-buscar-input',
  templateUrl: './buscar-input.component.html',
  styleUrls: ['./buscar-input.component.scss']
})
export class BuscarInputComponent implements OnInit {

  termino: string = '';

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input () placeholder: string = '';

  dbouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.dbouncer.pipe(
      debounceTime(300)
    ).subscribe( valor => {
      this.onDebounce.emit(valor);
    })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.dbouncer.next(this.termino);
  }
}
