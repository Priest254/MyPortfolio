import { PersonalDetails } from '../models/personal.interface';

export const PERSONAL_DATA = {
  name: 'Allan Nickson Kipkemboi',
  role: 'Geospatial Engineern & Full Stack Developer',
  email: 'akipkemboi1@gmail.com',
  location: 'Kapsabet, Kenya',
  bio: 'Expert in building data-driven web applications and spatial analysis systems. Specializing in Angular, Firebase, and GIS integrations.',
  socials: {
    github: 'https://github.com/priest254',
    linkedin: 'https://www.linkedin.com/in/kipkemboi-allan-37663228b',
    instagram: 'https://www.instagram.com/priest__254/'
  },
  personalDetails: {
    journey: 'From a curious kid fascinated by technology to a full-stack engineer passionate about solving real-world problems through code. My journey began with basic web development and evolved into specializing in spatial technologies, data visualization, and scalable systems architecture. Over 5+ years, I\'ve worked on projects ranging from enterprise integrations to geospatial analysis platforms. I thrive in collaborative environments where innovation meets practical problem-solving.',
    interests: [
      'Geospatial Technologies',
      'Machine Learning & AI',
      'Open-source Contribution',
      'Web Architecture',
      'Data Visualization',
      'Cloud Computing',
      'Ethical Hacking & Cybersecurity',
      'Urban Planning & Smart Cities',
      'Tech Reviews & Podcasting'
    ],
    hobbies: [
      'Photography & Aerial Mapping',
      'Astronomy & Space Exploration',
      'Outdoor Exploration & Hiking',
      'Abstract Art'
    ],
    languages: [
      {
        name: 'English',
        proficiency: 'Native'
      },
      {
        name: 'Swahili',
        proficiency: 'Native'
      },
      {
        name: 'Python',
        proficiency: 'Fluent'
      },
      {
        name: 'JavaScript/TypeScript',
        proficiency: 'Fluent'
      },
      {
        name: 'SQL',
        proficiency: 'Advanced'
      },
      {
        name: 'Chinese',
        proficiency: 'Beginner'
      }
    ]
  } as PersonalDetails
};
