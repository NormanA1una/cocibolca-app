import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-cocibolca-app',
  templateUrl: './header-cocibolca-app.component.html',
  styleUrls: ['./header-cocibolca-app.component.css'],
})
export class HeaderCocibolcaAppComponent {
  title = 'cocibolca-app';

  @Output()
  tarjetaGenerada = new EventEmitter<void>();

  generarTarjeta() {
    this.tarjetaGenerada.emit();
  }
}
