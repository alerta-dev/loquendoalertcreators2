import React, { useState } from 'react';
import { Download, Home, Box, PlugIcon, Palette, Image, Music, Layers } from 'lucide-react';
import Navbar from './components/Navbar';
import ContentSection from './components/ContentSection';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const sections = [
    { id: 'inicio', name: 'Inicio', icon: Home },
    { id: 'programas', name: 'Programas', icon: Box },
    { id: 'plugins', name: 'Plugins', icon: PlugIcon },
    { id: 'renders', name: 'Renders', icon: Palette },
    { id: 'fondos', name: 'Fondos', icon: Image },
    { id: 'sonidos', name: 'Sonidos', icon: Music },
    { id: 'materiales', name: 'Materiales', icon: Layers }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 py-8">
        <ContentSection activeSection={activeSection} />
      </main>
    </div>
  );
}

export default App;