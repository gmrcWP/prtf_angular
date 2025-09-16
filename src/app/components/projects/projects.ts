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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: 'assets/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/yourusername/ecommerce'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'assets/project2.jpg',
      technologies: ['React', 'Laravel', 'MySQL', 'Socket.io'],
      liveUrl: 'https://example-taskmanager.com',
      githubUrl: 'https://github.com/yourusername/taskmanager'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts and interactive charts.',
      image: 'assets/project3.jpg',
      technologies: ['Vue.js', 'Chart.js', 'Weather API', 'CSS3'],
      liveUrl: 'https://example-weather.com',
      githubUrl: 'https://github.com/yourusername/weather-dashboard'
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting features.',
      image: 'assets/project4.jpg',
      technologies: ['Angular', 'TypeScript', 'D3.js', 'Firebase'],
      liveUrl: 'https://example-analytics.com',
      githubUrl: 'https://github.com/yourusername/social-analytics'
    },
    {
      title: 'Restaurant Booking System',
      description: 'Online reservation system for restaurants with table management and customer notifications.',
      image: 'assets/project5.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Twilio'],
      liveUrl: 'https://example-booking.com',
      githubUrl: 'https://github.com/yourusername/restaurant-booking'
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course management, progress tracking, and interactive quizzes.',
      image: 'assets/project6.jpg',
      technologies: ['Angular', 'Laravel', 'MySQL', 'WebRTC'],
      liveUrl: 'https://example-lms.com',
      githubUrl: 'https://github.com/yourusername/lms'
    }
  ];
}
