import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectCategory } from '../../models/project.interface';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section id="projects" class="py-32 bg-gradient-to-b from-slate-50 to-white dark:from-zinc-950/50 dark:to-zinc-950">
      <div class="container mx-auto px-6">
        <div class="flex flex-col gap-8 mb-16">
          <div class="max-w-2xl">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">Selected Works</h2>
            <p class="text-sm sm:text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
              A deep dive into my recent engineering projects, ranging from spatial analysis to scalable web systems.
            </p>
          </div>
          
          <nav class="flex flex-wrap items-center justify-start md:justify-center gap-1.5 md:gap-2 p-1.5 bg-white dark:bg-zinc-900 rounded-[2rem] border border-slate-200 dark:border-zinc-800 shadow-sm pointer-events-auto">
            @for (cat of categories; track cat; let i = $index) {
              <button 
                (click)="service.setCategory(cat)"
                type="button"
                [class]="'px-3 md:px-5 py-1.5 md:py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-full cursor-pointer whitespace-nowrap ' + 
                         (service.selectedCategory() === cat 
                          ? 'bg-gradient-to-r from-purple-600 to-teal-600 text-white shadow-lg shadow-purple-600/30' 
                          : 'text-zinc-500 hover:text-zinc-900 hover:bg-slate-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800')"
                [style.animation-delay]="(i * 50) + 'ms'"
                class="animate-fade-in"
              >
                {{ cat }}
              </button>
            }
          </nav>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          @for (project of service.filteredProjects(); track project.id; let i = $index) {
            <app-project-card 
              [project]="project"
              [style.animation-delay]="(i * 100) + 'ms'"
              class="h-full animate-fade-in-up"
            ></app-project-card>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectGridComponent {
  service = inject(ProjectService);
  categories: (ProjectCategory | 'All')[] = ['All', 'GIS and Remote sensing', 'Cartography and Physical Planning', 'Web development', 'App development'];
}
