import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { ProjectCategory } from '../../models/project.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="sticky top-0 z-50 w-full transition-all duration-500" [class.glass]="isScrolled" [class.py-8]="!isScrolled" [class.py-4]="isScrolled">
      <div class="container mx-auto px-6 flex items-center justify-between">
        <a href="#about" (click)="closeMobileMenu()" class="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600 dark:from-purple-400 dark:to-teal-400 hover:opacity-80 transition-opacity whitespace-nowrap z-10">
          ALLAN NICKSON KIPKEMBOI
        </a>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1 bg-white/50 dark:bg-zinc-900/50 p-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm pointer-events-auto">
          @for (item of navItems; track item.id) {
            <a 
              [href]="'#' + item.id"
              (click)="scrollTo($event, item.id)"
              [class]="'px-6 py-2.5 text-sm font-bold transition-all duration-300 rounded-full cursor-pointer ' + 
                       (activeSection === item.id 
                        ? 'bg-gradient-to-r from-purple-600 to-teal-600 text-white shadow-lg shadow-purple-600/30 dark:shadow-purple-600/20' 
                        : 'text-zinc-500 hover:text-zinc-900 hover:bg-white/80 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800/80')"
            >
              {{ item.label }}
            </a>
          }
        </nav>
        
        <!-- Hamburger Menu Button -->
        <button 
          (click)="toggleMobileMenu()"
          class="md:hidden p-2 relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
          type="button"
          [attr.aria-label]="mobileMenuOpen() ? 'Close menu' : 'Open menu'"
        >
          <span 
            class="block w-6 h-0.5 bg-zinc-900 dark:bg-white rounded transition-all duration-300 origin-center"
            [class.rotate-45]="mobileMenuOpen()"
            [class.translate-y-2]="mobileMenuOpen()"
          ></span>
          <span 
            class="block w-6 h-0.5 bg-zinc-900 dark:bg-white rounded transition-all duration-300"
            [class.opacity-0]="mobileMenuOpen()"
          ></span>
          <span 
            class="block w-6 h-0.5 bg-zinc-900 dark:bg-white rounded transition-all duration-300 origin-center"
            [class.-rotate-45]="mobileMenuOpen()"
            [class.-translate-y-2]="mobileMenuOpen()"
          ></span>
        </button>
      </div>

      <!-- Mobile Navigation Menu -->
      @if (mobileMenuOpen()) {
        <nav 
          class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-xl animate-fade-in-down"
          (click)="closeMobileMenu()"
        >
          <div class="container mx-auto px-6 py-4 space-y-2">
            @for (item of navItems; track item.id) {
              <a 
                [href]="'#' + item.id"
                (click)="scrollTo($event, item.id)"
                [class]="'block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 cursor-pointer ' + 
                         (activeSection === item.id 
                          ? 'bg-gradient-to-r from-purple-600 to-teal-600 text-white' 
                          : 'text-zinc-700 hover:text-zinc-900 hover:bg-slate-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800')"
              >
                {{ item.label }}
              </a>
            }
          </div>
        </nav>
      }
    </header>
  `
})
export class HeaderComponent {
  navItems = [
    { id: 'about', label: 'About' },
    { id: 'tech', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];
  
  activeSection = 'about';
  isScrolled = false;
  mobileMenuOpen = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
        this.updateActiveSection();
      });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  scrollTo(event: Event, id: string) {
    event.preventDefault();
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
    this.closeMobileMenu();
  }

  private updateActiveSection() {
    const sections = this.navItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = section.id;
        }
      }
    });
  }
}
