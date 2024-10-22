import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresenteprofeService } from '../services/presenteprofe.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {
  curso: any;  // Aquí almacenaremos el curso cargado
  selectedSegment: string = 'mi-espacio';  // Segmento por defecto

  constructor(private route: ActivatedRoute, private presenteprofeService: PresenteprofeService) {}

  ngOnInit() {
    const cursoId = this.route.snapshot.queryParams['id']; // Obtener el ID del curso de los parámetros de la ruta
    if (cursoId) {
      this.cargarCursoPorId(cursoId);
    }
  }

  cargarCursoPorId(cursoId: string) {
    this.presenteprofeService.getCursoById(cursoId).subscribe(
      (response) => {
        console.log('Respuesta de la API:', response); // Para depuración
        this.curso = response.data ? response.data : response; // Ajustar según la estructura de la API
      },
      (error) => {
        console.error('Error al cargar el curso', error);
      }
    );
  }

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;  // Actualiza el segmento seleccionado
  }
}
