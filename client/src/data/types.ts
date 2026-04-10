export interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  location: string | null;
  completionDate: string | null;
  imageUrl: string;
}

export interface Equipment {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Certification {
  id: number;
  title: string;
  issuingBody: string;
  year: string;
  imageUrl: string | null;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
