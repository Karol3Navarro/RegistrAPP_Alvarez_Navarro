import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
  username: string = 'guest';
  submenu: boolean = false;

  constructor(private router: Router) { 
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.username = state['user'];
    }
  }

  ngOnInit() {}

  openMenu() {
    const menu = document.querySelector('ion-menu');
    if (menu) {
      (menu as HTMLIonMenuElement).open();
    }
  }

  togglesubmenu() { 
    this.submenu = !this.submenu;
  }

  logout() {
    console.log('Cerrar sesión');
    this.router.navigate(['/login']); 
  }

  viewClasses() {
    console.log('Ver clases');
   
  }

  viewEvaluations() {
    console.log('Ver evaluaciones');
  
  }

  viewAttendance() {
    console.log('Ver asistencia');
  
  }

  viewReports() {
    console.log('Ver reportes');
   
  }
}
