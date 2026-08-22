import { ClinicInfo, Service, Doctor, Testimonial, FaqItem, TransformationCase } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: 'Alamdar Bright Smile Dental Clinic',
  tagline: 'Strong Teeth, Bright Smile — Premium dental care in Quetta.',
  phone: '03158034831',
  mobile: '03170919977',
  emergencyPhone: '03158034831',
  email: 'info@alamdarbrightsmile.pk',
  address: 'Shop#1, Tanzeem school, Main Alamdar Road, Quetta, Pakistan',
  city: 'Quetta',
  social: {
    instagram: 'https://www.instagram.com/dr_ejaznourozi',
    instagramHandle: 'dr_ejaznourozi',
    tiktok: 'https://www.tiktok.com/@Ejazhussain842',
    tiktokHandle: 'Ejazhussain842',
    facebook: 'https://www.facebook.com/Dr.EjazHussainNourozi',
    facebookName: 'Dr. Ejaz Hussain Nourozi',
  },
  hours: [
    { days: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '12:00 PM – 6:00 PM (By Appointment)' },
  ],
  branches: [
    { city: 'Quetta (Main Clinic)', location: 'Shop#1, Tanzeem school, Main Alamdar Road' },
  ],
};

export const SERVICES: Service[] = [
  {
    id: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry & Veneers',
    category: 'Cosmetic',
    shortDescription:
      'Custom handcrafted porcelain veneers, composite bonding, and laser gum recontouring for a natural, harmonious smile.',
    fullDescription:
      'Our cosmetic smile design combines 3D facial aesthetic analysis with ultra-thin porcelain veneers and conservative composite sculpting at Alamdar Bright Smile Dental Clinic on Main Alamdar Road, Quetta.',
    startingPrice: 'Rs. 25,000 / tooth',
    duration: '2 – 3 visits',
    features: [
      'Digital 3D Smile Preview before starting',
      'Ultra-thin e.Max & Zirconia porcelain veneers',
      'Minimally invasive enamel preservation',
      'Shade matching for natural translucency',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dental-implants',
    name: 'Precision Dental Implants',
    category: 'Implant',
    shortDescription:
      'Computer-guided titanium & ceramic implants to permanently replace missing teeth with natural strength and stability.',
    fullDescription:
      'Restore chewing strength and smile aesthetics with our 3D CBCT-guided dental implant protocols. We use Swiss and German implant systems with lifetime biocompatibility and high success rates in Quetta.',
    startingPrice: 'Rs. 75,000 / implant',
    duration: '45 – 60 mins per implant',
    features: [
      '3D CBCT bone density mapping',
      'Guided keyhole flapless surgery options',
      'Swiss Straumann & Nobel Biocare implants',
      'Same-day provisional crown availability',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'clear-aligners',
    name: 'Clear Aligners & Orthodontics',
    category: 'Orthodontics',
    shortDescription:
      'Virtually invisible clear aligners and modern self-ligating braces to discreetly align teeth and correct bites.',
    fullDescription:
      'Straighten crooked teeth, close gaps, and correct deep bites without noticeable metal wires. Using our 3D intraoral scanner, see your complete simulated week-by-week smile progression in minutes.',
    startingPrice: 'Rs. 150,000 (Complete Plan)',
    duration: '6 – 14 months',
    features: [
      'Intraoral 3D digital scan (no gooey putty impressions)',
      'Removable, transparent, stain-resistant aligners',
      'Comfortable eating and easy brushing',
      'Quarterly in-person & digital monitoring',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'laser-teeth-whitening',
    name: 'Laser Smile Whitening',
    category: 'Cosmetic',
    shortDescription:
      'In-office Zoom! LED laser teeth whitening that brightens your enamel up to 8 shades in a single comfortable hour.',
    fullDescription:
      'Safe, monitored chairside whitening formulated with desensitizing agents to gently lift stubborn stains from tea, coffee, and daily living without damaging your tooth enamel.',
    startingPrice: 'Rs. 22,000 / session',
    duration: '60 minutes',
    features: [
      'Up to 8 shades brighter in 1 session',
      'Enamel-safe desensitizing protocol',
      'Custom take-home maintenance kit included',
      'Instant results before weddings & events',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'painless-root-canal',
    name: 'Microscopic Root Canal Therapy (C-endo)',
    category: 'General',
    shortDescription:
      'Gentle, precision endodontic care using rotary instruments and modern apex locators by our C-endo specialist.',
    fullDescription:
      'Eliminate dental pain and save your natural tooth with high-precision rotary root canal treatment under digital anesthesia. Virtually 100% painless and completed in a comfortable visit.',
    startingPrice: 'Rs. 18,000 / tooth',
    duration: '45 – 60 minutes',
    features: [
      'Specialized C-endo rotary endodontic protocol',
      'Computerized painless local anesthesia delivery',
      'Electronic apex locator precision',
      'Reinforced core & aesthetic crown restoration',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pediatric-preventive',
    name: 'Family & Preventive Dental Care',
    category: 'General',
    shortDescription:
      'Welcoming checkups, scaling, polishing, preventive fluoride treatments, and dental sealants for families in Quetta.',
    fullDescription:
      'We make dental visits enjoyable and stress-free. Our clinical focus covers early habit guidance, gentle scaling & polishing, cavity protection, and building lifelong dental wellness.',
    startingPrice: 'Rs. 4,500 / visit',
    duration: '30 – 45 minutes',
    features: [
      'Gentle, sensory-friendly clinic environment',
      'Painless pit and fissure sealants',
      'Topical mineral fluoride application',
      'Oral hygiene coaching for patients of all ages',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-ejaz-hussain-nourozi',
    name: 'Dr. Ejaz Hussain Nourozi',
    role: 'Dental Surgeon & Endodontics Specialist',
    title: 'BDS, RDS, C-endo | FJDC (Karachi)',
    experience: 'PMDC Registered Dental Surgeon',
    bio: 'Specialist in advanced restorative dentistry, microscopic endodontics (C-endo), and comprehensive clinical oral surgery. Graduate of Fatima Jinnah Dental College (FJDC), Karachi, dedicated to gentle, high-precision dental treatments on Main Alamdar Road, Quetta.',
    specialties: ['C-endo (Endodontics & Root Canal)', 'Restorative & Aesthetic Dentistry', 'Dental Surgery & Preventive Care'],
    credentials: ['BDS', 'RDS (PMDC Registered)', 'C-endo (Endodontics)', 'FJDC (Karachi)'],
    education: 'Fatima Jinnah Dental College (FJDC), Karachi',
    imageUrl:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    patientName: 'Ayesha R.',
    location: 'Alamdar Road, Quetta',
    treatment: 'Porcelain Veneers & Smile Makeover',
    rating: 5,
    quote:
      'The entire experience at Alamdar Bright Smile Dental Clinic was exceptionally comfortable. Dr. Ejaz explained every step thoroughly. My teeth look and feel so natural that my close family is amazed!',
    date: '2 weeks ago',
  },
  {
    id: 't2',
    patientName: 'Hamza K.',
    location: 'Cantt, Quetta',
    treatment: 'Root Canal Therapy (C-endo)',
    rating: 5,
    quote:
      'I had severe dental pain and was very anxious, but Dr. Ejaz Hussain Nourozi handled the root canal with extraordinary gentle care. Completely painless and relief was instant.',
    date: '1 month ago',
  },
  {
    id: 't3',
    patientName: 'Sana M.',
    location: 'Samungli Road, Quetta',
    treatment: 'Clear Aligners & Smile Alignment',
    rating: 5,
    quote:
      'The clinic is modern, immaculately clean, and the doctor genuinely takes time to understand your concerns. Having this level of quality dental care right on Main Alamdar Road in Quetta is wonderful.',
    date: '3 weeks ago',
  },
  {
    id: 't4',
    patientName: 'Bilal Tariq',
    location: 'Jinnah Town, Quetta',
    treatment: 'Laser Whitening & Hygiene',
    rating: 5,
    quote:
      'Got teeth whitening and scaling done. Thorough treatment with zero sensitivity and a radiant result. The clinic atmosphere puts you at ease right away.',
    date: '2 months ago',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book an appointment with Dr. Ejaz Hussain Nourozi in Quetta?',
    answer:
      'You can book online 24/7 through our website using the "Book Appointment" button. You can also call or WhatsApp our clinic coordinator directly at 03158034831 or 03170919977.',
    category: 'general',
  },
  {
    id: 'faq-2',
    question: 'Where is your clinic located on Alamdar Road Quetta?',
    answer:
      'We are located at Shop#1, Tanzeem school, Main Alamdar Road, Quetta, Pakistan. Dedicated parking and comfortable reception areas are available for all patients.',
    category: 'general',
  },
  {
    id: 'faq-3',
    question: 'Do you offer painless dentistry for anxious patients?',
    answer:
      'Yes, absolutely. We prioritize zero-pain protocols using computerized local anesthesia, topical numbing gels, and ultra-gentle micro-instruments in a soothing, comfortable clinic setting.',
    category: 'general',
  },
  {
    id: 'faq-4',
    question: 'What is the cost of dental procedures in PKR?',
    answer:
      'Our initial consultation is Rs. 2,500. We provide transparent, itemized written treatment estimates with no hidden charges for root canals, cosmetic restorations, and preventive care.',
    category: 'cosmetic',
  },
  {
    id: 'faq-5',
    question: 'Do you offer installment payment plans or bank card facilities?',
    answer:
      'Yes. We offer easy installment options on major Pakistani debit and credit cards (Meezan, HBL, Alfalah, Bank of Khyber). We also provide detailed medical invoices for reimbursement.',
    category: 'insurance',
  },
  {
    id: 'faq-6',
    question: 'What should I do in case of a dental emergency in Quetta?',
    answer:
      'For severe toothaches, broken teeth, or trauma, our emergency contact is available at 03158034831 / 03170919977. We maintain reserved daily slots for immediate same-day emergency relief visits at Shop#1, Tanzeem school, Main Alamdar Road.',
    category: 'emergency',
  },
];

// Helper to convert Google Drive shareable URLs into direct loadable image URLs
export const getDirectImageUrl = (url: string): string => {
  if (!url) return '';
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return url;
};

export const TRANSFORMATION_CASES: TransformationCase[] = [
  {
    id: 'case-1',
    title: 'Full Upper Smile Makeover (8 Porcelain Veneers)',
    description:
      'Corrected tetracycline discoloration, mild enamel wear, and slight asymmetry with 8 ultra-thin natural translucent e.Max veneers.',
    category: 'Cosmetic Dentistry',
    dentist: 'Dr. Ejaz Hussain Nourozi',
    duration: '2 appointments (10 days)',
    beforeImage:
      'https://lh3.googleusercontent.com/d/17QY-F4YqCmH2jC9esVWFE7THZdC5FZET',
    afterImage:
      'https://lh3.googleusercontent.com/d/1QyAFMbu05jql0j6ZubihjY0wwlTdOE4S',
  },
  {
    id: 'case-2',
    title: 'Discreet Clear Aligner Treatment & Whitening',
    description:
      'Corrected lower crowding and deep overbite without metal braces in 9 months, followed by 1 session of laser teeth whitening.',
    category: 'Orthodontics',
    dentist: 'Dr. Ejaz Hussain Nourozi',
    duration: '9 months',
    beforeImage:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'case-3',
    title: 'Precision Anterior Tooth Restoration',
    description:
      'Restored a fractured front central incisor with a matching aesthetic zirconia crown and anatomical shade blending.',
    category: 'Restorative Care',
    dentist: 'Dr. Ejaz Hussain Nourozi',
    duration: '2 sessions',
    beforeImage:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  },
];
