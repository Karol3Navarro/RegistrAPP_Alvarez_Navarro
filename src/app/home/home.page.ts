import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  login() {
    // Aquí puedes manejar la lógica para redirigir al login o hacer cualquier acción
    console.log('Navegar al login');
    this.router.navigate(['/login']);
  }
}
