import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  nombre: string='';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.route.queryParams.subscribe(params =>{
      this.nombre = params['nombre']||'No existe';
    })
  }
}
