export type TestimonialType = 'client' | 'candidate'

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
  type: TestimonialType
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'TalentBridge understood our culture from day one. They delivered three exceptional candidates within two weeks — we hired two.',
    name: 'Sarah Ahmed',
    role: 'HR Director',
    company: 'NovaTech Solutions',
    type: 'client',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'I had been searching for months on my own. Within three weeks of working with TalentBridge, I landed a role that truly fits my goals.',
    name: 'Omar Hassan',
    role: 'Senior Software Engineer',
    company: 'Previously at FinEdge',
    type: 'candidate',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'Their executive search process was discreet, thorough, and professional. We found our new CFO faster than any previous search.',
    name: 'James Mitchell',
    role: 'CEO',
    company: 'Atlas Manufacturing',
    type: 'client',
    rating: 5,
  },
  {
    id: '4',
    quote:
      'The interview coaching made all the difference. I felt prepared and confident — and got the offer I wanted.',
    name: 'Ayesha Khan',
    role: 'Marketing Manager',
    company: 'Placed at BrightRetail',
    type: 'candidate',
    rating: 5,
  },
  {
    id: '5',
    quote:
      'We use TalentBridge for all our contract staffing needs. Consistent quality, fast turnaround, and great communication.',
    name: 'David Chen',
    role: 'Operations Lead',
    company: 'CloudScale Inc.',
    type: 'client',
    rating: 5,
  },
  {
    id: '6',
    quote:
      'They treated my career change seriously and matched me with a company that values growth. Could not recommend them more.',
    name: 'Fatima Ali',
    role: 'Product Designer',
    company: 'Placed at DesignFlow',
    type: 'candidate',
    rating: 5,
  },
]
