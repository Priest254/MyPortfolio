export interface PersonalDetails {
  journey: string;
  interests: string[];
  hobbies: string[];
  achievements: Achievement[];
  languages: Language[];
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
  icon?: string;
}

export interface Language {
  name: string;
  proficiency: 'Native' | 'Fluent' | 'Advanced' | 'Intermediate' | 'Basic';
}
