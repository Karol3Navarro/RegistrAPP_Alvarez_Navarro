import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresenteprofeService } from '../services/presenteprofe.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {
  curso: any;

  constructor(private route: ActivatedRoute, private presenteprofeService: PresenteprofeService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const cursoId = params['id'];
      if (cursoId) {
        this.cargarCursoPorId(cursoId);
      }
    });
  }
  cargarCursoPorId(cursoId: string) {
    this.presenteprofeService.getCursoById(cursoId).subscribe(
      (response) => {
        console.log('Respuesta de la API:', response); // Verifica la respuesta de la API
        this.curso = response.data; // Asignar los datos del curso
        console.log(this.curso); // Para verificar que los datos se cargan correctamente
      },
      (error) => {
        console.error('Error al cargar el curso', error);
      }
    );
  }
  
}
