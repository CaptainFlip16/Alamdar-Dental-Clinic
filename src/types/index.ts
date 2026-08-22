export interface ClinicInfo {
  name: string;
  tagline: string;
  phone: string;
  mobile: string;
  emergencyPhone: string;
  email: string;
  address: string;
  city: string;
  social?: {
    instagram?: string;
    instagramHandle?: string;
    tiktok?: string;
    tiktokHandle?: string;
    facebook?: string;
    facebookName?: string;
  };
  hours: { days: string; time: string }[];
  branches?: { city: string; location: string }[];
}

export interface Service {
  id: string;
  name: string;
  category: 'cosmetic' | 'restorative' | 'orthodontics' | 'preventive' | 'pediatric' | 'implant' | 'general' | string;
  shortDescription?: string;
  description?: string;
  fullDescription?: string;
  longDescription?: string;
  tagline?: string;
  imageUrl: string;
  duration: string;
  startingPrice: string;
  features: string[];
  idealFor?: string[];
  benefits?: string[];
  procedureSteps?: string[];
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  title?: string;
  experience: string;
  bio: string;
  specialties: string[];
  credentials: string[];
  education?: string;
  imageUrl: string;
  availableDays?: string[];
}

export interface TransformationCase {
  id: string;
  title: string;
  category: string;
  treatment?: string;
  dentist: string;
  duration: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  patientAge?: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  treatment: string;
  rating: number;
  quote: string;
  date: string;
  role?: string;
  avatar?: string;
  doctorName?: string;
  verified?: boolean;
}

export interface FaqItem {
  id: string;
  category: 'general' | 'cosmetic' | 'emergency' | 'insurance' | string;
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  doctorId: string;
  preferredDate: string;
  preferredTime: string;
  isFirstVisit: boolean;
  hasDentalAnxiety: boolean;
  notes: string;
}
