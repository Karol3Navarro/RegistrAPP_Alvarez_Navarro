import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  Correo: string='';
  constructor(private router: Router) {}
  goToHome(){
    console.log('click');
    
    this.router.navigate(['/'])
  }

  ngOnInit() {
  }

}
//Revisar. Boton de alerta
export class ExampleComponent {
  alertButtons = ['Action'];
}