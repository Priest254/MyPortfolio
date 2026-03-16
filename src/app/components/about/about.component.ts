import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_DATA } from '../../data/personal.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="relative pt-32 pb-24 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-purple-50 via-transparent to-transparent -z-10 dark:from-purple-950/30 dark:via-transparent"></div>
      
      <div class="container mx-auto px-6">
        <!-- Hero Section -->
        <div class="max-w-4xl mx-auto mb-20">
          <div class="flex flex-col md:flex-row-reverse items-center gap-12">
            <div class="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 shrink-0">
              <div class="absolute inset-0 bg-gradient-to-tr from-purple-400 to-teal-500 rounded-[3rem] rotate-6 opacity-30 animate-pulse blur-lg"></div>
              <div class="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-[3rem] overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/30">
                <img src="AN.jpeg" alt="Allan Nickson" class="w-full h-full object-cover" />
              </div>
            </div>

            <div class="flex-1 text-center md:text-left">
              <span class="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-purple-100 to-teal-100 dark:from-purple-900/40 dark:to-teal-900/40 text-purple-700 dark:text-purple-300 rounded-full">
                Geospatial Engineer & Full Stack Developer
              </span>
              <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 md:mb-8 leading-[1.1]">
                Bridging the gap between <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600 dark:from-purple-400 dark:to-teal-400">code</span> and <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 dark:from-orange-400 dark:to-rose-400">coordinates</span>.
              </h2>
              <p class="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 md:mb-10 max-w-2xl">
                I build high-performance web systems and spatial analysis tools that turn complex data into actionable insights for geospatial and enterprise integrations.
              </p>
              
              <div class="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                <button (click)="scrollTo('projects')" class="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-teal-600 text-white rounded-2xl font-bold shadow-xl shadow-purple-600/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg cursor-pointer hover:shadow-purple-600/50 active:scale-95" type="button">
                  View Projects
                </button>
                <button (click)="scrollTo('contact')" class="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-white text-zinc-900 border-2 border-purple-600 dark:bg-zinc-900 dark:text-white dark:border-teal-600 rounded-2xl font-bold hover:bg-purple-50 dark:hover:bg-zinc-800 transition-all duration-300 cursor-pointer active:scale-95" type="button">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Journey Section -->
        <div class="max-w-3xl mx-auto mb-20">
          <h3 class="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tight">My Journey</h3>
          <div class="bg-gradient-to-r from-purple-50 to-teal-50 dark:from-purple-900/20 dark:to-teal-900/20 border-l-4 border-purple-600 rounded-lg p-8 leading-relaxed">
            <p class="text-base sm:text-lg text-zinc-700 dark:text-zinc-300">
              {{ personalData.personalDetails.journey }}
            </p>
          </div>
        </div>

        <!-- Interests & Languages -->
        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <!-- Interests & Hobbies -->
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">Interests & Passions</h3>
            <div class="flex flex-wrap gap-3">
              <span *ngFor="let interest of personalData.personalDetails.interests"
                    class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold text-sm hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-300 transform hover:scale-105">
                {{ interest }}
              </span>
            </div>
            <div class="mt-8">
              <h4 class="text-lg font-bold text-zinc-900 dark:text-white mb-4">Hobbies</h4>
              <div class="space-y-2">
                <div *ngFor="let hobby of personalData.personalDetails.hobbies"
                     class="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg font-semibold text-sm">
                  {{ hobby }}
                </div>
              </div>
            </div>
          </div>

          <!-- Languages -->
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">Languages & Skills</h3>
            <div class="space-y-4">
              <div *ngFor="let lang of personalData.personalDetails.languages">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-semibold text-zinc-900 dark:text-white">{{ lang.name }}</span>
                  <span class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">{{ lang.proficiency }}</span>
                </div>
                <div class="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    [ngSwitch]="lang.proficiency"
                    [class]="'h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-500 ' + 
                             ('Native' === lang.proficiency ? 'w-full' :
                              'Fluent' === lang.proficiency ? 'w-5/6' :
                              'Advanced' === lang.proficiency ? 'w-4/5' : 'w-2/5')">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  personalData = PERSONAL_DATA;

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
