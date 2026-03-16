import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACADEMIC_DATA } from '../../data/academic.data';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="education" class="py-32 px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-800">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="mb-20 text-center">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
            Education & Learning
          </h2>
          <p class="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Continuous learning and academic excellence shaping my career path
          </p>
        </div>

        <!-- Degrees Section -->
        <div class="mb-20">
          <div class="flex items-center gap-3 mb-12">
            <lucide-icon name="graduation-cap" [size]="32" class="text-purple-600 dark:text-purple-400"></lucide-icon>
            <h3 class="text-3xl font-bold text-zinc-900 dark:text-white">Degrees</h3>
          </div>

          <div class="space-y-6">
            <div *ngFor="let degree of degrees; let i = index" 
                 [ngClass]="'animate-fade-in-up'"
                 [style.animation-delay]="(i * 100) + 'ms'"
                 class="group relative">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-purple-500/10 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300 blur-lg"></div>
              
              <div class="relative bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-2xl p-8 transition-all duration-300 group-hover:shadow-lg group-hover:border-purple-500/30 dark:group-hover:border-purple-500/50">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h4 class="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                      {{ degree.degree }} in {{ degree.field }}
                    </h4>
                    <p class="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                      {{ degree.institution }}
                    </p>
                  </div>
                  <div class="flex flex-col items-start md:items-end gap-2">
                    <span class="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
                      {{ degree.graduationDate }}
                    </span>
                    <span *ngIf="degree.gpa" class="text-sm text-zinc-600 dark:text-zinc-400">
                      GPA: {{ degree.gpa }}
                    </span>
                  </div>
                </div>
                
                <div *ngIf="degree.specialization" class="mt-4 pt-4 border-t border-slate-200 dark:border-zinc-700">
                  <p class="text-zinc-700 dark:text-zinc-300">
                    <span class="font-semibold text-zinc-900 dark:text-white">Specialization:</span> {{ degree.specialization }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Courses Section -->
        <div>
          <div class="flex items-center gap-3 mb-12">
            <lucide-icon name="book-open" [size]="32" class="text-teal-600 dark:text-teal-400"></lucide-icon>
            <h3 class="text-3xl font-bold text-zinc-900 dark:text-white">Certifications & Courses</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div *ngFor="let course of courses; let i = index"
                 [ngClass]="'animate-fade-in-up'"
                 [style.animation-delay]="(i * 80 + 200) + 'ms'"
                 class="group">
              <div class="h-full bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-2 border-teal-200 dark:border-teal-800 rounded-xl p-6 transition-all duration-300 hover:border-teal-400 dark:hover:border-teal-600 hover:shadow-lg">
                <div class="flex items-start justify-between gap-3 mb-3">
                  <h4 class="text-lg font-bold text-zinc-900 dark:text-white flex-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {{ course.name }}
                  </h4>
                  <lucide-icon name="book-open" [size]="20" class="text-teal-600 dark:text-teal-400 flex-shrink-0" />
                </div>
                
                <div class="space-y-2">
                  <p *ngIf="course.provider" class="text-sm text-zinc-600 dark:text-zinc-400">
                    Provider: <span class="font-semibold text-zinc-900 dark:text-white">{{ course.provider }}</span>
                  </p>
                  <p class="text-sm text-zinc-600 dark:text-zinc-400">
                    Completed: <span class="font-semibold text-zinc-900 dark:text-white">{{ course.completionDate }}</span>
                  </p>
                </div>

                <a *ngIf="course.credentialUrl"
                   [href]="course.credentialUrl"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="inline-block mt-4 px-4 py-2 bg-teal-600 dark:bg-teal-700 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors">
                  View Credential
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    :host ::ng-deep .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `
})
export class AcademicComponent {
  degrees = ACADEMIC_DATA.degrees;
  courses = ACADEMIC_DATA.courses;
}
