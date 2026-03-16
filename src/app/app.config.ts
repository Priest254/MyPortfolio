import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule, Github, ExternalLink, Code, Map, Cpu, Globe, Layers, Database, Mail, MapPin, Linkedin, Twitter, GraduationCap, BookOpen, Sparkles, Heart, Zap, Users } from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ Github, ExternalLink, Code, Map, Cpu, Globe, Layers, Database, Mail, MapPin, Linkedin, Twitter, GraduationCap, BookOpen, Sparkles, Heart, Zap, Users }))
  ]
};
