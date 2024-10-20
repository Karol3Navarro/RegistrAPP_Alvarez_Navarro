import { Component, OnInit } from '@angular/core';
import { PresenteprofeService } from '../services/presenteprofe.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos: any[] = [];  // Aquí se guardarán los cursos obtenidos
  usuario: string = 'profesor@presenteprofe.cl';  // Aquí puedes definir el usuario que desees

  constructor(private presenteprofeService: PresenteprofeService) {}

  ngOnInit() {
    this.cargarCursos();  // Cargar los cursos al iniciar el componente
  }

  cargarCursos() {
    this.presenteprofeService.getCursos(this.usuario).subscribe(
      (response) => {
        this.cursos = response.cursos;  // Asignamos los cursos obtenidos a la variable 'cursos'
        console.log(this.cursos);  // Muestra los cursos en la consola
      },
      (error) => {
        console.error('Error al cargar los cursos', error);
      }
    );
  }

  ingresarCurso(cursoId: string) {
    console.log('Ingresando al curso con ID:', cursoId);
    // Lógica adicional para ingresar al curso
  }
}
