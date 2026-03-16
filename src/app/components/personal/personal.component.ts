import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_DATA } from '../../data/personal.data';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="personal" class="py-32 px-6 bg-white dark:bg-zinc-950">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="mb-20 text-center">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
            My Story & Passions
          </h2>
          <p class="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Beyond code — my journey, interests, achievements, and what drives me
          </p>
        </div>

        <!-- Journey Section -->
        <div class="mb-20 max-w-3xl mx-auto">
          <div class="flex items-center gap-3 mb-8">
            <lucide-icon name="sparkles" [size]="32" class="text-orange-500 dark:text-orange-400"></lucide-icon>
            <h3 class="text-3xl font-bold text-zinc-900 dark:text-white">My Journey</h3>
          </div>
          
          <div class="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-l-4 border-orange-500 rounded-lg p-8 leading-relaxed">
            <p class="text-lg text-zinc-700 dark:text-zinc-300">
              {{ personalData.journey }}
            </p>
          </div>
        </div>

        <!-- Interests & Hobbies -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <!-- Interests -->
          <div>
            <div class="flex items-center gap-3 mb-8">
              <lucide-icon name="heart" [size]="32" class="text-rose-500 dark:text-rose-400"></lucide-icon>
              <h3 class="text-2xl font-bold text-zinc-900 dark:text-white">Interests</h3>
            </div>
            
            <div class="flex flex-wrap gap-3">
              <span *ngFor="let interest of personalData.interests; let i = index"
                    [style.animation-delay]="(i * 50) + 'ms'"
                    class="animate-fade-in px-4 py-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full font-semibold text-sm hover:bg-rose-200 dark:hover:bg-rose-900/50 transition-all duration-300 transform hover:scale-105">
                {{ interest }}
              </span>
            </div>
          </div>

          <!-- Hobbies -->
          <div>
            <div class="flex items-center gap-3 mb-8">
              <lucide-icon name="zap" [size]="32" class="text-amber-500 dark:text-amber-400"></lucide-icon>
              <h3 class="text-2xl font-bold text-zinc-900 dark:text-white">Hobbies</h3>
            </div>
            
            <div class="flex flex-wrap gap-3">
              <span *ngFor="let hobby of personalData.hobbies; let i = index"
                    [style.animation-delay]="(i * 50) + 'ms'"
                    class="animate-fade-in px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full font-semibold text-sm hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-all duration-300 transform hover:scale-105">
                {{ hobby }}
              </span>
            </div>
          </div>
        </div>

        <!-- Achievements -->
        <div class="mb-20">
          <div class="flex items-center gap-3 mb-12">
            <lucide-icon name="users" [size]="32" class="text-indigo-600 dark:text-indigo-400"></lucide-icon>
            <h3 class="text-3xl font-bold text-zinc-900 dark:text-white">Achievements</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div *ngFor="let achievement of personalData.achievements; let i = index"
                 [style.animation-delay]="(i * 100) + 'ms'"
                 class="animate-fade-in-up group relative">
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 rounded-xl transition-all duration-300 blur-lg"></div>
              
              <div class="relative bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-6 transition-all duration-300 group-hover:shadow-lg group-hover:border-indigo-500/30 dark:group-hover:border-indigo-500/50">
                <div class="flex items-start gap-4">
                  <span *ngIf="achievement.icon" class="text-3xl flex-shrink-0 mt-1">
                    {{ achievement.icon }}
                  </span>
                  
                  <div class="flex-1">
                    <h4 class="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {{ achievement.title }}
                    </h4>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                      {{ achievement.description }}
                    </p>
                    <p *ngIf="achievement.date" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {{ achievement.date }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Languages -->
        <div>
          <div class="flex items-center gap-3 mb-8">
            <lucide-icon name="sparkles" [size]="32" class="text-cyan-600 dark:text-cyan-400"></lucide-icon>
            <h3 class="text-3xl font-bold text-zinc-900 dark:text-white">Languages</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div *ngFor="let language of personalData.languages; let i = index"
                 [style.animation-delay]="(i * 80) + 'ms'"
                 class="animate-fade-in">
              <div class="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-5">
                <div class="flex items-center justify-between mb-3">
                  <h4 class="font-bold text-zinc-900 dark:text-white">{{ language.name }}</h4>
                  <span class="text-xs font-semibold px-2.5 py-1 bg-cyan-600 dark:bg-cyan-700 text-white rounded-full">
                    {{ language.proficiency }}
                  </span>
                </div>
                
                <div class="w-full bg-slate-200 dark:bg-zinc-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                       [ngSwitch]="language.proficiency"
                       [style.width]="getProficiencyPercentage(language.proficiency)">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

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

    :host ::ng-deep .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }

    :host ::ng-deep .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `
})
export class PersonalComponent {
  personalData = PERSONAL_DATA.personalDetails;

  getProficiencyPercentage(proficiency: string): string {
    const percentages: { [key: string]: string } = {
      'Native': '100%',
      'Fluent': '90%',
      'Advanced': '75%',
      'Intermediate': '60%',
      'Basic': '40%'
    };
    return percentages[proficiency] || '50%';
  }
}
