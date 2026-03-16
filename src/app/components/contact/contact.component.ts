import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { PERSONAL_DATA } from '../../data/personal.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="contact" class="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-zinc-950 dark:to-zinc-900/50">
      <div class="container mx-auto px-6">
        <div class="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div class="flex-1">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">Let's Connect</h2>
            <p class="text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities in software engineering and geospatial analysis.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-center gap-4 group">
                <div class="w-12 h-12 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-2xl border border-slate-200 dark:border-zinc-700 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-teal-600 group-hover:text-white transition-all duration-300">
                  <lucide-icon name="mail" [size]="20"></lucide-icon>
                </div>
                <div>
                  <p class="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email Me</p>
                  <a [href]="'mailto:' + data.email" class="text-zinc-900 dark:text-white font-bold hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {{ data.email }}
                  </a>
                </div>
              </div>
              
              <div class="flex items-center gap-4 group">
                <div class="w-12 h-12 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-2xl border border-slate-200 dark:border-zinc-700 group-hover:bg-gradient-to-br group-hover:from-teal-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-300">
                  <lucide-icon name="map-pin" [size]="20"></lucide-icon>
                </div>
                <div>
                  <p class="text-xs font-bold text-zinc-400 uppercase tracking-widest">Location</p>
                  <p class="text-zinc-900 dark:text-white font-bold">{{ data.location }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="w-full md:w-auto md:min-w-[400px] p-8 md:p-12 bg-white dark:bg-zinc-900 rounded-[3rem] border border-slate-200 dark:border-zinc-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
            <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Follow Me</h3>
            <div class="grid grid-cols-1 gap-4 pointer-events-auto">
              <a [href]="data.socials.github" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-4 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all duration-300 group font-bold cursor-pointer">
                GitHub
                <lucide-icon name="github" [size]="20"></lucide-icon>
              </a>
              <a [href]="data.socials.linkedin" target="_blank" class="flex items-center justify-between p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 rounded-2xl font-bold text-blue-600 dark:text-blue-300 hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300 group">
                LinkedIn
                <lucide-icon name="linkedin" [size]="20"></lucide-icon>
              </a>
              <a [href]="data.socials.instagram" target="_blank" class="flex items-center justify-between p-4 bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-cyan-900/30 rounded-2xl font-bold text-cyan-600 dark:text-cyan-300 hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 group">
                Instagram
                <lucide-icon name="instagram" [size]="20"></lucide-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  data = PERSONAL_DATA;
}
