import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
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
}
