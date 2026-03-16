export type ProjectCategory = 'GIS and Remote sensing' | 'Cartography and Physical Planning' | 'Web development' | 'App development';

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  gallery?: string[];
  category: ProjectCategory;
  imageUrl: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
}
