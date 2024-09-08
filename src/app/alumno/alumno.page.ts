import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  username: string = 'guest';

  constructor(private router: Router) { 
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.username = state['user'];
    } 
  }

  ngOnInit() {
  }
  openMenu() {
    const menu = document.querySelector('ion-menu');
    if (menu) {
      (menu as HTMLIonMenuElement).open();
    }
  }

  logout() {
    console.log('Cerrar sesión');
    this.router.navigate(['/login']); 
  }
}