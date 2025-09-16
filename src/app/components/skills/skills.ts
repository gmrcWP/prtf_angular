import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills = [
    {
      name: 'HTML5',
      level: '80',
      icon: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`,
      color: '#f97316',
    },
    {
      name: 'CSS3',
      level: '70',
      icon: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg`,
      color: '#3b82f6',
    },
    {
      name: 'JavaScript',
      level: '85',
      icon: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`,
      color: '#eab308',
    },
    {
      name: 'TypeScript',
      level: '65',
      icon: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg`,
      color: '#2563eb',
    },
    {
      name: 'React',
      level: '60',
      icon: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`,
      color: '#06b6d4',
    },
    {
      name: 'Node.js',
      level: '50',
      icon: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg`,
      color: '#16a34a',
    },
    {
      name: 'Laravel',
      level: '80',
      icon: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg`,
      color: '#dc2626',
    }
  ];

  // Handle card hover for dynamic border color
  onCardHover(event: any, color: string) {
    const card = event.target.closest('.skill-card');
    if (card) {
      card.style.borderColor = color;
    }
  }

  // Handle card leave to reset border
  onCardLeave(event: any) {
    const card = event.target.closest('.skill-card');
    if (card) {
      card.style.borderColor = '#e5e7eb'; // gray-200
    }
  }
}
