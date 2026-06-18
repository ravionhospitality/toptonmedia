import { createFileRoute } from '@tanstack/react-router'

import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { Reveal } from '../lib/useReveal'
import { TEAM, CONTACT } from '../lib/site-data'
import { seoMeta, seoLinks, breadcrumbSchema } from '../lib/seo'

export const Route = createFileRoute('/team')({
  head: () => ({
    meta: seoMeta({
      title: 'Our Team | The People Behind Topton Media — Lagos Marketing Agency',
      description: 'Meet the Topton Media team — performance marketers, creative directors, SEO specialists, and growth strategists based in Lagos, Nigeria.',
      path: '/team',
    }),
    links: seoLinks('/team'),
    scripts: [{
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: 'https://toptonmedia.com' },
        { name: 'Team', url: 'https://toptonmedia.com/team' },
      ])),
    }],
  }),
  component: TeamPage,
})

function initials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="bg-charcoal pt-20 pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">The Team</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory max-w-3xl">
                Small Team.{' '}
                <span className="bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent">
                  Big Scoreboard.
                </span>
              </h1>
              <p className="mt-6 text-lg text-sand/80 leading-[1.7] max-w-2xl">
                Nine people across strategy, media, creative, and product — each one close enough to the work to know exactly why a number moved.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM.map((member, i) => (
                <Reveal key={member.name} delay={(i % 3) * 80}>
                  <article className="group bg-ivory border border-sand rounded-2xl p-7 hover:border-gold hover:shadow-lg transition-all h-full">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cardbrown to-maroon flex items-center justify-center mb-5 border border-gold/10 group-hover:border-gold/40 transition-colors">
                      <span className="font-display text-xl font-bold text-gold/80">
                        {initials(member.name)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-display text-xl font-semibold text-charcoal">{member.name}</h2>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          className="text-charcoal/40 hover:text-maroon transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-maroon font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-charcoal/60 leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map(skill => (
                        <span key={skill} className="text-[11px] px-2.5 py-1 rounded-full bg-sand/70 text-charcoal/70 font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-maroon py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="font-display text-3xl font-bold text-ivory mb-4">Want to Work With This Team?</h2>
            <a
              href={CONTACT.discoveryCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Free Audit
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
