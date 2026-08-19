import { ClinicInfo, Service, Doctor, Testimonial, FaqItem, TransformationCase } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: 'Alamdar Bright Smile Dental Clinic',
  tagline: 'Strong Teeth, Bright Smile — Premium dental care in Quetta.',
  phone: '+92 81 282 3456',
  mobile: '+92 333 7891234',
  emergencyPhone: '+92 300 7891234',
  email: 'info@alamdarbrightsmile.pk',
  address: 'Shop#1, Tanzeem school, Main Alamdar Road, Quetta, Pakistan',
  city: 'Quetta',
  hours: [
    { days: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '12:00 PM – 6:00 PM (By Appointment)' },
  ],
  branches: [
    { city: 'Quetta (Main Clinic)', location: 'Shop#1, Tanzeem school, Main Alamdar Road' },
    { city: 'Quetta (Cantonment)', location: 'Staff College Road, Quetta Cantt' },
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
    name: 'Microscopic Root Canal Therapy',
    category: 'General',
    shortDescription:
      'Gentle, single-visit endodontic care using high-magnification dental microscopes and rotary instruments.',
    fullDescription:
      'Eliminate dental pain and save your natural tooth with high-precision rotary root canal treatment under digital anesthesia. Virtually 100% painless and completed in a single comfortable visit.',
    startingPrice: 'Rs. 18,000 / tooth',
    duration: '45 – 60 minutes',
    features: [
      'Carl Zeiss surgical operating microscope',
      'Computerized painless local anesthesia delivery',
      'Single-visit apex locator precision',
      'Reinforced core & zirconia crown fitting',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pediatric-preventive',
    name: 'Family & Pediatric Dental Care',
    category: 'General',
    shortDescription:
      'Welcoming, fear-free checkups, preventive fluoride treatments, and dental sealants for children and families in Quetta.',
    fullDescription:
      'We make dental visits enjoyable for children of all ages. Our friendly pediatric specialists focus on early habit guidance, gentle cleanings, cavity protection, and building lifelong dental confidence.',
    startingPrice: 'Rs. 4,500 / visit',
    duration: '30 – 45 minutes',
    features: [
      'Child-friendly sensory comfort & calm environment',
      'Painless pit and fissure sealants',
      'Topical mineral fluoride varnish',
      'Oral hygiene brushing coaching for parents',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-ayesha-khan',
    name: 'Dr. Ayesha Khan',
    role: 'Consultant Aesthetic & Restorative Dentist',
    experience: '14+ Years Clinical Experience',
    bio: 'Renowned for conservative porcelain veneers and digital smile design. Dr. Ayesha has transformed over 3,000 smiles with an artist’s eye for natural symmetry and facial harmony.',
    specialties: ['Digital Smile Design', 'Porcelain Veneers', 'Laser Cosmetic Dentistry'],
    credentials: ['BDS (Gold Medalist)', 'FCPS Operative Dentistry', 'AACD Active Member (USA)'],
    imageUrl:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dr-hamza-ahmed',
    name: 'Dr. Hamza Ahmed',
    role: 'Consultant Implantologist & Oral Surgeon',
    experience: '16+ Years Experience',
    bio: 'Specialist in 3D-guided computer-assisted dental implants and complex full-arch reconstructions. Dr. Hamza trained internationally before leading implantology care at Alamdar Bright Smile.',
    specialties: ['Guided Dental Implants', 'Bone Augmentation', 'Wisdom Tooth Surgery'],
    credentials: ['BDS', 'MSc Oral Implantology (Goethe Univ, Germany)', 'Fellow ICOI'],
    imageUrl:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dr-hira-malik',
    name: 'Dr. Hira Malik',
    role: 'Consultant Orthodontist & Aligner Specialist',
    experience: '11+ Years Experience',
    bio: 'Dedicated to non-extraction smile alignment and airway-friendly orthodontics for teens and adults. Certified Clear Aligner provider with a focus on comfortable, discreet bite correction.',
    specialties: ['Clear Aligners', 'Self-Ligating Braces', 'Interceptive Child Orthodontics'],
    credentials: ['BDS', 'FCPS Orthodontics', 'Certified Clear Aligner Provider'],
    imageUrl:
      'https://dentologypk.com/wp-content/uploads/2025/10/Artboard-11.webp',
  },
  {
    id: 'dr-usman-raza',
    name: 'Dr. Usman Raza',
    role: 'Consultant Endodontist & Preventive Dentist',
    experience: '12+ Years Experience',
    bio: 'An expert in microscopic single-visit root canals and painless restorative procedures. Dr. Usman focuses on absolute patient comfort, gentle touch, and zero dental anxiety.',
    specialties: ['Microscopic Root Canal', 'Painless Anesthesia', 'Preventive Family Care'],
    credentials: ['BDS', 'MCPS Operative Dentistry', 'Member European Society of Endodontology'],
    imageUrl:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
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
      'The entire experience at Alamdar Bright Smile Dental Clinic was exceptionally comfortable. The doctors explained every step using 3D scans. My veneers look so natural that even my close family couldn’t tell I had work done!',
    date: '2 weeks ago',
  },
  {
    id: 't2',
    patientName: 'Hamza K.',
    location: 'Cantt, Quetta',
    treatment: 'Guided Dental Implant',
    rating: 5,
    quote:
      'I had severe dental anxiety from childhood visits, but the clinical team on Alamdar Road was patient, gentle, and utterly professional. The implant procedure was completely painless, and I was back to work the next morning.',
    date: '1 month ago',
  },
  {
    id: 't3',
    patientName: 'Sana M.',
    location: 'Samungli Road, Quetta',
    treatment: 'Clear Aligners (Invisible Braces)',
    rating: 5,
    quote:
      'The clinic is modern, immaculately clean, and the doctors genuinely take time to understand your concerns. Having this level of international quality dental care right on Main Alamdar Road in Quetta is a blessing.',
    date: '3 weeks ago',
  },
  {
    id: 't4',
    patientName: 'Bilal Tariq',
    location: 'Jinnah Town, Quetta',
    treatment: 'Laser Whitening & Hygiene',
    rating: 5,
    quote:
      'Got laser teeth whitening done before my wedding reception. 60 minutes in the chair with zero sensitivity and a radiant result. The soothing aesthetic puts you at ease instantly.',
    date: '2 months ago',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book an appointment at Alamdar Bright Smile Dental Clinic in Quetta?',
    answer:
      'You can book online 24/7 through our website using the "Book Appointment" button, choose your preferred doctor, treatment, and time slot. You can also call or WhatsApp our clinic coordinator directly at +92 333 7891234 or +92 81 282 3456.',
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
    question: 'What is the cost of dental implants and smile makeovers in PKR?',
    answer:
      'Our initial 3D digital consultation is Rs. 2,500. Single dental implants start from Rs. 75,000 with genuine Swiss/German fixtures, and custom porcelain veneers start from Rs. 25,000 per tooth. We provide transparent, itemized written treatment estimates with no hidden charges.',
    category: 'cosmetic',
  },
  {
    id: 'faq-5',
    question: 'Do you offer installment payment plans or bank card facilities?',
    answer:
      'Yes. We offer easy installment options on major Pakistani debit and credit cards (Meezan, HBL, Alfalah, Bank of Khyber). We also provide detailed medical invoices for insurance reimbursement.',
    category: 'insurance',
  },
  {
    id: 'faq-6',
    question: 'What should I do in case of a dental emergency in Quetta?',
    answer:
      'For severe toothaches, broken teeth, or trauma, our emergency hotline is available at +92 300 7891234. We maintain reserved daily slots for immediate same-day emergency relief visits at Shop#1, Tanzeem school, Main Alamdar Road.',
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
    dentist: 'Dr. Ayesha Khan',
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
    dentist: 'Dr. Hira Malik',
    duration: '9 months',
    beforeImage:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'case-3',
    title: 'Computer-Guided Anterior Dental Implant',
    description:
      'Replaced a fractured front central incisor with a Straumann titanium implant, customized ceramic abutment, and matching zirconia crown.',
    category: 'Implantology',
    dentist: 'Dr. Hamza Ahmed',
    duration: '1 surgery + final restoration',
    beforeImage:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  },
];
