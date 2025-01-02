import React from 'react';
import { Navbar } from './components/Navbar';
import { DownloadCard } from './components/DownloadCard';
import { SectionHeader } from './components/SectionHeader';
import { HomePage } from './components/HomePage';
import { programs, plugins, renders, backgrounds, sounds, materials } from './data/downloads';

function App() {
  const [currentSection, setCurrentSection] = React.useState('inicio');

  const getSectionContent = () => {
    switch (currentSection) {
      case 'programas':
        return {
          items: programs,
          title: 'Programas',
          description: 'Software profesional para creativos y desarrolladores'
        };
      case 'plugins':
        return {
          items: plugins,
          title: 'Plugins',
          description: 'Complementos y extensiones para mejorar tu flujo de trabajo'
        };
      case 'renders':
        return {
          items: renders,
          title: 'Renders',
          description: 'Recursos visuales de alta calidad para tus proyectos'
        };
      case 'fondos':
        return {
          items: backgrounds,
          title: 'Fondos',
          description: 'Fondos y texturas en alta resolución'
        };
      case 'sonidos':
        return {
          items: sounds,
          title: 'Sonidos',
          description: 'Efectos de sonido y recursos de audio'
        };
      case 'materiales':
        return {
          items: materials,
          title: 'Materiales',
          description: 'Materiales y texturas para modelado 3D'
        };
      default:
        return null;
    }
  };

  const sectionContent = getSectionContent();

  return (
    <div className="min-h-screen bg-black">
      <Navbar onNavigate={setCurrentSection} currentSection={currentSection} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentSection === 'inicio' ? (
          <HomePage onNavigate={setCurrentSection} />
        ) : sectionContent && (
          <>
            <SectionHeader title={sectionContent.title} description={sectionContent.description} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectionContent.items.map((item, index) => (
                <DownloadCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;