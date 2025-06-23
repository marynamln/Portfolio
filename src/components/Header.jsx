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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
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

      <div className="mobile-menu">
        <div className="mobile-menu-header" onClick={toggleMobileMenu}>
          <span className="active-section-name">
            {isMobileMenuOpen ? 'Menu' : activeSection.charAt(0).toUpperCase() + activeSection.slice(1) }
          </span>
          {isMobileMenuOpen ? 
            <div className="menu-icon" onClick={closeMobileMenu}>
              ✕
            </div> 
            :
            <span className="menu-icon">☰</span>
          }
        </div>

        <div className={`mobile-menu-dropdown ${isMobileMenuOpen ? 'open' : 'closed'}`}>
          {sectionIds.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={`mobile-menu-item ${activeSection === id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick(id);
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

      </div>
    </>
  )
}

export default Header
