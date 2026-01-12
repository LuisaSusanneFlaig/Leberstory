import React, { useEffect } from 'react'
import { navLinks } from '../../constants'

const sectionGroups = {
  definition: ['leber', 'deutschland'],
  anatomie: ['organe', 'sectionsechs', 'sectionsieben'],
  symptome: ['sectionacht', 'sectionneun'],
  diagnose: ['sectionzehn'],
  behandlung: ['sectionelf', 'sectionzwoelf'],
  prognose: ['sectiondreizehn'],
  prävention: ['sectionvierzehn'],
}

const Navbar = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const sectionId = entry.target.id

        // Check if the section is in sectionGroups
        let found = false
        for (const [navId, sections] of Object.entries(sectionGroups)) {
          if (sections.includes(sectionId)) {
            activate(navId)
            found = true
            break
          }
        }

        // If section is NOT in any group (like hero or sectionfuenfzehn), deactivate all links
        if (!found) {
          activate(null)
        }
      })
    }, observerOptions)

    // Observe all sections on the page, not just those in sectionGroups
    const allSectionIds = [
      'hero',
      ...Object.values(sectionGroups).flat(),
      'sectionfuenfzehn',
    ]

    allSectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const activate = (id) => {
    document.querySelectorAll('nav a').forEach((link) => {
      link.classList.toggle('active', link.dataset.link === id)
    })
  }

  return (
    <nav className='bg-[#858585]'>
      <div>
        <ul className='flex gap-4'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} data-link={link.id} className='px-2 py-1'>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
