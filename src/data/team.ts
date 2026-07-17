export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Rashid Mahmood',
    role: 'Founder & Managing Director',
    bio: '15+ years in executive search. Built Talent Bridge on the belief that great hiring starts with genuine relationships.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'Emily Watson',
    role: 'Head of Client Services',
    bio: 'Emily leads our employer partnerships, ensuring every client receives a tailored, responsive recruitment experience.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Ali Raza',
    role: 'Senior Recruitment Consultant',
    bio: 'Specialist in technology and engineering placements. Ali has placed 200+ professionals across Pakistan and the GCC.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: '4',
    name: 'Nadia Farooq',
    role: 'Candidate Experience Lead',
    bio: 'Nadia ensures every candidate feels supported — from first call to offer letter and beyond.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
]
