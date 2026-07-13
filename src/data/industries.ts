export interface Industry {
  id: string
  name: string
  description: string
  icon: string
  image: string
}

export const industries: Industry[] = [
  {
    id: 'technology',
    name: 'Technology',
    description:
      'Software engineers, product managers, DevOps, and IT leaders for startups and enterprises.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  },
  {
    id: 'finance',
    name: 'Finance & Banking',
    description:
      'Accountants, analysts, risk managers, and finance directors across banking and fintech.',
    icon: 'Landmark',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description:
      'Clinical staff, healthcare administrators, and medical technology specialists.',
    icon: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
  {
    id: 'engineering',
    name: 'Engineering',
    description:
      'Civil, mechanical, electrical, and project engineers for infrastructure and manufacturing.',
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
  },
  {
    id: 'sales',
    name: 'Sales & Marketing',
    description:
      'Business development, account management, digital marketing, and brand leadership roles.',
    icon: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    id: 'legal',
    name: 'Legal',
    description:
      'Corporate lawyers, paralegals, compliance officers, and in-house counsel for firms and corporates.',
    icon: 'Scale',
    image: 'https://images.unsplash.com/photo-1589829545855-d10d557cf95f?w=600&h=400&fit=crop',
  },
  {
    id: 'hr',
    name: 'Human Resources',
    description:
      'HR business partners, talent acquisition specialists, and people operations leaders.',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop',
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    description:
      'Store management, supply chain, merchandising, and e-commerce operations talent.',
    icon: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
  },
]
