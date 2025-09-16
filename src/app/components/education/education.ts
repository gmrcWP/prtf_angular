import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  educationList = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      description: 'Focused on software engineering, data structures, algorithms, and web development. Graduated with honors and participated in various coding competitions.',
      period: '2018 - 2022'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Code Academy',
      description: 'Intensive 6-month program covering modern web development technologies including React, Node.js, MongoDB, and deployment strategies.',
      period: '2022'
    },
    {
      degree: 'High School Diploma',
      institution: 'Central High School',
      description: 'Completed with distinction in Mathematics and Computer Science. Active member of the programming club and robotics team.',
      period: '2014 - 2018'
    }
  ];
}
