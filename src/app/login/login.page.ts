import { Component, OnInit } from '@angular/core';
import { NavigationExtras} from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public username: string;
  public password: any;

  constructor(private navCtrl: NavController, private router: Router) { 
    this.username='';
    this.password='';
  }

  login(){
    if (this.username=="Docente"&& this.password=="12345"){
      this.navCtrl.navigateForward(['/docente'], {queryParams: {nombre: 'Docente'}})
    } if (this.username=="Alumno"&& this.password=="12345"){
      let extras: NavigationExtras = {
        state: { user: this.username }
      }
      this.router.navigate(['/alumno'], extras);
    }else{
      alert('Error')
    }
  }

  ngOnInit() {
  }

}
