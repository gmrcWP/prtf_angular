import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Education } from './components/education/education';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Hero,
    About,
    Education,
    Skills,
    Projects,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Blog personal';
}
