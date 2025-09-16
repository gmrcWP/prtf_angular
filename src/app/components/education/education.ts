import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  educationList = [
    {
      degree: 'Técnico Superior en Sistemas Informáticos',
      institution: 'Instituto Técnico Jesus María',
      //description: 'Focused on software engineering, data structures, algorithms, and web development. Graduated with honors and participated in various coding competitions.',
      period: '2020 - 2023'
    },
    {
      degree: 'Curso de fullstack',
      institution: 'Fullstack Open | Universidad de Helsinki',
      //description: 'Intensive 6-month program covering modern web development technologies including React, Node.js, MongoDB, and deployment strategies.',
      period: '2024'
    },
  ];
}
