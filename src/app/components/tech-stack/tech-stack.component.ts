import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="tech" class="py-32 bg-white dark:bg-zinc-950">
      <div class="container mx-auto px-6">
        <div class="flex flex-col items-center mb-20 text-center">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">Technical Prowess</h2>
          <div class="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-purple-600 via-teal-600 to-orange-600 rounded-full"></div>
          <p class="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-xl">
            A curated set of technologies and methodologies I've mastered to deliver accurate solutions.
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          @for (tech of techStack; track tech.name; let i = $index) {
            <div class="group flex flex-col items-center p-4 md:p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-900/40 dark:to-zinc-900/20 rounded-[2.5rem] border border-slate-200/50 dark:border-zinc-800/50 hover:border-purple-500/30 hover:bg-white dark:hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 text-center animate-fade-in-up"
                 [style.animation-delay]="(i * 50) + 'ms'">
              <div class="w-16 md:w-20 h-16 md:h-20 mb-4 md:mb-6 flex items-center justify-center bg-gradient-to-br from-white to-slate-100 dark:from-zinc-800 dark:to-zinc-900 rounded-3xl shadow-sm group-hover:shadow-lg transition-all duration-500"
                   [class.group-hover:from-purple-600]="tech.colorClass === 'purple'"
                   [class.group-hover:to-purple-700]="tech.colorClass === 'purple'"
                   [class.group-hover:from-teal-600]="tech.colorClass === 'teal'"
                   [class.group-hover:to-teal-700]="tech.colorClass === 'teal'"
                   [class.group-hover:from-orange-600]="tech.colorClass === 'orange'"
                   [class.group-hover:to-orange-700]="tech.colorClass === 'orange'"
                   [class.group-hover:text-white]="tech.colorClass === 'purple' || tech.colorClass === 'teal' || tech.colorClass === 'orange'"
              >
                <lucide-icon [name]="tech.icon" [size]="28" [ngClass]="'md:w-9 md:h-9'" strokeWidth="1.5"></lucide-icon>
              </div>
              <h3 class="text-base md:text-lg font-bold text-zinc-900 dark:text-white mb-1 md:mb-2">{{ tech.name }}</h3>
              <p class="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{{ tech.level }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class TechStackComponent {
  techStack = [
    { name: 'Angular', icon: 'code', level: 'Advanced', colorClass: 'purple' },
    { name: 'NodeJs', icon: 'code', level: 'Advanced', colorClass: 'purple' },
    { name: 'GIS Software', icon: 'map', level: 'Advanced', colorClass: 'teal' },
    { name: 'AutoCAD Civil 3D', icon: 'map', level: 'Advanced', colorClass: 'teal' },
    { name: 'Python', icon: 'cpu', level: 'Pro', colorClass: 'orange' },
    { name: 'Firebase', icon: 'database', level: 'Expert', colorClass: 'purple' },
    { name: 'PostgreSQL, PostGIS', icon: 'database', level: 'Expert', colorClass: 'purple' },
    { name: 'TypeScript', icon: 'globe', level: 'Expert', colorClass: 'teal' },
    { name: 'JavaScript, HTML, CSS', icon: 'layers', level: 'Advanced', colorClass: 'orange' }
  ];
}
