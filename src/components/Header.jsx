import { useState, useEffect } from 'react'
import '../App.scss'

function Header() {

  function useActiveSection(sectionIds) {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
      const handleScroll = () => {
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= 350 && rect.bottom >= 150) {
            setActiveId(id);
            break;
          }
        }

        const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

        if (isBottom) {
          setActiveId('contacts');
        }

      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds]);

    return activeId;
  }

  const sectionIds = ['about', 'skills', 'projects', 'contacts'];
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <nav className="nav-menu">
        {sectionIds.map(id => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? 'active' : ''}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </>
  )
}

export default Header
