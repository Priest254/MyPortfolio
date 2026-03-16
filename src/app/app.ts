import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ProjectGridComponent } from './components/project-grid/project-grid.component';
import { ContactComponent } from './components/contact/contact.component';
import { AcademicComponent } from './components/academic/academic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    AcademicComponent,
    TechStackComponent,
    ProjectGridComponent,
    ContactComponent
  ],
  template: `
    <div class="min-h-screen bg-white dark:bg-zinc-950 scroll-smooth">
      <app-header></app-header>
      <main>
        <app-about></app-about>
        <app-tech-stack></app-tech-stack>
        <app-project-grid></app-project-grid>
        <app-academic></app-academic>
        <app-contact></app-contact>
      </main>
      <footer class="py-20 border-t border-zinc-100 dark:border-zinc-900 text-center text-zinc-400 text-sm">
        <p>© 2026 Allan Nickson. Built with Angular 19 & Tailwind CSS.</p>
      </footer>
    </div>
  `
})
export class AppComponent {}
