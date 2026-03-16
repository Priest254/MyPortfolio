import { Injectable, signal, computed } from '@angular/core';
import { Project, ProjectCategory } from '../models/project.interface';
import { PROJECTS } from '../data/projects.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects = signal<Project[]>(PROJECTS);
  selectedCategory = signal<ProjectCategory | 'All'>('All');

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'All') {
      return this.projects();
    }
    return this.projects().filter(p => p.category === category);
  });

  setCategory(category: ProjectCategory | 'All') {
    this.selectedCategory.set(category);
  }
}
