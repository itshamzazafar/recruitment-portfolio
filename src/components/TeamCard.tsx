import type { TeamMember } from '../data/team'

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <img
        src={member.image}
        alt={member.name}
        className="h-56 w-full object-cover"
        loading="lazy"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
        <p className="text-sm font-medium text-brand-600">{member.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{member.bio}</p>
      </div>
    </article>
  )
}
