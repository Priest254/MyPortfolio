import { AcademicDetails } from '../models/academic.interface';

export const ACADEMIC_DATA: AcademicDetails = {
  degrees: [
    {
      institution: 'University of Nairobi',
      degree: "Bachelor of Science",
      field: 'Geospatial Engineering',
      graduationDate: 'September 2024',
      gpa: 'Second Class Honors',
      specialization: 'GIS and Remote Sensing'
    }
  ],
  courses: [
    {
      name: 'Going Places with Spatial Analysis',
      provider: 'Esri',
      completionDate: 'March 2025',
      credentialUrl: 'https://www.esri.com/training/TrainingRecord/Certificate/AllanNickson254/679a58ee0990212b1ca2e63d/-180'
    },
    {
      name: 'ArcGIS Online',
      provider: 'Esri',
      completionDate: 'September 2024',
      credentialUrl: 'https://www.esri.com/training/TrainingRecord/Certificate/AllanNickson254/671546e08a951b001a0873f4/-180'
    },
    {
      name: 'GIS',
      provider: 'Esri',
      completionDate: 'October 2024',
      credentialUrl: 'https://www.esri.com/training/TrainingRecord/Certificate/AllanNickson254/67153146126e8d001ac9af9b/-180'
    },
    {
      name: 'ArcGIS Pro: Workflows Assessment',
      provider: 'Esri',
      completionDate: 'October 2024',
      credentialUrl: 'https://www.esri.com/training/my-assessments/'
    },
    {
      name: 'Ellements of AI: Introduction to AI and Building AI',
      provider: 'Ellements of AI',
      completionDate: 'October 2021',
      credentialUrl: 'https://course.elementsofai.com/'
    }
  ]
};
