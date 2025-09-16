import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      title: 'App de Contratos para Pastelería',
      description: 'Aplicación para registrar pedidos de pasteles, asignar roles (vendedor, pastelero, admin) y administrar entregas.',
      technologies: ['React Native', 'SupaBase', 'Nativewind'],
    },

  ];
}
