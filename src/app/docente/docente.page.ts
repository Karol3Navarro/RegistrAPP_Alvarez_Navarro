import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
  username: string = '';
  submenu: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit():void {
    this.route.queryParams.subscribe(params=>{
       this.username = params['nombre']||'No existe';
    })
  }

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
