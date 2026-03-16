export interface Degree {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
  gpa?: string;
  specialization?: string;
}

export interface Course {
  name: string;
  provider?: string;
  completionDate: string;
  credentialUrl?: string;
}

export interface AcademicDetails {
  degrees: Degree[];
  courses: Course[];
}
