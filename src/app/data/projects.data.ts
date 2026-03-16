import { Project } from '../models/project.interface';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'TACHASIS ADVISORY PLAN',
    description: 'Lead Physical Planner in the TACHASIS Advisory Plan, developing comprehensive spatial analyses and detailed land use maps to guide sustainable development and infrastructure planning for the trading centre.',
    category: 'Cartography and Physical Planning',
    imageUrl: 'Tachasis.jpg',
    tags: ['ARCGIS', 'QGIS', 'GOOGLE EARTH'],
    links: { }
  },
  {
    id: '2',
    title: 'KAMALAMBU ADVIORY PLAN',
    description: 'Lead Cartography in the Kamalambu Advisory Plan, developing comprehensive spatial analyses and detailed land use maps to guide sustainable development and infrastructure planning for the trading centre.',
    category: 'Cartography and Physical Planning',
    imageUrl: 'Kamalambu.jpg',
    tags: ['ARCGIS', 'QGIS', 'GOOGLE EARTH'],
    links: { }
  },
  {
    id: '3',
    title: 'NAVCDP, NANDI 2024',
    description: 'Lead Cartography in the National Agricultural Value Chain Development Programme (NAVCDP) for Nandi County, creating detailed land use maps and spatial data layers to optimize agricultural planning and resource allocation.',
    category: 'Cartography and Physical Planning',
    imageUrl: 'NAVCDP.jpg',
    tags: ['ARCGIS', 'QGIS', 'GOOGLE EARTH'],
    links: {}
  },
  {
    id: '4',
    title: 'TRAFFIC LIGHT PREDICTION AND MAPPING USING MACHINE LEARNING',
    description: 'Using machine learning to extract traffic lights and compute the XYZ location for each light based on the camera positions. The result is automated mapping of traffic light locations.',
    category: 'GIS and Remote sensing',
    imageUrl: 'Traffic.png',
    tags: ['Python', 'ARCGIS', 'GPX','EXIFTOOL'],
    links: { }
  },
  {
    id: '5',
    title: 'OFFSET TRACKING OF GLACIER FELLARIA IN ITALY USING REMOTE SENSING',
    description: 'Developing offset tracking methodologies for monitoring glacier movement in Italy using remote sensing data and GIS techniques.',
    category: 'GIS and Remote sensing',
    imageUrl: 'Fellaria.png',
    tags: ['OFFSET TRACKING', 'INSAR', 'SNAPPY','ARCGIS','ESA SNAP'],
    links: {}
  },
  {
    id: '6',
    title: 'BATHYMETRIC MAPPING OF CADES BAY, AUSTARLIA.',
    description: 'Conducting bathymetric mapping of Cades Bay, Australia, utilizing hydrographic survey data and GIS tools to create detailed underwater topographic maps for navigation and marine planning.',
    category: 'Cartography and Physical Planning',
    imageUrl: 'BATHY.PNG',
    tags: ['ARCGIS', 'HYDROMAGIC'],
    links: {}

  },
    {
    id: '7',
    title: '12 REPS FITNESS QUESTIONNAIRE',
    description: 'A fitness questionnaire for determining the user fitness personality thus guiding their workout plan.',
    category: 'Web development',
    imageUrl: '12reps.png',
    tags: ['PHP', 'HTML', 'CSS', 'JAVASCRIPT'],
    links: { github :'https://just12reps.com/12RepsQ/' }

  },
     {
    id: '8',
    title: 'CADASTRE EXPLORER',
    description: 'A web application for exploring and analyzing cadastre data for Nandi County, especially useful for planners, surveryors and land administrators.',
    category: 'Web development',
    imageUrl: 'nandi.png',
    tags: ['Angular', 'NodeJS', 'TypeScript', 'JAVASCRIPT'],
    links: {}

  },
       {
    id: '9',
    title: 'PROJECT AUTOGROUND: A MODEL BASED SEMI-AUTOMATIC GROUND TRUTHING TOOL CLASSIFICATION OF LAND USE AND LAND COVER USING MACHINE LEARNING',
    description: 'A model-based semi-automatic ground truthing tool for classification of land use and land cover using machine learning, designed to enhance the accuracy and efficiency of remote sensing data analysis in environmental monitoring and land management applications.',
    category: 'GIS and Remote sensing',
    imageUrl: 'autoground.png',
    tags: ['Python', 'ARCGIS', 'ML'],
    links: {}

  }
];
