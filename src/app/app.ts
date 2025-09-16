import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Hero,
    About,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Blog personal';
}
