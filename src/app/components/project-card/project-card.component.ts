import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.interface';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="group relative flex flex-col h-full bg-white dark:bg-zinc-900 rounded-[2rem] border border-zinc-200/60 dark:border-zinc-800/60 overflow-hidden hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-2 transition-all duration-500">
      <div class="aspect-[16/10] w-full overflow-hidden relative">
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img [src]="project.imageUrl" [alt]="project.title" class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute top-4 left-4 z-20">
          <span class="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-white rounded-full backdrop-blur-md shadow-sm">
            {{ project.category }}
          </span>
        </div>
      </div>
      
      <div class="p-8 flex flex-col flex-1">
        <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
          {{ project.title }}
        </h3>
        <p class="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 text-[15px]">
          {{ project.description }}
        </p>
        
        <div class="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div class="flex gap-3">
            @for (tag of project.tags; track tag) {
              <span class="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter">
                {{ tag }}
              </span>
            }
          </div>
          
          <div class="flex items-center gap-3">
            @if (project.links.github) {
              <a [href]="project.links.github" target="_blank" class="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all">
                <lucide-icon name="github" [size]="20"></lucide-icon>
              </a>
            }
            @if (project.links.demo) {
              <a [href]="project.links.demo" target="_blank" class="p-2 text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950 rounded-xl transition-all">
                <lucide-icon name="external-link" [size]="20"></lucide-icon>
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
