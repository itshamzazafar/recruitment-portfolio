export type ServiceAudience = 'employer' | 'candidate'

export interface Service {
  id: string
  title: string
  description: string
  benefits: string[]
  audience: ServiceAudience
  icon: string
}

export const services: Service[] = [
  {
    id: 'permanent-hire',
    title: 'Permanent Hire',
    description:
      'Find long-term talent that fits your culture and drives results. We handle sourcing, screening, and shortlisting so you hire with confidence.',
    benefits: [
      'Culture-fit screening',
      'Salary benchmarking',
      '90-day replacement guarantee',
      'Dedicated account manager',
    ],
    audience: 'employer',
    icon: 'UserCheck',
  },
  {
    id: 'contract-staffing',
    title: 'Contract Staffing',
    description:
      'Scale your team quickly with pre-vetted contractors for project-based or interim roles without compromising on quality.',
    benefits: [
      'Fast turnaround (48–72 hrs)',
      'Flexible contract terms',
      'Compliance handled',
      'Specialist skill matching',
    ],
    audience: 'employer',
    icon: 'Clock',
  },
  {
    id: 'executive-search',
    title: 'Executive Search',
    description:
      'Discreet, targeted search for senior leadership and C-suite roles where the right hire transforms your organization.',
    benefits: [
      'Confidential process',
      'Global candidate network',
      'Leadership assessment',
      'Board-level reporting',
    ],
    audience: 'employer',
    icon: 'Crown',
  },
  {
    id: 'rpo',
    title: 'Recruitment Process Outsourcing',
    description:
      'Outsource part or all of your hiring function to our team — reducing time-to-hire and cost-per-hire at scale.',
    benefits: [
      'Embedded recruitment team',
      'Employer branding support',
      'Analytics & reporting',
      'Scalable volume hiring',
    ],
    audience: 'employer',
    icon: 'Building2',
  },
  {
    id: 'job-matching',
    title: 'Job Matching',
    description:
      'We connect you with roles that align with your skills, ambitions, and values — not just your résumé keywords.',
    benefits: [
      'Exclusive unadvertised roles',
      'Personal career consultant',
      'Interview preparation',
      'Salary negotiation support',
    ],
    audience: 'candidate',
    icon: 'Target',
  },
  {
    id: 'career-advice',
    title: 'Career Advice',
    description:
      'Get honest, practical guidance on your next move — whether you are exploring options or ready to make a change.',
    benefits: [
      'CV & LinkedIn review',
      'Market insights',
      'Career path planning',
      'Free initial consultation',
    ],
    audience: 'candidate',
    icon: 'Compass',
  },
  {
    id: 'interview-prep',
    title: 'Interview Preparation',
    description:
      'Walk into every interview prepared. We coach you on storytelling, competency questions, and employer expectations.',
    benefits: [
      'Mock interviews',
      'Industry-specific tips',
      'Feedback & action plan',
      'Confidence building',
    ],
    audience: 'candidate',
    icon: 'MessageSquare',
  },
]

export const employerServices = services.filter((s) => s.audience === 'employer')
export const candidateServices = services.filter((s) => s.audience === 'candidate')
